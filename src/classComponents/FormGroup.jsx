import style from './../assets/scss/FormGroup.module.scss';


const FormGroup = ({ nameId, label, inputType, inputPlaceholder, inputValue, evenHandler }) => {
    return (
        <div className={style.formGroup}>
            <label htmlFor={nameId} className={style.label}>{label}</label>
            <input 
                className={style.input} 
                id={nameId} 
                type={inputType}
                placeholder={inputPlaceholder}
                value={inputValue} 
                onChange={evenHandler}
            />
        </div>
    );
};

export default FormGroup;