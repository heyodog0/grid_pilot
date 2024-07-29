import React, { useState, useEffect } from 'react';
import { Key, Lock, Unlock, HelpCircle, Square, Download } from 'lucide-react';
import mapData from './mapData'; // Import the map data

const GridGame = () => {
  const [state, setState] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('level1');
  const [actionLog, setActionLog] = useState([]);
  const levels = Object.keys(mapData);
  
  useEffect(() => {
    const loadMapFromExternal = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mapData[currentLevel]);
        }, 1000); // Simulate 1 second loading time
      });
    };



    loadMapFromExternal().then(loadedMapData => {
      setState(loadedMapData);
      setActionLog([{ action: 'Level Loaded', level: currentLevel, timestamp: new Date().toISOString() }]);
    });
  }, [currentLevel]);

  const moveNPC = (prev) => {
    const newNpc = { ...prev.npc };
    const npcMove = newNpc.movements[0];
    const newNpcX = newNpc.x + npcMove[0];
    const newNpcY = newNpc.y + npcMove[1];
    if (
      newNpcX >= 0 && newNpcX < 8 && newNpcY >= 0 && newNpcY < 8 &&
      !prev.blocks.some(block => block.x === newNpcX && block.y === newNpcY)
    ) {
      newNpc.x = newNpcX;
      newNpc.y = newNpcY;
    }
    newNpc.movements.push(newNpc.movements.shift());
    return newNpc;
  };

  const logAction = (action, details = {}) => {
    setActionLog(prevLog => [...prevLog, {
      action,
      ...details,
      timestamp: new Date().toISOString()
    }]);
  };

  // const handlePlayerAction = (action) => {
  //   setState(prev => {
  //     let newPlayer = { ...prev.player };
  //     let actionDetails = { action };

  //     if (action !== 'wait') {
  //       const dir = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[action];
  //       const newX = prev.player.x + dir[0];
  //       const newY = prev.player.y + dir[1];
  //       if (
  //         newX >= 0 && newX < 8 && newY >= 0 && newY < 8 &&
  //         !prev.blocks.some(block => block.x === newX && block.y === newY)
  //       ) {
  //         newPlayer.x = newX;
  //         newPlayer.y = newY;
  //         actionDetails.newPosition = { x: newX, y: newY };
  //       } else {
  //         actionDetails.result = 'Invalid Move';
  //         logAction('Attempted Move', actionDetails);
  //         return prev; // If move is invalid, don't update state
  //       }
  //     }
  const handlePlayerAction = (action) => {
    setState(prev => {
      let newPlayer = { ...prev.player };
      let actionDetails = { action };
      let playerMoved = false;

      if (action !== 'wait') {
        const dir = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[action];
        const newX = prev.player.x + dir[0];
        const newY = prev.player.y + dir[1];
        if (
          newX >= 0 && newX < 8 && newY >= 0 && newY < 8 &&
          !prev.blocks.some(block => block.x === newX && block.y === newY)
        ) {
          newPlayer.x = newX;
          newPlayer.y = newY;
          actionDetails.newPosition = { x: newX, y: newY };
          playerMoved = true;
        } else {
          actionDetails.result = 'Invalid Move';
          logAction('Attempted Move', actionDetails);
          return prev; // If move is invalid, don't update state
        }
      }

      const newKeys = prev.keys.filter(k => k.x !== newPlayer.x || k.y !== newPlayer.y);
      const collectedKeys = prev.keys.filter(k => k.x === newPlayer.x && k.y === newPlayer.y);
      const newInventory = [...prev.inventory, ...collectedKeys.map(k => k.color)];

      if (collectedKeys.length > 0) {
        actionDetails.collectedKeys = collectedKeys.map(k => k.color);
      }

      const newMysterySpots = prev.mysterySpots.map(spot => {
        if (spot.x === newPlayer.x && spot.y === newPlayer.y && !spot.revealed) {
          if (spot.content) {
            newInventory.push(spot.content);
            actionDetails.revealedMystery = spot.content;
          }
          return { ...spot, revealed: true };
        }
        return spot;
      });

      const door = prev.doors.find(d => d.x === newPlayer.x && d.y === newPlayer.y);
      const newOpenedDoors = [...prev.openedDoors];
      if (door && door.requiredKeys.every(color => newInventory.includes(color)) && !newOpenedDoors.includes(door.color)) {
        newOpenedDoors.push(door.color);
        actionDetails.openedDoor = door.color;
      }

      let newNpc = prev.npc;
      if (!playerMoved) {
        newNpc = moveNPC(prev);
        actionDetails.npcMove = { from: { x: prev.npc.x, y: prev.npc.y }, to: { x: newNpc.x, y: newNpc.y } };
      }

      logAction('Player Action', actionDetails);

      return { 
        ...prev, 
        player: newPlayer,
        npc: newNpc,
        mysterySpots: newMysterySpots,
        inventory: newInventory, 
        openedDoors: newOpenedDoors 
      };
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const actionMap = {
        'ArrowUp': 'up',
        'ArrowDown': 'down',
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        ' ': 'wait'
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
      <div className="relative w-64 h-64 bg-gray-300">
        {[...Array(64)].map((_, i) => {
          const x = i % 8, y = Math.floor(i / 8);
          const { player, npc, keys, doors, openedDoors, mysterySpots, blocks } = state;
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
              {mysterySpot && !mysterySpot.revealed && <HelpCircle size={20} />}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-1 w-28 h-10">
        {['red', 'green', 'blue'].map(color => (
          <div key={color} className="w-9 h-9 border flex justify-center items-center bg-gray-200">
            {state.inventory.includes(color) && <Key size={24} color={color} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridGame;
