// File: src/components/GridGame/GridGame.js

import React, { useState, useEffect, useCallback } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import SelectComponent from 'react-select';
import mapData from './mapData';
import GameGrid from './GameGrid';
import ActionButtons from './ActionButtons';
import Inventory from './Inventory';
import Legend from './Legend';
import { handlePlayerAction, initiateGoalCompletion } from './gameLogic';

const GridGame = () => {
  const [state, setState] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('level1');
  const [message, setMessage] = useState(null);
  const [actionLog, setActionLog] = useState([]);
  const [goalAchieved, setGoalAchieved] = useState(false);
  const [stepsRemaining, setStepsRemaining] = useState(50);
  const [npcTrail, setNpcTrail] = useState([]);
  const levels = Object.keys(mapData);

  const initializeLevel = useCallback(() => {
    setState(mapData[currentLevel]);
    setGoalAchieved(false);
    setMessage(null);
    setStepsRemaining(50);
    setNpcTrail([]);
    setActionLog(prev => [...prev, { action: 'Level Loaded', level: currentLevel, timestamp: new Date().toISOString() }]);
  }, [currentLevel]);

  useEffect(() => {
    initializeLevel();
  }, [currentLevel, initializeLevel]);

  const resetLevel = () => {
    initializeLevel();
    setActionLog(prev => [...prev, { action: 'Level Reset', level: currentLevel, timestamp: new Date().toISOString() }]);
  };

  const moveToNextLevel = useCallback(() => {
    const currentIndex = levels.indexOf(currentLevel);
    if (currentIndex < levels.length - 1) {
      setCurrentLevel(levels[currentIndex + 1]);
    } else {
      setMessage("Congratulations! You've completed all levels!");
    }
  }, [currentLevel, levels]);

  const handlePlayerActionWrapper = useCallback((action) => {
    handlePlayerAction(
      action, 
      state, 
      setState, 
      setMessage, 
      setActionLog, 
      setStepsRemaining, 
      (achieved) => {
        setGoalAchieved(achieved);
        if (achieved) {
          setTimeout(() => {
            moveToNextLevel();
          }, 2000);
        }
      },
      setNpcTrail
    );
  }, [state, moveToNextLevel]);

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

  const getRequiredItems = useCallback(() => {
    if (!state) return [];
    const goalDoor = state.doors.find(door => door.type === ['dragon', 'monster', 'princess'][state.goal]);
    return goalDoor ? goalDoor.requiredItems : [];
  }, [state]);

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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex justify-center space-x-2 mb-4">
        <SelectComponent
          value={{ value: currentLevel, label: currentLevel }}
          onChange={handleLevelChange}
          options={levelOptions}
          className="w-[180px]"
        />
        <button onClick={resetLevel} className="p-2 bg-yellow-500 text-white rounded flex items-center">
          <RefreshCw size={16} className="mr-1" /> Reset Level
        </button>
        <button onClick={exportActionLog} className="p-2 bg-green-500 text-white rounded flex items-center">
          <Download size={16} className="mr-1" /> Export Log
        </button>
      </div>

      <div className="flex justify-center items-start space-x-8 w-full max-w-5xl">
        <div className="flex flex-col items-start w-1/4">
          <div className="text-xl font-bold mb-2">Goal: {goalTexts[state.goal]}</div>
          <div className="text-sm mb-4 p-2 border border-gray-300 rounded">
            Required Items:
            <ul className="list-disc list-inside">
              {getRequiredItems().map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="text-lg font-semibold mb-4">
            Steps Remaining: {stepsRemaining}
          </div>
          <Legend />
        </div>

        <div className="flex flex-col items-center w-1/2">
          <GameGrid state={state} npcTrail={npcTrail} />
          <Inventory inventory={state.inventory} />
        </div>

        <div className="w-1/4">
          <ActionButtons 
            handlePlayerAction={handlePlayerActionWrapper} 
            goalAchieved={goalAchieved} 
          />
        </div>
      </div>
      
      {message && (
        <div className="mt-4 p-2 border border-gray-300 rounded w-full max-w-3xl h-16 flex items-center justify-center">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default GridGame;
