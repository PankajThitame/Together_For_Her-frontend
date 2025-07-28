import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavLinks from "./AdminNavLinks";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  integrity="sha512-Bx3z7JFS+aA6z6AH9pECVbFVEnzCbdQ2wOZFlCZX7pXH1B8pTpi3TZGpZQREWq1bGw1ETcSPU6VaL3wKaAGF0A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

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
    <nav className="bg-pink-300 shadow-md px-2py-2 flex items-center justify-between">
      {/* Logo Section */}
      <div className=" mx-2 flex items-center space-x-6 ">
        <img
          src="/images/logo.png"
          alt="Together_for_Her Admin"
          className="h-12 w-auto hover:scale-150 text-3xl"

        />
       
          <p className="text-xl font-bold text-gray-800 hidden sm:inline">
            <i className="fa-solid fa-user-tie text-3xl hover:scale-105"></i>
          </p>
       
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Admin Links (Desktop + Toggle for Mobile) */}
      <div
        className={`${menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:static md:flex md:items-center md:space-x-6 transition-all duration-300 z-50`}
      >
        <AdminNavLinks setMenuOpen={setMenuOpen} handleLogout={handleLogout} />
      </div>
    </nav>
  );
}

export default AdminNavbar;
