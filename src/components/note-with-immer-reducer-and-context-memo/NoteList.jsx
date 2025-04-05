import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";
import NoteSearch from "./NoteSearch";


export default function NoteList () {

  const notes = useContext(NotesContext);
  const [ search, setSearch ] = useState('');
  const resultSearchInput = useRef(null);

  const filterNotes = useMemo(() => {
    return notes.filter(note => {
      let result = search.toLowerCase();

      return note.text.toLowerCase().includes(result);
    });
  }, [notes, search]);

  return (
    <>
      <NoteSearch
        resultSearchInput={resultSearchInput}
        setSearch={setSearch}
      />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-10">
        {filterNotes.map( note => (
          <li key={note.id} className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Note note={note} />
          </li>
        ))}
      </ul>
    </>
  );
}
