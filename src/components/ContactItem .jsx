import ContactItemBody from "./ContactItemBody ";
import ContactItemImage from "./ContactItemImage";
import style from './../styles/ContactItem.module.css';


const ContactItem = ({ imageUrl, name, tag }) => {
    return (
        <div className={style.contactItem}>
            <ContactItemImage 
                imageURL={imageUrl} 
            />
            <ContactItemBody 
                name={name} 
                tag={tag} 
            />
        </div>
    );
};

export default ContactItem;