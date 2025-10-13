import React from "react";
// import CalendarPicker from "./CalendarPicker";
import MobCards from "./MobCards";
import CalendarPickerMob from "./CalendarPickerMob";
import ResponsiveChannelDropdown from "./ResponsiveChannelDropdown";
import MobGraph from "./MobGraph";
// import ChannelDropdown from "./ChannelDropdown";

const HomeMobile  = () => {
    const [activeTab, setActiveTab] = React.useState("sessions");
  
  const tabs = [
    { id: "sessions", title: "Sessions", value: "146", change: " 22%", editable: true },
    { id: "sales", title: "Total sales", value: "Rs 0 ", editable: false },
    { id: "orders", title: "Orders", value: "0 ", editable: false },
    { id: "revenue", title: "Conversion rate", value: "0% ", editable: false },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-200 pt-16 px-3 sm:px-6 space-y-4 lg:hidden">
      {/* Row 1 */}
      {/* ====== Top Controls ====== */}
      <div className="flex flex-row items-center gap-3 flex-wrap w-full">
  <CalendarPickerMob />
  <ResponsiveChannelDropdown />
  <button
    className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg text-sm shadow-sm font-semibold 
               w-auto justify-center whitespace-nowrap"
  >
    <span className="w-2 h-2 rounded-full bg-green-400 shadow-md shadow-green-400"></span>
    0 live visitors
  </button>
</div>


      {/* Row 2 */}
      <MobGraph tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* ====== Cards Section ====== */}
      <MobCards />

      {/* ====== All caught up ====== */}
      <div className="flex items-center my-4 w-full">
        <div className="flex-1 border-t border-gray-300"></div>
        <div className="flex items-center mx-3 text-gray-700 text-sm font-medium whitespace-nowrap">
          <div className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-500 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          All caught up
        </div>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* ====== Discover Section ====== */}
      <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
        <div className="bg-gray-100 rounded-lg flex flex-row items-stretch overflow-hidden">
  {/* Left content */}
  <div className="flex-1 p-4 flex flex-col justify-center">
    <h2 className="text-base font-bold mb-2">Discover more</h2>
    <p className="text-gray-800 text-sm mb-3">
      Browse features, apps, and sales channels to grow your business.
    </p>
    <button className="bg-white border px-4 py-2 rounded-lg shadow-sm text-sm font-semibold hover:bg-gray-50 transition w-fit">
      Explore now
    </button>
  </div>

  {/* Right image */}
  <div className="w-[45%] flex-shrink-0">
    <img
      src="/images/visa.jpg"
      alt="Discover"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        {/* Three small info boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-sm font-bold mb-1">Drive traffic</h3>
            <p className="text-gray-700 text-xs">
              Use marketing tools to attract more potential customers.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-sm font-bold mb-1">Improve conversion</h3>
            <p className="text-gray-700 text-xs">
              Convert more customers faster with built-in tools.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-sm font-bold mb-1">Increase order value</h3>
            <p className="text-gray-700 text-xs">
              Boost sales by expanding to new channels, offering bundles, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMobile ;
