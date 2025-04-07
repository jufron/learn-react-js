


export default function Button ({ handleClickSearch, buttonText, buttonStatus }) {
  let buttonClassStatus = '';

  if (buttonStatus === 'danger') {
    buttonClassStatus = 'bg-red-500 hover:bg-red-700';
  } else if (buttonStatus === 'success') {
    buttonClassStatus = 'bg-green-500 hover:bg-green-700';
  } else if (buttonStatus === 'info') {
    buttonClassStatus = 'bg-blue-500 hover:bg-blue-700';
  } else if (buttonStatus === 'warning') {
    buttonClassStatus = 'bg-yellow-500 hover:bg-yellow-700';
  } else if (buttonStatus === 'secondary') {
    buttonClassStatus = 'bg-gray-300 hover:bg-gray-400';
  } else {
    buttonClassStatus = 'bg-blue-500 hover:bg-blue-700';
  }

  return (
    <button 
      onClick={handleClickSearch}
      className={`${buttonClassStatus} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
    >
      {buttonText}
    </button>
  );
}