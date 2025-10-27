'use client';

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Facebook, Code } from "lucide-react";

export default function Welcome() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-between 
      bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] 
      font-inter text-center px-6 py-12"
    >
      {/* HEADER */}
      <header className="sticky top-0 w-full flex items-center justify-center py-6 z-50">
        <div className="flex items-center gap-0">
          <Image
            src="/white-logo.png"
            alt="DocsNepal logo"
            width={52}
            height={52}
            className="rounded-lg"
            priority
          />
          <h1 className="text-3xl font-semibold tracking-tight">
            DocsNepal
          </h1>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Launching Soon 🚀
        </h2>

        <p className="text-lg md:text-xl text-[hsl(var(--color-foreground)/0.7)] mb-6 max-w-xl">
          Simplifying official document creation for every Nepali.
        </p>

        <p className="max-w-2xl text-[hsl(var(--color-foreground)/0.8)] leading-relaxed text-base md:text-lg">
          Effortlessly generate and manage official Nepali documents — from letters and
          applications to affidavits — in both Nepali and English formats.
          <br />
          <span className="font-medium text-[hsl(var(--color-primary))]">
            Fast, reliable, and built for everyone.
          </span>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="sticky bottom-0 w-full flex flex-col items-center justify-center py-6 z-50">
        <div className="flex space-x-6 mb-2">
          <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
          <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
          <SocialLink href="https://facebook.com" icon={<Facebook className="w-5 h-5" />} />
          <SocialLink href="/docs" icon={<Code className="w-5 h-5" />} />
        </div>

        <p className="text-xs md:text-sm text-[hsl(var(--color-foreground)/0.6)]">
          © {new Date().getFullYear()} <span className="font-medium">DocsNepal</span>. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[hsl(var(--color-primary))] transition-transform duration-300 hover:scale-110"
    >
      {icon}
    </Link>
  );
}
