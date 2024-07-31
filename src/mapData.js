const mapData = {
  level1: {
    goal: 2,
    player: { x: 6, y: 3 },
    npc: { x: 4, y: 5, movements: ['wait', 'wait', 'wait', 'down'], currentMovementIndex: 0 },
    items: [
      { type: 'sword', x: 8, y: 2 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 7, requiredItems: ['sword'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['sword', 'potion'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['antidote'] },
    ],
    sorcerers: [
      { x: 2, y: 0, content: 'antidote', revealed: false },
      { x: 4, y: 0, content: 'potion', revealed: false },
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0}, {x:0,y:1},
      {x:1,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1}, {x:8,y:1}, {x:0,y:3}, {x:1,y:3},
      {x:2,y:3}, {x:3,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4},
      {x:3,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:5}, {x:1,y:5}, {x:2,y:5}, {x:3,y:5},
      {x:5,y:5}, {x:7,y:5}, {x:8,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6},
      {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8},
      {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],
    
    inventory: [],
    openedDoors: []
  },
  level2: {
    goal: 2,
    player: { x: 4, y: 5 },
    npc: { x: 4, y: 2, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'sword', x: 8, y: 3 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 5, requiredItems: ['sword'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['potion', 'sword'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['antidote'] },
    ],
    sorcerers: [
      { x: 0, y: 0, content: 'antidote', revealed: false },
      { x: 8, y: 7, content: 'potion', revealed: false },
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0},
      {x:0,y:2}, {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2}, {x:7,y:2}, {x:8,y:2},
      {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4},
      {x:5,y:4}, {x:6,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6},
      {x:5,y:6}, {x:6,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8},
      {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9},
      {x:7,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level3: {
    goal: 2,
    player: { x: 6, y: 3 },
    npc: { x: 4, y: 5, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'potion', x: 8, y: 2 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 7, requiredItems: ['sword'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['potion', 'sword'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['potion'] },
    ],
    sorcerers: [
      { x: 2, y: 0, content: 'antidote', revealed: false },
      { x: 4, y: 0, content: 'antidote', revealed: false },
      { x: 6, y: 0, content: 'sword', revealed: false },
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:7,y:0}, {x:8,y:0}, {x:0,y:1}, {x:1,y:1},
      {x:3,y:1}, {x:5,y:1}, {x:7,y:1}, {x:8,y:1}, {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3},
      {x:5,y:3}, {x:7,y:3}, {x:8,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4},
      {x:7,y:4}, {x:8,y:4}, {x:0,y:5}, {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:7,y:5},
      {x:8,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6},
      {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:1,y:9},
      {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],
    
    inventory: [],
    openedDoors: []
  },
  level4: {
    goal: 2,
    player: { x: 4, y: 5 },
    npc: { x: 4, y: 2, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'potion', x: 8, y: 3 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 5, requiredItems: ['antidote'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['potion'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['antidote', 'potion'] },
    ],
    sorcerers: [
      { x: 0, y: 0, content: 'sword', revealed: false },
      { x: 0, y: 5, content: 'sword', revealed: false },
      { x: 8, y: 7, content: 'antidote', revealed: false },
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0},
      {x:0,y:2}, {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2}, {x:7,y:2}, {x:8,y:2},
      {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4},
      {x:5,y:4}, {x:6,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6},
      {x:5,y:6}, {x:6,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8},
      {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9},
      {x:7,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level5: {
    goal: 2,
    player: { x: 4, y: 7 },
    npc: { x: 2, y: 2, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'antidote', x: 8, y: 5 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 2, requiredItems: ['antidote'] },
      { type: 'monster', x: 0, y: 5, requiredItems: ['antidote'] },
      { type: 'princess', x: 8, y: 7, requiredItems: ['antidote', 'antidote'] },
    ],
    sorcerers: [
      { x: 2, y: 0, content: 'antidote', revealed: false },
      { x: 4, y: 0, content: 'sword', revealed: false },
      { x: 0, y: 2, content: 'potion', revealed: false },
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0}, {x:0,y:1},
      {x:1,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1}, {x:8,y:1}, {x:0,y:3}, {x:1,y:3},
      {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3}, {x:0,y:4}, {x:1,y:4}, {x:3,y:4},
      {x:4,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4}, {x:5,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6},
      {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6}, {x:0,y:7}, {x:1,y:7}, {x:2,y:7}, {x:3,y:7}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level6: {
    goal: 2,
    player: { x: 5, y: 7 },
    npc: { x: 6, y: 2, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'sword', x: 0, y: 5 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 0, requiredItems: ['potion'] },
      { type: 'monster', x: 8, y: 7, requiredItems: ['sword'] },
      { type: 'princess', x: 0, y: 9, requiredItems: ['potion', 'sword'] },
    ],
    sorcerers: [
      { x: 4, y: 0, content: 'potion', revealed: false },
      { x: 0, y: 2, content: 'antidote', revealed: false },
      { x: 4, y: 9, content: 'antidote', revealed: false },
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:0,y:1},
      {x:1,y:1}, {x:2,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1}, {x:0,y:3}, {x:1,y:3},
      {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:7,y:3}, {x:0,y:4}, {x:1,y:4}, {x:3,y:4}, {x:4,y:4},
      {x:5,y:4}, {x:7,y:4}, {x:5,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6},
      {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8},
      {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level7: {
    goal: 2,
    player: { x: 6, y: 3 },
    npc: { x: 4, y: 5, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'antidote', x: 8, y: 2 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 7, requiredItems: ['antidote'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['antidote', 'antidote'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['antidote'] },
    ],
    sorcerers: [
      { x: 2, y: 0, content: 'sword', revealed: false },
      { x: 4, y: 0, content: 'potion', revealed: false },
      { x: 6, y: 0, content: 'antidote', revealed: false },
      { x: 0, y: 2, content: 'antidote', revealed: false },
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:7,y:0}, {x:8,y:0}, {x:0,y:1}, {x:1,y:1},
      {x:3,y:1}, {x:5,y:1}, {x:7,y:1}, {x:8,y:1}, {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3},
      {x:5,y:3}, {x:7,y:3}, {x:8,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4},
      {x:7,y:4}, {x:8,y:4}, {x:0,y:5}, {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:7,y:5},
      {x:8,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6},
      {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:1,y:9},
      {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level8: {
    goal: 2,
    player: { x: 4, y: 5 },
    npc: { x: 4, y: 2, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'antidote', x: 8, y: 3 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 5, requiredItems: ['antidote'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['potion'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['antidote', 'potion'] },
    ],
    sorcerers: [
      { x: 0, y: 0, content: 'potion', revealed: false },
      { x: 8, y: 0, content: 'sword', revealed: false },
      { x: 0, y: 5, content: 'sword', revealed: false },
      { x: 8, y: 7, content: 'antidote', revealed: false },
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:0,y:2},
      {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2}, {x:7,y:2}, {x:8,y:2}, {x:0,y:3},
      {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4},
      {x:6,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6},
      {x:6,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8},
      {x:7,y:8}, {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9},
      {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level9: {
    goal: 2,
    player: { x: 6, y: 3 },
    npc: { x: 4, y: 5, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'potion', x: 8, y: 2 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 7, requiredItems: ['potion'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['antidote'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['antidote', 'potion'] },
    ],
    sorcerers: [
      { x: 0, y: 0, content: 'sword', revealed: false },
      { x: 2, y: 0, content: 'potion', revealed: false },
      { x: 4, y: 0, content: 'antidote', revealed: false },
      { x: 6, y: 0, content: 'antidote', revealed: false },
      { x: 0, y: 4, content: 'sword', revealed: false },
    ],
    blocks: [
      {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:7,y:0}, {x:8,y:0}, {x:1,y:1}, {x:3,y:1}, {x:5,y:1},
      {x:7,y:1}, {x:8,y:1}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3},
      {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:5}, {x:1,y:5},
      {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:7,y:5}, {x:8,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6},
      {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8},
      {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9},
      {x:7,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level10: {
    goal: 2,
    player: { x: 4, y: 5 },
    npc: { x: 4, y: 2, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'antidote', x: 8, y: 3 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 5, requiredItems: ['antidote'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['potion'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['potion', 'antidote'] },
    ],
    sorcerers: [
      { x: 0, y: 0, content: 'sword', revealed: false },
      { x: 4, y: 0, content: 'potion', revealed: false },
      { x: 8, y: 0, content: 'antidote', revealed: false },
      { x: 0, y: 5, content: 'sword', revealed: false },
      { x: 8, y: 7, content: 'potion', revealed: false },
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:0,y:2}, {x:1,y:2},
      {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2}, {x:7,y:2}, {x:8,y:2}, {x:0,y:3}, {x:1,y:3},
      {x:2,y:3}, {x:3,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:6,y:4},
      {x:7,y:4}, {x:8,y:4}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:6,y:6},
      {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8},
      {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level11: {
    goal: 2,
    player: { x: 6, y: 3 },
    npc: { x: 4, y: 5, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'sword', x: 8, y: 2 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 7, requiredItems: ['sword'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['sword', 'sword'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['sword'] },
    ],
    sorcerers: [
      { x: 0, y: 0, content: 'potion', revealed: false },
      { x: 2, y: 0, content: 'antidote', revealed: false },
      { x: 4, y: 0, content: 'sword', revealed: false },
      { x: 6, y: 0, content: 'potion', revealed: false },
      { x: 0, y: 4, content: 'antidote', revealed: false },
      { x: 8, y: 5, content: 'sword', revealed: false },
    ],
    blocks: [
      {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:7,y:0}, {x:8,y:0}, {x:1,y:1}, {x:3,y:1}, {x:5,y:1},
      {x:7,y:1}, {x:8,y:1}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3},
      {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:5}, {x:1,y:5},
      {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6},
      {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8},
      {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level12: {
    goal: 2,
    player: { x: 4, y: 5 },
    npc: { x: 4, y: 2, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'antidote', x: 8, y: 3 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 5, requiredItems: ['antidote', 'potion'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['potion'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['antidote'] },
    ],
    sorcerers: [
      { x: 0, y: 0, content: 'sword', revealed: false },
      { x: 4, y: 0, content: 'potion', revealed: false },
      { x: 8, y: 0, content: 'antidote', revealed: false },
      { x: 0, y: 5, content: 'potion', revealed: false },
      { x: 8, y: 7, content: 'sword', revealed: false },
      { x: 7, y: 9, content: 'antidote', revealed: false },
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:0,y:2}, {x:1,y:2},
      {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2}, {x:7,y:2}, {x:8,y:2}, {x:0,y:3}, {x:1,y:3},
      {x:2,y:3}, {x:3,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:6,y:4},
      {x:7,y:4}, {x:8,y:4}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:6,y:6},
      {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:8,y:8},
      {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level13: {
    goal: 2,
    player: { x: 6, y: 3 },
    npc: { x: 4, y: 5, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'potion', x: 8, y: 2 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 7, requiredItems: ['potion', 'antidote'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['antidote'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['potion'] },
    ],
    sorcerers: [
      { x: 0, y: 0, content: 'sword', revealed: false },
      { x: 2, y: 0, content: 'potion', revealed: false },
      { x: 4, y: 0, content: 'antidote', revealed: false },
      { x: 6, y: 0, content: 'sword', revealed: false },
      { x: 0, y: 4, content: 'potion', revealed: false },
      { x: 8, y: 5, content: 'antidote', revealed: false },
      { x: 6, y: 9, content: 'sword', revealed: false },
    ],
    blocks: [
      {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:7,y:0}, {x:8,y:0}, {x:1,y:1}, {x:3,y:1}, {x:5,y:1},
      {x:7,y:1}, {x:8,y:1}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3},
      {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:5}, {x:1,y:5},
      {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6},
      {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:7,y:8}, {x:8,y:8},
      {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:7,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
  level14: {
    goal: 2,
    player: { x: 4, y: 5 },
    npc: { x: 4, y: 2, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    items: [
      { type: 'potion', x: 8, y: 3 },
    ],
    doors: [
      { type: 'dragon', x: 8, y: 5, requiredItems: ['sword'] },
      { type: 'monster', x: 0, y: 9, requiredItems: ['potion'] },
      { type: 'princess', x: 4, y: 9, requiredItems: ['sword', 'potion'] },
    ],
    sorcerers: [
      { x: 0, y: 0, content: 'antidote', revealed: false },
      { x: 4, y: 0, content: 'potion', revealed: false },
      { x: 8, y: 0, content: 'sword', revealed: false },
      { x: 0, y: 5, content: 'antidote', revealed: false },
      { x: 8, y: 7, content: 'potion', revealed: false },
      { x: 2, y: 9, content: 'sword', revealed: false },
      { x: 7, y: 9, content: 'antidote', revealed: false },
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:0,y:2}, {x:1,y:2},
      {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2}, {x:7,y:2}, {x:8,y:2}, {x:0,y:3}, {x:1,y:3},
      {x:2,y:3}, {x:3,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:6,y:4},
      {x:7,y:4}, {x:8,y:4}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:6,y:6},
      {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:8,y:8}, {x:1,y:9},
      {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:8,y:9}
    ],  
    
    inventory: [],
    openedDoors: []
  },
};
export default mapData;
