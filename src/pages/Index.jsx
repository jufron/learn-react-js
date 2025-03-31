import Container from "../components/container/Container";
import HelloWorld from "../components/HelloWorld";

export default function Index () {
  const hello2 = {
    textHeading: 'belajar react',
    textParagraph: 'belajar react dasar dasar dasar'
  };

  return (
    <>
      <Container>
        <HelloWorld textHeading="Hello World" textParagraph="belajar react dasar" />
        <HelloWorld {...hello2} />
        <HelloWorld />
      </Container>
    </>
  );
}
