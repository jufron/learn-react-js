import React from "react";

function Form ({ label, inputType, inputValue, eventHandler }) {
    return (
        <>
            <label htmlFor={ label }>{ label }</label>
            <input 
                id={ label } 
                type={ inputType } 
                value={ inputValue } 
                onChange={ eventHandler } 
            />
        </>
    );
}

function FormSelect ({ label, eventHandler, children, inputValue }) {
    return (
        <>
            <label htmlFor={ label }>{ label }</label>
            <select id={ label } onChange={ eventHandler } value={ inputValue }>
                { children }
            </select>
        </>
    );
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            jurusan: '',
            gender: 'pilih',
            phoneNumber: 'pilih',
        }

        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onJurusanChangeHandler = this.onJurusanChangeHandler.bind(this);
        this.onGenderChangeHandler = this.onGenderChangeHandler.bind(this);
        this.onPhoneNumberChangeHandler = this.onPhoneNumberChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeHandler (event) {
        this.setState({ name: event.target.value });
    }

    onEmailChangeHandler (event) {
        this.setState({ email: event.target.value });
    }

    onJurusanChangeHandler (event) {
        this.setState({ jurusan: event.target.value });
    }

    onGenderChangeHandler (event) {
        this.setState({ gender: event.target.value });
    }

    onPhoneNumberChangeHandler (event) {
        this.setState({ phoneNumber: event.target.value });
    }

    onSubmitEventHandler (event) {
        event.preventDefault();
        const { name, email, jurusan, gender, phoneNumber } = this.state;
        const element = `
            name: ${name}
            email: ${email}
            jurusan: ${jurusan}
            gender: ${gender}
            phone number: ${phoneNumber}
        `;

        alert(element);
    }

    render() {
        const { name, email, jurusan, gender, phoneNumber } = this.state;

        return (
            <form onSubmit={ this.onSubmitEventHandler }>
                <div>
                    <Form 
                        label="name"
                        inputType="text"
                        inputValue={ name }
                        eventHandler={ this.onNameChangeHandler }
                    />
                </div>
                <div>
                    <Form
                        label="email"
                        inputType="email"
                        inputValue={ email }
                        eventHandler={ this.onEmailChangeHandler }
                    />
                </div>
                <div>
                    <FormSelect 
                        label="jurusan"
                        eventHandler={ this.onJurusanChangeHandler }
                        inputValue={ jurusan }
                        >
                        <option disabled value="pilih">pilih</option>
                        <option value="teknik-informatika">teknik-informatika</option>
                        <option value="teknik-mesin">teknik-mesin</option>
                        <option value="teknik-konstruksi">teknik-konstruksi</option>
                        <option value="akuntansi">akuntansi</option>
                    </FormSelect>
                </div>
                <div>
                    <FormSelect 
                        label="gender" 
                        eventHandler={ this.onGenderChangeHandler} 
                        inputValue={ gender }
                        >
                        <option disabled value="pilih">pilih</option>
                        <option value="laki-laki">laki-laki</option>
                        <option value="perempuan">perempuan</option>
                    </FormSelect>
                </div>
                <div>
                    <Form
                        label="phone number"
                        inputType="number"
                        inputValue={ phoneNumber }
                        eventHandler={ this.onPhoneNumberChangeHandler }
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default MyForm;