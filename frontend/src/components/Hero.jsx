import React from "react";
import { Link } from "react-router-dom";

// Yahan apni original full image import karein (jisme lines aur circles hain)
import gtImage from "../assets/images.png";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden py-16 lg:py-20 font-sans bg-white min-h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-white via-white to-gray-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center relative z-10">
        {/* ========================================= */}
        {/* LEFT SIDE: Text Content                     */}
        {/* ========================================= */}
        <div className="lg:w-[50%] text-center lg:text-left pt-6 lg:pt-0 order-2 lg:order-1 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6 shadow-sm bg-[#00A8A8]/10 text-[#00A8A8] border border-[#00A8A8]/20">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            Innovate. Build. Elevate.
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-black tracking-tight mb-5 leading-[1.15] text-[#0F172A]">
            Transforming Ideas <br className="hidden lg:block" />
            Into <span className="text-[#00A8A8]">Digital Reality</span>
          </h1>

          <p className="text-sm lg:text-base mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium text-[#64748B]">
            Oxege Technologies delivers smart, scalable, and future-ready
            digital solutions to empower your business.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              to="/services"
              className="text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-[#00A8A8] hover:bg-[#008c8c] shadow-[0_4px_14px_rgba(0,168,168,0.3)] hover:-translate-y-0.5 text-sm lg:text-base"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="font-semibold px-8 py-3 rounded-full transition-all duration-300 border-2 bg-white text-[#00A8A8] border-[#00A8A8] hover:bg-[#00A8A8]/5 hover:-translate-y-0.5 text-sm lg:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT SIDE: BLENDED GRAPHIC                 */}
        {/* ========================================= */}
        <div className="lg:w-[50%] mt-12 lg:mt-0 flex justify-center lg:justify-end items-end order-1 lg:order-2 w-full relative h-full">
          {/* Main ne yahan end par 'translate-y-[50px]' add kiya hai, baqi sab same hai */}
          <div className="relative w-full max-w-[450px] sm:max-w-[550px] lg:max-w-[700px] flex items-end justify-center lg:translate-x-8 translate-y-[60px]">
            <img
              src={gtImage}
              alt="Oxege GT Design"
              className="w-full h-auto object-contain mix-blend-multiply hover:scale-[1.03] transition-transform duration-700 ease-out"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 50%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 50%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
