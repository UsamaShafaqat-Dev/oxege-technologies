import React from "react";
import { Link } from "react-router-dom";

// Logo import kiya hai (apna logo check kar lena agar .jpg ho toh yahan change kar lena)
import logoImage from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#001E26] text-gray-300 font-sans border-t-4 border-[#00A8A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* MOBILE CENTER FIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* ========================================= */}
          {/* COLUMN 1: Brand & About                     */}
          {/* ========================================= */}
          <div className="flex flex-col items-center md:items-start">
            {/* ========================================= */}
            {/* LOGO SECTION (Naya Logo Lagaya Hai)         */}
            {/* ========================================= */}
            <Link
              to="/"
              className="flex items-center gap-2 mb-6 group inline-flex"
            >
              {/* VIP Circular Image Container Footer ke liye */}
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#00A8A8]/50 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-white p-0.5">
                <img
                  src={logoImage}
                  alt="Oxege Technologies Logo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-xl font-extrabold text-white leading-none tracking-wide text-left">
                  OXEGE
                </span>
                <span className="text-[0.55rem] text-[#00A8A8] font-bold tracking-[0.25em] mt-0.5 text-left">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium max-w-xs mx-auto md:mx-0">
              We build innovative digital solutions that help businesses grow
              and succeed in the digital world.
            </p>

            {/* Social Icons (Centered on mobile) */}
            <div className="flex justify-center md:justify-start gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/oxegetechnologiess/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#00A8A8] hover:border-[#00A8A8] transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#00A8A8] hover:border-[#00A8A8] transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/oxege-technologies/?originalSubdomain=pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#00A8A8] hover:border-[#00A8A8] transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/oxege_technologies_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#00A8A8] hover:border-[#00A8A8] transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ========================================= */}
          {/* COLUMN 2: Quick Links                       */}
          {/* ========================================= */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#00A8A8] text-sm font-medium transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#00A8A8] text-sm font-medium transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#00A8A8] text-sm font-medium transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-[#00A8A8] text-sm font-medium transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#00A8A8] text-sm font-medium transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ========================================= */}
          {/* COLUMN 3: Services                          */}
          {/* ========================================= */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#00A8A8] text-sm font-medium transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#00A8A8] text-sm font-medium transition-colors duration-300"
                >
                  MERN Stack Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#00A8A8] text-sm font-medium transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#00A8A8] text-sm font-medium transition-colors duration-300"
                >
                  Digital Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* ========================================= */}
          {/* COLUMN 4: Contact Us                        */}
          {/* ========================================= */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-5 flex flex-col items-center md:items-start">
              {/* Phone */}
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <svg
                  className="w-5 h-5 text-[#00A8A8] mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span className="text-gray-400 text-sm font-medium text-center md:text-left">
                  +92 325 3072985
                </span>
              </li>
              {/* Email */}
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <svg
                  className="w-5 h-5 text-[#00A8A8] mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-gray-400 text-sm font-medium text-center md:text-left">
                  oxegetechnologies@gmail.com
                </span>
              </li>
              {/* Address 1: Islamabad */}
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <svg
                  className="w-5 h-5 text-[#00A8A8] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-gray-400 text-sm font-medium text-center md:text-left">
                  FMC Multi Garden, Islamabad
                </span>
              </li>
              {/* Address 2: Rahim Yar Khan */}
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <svg
                  className="w-5 h-5 text-[#00A8A8] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-gray-400 text-sm font-medium text-center md:text-left">
                  Street 18, Babar Colony, Rahim Yar Khan
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM COPYRIGHT BAR */}
      {/* ========================================= */}
      <div className="border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center items-center relative">
          <p className="text-center text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Oxege Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
