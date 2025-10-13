"use client";
import React, { useState } from "react";
import CustomerActions from "../../desktop/customer/CustomerActionsDesktop";
import CustomersMobile from "../../mobile/customer/CustomersMobile"; // ✅ Added import

export default function CustomersDesktop() {
  const [showSortSidebar, setShowSortSidebar] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Last update");
  const [sortOrder, setSortOrder] = useState("desc");
  const [isEditMode, setIsEditMode] = useState(false);

  const [visibleColumns, setVisibleColumns] = useState({
    email: true,
    location: true,
    ordersCount: true,
    amountSpent: true,
    id: true,
    firstName: true,
    lastName: true,
  });

  const toggleColumn = (col) =>
    setVisibleColumns((prev) => ({ ...prev, [col]: !prev[col] }));

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
      firstName: "Ahsan",
      lastName: "Jamil",
    },
    {
      id: 2,
      customer: "Saad Anjum",
      email: "Not subscribed",
      location: "Lahore, Pakistan",
      ordersCount: 3,
      amountSpent: "Rs 1,800.00",
      firstName: "Saad",
      lastName: "Anjum",
    },
    {
      id: 3,
      customer: "Hira Ahmed",
      email: "subscribed",
      location: "Multan, Pakistan",
      ordersCount: 2,
      amountSpent: "Rs 2,200.00",
      firstName: "Hira",
      lastName: "Ahmed",
    },
  ];

  // ✅ Check device type
  const isDesktop = window.innerWidth >= 1024;

  if (!isDesktop) {
    return <CustomersMobile />; // ✅ Show mobile component if screen is small
  }

  return (
    <>
      {/* ✅ DESKTOP VIEW */}
      <div className="hidden lg:flex min-h-screen bg-gray-100 p-8 flex-col relative">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9.004 9.004 0 0112 15a9.004 9.004 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h1 className="text-xl font-semibold text-gray-800">Customers</h1>
          </div>

          <div className="flex flex-wrap gap-3">
            {!isEditMode && <CustomerActions />}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg p-3 flex flex-wrap justify-between items-center mb-4">
          <p className="text-md">
            <span className="font-semibold text-gray-700">{customers.length}</span>
            <span className="text-gray-500 ml-1">customers</span>
            <span className="ml-7">
              <span className="font-semibold text-gray-700">100%</span>
              <span className="text-gray-500 ml-1">of your customer base</span>
            </span>
          </p>
          <button className="flex items-center gap-1 font-semibold bg-gray-100 text-gray-600 text-sm px-3 py-1.5 rounded-md hover:bg-gray-200 transition">
            Add filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mt-[3px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Search + Icons */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm relative">
          <div className="relative mb-1">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 10.5A6.15 6.15 0 1110.5 4.35a6.15 6.15 0 016.15 6.15z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search customers"
              className="w-full rounded-md pl-10 pr-20 py-2 focus:outline-none placeholder-gray-600"
            />

            {/* Action buttons */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              {!isEditMode ? (
                <>
                  <button className="bg-white shadow rounded-md p-1 cursor-pointer hover:bg-gray-100 transition border border-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h7v18H3V3zm11 0h7v18h-7V3z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => setShowSortSidebar(!showSortSidebar)}
                    className={`bg-white shadow rounded-md p-1 cursor-pointer transition border border-gray-200 ${
                      showSortSidebar ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4h13M3 8h9m-9 8h9m4 4l4-4m0 0l-4-4m4 4H10"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => setIsEditMode(true)}
                    className="bg-white shadow rounded-md p-1 cursor-pointer hover:bg-gray-100 transition border border-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.232 5.232l3.536 3.536M9 11l6.232-6.232a2.121 2.121 0 113 3L12 14H9v-3z"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditMode(false)}
                    className="px-3 py-1 bg-gray-200 rounded-md text-sm font-medium hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsEditMode(false)}
                    className="px-3 py-1 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Table */}
          {!isEditMode ? (
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100 border-b border-gray-200 text-gray-600 text-xs">
                <tr>
                  <th className="p-3 w-10">
                    <input type="checkbox" className="cursor-pointer" />
                  </th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Email subscription</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Orders</th>
                  <th className="p-3">Amount Spent</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c) => (
                  <tr key={c.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="p-3 text-center">
                      <input type="checkbox" className="cursor-pointer" />
                    </td>
                    <td className="p-3 font-medium text-gray-600">{c.customer}</td>
                    <td className="p-3">
                      {c.email === "subscribed" ? (
                        <span className="bg-green-100 text-green-500 text-xs font-medium px-2 py-1 rounded-full">
                          Subscribed
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-md">
                          Not Subscribed
                        </span>
                      )}
                    </td>
                    <td className="p-3">{c.location}</td>
                    <td className="p-3 font-medium">{c.ordersCount}</td>
                    <td className="p-3 font-medium">{c.amountSpent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="min-w-full text-left text-sm border border-gray-200 bg-gray-100">
              <thead className="bg-gray-200 text-gray-700 text-xs uppercase">
                <tr>
                  <th className="p-3 border">Customer Name</th>
                  <th className="p-3 border">Note</th>
                </tr>
              </thead>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
