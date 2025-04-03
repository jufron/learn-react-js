import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";


export default function NoteList () {
  const notes = useContext(NotesContext);

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-10">
      {notes.map( note => (
        <li key={note.id} className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
}
