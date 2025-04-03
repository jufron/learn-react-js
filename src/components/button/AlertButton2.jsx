import { useRef } from "react";


export default function AlertButton2() {
  const counter = useRef(0);

  function handleClick (e) {
    console.log(e);
    console.log("Counter saat ini:", counter.current); // Cek perubahan di console
    counter.current++;
    // alert(`counter ${counter.current++}`);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        oke
      </button>
    </>
  );
}
