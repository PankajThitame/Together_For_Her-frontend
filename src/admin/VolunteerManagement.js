import React, { useEffect, useState } from "react";
import axios from "axios";

const VolunteerManagement = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get("http://localhost:9090/api/volunteers/");
        setVolunteers(response.data);
      } catch (error) {
        console.error("Error fetching volunteer data:", error);
      }
    };
    fetchVolunteers();
  }, []);

  const updateVolunteerStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:9090/api/volunteers/${id}`, { status });
      setVolunteers((prev) =>
        prev.map((volunteer) =>
          volunteer.id === id ? { ...volunteer, status } : volunteer
        )
      );
    } catch (error) {
      console.error("Error updating volunteer status:", error);
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-500 text-white";
      case "rejected":
        return "bg-red-500 text-white";
      case "pending":
        return "bg-yellow-400 text-black";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">👥 Volunteer Management</h2>

      <div className="overflow-x-auto max-h-[500px] rounded-lg">
        {volunteers.length === 0 ? (
          <p className="text-gray-600">No volunteer applications available.</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Skills</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer) => (
                <tr key={volunteer.id} className="border-b">
                  <td className="py-2 px-4">{volunteer.name}</td>
                  <td className="py-2 px-4">{volunteer.email}</td>
                  <td className="py-2 px-4">{volunteer.contactNumber}</td>
                  <td className="py-2 px-4">{volunteer.type}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-semibold text-sm ${getStatusBadgeColor(
                        volunteer.status
                      )}`}
                    >
                      {volunteer.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    {volunteer.status === "PENDING" && (
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            updateVolunteerStatus(volunteer.id, "Approved")
                          }
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded"
                        >
                          ✅ Approve
                        </button>
                        <button
                          onClick={() =>
                            updateVolunteerStatus(volunteer.id, "Rejected")
                          }
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded"
                        >
                          ❌ Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default VolunteerManagement;
