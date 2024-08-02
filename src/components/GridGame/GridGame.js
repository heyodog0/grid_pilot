// File: src/components/GridGame/GridGame.js

import React, { useState, useEffect, useCallback } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import SelectComponent from 'react-select';
import mapData from './mapData';
import GameGrid from './GameGrid';
import ActionButtons from './ActionButtons';
import Inventory from './Inventory';
import { handlePlayerAction, initiateGoalCompletion } from './gameLogic';

// Main component for the Grid Game
const GridGame = () => {
  // State variables
  const [state, setState] = useState(null);  // Holds the current game state
  const [currentLevel, setCurrentLevel] = useState('level1');  // Current level being played
  const [message, setMessage] = useState(null);  // Message to display to the player
  const [actionLog, setActionLog] = useState([]);  // Log of player actions
  const [goalAchieved, setGoalAchieved] = useState(false);  // Whether the level goal has been achieved
  const [stepsRemaining, setStepsRemaining] = useState(50);  // Number of steps player has left
  const levels = Object.keys(mapData);  // Available levels

  // Function to initialize or reset the game state
  const initializeLevel = useCallback(() => {
    setState(mapData[currentLevel]);
    setGoalAchieved(false);
    setMessage(null);
    setActionLog(prev => [...prev, { action: 'Level Loaded', level: currentLevel, timestamp: new Date().toISOString() }]);
  }, [currentLevel]);

  // Effect to initialize the game state when the level changes
  useEffect(() => {
    initializeLevel();
  }, [currentLevel, initializeLevel]);

  // Function to reset the current level
  const resetLevel = () => {
    initializeLevel();
    setActionLog(prev => [...prev, { action: 'Level Reset', level: currentLevel, timestamp: new Date().toISOString() }]);
  };

  // Function to move to the next level
  const moveToNextLevel = useCallback(() => {
    const currentIndex = levels.indexOf(currentLevel);
    if (currentIndex < levels.length - 1) {
      setCurrentLevel(levels[currentIndex + 1]);
    } else {
      setMessage("Congratulations! You've completed all levels!");
    }
  }, [currentLevel, levels]);

  // Wrapper function for handling player actions
  const handlePlayerActionWrapper = useCallback((action) => {
    handlePlayerAction(action, state, setState, setMessage, setActionLog, setStepsRemaining, (achieved) => {
      setGoalAchieved(achieved);
      if (achieved) {
        setTimeout(() => {
          moveToNextLevel();
        }, 2000);
      }
    });
  }, [state, moveToNextLevel]);

  // Handler for changing levels
  const handleLevelChange = (selectedOption) => {
    setCurrentLevel(selectedOption.value);
    setActionLog(prev => [...prev, { action: 'Level Changed', level: selectedOption.value, timestamp: new Date().toISOString() }]);
  };

  // Function to export the action log as a JSON file
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

  // Effect to handle keyboard inputs for game actions
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

  // Loading state
  if (!state) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  // Game goals and level options for the dropdown
  const goalTexts = ['Slay the dragon', 'Slay the monster', 'Save the princess'];
  const levelOptions = levels.map(level => ({ value: level, label: level }));

  // Render the game interface
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Level selection, reset button, and action log export */}
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

      {/* Main game area */}
      <div className="flex justify-center items-start space-x-8 w-full max-w-3xl">
        {/* Left column: Goal and Steps */}
        <div className="flex flex-col items-start w-1/4">
          <div className="text-xl font-bold mb-4">Goal: {goalTexts[state.goal]}</div>
          <div className="text-lg font-semibold mb-4">
            Steps Remaining: {stepsRemaining}
          </div>
        </div>

        {/* Center column: Game Grid and Inventory */}
        <div className="flex flex-col items-center w-1/2">
          <GameGrid state={state} />
          <Inventory inventory={state.inventory} />
        </div>

        {/* Right column: Action Buttons */}
        <div className="w-1/4">
          <ActionButtons 
            handlePlayerAction={handlePlayerActionWrapper} 
            goalAchieved={goalAchieved} 
          />
        </div>
      </div>
      
      {/* Message display area */}
      {message && (
        <div className="mt-4 p-2 border border-gray-300 rounded w-full max-w-2xl h-16 flex items-center justify-center">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default GridGame;
