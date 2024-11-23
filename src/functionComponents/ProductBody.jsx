import style from './../assets/scss/productBody.module.scss';


const ProductBody = ({namaBarang, tipeBarang, jumlahBarang, stokTersedia, hargaSatuan }) => {
    return (
        <>
            <h1 className={style.title}>{namaBarang}</h1>
            <p className={style.paragraph}>Tipe : {tipeBarang}</p>
            <p className={style.paragraph}>Jumlah : {jumlahBarang}</p>
            <p className={style.paragraph}>Stok : {stokTersedia}</p>
            <p className={style.paragraph}>Harga : Rp {hargaSatuan}</p>
        </>
    );
};

export default ProductBody;