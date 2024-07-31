// File: src/components/GridGame/GridGame.js

import React, { useState, useEffect, useCallback } from 'react';
import { Download } from 'lucide-react';
import SelectComponent from 'react-select';
import mapData from './mapData';
import GameGrid from './GameGrid';
import ActionButtons from './ActionButtons';
import Inventory from './Inventory';
import { handlePlayerAction, initiateGoalCompletion } from './gameLogic';

const GridGame = () => {
  const [state, setState] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('level1');
  const [message, setMessage] = useState(null);
  const [actionLog, setActionLog] = useState([]);
  const [goalAchieved, setGoalAchieved] = useState(false);
  const [stepsRemaining, setStepsRemaining] = useState(100);
  const levels = Object.keys(mapData);

  useEffect(() => {
    setState(mapData[currentLevel]);
    setGoalAchieved(false);
    setMessage(null);
    setStepsRemaining(100);
    setActionLog(prev => [...prev, { action: 'Level Loaded', level: currentLevel, timestamp: new Date().toISOString() }]);
  }, [currentLevel]);

  const handlePlayerActionWrapper = useCallback((action) => {
    handlePlayerAction(action, state, setState, setMessage, setActionLog, setStepsRemaining, setGoalAchieved);
  }, [state]);

  const handleLevelChange = (selectedOption) => {
    setCurrentLevel(selectedOption.value);
    setActionLog(prev => [...prev, { action: 'Level Changed', level: selectedOption.value, timestamp: new Date().toISOString() }]);
  };

  const exportActionLog = () => {
    const jsonString = JSON.stringify(actionLog, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'game-action-log.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const actions = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', ' ': 'observe' };
      if (actions[e.key] && !goalAchieved && stepsRemaining > 0) {
        e.preventDefault();
        handlePlayerActionWrapper(actions[e.key]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePlayerActionWrapper, goalAchieved, stepsRemaining]);

  if (!state) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const goalTexts = ['Slay the dragon', 'Slay the monster', 'Save the princess'];
  const levelOptions = levels.map(level => ({ value: level, label: level }));

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex justify-center space-x-2 mb-4">
        <SelectComponent
          value={{ value: currentLevel, label: currentLevel }}
          onChange={handleLevelChange}
          options={levelOptions}
          className="w-[180px]"
        />
        <button onClick={exportActionLog} className="p-2 bg-green-500 text-white rounded flex items-center">
          <Download size={16} className="mr-1" /> Export Log
        </button>
      </div>

      <div className="flex justify-center items-start space-x-8 w-full max-w-2xl">
        <div className="flex flex-col items-start w-1/5">
          <div className="text-xl font-bold mb-4">Goal: {goalTexts[state.goal]}</div>
          <div className="text-lg font-semibold mb-4">
            Steps Remaining: {stepsRemaining}
          </div>
        </div>

        <div className="flex flex-col items-center w-3/5">
          <GameGrid state={state} />
          <ActionButtons 
            handlePlayerAction={handlePlayerActionWrapper} 
            goalAchieved={goalAchieved} 
          />
        </div>

        <Inventory inventory={state.inventory} />
      </div>
      
      {message && (
        <div className="mt-4 p-2 border border-gray-300 rounded w-full max-w-2xl h-16 flex items-center justify-center">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default GridGame;
