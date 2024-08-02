// File: src/components/GridGame/gameLogic.js

// Main function to handle player actions
export const handlePlayerAction = (action, state, setState, setMessage, setActionLog, setStepsRemaining, setGoalAchieved) => {
    // Check if the game is over (goal achieved or no steps remaining)
    if (state.goalAchieved || state.stepsRemaining <= 0) return;
  
    setState(prev => {
      if (!prev) return null;
      // Destructure the current state
      let { player, npc, inventory, openedDoors, items, doors, sorcerers, blocks } = prev;
      
      // Decrement the remaining steps
      setStepsRemaining(steps => steps - 1);
  
      if (action === 'observe') {
        // If the action is 'observe', only move the NPC
        npc = moveNPC(npc, blocks, items, doors, sorcerers);
      } else {
        // For movement actions, calculate the new position
        const [dx, dy] = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[action];
        const newX = player.x + dx, newY = player.y + dy;
  
        // Check if the move is valid (within bounds and not blocked)
        if (isValidMove(newX, newY, blocks)) {
          // Check if there's an object at the new position
          const object = [...items, ...sorcerers, ...doors].find(o => o.x === newX && o.y === newY);
          if (object) {
            // If there's an object, handle the interaction
            handleInteraction(object, inventory, openedDoors, setMessage, setGoalAchieved, prev.goal, setActionLog);
          } else {
            // If there's no object, move the player
            player = { ...player, x: newX, y: newY };
          }
        }
      }
      // Log the action
      setActionLog(prevLog => [...prevLog, { action, timestamp: new Date().toISOString() }]);
      // Return the updated state
      return { ...prev, player, npc, inventory, openedDoors };
    });
  };
  
  // Function to move the NPC (Non-Player Character)
  export const moveNPC = (npc, blocks, items, doors, sorcerers) => {
    const { x, y, movements, currentMovementIndex } = npc;
    const currentMovement = movements[currentMovementIndex];
    
    // If the current movement is 'wait', just update the movement index
    if (currentMovement === 'wait') {
      return { ...npc, currentMovementIndex: (currentMovementIndex + 1) % movements.length };
    }
    
    // Calculate the new position based on the current movement
    const [dx, dy] = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[currentMovement];
    const newX = x + dx, newY = y + dy;
  
    // Helper function to check if there's an object at a given position
    const isObjectAt = (x, y) => [...items, ...doors, ...sorcerers].some(obj => obj.x === x && obj.y === y);
  
    // Move the NPC if the move is valid and there's no object in the way
    if (isValidMove(newX, newY, blocks) && !isObjectAt(newX, newY)) {
      return { ...npc, x: newX, y: newY, currentMovementIndex: (currentMovementIndex + 1) % movements.length };
    } else {
      // If the move is invalid, just update the movement index
      return { ...npc, currentMovementIndex: (currentMovementIndex + 1) % movements.length };
    }
  };
  
  // Function to check if a move is valid (within bounds and not blocked)
  export const isValidMove = (x, y, blocks) => 
    x >= 0 && x < 9 && y >= 0 && y < 10 && !blocks.some(b => b.x === x && b.y === y);
  
  // Function to handle interactions with objects (items, sorcerers, doors)
  export const handleInteraction = (object, inventory, openedDoors, setMessage, setGoalAchieved, goal, setActionLog) => {
    if (object.type && !object.requiredItems && !inventory.includes(object.type)) {
      // If it's a collectible item not already in inventory
      inventory.push(object.type);
      setMessage(`You collected a ${object.type}!`);
    } else if (object.content && !object.revealed) {
      // If it's a sorcerer with an unrevealed item
      inventory.push(object.content);
      setMessage(`You found a ${object.content} from the sorcerer!`);
    } else if (object.requiredItems) {
      // If it's an object that requires items to interact with (e.g., a door)
      if (object.requiredItems.every(item => inventory.includes(item))) {
        // If the player has all required items
        const action = object.type === 'princess' ? 'save' : 'defeat';
        initiateGoalCompletion(object.type, action, goal, setGoalAchieved, setMessage, setActionLog);
      } else {
        // If the player doesn't have all required items
        setMessage(`You need ${object.requiredItems.join(' and ')} to ${object.type === 'princess' ? 'save' : 'defeat'} the ${object.type}.`);
      }
    }
  };
  
  // Function to handle goal completion
  export const initiateGoalCompletion = (objectType, action, goal, setGoalAchieved, setMessage, setActionLog) => {
    // Map numeric goals to their corresponding object types
    const goalMap = { 0: 'dragon', 1: 'monster', 2: 'princess' };
    const actionMap = { dragon: 'slay', monster: 'defeat', princess: 'save' };
  
    if (goalMap[goal] === objectType) {
      // If the interacted object matches the current goal
      setGoalAchieved(true);
      setMessage(`You ${action}d the ${objectType}!`);
      setActionLog(prev => [...prev, { action: 'Goal Initiated', goal: goalMap[goal], timestamp: new Date().toISOString() }]);
      
      // Set a timeout to display the congratulatory message and log the goal completion
      setTimeout(() => {
        setMessage(`Congratulations! You've completed the goal: ${action.charAt(0).toUpperCase() + action.slice(1)} the ${objectType}!`);
        setActionLog(prev => [...prev, { action: 'Goal Completed', goal: goalMap[goal], timestamp: new Date().toISOString() }]);
      }, 2000);
    } else {
      // If the interacted object does not match the current goal
      const correctGoal = goalMap[goal];
      const correctAction = actionMap[correctGoal];
      setMessage(`Remember, your goal is to ${correctAction} the ${correctGoal}. You can't ${action} the ${objectType} right now.`);
      setActionLog(prev => [...prev, { action: 'Wrong Goal Attempt', attemptedGoal: objectType, correctGoal: correctGoal, timestamp: new Date().toISOString() }]);
    }
  };
