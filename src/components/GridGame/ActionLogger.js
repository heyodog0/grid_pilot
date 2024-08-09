import React, { useState, useImperativeHandle, forwardRef } from 'react';

const ActionLogger = forwardRef((props, ref) => {
  const [actionLog, setActionLog] = useState([]);

  useImperativeHandle(ref, () => ({
    addAction: (action) => {
      setActionLog(prevLog => [...prevLog, action]);
    },
    getActionLog: () => actionLog
  }));

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  const getActionDescription = (action) => {
    switch (action.type) {
      case 'MOVE':
        return `Moved ${action.direction}`;
      case 'OBSERVE':
        return 'Observed surroundings';
      case 'INTERACT':
        return `Interacted with ${action.target}`;
      case 'COLLECT':
        return `Collected ${action.item}`;
      case 'LEVEL_CHANGE':
        return `Changed to level ${action.level}`;
      case 'LEVEL_RESET':
        return 'Reset level';
      case 'GAME_START':
        return 'Started new game';
      case 'GAME_END':
        return `Game ended - ${action.result}`;
      case 'WAIT':
        return 'Waited';
      default:
        return `Performed action: ${action.type}`;
    }
  };

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded max-h-60 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-2">Action Log</h3>
      <ul className="space-y-1">
        {actionLog.map((action, index) => (
          <li key={index} className="text-sm">
            <span className="font-mono text-gray-500">{formatTimestamp(action.timestamp)}</span>
            {' - '}
            <span>{getActionDescription(action)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ActionLogger;