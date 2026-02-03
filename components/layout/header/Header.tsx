"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiFileText,
  FiImage,
  FiCalendar,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

const Header = () => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  const menuItem =
    "flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-700 px-3 py-2 transition";

  const dropdownItem =
    "flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition";

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-700 text-white font-semibold">
              DN
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-slate-900">
                DocsNepal
              </span>
              <span className="text-[11px] text-slate-500">
                Public Information Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">

            <Link href="/" className={menuItem}>Home</Link>

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button
                className={menuItem}
                aria-haspopup="true"
                aria-expanded={toolsOpen}
              >
                Tools
                <FiChevronDown
                  className={`transition-transform ${toolsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {toolsOpen && (
                <div className="absolute left-0 top-full mt-3 w-72 bg-white border border-slate-200 rounded-lg shadow-lg">
                  <div className="py-3">

                    <p className="px-4 py-1 text-[11px] font-semibold uppercase text-slate-500">
                      Photo & Documents
                    </p>
                    <Link href="/tools/photo-size" className={dropdownItem}>
                      <FiImage className="text-blue-500" /> Photo Size Converter
                    </Link>
                    <Link href="/tools/background-remove" className={dropdownItem}>
                      <FiImage className="text-blue-500" /> Background Remover
                    </Link>
                    <Link href="/tools/pdf-tools" className={dropdownItem}>
                      <FiFileText className="text-blue-500" /> PDF Tools
                    </Link>

                    <p className="mt-3 px-4 py-1 text-[11px] font-semibold uppercase text-slate-500">
                      Government Utilities
                    </p>
                    <Link href="/tools/police-report" className={dropdownItem}>
                      <FiFileText className="text-blue-500" /> Police Report Guide
                    </Link>
                    <Link href="/tools/date-converter" className={dropdownItem}>
                      <FiCalendar className="text-blue-500" /> Date Converter
                    </Link>
                    <Link href="/tools/cv-maker" className={dropdownItem}>
                      <FiUser className="text-blue-500" /> CV / Resume Maker
                    </Link>

                  </div>
                </div>
              )}
            </div>

            <Link href="/guides" className={menuItem}>Guides</Link>
            <Link href="/services" className={menuItem}>Services</Link>
            <Link href="/blog" className={menuItem}>Updates</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-6 py-4 space-y-3">

            <Link href="/" className="block text-sm font-medium">Home</Link>

            <button
              onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
              className="flex w-full items-center justify-between text-sm font-medium"
            >
              Tools
              <FiChevronDown
                className={`transition-transform ${mobileToolsOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {mobileToolsOpen && (
              <div className="pl-4 space-y-1 text-sm text-slate-600">
                <Link href="/tools/photo-size" className="block">Photo Size Converter</Link>
                <Link href="/tools/background-remove" className="block">Background Remover</Link>
                <Link href="/tools/pdf-tools" className="block">PDF Tools</Link>
                <Link href="/tools/police-report" className="block">Police Report Guide</Link>
                <Link href="/tools/date-converter" className="block">Date Converter</Link>
                <Link href="/tools/cv-maker" className="block">CV / Resume Maker</Link>
              </div>
            )}

            <Link href="/guides" className="block text-sm font-medium">Guides</Link>
            <Link href="/services" className="block text-sm font-medium">Services</Link>
            <Link href="/blog" className="block text-sm font-medium">Updates</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
