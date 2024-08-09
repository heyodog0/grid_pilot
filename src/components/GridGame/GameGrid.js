import React from 'react';
import NPCTrail from './NPCTrail';

const GameGrid = ({ state }) => {
  const { player, npc, items, doors, sorcerers, blocks } = state;

  return (
    <div className="relative w-[432px] h-[480px] bg-gray-100 mb-4">
      <NPCTrail npc={npc} currentMovementIndex={npc.currentMovementIndex} />
      {[...Array(90)].map((_, i) => {
        const x = i % 9, y = Math.floor(i / 9);

        const cellContent = [
          { condition: player.x === x && player.y === y, content: <div className="w-12 h-12 bg-yellow-500 rounded-full" /> },
          { condition: npc.x === x && npc.y === y, content: <div className="w-12 h-12 bg-red-500 rounded-full" /> },
          { condition: blocks.some(b => b.x === x && b.y === y), content: <div className="w-12 h-12 bg-gray-700" /> },
          { condition: items.some(item => item.x === x && item.y === y && item.type === 'sword'), content: <img src="./icons/a.png" alt="Sword Shop" className="w-12 h-12" /> },
          { condition: doors.some(door => door.x === x && door.y === y), content: 
            (() => {
              const door = doors.find(d => d.x === x && d.y === y);
              if (!door) return null;
              const iconMap = { dragon: 'e', monster: 'c', princess: 'b' };
              return <img src={`./icons/${iconMap[door.type] || 'b'}.png`} alt="Door" className="w-12 h-12" />;
            })()
          },
          { condition: sorcerers.some(s => s.x === x && s.y === y), content:
            <img src={`./icons/${['d', 'f', 'g'][sorcerers.findIndex(s => s.x === x && s.y === y) % 3]}.png`} alt="Sorcerer" className="w-12 h-12" /> }
        ].find(item => item.condition)?.content;

        return (
          <div 
            key={i} 
            className="absolute w-12 h-12 flex justify-center items-center" 
            style={{ left: `${x * 48}px`, top: `${y * 48}px` }}
          >
            {cellContent}
          </div>
        );
      })}
    </div>
  );
};

export default GameGrid;
