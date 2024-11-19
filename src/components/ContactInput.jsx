import React from "react";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tag: ''
        };
        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
        this.onButtonSubmitHandler = this.onButtonSubmitHandler.bind(this);
    }

    onNameChangeHandler (event) {
        this.setState({ name: event.target.value });
    }

    onTagChangeHandler (event) {
        this.setState({ tag: event.target.value });
    }

    onButtonSubmitHandler (event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        const { name, tag } = this.state;
        console.log(this.state);
        return (
            <form className="contact-input" onSubmit={ this.onButtonSubmitHandler }>
                <input 
                    type="text" 
                    placeholder="Nama" 
                    value={ name }
                    onChange={ this.onNameChangeHandler } 
                />
                <input 
                    type="text"
                    placeholder="Tag"
                    value={ tag }
                    onChange={ this.onTagChangeHandler }
                />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default ContactInput;