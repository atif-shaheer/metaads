import { Bell, Plus, Search, Grid, MoreVertical, Settings, ChevronDown, ChevronRight } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen relative pb-14" style={{
      background: `linear-gradient(
      90deg,
      rgba(255, 240, 240, 0.6) 20%,
      rgba(255, 245, 245, 0.4) 35%,
      rgba(240, 245, 255, 0.8) 70%,
      rgba(240, 245, 255, 1) 100%
    )`
    }}
    >

      {/* Account Info (Transparent Fixed Header) */}
      <div className="fixed top-0 left-0 right-0 px-4 pt-4 pb-2 z-20 pointer-events-none backdrop-blur-md bg-white/40">
        <div className="flex items-start justify-between pointer-events-auto">
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Avatar circular */}
            <div
              className="rounded-full flex items-center justify-center overflow-hidden flex-shrink-0"
              style={{ width: '2.5rem', height: '2.5rem', backgroundColor: 'white' }}
            >
              <Settings className="w-5 h-5 text-gray-600" />
            </div>

            {/* Name + subtitle */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <h2 className="font-semibold leading-5 truncate text-lg">
                  badshah dubai
                </h2>
                <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
              </div>

              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-600 inline-block flex-shrink-0" />
                <p className="text-xs text-gray-500 truncate">9 active campaign</p>
              </div>
            </div>
          </div>

          {/* Right: Bell + Plus */}
          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            <div className="relative">
              <Bell className="text-gray-700 w-6 h-6" />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-1 leading-none min-w-[16px] text-center">
                8
              </span>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="rounded-full bg-green-800 flex items-center justify-center shadow-md flex-shrink-0"
              style={{ width: '2.5rem', height: '2.5rem' }}
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
          {/* Filter button */}
          <button className="flex items-center gap-2 px-3 py-2 border bg-white text-sm font-medium shadow-sm flex-shrink-0 min-w-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h10m-6 6h16"
              />
            </svg>
          </button>

          {/* Date */}
          <button className="flex items-center gap-1 px-3 py-2 border bg-white text-sm font-medium shadow-sm flex-shrink-0 min-w-0">
            <span className="truncate">Date</span>
            <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
          </button>

          {/* Status */}
          <button className="flex items-center gap-1 px-3 py-2 border bg-white text-sm font-medium shadow-sm flex-shrink-0 min-w-0">
            <span className="truncate">Status</span>
            <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
          </button>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="px-4 pt-32">
        {/* Spending Info */}
        <div
          className="bg-white shadow flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-all p-4"
        >
          {/* Left Section */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-4">
              {/* Left */}
              <div className="min-w-0">
                <p className="text-gray-500 text-xs sm:text-sm">Total amount spent</p>
                <h2 className="font-bold text-lg sm:text-xl truncate">₹142,923.90</h2>
              </div>

              {/* Right */}
              <div className="text-right min-w-0 flex-shrink-0">
                <p className="text-gray-500 text-xs sm:text-sm">Spending limit</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="w-2 h-2 bg-red-700 rounded-full flex-shrink-0"></span>
                  <p className="text-red-700 font-medium text-xs sm:text-sm whitespace-nowrap">
                    <b>152.58 remaining</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chevron Right */}
          <ChevronRight className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
        </div>

        {/* Opportunity */}
        <div
          className="bg-white shadow flex justify-between items-center p-4 mt-3"
        >
          {/* Left: Label + Half-circle */}
          <div className="min-w-0 flex-1">
            {/* Label on top */}
            <p className="text-gray-500 text-xs sm:text-sm mb-1">Opportunity score</p>
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-6 flex-shrink-0">
                <svg className="w-12 h-6" viewBox="0 0 100 50">
                  <path
                    d="M10,50 A40,40 0 0,1 90,50"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h2 className="font-semibold text-sm sm:text-base truncate">100 <small className="text-xs">points</small></h2>
              </div>
            </div>
          </div>

          {/* Right: Recommendations */}
          <div className="min-w-0 flex-1 text-right">
            <h2 className="font-semibold text-sm truncate">0 <small className="text-xs">recommendations</small></h2>
          </div>

          {/* Chevron Right */}
          <ChevronRight className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
        </div>

        {/* Campaigns Header */}
        <div className="py-3 mt-2 flex items-center justify-between">
          {/* Left Section: Title + Vertical Arrow */}
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl">Campaigns</h2>
            {/* Vertical bidirectional arrow (up and down) */}
            <div className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l4 4H8l4-4zM12 19l-4-4h8l-4 4z" />
              </svg>
            </div>
          </div>

          {/* Right Section: Icons */}
          <div className="flex gap-3">
            <Search className="w-5 h-5 text-gray-700" />
            <Grid className="w-5 h-5 text-gray-700" />
          </div>
        </div>

        {/* Campaign List */}
        <div className="space-y-3 mt-3">
          {/* Campaign Item */}
          <div
            className="bg-white shadow-md p-4 relative hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start gap-3">
              {/* Left: Avatar + Info */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="relative w-10 h-10 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="campaign"
                    className="object-cover w-full h-full"
                  />
                  {/* Green Active Dot */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg leading-tight truncate">Nikh</h3>
                  <p className="text-sm text-gray-500 truncate">
                    <span style={{ color: 'green', fontWeight: 'bold' }}>Active</span> • Sales
                  </p>
                </div>
              </div>

              {/* Right: Menu Icon */}
              <MoreVertical className="w-5 h-5 text-gray-500 flex-shrink-0" />
            </div>

            {/* Stats Section */}
            <div className="flex justify-between mt-4 gap-2">
              {/* Column 1 */}
              <div className="flex flex-col items-center flex-1 min-w-0">
                <p className="font-bold text-lg">56</p>
                <p className="text-xs text-gray-500 text-center">Website Subscribes</p>
              </div>

              {/* Divider */}
              <div className="border-l border-gray-300 mx-1"></div>

              {/* Column 2 */}
              <div className="flex flex-col items-center flex-1 min-w-0">
                <p className="font-bold text-lg">₹11.82</p>
                <p className="text-xs text-gray-500 text-center">Cost per Subscribe</p>
              </div>

              {/* Divider */}
              <div className="border-l border-gray-300 mx-1"></div>

              {/* Column 3 */}
              <div className="flex flex-col items-center flex-1 min-w-0">
                <p className="font-bold text-lg">₹662.14</p>
                <p className="text-xs text-gray-500 text-center">Spent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}