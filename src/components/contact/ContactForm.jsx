import { useState } from "react";


function DetailNote ({ name, email, kategory, text }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
      <p className="mb-2"><span className="font-medium">Name:</span> {name}</p>
      <p className="mb-2"><span className="font-medium">Email:</span> {email}</p>
      <p className="mb-2"><span className="font-medium">Kategory:</span> {kategory}</p>
      <p className="mb-2"><span className="font-medium">Text:</span> {text}</p>
    </div>
  );
}

function Input ({ label, id, inputType = 'text', onChangeHandle, inputValue }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-medium">{label}:</label>
      <input
        type={inputType}
        id={id}
        onChange={onChangeHandle}
        value={inputValue}
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
  </div>
  );
}

export default function ContactForm () {
  const [ notes, setNote ] = useState({
    name: '',
    email: '',
    kategory: '',
    text: '',
    status: false,
    deleted: false
  });

  function handleChangeName (e) {
    setNote({ ...notes, name: e.target.value });
  }

  function handleChangeEmail (e) {
    setNote({ ...notes, email: e.target.value });
  }

  function handleChangeKategory (e) {
    setNote({ ...notes, kategory: e.target.value });
  }

  function handleChangeText (e) {
    setNote({ ...notes, text: e.target.value });
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Contact Form</h1>
      <DetailNote
        name={notes.name}
        email={notes.email}
        kategory={notes.kategory}
        text={notes.text}
      />
      <form className="mt-6 space-y-4">
        <Input
          label="Name"
          id="name"
          onChangeHandle={handleChangeName}
          inputValue={notes.name}
        />
        <Input
          label="Email"
          id="email"
          inputType="email"
          onChangeHandle={handleChangeEmail}
          inputValue={notes.email}
        />
        <Input
          label="Kategory"
          id="kategory"
          onChangeHandle={handleChangeKategory}
          inputValue={notes.kategory}
        />
        <div className="flex flex-col">
          <label htmlFor="text" className="mb-1 font-medium">Text:</label>
          <textarea
            id="text"
            onChange={handleChangeText}
            value={notes.text}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </>
  );
};
