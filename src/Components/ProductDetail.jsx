import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
  ChevronDown,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("50 ml");
  const [quantity, setQuantity] = useState(1);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-600">Product not found.</div>
    );
  }

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image, product.image, product.image, product.image];

  const basePrice = Number(String(product.price).replace(/[^0-9]/g, ""));
  const priceMap = {
    "50 ml": basePrice,
    "100 ml": Math.round(basePrice * 1.6),
  };
  const totalPrice = priceMap[selectedSize] * quantity;

  const handlePrevImage = () =>
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNextImage = () =>
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => setDrawerOpen(true);

  // ✅ Proceed to Checkout
  const handleProceedToCheckout = () => {
    navigate("/checkout", {
      state: {
        product,
        selectedImage: images[selectedImage],
        selectedSize,
        quantity,
        totalPrice,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* ====== PRODUCT DETAIL CONTENT ====== */}
        <div className="max-w-7xl mx-auto px-4 py-8 mt-24 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT SECTION */}
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 border-2 overflow-hidden transition-all ${selectedImage === index
                        ? "border-black"
                        : "border-gray-200"
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative flex-1 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden min-h-[400px] md:h-[600px]">
                <img
                  src={images[selectedImage]}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-800" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <ChevronRight className="w-4 h-4 text-gray-800" />
                </button>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{product.rating || 4.5}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-xl font-semibold text-gray-900">
                  PKR {totalPrice.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {product.description ||
                    "This premium product is designed for comfort and style."}
                </p>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Size
                </label>
                <div className="flex gap-2">
                  {Object.keys(priceMap).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-4 border rounded text-sm font-medium transition-all ${selectedSize === size
                          ? "border-gray-600 bg-gray-900 text-white"
                          : "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-200 w-36">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-lg font-medium w-10 text-center">
                    {quantity.toString().padStart(2, "0")}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="py-3 px-5 border-2 border-gray-400 bg-white text-gray-700 font-medium hover:bg-gray-50"
                >
                  Add to cart
                </button>
                <button className="py-3 px-5 bg-gray-900 text-white font-medium hover:bg-gray-800">
                  Buy it now
                </button>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 mt-6">
                <button
                  onClick={() => setDescriptionOpen(!descriptionOpen)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900">Description</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${descriptionOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {descriptionOpen && (
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                    {product.longDescription ||
                      "Crafted with precision and quality materials, offering both durability and luxury."}
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="border-t border-gray-200">
                <button
                  onClick={() => setShippingOpen(!shippingOpen)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900">
                    Shipping & Returns
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${shippingOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {shippingOpen && (
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      Free shipping on orders over PKR 5,000. 30-day easy returns
                      policy.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ====== CART DRAWER ====== */}
        {drawerOpen && (
          <>
            {/* Background Overlay */}
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setDrawerOpen(false)}
            ></div>

            {/* Drawer Panel Cart page  */}
            <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 translate-x-0 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <button onClick={() => setDrawerOpen(false)}>
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Cart Content */}
              <div className="p-6 flex-grow overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={images[selectedImage]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-md font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">{selectedSize}</p>
                    {/* ✅ Quantity Counter Below ML */}
                    <div className="border border-gray-200 w-20 flex items-center mr- mx-auto">
                      <button
                        onClick={decrementQuantity}
                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-lg font-medium w-10 text-center">
                        {quantity.toString().padStart(2, "0")}
                      </span>
                      <button
                        onClick={incrementQuantity}
                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-semibold mt-1">
                      PKR {totalPrice.toLocaleString()}
                    </p>
                  </div>
                </div>


              </div>

              {/* ✅ Total + Checkout (Bottom Fixed) */}
              <div className="w-full bg-white shadow-inner p-6 border-t border-gray-200">
                <div className="flex justify-between text-gray-700 font-medium">
                  <span>Total</span>
                  <span>PKR {totalPrice.toLocaleString()}</span>
                </div>
                <button
                  onClick={() =>
                    navigate("/checkout", { state: { product: { ...product, totalPrice } } })
                  }
                  className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition mt-4"
                >
                  Proceed to Checkout
                </button>

              </div>
            </div>
            
          </>
        )}

      </div>
      <Footer/>
    </>
  );
};

export default ProductDetail;
