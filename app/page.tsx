'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-800 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background gradient shape */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[160px] opacity-50 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-100 rounded-full blur-[140px] opacity-50 -z-10"></div>

      {/* Logo and Title */}
      <div className="flex flex-col items-center justify-center mt-10 mb-8">
        <Image
          src="/logo.png"
          alt="DocsNepal Logo"
          width={90}
          height={90}
          className="rounded-xl shadow-lg ring-1 ring-indigo-200"
        />
        <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-indigo-700 text-center">
          Welcome to DocsNepal
        </h1>
        <p className="mt-3 text-center text-zinc-600 text-base md:text-lg max-w-xl">
          Smart document generator for Nepali citizens — create official forms, affidavits, letters & more in minutes.
        </p>
      </div>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href="/dashboard"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-md transition text-sm font-medium"
        >
          Start Generating
        </a>
        <a
          href="#about"
          className="px-6 py-3 border border-zinc-300 hover:border-indigo-400 text-zinc-700 bg-white rounded-lg transition text-sm font-medium"
        >
          Learn More
        </a>
      </div>

      {/* Scroll Down Cue */}
      <div className="mt-20 animate-bounce">
        <svg className="w-5 h-5 mx-auto text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <p className="text-xs text-zinc-500 mt-1">Scroll down</p>
      </div>
    </main>
  )
}
