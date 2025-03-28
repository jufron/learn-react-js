import { useRef } from "react";



// export default function AlertButton({ message }) {
  
//   function handleClick() {
//     alert(message);
//   }

//   return (
//     <button onClick={handleClick}>oke</button>
//   );
// }

export default function AlertButton({ text, message }) {
  const currentCounter = useRef(0);

  function handleClick (e) {
    console.log(e);
    alert(`${message} ${currentCounter.current++}`);
  }

  return (
    <button onClick={handleClick}>{text}</button>
  );
}