import React, { useState, useEffect, useCallback } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import SelectComponent from 'react-select';
import mapData from './mapData';
import GameGrid from './GameGrid';
import ActionButtons from './ActionButtons';
import Inventory from './Inventory';
import Legend from './Legend';
import { handlePlayerAction, initializeLevel, moveNPC } from './gameLogic';

const GridGame = () => {
  const [state, setState] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('level1');
  const [message, setMessage] = useState(null);
  const [actionLog, setActionLog] = useState([]);
  const [stepsRemaining, setStepsRemaining] = useState(50);
  const [gameWon, setGameWon] = useState(false);
  const levels = Object.keys(mapData);

  const initializeCurrentLevel = useCallback(() => {
    const initialState = initializeLevel(mapData[currentLevel]);
    setState(initialState);
    setActionLog([{ action: 'Level Loaded', level: currentLevel, timestamp: new Date().toISOString() }]);
    setGameWon(false);
    setStepsRemaining(50);
    setMessage(null);
  }, [currentLevel]);

  useEffect(() => {
    initializeCurrentLevel();
  }, [currentLevel, initializeCurrentLevel]);

  const resetLevel = () => {
    initializeCurrentLevel();
    setActionLog(prev => [...prev, { action: 'Level Reset', level: currentLevel, timestamp: new Date().toISOString() }]);
  };

  const handlePlayerActionWrapper = useCallback((action) => {
    if (!gameWon && stepsRemaining > 0) {
      setState(prevState => {
        const newState = { ...prevState };
        if (action === 'observe') {
          newState.npc = moveNPC(newState.npc, newState.blocks, newState.treasurePots, newState.wizards);
          setActionLog(prev => [...prev, { action: 'Observe', timestamp: new Date().toISOString() }]);
        } else {
          handlePlayerAction(
            action, 
            newState, 
            setState, 
            setMessage, 
            setActionLog, 
            setStepsRemaining,
            setGameWon
          );
        }
        return newState;
      });
      setStepsRemaining(prev => prev - 1);
    }
  }, [gameWon, stepsRemaining, setMessage, setActionLog, setStepsRemaining, setGameWon]);

  const handleLevelChange = (selectedOption) => {
    setCurrentLevel(selectedOption.value);
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
      if (actions[e.key] && !gameWon && stepsRemaining > 0) {
        e.preventDefault();
        handlePlayerActionWrapper(actions[e.key]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePlayerActionWrapper, gameWon, stepsRemaining]);

  if (!state) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const levelOptions = levels.map(level => ({ value: level, label: level }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex justify-center items-center w-full max-w-5xl mb-4">
        <div className="flex space-x-4">
          <SelectComponent
            options={levelOptions}
            value={{ value: currentLevel, label: currentLevel }}
            onChange={handleLevelChange}
            className="w-48"
          />
          <button
            onClick={resetLevel}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
          >
            <RefreshCw size={20} />
          </button>
          <button
            onClick={exportActionLog}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            <Download size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex justify-center items-start space-x-8 w-full max-w-5xl">
        <div className="flex flex-col items-start w-1/4">
          <div className="text-lg font-semibold mb-2">
            Goal: {state.goal.description}
          </div>
          <div className="text-lg font-semibold mb-4">
            Steps Remaining: {stepsRemaining}
          </div>
          <Legend />
        </div>

        <div className="flex flex-col items-center w-1/2">
          <GameGrid state={state} />
          <Inventory inventory={state.inventory} />
        </div>

        <div className="w-1/4">
          <ActionButtons 
            handlePlayerAction={handlePlayerActionWrapper} 
            disabled={gameWon || stepsRemaining <= 0}
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