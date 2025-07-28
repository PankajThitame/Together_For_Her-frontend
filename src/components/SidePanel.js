import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser, FaDonate, FaHandsHelping, FaStore,
  FaComments, FaClipboardList, FaChartBar, FaUsers
} from "react-icons/fa";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [role] = useState("user"); // or 'admin'

  return (
    <aside
      className={`fixed top-[60px] left-0 h-[calc(100vh-60px)] bg-gradient-to-br from-pink-500 to-yellow-300 p-4 overflow-y-auto transition-all duration-300 z-40 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white mb-4 block"
      >
        {isOpen ? "⬅" : "➡"}
      </button>

      <ul className="space-y-4">
        <li>
          <Link to="/awareness" className="flex items-center text-white hover:bg-white/20 rounded-md p-2">
            <FaUser className="mr-3" /> {isOpen && "Awareness"}
          </Link>
        </li>
        <li>
          <Link to="/donate" className="flex items-center text-white hover:bg-white/20 rounded-md p-2">
            <FaDonate className="mr-3" /> {isOpen && "Donate"}
          </Link>
        </li>
        <li>
          <Link to="/volunteer" className="flex items-center text-white hover:bg-white/20 rounded-md p-2">
            <FaHandsHelping className="mr-3" /> {isOpen && "Volunteer"}
          </Link>
        </li>
        <li>
          <Link to="/marketplace" className="flex items-center text-white hover:bg-white/20 rounded-md p-2">
            <FaStore className="mr-3" /> {isOpen && "Marketplace"}
          </Link>
        </li>
        <li>
          <Link to="/community" className="flex items-center text-white hover:bg-white/20 rounded-md p-2">
            <FaComments className="mr-3" /> {isOpen && "Community"}
          </Link>
        </li>
        <li>
          <Link to="/request-kit" className="flex items-center text-white hover:bg-white/20 rounded-md p-2">
            <FaClipboardList className="mr-3" /> {isOpen && "Request Kit"}
          </Link>
        </li>

        {role === "admin" && (
          <>
            <li>
              <Link to="/admin/dashboard" className="flex items-center text-white hover:bg-white/20 rounded-md p-2">
                <FaChartBar className="mr-3" /> {isOpen && "Dashboard"}
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="flex items-center text-white hover:bg-white/20 rounded-md p-2">
                <FaUsers className="mr-3" /> {isOpen && "Users"}
              </Link>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default SidePanel;
