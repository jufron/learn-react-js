import { useState } from "react";
import { useImmer } from "use-immer";

function Task() {
  const [item, setItem] = useState("");
  const [items, setItems] = useImmer([]);

  function handleChange (e) {
    setItem(e.target.value);
  }

  function handleClickWhenSubmit (e) {
    e.preventDefault();
    setItems(items => {
      items.push(item);
    });
    setItem('');
  }

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
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
    </>
  );
}

export default Task;
