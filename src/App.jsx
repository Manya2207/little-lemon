import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import TermsAndConditions from "./components/TermsAndConditions";
import OnlineMenu from "./components/OnlineMenu";
import "./App.css";
import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="app-container grid grid-rows-[auto_1fr_auto] min-h-screen min-w-screen gap-12">
      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <main className="main-content h-full px-4 py-12 space-y-6 flex flex-col items-center justify-center bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Booking" element={<BookingPage />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/OnlineMenu" element={<OnlineMenu />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer bg-green-900 flex flex-row justify-around items-center p-6 mt-10 text-white">
        {/* Logo and Description */}
        <div className="footer-section w-1/3 flex flex-col items-center gap-3 text-center">
          <img
            src={Logo}
            alt="Little Lemon Logo"
            className="footer-logo w-[50%]"
          />
          <p className="footer-description">
            We are a family-owned Mediterranean restaurant <br />
            focused on traditional recipes served <br />
            with a modern twist.
          </p>
        </div>

        {/* Location and Rights */}
        <div className="footer-section w-1/3 flex flex-col items-center gap-3 text-center">
          <h2 className="footer-location">Location: Munich</h2>
          <p className="footer-rights">&copy; 2025 All rights reserved</p>
        </div>

        {/* Contact Information */}
        <div className="footer-section w-1/3 flex flex-col items-center gap-2 text-center">
          <p className="footer-contact-title">Contact us:</p>
          <p className="footer-phone">+1 234 567 890</p>
          <p className="footer-email">
            <a
              href="mailto:support@example.com"
              className="footer-email-link"
              aria-label="Send an email to support@example.com"
            >
              support@example.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
