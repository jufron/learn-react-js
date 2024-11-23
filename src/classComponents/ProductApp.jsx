import React from "react";
import style from './../assets/scss/productApp.module.scss';
import ProductInput from "./ProductInput";
import ProductList from "../functionComponents/ProductList";
import getData from './../data/getData.js';


class ProductApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: getData()
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.addProductHandler = this.addProductHandler.bind(this);
    }

    onDeleteHandler (id) {
        const products = this.state.products.filter( product => product.id !== id);
        this.setState({ products });
    }

    addProductHandler ({ namaBarang, tipeBarang, jumlahBarang, stokTersedia, hargaSatuan }) {
        this.setState(prevState => {
            return {
                products: [
                    ...prevState.products,
                    {
                        id: +new Date(),
                        namaBarang,
                        tipeBarang,
                        jumlahBarang,
                        stokTersedia,
                        hargaSatuan
                    }
                ]
            };
        });
    }

    render() {
        const { products } = this.state;

        return (
            <div className={style.productApp}>
                <h1 className={style.title}>Product app</h1>
                <div className={style.container}>
                    <div className={style.itemContainer}>
                        <h2 className={style.title2}>Tambah Product</h2>
                        <ProductInput addProduct={this.addProductHandler} />
                    </div>
                    <div className={style.itemContainer}>
                        <h2 className={style.title2}>Daftar barang</h2>
                        <ProductList products={products} onDelete={this.onDeleteHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductApp;