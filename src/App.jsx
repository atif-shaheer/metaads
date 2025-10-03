import { Bell, Plus, Search, Grid, Home, Lightbulb, HelpCircle, MoreVertical, Settings, ChevronDown } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative pb-14">

{/* Account Info */}
<div className="px-4 pt-4 pb-2">
  <div className="flex items-start justify-between">
    {/* left: avatar + name */}
    <div className="flex items-center gap-3">
      {/* avatar circular */}
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
        <Settings className="w-6 h-6 text-gray-600" />
      </div>

      {/* name + subtitle */}
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold leading-5">badshah dubai</h2>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

        <div className="flex items-center gap-2 mt-1">
          {/* small red status dot */}
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          <p className="text-sm text-gray-500">Spend limit reached</p>
        </div>
      </div>
    </div>

    {/* right: bell + plus */}
    <div className="flex items-center gap-3">
      <div className="relative">
        <Bell className="w-6 h-6 text-gray-700" />
        {/* red notification badge positioned like screenshot */}
        <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-1 leading-none">8</span>
      </div>

      <button className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center shadow-md">
        <Plus className="w-5 h-5 text-white" />
      </button>
    </div>
  </div>
</div>


{/* Filters */}
<div className="flex gap-2 px-4 mt-2">
  {/* Filter button */}
  <button className="flex items-center gap-2 px-3 py-1.5 border rounded bg-white text-sm">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10m-6 6h16" />
    </svg>
  </button>

  {/* Date */}
  <button className="flex items-center gap-2 px-3 py-1.5 border rounded bg-white text-sm">
    Date
    <ChevronDown className="w-4 h-4 text-gray-500" />
  </button>

  {/* Status */}
  <button className="flex items-center gap-2 px-3 py-1.5 border rounded bg-white text-sm">
    Status
    <ChevronDown className="w-4 h-4 text-gray-500" />
  </button>
  </div>


  {/* Spending Info */}
<div className="px-4 py-3 mt-5 bg-white shadow rounded-lg" style={{ border: '1px solid #E5E7EB', marginLeft: '16px', marginRight: '16px', borderRadius: '0rem' }}>
  <div className="flex justify-between items-start">
    {/* Left */}
    <div>
      <p className="text-gray-500 text-sm">Total amount spent</p>
      <h2 className="text-2xl font-bold">₹142,923.90</h2>
    </div>

    {/* Right */}
    <div className="text-right">
      <p className="text-gray-500 text-sm">Spending limit</p>
      <div className="flex items-center justify-end gap-1 mt-1">
        {/* Small red dot like image */}
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <p className="text-red-500 text-sm font-medium">
          Account spending limit reached
        </p>
      </div>
    </div>
  </div>
</div>


{/* Opportunity */}
<div
  className="px-4 py-3 mt-3 bg-white shadow rounded-lg flex justify-between items-center"
  style={{ border: "1px solid #E5E7EB", marginLeft: "16px", marginRight: "16px", borderRadius: '0rem' }}
>
  {/* Left: Label + Half-circle */}
  <div>
    {/* Label on top */}
    <p className="text-gray-500 text-sm mb-1">Opportunity score</p>

    <div className="flex items-center gap-3">
      {/* Half-circle SVG */}
      <div className="relative w-14 h-7">
        <svg className="w-14 h-7" viewBox="0 0 100 50">
          <path
            d="M10,50 A40,40 0 0,1 90,50"
            fill="none"
            stroke="#34D399"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
        {/* Score number inside semicircle */}

      </div>
        <div className="inset-0 flex items-center justify-center -translate-y-1">
          <h2 className="text-base font-semibold">100 <small>points</small></h2>
        </div>
    </div>
  </div>

  {/* Right: Recommendations */}

        <div className=" inset-0 flex items-center justify-center -translate-y-1">
          <h4 className="text-base font-semibold">0 <small>recommendations</small></h4>
        </div>

  {/* <p className="text-gray-600 flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>
    0 recommendations
  </p> */}
</div>



      {/* Campaigns */}
      <div className="px-4 py-3 mt-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Campaigns</h2>
        <div className="flex gap-3">
          <Search className="w-5 h-5 text-gray-600" />
          <Grid className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Campaign List */}
      <div className="space-y-2 px-4 mt-2" style={{ borderRadius: '0rem' }}>
        {/* Campaign Item */}
        <div className="bg-white shadow rounded-lg p-3 relative">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded overflow-hidden">
                <img src="https://via.placeholder.com/40" alt="campaign" />
              </div>
              <div>
                <h3 className="font-semibold">Nikh</h3>
                <p className="text-sm text-gray-500">Not delivering • Engagement</p>
              </div>
            </div>
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex justify-between mt-3">
            <div>
              <p className="font-bold">56</p>
              <p className="text-sm text-gray-500">Website Subscribes</p>
            </div>
            <div>
              <p className="font-bold">₹11.82</p>
              <p className="text-sm text-gray-500">Cost per Website Subscribe</p>
            </div>
            <div>
              <p className="font-bold">₹662.14</p>
              <p className="text-sm text-gray-500">Spent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        <Home className="w-6 h-6 text-gray-600" />
        <Lightbulb className="w-6 h-6 text-gray-600" />
        <HelpCircle className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
}

export default App;
