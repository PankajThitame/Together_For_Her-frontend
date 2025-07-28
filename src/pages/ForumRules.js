import React, { useState } from "react";

const ForumRules = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl mx-auto my-10 px-4 py-6 bg-pink-50 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-pink-600 mb-2">
        Community Guidelines
      </h2>
      <p className="text-sm sm:text-base text-gray-600">
        Follow these rules to maintain a safe and respectful community.
      </p>

      <div className="mt-6 space-y-4">
        <div className="bg-white px-4 py-3 rounded-md shadow text-base text-gray-800 flex justify-center items-center">
          ✅ Be respectful and kind to others.
        </div>
        <div className="bg-white px-4 py-3 rounded-md shadow text-base text-gray-800 flex justify-center items-center">
          🚫 No misinformation or harmful content.
        </div>
        <div className="bg-white px-4 py-3 rounded-md shadow text-base text-gray-800 flex justify-center items-center">
          ❌ No spamming or self-promotion.
        </div>
        <div className="bg-white px-4 py-3 rounded-md shadow text-base text-gray-800 flex justify-center items-center">
          💬 Keep discussions relevant to hygiene & well-being.
        </div>
      </div>

      <button
        className="mt-6 px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md text-sm transition"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Hide More Rules" : "View More Rules"}
      </button>

      {expanded && (
        <div className="mt-6 bg-pink-100 px-5 py-4 rounded-md space-y-2 text-sm text-gray-700 text-left">
          <p>5️⃣ Report any inappropriate behavior to moderators.</p>
          <p>6️⃣ Use respectful language, no hate speech.</p>
          <p>7️⃣ Avoid sharing personal details in public forums.</p>
        </div>
      )}

      <footer className="mt-8 text-xs text-gray-500">
        <p>&copy; 2024 Together for Her. All rights reserved.</p>
        <p>
          For support, contact{" "}
          <a
            href="/contact"
            className="text-pink-500 hover:underline hover:text-pink-600"
          >
            here
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default ForumRules;
