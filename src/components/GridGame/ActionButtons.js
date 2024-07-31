// File: src/components/GridGame/ActionButtons.js

import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Eye } from 'lucide-react';

const ActionButtons = ({ handlePlayerAction, goalAchieved }) => {
  const buttons = [
    { action: 'up', icon: ArrowUp, label: 'Up', gridArea: '1 / 2 / 2 / 3' },
    { action: 'left', icon: ArrowLeft, label: 'Left', gridArea: '2 / 1 / 3 / 2' },
    { action: 'observe', icon: Eye, label: 'Observe', gridArea: '2 / 2 / 3 / 3' },
    { action: 'right', icon: ArrowRight, label: 'Right', gridArea: '2 / 3 / 3 / 4' },
    { action: 'down', icon: ArrowDown, label: 'Down', gridArea: '3 / 2 / 4 / 3' }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-center">Actions</h3>
      <div className="grid grid-cols-3 gap-2 w-48 h-48 mx-auto">
        {buttons.map((button) => (
          <button 
            key={button.action}
            onClick={() => handlePlayerAction(button.action)} 
            className={`w-14 h-14 ${goalAchieved ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded flex flex-col items-center justify-center`}
            disabled={goalAchieved}
            style={{ gridArea: button.gridArea }}
          >
            <button.icon size={button.action === 'observe' ? 30 : 20} />
            <span className="text-xs">{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;