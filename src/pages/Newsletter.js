import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage(`Thank you for subscribing, ${email}!`);
    setEmail("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-pink-50 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-pink-500 mb-2">
        Stay Updated with Our Newsletter
      </h2>
      <p className="text-sm text-gray-600">
        Subscribe to receive the latest updates on women's safety and health awareness.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 border-2 border-pink-500 rounded-md text-sm focus:outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md text-sm font-semibold transition"
        >
          Subscribe
        </button>
      </div>

      {message && (
        <p className="mt-3 text-green-600 text-sm font-semibold">{message}</p>
      )}

      <div className="mt-6 bg-pink-100 p-4 rounded-md">
        <h3 className="text-lg text-pink-600 font-semibold mb-2">Why Subscribe?</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>🔔 Get important updates and tips.</li>
          <li>❤️ Be part of a supportive community.</li>
          <li>🎁 Access exclusive content and resources.</li>
        </ul>
      </div>
    </div>
  );
};

export default Newsletter;
