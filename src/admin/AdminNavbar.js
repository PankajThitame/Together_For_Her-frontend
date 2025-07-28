import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavLinks from "./AdminNavLinks";

function AdminNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-pink-600 text-white px-6 py-3 flex items-center justify-between shadow-md relative">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/images/logo.png" alt="Together_for_Her Admin" className="h-10 w-auto" />
        <h1 className="text-xl font-bold">Together_for_Her</h1>
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute top-full left-0 w-full bg-pink-500 md:static md:w-auto md:flex transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <AdminNavLinks setMenuOpen={setMenuOpen} handleLogout={handleLogout} />
      </div>
    </nav>
  );
}

export default AdminNavbar;
