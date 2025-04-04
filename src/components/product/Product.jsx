

export default function Product ({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {product.id} : {product.name}
        </div>
        <p className="text-gray-700 text-base">
          harga : {product.price}
        </p>
        <p className="text-gray-700 text-base">
          Deskripsi : {product.description}
        </p>
      </div>
    </div>
  );
}
