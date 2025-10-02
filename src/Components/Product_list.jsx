import React, { useState } from "react";
import { Heart, Star, Box, ArrowUpRight } from "lucide-react"; // <-- FIXED

const products = [
  {
    id: 1,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Leather Watch",
    category: "For Him",
    price: "Rs 1,500",
    rating: 4.5,
  },
  {
    id: 2,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Handbag",
    category: "For Her",
    price: "Rs 2,200",
    rating: 5,
  },
  {
    id: 3,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Perfume",
    category: "Unisex",
    price: "Rs 999",
    rating: 4,
  },
  {
    id: 4,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Wallet",
    category: "For Him",
    price: "Rs 750",
    rating: 4.2,
  },
  {
    id: 5,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Sunglasses",
    category: "For Her",
    price: "Rs 1,250",
    rating: 4.8,
  },
  {
    id: 6,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Necklace",
    category: "Unisex",
    price: "Rs 1,800",
    rating: 5,
  },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProducts =
    selectedCategory === "All" || selectedCategory === "Top Seller"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="w-full px-6 py-12 max-w-screen-xl mx-auto">
      {/* New Arrival heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        New Arrival
      </h2>

      {/* Filter Dropdown */}
      <div className="flex justify-end mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setVisibleCount(4);
          }}
          className="px-4 py-2 text-sm border border-gray-300 rounded-full shadow-sm bg-white hover:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
        >
          <option value="All">All</option>
          <option value="Top Seller">Top Seller</option>
          <option value="For Him">Men</option>
          <option value="For Her">Women</option>
          <option value="Unisex">Unisex</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {visibleProducts.map((p) => (
          <div
            key={p.id}
            className="relative bg-white rounded-2xl sm:rounded-3xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Product Image */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover"
            />

            {/* Transparent Rating */}
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center text-xs sm:text-sm text-white bg-black/40 rounded-full px-1.5 sm:px-2 py-0.5">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 mr-1" />
              {p.rating}
            </div>

            {/* Name + Price */}
            <div className="absolute top-12 sm:top-14 left-2 sm:left-3 text-white drop-shadow max-w-[80%]">
              <h3 className="font-medium text-sm sm:text-base leading-tight">
                {p.title}
              </h3>
              <p className="text-base sm:text-lg font-semibold">{p.price}</p>
            </div>

            {/* Bottom Right Combined Button */}
            <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex">
              <button className="flex overflow-hidden rounded-full shadow">
                {/* Box (White Side) */}
                <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-white hover:bg-gray-100">
                  <Box className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </span>

                {/* Arrow (Black Side) */}
                <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-black text-white hover:bg-gray-800">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
