import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

// Images imports
import ceoImage from "../assets/ceo.jpeg";
import usamaImage from "../assets/usama.jpg";
import mariyamImage from "../assets/mariyam.png";
import nimraImage from "../assets/nimra.png";
import ahtashamImage from "../assets/ahtasham.png";
import laibaImage from "../assets/laiba.jpeg";
import sumairaImage from "../assets/sumaira.png";
import ramshaImage from "../assets/ramsha.png";
import irumImage from "../assets/irum.png";
import sairaImage from "../assets/saira.png";
import sadiaImage from "../assets/sadia.png";
import uroojImage from "../assets/urooj.png";
import talhaImage from "../assets/talha.png";
import abdullahImage from "../assets/abdullah.png";
import mudassirImage from "../assets/mudassir.png";
import zainImage from "../assets/zain.png";
import anasImage from "../assets/anas.png";

const TeamSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const teamMembers = [
    // --- TOP MANAGEMENT ---
    {
      id: 1,
      name: "Rimsha Khan",
      role: "CEO & Founder",
      image: ceoImage,
      customPosition: "object-top",
    },
    {
      id: 2,
      name: "Ahtasham Jatoi",
      role: "Managing Director",
      image: ahtashamImage,
      customPosition: "object-top",
    },
    {
      id: 3,
      name: "Laiba",
      role: "Senior Head of Department",
      image: laibaImage,
      customPosition: "object-top",
    },

    // --- FINANCE & HR ---
    {
      id: 4,
      name: "Sumaira",
      role: "Finance Officer",
      image: sumairaImage,
      customPosition: "object-top",
    },
    {
      id: 5,
      name: "Maryam Liaquat",
      role: "HR Oxege Technologies",
      image: mariyamImage,
      customPosition: "object-top",
    },
    {
      id: 6,
      name: "Urooj Nadeem",
      role: "HR & ADMIN MANAGER",
      image: uroojImage,
      customPosition: "object-top",
    },

    // --- TECH & DEVELOPMENT (Usama & Urooj kept together) ---
    {
      id: 7,
      name: "Usama Shafaqat",
      role: "FULL STACK DEVELOPER",
      image: usamaImage,
      customPosition: "object-center",
    },
    {
      id: 8,
      name: "Irum Abid",
      role: "App Developer",
      image: irumImage,
      customPosition: "object-top",
    },
    {
      id: 9,
      name: "Muhammad Ahmed Talha",
      role: "Cyber Security Specialist",
      image: talhaImage,
      customPosition: "object-center",
    },
    {
      id: 10,
      name: "Sadia Waseem",
      role: "Ai Trainer",
      image: sadiaImage,
      customPosition: "object-[50%_30%]",
    },

    // --- MARKETING & SEO ---
    {
      id: 11,
      name: "Ramsha Safdar",
      role: "Marketing Head",
      image: ramshaImage,
      customPosition: "object-top",
    },
    {
      id: 12,
      name: "Abdullah Jameel",
      role: "Designer & Marketing Manager",
      image: abdullahImage,
      customPosition: "object-center",
    },
    {
      id: 13,
      name: "Muhammad Anas",
      role: "SEO & CONTENT SPECIALIST",
      image: anasImage,
      customPosition: "object-top",
    },

    // --- MEDIA, SOCIAL & LEADS ---
    {
      id: 14,
      name: "Muhammad Zain",
      role: "Social media manager",
      image: zainImage,
      customPosition: "object-top",
    },
    {
      id: 15,
      name: "Saira Chaudhary",
      role: "Leads Generation Specialist",
      image: sairaImage,
      customPosition: "object-[50%_30%]",
    },
    {
      id: 16,
      name: "Mudassir Ali",
      role: "Youtube Automation",
      image: mudassirImage,
      customPosition: "object-top",
    },
    {
      id: 17,
      name: "Nimra Asghar",
      role: "Video Editor",
      image: nimraImage,
      customPosition: "object-center",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-[#00A8A8] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#64748B] font-medium leading-relaxed">
            We are a team of creative minds and tech enthusiasts delivering
            powerful digital solutions.
          </p>
        </div>

        {isHomePage ? (
          /* ========================================= */
          /* HOME PAGE SLIDER (Premium Look)           */
          /* ========================================= */
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-20 pt-4 px-4"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className="py-4">
                <div className="bg-white rounded-4xl p-8 mb-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,168,168,0.15)] transition-all duration-300 group flex flex-col items-center mx-2">
                  <div className="relative w-36 h-36 rounded-full p-1 border-2 border-transparent group-hover:border-[#00A8A8] transition-colors duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex justify-center items-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        // Code fix for Swiper clones styling issue
                        className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ${member.customPosition}`}
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-1 group-hover:text-[#00A8A8] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#00A8A8] font-bold tracking-wide uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          /* ========================================= */
          /* ABOUT PAGE GRID (Old Design)              */
          /* ========================================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`bg-white rounded-4xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,168,168,0.15)] transition-all duration-300 group flex flex-col items-center ${
                  index === 16 // Fix for 17 members to center the last one
                    ? "lg:col-start-2 lg:col-span-2 lg:max-w-xs mx-auto w-full"
                    : ""
                }`}
              >
                <div className="mt-8 relative w-36 h-36 rounded-full p-1 border-2 border-transparent group-hover:border-[#00A8A8] transition-colors duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex justify-center items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ${member.customPosition}`}
                    />
                  </div>
                </div>
                <div className="p-6 text-center w-full">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1 group-hover:text-[#00A8A8] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#00A8A8] font-bold tracking-wide mb-6 uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
