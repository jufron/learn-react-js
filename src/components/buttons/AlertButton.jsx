


export default function AlertButton({ message }) {
  
  function handleClick() {
    alert(message);
  }

  return (
    <button onClick={handleClick}>oke</button>
  );
}