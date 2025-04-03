import { useState } from "react";


export default function Note ({ note, onChange, onDelete }) {
  const [ isEditing, isSetEditing ] = useState(false);

  function handleChangeText (e) {
    const newNote = {...note, text: e.target.value};
    onChange(newNote);
  }

  function handleChangeDone (e) {
    const newNote = {...note, done: e.target.checked};
    onChange(newNote);
  }

  return (
    <>
      <input
        className="accent-green-500"
        type="checkbox"
        checked={note.done}
        onChange={handleChangeDone}
      />
      {isEditing ? (
        <NoteEdit
          note={note}
          handleChangeText={handleChangeText}
          isSetEditing={isSetEditing}
        />
      ) : (
        <NoteShow
          note={note}
          onEdit={() => isSetEditing(true)}
        />
      )}
      <button
        onClick={() => onDelete(note)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
      >
        Delete
      </button>
    </>
  );
}

function NoteEdit ({ note, handleChangeText, isSetEditing }) {
  return (
    <>
      <input
        type="text"
        value={note.text}
        onChange={handleChangeText}
        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => isSetEditing(false)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
      >
        Update Perubahan
      </button>
    </>
  );
}

function NoteShow ({ note, onEdit }) {
  return (
    <div className="flex items-center space-x-2">
      <span
        className={`text-gray-800 ${note.done ? 'line-through' : ''}`}
      >
        {note.text}
      </span>
      <button
        onClick={onEdit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      >
        Edit
      </button>
    </div>
  );
}
