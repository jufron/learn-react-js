import React from 'react';

const InputForm = ({ labelName, inputName, id, type = 'text', placeholder, onChange, inputValue }) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-gray-700 text-sm font-bold mb-2"
    >
      {labelName}
    </label>
    <input
      type={type}
      id={id}
      name={inputName}
      onChange={onChange}
      value={inputValue}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
    />
  </div>
);

export default InputForm;
