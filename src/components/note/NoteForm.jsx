import { useState } from "react";

export default function NoteForm ({ onAddNote }) {
  const [ text, setText ] = useState('');

  function handleChange (e) {
    setText(e.target.value);
  }

  function handleSubmitForm (e) {
    e.preventDefault();
    onAddNote(text);

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
