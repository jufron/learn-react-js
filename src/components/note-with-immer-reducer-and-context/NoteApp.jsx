import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useImmerReducer } from "use-immer";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

function NoteReducer (draft, action) {
  if(action.type === 'ADD NOTE') {
    draft.push({id: id++, text: action.text, done: false});
  } else if(action.type === 'CHANGE NOTE') {
    const note = draft.find(note => note.id === action.id);
    note.text = action.text;
    note.done = action.done;
  } else if(action.type === 'DELETE NOTE') {
    const index = draft.findIndex(note => note.id === action.id);
    draft.splice(index, 1);
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
  const [ notes, dispatch ] = useImmerReducer(NoteReducer, initialNote);

  return (
    <>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </>
  );
}
