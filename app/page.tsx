import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-100 via-white to-pink-100 px-4 text-center">
      {/* Centered Logo Section */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="DocsNepal Logo"
          width={200}
          height={200}
          className="rounded-md shadow ring-1 ring-indigo-200"
        />
        
      </div>


      {/* Welcome Text */}
      <div className="max-w-2xl mt-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
          Welcome to <span className="text-indigo-600">DocsNepal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Effortlessly generate legal, personal, and official documents in Nepali or English — trusted, fast, and free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/dashboard" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-lg transition">
            Get Started
          </a>
          <a href="#about" className="px-6 py-3 ring-1 ring-gray-300 hover:ring-indigo-500 bg-white text-gray-800 font-medium rounded-lg transition">
            Learn More
          </a>
        </div>
      </div>

      <div className="mt-16 animate-bounce text-indigo-500">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-sm text-gray-600 mt-1">Scroll down</span>
      </div>
    </main>
  );
}
