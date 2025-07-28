import React from "react";
import { Link } from "react-router-dom";

const Empowerment = () => {
  return (
    <div className="font-sans text-gray-800 text-center px-4 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-16 rounded-xl shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold">Empowering Women, Together</h1>
        <p className="text-lg md:text-xl mt-4">Join us in creating a world where women feel safe, healthy, and empowered.</p>
        <Link to="/donate" className="mt-6 inline-block bg-white text-pink-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">Support Our Mission</Link>
      </section>

      {/* Why Empowerment */}
      <section className="bg-pink-100 mt-12 p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Why Women's Empowerment Matters</h2>
        <p className="mb-6">Millions of women face challenges in education, health, and safety. Together, we can bring change.</p>
        <div className="flex flex-col md:flex-row justify-around gap-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-pink-600">1 in 3</h3>
            <p>Women experience gender-based violence</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-pink-600">500M+</h3>
            <p>Lack proper menstrual hygiene resources</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-pink-600">Only 24%</h3>
            <p>Of leadership positions worldwide are held by women</p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-pink-50 mt-12 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-pink-700 mb-6">Our Key Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/images/menstrual health.jpg" alt="Menstrual Health" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="font-semibold text-lg">Menstrual Health</h3>
            <p>Breaking myths and spreading awareness about menstrual hygiene.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/images/safetyandsupport.jpg" alt="Safety and Support" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="font-semibold text-lg">Safety & Support</h3>
            <p>Providing resources and support for women’s safety.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/images/leadership.jpg" alt="Education and Leadership" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="font-semibold text-lg">Education & Leadership</h3>
            <p>Empowering women through education and career support.</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-pink-400 text-white mt-12 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
        <div className="space-y-6">
          <div>
            <p>"I started my own business after joining this initiative. It changed my life!"</p>
            <h4 className="mt-2 font-semibold">- Priya Sharma</h4>
          </div>
          <div>
            <p>"Together for Her gave me confidence and support when I needed it the most."</p>
            <h4 className="mt-2 font-semibold">- Ananya Verma</h4>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="bg-yellow-200 mt-12 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">How You Can Help</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/volunteer" className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition">Become a Volunteer</Link>
          <Link to="/donate" className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition">Donate Now</Link>
          <Link to="/community" className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition">Join Our Community</Link>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-gray-200 mt-12 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Resources & Helplines</h2>
        <ul className="text-left list-disc list-inside">
          <li><strong>Women’s Helpline:</strong> 1091</li>
          <li><strong>Domestic Violence Helpline:</strong> 181</li>
          <li><strong>Legal Aid:</strong> www.legalaidwomen.org</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-12 p-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">What is menstrual hygiene awareness?</summary>
          <p className="mt-2 text-sm">It includes education on menstrual health, proper hygiene, and breaking myths.</p>
        </details>
        <details>
          <summary className="cursor-pointer font-semibold">How can I volunteer?</summary>
          <p className="mt-2 text-sm">You can join our mission by signing up on the Volunteer page.</p>
        </details>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 rounded-xl mt-12">
        <p>Follow us on social media for updates:</p>
        <div className="mt-2 flex justify-center gap-4 text-lg">
          <a href="#" className="hover:text-pink-400"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-pink-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-pink-400"><i className="fab fa-twitter"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default Empowerment;