


export default function GuestBookForm({ setRef, name, setName }) {
  return (
    <>
        <label htmlFor="home">Name</label>
        <br/>
        <input 
            type="text"
            ref={setRef}
            name="nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <br/>
    </>
  )
}