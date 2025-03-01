"use client";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy
} from "firebase/firestore";
import NavBar from "@/components/NavBar";

// Firebase configuration - Replace with your credentials
const firebaseConfig = {
  apiKey: "AIzaSyBuJT54xuL7_r5YEDg3AUJhEyGRVIWbulE",
  authDomain: "samvidhan-67220.firebaseapp.com",
  projectId: "samvidhan-67220",
  storageBucket: "samvidhan-67220.firebasestorage.app",
  messagingSenderId: "322714689868",
  appId: "1:322714689868:web:c1817f095febb4075f2fe9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Leaderboard() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const scoresRef = collection(db, "users"); // Reference to users collection
        const q = query(scoresRef, orderBy("score", "desc")); // Query with ordering
        const snapshot = await getDocs(q); // Execute query
        setScores(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-8">
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-white p-6 border-b border-white/20">
          🏆 Top Players
        </h1>

        {loading ? (
          <div className="flex justify-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {scores.map((score, index) => (
              <div
                key={score.id}
                className="flex items-center p-4 hover:bg-white/5 transition-all duration-300"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    index === 0
                      ? "bg-yellow-500"
                      : index === 1
                      ? "bg-gray-300"
                      : index === 2
                      ? "bg-amber-600"
                      : "bg-white/20"
                  }`}
                >
                  <span className="text-xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <div className="ml-4 flex-grow">
                  <h2 className="text-xl font-semibold text-white">
                    {score.username}
                  </h2>
                </div>
                <div className="text-2xl font-bold text-emerald-400">
                  {score.score.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
