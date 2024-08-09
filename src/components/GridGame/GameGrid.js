import React from 'react';
import { PiTreasureChestBold } from "react-icons/pi";
import { GiNestedHexagons } from "react-icons/gi";
import NPCTrail from './NPCTrail';

const GameGrid = ({ state }) => {
  const { player, npc, barriers, treasurePots, wizards, blocks } = state;

  return (
    <div className="relative w-[432px] h-[480px] bg-gray-100 mb-4">
      <NPCTrail npc={npc} currentMovementIndex={npc.currentMovementIndex} />
      {[...Array(90)].map((_, i) => {
        const x = i % 9, y = Math.floor(i / 9);

        const cellContent = [
          { condition: player.x === x && player.y === y, content: <div className="w-9 h-9 bg-yellow-500 rounded-full" /> },
          { condition: npc.x === x && npc.y === y, content: <div className="w-9 h-9 bg-red-500 rounded" /> },
          { condition: blocks.some(b => b.x === x && b.y === y), content: <div className="w-12 h-12 bg-gray-700" /> },
          { condition: barriers.some(barrier => barrier.x === x && barrier.y === y), content:
            (() => {
              const barrier = barriers.find(b => b.x === x && b.y === y);
              return barrier ? (
                <div className="relative w-12 h-12">
                  {barrier.color.includes('text-red-500') && barrier.color.includes('text-blue-500') ? (
                    <>
                      <div className="absolute top-0 left-0 w-6 h-12 overflow-hidden">
                        <GiNestedHexagons className="w-12 h-12 text-red-500" />
                      </div>
                      <div className="absolute top-0 right-0 w-6 h-12 overflow-hidden">
                        <GiNestedHexagons className="w-12 h-12 text-blue-500 -ml-6" />
                      </div>
                    </>
                  ) : (
                    <GiNestedHexagons className={`w-12 h-12 ${barrier.color}`} />
                  )}
                </div>
              ) : null;
            })()
          },
          { condition: treasurePots.some(pot => pot.x === x && pot.y === y), content:
            (() => {
              const pot = treasurePots.find(p => p.x === x && p.y === y);
              return pot ? (
                <div className="relative w-12 h-12">
                  <PiTreasureChestBold className={`w-12 h-12 ${pot.color}`} />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black font-bold text-lg">
                    {pot.label}
                  </div>
                </div>
              ) : null;
            })()
          },
          { condition: wizards.some(w => w.x === x && w.y === y), content:
            (() => {
              const wizard = wizards.find(w => w.x === x && w.y === y);
              return wizard ? (
                <img 
                  src={wizard.color === 'text-red-500' ? './icons/f.png' : './icons/d.png'} 
                  alt={wizard.color === 'text-red-500' ? 'Sorcerer 1' : 'Sorcerer 2'}
                  className="w-12 h-12"
                />
              ) : null;
            })()
          }
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