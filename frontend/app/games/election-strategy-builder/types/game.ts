export type Strategy = {
  id: string;
  name: string;
  description: string;
  cost: number;
  influence: number;
  timeRequired: number;
  bestFor: string[];
  impact: string;
};

export type StrategyHistory = {
  strategyId: string;
  timestamp: number;
  influence: number;
};

export type District = {
  id: string;
  name: string;
  population: number;
  currentInfluence: {
    player: number;
    opponent: number;
  };
  voterDemographic: string;
  citizenNature: string;
  keyIssues: string[];
  developmentNeeds: string[];
  recommendedStrategies: string[];
  playerStrategies: StrategyHistory[];
  opponentStrategies: StrategyHistory[];
};

export type GameState = {
  districts: District[];
  availableStrategies: Strategy[];
  playerScore: number;
  aiScore: number;
  timeRemaining: number;
  resources: number;
  gameEnded: boolean;
  strategyAnalysis: {
    effective: string[];
    ineffective: string[];
  };
};