import ProductItem from "./ProductItem";
import style from './../assets/scss/productList.module.scss';


const ProductList = ({ products, onDelete }) => {

    return (
        <div className={style.productList}>
            {products.map(product => {
                return (
                    <ProductItem 
                        key={product.id}
                        id={product.id}
                        onDelete={onDelete}
                        {...product}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;