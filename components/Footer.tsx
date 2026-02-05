import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black/90 text-gray-300 py-20">
      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row justify-between gap-16">

        {/* Left: Logo + Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-white.png"   // 👉 Put your logo inside public folder
              alt="Docs Nepal Logo"
              width={160}
              height={45}
              priority
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            Your trusted platform for verified government information, public notices,
            official documents, and essential tools serving the people of Nepal.
          </p>
        </div>

        {/* Center: Quick Links + Languages */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <Link href="/" className="hover:text-white transition-colors text-sm">
              Home
            </Link>
            <Link href="/tools" className="hover:text-white transition-colors text-sm">
              Tools
            </Link>
            <Link href="/service" className="hover:text-white transition-colors text-sm">
              Services
            </Link>
            <Link href="/about" className="hover:text-white transition-colors text-sm">
              About
            </Link>
          </div>

          {/* Languages */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Languages</h3>
            <Link href="#" className="hover:text-white transition-colors text-sm">
              EN
            </Link>
            <Link href="#" className="hover:text-white transition-colors text-sm">
              NP
            </Link>
          </div>
        </div>

        {/* Right: Social */}
        <div className="flex flex-col gap-3 items-start md:items-end">
          <h3 className="text-sm font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <Link href="#" className="hover:text-white transition-colors text-lg">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-white transition-colors text-lg">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-white transition-colors text-lg">
              <FaInstagram />
            </Link>
          </div>
        </div>

      </div>

      {/* Thin Copyright Line */}
      <div className="mt-20 pt-4 text-center text-xs text-gray-500">
        <div className="mx-auto max-w-5xl border-t border-gray-700/30 pt-10">
          © 2026 docsnepal. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
