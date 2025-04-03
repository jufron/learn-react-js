import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm () {
  const [ text, setText ] = useState('');
  const dispatch = useContext(NotesDispatchContext);

  function handleChange (e) {
    setText(e.target.value);
  }

  function handleSubmitForm (e) {
    e.preventDefault();
    dispatch({
      type: 'ADD NOTE',
      text: text
    });
    setText('');
  }

  return (
    <div className="flex flex-col w-full">
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-y-2 w-full">
        <label htmlFor="text" className="font-semibold">Tambah Catatan</label>
        <input
          placeholder="Tambahkan catatan disini"
          className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="text"
          name="text"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Simpan
        </button>
      </form>
    </div>
  );
}
