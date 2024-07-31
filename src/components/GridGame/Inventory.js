// File: src/components/GridGame/Inventory.js

import React from 'react';
import { Sword, FlaskRound, Pill } from 'lucide-react';

const Inventory = ({ inventory }) => {
  const itemIcons = {
    sword: Sword,
    potion: FlaskRound,
    antidote: Pill
  };

  return (
    <div className="w-1/5">
      <h3 className="text-lg font-semibold mb-2">Inventory</h3>
      <div className="flex flex-col space-y-2">
        {['sword', 'potion', 'antidote'].map(item => {
          const Icon = itemIcons[item];
          return (
            <div key={item} className="w-16 h-16 border flex justify-center items-center bg-gray-200">
              {inventory.includes(item) && <Icon size={24} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inventory;