// File: src/components/GridGame/GameGrid.js

import React from 'react';

// GameGrid component renders the game board with all game elements
const GameGrid = ({ state }) => {
  // Destructure the state to get positions of various game elements
  const { player, npc, items, doors, sorcerers, blocks } = state;

  return (
    // Main container for the game grid
    <div className="relative w-72 h-80 bg-gray-300 mb-4">
      {/* Create a 9x10 grid of cells */}
      {[...Array(90)].map((_, i) => {
        // Calculate x and y coordinates for each cell
        const x = i % 9, y = Math.floor(i / 9);

        // Define content for each cell based on game state
        const cellContent = [
          // Player
          { condition: player.x === x && player.y === y, content: <div className="w-6 h-6 bg-yellow-500 rounded-full" /> },
          // NPC (Non-Player Character)
          { condition: npc.x === x && npc.y === y, content: <div className="w-6 h-6 bg-red-500 rounded-full" /> },
          // Blocks (obstacles)
          { condition: blocks.some(b => b.x === x && b.y === y), content: <div className="w-8 h-8 bg-gray-700" /> },
          // Items (currently only sword)
          { condition: items.some(item => item.x === x && item.y === y && item.type === 'sword'), content: <img src="./icons/a.png" alt="Sword Shop" className="w-6 h-6" /> },
          // Doors (with different icons based on type)
          { condition: doors.some(door => door.x === x && door.y === y), content: 
            (() => {
              const door = doors.find(d => d.x === x && d.y === y);
              if (!door) return null;
              const iconMap = { dragon: 'e', monster: 'c', princess: 'b' };
              return <img src={`./icons/${iconMap[door.type] || 'b'}.png`} alt="Door" className="w-6 h-6" />;
            })()
          },
          // Sorcerers (with rotating icons)
          { condition: sorcerers.some(s => s.x === x && s.y === y), content:
            <img src={`./icons/${['d', 'f', 'g'][sorcerers.findIndex(s => s.x === x && s.y === y) % 3]}.png`} alt="Sorcerer" className="w-6 h-6" /> }
        ].find(item => item.condition)?.content;

        // Render each cell
        return (
          <div 
            key={i} 
            className="absolute w-8 h-8 flex justify-center items-center" 
            style={{ left: `${x * 32}px`, top: `${y * 32}px` }}
          >
            {cellContent}
          </div>
        );
      })}
    </div>
  );
};

export default GameGrid;
