import { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContex";


export default function NoteForm() {
  const [text, setText] = useState('');
  const dispatch = useContext(NoteDispatchContext);

  function handleOnChange (e) {
    setText(e.target.value);
  }

  function handleClick () {
    dispatch({ type: 'ADD_NOTE', text });
    setText('');
  }

  return (
    <>
      <input 
        type="text" 
        value={text} 
        onChange={handleOnChange} 
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
}