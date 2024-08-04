// File: src/components/GridGame/Legend.js

import React from 'react';
import { Sword, FlaskRound, Pill } from 'lucide-react';

const Legend = () => {
  const legendItems = [
    { customIcon: 'player', label: 'Player' },
    { customIcon: 'npc', label: 'NPC' },
    { icon: Sword, color: 'text-gray-700', label: 'Sword' },
    { icon: FlaskRound, color: 'text-purple-500', label: 'Poison' },
    { icon: Pill, color: 'text-green-500', label: 'Antidote' },
    { iconPath: './icons/e.png', label: 'Dragon' },
    { iconPath: './icons/c.png', label: 'Monster' },
    { iconPath: './icons/b.png', label: 'Princess' },
    { iconPath: './icons/d.png', label: 'Sorcerer 1' },
    { iconPath: './icons/f.png', label: 'Sorcerer 2' },
    { iconPath: './icons/g.png', label: 'Sorcerer 3' },
    { iconPath: './icons/a.png', label: 'Sword Shop' },
  ];

  // Split items into two columns
  const midpoint = Math.ceil(legendItems.length / 2);
  const leftColumn = legendItems.slice(0, midpoint);
  const rightColumn = legendItems.slice(midpoint);

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Legend</h3>
      <div className="flex space-x-4">
        <div className="space-y-1">
          {leftColumn.map(renderLegendItem)}
        </div>
        <div className="space-y-1">
          {rightColumn.map(renderLegendItem)}
        </div>
      </div>
    </div>
  );
};

const renderLegendItem = ({ icon: Icon, iconPath, color, label, customIcon }) => (
  <div key={label} className="flex items-center">
    {customIcon ? (
      <div className={`w-4 h-4 rounded-full mr-2 ${customIcon === 'player' ? 'bg-yellow-500' : 'bg-red-500'}`} />
    ) : Icon ? (
      <Icon size={16} className={`mr-2 ${color}`} />
    ) : (
      <img src={iconPath} alt={label} className="w-4 h-4 mr-2" />
    )}
    <span className="text-sm">{label}</span>
  </div>
);

export default Legend;
