import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Yahan apne logo ka exact naam aur format (.png, .jpg) likhein
import logoImage from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check active path
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ========================================= */}
          {/* NEW LOGO SECTION (Circular & Premium)       */}
          {/* ========================================= */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 group"
            >
              {/* VIP Circular Image Container */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00A8A8] shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-white p-0.5">
                <img
                  src={logoImage}
                  alt="Oxege Technologies Logo"
                  /* Agar logo side se kat raha ho toh 'object-cover' ki jagah 'object-contain' kar lijiye ga */
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className={`${isActive("/") ? "text-[#00A8A8] font-bold" : "text-[#64748B] font-semibold"} hover:text-[#00A8A8] transition-colors duration-300 text-sm`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive("/about") ? "text-[#00A8A8] font-bold" : "text-[#64748B] font-semibold"} hover:text-[#00A8A8] transition-colors duration-300 text-sm`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`${isActive("/services") ? "text-[#00A8A8] font-bold" : "text-[#64748B] font-semibold"} hover:text-[#00A8A8] transition-colors duration-300 text-sm`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`${isActive("/portfolio") ? "text-[#00A8A8] font-bold" : "text-[#64748B] font-semibold"} hover:text-[#00A8A8] transition-colors duration-300 text-sm`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`${isActive("/contact") ? "text-[#00A8A8] font-bold" : "text-[#64748B] font-semibold"} hover:text-[#00A8A8] transition-colors duration-300 text-sm`}
            >
              Contact
            </Link>
          </div>

          {/* Action Buttons (Admin & CTA - Desktop) */}
          <div className="hidden md:flex items-center space-x-5">
            {/* VIP Admin Button with Lock Icon */}
            <Link
              to="/admin"
              className="flex items-center gap-1.5 text-[#64748B] hover:text-[#00A8A8] font-bold text-sm transition-colors duration-300 group"
              title="Admin Portal"
            >
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-[#00A8A8] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Admin
            </Link>

            <Link
              to="/contact"
              className="bg-[#00A8A8] text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-[#008c8c] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0F172A] hover:text-[#00A8A8] focus:outline-none transition duration-300 bg-gray-50 p-2.5 rounded-xl"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SMOOTH DROP-DOWN MOBILE MENU              */}
      {/* ========================================= */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-2 flex flex-col">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl transition-all duration-300 ${isActive("/") ? "bg-[#00A8A8]/10 text-[#00A8A8] font-bold" : "text-gray-600 font-medium hover:bg-gray-50 hover:text-[#00A8A8]"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl transition-all duration-300 ${isActive("/about") ? "bg-[#00A8A8]/10 text-[#00A8A8] font-bold" : "text-gray-600 font-medium hover:bg-gray-50 hover:text-[#00A8A8]"}`}
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl transition-all duration-300 ${isActive("/services") ? "bg-[#00A8A8]/10 text-[#00A8A8] font-bold" : "text-gray-600 font-medium hover:bg-gray-50 hover:text-[#00A8A8]"}`}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl transition-all duration-300 ${isActive("/portfolio") ? "bg-[#00A8A8]/10 text-[#00A8A8] font-bold" : "text-gray-600 font-medium hover:bg-gray-50 hover:text-[#00A8A8]"}`}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl transition-all duration-300 ${isActive("/contact") ? "bg-[#00A8A8]/10 text-[#00A8A8] font-bold" : "text-gray-600 font-medium hover:bg-gray-50 hover:text-[#00A8A8]"}`}
          >
            Contact
          </Link>

          {/* Admin & CTA Area for Mobile */}
          <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-slate-50 text-slate-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 hover:text-[#00A8A8] transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Admin Portal
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#00A8A8] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#008c8c] transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
