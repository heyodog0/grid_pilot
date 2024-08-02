import React from 'react';
import { Sword, FlaskRound, Pill, User } from 'lucide-react';

const Legend = () => {
  const legendItems = [
    { icon: User, color: 'text-yellow-500', label: 'Player' },
    { icon: User, color: 'text-red-500', label: 'NPC' },
    { icon: Sword, color: 'text-gray-700', label: 'Sword' },
    { icon: FlaskRound, color: 'text-blue-500', label: 'Potion' },
    { icon: Pill, color: 'text-green-500', label: 'Antidote' },
    { iconPath: './icons/e.png', label: 'Dragon' },
    { iconPath: './icons/c.png', label: 'Monster' },
    { iconPath: './icons/b.png', label: 'Princess' },
    { iconPath: './icons/d.png', label: 'Sorcerer 1' },
    { iconPath: './icons/f.png', label: 'Sorcerer 2' },
    { iconPath: './icons/g.png', label: 'Sorcerer 3' },
  ];

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Legend</h3>
      <div className="space-y-2">
        {legendItems.map(({ icon: Icon, iconPath, color, label }) => (
          <div key={label} className="flex items-center">
            {Icon ? (
              <Icon size={20} className={`mr-2 ${color}`} />
            ) : (
              <img src={iconPath} alt={label} className="w-5 h-5 mr-2" />
            )}
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
