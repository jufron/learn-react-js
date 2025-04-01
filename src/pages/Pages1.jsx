import Todo from "../components/Todolist/Todo";

export default function Pages1() {
  return (
    <>
      <Todo text="Learn React" isCompleted={true} />
      <Todo text="Learn Redux" isCompleted={true} />
      <Todo text="Learn Hooks" isCompleted={false} />
      <Todo text="Learn Context API" isCompleted={false} />
    </>
  );
}
