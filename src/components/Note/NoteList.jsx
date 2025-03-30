import { useContext, useMemo, useRef, useState } from "react";
import { NotesContext } from "./NoteContex";
import Note from "./Note";
import NoteSearch from "./NoteSearch";

export default function NoteList () {  
  const notes = useContext(NotesContext);
  const [ search, setSearch ] = useState('');
  const searchInput = useRef(null);

  const filterNote = useMemo( () => {
    console.log('filtering memo');
    return notes.filter(note => note.text.includes(search));
  }, [notes, search]);

  function handleSearch () {
    console.log(`search : ${searchInput.current.value}`);
    setSearch(searchInput.current.value);
  }

  return (
    <>
      <NoteSearch useRef={searchInput} handleSearch={handleSearch} />
      <ul>
        {filterNote.map(note => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </>
  )
}