import React from 'react';
import { Flag } from 'lucide-react';

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-6 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex items-center space-x-4">
          <div className="bg-white p-2 rounded-full shadow-lg">
            <Flag className="h-8 w-8 text-[#000080]" />
          </div>
          <h1 className="text-3xl font-bold text-[#000080]">
            Election Strategy Builder
            <span className="block text-sm font-medium text-gray-600 mt-1">
              Shape the Future of Democracy
            </span>
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-right hidden md:block">
            <p className="text-[#000080] font-semibold">Election Commission of India</p>
            <p className="text-sm text-gray-600">Democracy's Guardian</p>
          </div>
          <img 
            src="./../../ELECTION_COMMISSION_OF_INDIA_LOGO.png" 
            alt="Election Commission Logo" 
            className="h-16 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};