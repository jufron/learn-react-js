


export default function NoteSearch ({ useRef, handleSearch }) {
  return (
    <>
      <label htmlFor="search">Search</label>
      <br />
      <input ref={useRef} type="search" name="searh" id="search" />
      <br />
      <button type="submit" onClick={handleSearch}>Search</button>
    </>
  )
}