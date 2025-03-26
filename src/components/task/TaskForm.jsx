import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [item, setItem] = useState("");

  function handleChange (e) {
    setItem(e.target.value);
  }

  function handleClickWhenSubmit (e) {
    e.preventDefault();
    // use function from props
    onSubmit(item);

    setItem('');
  }

  return (
    <form>
      <label htmlFor="task">Your Task</label>
      <input 
        type="text" 
        onChange={handleChange} 
        value={item} 
        id="task"
      />
      <button onClick={handleClickWhenSubmit}>simpan</button>
    </form>
  );
}


