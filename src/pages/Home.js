// ✅ Tailwind CSS version of the Home page layout
// ⚠️ All styles from Home.css are replaced with utility classes.
// ✅ Responsive support added using Tailwind's responsive classes

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-[#333] bg-pink-100">
      {/* Hero Section */}
      <header className="text-center bg-gradient-to-br from-pink-100 to-purple-100 py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-rose-700 mb-4">
          Empowering Women, Together
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Join our mission to ensure safety and health for all women.
        </p>
        <Link to="/empowerment" className="bg-pink-400 hover:bg-pink-500 text-white py-2 px-6 rounded-full text-lg transition">
          Learn More
        </Link>
      </header>

      {/* Features Section */}
      <section className="flex flex-wrap justify-center items-center gap-8 px-4 py-12 bg-pink-100 text-center">
        <div className="bg-gradient-to-br from-purple-200 to-purple-400 p-6 rounded-lg shadow-md max-w-xs transform transition-transform hover:-translate-y-2">
          <img src="/images/awareness1.png" alt="Awareness" className="w-24 h-24 mx-auto mb-4 object-contain" />
          <Link to="/content" className="block bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-full mb-2">
            Raise Awareness
          </Link>
          <p className="text-sm">Spread education on menstrual health and women's safety.</p>
        </div>
        <div className="bg-gradient-to-br from-purple-200 to-purple-400 p-6 rounded-lg shadow-md max-w-xs transform transition-transform hover:-translate-y-2">
          <img src="/images/safety.png" alt="Safety" className="w-24 h-24 mx-auto mb-4 object-contain" />
          <Link to="/donate" className="block bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-full mb-2">
            Build a Community
          </Link>
          <p className="text-sm">Providing resources to help women feel secure and supported.</p>
        </div>
        <div className="bg-gradient-to-br from-purple-200 to-purple-400 p-6 rounded-lg shadow-md max-w-xs transform transition-transform hover:-translate-y-2">
          <img src="/images/community1.png" alt="Community" className="w-24 h-24 mx-auto mb-4 object-contain" />
          <Link to="/donate" className="block bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-full mb-2">
            Build a Community
          </Link>
          <p className="text-sm">Join hands with people making a real difference.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-pink-200 py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">What People Say</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="mb-2">"This platform changed my perspective on menstrual health. I'm more informed than ever!"</p>
            <h4 className="font-semibold">- Priya Sharma</h4>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="mb-2">"Together for Her helped me find a community that truly cares about women's safety."</p>
            <h4 className="font-semibold">- Ananya Verma</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-400 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-pink-100">Get Involved</h2>
        <p className="mb-6">Support our mission by donating or volunteering today.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link to="/donate" className="bg-pink-100 text-pink-800 border border-pink-400 px-6 py-2 rounded-full hover:bg-pink-200">
            Donate
          </Link>
          <Link to="/volunteer" className="bg-pink-100 text-pink-800 border border-pink-400 px-6 py-2 rounded-full hover:bg-pink-200">
            Volunteer
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gradient-to-br from-pink-300 to-pink-100 py-12 px-4 text-center rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-pink-800 uppercase mb-6">Our Supporters</h2>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <img src="/images/partener1.jpg" alt="Partner 1" className="w-28 h-auto rounded-md hover:scale-110 transition-transform shadow" />
          <img src="/images/partener2.jpg" alt="Partner 2" className="w-28 h-auto rounded-md hover:scale-110 transition-transform shadow" />
          <img src="/images/partener3.jpg" alt="Partner 3" className="w-28 h-auto rounded-md hover:scale-110 transition-transform shadow" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-300 text-white text-center py-6 px-4 text-sm mt-8">
        <p>&copy; 2024 Together for Her. All rights reserved.</p>
        <div className="my-2">
          <Link to="/privacy" className="mx-2 hover:underline text-pink-100">Privacy Policy</Link>
          <Link to="/contact" className="mx-2 hover:underline text-pink-100">Contact</Link>
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-pink-100"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-pink-100"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-pink-100"><i className="fab fa-twitter"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
