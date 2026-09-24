import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Nav = () => {
  return (
    <nav className="w-full shadow flex flex-row justify-between items-center px-6 py-4">
      {/* Logo */}
      <img src="logo.png" alt="Little Lemon Logo" className="w-[10%] h-auto" />

      {/* Navigation Links - ADDED list-none */}
      <ul className="flex gap-8 text-green-800 list-none m-0 p-0">
        <li>
          <Link
            to="/"
            className="hover:text-green-600 transition-colors no-underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Booking"
            className="hover:text-green-600 transition-colors no-underline"
          >
            Booking
          </Link>
        </li>
        <li>
          <Link
            to="/OnlineMenu"
            className="hover:text-green-600 transition-colors no-underline"
          >
            Online Menu
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
