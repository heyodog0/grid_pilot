import React from 'react';
import { Sword, FlaskRound, Pill } from 'lucide-react';

const Inventory = ({ inventory }) => {
  const itemDetails = [
    { name: 'sword', icon: Sword, color: 'text-gray-700' },
    { name: 'potion', icon: FlaskRound, color: 'text-blue-500' },
    { name: 'antidote', icon: Pill, color: 'text-green-500' }
  ];

  return (
    <div className="mt-1">
      <h3 className="text-lg font-semibold mb-2 text-center">Inventory</h3>
      <div className="flex space-x-2">
        {itemDetails.map(({ name, icon: Icon, color }) => (
          <div key={name} className="w-16 h-16 border flex justify-center items-center bg-gray-100">
            {inventory.includes(name) && <Icon size={24} className={color} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
