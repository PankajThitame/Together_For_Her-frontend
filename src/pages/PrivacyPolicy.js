import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-pink-50 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl text-pink-500 font-bold mb-4">Privacy Policy</h2>
      <p className="text-sm text-gray-600">
        We value your privacy and ensure that your personal data is protected and not shared with third parties.
      </p>

      <div className="mt-6 text-left">
        {[1, 2, 3, 4].map((section) => {
          const titles = [
            "1. Information We Collect",
            "2. How We Use Your Information",
            "3. Data Protection",
            "4. Your Rights",
          ];
          const contents = [
            "We collect personal information like name, email, and donation details to enhance your experience.",
            "Your data is used to provide services, process donations, and send important updates.",
            "We implement security measures to protect your information from unauthorized access.",
            "You have the right to access, update, or delete your personal information.",
          ];
          return (
            <div
              key={section}
              className="bg-white p-4 rounded-lg shadow-md mb-3 cursor-pointer transition duration-300 hover:bg-pink-100"
              onClick={() => toggleSection(section)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-pink-600 font-semibold text-lg m-0">{titles[section - 1]}</h3>
                <span className="text-xl text-pink-500">{openSection === section ? "▲" : "▼"}</span>
              </div>
              {openSection === section && (
                <p className="mt-2 text-sm text-gray-700">{contents[section - 1]}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-base font-medium transition">
          Accept
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-base font-medium transition">
          Decline
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;