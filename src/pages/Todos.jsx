import TodoCondition from "../components/TodoCondition"


const listTodo = [
  {
    text: "belajar html",
    isComplate: true,
    isDeleted: true,
  },
  {
    text: "belajar css",
    isComplate: false,
  },
  {
    text: "belajar js",
    isComplate: true,
  },
  {
    text: "belajar react js",
    isComplate: false,
  },
  {
    text: "belajar react native",
    isComplate: true,
  },
  {
    text: "belajar typescript",
    isComplate: false,
  },
  {
    text: "belajar vue js",
    isComplate: true,
  },
  {
    text: "belajar next js",
    isComplate: false,
  },
];

function Todos() {
  return (
    <>
      {listTodo.map((todo, index) => (
        <TodoCondition key={index} {...todo} />
      ))}
    </>
  )
}
export default Todos
