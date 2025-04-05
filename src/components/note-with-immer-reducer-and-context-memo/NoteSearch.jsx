

export default function NoteSearch ({ resultSearchInput, setSearch }) {

  function handleClickSearch() {
    console.log(`result search ${resultSearchInput.current.value}`);
    setSearch(resultSearchInput.current.value);
  }

  return (
    <>
      <input
        type="text"
        ref={resultSearchInput}
        placeholder="Search"
        className="border rounded-md px-3 py-2 mb-4"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleClickSearch}
      >
        Cari
      </button>
    </>
  );
};
