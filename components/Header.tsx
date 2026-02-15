"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = ["home", "tools", "services", "videos"];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-4 h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-dark.png"
            alt="Docs Nepal Logo"
            width={150}
            height={44}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `/${item}`}
              className="text-sm lowercase tracking-wide text-gray-800 hover:text-black transition"
            >
              {item}
            </Link>
          ))}

          {/* Language Switcher */}
          <select
            className="bg-transparent text-sm lowercase outline-none text-gray-800 cursor-pointer"
            defaultValue="en"
          >
            <option value="en">en</option>
            <option value="np">np</option>
          </select>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-800"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-96" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 bg-white border-t">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `/${item}`}
              onClick={() => setOpen(false)}
              className="text-sm lowercase tracking-wide text-gray-800 hover:text-black"
            >
              {item}
            </Link>
          ))}

          <select
            className="bg-transparent text-sm lowercase outline-none text-gray-800"
            defaultValue="en"
          >
            <option value="en">en</option>
            <option value="np">np</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
