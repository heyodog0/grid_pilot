export const handlePlayerAction = (action, state, setState, setMessage, setActionLog, setStepsRemaining, setGameWon) => {
  setState(prev => {
    if (!prev) return null;
    let { player, npc, inventory, openedBarriers, barriers, treasurePots, wizards, blocks, goal } = prev;
    
    setStepsRemaining(steps => steps - 1);

    if (action === 'observe') {
      npc = moveNPC(npc, blocks, barriers, treasurePots, wizards);
    } else {
      const [dx, dy] = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[action];
      const newX = player.x + dx, newY = player.y + dy;

      if (isValidMove(newX, newY, blocks, wizards)) {
        const barrier = barriers.find(b => b.x === newX && b.y === newY);
        if (barrier && !canPassBarrier(barrier, inventory)) {
          setMessage(`You need ${barrier.requiredItems.join(' and ')} to pass this barrier.`);
        } else {
          player = { ...player, x: newX, y: newY };
          checkWizardInteraction(player, wizards, inventory, setMessage, setActionLog);
          checkTreasureInteraction(player, treasurePots, goal, setMessage, setActionLog, setGameWon);
        }
      }
    }

    setActionLog(prevLog => [...prevLog, { action, timestamp: new Date().toISOString() }]);
    return { ...prev, player, npc, inventory, openedBarriers };
  });
};

export const moveNPC = (npc, blocks, treasurePots, wizards) => {
  const { x, y, currentMovementIndex, movements } = npc;
  
  if (!movements || currentMovementIndex >= movements.length) {
    return npc;
  }

  const currentMovement = movements[currentMovementIndex];
  
  const [dx, dy] = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[currentMovement];
  const newX = x + dx, newY = y + dy;

  const isObjectAt = (x, y) => [...treasurePots, ...wizards].some(obj => obj.x === x && obj.y === y);

  if (isValidMove(newX, newY, blocks, wizards) && !isObjectAt(newX, newY)) {
    return { ...npc, x: newX, y: newY, currentMovementIndex: currentMovementIndex + 1 };
  } else {
    return { ...npc, currentMovementIndex: currentMovementIndex + 1 };
  }
};

export const isValidMove = (x, y, blocks, wizards) => 
  x >= 0 && x < 9 && y >= 0 && y < 10 && 
  !blocks.some(b => b.x === x && b.y === y) && 
  !wizards.some(w => w.x === x && w.y === y);
export const canPassBarrier = (barrier, inventory) => {
  return barrier.requiredItems.every(item => inventory.includes(item));
};

export const checkWizardInteraction = (player, wizards, inventory, setMessage, setActionLog) => {
  const adjacentWizard = wizards.find(w => 
    Math.abs(w.x - player.x) <= 1 && Math.abs(w.y - player.y) <= 1
  );

  if (adjacentWizard && !inventory.includes(adjacentWizard.content)) {
    inventory.push(adjacentWizard.content);
    setMessage(`You received a ${adjacentWizard.content} from the ${adjacentWizard.color === 'text-red-500' ? 'red' : 'gray'} wizard!`);
    setActionLog(prev => [...prev, { action: 'Interact with Wizard', item: adjacentWizard.content, timestamp: new Date().toISOString() }]);
  }
};

export const checkTreasureInteraction = (player, treasurePots, goal, setMessage, setActionLog, setGameWon) => {
  const treasure = treasurePots.find(pot => pot.x === player.x && pot.y === player.y);
  if (treasure) {
    if (treasure.type === goal.type) {
      setMessage(`You found the ${treasure.type} treasure! You've completed the goal: ${goal.description}. You win!`);
      setActionLog(prev => [...prev, { action: 'Find Correct Treasure', type: treasure.type, timestamp: new Date().toISOString() }]);
      setGameWon(true);
    } else {
      setMessage(`You found treasure ${treasure.type}, but your goal is to find treasure ${goal.type}. Keep searching!`);
      setActionLog(prev => [...prev, { action: 'Find Wrong Treasure', type: treasure.type, goalType: goal.type, timestamp: new Date().toISOString() }]);
    }
  }
};

export const initializeLevel = (levelData) => {
  return {
    ...levelData,
    stepsRemaining: 50,
    message: `Goal: ${levelData.goal.description}`,
  };
};