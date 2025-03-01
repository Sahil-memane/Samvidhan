import React from "react";
import Options from "./Options";
import NextButton from "./NextQuestion";

export default function Question({
  question,
  answer,
  totalPoints,
  points,
  correctAnswer,
  setAnswer,
  setCurrentQuestion,
  isDisplay = false,
}) {
  console.log(question);
  return (
    <div className="w-100 h-100 ">
      <h4 className="text-center  font-semibold  text-3xl mb-12 text-gray-900 rounded-lg   group">
        {question.question}
      </h4>
      {answer == null ? (
        <Options
          question={question}
          answer={answer}
          correctAnswer={correctAnswer}
          points={points}
          setAnswer={setAnswer}
          totalPoints={totalPoints}
          transfer={true}
          setCurrentQuestion={setCurrentQuestion}
          isDisplay={isDisplay}
        />
      ) : (
        <Options
          question={question}
          answer={answer}
          correctAnswer={correctAnswer}
          points={points}
          setAnswer={setAnswer}
          totalPoints={totalPoints}
          transfer={false}
          setCurrentQuestion={setCurrentQuestion}
          isDisplay={isDisplay}
        />
      )}
    </div>
  );
}
