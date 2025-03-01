import { getRequestMeta } from "next/dist/server/request-meta";
import React, { useEffect, useState } from "react";
import Question from "./Question";

export default function FinishedScreen({ ResetQuiz, correct, length,
  module, userId, PhishingData
}) {

  const storeScore = async () => {
    const data = {
      user_id: userId,
      module: module,
      total: length,
      correct: correct,
    };

    const response = await fetch("/api/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Score saved successfully");
    } else {
      console.log("Failed to save score");
    }
  };


  useEffect(() => {
    storeScore();
    console.log("PhishingData.questions: ", PhishingData.questions);
  }
    , []);


  return (
    <div className={`result-modal `}>
      <p className="result text-center w-75 bg-orange-500">
        You Scored <strong>{correct}</strong> out of {length}
      </p>
      {correct >= length / 2 ? (
        <>
          {/* display all the answers */}

         

          <div
            class="result2 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span class="font-medium">Success !</span> You Passed the Round You
            can proceed to next round
          </div>
        </>
      ) : (
        <div
          class="result2 p-4 mb-4 text-sm text-red-800 font-bold rounded-lg bg-red-50  dark:text-red-400 border-2 "
          role="alert"
        >
          <span class="font-medium">Sorry !</span> You Need Atleast {(length / 2).toFixed(0)}{" "}
          right answers to pass
        </div>
      )}
      {correct < length / 2 ? (
        <button className="btn2 btn-ui" onClick={ResetQuiz}>
          Restart Quiz
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
