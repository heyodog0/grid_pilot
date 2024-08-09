import React from 'react';
import { GiGemPendant } from "react-icons/gi";

const Inventory = ({ inventory }) => {
  const itemDetails = [
    { name: 'redAmulet', icon: GiGemPendant, color: 'text-red-500' },
    { name: 'blueAmulet', icon: GiGemPendant, color: 'text-blue-500' },
    { name: 'yellowAmulet', icon: GiGemPendant, color: 'text-yellow-500' }
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