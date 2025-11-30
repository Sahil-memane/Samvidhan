import { Strategy, District } from '../types/game';

export const strategies: Strategy[] = [
  {
    id: 'campaign-run',
    name: 'Campaign Run',
    description: 'Conduct door-to-door campaigning to connect directly with voters',
    cost: 500000, // 5 lakhs
    influence: 15,
    timeRequired: 2,
    bestFor: ['Traditional communities', 'Rural areas', 'Close-knit neighborhoods'],
    impact: 'High personal connection'
  },
  {
    id: 'ads-hold',
    name: 'Advertisement Campaign',
    description: 'Launch targeted advertising across various media platforms',
    cost: 800000, // 8 lakhs
    influence: 20,
    timeRequired: 3,
    bestFor: ['Urban areas', 'Tech-savvy populations', 'Youth demographics'],
    impact: 'Wide digital reach'
  },
  {
    id: 'rally-gather',
    name: 'Public Rally',
    description: 'Organize large-scale public meetings with party supporters',
    cost: 1000000, // 10 lakhs
    influence: 25,
    timeRequired: 4,
    bestFor: ['Semi-urban areas', 'Traditional voters', 'Political strongholds'],
    impact: 'Mass engagement'
  },
  {
    id: 'endorsement',
    name: 'Celebrity Endorsement',
    description: 'Get support from influential public figures',
    cost: 1200000, // 12 lakhs
    influence: 30,
    timeRequired: 2,
    bestFor: ['Urban youth', 'Entertainment-focused demographics', 'Swing voters'],
    impact: 'High visibility'
  },
  {
    id: 'pr-campaign',
    name: 'Public Relations',
    description: 'Improve public image through media engagement',
    cost: 600000, // 6 lakhs
    influence: 18,
    timeRequired: 3,
    bestFor: ['Media-savvy populations', 'Opinion-driven voters', 'Urban professionals'],
    impact: 'Credibility boost'
  },
  {
    id: 'policy-announcement',
    name: 'Policy Announcement',
    description: 'Declare new policies and development plans',
    cost: 400000, // 4 lakhs
    influence: 22,
    timeRequired: 2,
    bestFor: ['Issue-focused voters', 'Educated demographics', 'Development-seeking areas'],
    impact: 'Long-term vision'
  },
  {
    id: 'youth-connect',
    name: 'Youth Connect Program',
    description: 'Organize events and initiatives targeting young voters',
    cost: 700000, // 7 lakhs
    influence: 24,
    timeRequired: 3,
    bestFor: ['College areas', 'First-time voters', 'Tech hubs'],
    impact: 'Future leadership'
  },
  {
    id: 'cultural-event',
    name: 'Cultural Festival',
    description: 'Organize cultural events celebrating local traditions',
    cost: 900000, // 9 lakhs
    influence: 23,
    timeRequired: 4,
    bestFor: ['Traditional areas', 'Cultural zones', 'Festival seasons'],
    impact: 'Cultural bonding'
  },
  {
    id: 'tech-initiative',
    name: 'Digital Innovation',
    description: 'Launch tech-based solutions for civic issues',
    cost: 1100000, // 11 lakhs
    influence: 28,
    timeRequired: 3,
    bestFor: ['Smart cities', 'Tech professionals', 'Urban youth'],
    impact: 'Modern governance'
  },
  {
    id: 'farmer-outreach',
    name: 'Farmer Connect',
    description: 'Special programs addressing agricultural community needs',
    cost: 800000, // 8 lakhs
    influence: 26,
    timeRequired: 4,
    bestFor: ['Rural areas', 'Farming communities', 'Agricultural zones'],
    impact: 'Rural support'
  }
];

export const initialDistricts: District[] = [
  {
    id: 'd1',
    name: 'North Delhi',
    population: 500000,
    currentInfluence: {
      player: 50,
      opponent: 50
    },
    voterDemographic: 'Urban Mixed',
    citizenNature: 'Tech-savvy professionals and traditional business families',
    keyIssues: [
      'Smart city infrastructure',
      'Business-friendly policies',
      'Traffic management',
      'Air quality improvement',
      'water problem',
      'Public transportation',
      'Digital services'
    ],
    developmentNeeds: [
      'Modern public transport',
      'Digital governance',
      'Commercial zone development',
      'Green spaces',
      'Smart parking solutions'
    ],
    recommendedStrategies: ['ads-hold', 'tech-initiative', 'policy-announcement', 'pr-campaign'],
    playerStrategies: [],
    opponentStrategies: []
  },
  {
    id: 'd2',
    name: 'South Mumbai',
    population: 600000,
    currentInfluence: {
      player: 50,
      opponent: 50
    },
    voterDemographic: 'Cosmopolitan',
    citizenNature: 'Affluent, globally connected citizens',
    keyIssues: [
      'International trade policies',
      'Urban infrastructure',
      'Cultural preservation',
      'Coastal development',
      'Luxury housing',
      'Entertainment zones'
    ],
    developmentNeeds: [
      'World-class amenities',
      'Heritage conservation',
      'Financial district expansion',
      'Art and culture centers',
      'Premium shopping districts'
    ],
    recommendedStrategies: ['endorsement', 'cultural-event', 'pr-campaign', 'policy-announcement'],
    playerStrategies: [],
    opponentStrategies: []
  },
  {
    id: 'd3',
    name: 'Rural Bengal',
    population: 400000,
    currentInfluence: {
      player: 50,
      opponent: 50
    },
    voterDemographic: 'Agricultural',
    citizenNature: 'Traditional farming communities with strong cultural ties',
    keyIssues: [
      'Agricultural subsidies',
      'Rural employment',
      'Cultural preservation',
      'Education access',
      'Healthcare facilities',
      'Market access'
    ],
    developmentNeeds: [
      'Agricultural infrastructure',
      'Rural healthcare',
      'Educational institutions',
      'Storage facilities',
      'Road connectivity'
    ],
    recommendedStrategies: ['farmer-outreach', 'campaign-run', 'cultural-event', 'rally-gather'],
    playerStrategies: [],
    opponentStrategies: []
  },
  {
    id: 'd4',
    name: 'Bangalore Central',
    population: 550000,
    currentInfluence: {
      player: 50,
      opponent: 50
    },
    voterDemographic: 'Tech Hub',
    citizenNature: 'Young IT professionals and entrepreneurs',
    keyIssues: [
      'Tech infrastructure',
      'Startup policies',
      'Urban mobility',
      'Housing affordability',
      'Work-life balance',
      'Environmental sustainability'
    ],
    developmentNeeds: [
      'Tech parks',
      'Metro expansion',
      'Affordable housing',
      'Innovation hubs',
      'Green initiatives'
    ],
    recommendedStrategies: ['tech-initiative', 'youth-connect', 'ads-hold', 'policy-announcement'],
    playerStrategies: [],
    opponentStrategies: []
  },
  {
    id: 'd5',
    name: 'Punjab Plains',
    population: 450000,
    currentInfluence: {
      player: 50,
      opponent: 50
    },
    voterDemographic: 'Agricultural',
    citizenNature: 'Progressive farming community with strong religious values',
    keyIssues: [
      'MSP guarantees',
      'Water resources',
      'Religious harmony',
      'Youth employment',
      'Agricultural modernization',
      'Sports facilities'
    ],
    developmentNeeds: [
      'Irrigation systems',
      'Food processing units',
      'Sports infrastructure',
      'Religious tourism',
      'Agricultural research centers'
    ],
    recommendedStrategies: ['farmer-outreach', 'cultural-event', 'campaign-run', 'rally-gather'],
    playerStrategies: [],
    opponentStrategies: []
  }
];