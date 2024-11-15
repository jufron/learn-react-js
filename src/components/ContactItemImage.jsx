import style from './../styles/ContactItemImage.module.css';


const ContactItemImage = ({ imageURL }) => {
    return (
        <div>
            <img className={style.contactItemImage} src={ imageURL } alt="contact-avatar" />
        </div>
    );
};

export default ContactItemImage;