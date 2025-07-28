import React from "react";

const HygieneTips = () => {
  const tips = [
    { title: "Change Pads Regularly", icon: "🩸" },
    { title: "Wash Hands Before & After", icon: "👐" },
    { title: "Wear Breathable Clothing", icon: "👗" },
    { title: "Stay Hydrated", icon: "💧" },
  ];

  return (
    <section className="mt-10 text-center px-4">
      <h2 className="text-2xl font-bold text-pink-800">Menstrual Hygiene Tips</h2>

      <div className="flex flex-wrap justify-evenly items-center pt-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="w-[15%] min-w-[150px] h-[100px] bg-pink-100 hover:bg-pink-200 transition-transform transform hover:scale-110 shadow-md rounded-lg p-4 flex flex-col justify-center items-center m-2"
          >
            <span className="text-4xl">{tip.icon}</span>
            <p className="mt-2 text-sm font-medium text-gray-800">{tip.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HygieneTips;
