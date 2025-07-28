import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthDropdown from "../auth/AuthDropdown";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("user");
  const navigate = useNavigate();

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Login button handler
  const handleLoginClick = (role) => {
    setActiveTab(role);
    navigate(role === "user" ? "/user-login" : "/admin-login");
  };

  return (
    <nav className="bg-pink-300 text-grey-100 mt-1 flex items-center justify-between px-4 py-3 shadow-md relative navbar-expand-lg fixed-top">
      {/* Left section: Logo and Hamburger */}
      <div className="flex items-center gap-4">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-16 rounded-lg hover:scale-105 transition-transform"
        />
        <span className="font-semibold text-xl hidden sm:block">...</span>

        {/* Hamburger */}
        <div
          className="md:hidden text-3xl cursor-pointer ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Nav Menu */}
      <div
        className={`${menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center absolute md:static bg-pink-300 top-full left-0 w-full md:w-auto z-10 md:z-auto md:space-x-6 space-y-4 md:space-y-0 ml-auto md:p-0 transition-all duration-300`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-lg font-medium">
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Contact", to: "/contact" },
            { label: "Feedback", to: "/feedback" },
            { label: "Help", to: "/nearbyhelp" },
          ].map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-300 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <AuthDropdown />
          </li>
        </ul>

        {/* Right Side Section: Login Buttons + Theme Toggle */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 ml-auto">
          <div className="flex gap-3">
            <button
              onClick={() => handleLoginClick("user")}
              className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === "user"
                  ? "bg-white text-pink-600"
                  : "bg-pink-600 hover:bg-pink-700"
                } transition`}
            >
              User Login
            </button>
            <button
              onClick={() => handleLoginClick("admin")}
              className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === "admin"
                  ? "bg-white text-pink-600"
                  : "bg-pink-600 hover:bg-pink-700"
                } transition`}
            >
              Admin Login
            </button>
          </div>

          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
