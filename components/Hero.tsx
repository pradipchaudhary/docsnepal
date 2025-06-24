'use client'

import Logo from '@/components/Logo'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white text-zinc-800 py-24 px-6 text-center">
            {/* Content */}
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <Logo />
                <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-indigo-700">
                    Welcome to DocsNepal
                </h1>
                <p className="mt-4 text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                    Smart document generator for Nepali citizens — create official forms, affidavits, letters & more in minutes.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/dashboard"
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg shadow-md transition"
                    >
                        Start Generating
                    </Link>
                    <Link
                        href="#about"
                        className="px-6 py-3 bg-white border border-zinc-300 hover:border-indigo-400 text-zinc-700 text-sm font-medium rounded-lg transition"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Scroll Down Cue */}
                <div className="mt-16 animate-bounce">
                    <svg className="w-5 h-5 mx-auto text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <p className="text-xs text-zinc-500 mt-1">Scroll down</p>
                </div>
            </div>
        </section>
    )
}
