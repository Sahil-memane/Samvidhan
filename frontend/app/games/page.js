"use client";
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function Page() {
  const [hoveredGame, setHoveredGame] = useState(null);

  const games = [
    {
      title: 'Constitutional Mario',
      description: 'Constitution Mario is an educational adventure game designed to blend the excitement of classic platformers with the principles of constitutional literacy. In this engaging game, players navigate through vibrant levels inspired by iconic platformers, encountering challenges and puzzles that teach them about the fundamental aspects of constitutional law.',
      endpoint: 'start-game-1',
      image: "/mario.jpg",
      color: 'from-purple-700 to-indigo-700'
    },
    {
      title: 'Sanvidhan Prashnamala',
      description: 'Sanvidhan Prashnamala is an interactive quiz game designed to test and expand your knowledge of the Indian Constitution. Players answer thought-provoking questions on constitutional topics and explore key historical and legal facts, ensuring a fun and informative experience.',
      endpoint: 'start-game-2',
      image: "/gesture.jpg",
      color: 'from-green-700 to-teal-700'
    },
    {
      title: 'Constitutional Termix',
      description: 'Constitutional Termix merges the thrill of a classic block puzzle game with learning. Arrange falling blocks to form terms and concepts related to constitutional law. Sharpen your skills while broadening your understanding of vital legal principles.',
      endpoint: '/play-game-4',
      image: "/123.jpg",
      color: 'from-orange-700 to-red-700'
    },
    {
      title: "Justice Defender",
      description: "Step into the courtroom as a lawyer defending constitutional rights.",
      endpoint: "start-justice-defender",
      path: "/games/justice-defender",
      image: "/justice.jpg",
      color: "from-red-700 to-yellow-700",
    },
    {
      title: "Fundamental Rights Explorer",
      description:
        "Explore different real-life scenarios and make choices based on fundamental rights.",
      endpoint: "start-fundamental-rights-explorer",
      path: "/games/fundamental-rights-explorer",
      image: "/rights.jpg",
      color: "from-indigo-700 to-blue-700",
    },
    {
      title: "Election Strategy Board",
      description:
        "Election Strategy Builder puts you in charge of a political campaign, where you strategically balance resources and voter influence across diverse districts.",
      endpoint: "start-democracy-builder",
      path: "/games/democracy-builder",
      image: "/democracy.jpg",
      color: "from-yellow-700 to-green-700",
    },
  ];

  const HandleClick = async (endpoint) => {
    try {
      const username = localStorage.getItem("username");
      if (!username) {
        console.error("Username not found in local storage");
        alert("Please log in to continue.");
        return;
      }
      const response = await fetch(`http://localhost:5000/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-700">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text mb-4">
            Experience Constitutional Learning Like Never Before!
          </h1>
          <p className="text-gray-300 text-xl">
            Explore engaging, interactive games that make understanding the constitution exciting and insightful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredGame(index)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${game.image})` }}
                />
                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {game.title}
                    </h3>
                    <p className={`text-gray-200 transition-all duration-300 ${hoveredGame === index ? 'opacity-100' : 'opacity-0'}`}>
                      {game.description}
                    </p>
                  </div>
                  
                  <Link href={
                      game.title === "Constitutional Termix" ? "/games/constitutionaltermix" :
                      game.title === "Justice Defender" ? "/games/justice-defender" : 
                      game.title === "Fundamental Rights Explorer" ? "/games/fundamental-rights-explorer" : 
                      game.title === "Election Strategy Board" ? "/games/election-strategy-builder" : "#"
                    }
                  >
                    <button
                      className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${game.color} 
                        text-white font-semibold transform transition-all duration-300 
                        hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
                      onClick={() => HandleClick(game.endpoint)}
                    >
                      Play Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
