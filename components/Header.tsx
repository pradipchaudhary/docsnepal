"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-500 ease-in-out
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"}
      `}
    >
      <div
        className="
          mx-auto max-w-5xl
          flex items-center justify-between
          px-4 py-4
          h-20
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={scrolled ? "/logo-dark.png" : "/logo-white.png"}
            alt="Docs Nepal Logo"
            width={150}
            height={44}
            priority
            className={`
              object-contain
              transition-all duration-500 ease-in-out
              ${scrolled ? "opacity-100" : "opacity-95"}
            `}
          />
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6">
          {["home", "tools", "service", "about"].map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `/${item}`}
              className={`
                text-sm lowercase tracking-wide
                transition-all duration-500 ease-in-out
                ${scrolled
                  ? "text-gray-800 hover:text-black"
                  : "text-white hover:text-gray-200"}
              `}
            >
              {item}
            </Link>
          ))}

          {/* Language Switcher */}
          <select
            className={`
              bg-transparent text-sm lowercase cursor-pointer outline-none
              transition-colors duration-500 ease-in-out
              ${scrolled ? "text-gray-800" : "text-white"}
            `}
            defaultValue="en"
          >
            <option value="en" className="text-black">en</option>
            <option value="np" className="text-black">np</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
