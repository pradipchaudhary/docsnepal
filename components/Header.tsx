'use client'

import Logo from '@/components/Logo'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full bg-white border-b border-zinc-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                    <span className="text-xl font-semibold text-[#4c8944] hidden sm:inline"><span className='text-[#e6303f]'>Docs</span>Nepal</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 font-medium">
                    <Link href="/template" className="hover:text-indigo-600">Template</Link>
                    <Link href="/about" className="hover:text-indigo-600">About</Link>
                    <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
                    <Link
                        href="/dashboard"
                        className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                    >
                        Start Generating
                    </Link>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-zinc-700 hover:text-indigo-600"
                    aria-label="Toggle navigation menu"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-zinc-200 px-6 py-4 space-y-3 text-sm text-zinc-600 font-medium">
                    <Link href="/template" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Template</Link>
                    <Link href="/about" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link
                        href="/dashboard"
                        className="block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition mt-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Start Generating
                    </Link>
                </div>
            )}
        </header>
    )
}
