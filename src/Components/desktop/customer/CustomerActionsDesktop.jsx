"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineInformationCircle,
  HiOutlineX,
  HiOutlinePlus,
} from "react-icons/hi";

export default function CustomerActionsDesktop() {
    const navigate = useNavigate();
  const [showExportModal, setShowExportModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  return (
    <div className="relative">
      {/* Buttons Row */}
      <div className="flex flex-wrap gap-3">
        <button
          className="px-3 bg-gray-200 rounded-lg text-gray-900 hover:bg-gray-300 cursor-pointer"
          onClick={() => setShowExportModal(true)}
        >
          Export
        </button>
        <button
          className="px-3 bg-gray-200 rounded-lg text-gray-900 hover:bg-gray-300 cursor-pointer"
          onClick={() => setShowImportModal(true)}
        >
          Import
        </button>
      <button
  onClick={() => navigate("/customer/AddCustomer")}
  className="px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-800 font-semibold cursor-pointer"
>
  Add customer
</button>

      </div>

      {/* ---------------- EXPORT MODAL ---------------- */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-[520px] relative overflow-hidden">
            {/* Header */}
            <div className="bg-gray-100 px-6 py-4 flex justify-between items-start border-b border-gray-200">
              <div className="flex items-center gap-1.5">
                <h2 className="text-lg font-semibold text-gray-800">
                  Export customers
                </h2>
                <HiOutlineInformationCircle className="text-gray-400 text-lg mt-[1px]" />
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <HiOutlineX className="text-xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              {/* Customers selected */}
              <div className="mb-6">
                <p className="font-medium text-gray-900 mb-2">Customers selected</p>
                <div className="flex flex-col gap-2 text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="customerSelection" defaultChecked className="accent-black cursor-pointer" />
                    <span>Current page</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="customerSelection" className="accent-black cursor-pointer" />
                    <span>All customers</span>
                  </label>
                </div>
              </div>

              {/* Fields included */}
              <div className="mb-6">
                <p className="font-medium text-gray-900 mb-1">Fields included</p>
                <p className="text-sm text-gray-500 mb-3 leading-snug">
                  By default, all exports include: full name, ID, address, email, phone number, company, marketing consent, orders, tax exempts.
                </p>
                <div className="flex flex-col gap-2 text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-black cursor-pointer" />
                    <span>Customer tags</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-black cursor-pointer" />
                    <span>Customer metafields</span>
                  </label>
                </div>
              </div>

              {/* File format */}
              <div className="mb-6">
                <p className="font-medium text-gray-900 mb-2">File format</p>
                <div className="flex flex-col gap-2 text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="fileFormat" defaultChecked className="accent-black cursor-pointer" />
                    <span>CSV for Excel, Numbers, or other spreadsheet programs</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="fileFormat" className="accent-black cursor-pointer" />
                    <span>Plain CSV file</span>
                  </label>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 pt-2 border-t border-gray-200 mt-6">
                <button
                  onClick={() => setShowExportModal(false)}
                  className="px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-300 bg-gray-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button className="px-4 py-1 bg-black text-white font-medium rounded-md hover:bg-gray-800 cursor-pointer">
                  Export customers
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- IMPORT MODAL ---------------- */}
{showImportModal && (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-xl w-[520px] relative overflow-hidden">
      
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 flex justify-between items-start border-b border-gray-200">
        <div className="flex items-center gap-1.5">
          <h2 className="text-lg font-semibold text-gray-800">
            Import customers by CSV
          </h2>
          <HiOutlineInformationCircle className="text-gray-400 text-lg mt-[1px]" />
        </div>
        <button
          onClick={() => setShowImportModal(false)}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <HiOutlineX className="text-xl" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-5">
        {/* Upload area */}
        <div className="border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center h-40 hover:bg-gray-50 transition">
          {file ? (
            <span className="text-gray-800 font-medium">{file.name}</span>
          ) : (
            <>
              {/* Hidden input */}
              <input
                id="fileInput"
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Label acts as the clickable button */}
              <label
                htmlFor="fileInput"
                className="flex items-center gap-2 shadow-sm border border-gray-200 bg-gray-50 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <HiOutlinePlus className="text-gray-500 text-lg" />
                <span className="text-gray-700 font-medium">Add file</span>
              </label>
            </>
          )}
        </div>

        {/* Link */}
        <a
          href="#"
          className="text-sm text-blue-600 hover:underline cursor-pointer"
        >
          Download a sample CSV
        </a>

        {/* Footer */}
        <div className="flex justify-end gap-3 pt-3 border-t border-gray-200">
          <button
            onClick={() => setShowImportModal(false)}
            className="px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-300 bg-gray-200 cursor-pointer"
          >
            Cancel
          </button>
          <button
            disabled={!file}
            className={`px-4 py-1 rounded-md font-medium cursor-pointer ${
              file
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Import customers
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
