import React, { useState } from "react";
import axios from "axios";

const RequestKit = () => {
  const [formData, setFormData] = useState({
    address: "",
    contact: "",
    reason: "",
  });

  const userId = localStorage.getItem("userid");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRequest = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:9090/api/requests/${userId}`, formData);
      alert("Kit request submitted successfully!");

      setFormData({
        address: "",
        contact: "",
        reason: "",
      });
    } catch (error) {
      console.error("Error submitting kit request:", error);
      alert("Error submitting kit request. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-pink-50 p-8 rounded-2xl shadow-lg mt-8">
      <h2 className="text-center text-pink-600 text-2xl font-bold mb-6">
        Request a Free Hygiene Kit
      </h2>
      <form onSubmit={handleRequest} className="space-y-4">
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:border-pink-400"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:border-pink-400"
        />
        <textarea
          name="reason"
          placeholder="Why do you need this kit?"
          value={formData.reason}
          onChange={handleChange}
          required
          className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 min-h-[100px] resize-vertical"
        />
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-lg transition duration-300"
        >
          Request Kit
        </button>
      </form>
    </div>
  );
};

export default RequestKit;