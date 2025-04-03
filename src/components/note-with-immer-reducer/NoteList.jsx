import Note from "./Note";


export default function NoteList ({ notes, onChange, onDelete }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-10">
      {notes.map( note => (
        <li key={note.id} className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
          <Note note={note} onChange={onChange} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
