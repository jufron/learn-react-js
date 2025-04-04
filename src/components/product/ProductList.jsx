import { useEffect, useRef, useState } from "react";
import Product from "./Product";


export default function ProductList () {
  const [ products, setProducts ] = useState([]);
  const [ load, setLoad ] = useState(false);

  function handleClickLoad () {
    setLoad(false);
    console.log('click');
    console.log(load);
  }

  async function getData () {
    const response = await fetch('/products.json');
    const data = await response.json();

    setProducts(data);
    setLoad(true);
  }

  useEffect(() => {
    if(!load) {
      console.log('loading start');
      setTimeout(() => {
        getData();
      }, 2000);
    }

    return () => console.log('clean up');
  }, [load]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <button onClick={handleClickLoad} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">reload</button>
      {!load
        ? (<p className="text-center text-xl font-semibold text-gray-600">Loading...</p>)
        : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
      )}
    </div>
  );
}
