'use client'

import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-50 via-white to-pink-50 px-4 text-center relative overflow-hidden">
      
      {/* Centered Logo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="DocsNepal Logo"
          width={100}
          height={100}
          className="rounded-xl shadow-lg ring-2 ring-indigo-200 bg-white p-2"
        />
        <h2 className="mt-3 text-xl font-semibold text-indigo-700 tracking-tight">DocsNepal</h2>
      </div>

      {/* Welcome Text */}
      <div className="max-w-2xl mt-48 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-zinc-800 mb-6">
          Create&nbsp;
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Legal Documents
          </span><br />
          in Minutes, Not Hours.
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 mb-10">
          Generate legally accurate documents in Nepali or English with smart, guided forms. No signup. No hassle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Get Started
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 ring-1 ring-zinc-300 hover:ring-indigo-500 bg-white text-zinc-800 font-medium rounded-lg transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20.5C6.75 20.5 2.5 16.25 2.5 11S6.75 1.5 12 1.5 21.5 5.75 21.5 11 17.25 20.5 12 20.5z" />
            </svg>
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-20 animate-bounce text-indigo-500">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-sm text-zinc-600 mt-1">Scroll down</span>
      </div>
    </main>
  )
}
