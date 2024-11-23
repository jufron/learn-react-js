import style from './../assets/scss/button.module.scss';


const DeleteButton = ({ onDeleteHandler, id }) => {
    return (
        <button 
            onClick={() => onDeleteHandler(id)} 
            className={style.button}>
                Hapus
        </button>
    );
};

export default DeleteButton;