// src/components/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold hover:text-gray-200 transition-colors">
          DocsNepal
        </Link>
        <div className="space-x-4">
          <Link href="/generate" className="hover:text-gray-200 transition-colors">
            Generate
          </Link>
          <a href="#features" className="hover:text-gray-200 transition-colors">
            Features
          </a>
        </div>
      </div>
    </nav>
  );
}
