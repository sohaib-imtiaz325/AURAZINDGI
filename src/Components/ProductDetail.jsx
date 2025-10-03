import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
  ChevronDown,
  Check,
} from "lucide-react";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("100 ml"); // default
  const [quantity, setQuantity] = useState(1);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
   const [product1Selected, setProduct1Selected] = useState(true)
  const [product2Selected, setProduct2Selected] = useState(true)

  const productPrice = 19.9
  const totalPrices = (product1Selected ? productPrice : 0) + (product2Selected ? productPrice : 0)

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
    <div>

   
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
                className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 border-2  overflow-hidden transition-all ${
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
          <div className="relative flex-1 bg-gradient-to-br from-indigo-200 to-indigo-300  overflow-hidden min-h-[400px] md:h-[600px]">
            <img
              src={images[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-800" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="flex flex-col">
          {/* Title and Rating */}
          <div className="flex items-start  gap-10 mb-4">
            <div>

            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Nike ACG "Wolf Tree" Polartec
            </h1>
            </div>
            <div className="flex mt-2.5 items-center gap-1 text-sm text-gray-600 flex-shrink-0">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>50</span>
              
            </div>
          </div>

          {/* Price */}
          <div className=" -mt-2">
            <p className="text-xl font-semibold text-gray-900">
              PKR {totalPrice}
            </p>
            <p className="text-sm text-gray-600 mt-1"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>

          </div>

          {/* Size Selector */}
          <div className="mb-6 mt-10">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Size
            </label>
            <div className=" items-center flex  gap-1">
              {sizes.map((size) => (
                <h1
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2  px-4 border border-gray-100 -mt-1  text-sm font-medium transition-all ${
                    selectedSize === size
                      ? "border-gray-600 bg-gray-900 text-white"
                      : "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
                  }`}
                >
                  {size}
                </h1>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quantity
            </label>
            <div className="flex border -mt-1 border-gray-200 w-35  items-center ">
              <button
                onClick={decrementQuantity}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-lg font-medium w-10 text-center">
                {quantity.toString().padStart(2, "0")}
              </span>
              <button
                onClick={incrementQuantity}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button className="py-3 px-5 border-2 border-gray-400 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Add to cart
            </button>
            <button className="py-3 px-5  bg-gray-900 text-white  font-medium hover:bg-gray-800 transition-colors">
              Buy it now
            </button>
          </div>

          <div className=" border-t border-[#e5e5e5] w-full md:w-150" >

          </div>
         <div className="w-full justify-start items-start flex flex-col  bg-white  py-2">
      <p className="text-[#666] text-sm mb-4 mt-1 leading-relaxed">
        Pair it with our "100% natural essential oil blends to add aromatherapeutic benefits to your hair
      </p>

      {/* Product Bundle */}
      <div className="flex   items-center justify-start gap-4  md:gap-6 mb-2">
        {/* Product 1 */}
        <div className=" bg-gray-50">

       
        <div className="flex flex-col items-center">
          <div className="relative  w-15 h-20 md:w-24 md:h-32 ">
            <img src="/Images/p2.jpg" alt="Pair Essential 01 - Good Night" className="w-full h-full object-contain" />
            
          </div>
          <p className=" text-[8px] md:text-[11px]  font-bold whitespace-nowrap -mt-2 mb-2 px-4 text-[#666] ">Pair Essential 01 - Good Night</p>
          <div className=" flex justify-between gap-20  md:gap-32 ">

          
          <button
              onClick={() => setProduct1Selected(!product1Selected)}
              className="  w-4 h-4 bg-white border rounded-xs border-[#999] flex items-center justify-center cursor-pointer hover:border-[#666] transition-colors"
              aria-label="Toggle Product 1"
            >
              {product1Selected && <Check className="w-3 h-3 text-[#333]" strokeWidth={3} />}
            </button>
          <p className="  text-xs md:text-sm  font-light">$19.90</p>
        </div>
        </div>
 </div>
        {/* Plus Sign */}
        <div className="text-2xl font-bold text-[#333] mt-3">+</div>

        {/* Product 2 */}
             <div className=" bg-gray-50">

       
        <div className="flex flex-col items-center">
          <div className="relative w-15 h-20 md:w-24 md:h-32 ">
            <img src="/Images/p2.jpg" alt="Pair Essential 01 - Good Night" className="w-full h-full object-contain" />
            
          </div>
          <p className=" md:text-[11px] text-[8px]  font-bold whitespace-nowrap -mt-2 mb-2 px-4 text-[#666] ">Pair Essential 01 - Good Night</p>
          <div className=" flex justify-between gap-15 md:gap-32 ">

          
          <button
              onClick={() => setProduct2Selected(!product2Selected)}
              className=" w-3 h-3 md:w-4 md:h-4 bg-white border rounded-xs border-[#999] flex items-center justify-center cursor-pointer hover:border-[#666] transition-colors"
              aria-label="Toggle Product 1"
            >
              {product2Selected && <Check className="w-3 h-3 text-[#333]" strokeWidth={3} />}
            </button>
          <p className=" text-xs md:text-sm   font-light">$19.90</p>
        </div>
        </div>
 </div>
      </div>

      {/* Total Price */}
      <div className="flex items-center gap-2  justify-between  pb-2 ">
        <span className="text-sm   font-semibold text-[#666]">Total price:</span>
        <span className="text-sm  font-light">${totalPrices.toFixed(2)}</span>
      </div>

      <div className="bg-[#6b1c1c] hover:bg-[#5a1717] flex  justify-center items-center" >

      <h1 className="w-full py-2 px-5  text-white  text-xs font-medium rounded transition-colors">
        Add to Refined Basket
      </h1>
      </div>
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
     </div>
  );
};

export default ProductDetail;