import React, { useState, useEffect } from 'react';
import { 
  Key, 
  Lock, 
  Unlock, 
  HelpCircle, 
  Download, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight, 
  Eye,
} from 'lucide-react';
import mapData from './mapData';

const GridGame = () => {
  const [state, setState] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('level1');
  const [actionLog, setActionLog] = useState([]);
  const [message, setMessage] = useState(null);
  const levels = Object.keys(mapData);
  
  useEffect(() => {
    const loadMapFromExternal = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mapData[currentLevel]);
        }, 100);
      });
    };

    loadMapFromExternal().then(loadedMapData => {
      setState(loadedMapData);
      setActionLog([{ action: 'Level Loaded', level: currentLevel, timestamp: new Date().toISOString() }]);
    });
  }, [currentLevel]);

  const moveNPC = (prevState) => {
    const { npc, blocks } = prevState;
    let newNPC = { ...npc };
    let moved = false;
    let attemptCount = 0;

    while (!moved && attemptCount < npc.movements.length) {
      const currentAction = npc.movements[newNPC.currentMovementIndex];
      const dir = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[currentAction];
      const newX = newNPC.x + dir[0];
      const newY = newNPC.y + dir[1];

      if (isValidMove(newX, newY, blocks)) {
        newNPC.x = newX;
        newNPC.y = newY;
        moved = true;
      }

      newNPC.currentMovementIndex = (newNPC.currentMovementIndex + 1) % npc.movements.length;
      attemptCount++;
    }

    return { 
      ...prevState, 
      npc: newNPC
    };
  };
  
  const logAction = (action, details = {}) => {
    setActionLog(prevLog => [...prevLog, {
      action,
      ...details,
      timestamp: new Date().toISOString()
    }]);
  };

  const handlePlayerAction = (action) => {
    setState(prev => {
      let newState = { ...prev };
      let actionDetails = { action };

      if (action === 'observe') {
        newState = moveNPC(newState);
        logAction('Player Observed, NPC Moved', actionDetails);
        // setMessage("You observe your surroundings. The NPC moves.");
        return newState;
      }

      const { player, keys, mysterySpots, doors, blocks, inventory, openedDoors } = newState;
      let newPlayer = { ...player };
      let newInventory = [...inventory];
      let newOpenedDoors = [...openedDoors];

      const dir = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[action];
      const newX = player.x + dir[0];
      const newY = player.y + dir[1];

      if (isValidMove(newX, newY, blocks)) {
        const interactiveObject = findInteractiveObject(newX, newY, keys, mysterySpots, doors);

        if (interactiveObject) {
          handleInteraction(interactiveObject, newInventory, newOpenedDoors, actionDetails);
        } else {
          newPlayer = { x: newX, y: newY };
        }
      } else {
        // setMessage("You can't move there.");
      }

      const newMysterySpots = updateMysterySpots(mysterySpots, newPlayer);

      logAction('Player Action', actionDetails);

      return {
        ...newState,
        player: newPlayer,
        mysterySpots: newMysterySpots,
        inventory: newInventory,
        openedDoors: newOpenedDoors
      };
    });
  };

  // const handlePlayerAction = (action) => {
  //   setState(prev => {
  //     let newState = { ...prev };
  //     let actionDetails = { action };

  //     if (action === 'observe') {
  //       moveNPC();
  //       logAction('Player Observed, NPC Moved', actionDetails);
  //       return newState;
  //     }

  //     const { player, keys, mysterySpots, doors, blocks, inventory, openedDoors } = prev;
  //     let newPlayer = { ...player };
  //     let newInventory = [...inventory];
  //     let newOpenedDoors = [...openedDoors];

  //     const dir = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[action];
  //     const newX = player.x + dir[0];
  //     const newY = player.y + dir[1];

  //     if (isValidMove(newX, newY, blocks)) {
  //       const interactiveObject = findInteractiveObject(newX, newY, keys, mysterySpots, doors);

  //       if (interactiveObject) {
  //         handleInteraction(interactiveObject, newInventory, newOpenedDoors, actionDetails);
  //       } else {
  //         newPlayer = { x: newX, y: newY };
  //       }
  //     }

  //     const newMysterySpots = updateMysterySpots(mysterySpots, newPlayer);

  //     logAction('Player Action', actionDetails);

  //     return { 
  //       ...newState, 
  //       player: newPlayer,
  //       mysterySpots: newMysterySpots,
  //       inventory: newInventory, 
  //       openedDoors: newOpenedDoors 
  //     };
  //   });
  // };

  const isValidMove = (x, y, blocks) => 
    x >= 0 && x < 9 && y >= 0 && y < 10 && !blocks.some(block => block.x === x && block.y === y);

  const findInteractiveObject = (x, y, ...objectArrays) => 
    objectArrays.flat().find(obj => obj && obj.x === x && obj.y === y);

  
  const handleInteraction = (object, inventory, openedDoors, actionDetails) => {
    if (object.color && !object.requiredKeys && !inventory.includes(object.color)) {
      // This is a key, not a door
      inventory.push(object.color);
      actionDetails.collectedKey = object.color;
      setMessage(`You collected a ${object.color} key!`);
    } else if (object.content && !object.revealed) {
      // This is a mystery spot
      inventory.push(object.content);
      actionDetails.revealedMystery = object.content;
      setMessage(`You found a ${object.content} in the mystery spot!`);
    } else if (object.requiredKeys) {
      // This is a door
      if (object.requiredKeys.every(color => inventory.includes(color)) && !openedDoors.includes(object.color)) {
        openedDoors.push(object.color);
        actionDetails.openedDoor = object.color;
        setMessage(`You opened the ${object.color} door!`);
      } else if (!object.requiredKeys.every(color => inventory.includes(color))) {
        setMessage(`You need ${object.requiredKeys.join(' and ')} key(s) to open this door.`);
      } else {
        setMessage(`The ${object.color} door is already open.`);
      }
    }
  };
  // const handleInteraction = (object, inventory, openedDoors, actionDetails) => {
  //   if (object.color && !inventory.includes(object.color)) {
  //     inventory.push(object.color);
  //     actionDetails.collectedKey = object.color;
  //     setMessage(`You collected a ${object.color} key!`);
  //   }
  //   if (object.content && !object.revealed) {
  //     inventory.push(object.content);
  //     actionDetails.revealedMystery = object.content;
  //     setMessage(`You found a ${object.content} in the mystery spot!`);
  //   }
  //   if (object.requiredKeys && object.requiredKeys.every(color => inventory.includes(color)) && !openedDoors.includes(object.color)) {
  //     openedDoors.push(object.color);
  //     actionDetails.openedDoor = object.color;
  //     setMessage(`You opened the ${object.color} door!`);
  //   }
  //   // actionDetails.interactedWith = object.type || object.color;
  // };

  const updateMysterySpots = (spots, player) => 
    spots.map(spot => spot.x === player.x && spot.y === player.y ? { ...spot, revealed: true } : spot);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const actionMap = {
        'ArrowUp': 'up',
        'ArrowDown': 'down',
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        ' ': 'observe'
      };
      const action = actionMap[e.key];
      if (action) {
        handlePlayerAction(action);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    logAction('Level Change', { newLevel: level });
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
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 100000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!state) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <div className="flex flex-wrap justify-center space-x-2 mb-4">
        {levels.map((level) => (
          <button 
            key={level}
            onClick={() => handleLevelChange(level)} 
            className={`p-2 ${currentLevel === level ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded mb-2`}
          >
            {level}
          </button>
        ))}
        <button onClick={exportActionLog} className="p-2 bg-green-500 text-white rounded flex items-center mb-2">
          <Download size={16} className="mr-1" /> Export Log
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <div className="relative w-72 h-80 bg-gray-300">
            {[...Array(90)].map((_, i) => {
              const x = i % 9, y = Math.floor(i / 9);
              const { player, npc, keys, doors, openedDoors, mysterySpots, blocks} = state;
              const key = keys.find(k => k.x === x && k.y === y);
              const door = doors.find(d => d.x === x && d.y === y);
              const mysterySpot = mysterySpots.find(s => s.x === x && s.y === y);
              const block = blocks.find(b => b.x === x && b.y === y);
              const isNPC = npc.x === x && npc.y === y;
              
              return (
                <div key={i} className="absolute w-8 h-8 flex justify-center items-center"
                     style={{ left: `${x * 32}px`, top: `${y * 32}px` }}>
                  {player.x === x && player.y === y && (
                    <div className="w-6 h-6 bg-yellow-500 rounded-full" />
                  )}
                  {isNPC && (
                    <div className="w-6 h-6 bg-red-500 rounded-full" />
                  )}
                  {block && (
                    <div className="w-8 h-8 bg-gray-700" />
                  )}
                  {key && <Key size={20} color={key.color} />}
                  {door && (openedDoors.includes(door.color) ? 
                    <Unlock size={20} color={door.color} fill={door.color} /> : 
                    <Lock size={20} color={door.color} />
                  )}
                  {mysterySpot && <HelpCircle size={20} />}

                </div>
              );
            })}
          </div>
          <div className="ml-4 flex">
            <div className="grid grid-cols-1 gap-2">
              {['up', 'left', 'observe', 'right', 'down'].map((action) => (
                <button
                  key={action}
                  onClick={() => handlePlayerAction(action)}
                  className="w-12 h-12 bg-blue-500 text-white rounded flex items-center justify-center"
                >
                  {action === 'up' && <ArrowUp size={24} />}
                  {action === 'down' && <ArrowDown size={24} />}
                  {action === 'left' && <ArrowLeft size={24} />}
                  {action === 'right' && <ArrowRight size={24} />}
                  {action === 'observe' && <Eye size={24} />}
                </button>
              ))}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold mb-2">Inventory</h3>
              <div className="grid grid-cols-1 gap-2 w-12">
                {['red', 'green', 'blue', 'yellow', 'purple'].map(color => (
                  <div key={color} className="w-12 h-12 border flex justify-center items-center bg-gray-200">
                    {state.inventory.includes(color) && <Key size={24} color={color} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {message && (
          <div className="mt-4 p-2 border border-gray-300 rounded w-full h-16 flex items-center justify-center">
          <p>{message || "Game messages will appear here."}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridGame;
