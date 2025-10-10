import { Bell, Plus, Search, Grid, MoreVertical, Settings, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import AddCampaignModal from "../components/AddCampaignModal";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
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
    <div className="flex items-center gap-3">
      {/* Avatar circular */}
      <div
        className="rounded-full flex items-center justify-center overflow-hidden"
        style={{ width: '3rem', height: '3rem', backgroundColor: 'white' }}
      >
        <Settings className="w-7 h-7 text-gray-600" />
      </div>

      {/* Name + subtitle */}
      <div>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold leading-5" style={{ fontSize: '1.8rem' }}>
            badshah dubai
          </h2>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
          <p className="text-sm text-gray-500">9 active campaign</p>
        </div>
      </div>
    </div>

    {/* Right: Bell + Plus */}
    <div className="flex items-center gap-3">
      <div className="relative">
        <Bell className="text-gray-700" style={{ width: '2.2rem', height: '2.2rem' }} />
        <span style={{ fontSize: '1.3rem' }} className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-1 leading-none">
          8
        </span>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="rounded-full bg-green-800 flex items-center justify-center shadow-md"
        style={{ width: '2.8rem', height: '2.8rem' }}
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  </div>

  {/* Filters */}
  <div className="flex gap-3 px-1 mt-3">
    {/* Filter button */}
    <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white text-base font-medium shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-600"
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
    <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white text-base font-medium shadow-sm">
      Date
      <ChevronDown className="w-5 h-5 text-gray-500" />
    </button>

    {/* Status */}
    <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white text-base font-medium shadow-sm">
      Status
      <ChevronDown className="w-5 h-5 text-gray-500" />
    </button>
  </div>
</div>

          {/* Modal */}
          <AddCampaignModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
      {/* Content wrapper (add padding-top to avoid overlap with fixed header) */}
      <div style={{ paddingTop: '8.5rem' }}>
        {/* Spending Info */}
        <div className="px-4 py-3 mt-5 bg-white shadow rounded-lg" style={{ border: '1px solid #E5E7EB', marginLeft: '16px', marginRight: '16px', borderRadius: '0rem' }}>
          <div className="flex justify-between items-start">
            {/* Left */}
            <div>
              <p className="text-gray-500 text-sm">Total amount spent</p>
              <h2 className="text-2xl font-bold" style={{ fontSize: '1.2rem' }}>₹142,923.90</h2>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className="text-gray-500 text-sm">Spending limit</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                <p className="text-red-700 text-sm font-medium">
                  <b>152.58 remaining</b>
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
              <div className="relative w-14 h-7">
                <svg className="w-14 h-7" viewBox="0 0 100 50">
                  <path
                    d="M10,50 A40,40 0 0,1 90,50"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
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
        <div className="space-y-2 px-4 mt-2">
          {/* Campaign Item */}
          <div className="bg-white shadow rounded-lg p-3 relative">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded overflow-hidden">
                  <img src="https://via.placeholder.com/40" alt="campaign" />
                </div>
                <div>
                  <h3 className="font-semibold">Nikh</h3>
                  <p className="text-sm text-gray-500">Active • Engagement</p>
                </div>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex justify-between mt-3">
              {/* Column 1 */}
              <div className="flex flex-col items-center flex-1">
                <p className="font-bold">56</p>
                <p className="text-sm text-gray-500">Website Subscribes</p>
              </div>

              {/* Vertical line between 1 and 2 */}
              <div className="border-l border-gray-300 mx-4"></div>

              {/* Column 2 */}
              <div className="flex flex-col items-center flex-1">
                <p className="font-bold">₹11.82</p>
                <p className="text-sm text-gray-500">Cost per Website Subscribe</p>
              </div>

              {/* Vertical line between 2 and 3 */}
              <div className="border-l border-gray-300 mx-4"></div>

              {/* Column 3 */}
              <div className="flex flex-col items-center flex-1">
                <p className="font-bold">₹662.14</p>
                <p className="text-sm text-gray-500">Spent</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}