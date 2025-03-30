import { useEffect, useRef, useState } from "react"
import Product from "./Product";

const ProductList = () => {
  const [ products, setProducts ] = useState([]);
  const [ load, setLoad ] = useState(false);
  const [ loadingAnimation, setLoadingAnimation ] = useState(false);

  function loadProduct () {
    setLoad(true);
    setLoadingAnimation(true);
  }

  function callApi() {
    setTimeout(() => {
      fetch('/product.json')
        .then(response => response.json())
        .then(data => setProducts(data))
        .then(() => loaded.current = true)
        .catch(() => error => console.log(error))
        .finally( () => setLoadingAnimation(false))
    }, 100);
  }
  
  useEffect(() => {
    load && callApi();
    return () => console.log('product list component unmoundted');
  }, []);

  return (
    <>
      <h1>Product list</h1>
      {loadingAnimation && <p>loading...</p>}
      {!load ? (
        <button onClick={loadProduct}>load product</button>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </>
  )
}

export default ProductList;