import ContactItemBody from "./ContactItemBody ";
import ContactItemImage from "./ContactItemImage";
import style from './../styles/ContactItem.module.css';
import DeleteButton from "./DeleteButton";


const ContactItem = ({ imageUrl, name, tag, id ,onDelete }) => {
    return (
        <div className={style.contactItem}>
            <ContactItemImage 
                imageURL={imageUrl} 
            />
            <ContactItemBody 
                name={name} 
                tag={tag} 
            />
            <DeleteButton id={id} onDeleteHandler={onDelete} />
        </div>
    );
};

export default ContactItem;