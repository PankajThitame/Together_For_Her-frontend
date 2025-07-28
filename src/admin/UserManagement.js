import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle, FaEnvelope } from "react-icons/fa";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9090/api/auth/");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-100 p-6 rounded-xl m-5">
      <h1 className="text-center text-white bg-blue-600 py-2 rounded-lg text-2xl font-semibold mb-4">
        User Management
      </h1>

      {loading ? (
        <p className="text-gray-600 text-center">Loading users...</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-start">
          {users.length === 0 ? (
            <p className="text-gray-700">No users found.</p>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className="w-full sm:w-80 bg-gradient-to-r from-yellow-200 to-yellow-400 text-gray-800 shadow-lg rounded-2xl p-4 hover:scale-[1.03] transition-transform duration-200"
              >
                <h2 className="text-lg font-bold">
                  {user.firstName} ({user.age})
                </h2>

                <p className="my-2">
                  <a
                    href={`mailto:${user.email}`}
                    className="text-blue-800 underline flex items-center gap-1"
                  >
                    <FaEnvelope /> {user.email}
                  </a>
                </p>

                <div className="flex gap-3 my-2">
                  <a href={`tel:${user.contactNumber}`} className="text-blue-500">
                    <FaPhone size={18} />
                  </a>
                  <a
                    href={`https://wa.me/${user.contactNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>

                <p><strong>Contact:</strong> {user.contactNumber}</p>
                <p className="flex items-center gap-1">
                  <strong>Location:</strong> {user.location} <FaMapMarkerAlt />
                </p>
                <p><strong>Social Status:</strong> {user.socialStatus}</p>
                <p><strong>Language:</strong> {user.preferredLanguage}</p>
                <p><strong>Health Concerns:</strong> {user.healthConcerns}</p>
                <p><strong>Reachability:</strong> {user.modeOfReachability}</p>
                <p className="flex items-center gap-1">
                  <strong>Verification:</strong>
                  {user.verificationStatus?.toLowerCase() === "verified" ? (
                    <FaCheckCircle className="text-green-600" />
                  ) : (
                    <FaTimesCircle className="text-red-600" />
                  )}
                </p>
                <p><strong>Latitude:</strong> {user.latitude}</p>
                <p><strong>Longitude:</strong> {user.longitude}</p>
                <p><strong>Status:</strong> {user.status}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserManagement;
