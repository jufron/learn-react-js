import { useEffect, useRef, useState } from "react"
import Product from "./Product";

const ProductList = () => {
  const [ products, setProducts ] = useState([]);
  const [ loadingContent, setLoadingContent ] = useState(true);
  const loaded = useRef(false);

  function callApi() {
    console.log('melakukan fetch data');
    setTimeout(() => {
      fetch('/product.json')
        .then(response => response.json())
        .then(data => setProducts(data))
        .then(() => loaded.current = true)
        .catch(() => error => console.log(error))
        .finally(() => setLoadingContent(false));

    }, 2000);
  }
  
  useEffect(() => {
    if (!loaded.current) {
      callApi();
    }

    return () => console.log('product list component unmoundted');
  }, []);

  return (
    <>
      <h1>Product list</h1>
      {loadingContent && <p>Loading...</p>}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  )
}

export default ProductList;