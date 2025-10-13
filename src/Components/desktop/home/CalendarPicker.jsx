import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { FiCalendar, FiCheck } from "react-icons/fi";
import {
  format,
  subDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function CalendarPicker() {
  const [open, setOpen] = useState(false);

  // Default = Last 30 Days
  const [range, setRange] = useState([
    {
      startDate: subDays(new Date(), 29),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [activeId, setActiveId] = useState("last30");

  const sidebarOptions = [
    { id: "today", label: "Today", range: () => ({ startDate: new Date(), endDate: new Date() }) },
    { id: "yesterday", label: "Yesterday", range: () => ({ startDate: subDays(new Date(), 1), endDate: subDays(new Date(), 1) }) },
    { divider: true },
    { id: "last7", label: "Last 7 days", range: () => ({ startDate: subDays(new Date(), 6), endDate: new Date() }) },
    { id: "last30", label: "Last 30 days", range: () => ({ startDate: subDays(new Date(), 29), endDate: new Date() }) },
    { id: "last90", label: "Last 90 days", range: () => ({ startDate: subDays(new Date(), 89), endDate: new Date() }) },
    { id: "last365", label: "Last 365 days", range: () => ({ startDate: subDays(new Date(), 364), endDate: new Date() }) },
    { id: "last12m", label: "Last 12 months", range: () => ({ startDate: subDays(new Date(), 365), endDate: new Date() }) },
    { divider: true },
    { id: "lastWeek", label: "Last week", range: () => ({ startDate: startOfWeek(subDays(new Date(), 7)), endDate: endOfWeek(subDays(new Date(), 7)) }) },
    { id: "lastMonth", label: "Last month", range: () => ({ startDate: startOfMonth(subDays(new Date(), 30)), endDate: endOfMonth(subDays(new Date(), 30)) }) },
  ];

  // Button label
  const tabLabel = () => {
    const today = new Date();
    const last30 = {
      startDate: subDays(today, 29).toDateString(),
      endDate: today.toDateString(),
    };
    if (
      range[0].startDate.toDateString() === last30.startDate &&
      range[0].endDate.toDateString() === last30.endDate
    ) {
      return "Last 30 days";
    }
    return `${format(range[0].startDate, "dd MMM yyyy")} - ${format(
      range[0].endDate,
      "dd MMM yyyy"
    )}`;
  };

  return (
    <div className="relative inline-block">
      {/* Button */}
      <div
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-sm shadow-md font-semibold cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <FiCalendar className="text-gray-800" />
        {tabLabel()}
      </div>

      {/* Popup (Desktop only) */}
      {open && (
        <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg 
          w-[950px] max-w-[95vw] max-h-[90vh] overflow-auto flex flex-col">
          
          <div className="flex flex-row h-full">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-200 px-4 py-3 overflow-y-auto">
              {sidebarOptions.map((item, i) =>
                item.divider ? (
                  <hr key={i} className="my-2 border-gray-300" />
                ) : (
                  <div
                    key={item.id}
                    onClick={() => {
                      const newRange = item.range();
                      setRange([{ ...newRange, key: "selection" }]);
                      setActiveId(item.id);
                    }}
                    className={`flex justify-between items-center py-2 cursor-pointer text-[15px] font-medium ${
                      activeId === item.id
                        ? "bg-gray-200 text-gray-900 rounded-md px-2"
                        : "hover:bg-gray-100 text-gray-700 px-2"
                    }`}
                  >
                    {item.label}
                    {activeId === item.id && <FiCheck className="text-gray-900" />}
                  </div>
                )
              )}
            </div>

            {/* Calendar */}
            <div className="flex-1 overflow-auto">
              <DateRangePicker
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={window.innerWidth < 1024 ? 1 : 2} // ✅ 1 month on small screens, 2 on desktop
                direction="horizontal"
                showSelectionPreview={true}
                inputRanges={[]}
                staticRanges={[]} 
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 px-4 py-2 border-t border-gray-200 bg-white">
            <button
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-800"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded-md bg-blue-600 text-white"
              onClick={() => setOpen(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
