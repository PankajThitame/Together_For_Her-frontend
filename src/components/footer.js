import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Section 1: Logo or Project Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Together for Her</h2>
          <p className="text-sm">
            Empowering women with access to hygiene, safety, and support.  
            A social initiative for awareness and care.
          </p>
        </div>

        {/* Section 2: Quick Links */} 
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
            <li><a href="/donate" className="hover:underline">Donate</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center text-sm mb-1">
            <MapPin className="w-4 h-4 mr-2" /> Pune, Maharashtra
          </p>
          <p className="flex items-center text-sm mb-1">
            <Mail className="w-4 h-4 mr-2" /> support@togetherforher.org
          </p>
          <p className="flex items-center text-sm">
            <Phone className="w-4 h-4 mr-2" /> +91 98765 43210
          </p>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="text-center text-xs mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Together for Her. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
