import React from 'react'
import CalendarPicker from './CalendarPicker'
import DeskGraph from './DeskGraph'
import Cards from './Cards'
import DeskChannelDropdown from './DeskChannelDropdown'
import HomeMobile from '../../mobile/home/HomeMobile'

const DeskHomePage = () => {
    const tabs = [
    { id: "sessions", title: "Sessions", value: "146", change: " 22%", editable: true },
    { id: "sales", title: "Total sales", value: "Rs 0 ", editable: false },
    { id: "orders", title: "Orders", value: "0 ", editable: false },
    { id: "revenue", title: "Conversion rate", value: "0% ", editable: false },
  ];

  const [activeTab, setActiveTab] = React.useState("sessions");
  return (
    <>
    <HomeMobile/>
    <div className="flex flex-col min-h-screen bg-gray-200 pt-4">
        <div className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-24 2xl:px-32 space-y-4">
            {/* Row 1 */}
            <div className="flex items-center gap-4">
                <CalendarPicker />
                <DeskChannelDropdown />
                <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-sm shadow-md font-semibold">
                      <span className="w-2 h-2 rounded-full bg-green-400 shadow-md shadow-green-400"></span>
                      0 live visitors
                </button>
            </div>

            {/* Row 2 */}
            <DeskGraph tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* Row 3 */}
            <Cards />

            {/* Row 4 */}
            {/* Divider with Icon + Text */}
              <div className="flex items-center my-6 w-full">
                  {/* Left Line */}
                  <div className="flex-1 border-t border-gray-300"></div>

                  {/* Icon + Text */}
                  <div className="flex items-center mx-3 text-gray-700 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
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

                  {/* Right Line */}
                  <div className="flex-1 border-t border-gray-300"></div>
              </div>

            {/* Row 5 */}
              <div className="w-full">
                  <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
                      {/* Full-width card */}
                      <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row items-center justify-between overflow-hidden">
                          {/* Left text section */}
                          <div className="w-full md:w-1/2 max-w-md p-4 md:pr-8">
                              <h2 className="text-lg md:text-xl font-bold mb-3">Discover more</h2>
                              <p className="text-gray-800 text-sm md:text-base mb-4">
                                  Browse features, apps, and sales channels to grow your business
                              </p>
                              <button className="bg-white border px-5 py-2 rounded-lg shadow-sm text-sm font-semibold hover:bg-gray-50 transition">
                                  Explore now
                              </button>
                          </div>

                          {/* Right image section */}
                          <div className="w-full md:w-1/2 h-48 md:h-auto">
                              <img
                                  src="/images/visa.jpg"
                                  alt="Shopify Discover"
                                  className="w-full h-full object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                              />
                          </div>
                      </div>

                      {/* 3-column layout */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-gray-100 rounded-lg p-6">
                              <h3 className="text-base font-bold mb-2">Drive traffic</h3>
                              <p className="text-gray-800 text-sm">
                                  Use marketing tools to attract more potential customers.
                              </p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-6">
                              <h3 className="text-base font-bold mb-2">Improve conversion</h3>
                              <p className="text-gray-700 text-sm">
                                  Convert more customers faster with built-in tools.
                              </p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-6">
                              <h3 className="text-base font-bold mb-2">Increase order value</h3>
                              <p className="text-gray-700 text-sm">
                                  Boost sales by expanding to new channels, offering bundles, and more.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>


        </div>
    </div>
    </>
  )
}

export default DeskHomePage