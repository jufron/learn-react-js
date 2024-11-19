import { useState } from "react";


const Greatings = () => {
    const [ age, setAge ] = useState(22);
    const [ name, setName ] = useState('james');
    const [ email, setEmail ] = useState('james@gmail.com');

    function displayName () {
        const inputName = prompt('masukan name : ');
        const inputAge = prompt('masukan umur : ');
        const inputEmail = prompt('masukan alamat email : ');

        if (inputName) setName(inputName);
        if (inputEmail) setEmail(inputEmail);
        if (inputAge) setAge(parseInt(inputAge, 10));
    };

    return (
        <>
            <h1>Hallo nama saya { name }, alamat email { email } dan umur saya { age }</h1>
            <button onClick={ displayName }>ganti name</button>
        </>
    );
};

export default Greatings;