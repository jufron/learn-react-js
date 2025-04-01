import Todo from "./Todo";


const todos = [
  {
    text: 'Learn React',
    isCompleted: true,
  },
  {
    text: 'Learn Redux',
    isCompleted: true,
  },
  {
    text: 'Learn Hooks',
    isCompleted: false,
  },
  {
    text: 'Learn Context API',
    isCompleted: false,
  }
];

export default function Todolist () {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} />
      ))}
    </>
  );
}
