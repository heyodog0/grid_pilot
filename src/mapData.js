const mapData = {
  level1: {
    player: { x: 0, y: 0 },
    npc: { x: 4, y: 4, movements: [[1, 0], [0, 1], [-1, 0], [0, -1]] },
    keys: [{ x: 2, y: 2, color: 'red' }],
    doors: [
      { x: 7, y: 3, color: 'red', requiredKeys: ['red'] },
      { x: 3, y: 7, color: 'blue', requiredKeys: ['blue'] },
      { x: 6, y: 6, color: 'purple', requiredKeys: ['green', 'blue'] }
    ],
    mysterySpots: [
      { x: 5, y: 5, content: 'blue', revealed: false },
      { x: 1, y: 6, content: 'green', revealed: false },
      { x: 6, y: 1, content: null, revealed: false }
    ],
    blocks: [
      { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 3 }, { x: 4, y: 3 }
    ],
    inventory: [],
    openedDoors: []
  },
  level2: {
    player: { x: 7, y: 7 },
    npc: { x: 2, y: 2, movements: [[1, 1], [-1, 1], [-1, -1], [1, -1]] },
    keys: [{ x: 0, y: 0, color: 'yellow' }],
    doors: [
      { x: 3, y: 7, color: 'yellow', requiredKeys: ['yellow'] },
      { x: 7, y: 3, color: 'green', requiredKeys: ['green'] },
      { x: 5, y: 5, color: 'purple', requiredKeys: ['blue', 'green'] }
    ],
    mysterySpots: [
      { x: 6, y: 6, content: 'green', revealed: false },
      { x: 1, y: 5, content: 'blue', revealed: false },
      { x: 4, y: 4, content: null, revealed: false }
    ],
    blocks: [
      { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, 
      { x: 3, y: 1 }, { x: 3, y: 2 }
    ],
    inventory: [],
    openedDoors: []
  },
  level3: {
    player: { x: 3, y: 3 },
    npc: { x: 4, y: 4, movements: [[1, 0], [0, 1], [-1, 0], [0, -1]] },
    keys: [{ x: 0, y: 7, color: 'red' }],
    doors: [
      { x: 7, y: 7, color: 'gold', requiredKeys: ['red', 'blue'] },
      { x: 5, y: 0, color: 'green', requiredKeys: ['green'] },
      { x: 0, y: 5, color: 'red', requiredKeys: ['red'] }
    ],
    mysterySpots: [
      { x: 7, y: 0, content: 'blue', revealed: false },
      { x: 2, y: 6, content: 'green', revealed: false },
      { x: 5, y: 5, content: null, revealed: false }
    ],
    blocks: [
      { x: 4, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 3 }
    ],
    inventory: [],
    openedDoors: []
  },
  level4: {
    player: { x: 1, y: 1 },
    npc: { x: 6, y: 6, movements: [[1, 0], [-1, 0], [0, 1], [0, -1]] },
    keys: [{ x: 4, y: 4, color: 'blue' }],
    doors: [
      { x: 7, y: 1, color: 'blue', requiredKeys: ['blue'] },
      { x: 1, y: 7, color: 'green', requiredKeys: ['green'] },
      { x: 5, y: 5, color: 'red', requiredKeys: ['red', 'green'] }
    ],
    mysterySpots: [
      { x: 2, y: 7, content: 'red', revealed: false },
      { x: 7, y: 2, content: 'green', revealed: false },
      { x: 0, y: 0, content: null, revealed: false }
    ],
    blocks: [
      { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 3 }
    ],
    inventory: [],
    openedDoors: []
  },
  level5: {
    player: { x: 0, y: 7 },
    npc: { x: 7, y: 0, movements: [[-1, 0], [0, 1], [1, 0], [0, -1]] },
    keys: [{ x: 3, y: 3, color: 'green' }],
    doors: [
      { x: 0, y: 0, color: 'green', requiredKeys: ['green'] },
      { x: 7, y: 7, color: 'blue', requiredKeys: ['blue'] },
      { x: 4, y: 4, color: 'red', requiredKeys: ['red', 'blue'] }
    ],
    mysterySpots: [
      { x: 1, y: 1, content: 'red', revealed: false },
      { x: 6, y: 6, content: 'blue', revealed: false },
      { x: 3, y: 5, content: null, revealed: false }
    ],
    blocks: [
      { x: 2, y: 2 }, { x: 2, y: 5 }, { x: 5, y: 2 }, { x: 5, y: 5 }
    ],
    inventory: [],
    openedDoors: []
  }
 
};

export default mapData;