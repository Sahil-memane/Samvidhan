import React from 'react';
import { District as DistrictType, Strategy } from '../types/game';
import { Users, Building2, Lightbulb } from 'lucide-react';

interface DistrictProps {
  district: DistrictType;
  strategies: Strategy[];
  onStrategySelect: (districtId: string, strategyId: string) => void;
  resources: number;
}

export const District = ({ district, strategies, onStrategySelect, resources }: DistrictProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-[#138808] hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-[#FF9933]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 -ml-16 -mb-16 bg-[#138808]/10 rounded-full blur-2xl"></div>
      
      <h3 className="text-xl font-semibold text-[#000080] mb-2 relative">{district.name}</h3>
      
      <div className="text-sm text-gray-600 mb-4 relative">
        <p>Population: {district.population.toLocaleString()}</p>
        <div className="flex justify-between mt-2">
          <p className="text-[#000080] font-medium">Your Influence: {district.currentInfluence.player}%</p>
          <p className="text-[#FF9933] font-medium">Opposition: {district.currentInfluence.opponent}%</p>
        </div>
      </div>

      <div className="mb-4 space-y-3 relative">
        <div className="flex items-start gap-2">
          <Users className="w-5 h-5 mt-1 text-[#000080]" />
          <div>
            <p className="font-semibold">Demographics & Nature</p>
            <p className="text-sm">{district.voterDemographic}</p>
            <p className="text-sm italic">{district.citizenNature}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Building2 className="w-5 h-5 mt-1 text-[#FF9933]" />
          <div>
            <p className="font-semibold">Key Issues</p>
            <ul className="text-sm list-disc ml-4">
              {district.keyIssues.map((issue, i) => (
                <li key={i}>{issue}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Lightbulb className="w-5 h-5 mt-1 text-[#138808]" />
          <div>
            <p className="font-semibold">Development Needs</p>
            <ul className="text-sm list-disc ml-4">
              {district.developmentNeeds.map((need, i) => (
                <li key={i}>{need}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-4 relative">
        <h4 className="font-semibold mb-2">Strategy History</h4>
        <div className="text-sm">
          <div className="mb-2">
            <p className="text-[#000080] font-medium">Your Strategies:</p>
            {district.playerStrategies.map((s, i) => (
              <p key={`p-${i}`} className="ml-2">
                - {strategies.find(st => st.id === s.strategyId)?.name}
              </p>
            ))}
          </div>
          <div>
            <p className="text-[#FF9933] font-medium">Opposition Strategies:</p>
            {district.opponentStrategies.map((s, i) => (
              <p key={`o-${i}`} className="ml-2">
                - {strategies.find(st => st.id === s.strategyId)?.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2 relative">
        <select
          className="w-64 p-2 border rounded-md bg-white/80 backdrop-blur-sm text-sm hover:bg-white transition-colors duration-200"
          onChange={(e) => onStrategySelect(district.id, e.target.value)}
        >
          <option value="">Select Strategy</option>
          {strategies.map((strategy) => (
            <option 
              key={strategy.id} 
              value={strategy.id}
              disabled={strategy.cost > resources}
            >
              {strategy.name} (₹{strategy.cost.toLocaleString()}) - {strategy.impact}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};