import { useImmer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useState } from "react";

let id = 0;
const initialNote = [
  { id: id++, text: 'belajar react hook', done: false },
  { id: id++, text: 'belajar react router', done: false },
  { id: id++, text: 'belajar react testing', done: false },
  { id: id++, text: 'belajar react typescript', done: false },
  { id: id++, text: 'belajar react redux', done: true },
];

export default function NoteApp () {
  const [ notes, setNotes ] = useImmer(initialNote);

  // * send method to form handler
  function handleAddNote (text) {
    console.log(text);
    setNotes((draft) => {
      draft.push({
        id: id++,
        text: text,
        done: false
      });
    });
  }

  // * change note method to from notelist component
  function handleChangeNote (note) {
    setNotes((draft) => {
      const index = draft.findIndex((item) => item.id === note.id);
      draft[index] = note;
    });
  }

  // * delete note method to from notelist component
  function handleDeleteNote (note) {
    setNotes((draft) => {
      const index = draft.findIndex((item) => item.id === note.id);
      draft.splice(index, 1);
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
