import React from "react";
import aboutImage1 from "../assets/image1.png";
import aboutImage2 from "../assets/image2.png";
import aboutImage3 from "../assets/image3.png";
import aboutImage4 from "../assets/image4.png";
import ceoImage from "../assets/ceo.jpeg";
import TeamSection from "../components/TeamSection"; // Team section import kar liya

const AboutPage = () => {
  const values = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "To empower businesses by delivering innovative and high-quality digital solutions that drive growth and success.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "To be a global leader in technology services, known for our creativity, integrity, and commitment to excellence.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Our Values",
      description:
        "Innovation, Customer Satisfaction, Transparency, and continuous improvement are the core pillars of our work.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* SECTION 1: Top Details with fixed images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-bold tracking-wide mb-6 border border-[#00A8A8]/20">
              Who We Are
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-8 leading-tight">
              About <span className="text-[#00A8A8]">Oxege Technologies</span>
            </h1>
            <p className="text-lg text-[#64748B] font-medium leading-relaxed mb-6">
              Oxege Technologies is a leading software development agency based
              in Islamabad, Pakistan. We specialize in creating high-performance
              web applications, modern UI/UX designs, and scalable digital
              solutions.
            </p>
            <p className="text-lg text-[#64748B] font-medium leading-relaxed">
              Our team consists of passionate developers and creative designers
              who are dedicated to helping businesses transform their ideas into
              reality through cutting-edge technology.
            </p>
          </div>

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
                src={aboutImage3}
                alt="Meeting"
                className="rounded-3xl w-full h-64 object-cover shadow-lg transform rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CEO Intro (New Section) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-[#FAFAFA] rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            <div className="md:w-1/3 shrink-0 relative">
              <div className="absolute inset-0 bg-[#00A8A8] rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
              <img
                src={ceoImage}
                alt="Rimsha Khan - CEO"
                className="relative rounded-3xl w-full h-120 object-cover shadow-md z-10"
              />
            </div>
            <div className="md:w-2/3">
              <svg
                className="w-12 h-12 text-[#00A8A8]/20 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4 leading-snug">
                "We started Oxege Technologies with a simple goal: to build
                digital solutions that actually make a difference."
              </h3>
              <p className="text-[#64748B] text-lg mb-6 leading-relaxed font-medium">
                In today's fast-paced digital world, having a strong online
                presence isn't just an option; it's a necessity. Our team is
                dedicated to providing cutting-edge technologies, exceptional
                design, and robust development to help our clients thrive in the
                digital landscape.
              </p>
              <div>
                <h4 className="text-xl font-bold text-[#0F172A]">
                  Rimsha Khan
                </h4>
                <p className="text-[#00A8A8] font-bold mt-1 tracking-wide">
                  CEO & Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Mission, Vision, Values Cards */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((item) => (
              <div
                key={item.id}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-2 transition-all duration-300 group text-center"
              >
                <div className="w-20 h-20 bg-[#00A8A8]/10 text-[#00A8A8] rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#00A8A8] group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Team Section */}
      <div className="bg-white">
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutPage;
