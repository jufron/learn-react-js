

export default function TaskList ({ notes }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">UI Task</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes.map((item, index) => (
          <li key={index} className="bg-white shadow-md rounded-md p-4 flex flex-col">
            <h3 className="font-bold mb-2 text-lg">
              {item.judul}
            </h3>
            <p className="text-gray-700 flex-grow">
              {item.email}
            </p>
            <p className="text-gray-700 mb-4 flex-grow">
              {item.text}
            </p>
            <div className="mt-auto">
              <div className="flex space-x-2">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 rounded">
                    Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
