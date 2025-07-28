import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import AuthDropdown from "../auth/AuthDropdown";

const AdminNavLinks = ({ setMenuOpen, handleLogout }) => {
  return (
    <ul className="flex flex-col sm:flex-row sm:items-center px-4 pt-4 sm:pt-5 list-none text-white text-base">
      <li className="mx-4 my-2 sm:my-0">
        <Link to="/admin/dashboard" onClick={() => setMenuOpen(false)} className="hover:underline">Dashboard</Link>
      </li>
      <li className="mx-4 my-2 sm:my-0">
        <Link to="/admin/users" onClick={() => setMenuOpen(false)} className="hover:underline">User Management</Link>
      </li>
      <li className="mx-4 my-2 sm:my-0">
        <Link to="/admin/requests" onClick={() => setMenuOpen(false)} className="hover:underline">Request Management</Link>
      </li>
      <li className="mx-4 my-2 sm:my-0">
        <Link to="/admin/analytics" onClick={() => setMenuOpen(false)} className="hover:underline">Analytics</Link>
      </li>
      <li className="mx-4 my-2 sm:my-0">
        <Link to="/admin/add-product" onClick={() => setMenuOpen(false)} className="hover:underline">Add Product</Link>
      </li>
      <li className="mx-4 my-2 sm:my-0">
        <AuthDropdown />
      </li>
    </ul>
  );
};

export default AdminNavLinks;
