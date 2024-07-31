import React, { useState, useEffect, useCallback } from 'react';
import { Sword, FlaskRound, Pill, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Eye, Download, Grid } from 'lucide-react';
import SelectComponent from 'react-select';
import mapData from './mapData';

const GridGame = () => {
  const [state, setState] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('level1');
  const [message, setMessage] = useState(null);
  const [actionLog, setActionLog] = useState([]);
  const [goalAchieved, setGoalAchieved] = useState(false);
  const [stepsRemaining, setStepsRemaining] = useState(100);
  const [maxSteps] = useState(100);
  const levels = Object.keys(mapData);

  useEffect(() => {
    setState(mapData[currentLevel]);
    setGoalAchieved(false);
    setMessage(null);
    setStepsRemaining(maxSteps);
    setActionLog(prev => [...prev, { action: 'Level Loaded', level: currentLevel, timestamp: new Date().toISOString() }]);
  }, [currentLevel, maxSteps]);

  const handlePlayerAction = useCallback((action) => {
    if (goalAchieved || stepsRemaining <= 0) return;
  
    setState(prev => {
      if (!prev) return null;
      let { player, npc, inventory, openedDoors, items, doors, sorcerers, blocks } = prev;
      
      setStepsRemaining(steps => steps - 1);

      if (action === 'observe') {
        npc = moveNPC(npc, blocks, items, doors, sorcerers);
      } else {
        const [dx, dy] = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[action];
        const newX = player.x + dx, newY = player.y + dy;
  
        if (isValidMove(newX, newY, prev.blocks)) {
          const object = [...prev.items, ...prev.sorcerers, ...prev.doors].find(o => o.x === newX && o.y === newY);
          if (object) {
            handleInteraction(object, inventory, openedDoors);
          } else {
            player = { ...player, x: newX, y: newY };
            
          }
        }
      }
      setActionLog(prevLog => [...prevLog, { action, timestamp: new Date().toISOString() }]);
      return { ...prev, player, npc, inventory, openedDoors };
    });
  }, [goalAchieved, stepsRemaining]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const actions = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', ' ': 'observe' };
      if (actions[e.key] && !goalAchieved && stepsRemaining > 0) {
        e.preventDefault();
        handlePlayerAction(actions[e.key]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePlayerAction, goalAchieved, stepsRemaining]);

  const isValidMove = (x, y, blocks) => 
    x >= 0 && x < 9 && y >= 0 && y < 10 && !blocks.some(b => b.x === x && b.y === y);

  const moveNPC = (npc, blocks, items, doors, sorcerers) => {
    const { x, y, movements, currentMovementIndex } = npc;
    const currentMovement = movements[currentMovementIndex];
    
    if (currentMovement === 'wait') {
      return { ...npc, currentMovementIndex: (currentMovementIndex + 1) % movements.length };
    }
    
    const [dx, dy] = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[currentMovement];
    const newX = x + dx, newY = y + dy;

    const isObjectAt = (x, y) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].x === x && items[i].y === y) return true;
      }
      for (let i = 0; i < doors.length; i++) {
        if (doors[i].x === x && doors[i].y === y) return true;
      }
      for (let i = 0; i < sorcerers.length; i++) {
        if (sorcerers[i].x === x && sorcerers[i].y === y) return true;
      }
      return false;
    };

    if (isValidMove(newX, newY, blocks) && !isObjectAt(newX, newY)) {
      return { ...npc, x: newX, y: newY, currentMovementIndex: (currentMovementIndex + 1) % movements.length };
    } else {
      return { ...npc, currentMovementIndex: (currentMovementIndex + 1) % movements.length };
    }
  };

  const handleInteraction = (object, inventory, openedDoors) => {
    if (object.type && !object.requiredItems && !inventory.includes(object.type)) {
      inventory.push(object.type);
      setMessage(`You collected a ${object.type}!`);
    } else if (object.content && !object.revealed) {
      inventory.push(object.content);
      setMessage(`You found a ${object.content} from the sorcerer!`);
    } else if (object.requiredItems) {
      if (object.requiredItems.every(item => inventory.includes(item))) {
        const action = object.type === 'princess' ? 'save' : 'defeat';
        initiateGoalCompletion(object.type, action);
      } else {
        setMessage(`You need ${object.requiredItems.join(' and ')} to ${object.type === 'princess' ? 'save' : 'defeat'} the ${object.type}.`);
      }
    }
  };

  const initiateGoalCompletion = (objectType, action) => {
    setState(currentState => {
      if (!currentState) return null;
      
      const goalMap = { 0: 'dragon', 1: 'monster', 2: 'princess' };
      if (goalMap[currentState.goal] === objectType) {
        setGoalAchieved(true);
        setMessage(`You ${action}d the ${objectType}!`);
        setActionLog(prev => [...prev, { action: 'Goal Initiated', goal: goalMap[currentState.goal], timestamp: new Date().toISOString() }]);
        
        setTimeout(() => {
          setMessage(`Congratulations! You've completed the goal: ${action.charAt(0).toUpperCase() + action.slice(1)} the ${objectType}!`);
          setActionLog(prev => [...prev, { action: 'Goal Completed', goal: goalMap[currentState.goal], timestamp: new Date().toISOString() }]);
          
          setTimeout(() => {
            const nextLevelIndex = levels.indexOf(currentLevel) + 1;
            if (nextLevelIndex < levels.length) {
              setCurrentLevel(levels[nextLevelIndex]);
            } else {
              setMessage("Congratulations! You've completed all levels!");
              setActionLog(prev => [...prev, { action: 'All Levels Completed', timestamp: new Date().toISOString() }]);
            }
          }, 3000);
        }, 2000);
      }
      return {
        ...currentState,
        openedDoors: [...currentState.openedDoors, objectType]
      };
    });
  };

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

  if (!state) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const { player, npc, items, doors, sorcerers, blocks, inventory } = state;
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
        <div className="flex flex-col items-start w-1/4">
          <div className="text-xl font-bold mb-4">Goal: {goalTexts[state.goal]}</div>
          <div className="text-lg font-semibold mb-4">
            Steps Remaining: {stepsRemaining/2}
          </div>
        </div>
  
        <div className="flex flex-col items-center w-2/4">
          <div className="relative w-72 h-80 bg-gray-300 mb-4">
            {[...Array(90)].map((_, i) => {
              const x = i % 9, y = Math.floor(i / 9);
              const cellContent = [
                { condition: player.x === x && player.y === y, content: <div className="w-6 h-6 bg-yellow-500 rounded-full" /> },
                { condition: npc.x === x && npc.y === y, content: <div className="w-6 h-6 bg-red-500 rounded-full" /> },
                { condition: blocks.some(b => b.x === x && b.y === y), content: <div className="w-8 h-8 bg-gray-700" /> },
                { condition: items.some(item => item.x === x && item.y === y && item.type === 'sword'), content: <img src="./icons/a.png" alt="Sword Shop" className="w-6 h-6" /> },
                { condition: doors.some(door => door.x === x && door.y === y), content: 
                  (() => {
                    const door = doors.find(d => d.x === x && d.y === y);
                    if (!door) return null;
                    const iconMap = { dragon: 'e', monster: 'c', princess: 'b' };
                    return <img src={`./icons/${iconMap[door.type] || 'b'}.png`} alt="Door" className="w-6 h-6" />;
                  })()
                },
                { condition: sorcerers.some(s => s.x === x && s.y === y), content:
                  <img src={`./icons/${['d', 'f', 'g'][sorcerers.findIndex(s => s.x === x && s.y === y) % 3]}.png`} alt="Sorcerer" className="w-6 h-6" /> }
              ].find(item => item.condition)?.content;
  
              return (
                <div key={i} className="absolute w-8 h-8 flex justify-center items-center" style={{ left: `${x * 32}px`, top: `${y * 32}px` }}>
                  {cellContent}
                </div>
              );
            })}
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">Actions</h3>
            <div className="grid grid-cols-3 gap-2">
              <div></div>
              <button onClick={() => handlePlayerAction('up')} className={`w-14 h-14 ${goalAchieved ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded flex flex-col items-center justify-center`} disabled={goalAchieved}>
                <ArrowUp size={20} />
                <span className="text-xs">Up</span>
              </button>
              <div></div>
              <button onClick={() => handlePlayerAction('left')} className={`w-14 h-14 ${goalAchieved ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded flex flex-col items-center justify-center`} disabled={goalAchieved}>
                <ArrowLeft size={20} />
                <span className="text-xs">Left</span>
              </button>
              <button onClick={() => handlePlayerAction('observe')} className={`w-14 h-14 ${goalAchieved ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded flex flex-col items-center justify-center`} disabled={goalAchieved}>
                <Eye size={30} />
                <span className="text-xs">Observe</span>
              </button>
              <button onClick={() => handlePlayerAction('right')} className={`w-14 h-14 ${goalAchieved ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded flex flex-col items-center justify-center`} disabled={goalAchieved}>
                <ArrowRight size={20} />
                <span className="text-xs">Right</span>
              </button>
              <div></div>
              <button onClick={() => handlePlayerAction('down')} className={`w-14 h-14 ${goalAchieved ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded flex flex-col items-center justify-center`} disabled={goalAchieved}>
                <ArrowDown size={20} />
                <span className="text-xs">Down</span>
              </button>
              <div></div>
            </div>
          </div>
        </div>
  
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-2">Inventory</h3>
          <div className="flex flex-col space-y-2">
            {['sword', 'potion', 'antidote'].map(item => (
              <div key={item} className="w-16 h-16 border flex justify-center items-center bg-gray-200">
                {inventory.includes(item) && (
                  item === 'sword' ? <Sword size={24} /> :
                  item === 'potion' ? <FlaskRound size={24} /> :
                  <Pill size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {message && (
        <div className="mt-4 p-2 border border-gray-300 rounded w-full max-w-2xl h-16 flex items-center justify-center">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default GridGame
