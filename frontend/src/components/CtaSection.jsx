import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white font-sans relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* ========================================= */}
          {/* LEFT SIDE: Text Content                     */}
          {/* ========================================= */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge: Let's Work Together */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#00A8A8] text-sm font-bold tracking-wide mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z"
                  clipRule="evenodd"
                />
              </svg>
              Let's Work Together
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#041A2F] mb-6 tracking-tight leading-tight">
              Have a Project in Mind?
            </h2>

            {/* Paragraph */}
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We're here to turn your ideas into reality. Let's build something
              amazing together!
            </p>

            {/* Button: Contact Us (Pill Shape) */}
            <Link
              to="/contact"
              className="inline-block bg-[#00A8A8] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#008c8c] transition-all duration-300 shadow-[0_4px_14px_rgba(0,168,168,0.3)] hover:shadow-[0_6px_20px_rgba(0,168,168,0.5)]"
            >
              Contact Us
            </Link>
          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE: Teal/Cyan 3D Rocket           */}
          {/* ========================================= */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-16 lg:mt-0">
            {/* Tailwind filters adjusted to exact Teal/Cyan brand match */}
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png"
              alt="Rocket Launch Illustration"
              className="w-56 sm:w-72 lg:w-80 h-auto relative z-10 animate-[bounce_4s_infinite_ease-in-out] hue-rotate-[190deg] saturate-150 contrast-110"
            />

            {/* Cloud/Smoke Effect at the bottom */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[110%] h-24 bg-gradient-to-t from-white to-transparent blur-lg z-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
