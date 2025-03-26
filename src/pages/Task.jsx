import { useImmer } from "use-immer";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";

// ? sharing state
export default function Task() {
  const [items, setItems] = useImmer([]);

  function handleOnSubmit (item) {    
    setItems(items => {
      items.push(item);
    });
  }

  return (
    <>
      <TaskForm onSubmit={handleOnSubmit} />
      <TaskList items={items} />
    </>
  );
}