'use client';
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        {/* Centered Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.jpg"
            alt="DocsNepal logo"
            width={300}
            height={300}
            priority
            className="w-48 h-auto" // w-48 = width: 12rem, h-auto = height: auto
          />
        </div>

        
        <p className="text-lg md:text-xl text-zinc-600 mb-8">
          Effortlessly generate official Nepali documents, letters, affidavits, and applications in both Nepali and English formats.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/generate"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Generate Document
          </Link>
          <Link
            href="/about"
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-xl font-semibold transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      <footer className="mt-16 text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} DocsNepal. Built with ❤️ for Nepal.
      </footer>
    </main>
  );
}
