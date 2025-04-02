import { useState } from "react";

export default function Counter ({ name }) {
  const [ count, setCount ] = useState(0);

  function handleClick () {
    setCount(count + 1);
  }

  return (
    <div className="bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-2">
        Count {name} : {count}
      </h1>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        increment
      </button>
    </div>
  );
}
