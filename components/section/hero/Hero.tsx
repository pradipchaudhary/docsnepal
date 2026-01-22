import React from "react";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-300px)]
        pt-[80px]
        bg-gradient-to-r from-blue-600 to-cyan-400
        flex items-center justify-center
        text-center
        px-4
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          DocsNepal
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90">
          Simplifying Government Services & Public Information
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#tools"
            className="
              bg-white text-blue-600
              font-semibold
              px-6 py-3
              rounded-lg
              hover:bg-gray-100
              transition
            "
          >
            Explore Tools
          </a>

          <a
            href="#guides"
            className="
              border border-white
              text-white
              font-semibold
              px-6 py-3
              rounded-lg
              hover:bg-white hover:text-blue-600
              transition
            "
          >
            Read Guides
          </a>
        </div>
      </div>

      {/* Scroll Indicator (CSS-only, professional) */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <div className="h-10 w-6 rounded-full border-2 border-white flex justify-center">
          <span className="block h-2 w-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
