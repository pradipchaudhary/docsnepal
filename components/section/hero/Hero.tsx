import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-center px-4">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-3xl text-white">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          DocsNepal
        </h1>

        {/* Subheading / Tagline */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
          Simplifying Government Services & Public Information
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#tools"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Explore Tools
          </a>
          <a
            href="#guides"
            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Read Guides
          </a>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <span className="animate-bounce text-white text-3xl">⬇️</span>
      </div>
    </section>
  );
};

export default Hero;
