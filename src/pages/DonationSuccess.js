import React from "react";
import { Link } from "react-router-dom";

const DonationSuccess = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-300 to-pink-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg animate-fade-in text-center">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">
          🎉 Thank You for Your Donation! ❤️
        </h2>
        <p className="text-gray-700 text-base">
          Your generosity is making a real impact on women's health and hygiene.
        </p>

        <div className="mt-6 bg-pink-50 p-4 rounded-lg">
          <h3 className="text-pink-500 font-semibold mb-2">What's Next?</h3>
          <ul className="text-sm text-gray-600 list-none space-y-1">
            <li>✔ Receive a confirmation email soon.</li>
            <li>✔ Track how your donation is making a difference.</li>
            <li>✔ Join our volunteer community for more engagement.</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/volunteer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Become a Volunteer
          </Link>
          <Link
            to="/donate"
            className="bg-lime-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Donate Again
          </Link>
          <Link
            to="/"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccess;
