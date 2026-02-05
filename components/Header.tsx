import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-5 left-0 z-50 w-full">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">

        {/* Logo Image */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-white.png"   // 👉 Put your logo inside public folder
            alt="Docs Nepal Logo"
            width={140}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-5">
          <Link href="/" className="nav-link">home</Link>
          <Link href="/tools" className="nav-link">tools</Link>
          <Link href="/service" className="nav-link">service</Link>
          <Link href="/about" className="nav-link">about</Link>

          {/* Language Switcher */}
          <select
            className="bg-transparent text-sm lowercase text-white outline-none cursor-pointer"
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
