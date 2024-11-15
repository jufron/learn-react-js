import style from './../styles/ContactItemBody.module.css';


const ContactItemBody = ({ name, tag }) => {
    return (
        <div className={style.contactItemBody}>
            <h3 className={style.title}>{ name }</h3>
            <p className={style.username}>{ tag }</p>
        </div>
    );
};

export default ContactItemBody;