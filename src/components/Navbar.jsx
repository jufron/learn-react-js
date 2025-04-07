// Suggested code may be subject to a license. Learn more: ~LicenseLog:2334676112.
import React from 'react';
import { Link, NavLink } from 'react-router';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          My App
        </Link>
        <div>
          <NavLink 
            to="/"
            className={({ isActive }) => (isActive ? "text-green-400" : "text-slate-100") + " transition duration-400 px-3 py-2 rounded-md text-sm font-medium"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => (isActive ? "text-green-400" : "text-slate-100") + " transition duration-400 px-3 py-2 rounded-md text-sm font-medium"}
          >
            About
          </NavLink>
          <NavLink 
            to="/login"
            className={({ isActive }) => (isActive ? "text-green-400" : "text-slate-100") + " transition duration-400 px-3 py-2 rounded-md text-sm font-medium"}
          >
            Login
          </NavLink>
          <NavLink 
            to="/register"
            className={({ isActive }) => (isActive ? "text-green-400" : "text-slate-100") + " transition duration-400 px-3 py-2 rounded-md text-sm font-medium"}
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
