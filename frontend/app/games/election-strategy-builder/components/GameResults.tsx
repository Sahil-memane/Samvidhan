import React from 'react';
import { District, Strategy } from '../types/game';
import { X } from 'lucide-react';

interface GameResultsProps {
  districts: District[];
  strategies: Strategy[];
  playerScore: number;
  aiScore: number;
  strategyAnalysis: {
    effective: string[];
    ineffective: string[];
  };
  onRestart: () => void;
}

export const GameResults = ({ districts, strategies, playerScore, aiScore, strategyAnalysis, onRestart }: GameResultsProps) => {
  const getOverallWinner = () => {
    const winningDistricts = districts.reduce(
      (acc, district) => {
        if (district.currentInfluence.player > district.currentInfluence.opponent) {
          acc.player++;
        } else if (district.currentInfluence.player < district.currentInfluence.opponent) {
          acc.opponent++;
        }
        return acc;
      },
      { player: 0, opponent: 0 }
    );

    if (winningDistricts.player > winningDistricts.opponent) {
      return {
        winner: 'You',
        message: `Congratulations! You've won ${winningDistricts.player} out of ${districts.length} districts!`,
        color: 'text-[#000080]'
      };
    } else if (winningDistricts.player < winningDistricts.opponent) {
      return {
        winner: 'Opposition',
        message: `The opposition has won ${winningDistricts.opponent} out of ${districts.length} districts.`,
        color: 'text-[#FF9933]'
      };
    } else {
      return {
        winner: 'Tie',
        message: 'The election resulted in a tie! Both parties have equal influence.',
        color: 'text-gray-700'
      };
    }
  };

  const winner = getOverallWinner();

  const getStrategyAnalysis = (district: District) => {
    const usedStrategies = district.playerStrategies.map(s => s.strategyId);
    const recommended = district.recommendedStrategies;
    
    const goodChoices = usedStrategies.filter(s => recommended.includes(s));
    const missedOpportunities = recommended.filter(s => !usedStrategies.includes(s));
    
    return {
      goodChoices,
      missedOpportunities
    };
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onRestart}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Election Results</h2>
          <p className={`text-xl ${winner.color}`}>{winner.message}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center p-4 bg-gray-50 rounded">
            <h3 className="text-lg font-semibold text-[#000080]">Your Final Score</h3>
            <p className="text-3xl font-bold">{playerScore}</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded">
            <h3 className="text-lg font-semibold text-[#FF9933]">Opposition Score</h3>
            <p className="text-3xl font-bold">{aiScore}</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">District-wise Analysis</h3>
          <div className="space-y-6">
            {districts.map(district => {
              const analysis = getStrategyAnalysis(district);
              return (
                <div key={district.id} className="border p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">{district.name}</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-[#000080]">Your Influence: {district.currentInfluence.player}%</p>
                      <p className="text-[#FF9933]">Opposition: {district.currentInfluence.opponent}%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Result: {
                        district.currentInfluence.player > district.currentInfluence.opponent 
                          ? 'Victory'
                          : district.currentInfluence.player < district.currentInfluence.opponent 
                            ? 'Defeat'
                            : 'Tie'
                      }</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p><strong>Demographic:</strong> {district.voterDemographic}</p>
                    <p><strong>Citizen Nature:</strong> {district.citizenNature}</p>
                    
                    <div>
                      <p className="font-semibold">Key Issues:</p>
                      <ul className="list-disc ml-6">
                        {district.keyIssues.map((issue, i) => (
                          <li key={i}>{issue}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold">Development Needs:</p>
                      <ul className="list-disc ml-6">
                        {district.developmentNeeds.map((need, i) => (
                          <li key={i}>{need}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <p className="font-semibold text-green-600">Effective Choices:</p>
                      {analysis.goodChoices.length > 0 ? (
                        <ul className="list-disc ml-6">
                          {analysis.goodChoices.map(strategyId => (
                            <li key={strategyId}>
                              {strategies.find(s => s.id === strategyId)?.name} - {' '}
                              <span className="italic">
                                {strategies.find(s => s.id === strategyId)?.impact}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="ml-6 italic">No strategies aligned with district needs</p>
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-amber-600">Missed Opportunities:</p>
                      <ul className="list-disc ml-6">
                        {analysis.missedOpportunities.map(strategyId => (
                          <li key={strategyId}>
                            {strategies.find(s => s.id === strategyId)?.name} would have been effective because it's best for{' '}
                            {strategies.find(s => s.id === strategyId)?.bestFor.join(', ')}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};