import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Languages,
  Heart,
  BadgeCheck,
  ArrowLeft,
} from "lucide-react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userid");
      if (!userId) throw new Error("User ID not found. Please log in.");

      const response = await fetch(`http://localhost:9090/api/auth/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch profile");

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading user profile...</p>;
  if (!user) return <p className="text-center mt-10">No profile found. Please log in.</p>;

  const {
    age,
    contactNumber,
    firstName,
    email,
    healthConcerns,
    location,
    modeOfReachability,
    preferredLanguage,
    socialStatus,
    profile_pic,
  } = user;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 mt-10 rounded-lg shadow-lg">
      <button
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={18} /> Back to Home
      </button>

      <div className="flex items-center gap-6 mb-6">
        <img
          src={profile_pic || "/images/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
        />
        <h2 className="text-3xl font-semibold text-gray-800">{firstName}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center gap-3 text-gray-700">
          <User className="text-blue-600" /> <span><strong>Username:</strong> {firstName}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Mail className="text-blue-600" /> <span><strong>Email:</strong> {email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Phone className="text-blue-600" /> <span><strong>Contact:</strong> {contactNumber}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <MapPin className="text-blue-600" /> <span><strong>Location:</strong> {location}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Heart className="text-blue-600" /> <span><strong>Health Concerns:</strong> {healthConcerns || "None"}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Languages className="text-blue-600" /> <span><strong>Preferred Language:</strong> {preferredLanguage}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <BadgeCheck className="text-blue-600" /> <span><strong>Social Status:</strong> {socialStatus || "N/A"}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <User className="text-blue-600" /> <span><strong>Age:</strong> {age}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <User className="text-blue-600" /> <span><strong>Mode of Reachability:</strong> {modeOfReachability}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;