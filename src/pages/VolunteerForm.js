import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VolunteerForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [address, setAddress] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    volunteerType: "",
    experience: "",
    availability: "",
    reason: "",
    location: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const locationName = data.display_name || "Address not found";
          setAddress(locationName);
          setFormData((prev) => ({
            ...prev,
            location: locationName,
            latitude,
            longitude,
          }));
        } catch {
          setError("Failed to fetch address.");
        }
      },
      () => {
        setError("Please allow location access.");
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    localStorage.setItem("redirectPath", "/volunteer-form");
    navigate("/set-password");
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8 mb-10 p-6 bg-indigo-100 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-bold mb-2 text-pink-600">Join Us - Together for Her</h2>
      {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Volunteer Type */}
        <div>
          <label className="block font-semibold mb-1">Volunteer Type</label>
          <select
            name="volunteerType"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-sm"
          >
            <option value="">Select your role</option>
            <option value="PHARMACIST">Pharmacist</option>
            <option value="DOCTOR">Doctor</option>
            <option value="CONTENT_CREATOR">Content Creator</option>
            <option value="LOCAL_AREA_HELPER">Local Area Helper</option>
            <option value="EVENT_ORGANISER">Event Organizer</option>
            <option value="SOCIAL_MEDIA_PROMOTER">Social Media Promoter</option>
            <option value="TEACHER">Teacher</option>
            <option value="COUNSELOR">Counselor</option>
            <option value="FUNDRAISER">Fundraiser</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block font-semibold mb-1">Experience</label>
          <input
            type="text"
            name="experience"
            onChange={handleChange}
            placeholder="Enter your experience (if any)"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="block font-semibold mb-1">Availability</label>
          <input
            type="text"
            name="availability"
            required
            onChange={handleChange}
            placeholder="Days or hours per week"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Reason */}
        <div>
          <label className="block font-semibold mb-1">Why do you want to volunteer?</label>
          <textarea
            name="reason"
            required
            onChange={handleChange}
            placeholder="Share your motivation"
            rows={4}
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={address || formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            className="w-full px-3 py-2 border rounded-md text-sm mb-2"
          />
          <button
            type="button"
            onClick={getLocation}
            className="bg-pink-600 hover:bg-pink-800 active:scale-95 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
          >
            📍 Get Live Location
          </button>
        </div>

        {/* Hidden Fields */}
        <input type="hidden" name="latitude" value={formData.latitude} />
        <input type="hidden" name="longitude" value={formData.longitude} />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-base font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
