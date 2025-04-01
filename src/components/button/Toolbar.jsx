

export default function Toolbar () {

  function handleClickToolbar () {
    console.log('klik toolbar');
  }
  
  function handleClickSubmit (e) {
    e.stopPropagation();
    console.log('klik button submit 1');
  }

  function handleClickSubmit2 (e) {
    e.stopPropagation();
    console.log('klik button submit 2');
  }

  function handleClickSubmit (e) {
    e.stopPropagation();
    e.preventDefault();

    console.log('form submit');
  }

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md" onClick={handleClickToolbar}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 my-2 rounded"
        onClick={handleClickSubmit}
      >
        klik saya misalnya link
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 my-2 rounded"
        onClick={handleClickSubmit2}
      >
        klik saya misanya link
      </button>

      <form>
        <input type="text" />
        <button
          onClick={handleClickSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 my-2 rounded"
        >
          simpan data
        </button>
      </form>
    </div>
  );
}
