import React, { useState } from "react";

export default function AddCampaignModal({ isOpen, onClose }) {
  const [videoPreview, setVideoPreview] = useState(null);

  if (!isOpen) return null;

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
    >
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
          {/* Campaign Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Campaign Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter campaign name"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Budget</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter budget amount"
            />
          </div>

          {/* Dates */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">From Date</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">To Date</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Link */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Link</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter campaign link"
            />
          </div>

          {/* Video Upload */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Upload Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="w-full border rounded px-3 py-2 text-sm file:mr-2 file:py-1 file:px-3 file:border-0 file:rounded file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
            />

            {/* Video Preview */}
            {videoPreview && (
              <div className="mt-3">
                <video
                  src={videoPreview}
                  controls
                  className="w-full rounded-lg border"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Save Campaign
          </button>
        </form>
      </div>
    </div>
  );
}
