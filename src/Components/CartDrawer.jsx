import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ open, onClose, cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const updateCartItemQuantity = (index, newQty) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQty;
    updatedCart[index].totalPrice = newQty * updatedCart[index].basePrice;
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeCartItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    onClose();
    navigate("/checkout", { state: { cartItems } });
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      ></div>

      <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 flex-grow overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center gap-4 mb-6 p-2 rounded-md"
              >
                <button
                  onClick={() => removeCartItem(index)}
                  className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center text-gray-600 hover:text-red-600"
                >
                  <X className="w-4 h-4" />
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.selectedSize}</p>

                  <div className="border border-gray-200 w-20 flex items-center mt-1">
                    <button
                      onClick={() =>
                        updateCartItemQuantity(index, Math.max(1, item.quantity - 1))
                      }
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-lg font-medium w-10 text-center">
                      {item.quantity.toString().padStart(2, "0")}
                    </span>
                    <button
                      onClick={() =>
                        updateCartItemQuantity(index, item.quantity + 1)
                      }
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <p className="font-semibold mt-1">
                    PKR {item.totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="w-full bg-white shadow-inner p-6 border-t border-gray-200">
            <div className="flex justify-between text-gray-700 font-medium">
              <span>Total</span>
              <span>
                PKR{" "}
                {cartItems
                  .reduce((sum, item) => sum + item.totalPrice, 0)
                  .toLocaleString()}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
