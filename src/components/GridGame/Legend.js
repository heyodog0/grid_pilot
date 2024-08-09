import React from 'react';
import { PiTreasureChestBold } from "react-icons/pi";
import { GiNestedHexagons, GiGemPendant } from "react-icons/gi";

const Legend = () => {
  const legendItems = [
    { customIcon: 'player', label: 'Player' },
    { customIcon: 'npc', label: 'NPC' },
    { icon: GiGemPendant, color: 'text-red-500', label: 'Red Amulet' },
    { icon: GiGemPendant, color: 'text-blue-500', label: 'Blue Amulet' },
    { icon: GiGemPendant, color: 'text-yellow-500', label: 'Yellow Amulet' },
    { icon: GiNestedHexagons, color: 'text-red-500', label: 'Red Barrier' },
    { icon: GiNestedHexagons, customColor: 'text-red-500 text-blue-500', label: 'Red/Blue Barrier' },
    { icon: GiNestedHexagons, color: 'text-yellow-500', label: 'Yellow Barrier' },
    { icon: PiTreasureChestBold, color: 'text-yellow-500', label: 'Treasure (A, B, C)' },
    { iconPath: './icons/f.png', label: 'Red Sorcerer' },
    { iconPath: './icons/d.png', label: 'Gray Sorcerer' },
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

const renderLegendItem = ({ icon: Icon, color, label, customIcon, iconPath, customColor }) => (
  <div key={label} className="flex items-center">
    {customIcon ? (
      <div className={`w-4 h-4 rounded-full mr-2 ${customIcon === 'player' ? 'bg-yellow-500' : 'bg-red-500'}`} />
    ) : iconPath ? (
      <img src={iconPath} alt={label} className="w-4 h-4 mr-2" />
    ) : customColor ? (
      <div className="relative w-4 h-4 mr-2">
        <div className="absolute top-0 left-0 w-2 h-4 overflow-hidden">
          <Icon className="w-4 h-4 text-red-500" />
        </div>
        <div className="absolute top-0 right-0 w-2 h-4 overflow-hidden">
          <Icon className="w-4 h-4 text-blue-500 -ml-2" />
        </div>
      </div>
    ) : (
      <Icon size={16} className={`mr-2 ${color}`} />
    )}
    <span className="text-sm">{label}</span>
  </div>
);

export default Legend;