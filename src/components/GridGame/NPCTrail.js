import React from 'react';

const NPCTrail = ({ npc, currentMovementIndex }) => {
  const trailLength = 3; // Adjusted to match the image

  const getArrowStyle = (move) => {
    switch (move) {
      case 'up': return { transform: 'rotate(0deg)' };
      case 'down': return { transform: 'rotate(180deg)' };
      case 'left': return { transform: 'rotate(270deg)' };
      case 'right': return { transform: 'rotate(90deg)' };
      default: return {};
    }
  };

  const getTrailArrows = () => {
    const trail = [];
    let x = npc.x;
    let y = npc.y;

    // Start from the current position and go backwards
    for (let i = 0; i < trailLength; i++) {
      const moveIndex = currentMovementIndex - i - 1;
      if (moveIndex < 0) break;

      const move = npc.movements[moveIndex];
      
      // Calculate the previous position
      switch (move) {
        case 'up': y++; break;
        case 'down': y--; break;
        case 'left': x++; break;
        case 'right': x--; break;
      }

      trail.push({ x, y, move });
    }

    return trail;
  };

  const trailArrows = getTrailArrows();

  // Only render if the NPC has made at least one move
  if (currentMovementIndex === 0) return null;

  return (
    <>
      {trailArrows.map((arrow, index) => (
        <div
          key={index}
          className="absolute w-12 h-12 flex items-center justify-center"
          style={{
            left: `${arrow.x * 48}px`,
            top: `${arrow.y * 48}px`,
            opacity: 0.7 - index * 0.2,
          }}
        >
          <div
            className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-red-500"
            style={getArrowStyle(arrow.move)}
          />
        </div>
      ))}
    </>
  );
};

export default NPCTrail;