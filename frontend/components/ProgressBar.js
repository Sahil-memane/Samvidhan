import React from "react";

export default function ProgressBar({ progress }) {
  // Calculate the width of the progress bar dynamically
  const progressBarWidth = `calc(${progress ? progress : 0}% - 1.25rem)`;

  return (
    <div>
      <div className="text-gray-900  text-center text-2xl font-bold">
        Your Progress
      </div>
      <div
        className="inline-block mb-2 py-1 px-2 bg-orange-700 border border-orange-700 font-medium text-white rounded-lg dark:bg-orange-800/100 dark:border-orange-800 dark:text-white text-sm"
        style={{ marginLeft: progressBarWidth }}
      >
        {progress ? progress : 0}%
      </div>

      <div
        className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
        role="progressbar"
        aria-valuenow={progress ? progress : 0}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="flex flex-col justify-center rounded-full overflow-hidden bg-orange-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-orange-500"
          style={{ width: `${progress ? progress : 0}%` }}
        ></div>
      </div>
    </div>
  );
}
