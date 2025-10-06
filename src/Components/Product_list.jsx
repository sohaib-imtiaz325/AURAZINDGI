import React, { useState } from "react";
import { Star, Box, ArrowUpRight, SlidersHorizontal, ArrowUpDown, ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  { id: 1, image: "/Images/p2.jpg", title: "Leather Watch", category: "For Him", price: "Rs 1,500", rating: 4.5 },
  { id: 2, image: "/Images/p2.jpg", title: "Handbag", category: "For Her", price: "Rs 2,200", rating: 5 },
  { id: 3, image: "/Images/p2.jpg", title: "Perfume", category: "Unisex", price: "Rs 999", rating: 4 },
  { id: 4, image: "/Images/p2.jpg", title: "Wallet", category: "For Him", price: "Rs 750", rating: 4.2 },
  { id: 5, image: "/Images/p2.jpg", title: "Sunglasses", category: "For Her", price: "Rs 1,250", rating: 4.8 },
  { id: 6, image: "/Images/p2.jpg", title: "Necklace", category: "Unisex", price: "Rs 1,800", rating: 5 },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, 4);

  return (
    <div className="   flex justify-center py-6 px-3  sm:py-6 sm:px-6">
      <div className="w-full h-full  rounded-4xl bg-gray-100 ">
        {/* Header + Filter/Sort/Arrows */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  mb-8 gap-4">
          <div>
            <h2 className="text-lg sm:text-xl ml-6 mt-2 font-semibold">New Arrival</h2>
            <p className="text-gray-500 text-xs ml-6 sm:text-sm">{filteredProducts.length} Products</p>
          </div>

          <div className="flex items-center gap-2  sm:gap-3 flex-wrap relative">
            {/* Filter Button */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full ml-5 bg-white shadow text-gray-700 text-xs sm:text-sm hover:bg-gray-100"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filter
              </button>

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <ul>
                    <li
                      onClick={() => { setSelectedCategory("All"); setShowDropdown(false); }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      All
                    </li>
                    <li
                      onClick={() => { setSelectedCategory("For Him"); setShowDropdown(false); }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Men
                    </li>
                    <li
                      onClick={() => { setSelectedCategory("For Her"); setShowDropdown(false); }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Women
                    </li>
                    <li
                      onClick={() => { setSelectedCategory("Unisex"); setShowDropdown(false); }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Unisex
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sort By Button */}
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white shadow text-gray-700 text-xs sm:text-sm hover:bg-gray-100">
              <ArrowUpDown className="w-4 h-4" /> Sort By
            </button>

            {/* Left Arrow */}
            <button className="p-1.5 rounded-full bg-white shadow hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Right Arrow */}
            <button className="p-1.5 rounded-full mr-2 bg-white shadow hover:bg-gray-100">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-3 pb-4 sm:gap-4">
          {visibleProducts.map((p) => (
            <div key={p.id} className="relative bg-white rounded-4xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={p.image} alt={p.title} className="w-full h-[240px] sm:h-[300px] md:h-[380px] object-cover" />

              {/* Rating */}
              <div className="absolute top-2 left-2 flex items-center text-yellow-400 bg-black/40 px-2 py-0.5 rounded-full text-xs sm:text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg> {p.rating}

              </div>

              {/* Name + Price */}
              <div className="absolute top-10 left-2 text-white drop-shadow max-w-[80%]">
                <h3 className="font-medium text-xs sm:text-base leading-tight">{p.title}</h3>
                <p className="text-sm sm:text-lg font-semibold">{p.price}</p>
              </div>

              {/* Bottom Right Button */}
              <div className="absolute bottom-2 right-2 flex rounded-full overflow-hidden bg-white shadow">
                <span className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 hover:bg-gray-100">
                  <Box className="w-6 h-6 text-gray-700" />
                </span>
                <span className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-black text-white hover:bg-gray-800 rounded-full">
                  <ArrowUpRight className="w-6 h-6" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
