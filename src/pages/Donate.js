import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Donate = () => {
  const [customAmount, setCustomAmount] = useState("");

  const handleRazorpayDonate = async (amount) => {
    try {
      if (amount === 0) {
        if (!customAmount || isNaN(customAmount) || customAmount <= 0) {
          alert("Please enter a valid amount.");
          return;
        }
        amount = parseInt(customAmount) * 100;
      }

      const response = await axios.post("http://localhost:9090/api/payments/create", { amount });
      const { id: orderId, amount: razorAmount, currency } = response.data;

      const options = {
        key: "rzp_test_aRRY41tkiwfWbk",
        amount: razorAmount,
        currency,
        order_id: orderId,
        name: "Together for Her",
        description: "Support Women's Safety",
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Supporter",
          email: "supporter@example.com",
          contact: "7821828016",
        },
        theme: {
          color: "#f25a70",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error in Razorpay payment:", error);
      alert("Payment failed. Please try again!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start pt-20 px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 animate-fade-in">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4 text-center">💖 Support Our Cause</h2>
        <p className="text-gray-600 text-base mb-6 text-center">
          Your generosity helps us provide hygiene kits, education, and safety
          resources for women in need. Every contribution makes a difference!
        </p>

        <div className="bg-pink-50 rounded-lg p-4">
          <h3 className="text-pink-500 font-semibold mb-2 text-center">Choose an Amount</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <button
              onClick={() => handleRazorpayDonate(500)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 font-bold text-sm"
            >
              ₹5
            </button>
            <button
              onClick={() => handleRazorpayDonate(1000)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 font-bold text-sm"
            >
              ₹10
            </button>
            <button
              onClick={() => handleRazorpayDonate(2000)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 font-bold text-sm"
            >
              ₹20
            </button>

            <input
              type="number"
              placeholder="Custom ₹"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 w-28 focus:outline-none focus:ring focus:border-pink-400"
            />
            <button
              onClick={() => handleRazorpayDonate(0)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-bold text-sm"
            >
              Donate
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <Link
            to="/fundraising"
            className="bg-yellow-400 text-white text-center py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Start a Fundraiser
          </Link>
          <Link
            to="/volunteer"
            className="bg-yellow-400 text-white text-center py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Become a Volunteer
          </Link>
          <Link
            to="/"
            className="bg-cyan-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-cyan-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donate;
