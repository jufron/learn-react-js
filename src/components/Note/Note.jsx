import { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContex";

// function EditAndDelete ({ note, isEditing, setIsEditing, handleChangeText }) {
  
//   const styleButtonSave = {
//     margin: '0 1rem', 
//     backgroundColor: 'green', 
//     color: 'white', 
//     padding: '0.5rem 1rem', 
//     border: 'none'
//   };

//   const styleButtonEdit = {
//     margin: '0 1rem', 
//     backgroundColor: 'green', 
//     color: 'white', 
//     padding: '0.5rem 1rem', 
//     border: 'none'
//   };

//   if (isEditing) {
//     return (
//       <>
//         <input type="text" value={note.text} onChange={handleChangeText} />
//         <button style={styleButtonSave} onClick={() => setIsEditing(false)}>Save</button>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <p>{note.text}</p>
//         <button style={styleButtonEdit} onClick={() => setIsEditing(true)}>Edit</button>
//       </>
//     );
//   }
// }

export default function Note ({ note }) {
  const dispatch = useContext(NoteDispatchContext);
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleChangeText(e) {
    dispatch({ 
      ...note,
      type: 'CHANGE NOTE', 
      text: e.target.value 
    });
  }

  function handleChangeDone (e) {
    dispatch({
      ...note,
      type: 'CHANGE NOTE',
      done: e.target.checked
    });
  }

  function handleDelete () {
    dispatch({ 
      type: 'DELETE NOTE', 
      id: note.id 
    });
  }

  // function handleChangeText (e) {
  //   const newNote = { ...note, text: e.target.value };
  //   onChange(newNote);
  // }

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
        <input 
          type="text" 
          value={note.text}
          onChange={handleChangeText} 
        />
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

  // function handleChangeDone (e) {
  //   const newNote = { ...note, done: e.target.checked };
  //   onChange(newNote);
  // }

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
        {component}
        <button 
          style={styleButtonDelete} 
          onClick={handleDelete}
        >
            Delete
        </button>
      </label>
    </>
  );
}