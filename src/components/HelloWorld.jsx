

function HeaderHelloWorld ({ textHeading }) {
  return (
    <>
      <h1 className="text-5xl font-bold underline text-green-400">
        {textHeading.toUpperCase()}
      </h1>
    </>
  );
}

function ParagraphHelloWorld ({ textParagraph }) {
  return (
    <>
      <p className="text-xl font-bold underline text-blue-400">
        {textParagraph.toLowerCase()}
      </p>
    </>
  );
}

export default function HelloWorld ({ textHeading = 'lupa di kasih heading', textParagraph = 'lupa di kasih paragraph' }) {
  return (
    <>
      <HeaderHelloWorld textHeading={textHeading} />
      <ParagraphHelloWorld textParagraph={textParagraph} />
    </>
  );
}
