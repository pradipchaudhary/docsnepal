import Link from "next/link";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-32 pb-28">

      {/* ===== Background Pattern System ===== */}
      <div className="absolute inset-0 -z-10">

        {/* Soft Radial Glow (Top Center) */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        {/* Bottom Accent Glow */}
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-100/40 blur-3xl" />

        {/* SVG Grid Pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ===== Content ===== */}
      <div className="mx-auto max-w-4xl px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-700">
          Nepal Public Information Platform
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Simplified Access to
          <span className="block text-blue-600">
            Government Documents & Notices
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
          A centralized digital system providing verified public records,
          official circulars, service information, and institutional updates —
          structured for transparency, clarity, and accessibility.
        </p>

        {/* Search Box */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
            <div className="px-4 text-slate-400">
              <Search size={18} />
            </div>

            <input
              type="text"
              placeholder="Search notices, documents, public services..."
              className="flex-1 py-4 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />

            <button className="bg-blue-600 px-8 py-4 text-sm font-medium text-white transition hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>

        {/* Trust Row */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          <span>✔ Verified Government Sources</span>
          <span>✔ Structured Public Records</span>
          <span>✔ Regularly Updated</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-14 flex justify-center gap-5">
          <Link
            href="/government-info"
            className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            Browse Information
          </Link>

          <Link
            href="/tools"
            className="rounded-xl border border-slate-300 px-8 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Public Tools
          </Link>
        </div>

      </div>
    </section>
  );
}
