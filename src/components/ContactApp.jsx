import React from "react";
import style from './../styles/ContactApp.module.css';
import ContactList from "./ContactList.jsx";
import getData from '../utils/data';
import ContactInput from "./ContactInput.jsx";


class ContactApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData()
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    onDeleteHandler (id) {
        const contacts = this.state.contacts.filter( contact => contact.id !== id);
        this.setState({ contacts });
    }

    onAddContactHandler ({ name, tag }) {
        this.setState( prevState => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: '/img/default.jpg',
                    }
                ]
            };
        })
    }
    
    render() {
        const { contacts } = this.state;

        return (
            <div className={style.contactApp}>
                <h1>Aplikasi Kontak</h1>
                <h2>Tambah Kontak</h2>
                <ContactInput addContact={ this.onAddContactHandler } />
                <h1 className={style.title}>Daftar Kontak</h1>
                <ContactList 
                    contacts={ contacts } 
                    onDelete={ this.onDeleteHandler } 
                />
            </div>
        );
    }
}

export default ContactApp;