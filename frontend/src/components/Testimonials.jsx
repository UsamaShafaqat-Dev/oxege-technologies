import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Maine data ko 3 pages (arrays) mein divide kar diya hai
  // Taake har dot par 3 naye clients ke reviews aayen
  const testimonialPages = [
    [
      {
        id: 1,
        review:
          '"Oxege Technologies delivered our project on time with excellent quality. Highly recommended."',
        name: "Ali Raza",
        role: "CEO, TechSolutions",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        review:
          '"Professional team, great communication, and outstanding support throughout."',
        name: "Sara Khan",
        role: "Marketing Head, Brandify",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 3,
        review:
          '"Their MERN stack expertise helped us scale our platform seamlessly."',
        name: "Usman Tariq",
        role: "CTO, Softify",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
      },
    ],
    [
      {
        id: 4,
        review:
          '"Absolutely brilliant service. The frontend architecture and UI is top-notch."',
        name: "Fatima Noor",
        role: "Product Manager, Techify",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      {
        id: 5,
        review:
          '"We saw a 40% increase in performance after they revamped our database structure."',
        name: "Ahmad Hassan",
        role: "Founder, DataSync",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        id: 6,
        review:
          '"Highly responsive web apps and exactly what our users needed. Exceptional work!"',
        name: "Zainab Malik",
        role: "Creative Director, DesignPro",
        image: "https://randomuser.me/api/portraits/women/46.jpg",
      },
    ],
    [
      {
        id: 7,
        review:
          '"Their deployment strategy on Vercel and AWS was flawless. Zero downtime."',
        name: "Bilal Ahmed",
        role: "DevOps Engineer, CloudNet",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
      },
      {
        id: 8,
        review:
          '"We hired them for a custom portal and they delivered way beyond expectations."',
        name: "Ayesha Omer",
        role: "CEO, ShopCart",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 9,
        review:
          '"Great team, clean scalable code, and excellent communication. 10/10 would hire again."',
        name: "Kamran Shah",
        role: "CTO, InnovateTech",
        image: "https://randomuser.me/api/portraits/men/48.jpg",
      },
    ],
  ];

  // Auto-slide effect (Optional: har 5 second baad khud change hoga)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonialPages.length - 1 ? 0 : current + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialPages.length]);

  return (
    <section className="py-20 lg:py-28 bg-[#001E26] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================= */}
        {/* HEADER SECTION                            */}
        {/* ========================================= */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A8A8]/10 border border-[#00A8A8]/30 text-[#00A8A8] text-sm font-bold tracking-wide mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            Testimonials
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* ========================================= */}
        {/* SLIDER CONTAINER                            */}
        {/* ========================================= */}
        <div className="relative">
          {/* Track that slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonialPages.map((page, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Single Card inside the page */}
                  {page.map((client) => (
                    <div
                      key={client.id}
                      className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between"
                    >
                      <div>
                        {/* 5 Stars */}
                        <div className="flex gap-1 mb-6 text-[#00A8A8]">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-600 font-medium leading-relaxed mb-8">
                          {client.review}
                        </p>
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={client.image}
                          alt={client.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                        />
                        <div>
                          <h4 className="text-[#041A2F] font-bold">
                            {client.name}
                          </h4>
                          <p className="text-gray-500 text-xs font-medium">
                            {client.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* FUNCTIONAL DOTS                           */}
        {/* ========================================= */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonialPages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-110"
                  : "bg-gray-500 hover:bg-[#00A8A8]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
