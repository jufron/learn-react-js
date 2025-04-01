

export default function AlertButton ({  buttonType = 'none', handleClick, text }) {

  let buttonStyleColor = '';
  if(buttonType === 'success') {
    buttonStyleColor = 'bg-green-500 hover:bg-green-700';
  } else if (buttonType === 'info') {
    buttonStyleColor = 'bg-blue-500 hover:bg-blue-700';
  } else if (buttonType === 'danger') {
    buttonStyleColor = 'bg-red-500 hover:bg-red-700';
  } else {
    buttonStyleColor = 'bg-blue-500 hover:bg-blue-700';
  }

  return (
    <button
      className={`transition duration-300 ease-in-out ${buttonStyleColor} text-white font-bold py-2 px-4 rounded mx-2 my-2`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
