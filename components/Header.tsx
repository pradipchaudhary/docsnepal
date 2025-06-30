'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full sticky top-0 bg-white border-b shadow z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-blue-600">
                    DocsNepal
                </Link>
                <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <Menu />
                </button>
                <nav className={`lg:flex gap-6 items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <Link href="#features" className="hover:text-blue-600">Features</Link>
                    <Link href="#how" className="hover:text-blue-600">How It Works</Link>
                    <a href="https://github.com/pradipchaudhary/docsnepal" className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">GitHub</a>
                </nav>
            </div>
        </header>
    )
}
