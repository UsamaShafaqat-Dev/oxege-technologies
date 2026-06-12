import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Hero />

      <AboutSection />

      <TeamSection />

      <ServicesSection />

      {/* Portfolio yahan se hata diya gaya hai */}

      <Testimonials />

      <CtaSection />
    </div>
  );
};

export default Home;
