import { useState } from "react";
import { useImmer } from "use-immer";

function InputContact ({ inputType = 'text', inputPlaceholder, inputId = 'input-contact', handleFunction, inputValue }) {
  const myStyle = {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '5px',
    margin: '5px',
    display: 'block'
  };

  return (
    <input
      style={myStyle}
      type={inputType}
      placeholder={inputPlaceholder}
      id={inputId}
      value={inputValue}
      onChange={handleFunction}
    />
  );
}

function ButtonFormContact ({ buttonText = 'Submit', handleFunction }) {
  const myStyle = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <button type="submit" style={myStyle} onClick={handleFunction}>
      {buttonText}
    </button>
  );
}

function ShowContact ({ status, data }) {
  if (status) {
    return (
      <>
        <p>Name: {data.name}</p>
        <p>Message: {data.message}</p>
        <p>Phone Number: {data.phoneNumber}</p>
        <p>Email: {data.email}</p>
      </>
    )
  } else {
    return (
      <>
        <h1>Tidak ada Contact yang ditambahkan</h1>
      </>
    )
  }
}

export default function ContactForm() {

  const [showContact, setShowContact] = useState(false);
  const [contact, setContact] = useImmer({
    name: '',
    message: '',
    phoneNumber: '',
    email: '',
  });


  function handleNameChange (e) {
    setContact(contact => {
      contact.name = e.target.value;
    });
  }

  function handleMessageChange (e) {
    setContact(contact => {
      contact.message = e.target.value;
    });
  }

  function handlePhoneNumberChange (e) {
    setContact(contact => {
      contact.phoneNumber = e.target.value;
    });
  }

  function handleEmailChange (e) {
    setContact(contact => {
      contact.email = e.target.value;
    });
  }

  function handleSubmit (e) {
    e.preventDefault();
    setShowContact(true);
    console.log(contact);
  }

  function handleClickWhenReset (e) {
    e.preventDefault();
    setShowContact(false);
    setContact({
      name: '',
      message: '',
      phoneNumber: '',
      email: '',
    });
  }

  return (
    <>
      <h1>Contact Form</h1>
      <form >
        <InputContact 
          inputPlaceholder='Name Your Contact'
          inputId='name'
          handleFunction={handleNameChange}
          inputValue={contact.name}
        />
        <InputContact 
          inputPlaceholder='Message Your Contact'
          inputId='message'
          handleFunction={handleMessageChange}
          inputValue={contact.message}
        />
        <InputContact 
          inputPlaceholder='Phone Number Your Contact'
          inputId='phoneNumber'
          handleFunction={handlePhoneNumberChange}
          inputValue={contact.phoneNumber}
        />
        <InputContact 
          inputPlaceholder='Email Your Contact'
          inputId='email'
          handleFunction={handleEmailChange}
          inputValue={contact.email}
        />
        <ButtonFormContact 
          buttonText='Submit'
          handleFunction={handleSubmit}
        />
        <ButtonFormContact 
          buttonText='Reset'
          handleFunction={handleClickWhenReset}
        />
      </form>
      <h2>Contact Detail</h2>
      <ShowContact status={showContact} data={contact} />
    </>
  );
}

function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert("Form Submitted");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}