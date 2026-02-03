import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full pt-16">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-bottom"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl drop-shadow-xl">
          Nepal Election 2026
        </h1>
      </div>
    </section>
  );
}
