import { useEffect, useRef, useState } from "react"
import Product from "./Product";

const ProductList = () => {
  const [ products, setProducts ] = useState([]);
  const [ load, setLoad ] = useState(false);
  const [ loadingAnimation, setLoadingAnimation ] = useState(false);

  function handleLoadProduct () {
    setLoad(true);
    setLoadingAnimation(true);
  }

  function handleResetProduct () {
    setProducts([]);
  }

  async function callApi() {
    const response = await fetch('/product.json');
    const result = await response.json();

    setLoadingAnimation(false);
    setProducts(result);
  }

  useEffect(() => {
    callApi();
    return () => console.log('product list component unmoundted');
  }, [load]);

  return (
    <>
      <h1>Product list</h1>
      {loadingAnimation && <p>loading...</p>}
      {!load || loadingAnimation ? (
        <button onClick={handleLoadProduct}>load product</button>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}

      {products.length > 0 && (
        <button onClick={handleResetProduct}>reset product</button>
      )}
    </>
  )
}

export default ProductList;