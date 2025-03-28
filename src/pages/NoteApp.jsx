import { useReducer } from "react";
import NoteForm from "../components/Note/NoteForm";
import NoteList from "../components/Note/NoteList";
import Note from "../components/Note/Note";
import { useImmer, useImmerReducer } from "use-immer";
import { NotesContext, NoteDispatchContext } from "../components/Note/NoteContex";

let id = 0;
const initialNotes = [
  { id: id++, text: 'belajar html', done: false },
  { id: id++, text: 'belajar css', done: false },
  { id: id++, text: 'belajar js', done: false },
  { id: id++, text: 'belajar react', done: false },
  { id: id++, text: 'belajar redux', done: false },
  { id: id++, text: 'belajar nodejs', done: false },
  { id: id++, text: 'belajar express', done: false },
  { id: id++, text: 'belajar mongodb', done: false },
]

function noteReducer (notes, action) {
  if (action.type === 'ADD NOTE') {
    notes.push({ id: id++, text: action.text, done: false });
  } else if (action.type === 'CHANGE NOTE') {
    const index = notes.findIndex(note => note.id === action.id);
    // notes[index] = { ...notes[index], text: action.text, done: action.done };
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === 'DELETE NOTE') {
    const index = notes.findIndex(note => note.id === action.id);
    notes.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(noteReducer, initialNotes);

  return (
    <>
    <NotesContext.Provider value={notes}>
      <NoteDispatchContext.Provider value={dispatch}>
        <h1>Note App</h1>
        <NoteList />
        <NoteForm />
      </NoteDispatchContext.Provider>
    </NotesContext.Provider>
    </>
  );
}