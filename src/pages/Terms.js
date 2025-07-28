import React from "react";

const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-pink-50 rounded-xl shadow-md text-center">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 to-pink-400 text-white p-6 rounded-t-xl">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        <p className="text-sm mt-2 opacity-90">
          By using this website, you agree to abide by our policies and guidelines.
        </p>
      </header>

      {/* Main Content */}
      <section className="text-left p-6">
        <h2 className="text-pink-500 text-xl font-semibold mb-2">1. User Responsibilities</h2>
        <p className="text-base text-gray-700 mb-4">
          Users must respect others and use the platform ethically.
        </p>

        <h2 className="text-pink-500 text-xl font-semibold mb-2">2. Privacy Policy</h2>
        <p className="text-base text-gray-700 mb-4">
          Your data is protected and will not be shared without your consent.
        </p>

        <h2 className="text-pink-500 text-xl font-semibold mb-2">3. Prohibited Activities</h2>
        <ul className="list-disc list-inside text-base text-gray-700 mb-4">
          <li>Spamming, hacking, or any form of abuse.</li>
          <li>Posting misleading information.</li>
          <li>Violating any applicable laws or regulations.</li>
        </ul>

        <h2 className="text-pink-500 text-xl font-semibold mb-2">4. Changes to Terms</h2>
        <p className="text-base text-gray-700">
          We may update these terms, and users will be notified of any major changes.
        </p>
      </section>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-6 flex-wrap">
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-md text-base transition">
          Accept
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-md text-base transition">
          Decline
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-6 py-4 bg-pink-100 rounded-b-xl">
        <p className="text-sm text-gray-700">
          &copy; 2024 Together for Her. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Terms;
