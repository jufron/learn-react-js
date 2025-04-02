import { useImmer } from "use-immer";


export default function TaskForm ({ setNotes }) {
  const [ note, setNote ] = useImmer({
    email: '',
    judul: '',
    text: '',
    status: false,
    deleted: false
  });

  function handleChange (e) {
    const { name, value } = e.target;
    setNote(note => {
      note[name] = value;
    });
  }

  function handleClick (e) {
    e.preventDefault();

    if (!note.judul.trim() || !note.text.trim()) {
      alert("Judul dan teks tidak boleh kosong!");
      return;
    }

    setNotes(notes => {
      notes.push({...note});
    });

    setNote(note => {
      note.email = '';
      note.judul = '';
      note.text = '';
    });
  }

  return (
    <form className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3 items-end">
      <FormInput
        id="email"
        inputLabel="Email"
        inputType="email"
        inputName="email"
        inputValue={note.email}
        inputHandleChange={handleChange}
        inputPlaceholder="Masukan Email Anda..."
      />
      <FormInput
        id="judul"
        inputLabel="Judul"
        inputName="judul"
        inputValue={note.judul}
        inputHandleChange={handleChange}
        inputPlaceholder="Masukan Judul Task Anda..."
      />
      <FormTextArea
        inputLabel="Text Task"
        id="text"
        inputName="text"
        inputValue={note.text}
        handleChange={handleChange}
        inputPlaceholder="Masukan Task Anda ..."
      />
      <ButtonSubmit onClickHandler={handleClick} text="Save" />
    </form>
  );
}

function FormInput ({ id, inputLabel, inputType = 'text', inputName, inputValue, inputHandleChange, inputPlaceholder = 'masukan...' }) {
  return (
    <div className="flex flex-col col-span-1">
      <label htmlFor={id} className="mb-2 block font-medium text-gray-700">{inputLabel}</label>
      <input
        id={id}
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={inputHandleChange}
        placeholder={inputPlaceholder}
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>
  );
}

function FormTextArea ({ inputLabel, id, inputName, inputValue, handleChange, inputPlaceholder = 'masukan...' }) {
  return (
    <div className="flex flex-col col-span-1">
      <label htmlFor="text" className="mb-2 block font-medium text-gray-700">{inputLabel}</label>
      <textarea
        id={id}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        placeholder={inputPlaceholder}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-32"
      />
    </div>
  );
}

function ButtonSubmit ({ onClickHandler, text }) {
  return (
    <button
      onClick={onClickHandler}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
    >
      {text}
    </button>
  );
}
