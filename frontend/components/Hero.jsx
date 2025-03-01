"use client";
import React from "react";


export default function Hero() {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center relative"
            style={{ backgroundImage: "url('/hero-section-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="z-10 text-center text-white">
                <p className="text-lg md:text-2xl mb-3">
                    We, the People of India
                </p>
                <h1 className="text-4xl md:text-6xl font-bold">
                        <span className="text-orange-600">Discover the </span>
                        <span>
                            Constitution of
                            <div className="mb-4"></div>
                            India
                        </span>
                    
                    <span className="text-green-600"> Through Play</span>
                </h1>
                
                <p className="text-base md:text-xl mt-4">
                    Learn, play, and understand your rights and duties in fun,
                    interactive ways
                </p>
                <a href="/learn">
                <button className="mt-10 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
                    Let's Learn
                </button>
                </a>
            </div>
        </div>
    );
}
