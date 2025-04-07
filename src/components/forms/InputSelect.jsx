import React from 'react';

export default function InputSelect ({ inputName, id, inputValue, handleOnChange, children }) {
  return (
    <>
      <select
        name={inputName}
        id={id}
        value={inputValue}
        onChange={handleOnChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option disabled>Pilih</option>
        {children}
      </select>  
    </>
  );
}