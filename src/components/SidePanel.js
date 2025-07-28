import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers, FaChartPie, FaClipboardList, FaMapMarkedAlt,
  FaHandHoldingUsd, FaChartBar, FaShieldAlt, FaUserCheck, FaComments,
  FaArrowLeft, FaArrowRight
} from "react-icons/fa";

const SidePanel = ({ role = "user" }) => {
  const [isOpen, setIsOpen] = useState(true);

  const commonClasses = "flex items-center p-3 rounded-md text-white hover:bg-white/20 transition";

  const adminItems = [
    { to: "/admin/users", icon: <FaUsers />, label: "User Management" },
    { to: "/admin/requests", icon: <FaClipboardList />, label: "Request Management" },
    { to: "/admin/address-map", icon: <FaMapMarkedAlt />, label: "Address Map" },
    { to: "/admin/fund-management", icon: <FaHandHoldingUsd />, label: "Fund Management" },
    { to: "/admin/content-moderation", icon: <FaShieldAlt />, label: "Content Moderation" },
    { to: "/admin/volunteer-management", icon: <FaUserCheck />, label: "Volunteer Management" },
    { to: "/admin/feedback-system", icon: <FaComments />, label: "Feedback System" },
  ];

  const userItems = [
    { to: "/awareness", icon: <FaChartPie />, label: "Awareness" },
    { to: "/donate", icon: <FaHandHoldingUsd />, label: "Donate" },
    { to: "/volunteer", icon: <FaUserCheck />, label: "Volunteer" },
    { to: "/marketplace", icon: <FaChartBar />, label: "Marketplace" },
    { to: "/community", icon: <FaComments />, label: "Community" },
    { to: "/request-kit", icon: <FaClipboardList />, label: "Request Kit" },
  ];

  const itemsToRender = role === "admin" ? adminItems : userItems;

  return (
    <div className={`side-panel ${isOpen ? "open" : "closed"}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-xl w-full flex justify-end pr-4"
      >
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>

      <ul className="mt-4 space-y-2 px-2">
        {itemsToRender.map(({ to, icon, label }) => (
          <li key={to}>
            <Link to={to} className={commonClasses}>
              <span className="text-lg">{icon}</span>
              {isOpen && <span className="ml-3">{label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanel;
