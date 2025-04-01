import { useState } from "react";

function Notes () {
  const [ notes, setNote ] = useState([
    { id: 1, text: 'belajar react hook', statue: true, createdAt: '2021-01-01' }
  ]);

  function addNewNote () {
    setNote([
      ...notes,
      { id: 2, text: 'belajar react component', statue: true, createdAt: '2021-01-01' }]
    );
  }

  return (
    <>

    </>
  );
}

function BelajarMemahamiState () {
  const [ user, setUser ] = useState({
    name: 'John Doe',
    age: 20,
    email: 'john@gmail.com'
  });

  // ❌ tidak boleh
  function setEmail () {
    setUser(user.email = 'james@gmail.com');
  }

  // ✅ cara yang diperbolehkan karena state bersifat immutable
  function setName () {
    setUser({ ...user, name: 'sinta' });
  }

  return (
    <>

    </>
  );
}

export default function Counter () {
  const [ counter, setCounter ] = useState(0);

  function handleClickIncrement () {
    setCounter(counter + 1);
  }

  function handleClickDecrement () {
    if (counter > 0){
      setCounter(counter - 1)
    }
  }

  function handleClickReset () {
    setCounter(0);
  }

  function handleClickUpdateCounter3x () {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }

  return(
    <>
      <h1 className="text-3xl font-semibold my-2">Counter : {counter}</h1>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 my-2 mx-2 rounded"
        onClick={handleClickIncrement}
      >
        tambah angka
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-2 mx-2 rounded"
        onClick={handleClickDecrement}
      >
        Turunin angka
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 my-2 mx-2 rounded"
        onClick={handleClickReset}
      >
        Reset angka
      </button>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-2 mx-2 rounded"
        onClick={handleClickUpdateCounter3x}
      >
        Update counter sebanyak 3x
      </button>
    </>
  );
};
