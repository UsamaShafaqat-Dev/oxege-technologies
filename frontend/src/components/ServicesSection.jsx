import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Link import kiya gaya hai

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Live database se services fetch karne ke liye
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get("https://oxege-backend.onrender.com/api/services");
        // Home page ke liye sirf latest 4 services uthayenge
        setServices(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching live services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA] font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================= */}
        {/* HEADER SECTION                              */}
        {/* ========================================= */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#00A8A8] text-sm font-bold tracking-wide shadow-sm mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            Services
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
            What We Do
          </h2>

          <p className="text-[#64748B] max-w-2xl mx-auto font-medium text-lg">
            We provide end-to-end digital services to help your business grow
            and succeed.
          </p>
        </div>

        {/* ========================================= */}
        {/* CARDS GRID (4 Columns) / LOADING STATE    */}
        {/* ========================================= */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="w-10 h-10 border-4 border-[#00A8A8]/20 border-t-[#00A8A8] rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-medium animate-pulse">
              Loading services...
            </p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 font-medium">
              Services will be updated soon!
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,168,168,0.1)] transition-all duration-300 group"
                >
                  {/* Image Container */}
                  <div className="h-52 w-full overflow-hidden bg-gray-50">
                    <img
                      src={service.image?.url}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Service";
                      }}
                    />
                  </div>

                  {/* Card Content - Centered with refined typography */}
                  <div className="p-8 flex-grow flex flex-col items-center text-center justify-center">
                    <h3 className="text-[1.35rem] font-extrabold text-[#0F172A] mb-3 group-hover:text-[#00A8A8] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#64748B] text-[15px] leading-relaxed font-medium line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ========================================= */}
            {/* VIEW ALL SERVICES BUTTON                  */}
            {/* ========================================= */}
            <div className="mt-16 flex justify-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#00A8A8] text-[#00A8A8] font-bold text-sm tracking-wide hover:bg-[#00A8A8] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                View All Services
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
