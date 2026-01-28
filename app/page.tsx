import Image from "next/image";

export default function ElectionHero() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gray-50 overflow-hidden">

      {/* Centered Banner Image */}
      <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-[2/3]">
        <Image
          src="/images/35.png"
          alt="Election Banner"
          fill
          className="object-contain"
          priority
        />
      </div>

    </div>
  );
}
