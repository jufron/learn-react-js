import React from "react";
import style from './../assets/scss/productInput.module.scss';
import FormGroup from "./FormGroup";


class ProductInput extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            namaBarang: '',
            tipeBarang: '',
            jumlahBarang: 0,
            stokTersedia: 0,
            hargaSatuan: 0
        };

        this.onNamaBarangChangeHandler = this.onNamaBarangChangeHandler.bind(this);
        this.onTipeBarangChangeHandler = this.onTipeBarangChangeHandler.bind(this);
        this.onJumlahBarangChangeHandler = this.onJumlahBarangChangeHandler.bind(this);
        this.onStokChangeHandler = this.onStokChangeHandler.bind(this);
        this.onHargaSatuanChangeHandler = this.onHargaSatuanChangeHandler.bind(this);

        this.onButtonSubmitHandler = this.onButtonSubmitHandler.bind(this);
    }

    onNamaBarangChangeHandler = event => this.setState({namaBarang: event.target.value});
    onTipeBarangChangeHandler = event => this.setState({tipeBarang: event.target.value});
    onJumlahBarangChangeHandler = event => this.setState({jumlahBarang: event.target.value});
    onStokChangeHandler = event => this.setState({stokTersedia: event.target.value});
    onHargaSatuanChangeHandler = event => this.setState({hargaSatuan: event.target.value});

    onButtonSubmitHandler (event) {
        event.preventDefault();
        const { addProduct } = this.props;
        addProduct(this.state);
    }

    render() {
        const {
            namaBarang, 
            tipeBarang,
            jumlahBarang, 
            stokTersedia, 
            hargaStatuan
        } = this.state;

        return (
            <form className={style.form} onSubmit={this.onButtonSubmitHandler}>
                <FormGroup 
                    nameId="namaBarang"
                    label="Nama Barang"
                    inputType="text"
                    inputPlaceholder="Masukan Nama Barang"
                    inputValue={namaBarang}
                    evenHandler={this.onNamaBarangChangeHandler}
                />
                <FormGroup
                    nameId="tipeBarang"
                    label="Tipe Barang"
                    inputType="text"
                    inputPlaceholder="Masukan Tipe Barang"
                    inputValue={tipeBarang}
                    evenHandler={this.onTipeBarangChangeHandler}
                />
                <FormGroup 
                    nameId="jumlah"
                    label="Jumlah"
                    inputType="number"
                    inputPlaceholder="Masukan Jumlah"
                    inputValue={jumlahBarang}
                    evenHandler={this.onJumlahBarangChangeHandler}
                />
                <FormGroup 
                    nameId="stok"
                    label="Stok"
                    inputType="number"
                    inputPlaceholder="Masukan Jumlah Stok"
                    inputValue={stokTersedia}
                    evenHandler={this.onStokChangeHandler}
                />
                <FormGroup 
                    nameId="harga"
                    label="Harga"
                    inputType="number"
                    inputPlaceholder="Masukan Harga"
                    inputValue={hargaStatuan}
                    evenHandler={this.onHargaSatuanChangeHandler}
                />

                <button className={style.btnSuccess} type="submit">Simpan</button>
            </form>
        );
    }
}

export default ProductInput;