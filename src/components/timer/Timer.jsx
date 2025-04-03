import { useRef, useState } from "react";

export default function Timer() {
  const [ start, setStart ] = useState(null);
  const [ now, setNow ] = useState(null);
  const timer = useRef(null);

  function handleStart () {
    setStart(Date.now());
    setNow(Date.now());

    timer.current = setInterval(() => {
      setNow(new Date().getTime());
    }, 100);

    console.log(timer.current);
  }

  function handleStop () {
    clearInterval(timer.current);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Time : {now - start} </h1>
      <div className="flex space-x-4">
        <button
          onClick={handleStop}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          stop
        </button>
        <button
          onClick={handleStart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          start
        </button>
      </div>
    </div>
  );
}
