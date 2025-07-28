import React, { useEffect, useState } from "react";
import axios from "axios";

const FeedbackSystem = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [response, setResponse] = useState({});
  const [filter, setFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:9090/api/reviews/get/all");
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };
    fetchFeedback();
  }, []);

  const handleResponseChange = (id, value) => {
    setResponse((prev) => ({ ...prev, [id]: value }));
  };

  const submitResponse = async (id) => {
    try {
      const updatedResponse = response[id] || "";
      await axios.put(`http://localhost:9090/api/response/${id}`, {
        response: updatedResponse,
        status: "RESPONDED",
      });
      setFeedbacks((prev) =>
        prev.map((fb) =>
          fb.id === id ? { ...fb, response: updatedResponse, status: "RESPONDED" } : fb
        )
      );
      setResponse((prev) => ({ ...prev, [id]: "" }));
      setEditingId(null);
    } catch (error) {
      console.error("Error submitting response:", error);
    }
  };

  const editResponse = (id, currentResponse) => {
    setEditingId(id);
    setResponse((prev) => ({ ...prev, [id]: currentResponse || "" }));
  };

  const filteredFeedbacks =
    filter === "All" ? feedbacks : feedbacks.filter((fb) => fb.status === filter);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg my-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        💬 Feedback Management
      </h2>

      {/* Filter */}
      <div className="flex flex-col sm:flex-row sm:justify-end items-center gap-3 mb-4">
        <label htmlFor="statusFilter" className="font-medium text-gray-700 dark:text-gray-300">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm dark:bg-gray-800 dark:text-white"
        >
          <option value="All">All</option>
          <option value="PENDING">Pending</option>
          <option value="RESPONDED">Responded</option>
        </select>
      </div>

      {filteredFeedbacks.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">No feedback available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg overflow-hidden">
            <thead className="bg-indigo-700 text-white text-sm sm:text-base">
              <tr>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Feedback</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Response</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedbacks.map((fb) => (
                <tr key={fb.id} className="odd:bg-gray-100 dark:odd:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
                  <td className="px-4 py-3 text-sm">{fb.user?.firstName || "Unknown"}</td>
                  <td className="px-4 py-3 text-sm">{fb.text || "No feedback provided"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        fb.status === "PENDING"
                          ? "bg-yellow-500"
                          : fb.status === "RESPONDED"
                          ? "bg-green-600"
                          : "bg-gray-400"
                      }`}
                    >
                      {fb.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {editingId === fb.id ? (
                      <textarea
                        value={response[fb.id] !== undefined ? response[fb.id] : ""}
                        onChange={(e) => handleResponseChange(fb.id, e.target.value)}
                        className="w-full p-2 border rounded-md text-sm dark:bg-gray-800 dark:text-white"
                        placeholder="Edit your response..."
                      />
                    ) : fb.status === "RESPONDED" ? (
                      <p>{fb.response || "No response yet"}</p>
                    ) : (
                      <textarea
                        value={response[fb.id] !== undefined ? response[fb.id] : ""}
                        onChange={(e) => handleResponseChange(fb.id, e.target.value)}
                        className="w-full p-2 border rounded-md text-sm dark:bg-gray-800 dark:text-white"
                        placeholder="Type your response..."
                      />
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {fb.status === "PENDING" ? (
                      <button
                        onClick={() => submitResponse(fb.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded-md shadow-sm"
                      >
                        📤 Respond
                      </button>
                    ) : editingId === fb.id ? (
                      <button
                        onClick={() => submitResponse(fb.id)}
                        className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1 rounded-md shadow-sm"
                      >
                        ✅ Save
                      </button>
                    ) : (
                      <button
                        onClick={() => editResponse(fb.id, fb.response)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-1 rounded-md shadow-sm"
                      >
                        ✏️ Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FeedbackSystem;
