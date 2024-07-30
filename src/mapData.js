const mapData = {
  level1: {
    player: {x:6,y:3},
    npc: { ...{x:4,y:5}, movements: ['left', 'up', 'down', 'down'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:2}, color: 'red' },
    ],
    doors: [
      { ...{x:8,y:7}, color: 'blue', requiredKeys: ['red'] },
      { ...{x:0,y:9}, color: 'green', requiredKeys: ['red', 'blue'] },
      { ...{x:4,y:9}, color: 'red', requiredKeys: ['red'] },
    ],
    mysterySpots: [
      { ...{x:2,y:0}, content: 'null', revealed: false },
      { ...{x:4,y:0}, content: 'blue', revealed: false },
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
    player: {x:4,y:5},
    npc: { ...{x:4,y:2}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:3}, color: 'yellow' },
    ],
    doors: [
      { ...{x:8,y:5}, color: 'yellow', requiredKeys: ['yellow'] },
      { ...{x:0,y:9}, color: 'blue', requiredKeys: ['blue'] },
      { ...{x:4,y:9}, color: 'green', requiredKeys: ['yellow, blue'] },
    ],
    mysterySpots: [
      { ...{x:0,y:0}, content: 'null', revealed: false },
      { ...{x:8,y:7}, content: 'blue', revealed: false },
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
    player: {x:6,y:3},
    npc: { ...{x:4,y:5}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:2}, color: 'orange' },
    ],
    doors: [
      { ...{x:8,y:7}, color: 'yellow', requiredKeys: ['yellow'] },
      { ...{x:0,y:9}, color: 'red', requiredKeys: ['orange', 'yellow'] },
      { ...{x:4,y:9}, color: 'orange', requiredKeys: ['orange'] },
    ],
    mysterySpots: [
      { ...{x:2,y:0}, content: 'null', revealed: false },
      { ...{x:4,y:0}, content: 'null', revealed: false },
      { ...{x:6,y:0}, content: 'yellow', revealed: false },
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
    player: {x:4,y:5},
    npc: { ...{x:4,y:2}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:3}, color: 'orange' },
    ],
    doors: [
      { ...{x:8,y:5}, color: 'blue', requiredKeys: ['blue'] },
      { ...{x:0,y:9}, color: 'orange', requiredKeys: ['orange'] },
      { ...{x:4,y:9}, color: 'red', requiredKeys: ['blue', 'orange'] },
    ],
    mysterySpots: [
      { ...{x:0,y:0}, content: 'null', revealed: false },
      { ...{x:0,y:5}, content: 'null', revealed: false },
      { ...{x:8,y:7}, content: 'blue', revealed: false },
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
    player: {x:4,y:7},
    npc: { ...{x:2,y:2}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:5}, color: 'purple' },
    ],
    doors: [
      { ...{x:8,y:2}, color: 'green', requiredKeys: ['green'] },
      { ...{x:0,y:5}, color: 'purple', requiredKeys: ['purple'] },
      { ...{x:8,y:7}, color: 'yellow', requiredKeys: ['purple', 'green'] },
    ],
    mysterySpots: [
      { ...{x:2,y:0}, content: 'green', revealed: false },
      { ...{x:4,y:0}, content: 'null', revealed: false },
      { ...{x:0,y:2}, content: 'null', revealed: false },
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
    player: {x:5,y:7},
    npc: { ...{x:6,y:2}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:0,y:5}, color: 'yellow' },
    ],
    doors: [
      { ...{x:8,y:0}, color: 'orange', requiredKeys: ['orange'] },
      { ...{x:8,y:7}, color: 'yellow', requiredKeys: ['yellow'] },
      { ...{x:0,y:9}, color: 'blue', requiredKeys: ['orange', 'yellow'] },
    ],
    mysterySpots: [
      { ...{x:4,y:0}, content: 'orange', revealed: false },
      { ...{x:0,y:2}, content: 'null', revealed: false },
      { ...{x:4,y:9}, content: 'null', revealed: false },
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
    player: {x:6,y:3},
    npc: { ...{x:4,y:5}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:2}, color: 'blue' },
    ],
    doors: [
      { ...{x:8,y:7}, color: 'blue', requiredKeys: ['blue'] },
      { ...{x:0,y:9}, color: 'orange', requiredKeys: ['blue', 'green'] },
      { ...{x:4,y:9}, color: 'green', requiredKeys: ['green'] },
    ],
    mysterySpots: [
      { ...{x:2,y:0}, content: 'null', revealed: false },
      { ...{x:4,y:0}, content: 'null', revealed: false },
      { ...{x:6,y:0}, content: 'null', revealed: false },
      { ...{x:0,y:2}, content: 'green', revealed: false },
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
    player: {x:4,y:5},
    npc: { ...{x:4,y:2}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:3}, color: 'blue' },
    ],
    doors: [
      { ...{x:8,y:5}, color: 'blue', requiredKeys: ['blue'] },
      { ...{x:0,y:9}, color: 'orange', requiredKeys: ['orange'] },
      { ...{x:4,y:9}, color: 'yellow', requiredKeys: ['blue', 'orange'] },
    ],
    mysterySpots: [
      { ...{x:0,y:0}, content: 'orange', revealed: false },
      { ...{x:8,y:0}, content: 'null', revealed: false },
      { ...{x:0,y:5}, content: 'null', revealed: false },
      { ...{x:8,y:7}, content: 'null', revealed: false },
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
    player: {x:6,y:3},
    npc: { ...{x:4,y:5}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:2}, color: 'orange' },
    ],
    doors: [
      { ...{x:8,y:7}, color: 'orange', requiredKeys: ['orange'] },
      { ...{x:0,y:9}, color: 'purple', requiredKeys: ['purple'] },
      { ...{x:4,y:9}, color: 'red', requiredKeys: ['purple', 'orange'] },
    ],
    mysterySpots: [
      { ...{x:0,y:0}, content: 'null', revealed: false },
      { ...{x:2,y:0}, content: 'null', revealed: false },
      { ...{x:4,y:0}, content: 'null', revealed: false },
      { ...{x:6,y:0}, content: 'purple', revealed: false },
      { ...{x:0,y:4}, content: 'null', revealed: false },
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
    player: {x:4,y:5},
    npc: { ...{x:4,y:2}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:3}, color: 'blue' },
    ],
    doors: [
      { ...{x:8,y:5}, color: 'blue', requiredKeys: ['blue'] },
      { ...{x:0,y:9}, color: 'orange', requiredKeys: ['orange'] },
      { ...{x:4,y:9}, color: 'green', requiredKeys: ['orange', 'blue'] },
    ],
    mysterySpots: [
      { ...{x:0,y:0}, content: 'null', revealed: false },
      { ...{x:4,y:0}, content: 'null', revealed: false },
      { ...{x:8,y:0}, content: 'null', revealed: false },
      { ...{x:0,y:5}, content: 'null', revealed: false },
      { ...{x:8,y:7}, content: 'orange', revealed: false },
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
    player: {x:6,y:3},
    npc: { ...{x:4,y:5}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:2}, color: 'yellow' },
    ],
    doors: [
      { ...{x:8,y:7}, color: 'red', requiredKeys: ['red'] },
      { ...{x:0,y:9}, color: 'purple', requiredKeys: ['yellow', 'red'] },
      { ...{x:4,y:9}, color: 'yellow', requiredKeys: ['yellow'] },
    ],
    mysterySpots: [
      { ...{x:0,y:0}, content: 'null', revealed: false },
      { ...{x:2,y:0}, content: 'null', revealed: false },
      { ...{x:4,y:0}, content: 'red', revealed: false },
      { ...{x:6,y:0}, content: 'null', revealed: false },
      { ...{x:0,y:4}, content: 'null', revealed: false },
      { ...{x:8,y:5}, content: 'null', revealed: false },
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
    player: {x:4,y:5},
    npc: { ...{x:4,y:2}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:3}, color: 'purple' },
    ],
    doors: [
      { ...{x:8,y:5}, color: 'yellow', requiredKeys: ['purple', 'blue'] },
      { ...{x:0,y:9}, color: 'blue', requiredKeys: ['blue'] },
      { ...{x:4,y:9}, color: 'purple', requiredKeys: ['purple'] },
    ],
    mysterySpots: [
      { ...{x:0,y:0}, content: 'null', revealed: false },
      { ...{x:4,y:0}, content: 'null', revealed: false },
      { ...{x:8,y:0}, content: 'null', revealed: false },
      { ...{x:0,y:5}, content: 'blue', revealed: false },
      { ...{x:8,y:7}, content: 'null', revealed: false },
      { ...{x:7,y:9}, content: 'null', revealed: false },
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
    player: {x:6,y:3},
    npc: { ...{x:4,y:5}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:2}, color: 'orange' },
    ],
    doors: [
      { ...{x:8,y:7}, color: 'purple', requiredKeys: ['orange', 'blue'] },
      { ...{x:0,y:9}, color: 'blue', requiredKeys: ['blue'] },
      { ...{x:4,y:9}, color: 'orange', requiredKeys: ['orange'] },
    ],
    mysterySpots: [
      { ...{x:0,y:0}, content: 'null', revealed: false },
      { ...{x:2,y:0}, content: 'null', revealed: false },
      { ...{x:4,y:0}, content: 'null', revealed: false },
      { ...{x:6,y:0}, content: 'null', revealed: false },
      { ...{x:0,y:4}, content: 'null', revealed: false },
      { ...{x:8,y:5}, content: 'blue', revealed: false },
      { ...{x:6,y:9}, content: 'null', revealed: false },
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
    player: {x:4,y:5},
    npc: { ...{x:4,y:2}, movements: ['right', 'down', 'left', 'up'], currentMovementIndex: 0 },
    keys: [
      { ...{x:8,y:3}, color: 'orange' },
    ],
    doors: [
      { ...{x:8,y:5}, color: 'red', requiredKeys: ['red'] },
      { ...{x:0,y:9}, color: 'orange', requiredKeys: ['orange'] },
      { ...{x:4,y:9}, color: 'blue', requiredKeys: ['red','orange'] },
    ],
    mysterySpots: [
      { ...{x:0,y:0}, content: 'null', revealed: false },
      { ...{x:4,y:0}, content: 'null', revealed: false },
      { ...{x:8,y:0}, content: 'null', revealed: false },
      { ...{x:0,y:5}, content: 'null', revealed: false },
      { ...{x:8,y:7}, content: 'null', revealed: false },
      { ...{x:2,y:9}, content: 'red', revealed: false },
      { ...{x:7,y:9}, content: 'null', revealed: false },
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
