import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note ({ note }) {
  const dispatch = useContext(NotesDispatchContext);
  const [ isEditing, isSetEditing ] = useState(false);

  function handleChangeText (e) {
    console.log(e.target.value);
    dispatch({
      ...note,
      type: 'CHANGE NOTE',
      text: e.target.value,
    });
  }

  function handleChangeDone (e) {
    dispatch({
      ...note,
      type: 'CHANGE NOTE',
      done: e.target.checked,
    });
  }

  function handleClickDelete () {
    dispatch({
      type: 'DELETE NOTE',
      id: note.id,
    });
  }

  return (
    <>
      <input
        className="accent-green-500"
        type="checkbox"
        checked={note.done}
        onChange={handleChangeDone}
      />
      <RenderEditOrShow
        note={note}
        isEditing={isEditing}
        handleChangeText={handleChangeText}
        isSetEditing={isSetEditing}
      />
      <button
        onClick={() => handleClickDelete()}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
      >
        Delete
      </button>
    </>
  );
}

function RenderEditOrShow ({ note, isEditing, handleChangeText, isSetEditing }) {
  if (isEditing) {
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
  } else {
    return (
      <div className="flex items-center space-x-2">
        <span
          className={`text-gray-800 ${note.done ? 'line-through' : ''}`}
        >
          {note.text}
        </span>
        <button
          onClick={() => isSetEditing(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Edit
        </button>
      </div>
    );
  }
}
