import React, { useEffect, useState } from "react";
import axios from "axios";

const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/donations").then((response) => {
      setDonations(response.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
          Donation Management
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-pink-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Donor Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 text-sm text-gray-800">{donation.donorName}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{donation.email}</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">₹{donation.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(donation.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Donations;
