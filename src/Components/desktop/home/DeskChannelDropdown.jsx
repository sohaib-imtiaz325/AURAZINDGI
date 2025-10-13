import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

export default function DeskChannelDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All channels");
  const dropdownRef = useRef(null);

  const options = [
    "All channels",
    "Online Store",
    "Shopify POS (Phase 2 Al Ghani Garden)",
    "Other",
  ];

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 bg-white px-4 py-2 rounded-lg 
                   text-sm md:text-base lg:text-sm shadow-md font-semibold w-auto min-w-max"
      >
        <span className="whitespace-nowrap">{selected}</span>
        <FiChevronDown className="text-gray-700 flex-shrink-0" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-max">
          {options.map((option, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-4 py-2 cursor-pointer text-sm md:text-base lg:text-sm font-medium whitespace-nowrap
                ${
                  selected === option
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              <span className="whitespace-nowrap">{option}</span>
              {selected === option && <FiCheck className="text-gray-700 ml-2" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
