import React from "react";
import aboutImage1 from "../assets/image1.png";
import aboutImage2 from "../assets/image2.png";
import aboutImage3 from "../assets/image3.png";
import aboutImage4 from "../assets/image4.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 font-sans bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-bold tracking-wide mb-6 border border-[#00A8A8]/20">
            Who We Are
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-8 leading-tight">
            About <span className="text-[#00A8A8]">Oxege Technologies</span>
          </h2>
          <p className="text-lg text-[#64748B] font-medium leading-relaxed mb-6">
            Oxege Technologies is a leading software development agency based in
            Islamabad, Pakistan. We specialize in creating high-performance web
            applications, modern UI/UX designs, and scalable digital solutions.
          </p>
          <p className="text-lg text-[#64748B] font-medium leading-relaxed mb-8">
            Our team consists of passionate developers and creative designers
            who are dedicated to helping businesses transform their ideas into
            reality through cutting-edge technology.
          </p>
          <Link
            to="/about"
            className="inline-block bg-[#00A8A8] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#008c8c] transition-all duration-300 shadow-[0_4px_14px_rgba(0,168,168,0.3)]"
          >
            Learn More
          </Link>
        </div>

        {/* Right Side: Image Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src={aboutImage1}
              alt="Team Work"
              className="rounded-3xl w-full h-64 object-cover shadow-lg transform -rotate-2"
            />
            <img
              src={aboutImage2}
              alt="Office Discussion"
              className="rounded-3xl w-full h-48 object-cover shadow-lg"
            />
          </div>
          <div className="pt-8 space-y-4">
            <img
              src={aboutImage3}
              alt="Workspace"
              className="rounded-3xl w-full h-48 object-cover shadow-lg"
            />
            <img
              src={aboutImage4}
              alt="Meeting"
              className="rounded-3xl w-full h-64 object-cover shadow-lg transform rotate-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
