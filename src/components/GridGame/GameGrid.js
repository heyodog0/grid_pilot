// File: src/components/GridGame/GameGrid.js

import React from 'react';

const GameGrid = ({ state }) => {
  const { player, npc, items, doors, sorcerers, blocks } = state;

  return (
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
  );
};

export default GameGrid;