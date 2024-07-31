// File: src/components/GridGame/gameLogic.js

export const handlePlayerAction = (action, state, setState, setMessage, setActionLog, setStepsRemaining, setGoalAchieved) => {
  if (state.goalAchieved || state.stepsRemaining <= 0) return;

  setState(prev => {
    if (!prev) return null;
    let { player, npc, inventory, openedDoors, items, doors, sorcerers, blocks } = prev;
    
    setStepsRemaining(steps => steps - 1);

    if (action === 'observe') {
      npc = moveNPC(npc, blocks, items, doors, sorcerers);
    } else {
      const [dx, dy] = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[action];
      const newX = player.x + dx, newY = player.y + dy;

      if (isValidMove(newX, newY, blocks)) {
        const object = [...items, ...sorcerers, ...doors].find(o => o.x === newX && o.y === newY);
        if (object) {
          handleInteraction(object, inventory, openedDoors, setMessage, setGoalAchieved, prev.goal, setActionLog);
        } else {
          player = { ...player, x: newX, y: newY };
        }
      }
    }
    setActionLog(prevLog => [...prevLog, { action, timestamp: new Date().toISOString() }]);
    return { ...prev, player, npc, inventory, openedDoors };
  });
};

export const moveNPC = (npc, blocks, items, doors, sorcerers) => {
  const { x, y, movements, currentMovementIndex } = npc;
  const currentMovement = movements[currentMovementIndex];
  
  if (currentMovement === 'wait') {
    return { ...npc, currentMovementIndex: (currentMovementIndex + 1) % movements.length };
  }
  
  const [dx, dy] = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[currentMovement];
  const newX = x + dx, newY = y + dy;

  const isObjectAt = (x, y) => [...items, ...doors, ...sorcerers].some(obj => obj.x === x && obj.y === y);

  if (isValidMove(newX, newY, blocks) && !isObjectAt(newX, newY)) {
    return { ...npc, x: newX, y: newY, currentMovementIndex: (currentMovementIndex + 1) % movements.length };
  } else {
    return { ...npc, currentMovementIndex: (currentMovementIndex + 1) % movements.length };
  }
};

export const isValidMove = (x, y, blocks) => 
  x >= 0 && x < 9 && y >= 0 && y < 10 && !blocks.some(b => b.x === x && b.y === y);

export const handleInteraction = (object, inventory, openedDoors, setMessage, setGoalAchieved, goal, setActionLog) => {
  if (object.type && !object.requiredItems && !inventory.includes(object.type)) {
    inventory.push(object.type);
    setMessage(`You collected a ${object.type}!`);
  } else if (object.content && !object.revealed) {
    inventory.push(object.content);
    setMessage(`You found a ${object.content} from the sorcerer!`);
  } else if (object.requiredItems) {
    if (object.requiredItems.every(item => inventory.includes(item))) {
      const action = object.type === 'princess' ? 'save' : 'defeat';
      initiateGoalCompletion(object.type, action, goal, setGoalAchieved, setMessage, setActionLog);
    } else {
      setMessage(`You need ${object.requiredItems.join(' and ')} to ${object.type === 'princess' ? 'save' : 'defeat'} the ${object.type}.`);
    }
  }
};

export const initiateGoalCompletion = (objectType, action, goal, setGoalAchieved, setMessage, setActionLog) => {
  const goalMap = { 0: 'dragon', 1: 'monster', 2: 'princess' };
  if (goalMap[goal] === objectType) {
    setGoalAchieved(true);
    setMessage(`You ${action}d the ${objectType}!`);
    setActionLog(prev => [...prev, { action: 'Goal Initiated', goal: goalMap[goal], timestamp: new Date().toISOString() }]);
    
    setTimeout(() => {
      setMessage(`Congratulations! You've completed the goal: ${action.charAt(0).toUpperCase() + action.slice(1)} the ${objectType}!`);
      setActionLog(prev => [...prev, { action: 'Goal Completed', goal: goalMap[goal], timestamp: new Date().toISOString() }]);
    }, 2000);
  }
};