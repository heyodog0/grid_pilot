import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Eye } from 'lucide-react';

const ActionButtons = ({ handlePlayerAction, disabled }) => {
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
            className={`w-24 h-16 ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded flex flex-col items-center justify-center transition-colors`}
            disabled={disabled}
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