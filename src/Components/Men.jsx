import React from "react";
import {
  Star,
  SlidersHorizontal,
  ArrowUpDown,
  ArrowLeft,
  ArrowRight,
  Box,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const menProducts = [
  { id: 1, name: "ARTISTIC FLUID MODERN CHAIR", price: "PKR2500", rating: 4.2, image: "/Images/p2.jpg" },
  { id: 2, name: "FUTURISTIC BLACK LEATHER SEAT CHAIR", price: "$70.99", rating: 4.4, image: "/Images/p2.jpg" },
  { id: 3, name: "MODERN MARBLED CURVE CHAIR", price: "$90.99", rating: 4.8, image: "/Images/p2.jpg" },
  { id: 4, name: "ARTISTIC WOOD TEXTURED CHAIR", price: "$104.99", rating: 4.6, image: "/Images/p2.jpg" },
  { id: 5, name: "ARTISTIC FLUID MODERN CHAIR", price: "$52.99", rating: 4.2, image: "/Images/p2.jpg" },
  { id: 6, name: "FUTURISTIC BLACK LEATHER SEAT CHAIR", price: "$70.99", rating: 4.4, image: "/Images/p2.jpg" },
  { id: 7, name: "MODERN MARBLED CURVE CHAIR", price: "$90.99", rating: 4.8, image: "/Images/p2.jpg" },
  { id: 8, name: "ARTISTIC WOOD TEXTURED CHAIR", price: "$104.99", rating: 4.6, image: "/Images/p2.jpg" },
];

export default function Mens() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center py-6 px-3 sm:py-10 sm:px-6">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">Top Selling Men Items</h2>
            <p className="text-gray-500 text-xs sm:text-sm">230 Products</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <button className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white shadow text-gray-700 text-xs sm:text-sm hover:bg-gray-100">
              <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Filter By
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white shadow text-gray-700 text-xs sm:text-sm hover:bg-gray-100">
              <ArrowUpDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Sort By
            </button>
            <button className="p-1.5 sm:p-2 rounded-full bg-white shadow hover:bg-gray-100">
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button className="p-1.5 sm:p-2 rounded-full bg-white shadow hover:bg-gray-100">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {menProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)} // ✅ navigate on click
              className="relative bg-white rounded-2xl sm:rounded-3xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              {/* Product Image */}
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover"
              />

              {/* Transparent Rating */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center text-xs sm:text-sm text-white bg-black/40 rounded-full px-1.5 sm:px-2 py-0.5">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 mr-1" />
                {p.rating}
              </div>

              {/* Name + Price */}
              <div className="absolute top-12 sm:top-14 left-2 sm:left-3 text-white drop-shadow max-w-[80%]">
                <h3 className="font-medium text-sm sm:text-base leading-tight">{p.name}</h3>
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
    </div>
  );
}
