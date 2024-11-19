import style from './../styles/deleteButton.module.css';


const DeleteButton = ({ id, onDeleteHandler }) => {
    return (
        <button 
            className={style.contactItemDelete}
            onClick={() => onDeleteHandler(id)}>
            X
        </button>
    );
};

export default DeleteButton;