import React, { useState, useEffect } from "react";

export default function Options({
  question,
  answer,
  totalPoints,
  setAnswer,
  setCurrentQuestion,
  isDisplay = false,
}) {
  function ChangeStates(index) {
    totalPoints((preVal) => preVal + 1);
    setAnswer(index);
  }

  return (
    <div className={`options `}>
      {question.options.map((option, index) => (
        <label
          key={option}
          className={`radio-option ${
            answer === null ? "float_right_options" : ""
          } radio-btn ${
            answer !== null && index === question.correctOption - 1
              ? "answer"
              : ""
          } ${isDisplay && answer !== null ? index === question.correctOption - 1  ? "correct" : "" : ""}`}
        >
          {console.log(
            question.question,
            "Index in Question Component is ",
            index,
            question.correctOption,
            " question is "
          )}
          <input
            type="radio"
            name="option"
            style={{ marginRight: "10px" }}
            checked={answer === index}
            disabled={answer !== null}
            onChange={() =>
              index === question.correctOption - 1
                ? ChangeStates(index)
                : setAnswer(() => index)
            }
          />
          {option}
        </label>
      ))}
    </div>
  );
}
