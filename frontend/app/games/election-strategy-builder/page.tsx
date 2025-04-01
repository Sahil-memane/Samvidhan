"use client";
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { District } from './components/District';
import { GameStatus } from './components/GameStatus';
import { GameResults } from './components/GameResults';
import { strategies, initialDistricts } from './data/gameData';
import { GameState, District as DistrictType, Strategy } from './types/game';

function App() {
  const INITIAL_TIME = 180; // 3 minutes in seconds
  const INITIAL_BUDGET = 10000000; // 1 crore

  const initialGameState: GameState = {
    districts: initialDistricts,
    availableStrategies: strategies,
    playerScore: 0,
    aiScore: 0,
    timeRemaining: INITIAL_TIME,
    resources: INITIAL_BUDGET,
    gameEnded: false,
    strategyAnalysis: {
      effective: [],
      ineffective: []
    }
  };

  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [canEndEarly, setCanEndEarly] = useState(false);

  const handleStrategySelect = (districtId: string, strategyId: string) => {
    if (gameState.gameEnded) return;
    
    const strategy = strategies.find(s => s.id === strategyId);
    if (!strategy) return;

    if (strategy.cost > gameState.resources) {
      alert('Not enough resources!');
      return;
    }

    // AI selects a random strategy
    const aiStrategy = strategies[Math.floor(Math.random() * strategies.length)];

    const updatedDistricts = gameState.districts.map(d => {
      if (d.id !== districtId) return d;

      const newPlayerInfluence = Math.min(100, d.currentInfluence.player + strategy.influence);
      const newOpponentInfluence = Math.min(100, d.currentInfluence.opponent + aiStrategy.influence);

      return {
        ...d,
        currentInfluence: {
          player: newPlayerInfluence,
          opponent: newOpponentInfluence
        },
        playerStrategies: [...d.playerStrategies, {
          strategyId: strategy.id,
          timestamp: Date.now(),
          influence: strategy.influence
        }],
        opponentStrategies: [...d.opponentStrategies, {
          strategyId: aiStrategy.id,
          timestamp: Date.now(),
          influence: aiStrategy.influence
        }]
      };
    });

    const { playerScore, aiScore } = calculateScores(updatedDistricts);
    const newResources = gameState.resources - strategy.cost;

    // Check if any strategy is affordable with remaining resources
    const canAffordAnyStrategy = strategies.some(s => s.cost <= newResources);
    setCanEndEarly(!canAffordAnyStrategy);

    setGameState(prev => ({
      ...prev,
      districts: updatedDistricts,
      resources: newResources,
      playerScore,
      aiScore
    }));
  };

  const calculateScores = (districts: DistrictType[]) => {
    let playerScore = 0;
    let aiScore = 0;

    districts.forEach(district => {
      playerScore += district.currentInfluence.player;
      aiScore += district.currentInfluence.opponent;
    });

    return { playerScore, aiScore };
  };

  const analyzeStrategies = (districts: DistrictType[]): { effective: string[], ineffective: string[] } => {
    const strategyEffectiveness: Record<string, number> = {};
    
    districts.forEach(district => {
      district.playerStrategies.forEach(strategy => {
        const effectiveScore = (district.currentInfluence.player - district.currentInfluence.opponent) / strategy.influence;
        strategyEffectiveness[strategy.strategyId] = (strategyEffectiveness[strategy.strategyId] || 0) + effectiveScore;
      });
    });

    const sortedStrategies = Object.entries(strategyEffectiveness)
      .sort(([, a], [, b]) => b - a);

    return {
      effective: sortedStrategies.slice(0, 2).map(([id]) => id),
      ineffective: sortedStrategies.slice(-2).map(([id]) => id)
    };
  };

  const endGame = () => {
    const analysis = analyzeStrategies(gameState.districts);
    setGameState(prev => ({
      ...prev,
      gameEnded: true,
      strategyAnalysis: analysis
    }));
  };

  const handleRestart = () => {
    setGameState(initialGameState);
    setCanEndEarly(false);
  };

  useEffect(() => {
    if (gameState.gameEnded) return;

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeRemaining <= 1) {
          clearInterval(timer);
          endGame();
          return {
            ...prev,
            timeRemaining: 0,
            gameEnded: true
          };
        }
        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.gameEnded]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f7ff] to-[#e6e6ff]">
      <Header />
      <div 
        className="container mx-auto p-4"
        style={{
          backgroundImage: "./../../election_strategy_background.jpg",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay'
        }}
      >
        <GameStatus 
          playerScore={gameState.playerScore}
          aiScore={gameState.aiScore}
          timeRemaining={gameState.timeRemaining}
          resources={gameState.resources}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {gameState.districts.map(district => (
            <District
              key={district.id}
              district={district}
              strategies={gameState.availableStrategies}
              onStrategySelect={handleStrategySelect}
              resources={gameState.resources}
            />
          ))}
        </div>

        {canEndEarly && !gameState.gameEnded && (
          <div className="flex justify-center mt-6">
            <button
              onClick={endGame}
              className="bg-[#FF9933] hover:bg-[#ff8c1a] text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              End Election Early
            </button>
          </div>
        )}

        {gameState.gameEnded && (
          <GameResults 
            districts={gameState.districts}
            strategies={gameState.availableStrategies}
            playerScore={gameState.playerScore}
            aiScore={gameState.aiScore}
            strategyAnalysis={gameState.strategyAnalysis}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App