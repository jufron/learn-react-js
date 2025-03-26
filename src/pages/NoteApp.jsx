import { useReducer } from "react";
import NoteForm from "../components/Note/NoteForm";
import NoteList from "../components/Note/NoteList";
import Note from "../components/Note/Note";
import { useImmer, useImmerReducer } from "use-immer";

let id = 0;
const initialNote = [
  { id: id++, text: 'belajar html', done: false },
  { id: id++, text: 'belajar css', done: false },
  { id: id++, text: 'belajar js', done: false },
  { id: id++, text: 'belajar react', done: false },
  { id: id++, text: 'belajar redux', done: false },
  { id: id++, text: 'belajar nodejs', done: false },
  { id: id++, text: 'belajar express', done: false },
  { id: id++, text: 'belajar mongodb', done: false },
]

// ? function untuk reducer native
// function noteReducer (notes, action) {
//   switch (action.type) {
//     case 'ADD NOTE': 
//       return [
//         ...notes, { 
//           id: id++, 
//           text: action.text, 
//           note: false 
//         }
//       ];
//     case 'CHANGE NOTE': 
//       return notes.map(note => {
//          return note.id === action.id 
//             ? { ...note, text: action.text, done: action.done }
//             : note;
//       });
//     case 'DELETE NOTE': 
//       return notes.filter(note => note.id !== action.id);
//     default: 
//       return notes;
//   }
// }

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
  // const [notes, setNotes] = useImmer(initialNote);
  // const [notes, dispatch] = useReducer(noteReducer, initialNote);
  const [notes, dispatch] = useImmerReducer(noteReducer, initialNote);

  function handleAddNote (text) {
    dispatch({
      type: 'ADD NOTE',
      text: text
    });
  }

  function handleChangeNote (note) {
    dispatch({
      type: 'CHANGE NOTE',
      id: note.id,
      text: note.text,
      done: note.done
    });
  }

  function handleDeleteNote (id) {
    dispatch({
      type: 'DELETE NOTE',
      id: id
    });
  }

  // ? tanpa reducer
  // * function handleAddNote (note) {
  // *   setNotes(notes => {
  // *     notes.push({
  // *       id: id++,
  // *       text: note,
  // *       done: false
  // *     });
  // *   });
  // * }

  // ? tanpa reducer
  // * function handleChangeNote (note) {
  // *   setNotes(notes => {
  // *     const index = notes.findIndex( item => item.id === note.id );
  // *     notes[index] = note;
  // *   });
  // * }
  
  // ? tanpa reducer
  // * function handleDeleteNote (id) {
  // *   setNotes(notes => {
  // *     const index = notes.findIndex(item => item.id === id);
  // *     notes.splice(index, 1);
  // *   });
  // * }

  return (
    <>
      <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
      <NoteForm onAddNote={handleAddNote} />
    </>
  );
}