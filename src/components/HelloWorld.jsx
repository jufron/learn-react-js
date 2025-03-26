

function HeaderHelloWorld ({ text = 'tidak wajib' }) {
  return (
    <>
      <h1 style={{color: "blue", fontSize: "40px"}}>{text.toUpperCase()}</h1>
    </>
  );
}

function ParagraphHelloWorld ({ paragraph }) {

  let paragraphStyle = {
    color: "red",
    fontSize: "20px",
  }
  return (
    <>
      <p style={paragraphStyle}>{paragraph.toLowerCase()}</p>
    </>
  );
}

function HelloWorld() {
  const text = {
    text: "hello world",
  }
  return (
    <>
      <HeaderHelloWorld {...text} />
      <ParagraphHelloWorld paragraph="selamat datang react js" />
    </>
  );
}

export default HelloWorld;