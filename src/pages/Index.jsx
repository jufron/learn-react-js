import AlertButton from "../components/button/alertButton";
import Toolbar from "../components/button/Toolbar";
import ContactForm from "../components/contact/ContactForm";
import Container from "../components/container/Container";
import Counter from "../components/form/Counter";
import HelloWorld from "../components/HelloWorld";
import Todolist from "../components/Todolist/Todolist";

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
        <Todolist />
        <AlertButton
          buttonType="success"
          handleClick={() => alert('hallo selamat pagi')}
          text="Klik Saya"
        />
        <AlertButton
          buttonType="info"
          handleClick={() => alert('hallo selamat malam')}
          text="Klik Saya"
        />
        <AlertButton
          buttonType="danger"
          handleClick={() => alert('hallo selamat sore')}
          text="Klik Saya"
        />
        <AlertButton
          handleClick={() => alert('hallo selamat siang')}
          text="salam"
        />
        <AlertButton
          handleClick={(e) => {
            console.log(e);
          }}
          text="salam"
        />
        <Toolbar />
        <Counter />
        <Counter />
        <br />
        <br />
        <ContactForm />
      </Container>
    </>
  );
}
