import React from 'react';

interface GameStatusProps {
  playerScore: number;
  aiScore: number;
  timeRemaining: number;
  resources: number;
}

export const GameStatus = ({ playerScore, aiScore, timeRemaining, resources }: GameStatusProps) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-[#FF9933] mb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-[#FF9933]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 -ml-32 -mb-32 bg-[#138808]/10 rounded-full blur-3xl"></div>
      
      <div className="grid grid-cols-4 gap-8 relative">
        <div className="text-center transform hover:scale-105 transition-transform duration-200">
          <h4 className="text-sm font-semibold text-gray-600 mb-1">Your Score</h4>
          <p className="text-3xl font-bold text-[#000080] bg-blue-50 rounded-lg py-2">{playerScore}</p>
        </div>
        <div className="text-center transform hover:scale-105 transition-transform duration-200">
          <h4 className="text-sm font-semibold text-gray-600 mb-1">Opposition Score</h4>
          <p className="text-3xl font-bold text-[#FF9933] bg-orange-50 rounded-lg py-2">{aiScore}</p>
        </div>
        <div className="text-center transform hover:scale-105 transition-transform duration-200">
          <h4 className="text-sm font-semibold text-gray-600 mb-1">Time Remaining</h4>
          <p className="text-3xl font-bold text-[#138808] bg-green-50 rounded-lg py-2">{formatTime(timeRemaining)}</p>
        </div>
        <div className="text-center transform hover:scale-105 transition-transform duration-200">
          <h4 className="text-sm font-semibold text-gray-600 mb-1">Budget</h4>
          <p className="text-3xl font-bold text-green-600 bg-green-50 rounded-lg py-2">₹{resources.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};