import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useLocation } from "react-router-dom"; // Yeh auto detect karega konsa page hai
import "swiper/css";
import "swiper/css/pagination";

// Images imports
import ceoImage from "../assets/ceo.jpeg";
import iqraImage from "../assets/iqra.jpeg";
import usamaImage from "../assets/usama.jpg";
import mariyamImage from "../assets/mariyam.png";
import nimraImage from "../assets/nimra.png";
import ahtashamImage from "../assets/ahtasham.jpeg";
import emanImage from "../assets/eman.jpeg";
import umarImage from "../assets/umar.png";
import sumairaImage from "../assets/sumaira.png";

const TeamSection = () => {
  // Page check karne ki trick
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const teamMembers = [
    { id: 1, name: "Rimsha Khan", role: "CEO", image: ceoImage },
    {
      id: 2,
      name: "Ahtasham Jatoi",
      role: "Managing Director",
      image: ahtashamImage,
    },
    {
      id: 3,
      name: "Sumaira",
      role: "Head of Department",
      image: sumairaImage,
      customPosition: "object-top",
    },
    {
      id: 4,
      name: "Maryam Liaquat",
      role: "HR Oxege Technologies",
      image: mariyamImage,
    },
    { id: 5, name: "Eman Fatima", role: "Admin", image: emanImage },
    {
      id: 6,
      name: "Umar",
      role: "Senior App Developer",
      image: umarImage,
      customPosition: "object-top",
    },
    {
      id: 7,
      name: "USAMA MERN-STACK",
      role: "MERN-STACK-DEVELOPER",
      image: usamaImage,
    },
    { id: 8, name: "Iqra Sadiq", role: "Graphic Designer", image: iqraImage },
    { id: 9, name: "Nimra Asghar", role: "Video Editor", image: nimraImage },
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
            /* pb-20 lagaya taake dots neechay jayen aur cards se na takrayein */
            className="pb-20 pt-4 px-4"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className="py-4">
                {/* YAHAN CHANGE KIYA HAI: 'h-full' hata kar 'mb-12' lagaya hai taake neechay dots ke liye jagah ban jaye */}
                <div className="bg-white rounded-[2rem] p-8 mb-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,168,168,0.15)] transition-all duration-300 group flex flex-col items-center mx-2">
                  <div className="relative w-36 h-36 rounded-full p-1 border-2 border-transparent group-hover:border-[#00A8A8] transition-colors duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex justify-center items-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${
                          member.customPosition
                            ? `${member.customPosition} object-cover`
                            : "object-cover"
                        }`}
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
                className={`bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,168,168,0.15)] transition-all duration-300 group flex flex-col items-center ${
                  index === 8
                    ? "lg:col-start-2 lg:col-span-2 lg:max-w-xs mx-auto w-full"
                    : ""
                }`}
              >
                <div className="mt-8 relative w-36 h-36 rounded-full p-1 border-2 border-transparent group-hover:border-[#00A8A8] transition-colors duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex justify-center items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${
                        member.customPosition
                          ? `${member.customPosition} object-cover`
                          : "object-cover"
                      }`}
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
