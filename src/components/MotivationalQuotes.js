import React, { useState, useEffect } from "react";

const quotesList = [
  "Empowered women empower the world!",
  "Periods are power, not shame.",
  "Knowledge is the key to change!",
  "Let's break the taboos, one step at a time."
];

const MotivationalQuotes = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotesList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-center italic text-pink-500 text-lg mt-5">
      "{quotesList[quoteIndex]}"
    </p>
  );
};

export default MotivationalQuotes;
