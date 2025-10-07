import React, { useState } from "react";

export default function AddCampaignModal({ isOpen, onClose }) {
  const [videoPreview, setVideoPreview] = useState(null);
  const [campaignName, setCampaignName] = useState("");
  const [budget, setBudget] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [link, setLink] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
      setVideoFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("campaignName", campaignName);
    formData.append("budget", budget);
    formData.append("fromDate", fromDate);
    formData.append("toDate", toDate);
    formData.append("link", link);
    if (videoFile) formData.append("video", videoFile);

    try {
      const res = await fetch("http://localhost:5000/api/campaigns", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Network response not ok");
      const data = await res.json();
      console.log("✅ Saved:", data);
      alert("Campaign saved successfully!");

      // reset fields & close modal
      setCampaignName("");
      setBudget("");
      setFromDate("");
      setToDate("");
      setLink("");
      setVideoFile(null);
      setVideoPreview(null);
      onClose();
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error saving campaign");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-end z-50 transition-all duration-300">
      {/* Modal Container */}
      <div className="bg-white rounded-t-2xl p-6 w-full max-w-md shadow-xl relative transform transition-all duration-300 translate-y-0 animate-slideUp overflow-y-auto max-h-[85vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Add New Campaign
        </h2>

        {/* ✅ Form with controlled inputs + submit handler */}
        <form className="space-y-4 pb-4" onSubmit={handleSubmit}>
          {/* Campaign Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Campaign Name
            </label>
            <input
              type="text"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter campaign name"
              required
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Budget</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter budget amount"
            />
          </div>

          {/* Dates */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">From Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">To Date</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Link */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Link</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
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
              name="video"
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

      {/* Slide-up animation */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
