"use client";

import React, { useState, useRef, useEffect } from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import { FaUser, FaPaperPlane } from 'react-icons/fa';
import NavBar from '@/components/NavBar';

export default function Page() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const endOfChatRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatHistory(prev => [...prev, { role: 'user', content: message }]);
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/get_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          feedback: 'Message from the user',
          language: 'English',
        }),
      });

      const data = await response.json();
      setChatHistory(prev => [...prev, { role: 'bot', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <NavBar />
      
      {/* Header */}
      <div className="bg-white shadow-md p-6 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
            <RiRobot2Line className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">RashtraGuru Chatbot</h1>
            <p className="text-gray-600">Your guide to understanding Indian Constitution</p>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto p-4 mb-24">
        {chatHistory.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg mx-auto">
              <RiRobot2Line className="w-16 h-16 mx-auto text-orange-500 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Welcome to RashtraGuru!</h2>
              <p className="text-gray-600 mb-4">
                I'm here to help you understand the Indian Constitution. Ask me anything about:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Fundamental Rights",
                  "Directive Principles",
                  "Constitutional Articles",
                  "Legal Terms",
                  "Historical Context",
                  "Constitutional Amendments"
                ].map((topic) => (
                  <div key={topic} className="bg-gray-50 p-2 rounded-lg text-sm text-gray-700">
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {chatHistory.map((entry, index) => (
              <div key={index} className={`flex ${entry.role === 'bot' ? 'justify-start' : 'justify-end'} gap-3`}>
                {entry.role === 'bot' && (
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                      <RiRobot2Line className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
                <div className={`flex flex-col max-w-[70%] ${entry.role === 'bot' ? 'items-start' : 'items-end'}`}>
                  <div className={`p-4 rounded-2xl ${
                    entry.role === 'bot' 
                      ? 'bg-white shadow-md' 
                      : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                  }`}>
                    <p className="text-sm">{entry.content}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                  </span>
                </div>
                {entry.role === 'user' && (
                  <div className="flex-shrink-0">
                    <div className="bg-gray-200 p-2 rounded-full">
                      <FaUser className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={endOfChatRef} />
          </div>
        )}
      </div>

      {/* Input Form */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about the Indian Constitution..."
              className="flex-1 px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Thinking...' : (
                <>
                  Ask <FaPaperPlane className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}