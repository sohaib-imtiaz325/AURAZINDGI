import React, { useState } from "react";
import {
  Calendar,
  BarChart3,
  Mail,
  ChevronDown,
  Search,
  Filter,
  ArrowUpDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "/images/Card-1.webp",
    name: "mafioso Eau de perfume for men",
    status: "Active",
    inventory: "0 in stock",
    category: "Eaux de Parfum",
    channels: 2,
  },
  {
    id: 2,
    image: "/images/Card-2.webp",
    name: "ashbourne Eau de Perfume For men",
    status: "Active",
    inventory: "88 in stock",
    category: "Eaux de Parfum",
    channels: 2,
  },
  {
    id: 3,
    image: "/images/card-3.webp",
    name: "Bella Mia For female",
    status: "Active",
    inventory: "33 in stock",
    category: "Eaux de Parfum",
    channels: 2,
  },
  {
    id: 4,
    image: "/images/WhatsApp Image 2025-07-08 at 11.13.39 PM.webp",
    name: "Rhea Touched by Bomdshell (Retail $100)",
    status: "Active",
    inventory: "8 in stock",
    category: "Uncategorized",
    channels: 2,
  },
  {
    id: 5,
    image: "/images/Card-2.webp",
    name: "Bella Mia Perfume for Women",
    status: "Active",
    inventory: "50 in stock",
    category: "Eaux de Parfum",
    channels: 2,
  },
  {
    id: 6,
    image: "/images/card-3.webp",
    name: "Tycoon Eau de Parfum for Men",
    status: "Active",
    inventory: "43 in stock",
    category: "Eaux de Parfum",
    channels: 2,
  },
];

export default function Products() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
        <h1 className="text-lg sm:text-2xl font-semibold">Products</h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 relative">
          {/* More actions with dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center bg-gray-100 text-gray-700 px-3 py-2 rounded-md shadow hover:bg-gray-200 text-sm"
            >
              More actions
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <BarChart3 className="w-4 h-4 mr-2 text-gray-500" />
                  Hide analytic bar
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <Mail className="w-4 h-4 mr-2 text-gray-500" />
                  Create email campaign
                </button>
              </div>
            )}
          </div>

          {/* Add Product Button */}
          <button
            onClick={() => navigate("/add-product")}
            className="bg-black text-white px-3 py-2 rounded-md shadow hover:bg-gray-800 text-sm"
          >
            Add product
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white p-3 rounded-lg shadow flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 mb-2">Calendar</p>
          <Calendar className="w-8 h-8 text-gray-700" />
        </div>

        <div className="bg-white p-3 rounded-lg shadow">
          <p className="text-sm text-gray-500">Average sell-through rate</p>
          <p className="text-lg font-medium">0%</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow">
          <p className="text-sm text-gray-500">Days of inventory remaining</p>
          <p className="text-lg font-medium">No data</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow">
          <p className="text-sm text-gray-500">ABC product analysis</p>
          <p className="text-lg font-medium">Rs 0.00 C</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        {/* Left Buttons */}
        <div className="flex flex-wrap gap-2">
          {["All", "+"].map((label) => (
            <button
              key={label}
              className="px-4 py-1.5 rounded-md bg-gray-100 text-gray-700 text-sm hover:bg-gray-200"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex gap-2">
          {[Search, Filter, ArrowUpDown].map((Icon, i) => (
            <button
              key={i}
              className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left text-sm border border-gray-200 min-w-[700px]">
          <thead className="bg-gray-100 text-gray-700 font-medium border-b border-gray-200">
            <tr>
              <th className="p-3 border-r border-gray-200 w-10">
                <input type="checkbox" />
              </th>
              <th className="p-3 border-r border-gray-200">Product</th>
              <th className="p-3 border-r border-gray-200">Status</th>
              <th className="p-3 border-r border-gray-200">Inventory</th>
              <th className="p-3 border-r border-gray-200">Category</th>
              <th className="p-3">Channels</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="p-3 border-r border-gray-200 w-10">
                  <input type="checkbox" />
                </td>
                <td className="p-3 flex items-center space-x-3 border-r border-gray-200">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <span className="text-sm sm:text-base">{p.name}</span>
                </td>
                <td className="p-3 border-r border-gray-200">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    {p.status}
                  </span>
                </td>
                <td
                  className={`p-3 border-r border-gray-200 ${
                    p.inventory.includes("0") || p.inventory.includes("8")
                      ? "text-red-500"
                      : "text-gray-800"
                  }`}
                >
                  {p.inventory}
                </td>
                <td className="p-3 border-r border-gray-200">{p.category}</td>
                <td className="p-3">{p.channels}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
