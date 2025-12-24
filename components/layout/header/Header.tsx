"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [toolsOpen, setToolsOpen] = useState(false);

  const menuItem =
    "text-sm font-medium text-black hover:text-gray-700 transition-colors";

  const dropdownItem =
    "block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-[25px] font-semibold text-black tracking-tight">
            DocsNepal
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            <Link href="/" className={menuItem}>Home</Link>

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button className={`${menuItem} flex items-center gap-1`}>
                Tools <span className="text-xs text-gray-500">▾</span>
              </button>

              {toolsOpen && (
                <div className="absolute top-full -left-10 mt-1 w-72 rounded-xl border border-gray-200 bg-white shadow-lg">
                  <div className="space-y-5 px-4 py-4">

                    {/* Group */}
                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                        Photos
                      </p>
                      <div className="space-y-1">
                        <Link href="/tools/photo-size" className={dropdownItem}>
                          Photo Size Converter
                        </Link>
                        <Link href="/tools/background-remove" className={dropdownItem}>
                          Background Remover
                        </Link>
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                        Government
                      </p>
                      <div className="space-y-1">
                        <Link href="/tools/police-report" className={dropdownItem}>
                          Police Report
                        </Link>
                        <Link href="/tools/date-converter" className={dropdownItem}>
                          Date Converter
                        </Link>
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                        Others
                      </p>
                      <div className="space-y-1">
                        <Link href="/tools/pdf-tools" className={dropdownItem}>
                          PDF Tools
                        </Link>
                        <Link href="/tools/calculators" className={dropdownItem}>
                          Calculators
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link href="/services" className={menuItem}>Services</Link>
            <Link href="/contact" className={menuItem}>Blog</Link>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
