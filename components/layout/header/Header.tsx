"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItem =
    "text-sm font-medium transition-colors text-slate-800 hover:text-blue-600";

  const dropdownItem =
    "block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 transition";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="h-18 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-[22px] font-semibold text-blue-600 tracking-tight"
          >
            DocsNepal
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">

            <Link href="/" className={menuItem}>Home</Link>

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button className={`${menuItem} flex items-center gap-1`}>
                Tools <span className="text-xs text-slate-500">▾</span>
              </button>

              <div
                className={`absolute top-full -left-10 mt-2 w-72 rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-200 ${toolsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-1"
                  }`}
              >
                <div className="space-y-5 px-4 py-4">

                  {/* Photos Group */}
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
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

                  {/* Government Group */}
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
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

                  {/* Others Group */}
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
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
