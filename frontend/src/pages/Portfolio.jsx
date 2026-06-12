import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Database se live portfolio fetch karne ke liye
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/portfolio");
        setProjects(data.data);
      } catch (error) {
        console.error("Error fetching portfolio projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Tabs ko automatically database ki categories ke hisaab se generate karna
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-bold tracking-wide mb-4 border border-[#00A8A8]/20">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
              Our Portfolio
            </h2>
            <p className="text-[#64748B] font-medium text-lg">
              Explore some of our recent projects that showcase our skills and
              expertise.
            </p>
          </div>
        </div>

        {/* Dynamic Tabs based on actual data */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#00A8A8] text-white shadow-md"
                  : "bg-white text-[#64748B] border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID / LOADING STATE */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#00A8A8]/20 border-t-[#00A8A8] rounded-full animate-spin mb-4"></div>
            <p className="text-[#64748B] font-medium animate-pulse">
              Fetching live projects...
            </p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
              No Projects Found
            </h3>
            <p className="text-[#64748B]">
              Our portfolio is currently being updated. Please check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative"
              >
                {/* Live Preview Badge on Image (AB YEH EXTERNAL LINK HAI) */}
                {project.liveLink && (
                  <a
                    href={
                      project.liveLink.startsWith("http")
                        ? project.liveLink
                        : `https://${project.liveLink}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()} // YEH MAIN CHEEZ HAI!
                    className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-[#0F172A] hover:bg-[#00A8A8] hover:text-white text-xs font-bold px-4 py-2 rounded-full shadow-md transition-colors duration-300 cursor-pointer"
                  >
                    Live Preview
                  </a>
                )}

                {/* Baqi Pura Card clickable hai (Details page par jane ke liye) */}
                <Link
                  to={`/portfolio/${project._id}`}
                  className="flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-50">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/800x600?text=Image+Not+Found";
                      }}
                    />
                  </div>

                  {/* Details Section Below Image */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[#00A8A8] text-xs font-extrabold uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#00A8A8] transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* More Details Action */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-[#00A8A8] font-bold text-sm">
                      More Details
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
