import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook() {
  const [ name, setName ] = useState('');
  const [ message, setMessage ] = useState('');
  const menuInput = useRef(null);

  function handleSubmit (e) {
    e.preventDefault();

    setName('');
    setMessage('');

    menuInput.current.focus();

    alert(`name : ${name}, message : ${message}`);
  }

  return (
    <>
      <h1>Guest Book</h1>
      <form>
        {/* <label htmlFor="name">name</label>
        <br/>
        <input 
          ref={menuInput} 
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        /> */}
        <GuestBookForm setRef={menuInput} name={name} setName={setName} />
        <br/>
        <label htmlFor="message">message</label>
        <br />
        <textarea 
          name="message" 
          id="message" 
          value={message}
          onChange={e => setMessage(e.target.value)}
        >
        </textarea>
        <br/>

        <button type="submit" onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
}