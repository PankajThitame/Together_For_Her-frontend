import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is menstrual hygiene?",
      answer:
        "Menstrual hygiene refers to practices used to ensure cleanliness and good health during menstruation.",
    },
    {
      question: "How can I donate?",
      answer:
        "You can donate through our secure online portal using PayPal, Stripe, or UPI.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-pink-50 p-5 rounded-lg shadow-sm border border-pink-200"
            >
              <p className="text-lg font-semibold text-pink-700 mb-2">
                {faq.question}
              </p>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
