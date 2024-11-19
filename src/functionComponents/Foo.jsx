import { useState } from "react";

// ? props drilling event handler
const Foo = () => {
    const [ name, setName ] = useState('james');
    const [ email, setEmail ] = useState('james@gmail.com');

    const showAlert = () => alert('child button clicked');

    const showPrompt = () => {
        const inputName = prompt('input your name :');
        const inputEmail = prompt('input your email :');

        setName(inputName);
        setEmail(inputEmail);
    };

    return (
        <>
            <h1>hallo nama saya { name } alamat email saya { email }</h1>
            
            <Child buttonClick={ showAlert } label="klik show alert" />
            <Child buttonClick={ showPrompt } label="input name dan email " />
        </>
    );
};

const Child = ({ buttonClick, label }) => {
    return (
        <button onClick={ buttonClick }>{ label }</button>
    );
};

export default Foo;