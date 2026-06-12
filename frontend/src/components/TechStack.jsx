import React from "react";

const TechStack = () => {
  const technologies = [
    {
      name: "MongoDB",
      role: "Database",
      color: "border-green-500/50 hover:shadow-green-500/20",
    },
    {
      name: "Express.js",
      role: "Backend Framework",
      color: "border-gray-500/50 hover:shadow-gray-500/20",
    },
    {
      name: "React",
      role: "Frontend Library",
      color: "border-blue-400/50 hover:shadow-blue-400/20",
    },
    {
      name: "Node.js",
      role: "Runtime Environment",
      color: "border-green-400/50 hover:shadow-green-400/20",
    },
    {
      name: "Tailwind CSS",
      role: "UI Styling",
      color: "border-cyan-400/50 hover:shadow-cyan-400/20",
    },
    {
      name: "React Native",
      role: "Mobile App Dev",
      color: "border-blue-500/50 hover:shadow-blue-500/20",
    },
  ];

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Our Premium <span className="text-primary">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We use the most robust and modern web technologies to build
            scalable, secure, and blazing-fast digital solutions.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-dark/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-dark hover:border-b-4 hover:shadow-xl group cursor-pointer ${tech.color}`}
            >
              <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 mb-2">
                {tech.name}
              </h3>
              <p className="text-xs text-primary/80 uppercase tracking-wider font-semibold">
                {tech.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
