import React, { useState } from "react";
import {
  Package,
  Calendar,
  Search,
  MoreVertical,
  ArrowUpDown,
  ListFilter,
  Trash2,
  ChevronDown,
  Plus,
  Box,
  Grid3x2,
} from "lucide-react";

export default function Orders() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [hoveredRow, setHoveredRow] = useState(null);

  const orders = [
    {
      id: "1013",
      date: "23 Jul at 5:15 pm",
      customer: "Saad Anjum",
      channel: "",
      total: "Rs 2,990.00",
      payment: "Payment pending",
      fulfillment: "Unfulfilled",
      items: "1 item",
      itemDetails: "",
      deliverystatus: "",
      deliverymethod: "Free shipping",
      tags: "releasit_cod_form",
    },
    {
      id: "1012",
      date: "23 Jul at 2:43 am",
      customer: "Feman Ahsan",
      channel: "",
      total: "Rs 2,999.00",
      payment: "Payment pending",
      fulfillment: "Unfulfilled",
      items: "1 item",
      itemDetails: "",
      deliverystatus: "",
      deliverymethod: "Free shipping",
      tags: "releasit_cod_form",
    },
    {
      id: "1011",
      date: "22 Jul at 11:09 pm",
      customer: "Uzii sheilhoo",
      channel: "",
      total: "Rs 2,990.00",
      payment: "Payment pending",
      fulfillment: "Unfulfilled",
      items: "1 item",
      itemDetails: "",
      deliverystatus: "",
      deliverymethod: "Free shipping",
      tags: "releasit_cod_form",
    },
    {
      id: "1010",
      date: "22 Jul at 9:02 pm",
      customer: "Ahsan Jamil",
      channel: "",
      total: "Rs 12,988.00",
      payment: "Payment pending",
      fulfillment: "Unfulfilled",
      items: "3 items",
      itemDetails: "",
      deliverystatus: "",
      deliverymethod: "Free shipping",
      tags: "releasit_cod_form",
    },
    {
      id: "1009",
      date: "22 Jul at 8:55 pm",
      customer: "Ahsan Jamil",
      channel: "",
      total: "Rs 2,990.00",
      payment: "Payment pending",
      fulfillment: "Unfulfilled",
      items: "1 item",
      itemDetails: "",
      deliverystatus: "",
      deliverymethod: "Free shipping",
      tags: "releasit_cod_form",
    },
    {
      id: "1008",
      date: "22 Jul at 8:47 pm",
      customer: "Ahsan Jamil",
      channel: "",
      total: "Rs 4,999.00",
      payment: "Payment pending",
      fulfillment: "Unfulfilled",
      items: "1 item",
      itemDetails: "",
      deliverystatus: "",
      deliverymethod: "Free shipping",
      tags: "releasit_cod_form",
    },
    {
      id: "1007",
      date: "22 Jul at 6:51 pm",
      customer: "Feman Ahsan",
      channel: "",
      total: "Rs 11,497.00",
      payment: "Payment pending",
      fulfillment: "Unfulfilled",
      items: "3 items",
      itemDetails: "",
      deliverystatus: "",
      deliverymethod: "Free shipping",
      tags: "releasit_cod_form",
    },
    {
      id: "1006",
      date: "22 Jul at 6:47 pm",
      customer: "Femqn Ahsan",
      channel: "",
      total: "Rs 4,485.00",
      payment: "Paid",
      fulfillment: "Unfulfilled",
      items: "2 items",
      itemDetails: "",
      deliverystatus: "",
      deliverymethod: "Free shipping",
      tags: "releasit_cod_form",
    },
    {
      id: "1005",
      date: "22 Jul at 6:31 pm",
      customer: "Feman Ahsan",
      channel: "",
      total: "Rs 4,999.00",
      payment: "Payment pending",
      fulfillment: "Unfulfilled",
      items: "1 item",
      itemDetails: "",
      deliverystatus: "",
      deliverymethod: "Free shipping",
      tags: "releasit_cod_form",
    },
  ];

  const tabs = ["All", "Unfulfilled", "Unpaid", "Open", "Archived"];

  const toggleOrderSelection = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const toggleAllOrders = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((order) => order.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Package className="w-6 h-6" />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Orders</h1>
        </div>
        
      </div>

      {/* Stats Cards */}
      <div className="mb-6">
        <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-3 scrollbar-hide">
          {/* Today Card */}
          <div className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-4 md:p-6 flex flex-col items-center justify-center w-[140px] md:w-auto">
            <div className="flex items-center gap-1.5 text-gray-700">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base font-medium">Today</span>
            </div>
          </div>

          {/* Other cards */}
          {["Orders", "Items ordered", "Returns", "Orders fulfilled"].map(
            (label, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-4 md:p-6 w-[140px] md:w-auto"
              >
                <div className="text-sm md:text-base font-medium">{label}</div>
                <div className="flex items-baseline gap-1 md:gap-2">
                  <span className="text-xl md:text-2xl font-semibold">
                    {label.includes("Returns") ? "Rs 0" : "0"}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400">—</span>
                </div>
                <div
                  className="mt-1 md:mt-2 h-0.5 bg-blue-500 rounded-full ml-auto"
                  style={{ width: "40%" }}
                ></div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center gap-1 px-4 pt-4 border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === tab
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              {tab}
            </button>
          ))}
          <button className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg ml-1">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 flex-wrap gap-2">
          <div></div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-2 bg-white-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
              <Search className="w-5 h-5 text-gray-700" />
              <ListFilter className="w-5 h-5 text-gray-700" />
            </button>
            <button className="flex items-center gap-1 px-3 py-2 bg-white-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
              <Grid3x2 className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex items-center gap-1 px-3 py-2 bg-white-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
              <ArrowUpDown className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-x-auto relative max-w-full">
          <table className="min-w-[1600px] text-sm border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="sticky left-0 bg-gray-50 z-20 px-4 py-3 text-left w-12">
                  <input
                    type="checkbox"
                    checked={selectedOrders.length === orders.length}
                    onChange={toggleAllOrders}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="sticky left-12 bg-gray-50 z-20 px-4 py-3 text-left text-xs font-medium text-gray-600 whitespace-nowrap w-40">
                  Order
                </th>

                {[
                  "Date",
                  "Customer",
                  "Channel",
                  "Total",
                  "Payment status",
                  "Fulfillment status",
                  "Items",
                  "Delivery status",
                  "Delivery method",
                  "Tags",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-600 whitespace-nowrap w-48"
                  >
                    {header === "Date" ? (
                      <div className="flex items-center gap-1">
                        {header}
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    ) : (
                      header
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50"
                  onMouseEnter={() => setHoveredRow(order.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="sticky left-0 bg-white z-20 px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => toggleOrderSelection(order.id)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="sticky left-12 bg-white z-20 px-4 py-2 text-sm font-medium text-blue-600 whitespace-nowrap">
                    #{order.id}
                  </td>

                  <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap">
                    {order.date}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap">
                    {order.customer}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900">
                    {order.channel}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap">
                    {order.total}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${order.payment === "Paid"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-orange-50 text-orange-700"
                        }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full border-2 ${order.payment === "Paid"
                            ? "bg-gray-500 border-gray-500"
                            : "border-orange-500"
                          }`}
                      ></span>
                      {order.payment}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 whitespace-nowrap">
                      <span className="w-2 h-2 rounded-full border-2 border-yellow-500"></span>
                      {order.fulfillment}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap relative">
                    <div className="flex items-center gap-1 cursor-pointer">
                      {order.items}
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                    {hoveredRow === order.id && order.itemDetails.length > 0 && (
                      <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-20 min-w-[200px]">
                        {order.itemDetails.map((item, idx) => (
                          <div
                            key={idx}
                            className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap">
                    {order.deliverystatus}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap">
                    {order.deliverymethod}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 whitespace-nowrap">
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                      {order.tags}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
