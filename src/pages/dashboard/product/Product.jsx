import React from 'react'
import { useSearchParams } from 'react-router';
import InputForm from '../../../components/auth/InputForm';


export default function Product () {
  const [ searchQueryParams, setSearchQueryParams ] = useSearchParams('');
  let kategory = searchQueryParams.get('kategory') || '';
  let status = searchQueryParams.get('status') || '';

  function handleChangeKategory (e) {
    setSearchQueryParams(prev => {
      const params = new URLSearchParams(prev);
      params.set('kategory', e.target.value);
      return params;
    });
  }

  function handleChangeStatus (e) {
    setSearchQueryParams(prev => {
      const params = new URLSearchParams(prev);
      params.set('status', e.target.value);
      return params;
    });
  }

  function handleClickSearch (e) {
    e.preventDefault();
    console.log(`kategory : ${kategory}`);
    console.log(`status : ${status}`);
  }

  function handleClickClear (e) {
    e.preventDefault();
    setSearchQueryParams({});
    kategory = '';
    status = '';
  }

  return (
    <>
      <div>Product</div>
      <form>
        <InputForm 
          label="Kategory"
          name="kategory"
          type="text"
          value={kategory}
          onChange={handleChangeKategory}
        />
        <InputForm 
          label="Status"
          name="status"
          type="text"
          value={status}
          onChange={handleChangeStatus}
        />
        <button 
          onClick={handleClickSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
        <button 
          onClick={handleClickClear}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Clear
        </button>
      </form>
    </>
  );
}