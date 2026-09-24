import React from "react";
import { Link } from "react-router-dom";
import "../Nav.css";
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Little Lemon Logo" className="nav-logo" />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Booking">Booking</Link>
        </li>
        <li>
          <Link to="/OnlineMenu">Online Menu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
