import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-700 text-center mb-6">
          We'd love to hear from you! Reach out to us with any questions, feedback, or ideas.
        </p>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 border-t pt-6 text-gray-700">
          <h3 className="text-xl font-bold mb-2 text-pink-600">Other Ways to Reach Us:</h3>
          <p><strong>Email:</strong> support@togetherforher.org</p>
          <p><strong>Phone:</strong> +91 7821828016</p>
          <p><strong>Address:</strong> Gurudatta Nagar, Pune 411 045</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
