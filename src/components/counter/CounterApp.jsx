import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [ showButton, setShowButton ] = useState(true);

  return (
    <>
      {/* {showButton ? <Counter key="1" name="1" /> : <Counter key="2" name="2" />} */}
      {showButton ? <Counter name="1" /> : <Counter name="2" />}
      <button onClick={() => setShowButton(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        hidden Button
      </button>
      <button onClick={() => setShowButton(true)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        show Button
      </button>
    </>
  );
}
