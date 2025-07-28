import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [userStats, setUserStats] = useState({});
  const [requestStats, setRequestStats] = useState({});
  const [donationStats, setDonationStats] = useState({});
  const [contentStats, setContentStats] = useState({});
  const [volunteerStats, setVolunteerStats] = useState({});
  const [feedbackStats, setFeedbackStats] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const [
          requestResponse,
          userResponse,
          volunteerResponse,
          feedbackResponse,
        ] = await Promise.all([
          axios.get("http://localhost:9090/api/requests/count"),
          axios.get("http://localhost:9090/api/auth/count"),
          axios.get("http://localhost:9090/api/volunteers/count"),
          axios.get("http://localhost:9090/api/count"),
        ]);

        setUserStats(userResponse.data);
        setRequestStats(requestResponse.data);
        setVolunteerStats(volunteerResponse.data);
        setFeedbackStats(feedbackResponse.data);
      } catch (err) {
        setError("Error fetching data.");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans bg-gray-100 rounded-xl shadow-lg grid gap-6 md:grid-cols-2">
      <h1 className="text-3xl font-bold text-center text-gray-800 col-span-full border-b-2 border-blue-500 pb-2">
        Admin Dashboard
      </h1>

      {error && <p className="text-red-600 font-semibold col-span-full">{error}</p>}

      {/* User Management */}
      <section className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">User Management</h2>
        <p>Total Users: <strong>{userStats.totalUsers || 0}</strong></p>
        <p>Active Users: <strong>{userStats.activeUsers || 0}</strong></p>
        <p>Pending Approvals: <strong>{userStats.pendingApprovals || 0}</strong></p>
      </section>

      {/* Request Management */}
      <section className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Request Management</h2>
        <p>Total Requests: <strong>{requestStats.totalRequests || 0}</strong></p>
        <p>Pending Requests: <strong>{requestStats.pendingRequests || 0}</strong></p>
        <p>Completed Requests: <strong>{requestStats.completedRequests || 0}</strong></p>
      </section>

      {/* Fund Management */}
      <section className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Fund Management</h2>
        <p>Total Donations: <strong>₹{donationStats.totalDonations || 0}</strong></p>
        <p>Recent Donation: <strong>{donationStats.recentDonation || "N/A"}</strong></p>
      </section>

      {/* Content Moderation */}
      <section className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Content Moderation</h2>
        <p>Posts Pending Review: <strong>{contentStats.pendingPosts || 0}</strong></p>
        <p>Approved Posts: <strong>{contentStats.approvedPosts || 0}</strong></p>
      </section>

      {/* Volunteer Management */}
      <section className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Volunteer Management</h2>
        <p>Total Volunteers: <strong>{volunteerStats.totalVolunteers || 0}</strong></p>
        <p>Pending Applications: <strong>{volunteerStats.pendingApplications || 0}</strong></p>
      </section>

      {/* Feedback System */}
      <section className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Feedback System</h2>
        <p>Total Feedback: <strong>{feedbackStats.feedbackCount || 0}</strong></p>
        <p>Replied: <strong>{feedbackStats.replied || 0}</strong></p>
        <p>Pending to Reply: <strong>{feedbackStats.pendingtoreply || 0}</strong></p>
      </section>
    </div>
  );
};

export default AdminPanel;
