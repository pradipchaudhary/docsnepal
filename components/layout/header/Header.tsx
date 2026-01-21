"use client";

import Link from "next/link";
import { useState } from "react";
import { FiFileText, FiImage, FiCalendar, FiUser } from "react-icons/fi"; // Example icons

const Header = () => {
  const [toolsOpen, setToolsOpen] = useState(false);

  const menuItem = "text-sm font-medium text-slate-700 hover:text-blue-700 px-3 py-2";
  const dropdownItem =
    "flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition";

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white border-b border-slate-200`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">

          {/* Logo Section */}
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-2">

            <Link href="/" className={menuItem}>Home</Link>

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button className={menuItem}>Tools</button>

              {toolsOpen && (
                <div className="absolute left-0 top-full mt-3 w-72 border border-slate-200 bg-white rounded-lg shadow-md">
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
                      <FiCalendar className="text-blue-500" /> Date Converter (BS ↔ AD)
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
        </div>
      </div>
    </header>
  );
};

export default Header;
