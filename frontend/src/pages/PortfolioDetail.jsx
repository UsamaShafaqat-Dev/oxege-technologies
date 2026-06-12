import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PortfolioDetail = () => {
  // URL se ID nikalne ke liye useParams ka istemal
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Live database se single project fetch karna
  useEffect(() => {
    const fetchSingleProject = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/portfolio/${id}`,
        );
        // Backend { success: true, data: project } return karta hai
        setProject(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching project details:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchSingleProject();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#00A8A8]/20 border-t-[#00A8A8] rounded-full animate-spin mb-4"></div>
        <p className="text-[#64748B] font-medium animate-pulse">
          Loading project details...
        </p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
          Project Not Found
        </h2>
        <Link
          to="/portfolio"
          className="text-[#00A8A8] hover:underline font-bold"
        >
          Go back to Portfolio
        </Link>
      </div>
    );
  }

  // Tech stack string ("React, Node, MongoDB") ko array mein convert karna tags ke liye
  const techArray = project.techStack
    ? project.techStack.split(",").map((tech) => tech.trim())
    : [];

  // Timestamp ko readable date mein convert karna
  const projectDate = new Date(project.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="bg-[#FAFAFA] font-sans min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#00A8A8] font-semibold mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-bold tracking-wide mb-4 border border-[#00A8A8]/20">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Main Project Image */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-16 border border-gray-100 bg-white">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto max-h-[600px] object-contain"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/1200x600?text=Image+Not+Found";
            }}
          />
        </div>

        {/* Project Details Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Content */}
          <div className="lg:w-2/3 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                Project Overview
              </h3>
              <p className="text-lg text-[#64748B] leading-relaxed font-medium">
                This project represents our commitment to delivering
                high-quality, modern solutions. Built with a focus on
                performance, scalability, and an excellent user experience, it
                showcases our expertise in the{" "}
                <strong>{project.category}</strong> domain.
              </p>
            </div>

            {/* Kyunke DB me overview/challenge alag nahi hain, hum thora generic text aur Tech Stack use kar rahay hain */}
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                Development Approach
              </h3>
              <p className="text-lg text-[#64748B] leading-relaxed font-medium">
                We utilized a modern technology stack including{" "}
                <strong>{project.techStack}</strong> to ensure the application
                is fast, secure, and easily maintainable. The architecture was
                designed to handle future growth seamlessly.
              </p>
            </div>
          </div>

          {/* Right Column: Project Info & Tech Stack */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 space-y-8">
              {/* Info Items */}
              <div>
                <p className="text-[#64748B] text-sm font-bold uppercase tracking-wider mb-1">
                  Added On
                </p>
                <p className="text-[#0F172A] font-bold text-lg">
                  {projectDate}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div>
                <p className="text-[#64748B] text-sm font-bold uppercase tracking-wider mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {techArray.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#FAFAFA] border border-gray-200 text-[#0F172A] text-sm font-semibold rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Link Button */}
              <div className="pt-4">
                {project.liveLink ? (
                  <a
                    href={
                      project.liveLink.startsWith("http")
                        ? project.liveLink
                        : `https://${project.liveLink}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#00A8A8] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#008c8c] transition-all duration-300 shadow-[0_4px_14px_rgba(0,168,168,0.25)] hover:-translate-y-1"
                  >
                    View Live Project
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 w-full bg-gray-200 text-gray-500 font-bold text-lg px-8 py-4 rounded-xl cursor-not-allowed"
                  >
                    Link Unavailable
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
