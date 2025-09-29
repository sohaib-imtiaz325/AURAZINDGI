import React, { useState } from "react";
import { Heart } from "lucide-react";

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

const ProductCard = ({ product }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleTouch = () => {
    if (window.innerWidth < 768) {
      setIsZoomed(true);
      setTimeout(() => setIsZoomed(false), 1500);
    }
  };

  return (
    <div className="group relative w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <div
        className={`relative w-full aspect-[2/3] sm:aspect-[3/4] h-[22rem] overflow-hidden transition-transform duration-300 ${isZoomed ? "scale-105" : ""
          } group-hover:scale-105`}
        onTouchStart={handleTouch}
      >
        {/* Wishlist Button */}
        <div className="absolute top-3 left-3 z-10">
          <button className="bg-white p-2 rounded-full shadow hover:bg-red-100 transition duration-200">
            <Heart className="w-5 h-5 text-red-500" />
          </button>
        </div>

        {/* Main Image */}
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-[1200ms] ease-in-out"
        />

        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={`${product.title} Hover`}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transform-gpu will-change-transform transition-all duration-[1200ms] ease-in-out"
        />
      </div>

      {/* Title + Category + Price + Rating */}
      <div className="relative flex flex-col h-[12rem] px-4 pt-4 pb-16">
        <div className="flex items-start justify-between">
          <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
            {product.title}
          </h2>
          <span className="text-[10px] px-2 py-1 bg-amber-100 text-amber-700 rounded-full uppercase font-medium tracking-wide">
            {product.category}
          </span>
        </div>

        <div className="mt-3 px-2 flex items-center justify-between w-full">
          <p className="text-green-600 font-bold text-sm">{product.price}</p>
          <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
            <span>⭐</span>
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Add to Cart Button fixed at bottom */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center px-4">
          <button className="w-[30%] bg-black text-white rounded-full py-2 text-sm font-medium hover:bg-gray-800 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3); // sirf 3 products

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
            setVisibleCount(3);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
