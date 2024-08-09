import React, { useState } from 'react';
import { GiGemPendant } from "react-icons/gi";
import { PiTreasureChestBold } from "react-icons/pi";

const GameIntroduction = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const introductionText = [
    `Welcome to our treasure hunting game!

Before you begin your task, you'll complete a brief guided tutorial (~ 3 minutes) to understand the game.

Press Next to continue.`,

    `You are playing a treasure game with three possible treasure pots: A, B, and C. Your goal is to get one of the treasure pots. In each trial, we will specify which treasure you should get.

Each treasure pot is hidden behind a barrier. You need to possess certain amulets to pass the barrier. There are three kinds of amulets: red, blue, and yellow.`,

    `Players can get the amulets from wizards. There are two kinds of wizards in the game:
• The red wizard possesses the red amulets
• The grey wizards have either yellow or blue amulets, but not both.

You can interact with characters and objects through movements. For example, if you are to the left of a wizard/treasure/barrier and you perform the "right" action, you will interact with it.`,

    `There is another player (shown as a red square) who is also playing the game. They are pursuing one of the three goals, which may or may not be the same as yours.

In each timestep, you can choose to observe the other player or perform an action yourself. If you choose to observe, you will see the other player perform an action while you stay still.

Your goal is to reach the treasure with as few steps as possible. If you achieve the goal before the countdown reaches 0, you receive bonus points for the remaining steps.`,

    `Please note that:
• Players can walk past each other
• Each wizard has multiple amulets
• Treasure pots have treasures for each player
• You need your own amulets to pass barriers
• You cannot see the other player's inventory
• You can only observe but not interact with the other player

Hint: Observing the other player can help you infer the location of amulets.

Let's go through 2 trial runs!`
  ];

  const handleNext = () => {
    if (currentStep < introductionText.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const legendItems = [
    { icon: <div className="w-6 h-6 bg-yellow-500 rounded-full" />, label: "Player" },
    { icon: <div className="w-6 h-6 bg-red-500 rounded" />, label: "Other Player" },
    { icon: <img src="./icons/f.png" alt="Red Wizard" className="w-6 h-6" />, label: "Red Wizard" },
    { icon: <img src="./icons/d.png" alt="Gray Wizard" className="w-6 h-6" />, label: "Gray Wizard" },
    { icon: <GiGemPendant className="text-red-500 text-xl" />, label: "Red Amulet" },
    { icon: <GiGemPendant className="text-blue-500 text-xl" />, label: "Blue Amulet" },
    { icon: <GiGemPendant className="text-yellow-500 text-xl" />, label: "Yellow Amulet" },
    { icon: <PiTreasureChestBold className="text-yellow-500 text-xl" />, label: "Treasure" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="whitespace-pre-line mb-6">
            {introductionText[currentStep]}
          </div>
          <button 
            onClick={handleNext} 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded self-start"
          >
            {currentStep < introductionText.length - 1 ? 'Next ►' : 'Start Game'}
          </button>
        </div>
        <div className="flex-1 p-6 flex flex-col">
          <img 
            src="./icons/game_screen.png" 
            alt="Game Screenshot" 
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {legendItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="mr-2">{item.icon}</div>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameIntroduction;