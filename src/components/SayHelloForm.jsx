

function SayHelloForm() {

    function handleClickSubmit (e) {
        e.preventDefault();
        const name = document.querySelector('#input-name').value;
        document.querySelector('#text-hello').innerHTML = `hello ${name}`;
    }

  return (
    <>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="input-name" />
            <button type="submit" onClick={handleClickSubmit}>Say Hello</button>
        </form>

        <h1 id="text-hello">hello world</h1>
    </>
  );    
}

export default SayHelloForm;
