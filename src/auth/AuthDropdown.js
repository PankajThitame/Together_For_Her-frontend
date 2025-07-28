import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import {
  ChevronDown,
  User,
  LogOut,
  LogIn,
  UserPlus,
  Sun,
  Moon,
} from "lucide-react";

const AuthDropdown = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 focus:outline-none"
        onClick={toggleDropdown}
      >
        {user ? (
          <img
            src={user.profilePic || "/images/pads.png"}
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover mr-1"
          />
        ) : (
          <User className="ml-1" />
        )}
        <ChevronDown className="ml-1" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 bg-purple-800/95 text-white dark:bg-gray-800 rounded-xl shadow-lg z-50 w-48 overflow-hidden">
          {user ? (
            <>
              <div className="flex items-center gap-3 p-3 border-b border-red-700">
                <img
                  src={user.profilePic || "/images/pads.png"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-sm">
                  <p className="font-medium">{user.username}</p>
                  <p className="text-xs opacity-75">{user.email}</p>
                </div>
              </div>

              <Link
                to="/userprofile"
                className="flex items-center gap-2 px-5 py-3 hover:bg-red-400/80 transition"
              >
                <User className="w-4 h-4" />
                Profile
              </Link>

              <button
                className="flex items-center gap-2 px-5 py-3 hover:bg-red-400/80 transition w-full text-left"
                onClick={toggleTheme}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>

              <button
                className="flex items-center gap-2 px-5 py-3 hover:bg-red-400/80 transition w-full text-left"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 px-5 py-3 hover:bg-red-400/80 transition"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                to="/sign-up"
                className="flex items-center gap-2 px-5 py-3 hover:bg-red-400/80 transition"
              >
                <UserPlus className="w-4 h-4" />
                Sign Up
              </Link>
              <button
                className="flex items-center gap-2 px-5 py-3 hover:bg-red-400/80 transition w-full text-left"
                onClick={toggleTheme}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthDropdown;
