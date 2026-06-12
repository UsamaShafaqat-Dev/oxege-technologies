import React, { useState, useEffect } from "react";
import aboutImage2 from "../assets/image2.png";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Database se live services fetch karne ke liye useEffect
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get("https://oxege-backend.onrender.com/api/services");
        setServices(data);
      } catch (error) {
        console.error("Error fetching live services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* ========================================= */}
      {/* TOP HERO SECTION (Split Layout)             */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-bold tracking-wide mb-6 border border-[#00A8A8]/20">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            Services
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight mb-6 leading-tight">
            Our <span className="text-[#00A8A8]">Services</span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-[#64748B] font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            We offer a wide range of services to help your business grow.
            Comprehensive digital solutions engineered for performance,
            security, and scalability.
          </p>
        </div>

        {/* Right Side: High-Tech Dashboard Image */}
        <div className="lg:w-1/2 w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,168,168,0.2)] border border-gray-100">
            <img
              src={aboutImage2}
              alt="High-Tech Dashboard Interface"
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020A12]/80 to-[#00A8A8]/30 pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* DYNAMIC SERVICES GRID SECTION               */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {loading ? (
          // Loading State
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#00A8A8]/20 border-t-[#00A8A8] rounded-full animate-spin mb-4"></div>
            <p className="text-[#64748B] font-medium animate-pulse">
              Fetching live services...
            </p>
          </div>
        ) : services.length === 0 ? (
          // Empty State
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
              No Services Yet
            </h3>
            <p className="text-[#64748B]">
              Our services are currently being updated. Please check back later!
            </p>
          </div>
        ) : (
          // Live Data Render
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,168,168,0.1)] transition-all duration-300 group flex flex-col"
              >
                {/* 1. KEY FIX: w-full aspect-[4/3] lagaya hai taake photo proportionate rahay aur kam kate */}
                <div className="w-full aspect-[4/3] bg-gray-50 relative overflow-hidden">
                  <img
                    src={service.image?.url}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/800x600?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-[#00A8A8]/0 group-hover:bg-[#00A8A8]/10 transition-colors duration-300 pointer-events-none"></div>
                </div>

                {/* Text Content */}
                <div className="p-8 flex-grow flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#00A8A8] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed font-medium line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
