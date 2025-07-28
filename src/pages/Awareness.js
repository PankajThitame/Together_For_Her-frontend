import React, { useState } from "react";
import FAQAccordion from "../components/FAQAccordion";
import HygieneTips from "../components/HygieneTips";
import MotivationalQuotes from "../components/MotivationalQuotes";
import MythFactCard from "../components/MythFactCard";

const mythsFactsData = [
  {
    type: "myth",
    title: "Women shouldn’t exercise during periods.",
    content: "Exercising can actually reduce cramps and boost mood.",
  },
  {
    type: "myth",
    title: "Menstruation is dirty and impure.",
    content: "It is a natural biological process, not impure.",
  },
  {
    type: "myth",
    title: "Using tampons can break virginity.",
    content: "Tampons do not affect virginity; they are just absorbent materials.",
  },
];

const Awareness = () => {
  const [showMoreMyths, setShowMoreMyths] = useState(false);

  return (
    <div className="font-poppins text-gray-800 bg-gradient-to-r from-pink-100 to-orange-100 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-12 -left-12 w-52 h-52 bg-pink-200 opacity-30 rounded-full z-0"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-orange-200 opacity-40 rounded-full z-0"></div>

      {/* Hero Section */}
      <section className="text-center px-4 py-12 bg-gradient-to-tr from-[#720316] to-pink-400 text-white rounded-2xl relative z-10">
        <h1 className="text-4xl font-bold text-orange-300 drop-shadow-lg">Awareness & Education</h1>
        <p className="text-xl mt-3 text-indigo-200">
          Empowering women with knowledge about menstrual hygiene, health, and safety.
        </p>
      </section>

      {/* Motivational Quotes */}
      <div className="relative z-10">
        <MotivationalQuotes />
      </div>

      {/* Hygiene Tips */}
      <div className="relative z-10">
        <HygieneTips />
      </div>

      {/* Myths & Facts */}
      <section className="mt-10 text-center px-4 relative z-10">
        <h2 className="text-2xl font-semibold mb-6">Breaking Myths & Facts</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {mythsFactsData
            .slice(0, showMoreMyths ? mythsFactsData.length : 2)
            .map((item, index) => (
              <MythFactCard
                key={index}
                type={item.type}
                title={item.title}
                content={item.content}
              />
            ))}
        </div>
        <button
          className="mt-4 px-5 py-2 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition"
          onClick={() => setShowMoreMyths(!showMoreMyths)}
        >
          {showMoreMyths ? "Show Less" : "Show More"}
        </button>
      </section>

      {/* FAQ Section */}
      <div className="mt-10 px-4 relative z-10">
        <FAQAccordion />
      </div>

      {/* Video Section */}
      <section className="text-center mt-10 mb-10 px-4 relative z-10">
        <h2 className="text-2xl font-semibold mb-4">Watch & Learn</h2>
        <div className="flex flex-col lg:flex-row justify-center gap-6">
          <iframe
            className="w-full lg:w-[60%] h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/zcvo9VLVHWc"
            title="Menstrual Hygiene Video"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full lg:w-[60%] h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/c72EmEwZ5Qk"
            title="Myths & Facts About Periods"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Awareness;
