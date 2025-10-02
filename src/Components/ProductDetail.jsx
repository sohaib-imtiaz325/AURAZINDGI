import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
  ChevronDown,
} from "lucide-react";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("100 ml"); // default
  const [quantity, setQuantity] = useState(1);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);

  const images = ["/Images/p2.jpg", "/Images/p3.jpg", "/Images/p2.jpg", "/Images/p3.jpg"];

  const sizes = ["50 ml", "100 ml"];

  // Price mapping by size
  const priceMap = {
    "50 ml": 1500,
    "100 ml": 2500,
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Final price calculation
  const totalPrice = priceMap[selectedSize] * quantity;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Section - Images */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          {/* Thumbnail Gallery */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 border-2 rounded-lg overflow-hidden transition-all ${
                  selectedImage === index ? "border-black" : "border-gray-200"
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
          <div className="relative flex-1 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg overflow-hidden min-h-[400px] lg:min-h-[600px]">
            <img
              src={images[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="flex flex-col">
          {/* Title and Rating */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Nike ACG "Wolf Tree" Polartec
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-600 flex-shrink-0">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>50</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4 -mt-2">
            <p className="text-2xl font-semibold text-gray-900">
              PKR {totalPrice}
            </p>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Size
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-4 border rounded-lg text-sm font-medium transition-all ${
                    selectedSize === size
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={decrementQuantity}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-medium w-12 text-center">
                {quantity.toString().padStart(2, "0")}
              </span>
              <button
                onClick={incrementQuantity}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <button className="py-4 px-6 border-2 border-gray-900 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Add to cart
            </button>
            <button className="py-4 px-6 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Buy it now
            </button>
          </div>

          {/* Extra 2 Images */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="/Images/p2.jpg"
              alt="Extra Product 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/Images/p3.jpg"
              alt="Extra Product 2"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Extra Add to Cart Button */}
          <div className="mb-6">
            <button className="w-full py-4 px-6 border-2 border-gray-900 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Add to cart
            </button>
          </div>

          {/* Product Description */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Celebrate the power and simplicity of the Swoosh. This warm brushed
            fleece hoodie is made with some extra room through the shoulder.
          </p>

          {/* Collapsible Sections */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => setDescriptionOpen(!descriptionOpen)}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <span className="font-medium text-gray-900">Description</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  descriptionOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {descriptionOpen && (
              <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  The Nike ACG "Wolf Tree" Polartec hoodie combines style and
                  functionality. Made with premium Polartec fleece, this hoodie
                  provides exceptional warmth and comfort. Features include a
                  full-zip closure, adjustable hood, and side pockets for
                  convenience.
                </p>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200">
            <button
              onClick={() => setShippingOpen(!shippingOpen)}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <span className="font-medium text-gray-900">
                Shipping & Returns
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  shippingOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {shippingOpen && (
              <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                <p className="mb-2">
                  <strong>Shipping:</strong> Free standard shipping on orders
                  over $50. Express shipping available at checkout.
                </p>
                <p>
                  <strong>Returns:</strong> 30-day return policy. Items must be
                  unworn and in original packaging.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
