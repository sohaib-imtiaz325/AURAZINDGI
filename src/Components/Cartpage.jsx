import { useLocation } from "react-router-dom";

const CartPage = () => {
  const { state: product } = useLocation();

  if (!product) {
    return <div className="p-6 text-center">No product in cart</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* Main Product */}
      <div className="flex gap-6 border p-4 rounded-lg shadow mb-6">
        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
        <div>
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p>Size: {product.size}</p>
          <p>Quantity: {product.quantity}</p>
          <p className="font-bold">PKR {product.price}</p>
        </div>
      </div>

      {/* Extra Products */}
      {product.extraProducts?.length > 0 && (
        <div className="border p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Extra Products</h3>
          {product.extraProducts.map((item, index) => (
            <div key={index} className="flex justify-between text-sm mb-1">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <p className="mt-2 font-bold">
            Bundle Total: ${product.bundleTotal.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;