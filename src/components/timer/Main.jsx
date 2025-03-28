import { useRef, useState } from "react";

export default function Main() {
  const [ start, setStart ] = useState('');
  const [now, setNow ] = useState('');
  const timer = useRef(null);

  function handleStart () {
    setStart(Date.now());
    setNow(Date.now());

    timer.current = setInterval(() => {
      setNow(new Date());
    }, 10);
  }

  function handleStop () {
    clearInterval(timer.current);
  }

  return (
    <>
      <h1>Time : {now - start}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
}