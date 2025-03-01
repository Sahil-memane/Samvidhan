import React from "react";
import { GrLinkNext } from "react-icons/gr";


export default function NextButton({
  setShowModal,
  length,
  currentQuestion,
  setCurrentQuestion,
  setAnswer,
}) {
  function ChangeStates() {
    if (length === currentQuestion + 1) {
      setShowModal(true);
    }
    setCurrentQuestion((question) => question + 1);
    setAnswer(() => null);
  }
  return (
    <button className="btn-ui bg-blue-700 p-2 border-black border text-white rounded-2xl pl-6 pr-6" onClick={ChangeStates}>
      Next
    </button>
  );
}
