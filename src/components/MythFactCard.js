import React from "react";

const MythFactCard = ({ type, title, content }) => {
  const borderColor = type === "myth" ? "border-l-red-500" : "border-l-green-500";
  const label = type === "myth" ? "❌ Myth:" : "✅ Fact:";

  return (
    <div
      className={`bg-white p-5 m-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 border-l-4 ${borderColor}`}
    >
      <h3 className="font-semibold text-lg mb-1">{label}</h3>
      <p className="text-gray-700 font-medium">{title}</p>
      <span className="text-gray-600 text-sm block mt-2">{content}</span>
    </div>
  );
};

export default MythFactCard;
