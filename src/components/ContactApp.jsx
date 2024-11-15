import ContactList from "./ContactList.jsx";
import getData from '../utils/data';
import style from './../styles/ContactApp.module.css';

const ContactApp = () => {
    const contacts = getData();

    return (
        <div className={style.contactApp}>
            <h1 className={style.title}>Daftar Kontak</h1>
            <ContactList contacts={ contacts } />
        </div>
    );
};

export default ContactApp;