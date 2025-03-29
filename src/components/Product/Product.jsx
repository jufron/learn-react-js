
export default function Product ({ product }) {
  return (
    <>
      <h1>{product.id} : {product.name}</h1>
      <p>harga : {product.price}</p>
    </>
  )
}