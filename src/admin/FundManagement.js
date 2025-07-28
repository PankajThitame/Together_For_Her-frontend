import React, { useEffect, useState } from "react";
import axios from "axios";

const FundManagement = () => {
  const [funds, setFunds] = useState({
    totalDonations: 0,
    recentDonors: [],
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFundData = async () => {
      try {
        const response = await axios.get("http://localhost:9090/api/funds");
        setFunds(response.data);
      } catch (err) {
        setError("Error fetching fund data.");
        console.error(err);
      }
    };
    fetchFundData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 my-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
        💰 Fund Management
      </h2>

      {error && <p className="text-red-600 font-semibold mb-4">{error}</p>}

      <div className="bg-gray-100 p-6 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Total Donations</h3>
        <p className="text-4xl font-bold text-green-600">
          ₹ {funds.totalDonations.toLocaleString()}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Donors</h3>
        {funds.recentDonors.length === 0 ? (
          <p className="text-gray-500">No recent donations.</p>
        ) : (
          <ul className="space-y-3">
            {funds.recentDonors.map((donor, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row justify-between bg-gray-200 p-4 rounded-md shadow-sm text-sm sm:text-base text-gray-700"
              >
                <span className="font-medium">{donor.name}</span>
                <span className="font-semibold text-green-600">
                  ₹ {donor.amount.toLocaleString()}
                </span>
                <span className="text-gray-500">
                  {new Date(donor.date).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FundManagement;
