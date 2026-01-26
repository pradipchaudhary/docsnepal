"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const navLink =
    "text-sm font-medium text-slate-700 hover:text-slate-900 transition";

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white transition ${scrolled ? "border-b border-slate-200" : "border-b border-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            docsnepal
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLink}>Home</Link>

            {/* Tools Dropdown */}
            <div className="relative group">
              <button className={`${navLink} flex items-center gap-1`}>
                Tools
                <FiChevronDown className="text-slate-500" />
              </button>

              <div className="absolute left-0 top-full mt-3 w-60 bg-white border border-slate-200 rounded-md shadow-sm opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                <DropdownItem href="/tools/photo-size" label="Photo Size Converter" />
                <DropdownItem href="/tools/pdf-tools" label="PDF Tools" />
                <DropdownItem href="/tools/date-converter" label="Date Converter" />
                <DropdownItem href="/tools/cv-maker" label="CV / Resume Maker" />
              </div>
            </div>

            <Link href="/guides" className={navLink}>Guides</Link>
            <Link href="/services" className={navLink}>Services</Link>
            <Link href="/blog" className={navLink}>Updates</Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-4 text-sm">
            <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink href="/tools/photo-size" onClick={() => setMobileOpen(false)}>Photo Size Converter</MobileLink>
            <MobileLink href="/tools/pdf-tools" onClick={() => setMobileOpen(false)}>PDF Tools</MobileLink>
            <MobileLink href="/tools/date-converter" onClick={() => setMobileOpen(false)}>Date Converter</MobileLink>
            <MobileLink href="/tools/cv-maker" onClick={() => setMobileOpen(false)}>CV / Resume Maker</MobileLink>
            <MobileLink href="/guides" onClick={() => setMobileOpen(false)}>Guides</MobileLink>
            <MobileLink href="/services" onClick={() => setMobileOpen(false)}>Services</MobileLink>
            <MobileLink href="/blog" onClick={() => setMobileOpen(false)}>Updates</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block font-medium text-slate-700 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}
