'use client';

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Facebook, Code } from "lucide-react";

export default function Welcome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-center px-6 py-12 transition-colors duration-500">

      {/* LOGO */}
      <div className="mb-8">
        <Image
          src="/white-logo.png"
          alt="DocsNepal logo"
          width={96}
          height={96}
          className="mx-auto mb-4"
          priority
        />
        {/* text-4xl md:text-6xl lg:text-5xl font-poly-neutral text-dark-text-primary leading-[120%] font-semibold -mt-[100px] */}
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-poly-neutral text-gray-900 dark:text-white leading-[120%] font-semibold">
          Launching Soon
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
          Simplifying official document creation for every Nepali.
        </p>
      </div>

      {/* DESCRIPTION */}
      <section className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
        Effortlessly generate and manage official Nepali documents — from letters and
        applications to affidavits — in both Nepali and English formats.
        Fast, reliable, and built for everyone.
      </section>

      {/* ACTION BUTTON */}
      <Link
        href="/dashboard"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow transition"
      >
        Get Started
      </Link>

      {/* FOOTER */}
      <footer className="mt-16 flex flex-col items-center space-y-4 text-gray-500 dark:text-gray-400">
        <div className="flex space-x-5">
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-blue-600">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://github.com" target="_blank" aria-label="GitHub" className="hover:text-gray-900 dark:hover:text-white">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-blue-500">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="/docs" aria-label="Docs" className="hover:text-blue-500">
            <Code className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} DocsNepal. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
