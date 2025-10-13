"use client";
import React, { useState } from "react";
import CustomerActionsMobile from "../../mobile/customer/CustomerActionsMobile"; // ✅ Import fixed

export default function CustomersMobile() {
  const [showSortSidebar, setShowSortSidebar] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Last update");
  const [sortOrder, setSortOrder] = useState("desc");
  const [isEditMode, setIsEditMode] = useState(false);

  const sortOptions = [
    "Last update",
    "Amount spent",
    "Total orders",
    "Last order date",
    "First order date",
    "Date added as customer",
    "Last abandoned order date",
  ];

  const customers = [
    {
      id: 1,
      customer: "Ahsan Jamil",
      email: "subscribed",
      location: "Lahore, Pakistan",
      ordersCount: 5,
      amountSpent: "Rs 3,500.00",
    },
    {
      id: 2,
      customer: "Saad Anjum",
      email: "Not subscribed",
      location: "Lahore, Pakistan",
      ordersCount: 3,
      amountSpent: "Rs 1,800.00",
    },
    {
      id: 3,
      customer: "Hira Ahmed",
      email: "subscribed",
      location: "Multan, Pakistan",
      ordersCount: 2,
      amountSpent: "Rs 2,200.00",
    },
  ];

  return (
    <>
      {/* ✅ Top Actions Component */}
      <CustomerActionsMobile />

      <div className="lg:hidden min-h-screen bg-gray-100 p-4 flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            {/* User Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A8 8 0 1118.88 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h1 className="text-lg font-semibold text-gray-800">Customers</h1>
          </div>

          <div className="flex gap-2">
            {!isEditMode && <CustomerActionsMobile />}
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className="bg-white p-1 rounded-md shadow border border-gray-200"
            >
              {/* Pencil/Edit Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5h2m2 0h2m-6 4h2m2 0h2m-6 4h2m2 0h2M5 20h14M7 4h10a2 2 0 012 2v16H5V6a2 2 0 012-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.9-5.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 018.05 8z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search customers"
            className="w-full rounded-md pl-10 pr-4 py-2 focus:outline-none placeholder-gray-600"
          />

          {/* Sort Button */}
          <button
            onClick={() => setShowSortSidebar(!showSortSidebar)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 bg-white p-1 rounded-md shadow border border-gray-200 ${
              showSortSidebar ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            {/* Sort Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4h13M3 10h9M3 16h5M19 20l2-2-2-2M19 4l2 2-2 2"
              />
            </svg>
          </button>
        </div>

        {/* Customer List */}
        <div className="flex flex-col gap-3">
          {customers.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-lg p-3 shadow flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-gray-700">{c.customer}</h2>
                {isEditMode && (
                  <button className="text-sm text-gray-500 italic">Edit</button>
                )}
              </div>
              <p className="text-sm text-gray-500">
                Email:{" "}
                <span
                  className={`${
                    c.email === "subscribed"
                      ? "text-green-500"
                      : "text-gray-600"
                  } font-medium`}
                >
                  {c.email}
                </span>
              </p>
              <p className="text-sm text-gray-500">Location: {c.location}</p>
              <p className="text-sm text-gray-500">
                Orders: <span className="font-medium">{c.ordersCount}</span>
              </p>
              <p className="text-sm text-gray-500">
                Amount Spent:{" "}
                <span className="font-medium">{c.amountSpent}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-3 mt-4 justify-center">
          <button className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition">
            {/* Left Chevron */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition">
            {/* Right Chevron */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <span className="text-gray-800 font-medium text-sm">1–15</span>
        </div>

        {/* Sort Sidebar */}
        {showSortSidebar && (
          <div className="absolute right-4 top-32 z-50 bg-white border border-gray-200 rounded-xl shadow-lg w-64 p-4">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">
              Sort by
            </h2>
            <div className="flex flex-col gap-2">
              {sortOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer"
                  onClick={() => setSelectedSort(option)}
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition ${
                      selectedSort === option
                        ? "border-black"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedSort === option && (
                      <div className="w-2 h-2 bg-black rounded-full" />
                    )}
                  </span>
                  {option}
                </label>
              ))}
            </div>

            {/* Sort Order */}
            <div className="mt-3 flex flex-col gap-2">
              <button
                onClick={() => setSortOrder("asc")}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition outline-none ${
                  sortOrder === "asc"
                    ? "text-black font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {/* Up Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7 7 7M12 3v18"
                  />
                </svg>
                Oldest to newest
              </button>
              <button
                onClick={() => setSortOrder("desc")}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition outline-none ${
                  sortOrder === "desc"
                    ? "text-black font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {/* Down Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7-7-7M12 21V3"
                  />
                </svg>
                Newest to oldest
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
