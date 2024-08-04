// File: src/components/GridGame/ActionButtons.js

import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Eye } from 'lucide-react';

const ActionButtons = ({ handlePlayerAction, goalAchieved }) => {
  const buttons = [
    { action: 'up', icon: ArrowUp, label: 'Up' },
    { action: 'left', icon: ArrowLeft, label: 'Left' },
    { action: 'observe', icon: Eye, label: 'Observe' },
    { action: 'right', icon: ArrowRight, label: 'Right' },
    { action: 'down', icon: ArrowDown, label: 'Down' }
  ];

  return (
    <div className="-ml-8">
      <h3 className="text-xl font-semibold mb-2 ml-0">Actions</h3>
      <div className="flex flex-col space-y-2">
        {buttons.map((button) => (
          <button 
            key={button.action}
            onClick={() => handlePlayerAction(button.action)} 
            className={`w-24 h-16 ${goalAchieved ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded flex flex-col items-center justify-center`}
            disabled={goalAchieved}
          >
            <button.icon 
              size={button.action === 'observe' ? 32 : 28} 
              className="mb-1"
            />
            <span className="text-sm">{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;
