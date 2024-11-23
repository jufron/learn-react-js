import DeleteButton from "./DeleteButton";
import ProductBody from "./ProductBody";
import style from './../assets/scss/productItem.module.scss';

const ProductItem = ({ id, namaBarang, tipeBarang, jumlahBarang, stokTersedia, hargaSatuan, onDelete}) => {
    return (
        <div className={style.productItem}>
            <ProductBody 
                namaBarang={namaBarang}
                tipeBarang={tipeBarang}
                jumlahBarang={jumlahBarang}
                stokTersedia={stokTersedia}
                hargaSatuan={hargaSatuan}
            />
            <DeleteButton id={id} onDeleteHandler={onDelete} />
        </div>
    );
};

export default ProductItem;