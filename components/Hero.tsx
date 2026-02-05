import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-12">
      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="docsnepal – Government Information Platform"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="max-w-3xl">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              🇳🇵 Government Information Platform
            </span>

            {/* Title */}
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              docsnepal
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
              A trusted digital platform providing verified government
              information, official notices, public documents, and
              essential tools — built to serve the people of Nepal.
            </p>

            {/* Search */}
            <div className="mt-6 flex w-full max-w-xl items-center overflow-hidden rounded-lg bg-white shadow-lg">
              <input
                type="text"
                placeholder="Search government notices, documents, services..."
                className="flex-1 px-4 py-3 text-sm outline-none"
              />
              <button className="bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90">
                Search
              </button>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/government-info"
                className="rounded-md bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Browse Information
              </Link>

              <Link
                href="/tools"
                className="rounded-md border border-white/40 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Public Tools
              </Link>
            </div>

            {/* Trust Line */}
            <p className="mt-6 text-xs text-white/60">
              Sources include official government portals and verified public records.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
