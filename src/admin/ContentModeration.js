import React, { useEffect, useState } from "react";
import axios from "axios";

const ContentModeration = () => {
  const [contentList, setContentList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get("http://localhost:9090/api/content/pending");
        setContentList(response.data);
      } catch (err) {
        setError("Error fetching content.");
        console.error(err);
      }
    };
    fetchContent();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.post(`http://localhost:9090/api/content/approve/${id}`);
      setContentList(contentList.filter((item) => item.id !== id));
      alert("Content approved successfully!");
    } catch (err) {
      alert("Failed to approve content.");
      console.error(err);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`http://localhost:9090/api/content/reject/${id}`);
      setContentList(contentList.filter((item) => item.id !== id));
      alert("Content rejected successfully!");
    } catch (err) {
      alert("Failed to reject content.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">🛡️ Content Moderation</h2>
      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {contentList.length === 0 ? (
        <p className="text-gray-600">No pending content for moderation.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {contentList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.01]"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>

              {/* Media Preview */}
              {item.fileType.startsWith("image/") && (
                <img
                  src={`http://localhost:9090${item.filePath}`}
                  alt="Uploaded Content"
                  className="rounded-lg max-h-80 w-full object-cover"
                />
              )}
              {item.fileType.startsWith("video/") && (
                <video controls className="rounded-lg max-h-80 w-full mt-2">
                  <source src={`http://localhost:9090${item.filePath}`} type={item.fileType} />
                  Your browser does not support video.
                </video>
              )}
              {item.fileType === "application/pdf" && (
                <iframe
                  src={`http://localhost:9090${item.filePath}`}
                  className="w-full h-64 rounded-lg mt-2"
                  title="PDF Preview"
                />
              )}

              {/* Buttons */}
              <div className="flex flex-wrap mt-4 gap-4">
                <button
                  onClick={() => handleApprove(item.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                >
                  ✅ Approve
                </button>
                <button
                  onClick={() => handleReject(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                >
                  ❌ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentModeration;
