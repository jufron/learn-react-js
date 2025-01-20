

export default function HeaderHelloWorld() {
   const text = 'selamat belajar react js';

   return (
      <h1 style={{
         color: 'red',
         fontSize: 40,
         fontFamily: "sans-serif"
      }}>{text.toLowerCase()}</h1>
   );
}
