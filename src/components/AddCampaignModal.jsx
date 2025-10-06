import React from "react";

export default function AddCampaignModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50" style={{ marginTop: '18rem' }}>
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Add New Campaign</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Campaign Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter campaign name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Budget</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter budget amount"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">To Date</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">From Date</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Link</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter Link"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            Save Campaign
          </button>
        </form>
      </div>
    </div>
  );
}