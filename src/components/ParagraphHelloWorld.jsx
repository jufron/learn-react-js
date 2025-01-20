

export default function HeaderHelloWorld() {
   const text = 'hello world';
   const style = {
      color: 'blue',
      fontSize: 40,
      fontFamily: "sans-serif"
   };

   return (
      <h1 style={style} >{text.toUpperCase()}</h1>
   );
}
