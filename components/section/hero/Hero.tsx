import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4  py-24">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left">
            {/* Badge */}
            <span className="inline-block mb-4 rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-700">
              Public Service Platform
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
              Simplifying <span className="text-blue-600">Government Documents</span> & <span className="text-blue-600">Online Tools</span> in Nepal
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              Access guides, forms, and essential tools like police reports, date converters,
              and PDF utilities—all in one place. Save time and simplify government-related processes.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-gray-100 hover:bg-blue-700 transition"
              >
                Explore Tools
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right Illustration Placeholder */}
          <div className="w-full lg:w-1/2">
            <div className=" rounded-xl flex items-center justify-center">
              {/* You can replace this with an SVG or image */}
              <Image src="/logo.png" alt="Hero Image" width={980} height={980} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
