import { useImmer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";

function NoteReducer (notes, action) {
  switch(action.type) {
    case 'ADD NOTE':
      return [...notes, {id: id++, text: action.text, done: false}];
    case 'CHANGE NOTE':
      return notes.map(note => note.id === action.id ? { ...note, text: action.text, done: action.done } : note );
    case 'DELETE NOTE':
      return notes.filter(note => note.id !== action.id);
    default :
      return notes;
  }
}

let id = 0;
const initialNote = [
  { id: id++, text: 'belajar react hook', done: false },
  { id: id++, text: 'belajar react router', done: false },
  { id: id++, text: 'belajar react testing', done: false },
  { id: id++, text: 'belajar react typescript', done: false },
  { id: id++, text: 'belajar react redux', done: true },
];

export default function NoteApp () {
  const [ notes, dispatch ] = useReducer(NoteReducer, initialNote);

  // * send method to form handler
  function handleAddNote (text) {
    dispatch({
      type: 'ADD NOTE',
      text: text
    });
  }

  // * change note method to from notelist component
  function handleChangeNote (note) {
    dispatch({
      type: 'CHANGE NOTE',
      id: note.id,
      text: note.text,
      done: note.done
    });
  }

  // * delete note method to from notelist component
  function handleDeleteNote (note) {
    dispatch({
      type: 'DELETE NOTE',
      id: note.id
    });
  }

  return (
    <>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </>
  );
}
