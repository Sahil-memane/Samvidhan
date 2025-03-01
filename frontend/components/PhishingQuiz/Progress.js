function Progress({ index, numQuestion, points, maxPossibleValue, answer }) {
  return (
    <header className="progress">
      <progress
        // style={{
        //   color: "#000000 !important",
        //   accentColor: "#000000 !important",
        //   WebkitAccentColor: "#000000 !important",
        //   AccentColor: "#000000 !important",
        // }}
        max={numQuestion}
        value={index + Number(answer !== null)}
      >
        {" "}
      </progress>
      <p className="text-black">
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      {/* <p>
        <strong>Correct: {points}</strong> / {maxPossibleValue}
      </p> */}
    </header>
  );
}

export default Progress;
