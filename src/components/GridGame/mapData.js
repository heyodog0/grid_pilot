

const mapData = {
  level1: {
    player: { x: 6, y: 3 },
    npc: { x: 4, y: 5, movements: ['up', 'up', 'up', 'up', 'down', 'down', 'down', 'down', 'down', 'down', 'left', 'left', 'left', 'left', 'down'], currentMovementIndex: 0 },
    barriers: [
      { x: 4, y: 8, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 7, y: 7, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 0, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
    ],
    wizards: [
      { x: 2, y: 0, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 8, y: 2, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0},
      {x:0,y:1}, {x:1,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1}, {x:8,y:1},
      {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3},
      {x:0,y:4}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4},
      {x:0,y:5}, {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:7,y:5}, {x:8,y:5},
      {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6},
      {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8},
      {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'C',
      description: 'Find and obtain Treasure A'
    }
  },
  level2: {
    player: { x: 6, y: 3 },
    npc: { x: 4, y: 2, movements: ["down", "right", "right", "right", "left", "left", "left", "down", "down", "down", "down", "right", "right", "right"], currentMovementIndex: 0 },
    barriers: [
      { x: 4, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
      { x: 7, y: 7, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 0, y: 8, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
    ],
    treasurePots: [
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
      { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
    ],
    wizards: [
      { x: 0, y: 0, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 8, y: 5, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 8, y: 3, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0},,
      {x:8,y:0}, {x:0,y:2}, {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2},,
      {x:7,y:2}, {x:8,y:2}, {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:0,y:4},,
      {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:6,y:4}, {x:7,y:4}, {x:8,y:4},,
      {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:6,y:6}, {x:7,y:6},,
      {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8},,
      {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9},,
      {x:8,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'B',
      description: 'Find and obtain Treasure B'
    }
  },
  level3: {
    player: { x: 6, y: 3 },
    npc: { x: 4, y: 5, movements: ["up", "up", "up", "up", "down", "down", "down", "down", "down", "down", "left", "left", "left", "left", "down"], currentMovementIndex: 0 },
    barriers: [
      { x: 4, y: 8, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 7, y: 7, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 0, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
      { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
    ],
    wizards: [
      { x: 2, y: 0, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 6, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 2, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:7,y:0}, {x:8,y:0}, {x:0,y:1},,
      {x:1,y:1}, {x:3,y:1}, {x:5,y:1}, {x:7,y:1}, {x:8,y:1}, {x:0,y:3}, {x:1,y:3},,
      {x:2,y:3}, {x:3,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3}, {x:0,y:4}, {x:1,y:4},,
      {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:5}, {x:1,y:5},,
      {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:7,y:5}, {x:8,y:5}, {x:0,y:6}, {x:1,y:6},,
      {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8},,
      {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:1,y:9}, {x:2,y:9},,
      {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'C',
      description: 'Find and obtain Treasure C'
    }
  },
  level4: {
    player: { x: 4, y: 5 },
    npc: { x: 4, y: 2, movements: ["down", "right", "right", "right", "left", "left", "left", "down", "down", "down", "down", "right", "right", "right"], currentMovementIndex: 0 },
    barriers: [
      { x: 4, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
      { x: 7, y: 7, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 0, y: 8, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
    ],
    treasurePots: [
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
      { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
    ],
    wizards: [
      { x: 0, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 0, y: 5, content: 'nothing', color: 'text-gray-500' },
      { x: 6, y: 0, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 8, y: 3, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0},,
      {x:8,y:0}, {x:0,y:2}, {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2},,
      {x:7,y:2}, {x:8,y:2}, {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:0,y:4},,
      {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:6,y:4}, {x:7,y:4}, {x:8,y:4},,
      {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:6,y:6}, {x:7,y:6},,
      {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8},,
      {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9},,
      {x:8,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'B',
      description: 'Find and obtain Treasure B'
    }
  },
  level5: {
    player: { x: 2, y: 2 },
    npc: { x: 4, y: 7, movements: ["left", "left", "up", "up", "up", "up", "down", "right", "right", "right", "right", "down", "down", "down", "down", "down", "right"], currentMovementIndex: 0 },
    barriers: [
      { x: 1, y: 5, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 7, y: 7, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
      { x: 7, y: 2, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
    ],
    treasurePots: [
      { x: 8, y: 2, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 0, y: 5, type: 'A', color: 'text-yellow-500', label: 'A' },
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
    ],
    wizards: [
      { x: 2, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 0, y: 2, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 8, y: 5, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0},,
      {x:0,y:1}, {x:1,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1}, {x:8,y:1},,
      {x:0,y:3}, {x:1,y:3}, {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3},,
      {x:0,y:4}, {x:1,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4},,
      {x:5,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6},,
      {x:8,y:6}, {x:0,y:7}, {x:1,y:7}, {x:2,y:7}, {x:3,y:7}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'B',
      description: 'Find and obtain Treasure B'
    }
  },
  level6: {
    player: { x: 4, y: 7 },
    npc: { x: 2, y: 2, movements: ["right", "right", "right", "right", "down", "down", "down", "right", "left", "up", "up", "up", "right"], currentMovementIndex: 0 },
    barriers: [
      { x: 1, y: 5, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 7, y: 7, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
      { x: 7, y: 2, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
    ],
    treasurePots: [
      { x: 8, y: 2, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 0, y: 5, type: 'A', color: 'text-yellow-500', label: 'A' },
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
    ],
    wizards: [
      { x: 2, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 0, y: 2, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 8, y: 5, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0},,
      {x:0,y:1}, {x:1,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1}, {x:8,y:1},,
      {x:0,y:3}, {x:1,y:3}, {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3},,
      {x:0,y:4}, {x:1,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4},,
      {x:5,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6},,
      {x:8,y:6}, {x:0,y:7}, {x:1,y:7}, {x:2,y:7}, {x:3,y:7}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'B',
      description: 'Find and obtain Treasure B'
    }
  },
  level7: {
    player: { x: 4, y: 7 },
    npc: { x: 2, y: 2, movements: ["right", "right", "right", "right", "down", "down", "down", "right", "left", "up", "up", "up", "right"], currentMovementIndex: 0 },
    barriers: [
      { x: 1, y: 5, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 7, y: 7, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
      { x: 7, y: 2, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
    ],
    treasurePots: [
      { x: 8, y: 2, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 0, y: 5, type: 'A', color: 'text-yellow-500', label: 'A' },
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
    ],
    wizards: [
      { x: 2, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 0, y: 2, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 8, y: 5, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0},,
      {x:0,y:1}, {x:1,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1}, {x:8,y:1},,
      {x:0,y:3}, {x:1,y:3}, {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3},,
      {x:0,y:4}, {x:1,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4},,
      {x:5,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6},,
      {x:8,y:6}, {x:0,y:7}, {x:1,y:7}, {x:2,y:7}, {x:3,y:7}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'A',
      description: 'Find and obtain Treasure A'
    }
  },
  level8: {
    player: {'x': 6, 'y': 2},
    npc: { x: 5, y: 7, movements: ["left", "up", "up", "left", "left", "up", "up", "up", "right", "right", "up", "down", "right", "right", "down", "down", "down", "down", "down", "right", "right", "down"], currentMovementIndex: 0 },
    barriers: [
      { x: 0, y: 8, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 8, y: 1, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 8, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 8, y: 0, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
      { x: 8, y: 9, type: 'C', color: 'text-yellow-500', label: 'C' },
    ],
    wizards: [
      { x: 4, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 0, y: 2, content: 'nothing', color: 'text-gray-500' },
      { x: 4, y: 9, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 0, y: 5, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0},,
      {x:0,y:1}, {x:1,y:1}, {x:2,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1},,
      {x:0,y:3}, {x:1,y:3}, {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:7,y:3}, {x:0,y:4},,
      {x:1,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:7,y:4}, {x:5,y:5}, {x:0,y:6},,
      {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8},,
      {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:1,y:9}, {x:2,y:9},,
      {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'C',
      description: 'Find and obtain Treasure C'
    }
  },
  level9: {
    player: {'x': 5, 'y': 7},
    npc: { x: 6, y: 2, movements: ["left", "left", "up", "down", "right", "right", "down", "down", "down", "down", "down", "right", "right", "down"], currentMovementIndex: 0 },
    barriers: [
      { x: 0, y: 8, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 8, y: 1, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 8, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 8, y: 0, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
      { x: 8, y: 9, type: 'C', color: 'text-yellow-500', label: 'C' },
    ],
    wizards: [
      { x: 4, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 0, y: 2, content: 'nothing', color: 'text-gray-500' },
      { x: 4, y: 9, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 0, y: 5, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0},,
      {x:0,y:1}, {x:1,y:1}, {x:2,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1},,
      {x:0,y:3}, {x:1,y:3}, {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:7,y:3}, {x:0,y:4},,
      {x:1,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:7,y:4}, {x:5,y:5}, {x:0,y:6},,
      {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8},,
      {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:1,y:9}, {x:2,y:9},,
      {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'C',
      description: 'Find and obtain Treasure C'
    }
  },
  level10: {
    player: {'x': 5, 'y': 7},
    npc: { x: 6, y: 2, movements: ["left", "left", "up", "down", "right", "right", "down", "down", "down", "down", "down", "right", "right", "down"], currentMovementIndex: 0 },
    barriers: [
      { x: 0, y: 8, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 8, y: 1, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 8, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 8, y: 0, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
      { x: 8, y: 9, type: 'C', color: 'text-yellow-500', label: 'C' },
    ],
    wizards: [
      { x: 4, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 0, y: 2, content: 'nothing', color: 'text-gray-500' },
      { x: 4, y: 9, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 0, y: 5, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0},,
      {x:0,y:1}, {x:1,y:1}, {x:2,y:1}, {x:3,y:1}, {x:5,y:1}, {x:6,y:1}, {x:7,y:1},,
      {x:0,y:3}, {x:1,y:3}, {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:7,y:3}, {x:0,y:4},,
      {x:1,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:7,y:4}, {x:5,y:5}, {x:0,y:6},,
      {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8},,
      {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:1,y:9}, {x:2,y:9},,
      {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'A',
      description: 'Find and obtain Treasure A'
    }
  },
  level11: {
    player: {'x': 6, 'y': 3},
    npc: { x: 4, y: 5, movements: ["up", "up", "up", "up", "down", "down", "down", "down", "down", "down", "left", "left", "left", "left", "down"], currentMovementIndex: 0 },
    barriers: [
      { x: 4, y: 8, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 7, y: 7, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 0, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
    ],
    wizards: [
      { x: 2, y: 0, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 6, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 0, y: 2, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 2, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:0,y:0}, {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:7,y:0}, {x:8,y:0}, {x:0,y:1},,
      {x:1,y:1}, {x:3,y:1}, {x:5,y:1}, {x:7,y:1}, {x:8,y:1}, {x:0,y:3}, {x:1,y:3},,
      {x:2,y:3}, {x:3,y:3}, {x:5,y:3}, {x:7,y:3}, {x:8,y:3}, {x:0,y:4}, {x:1,y:4},,
      {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:5}, {x:1,y:5},,
      {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:7,y:5}, {x:8,y:5}, {x:0,y:6}, {x:1,y:6},,
      {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8}, {x:2,y:8},,
      {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:1,y:9}, {x:2,y:9},,
      {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'C',
      description: 'Find and obtain Treasure C'
    }
  },
    level12: {
      player: {'x': 4, 'y': 5},
      npc: { x: 4, y: 2, movements: ["down", "right", "right", "right", "left", "left", "left", "down", "down", "down", "down", "right", "right", "right"], currentMovementIndex: 0 },
      barriers: [
        { x: 7, y: 7, requiredItems: ['redAmulet'], color: 'text-red-500' },
        { x: 0, y: 8, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
        { x: 4, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
      ],
      treasurePots: [
        { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
        { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
        { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
      ],
      wizards: [
        { x: 0, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
        { x: 8, y: 0, content: 'nothing', color: 'text-gray-500' },
        { x: 0, y: 5, content: 'nothing', color: 'text-gray-500' },
        { x: 8, y: 5, content: 'blueAmulet', color: 'text-gray-500' },
        { x: 8, y: 3, content: 'redAmulet', color: 'text-red-500'}
      ],
      blocks: [
        {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0},,
        {x:0,y:2}, {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2}, {x:7,y:2},,
        {x:8,y:2}, {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:0,y:4}, {x:1,y:4},,
        {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:6,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:6},,
        {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:6,y:6}, {x:7,y:6}, {x:8,y:6},,
        {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8},,
        {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
      ],
      inventory: [],
      openedBarriers: [],
      goal: {
        type: 'B',
        description: 'Find and obtain Treasure B'
      }
    },
  level13: {
    player: {'x': 6, 'y': 3},
    npc: { x: 4, y: 5, movements: ["up", "up", "up", "up", "down", "down", "down", "down", "down", "down", "left", "left", "left", "left", "down"], currentMovementIndex: 0 },
    barriers: [
      { x: 4, y: 8, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 7, y: 7, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 0, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
    ],
    wizards: [
      { x: 0, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 2, y: 0, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 6, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 0, y: 4, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 2, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:7,y:0}, {x:8,y:0}, {x:1,y:1}, {x:3,y:1},,
      {x:5,y:1}, {x:7,y:1}, {x:8,y:1}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:5,y:3},,
      {x:7,y:3}, {x:8,y:3}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:7,y:4},,
      {x:8,y:4}, {x:0,y:5}, {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:7,y:5},,
      {x:8,y:5}, {x:0,y:6}, {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6},,
      {x:8,y:6}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8},,
      {x:8,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9},,
      {x:8,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'C',
      description: 'Find and obtain Treasure C'
    }
  },
  level14: {
    player: {'x': 4, 'y': 5},
    npc: { x: 4, y: 2, movements: ["down", "right", "right", "right", "left", "left", "left", "down", "down", "down", "down", "right", "right", "right"], currentMovementIndex: 0 },
    barriers: [
      { x: 7, y: 7, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 0, y: 8, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 4, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
    ],
    wizards: [
      { x: 0, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 0, y: 5, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 5, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 8, y: 3, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:0,y:2},,
      {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2}, {x:7,y:2}, {x:8,y:2},,
      {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4},,
      {x:3,y:4}, {x:5,y:4}, {x:6,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:6}, {x:1,y:6},,
      {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:6,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8},,
      {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:1,y:9},,
      {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'B',
      description: 'Find and obtain Treasure B'
    }
  },
  level15: {
    player: {'x': 6, 'y': 3},
    npc: { x: 4, y: 5, movements: ["up", "up", "up", "up", "down", "down", "down", "down", "down", "down", "left", "left", "left", "left", "down"], currentMovementIndex: 0 },
    barriers: [
      { x: 4, y: 8, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 7, y: 7, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 0, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
    ],
    wizards: [
      { x: 0, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 2, y: 0, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 6, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 0, y: 4, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 5, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 2, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:1,y:0}, {x:3,y:0}, {x:5,y:0}, {x:7,y:0}, {x:8,y:0}, {x:1,y:1}, {x:3,y:1},,
      {x:5,y:1}, {x:7,y:1}, {x:8,y:1}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:5,y:3},,
      {x:7,y:3}, {x:8,y:3}, {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:5,y:4}, {x:7,y:4},,
      {x:8,y:4}, {x:0,y:5}, {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:5,y:5}, {x:0,y:6},,
      {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8},,
      {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:1,y:9},,
      {x:2,y:9}, {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'C',
      description: 'Find and obtain Treasure C'
    }
  },
  level16: {
    player: {'x': 4, 'y': 5},
    npc: { x: 4, y: 2, movements: ["down", "right", "right", "right", "left", "left", "left", "down", "down", "down", "down", "right", "right", "right"], currentMovementIndex: 0 },
    barriers: [
      { x: 7, y: 7, requiredItems: ['redAmulet'], color: 'text-red-500' },
      { x: 0, y: 8, requiredItems: ['redAmulet', 'blueAmulet'], color: 'text-red-500 text-blue-500' },
      { x: 4, y: 8, requiredItems: ['yellowAmulet'], color: 'text-yellow-500' },
    ],
    treasurePots: [
      { x: 4, y: 9, type: 'B', color: 'text-yellow-500', label: 'B' },
      { x: 8, y: 7, type: 'C', color: 'text-yellow-500', label: 'C' },
      { x: 0, y: 9, type: 'A', color: 'text-yellow-500', label: 'A' },
    ],
    wizards: [
      { x: 0, y: 0, content: 'yellowAmulet', color: 'text-gray-500' },
      { x: 4, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 0, content: 'nothing', color: 'text-gray-500' },
      { x: 0, y: 5, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 5, content: 'blueAmulet', color: 'text-gray-500' },
      { x: 7, y: 9, content: 'nothing', color: 'text-gray-500' },
      { x: 8, y: 3, content: 'redAmulet', color: 'text-red-500'}
    ],
    blocks: [
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:0,y:2},,
      {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:5,y:2}, {x:6,y:2}, {x:7,y:2}, {x:8,y:2},,
      {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:0,y:4}, {x:1,y:4}, {x:2,y:4},,
      {x:3,y:4}, {x:5,y:4}, {x:6,y:4}, {x:7,y:4}, {x:8,y:4}, {x:0,y:6}, {x:1,y:6},,
      {x:2,y:6}, {x:3,y:6}, {x:5,y:6}, {x:6,y:6}, {x:7,y:6}, {x:8,y:6}, {x:1,y:8},,
      {x:2,y:8}, {x:3,y:8}, {x:5,y:8}, {x:6,y:8}, {x:8,y:8}, {x:1,y:9}, {x:2,y:9},,
      {x:3,y:9}, {x:5,y:9}, {x:6,y:9}, {x:8,y:9}
    ],
    inventory: [],
    openedBarriers: [],
    goal: {
      type: 'B',
      description: 'Find and obtain Treasure B'
    }
  },
}

export default mapData;