import { useState } from "react";
import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


export default function Task () {
  const [ notes, setNotes ] = useImmer([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create Task</h1>
      <TaskForm setNotes={setNotes} />
      <TaskList notes={notes} />
    </div>
  );
}

// export default function Task() {
//   const [ item, setItem ] = useState('');
//   const [ items, setItems ] = useImmer([]);

//   function handleChange (e) {
//     setItem(item => e.target.value);
//   }

//   function handleClick (e) {
//     e.preventDefault();

//     setItems((items) => {
//       items.push(item);
//     });

//     setItem('');
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Create Task</h1>
//       <form className="flex items-center mb-6">
//         <input
//           type="text"
//           value={item}
//           onChange={handleChange}
//           className="border border-gray-300 px-3 py-2 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleClick}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Save
//         </button>
//       </form>
//       <h2 className="text-2xl font-bold mb-2">List Task</h2>
//       <ul className="list-disc pl-5">
//         {items.map((item, index) => (
//           <li key={index} className="mb-1">{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
