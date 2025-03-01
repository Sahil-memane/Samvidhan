"use client";
import React from "react";
export default function StartScreen({ dispatch, numQuestion }) {
  return (
    <div className="flex items-center flex-col text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestion} questions to test your React Mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: "action" })}>
        Let's Start
      </button>
    </div>
  );
}
