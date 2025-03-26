import { useState } from "react";

function EditAndDelete ({ note, isEditing, setIsEditing, handleChangeText }) {
  
  const styleButtonSave = {
    margin: '0 1rem', 
    backgroundColor: 'green', 
    color: 'white', 
    padding: '0.5rem 1rem', 
    border: 'none'
  };

  const styleButtonEdit = {
    margin: '0 1rem', 
    backgroundColor: 'green', 
    color: 'white', 
    padding: '0.5rem 1rem', 
    border: 'none'
  };

  if (isEditing) {
    return (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button style={styleButtonSave} onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    return (
      <>
        <p>{note.text}</p>
        <button style={styleButtonEdit} onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
}

export default function Note ({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleChangeText (e) {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  }

  const styleButtonSave = {
    margin: '0 1rem', 
    backgroundColor: 'green', 
    color: 'white', 
    padding: '0.5rem 1rem', 
    border: 'none'
  };

  const styleButtonEdit = {
    margin: '0 1rem', 
    backgroundColor: 'green', 
    color: 'white', 
    padding: '0.5rem 1rem', 
    border: 'none'
  };

  if(isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button style={styleButtonSave} onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        <p>{note.text}</p>
        <button style={styleButtonEdit} onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone (e) {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  }

  const styleInputCheckbox = {
    margin: '0 1rem',
    backgroundColor: 'green',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none'
  };

  const styleButtonDelete = {
    margin: '0 1rem',
    backgroundColor: 'red',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none'
  };

  return (
    <>
      <label>
        <input
          style={styleInputCheckbox}
          type="checkbox"
          checked={note.done}
          onChange={handleChangeDone}
        />
        <EditAndDelete 
          note={note} 
          isEditing={isEditing} 
          setIsEditing={setIsEditing}
          handleChangeText={handleChangeText}
        />
        <button style={styleButtonDelete} onClick={() => onDelete(note.id)}>Delete</button>
      </label>
    </>
  );
}