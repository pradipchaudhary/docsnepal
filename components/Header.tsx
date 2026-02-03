import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-xl font-normal text-white"
        >
          docsnepal
        </Link>

        {/* Menu */}
        <nav className="flex gap-6">
          <Link
            href="/"
            className="text-sm font-normal lowercase text-white hover:opacity-80"
          >
            home
          </Link>
          <Link
            href="/tools"
            className="text-sm font-normal lowercase text-white hover:opacity-80"
          >
            tools
          </Link>
          <Link
            href="/service"
            className="text-sm font-normal lowercase text-white hover:opacity-80"
          >
            service
          </Link>
          <Link
            href="/about"
            className="text-sm font-normal lowercase text-white hover:opacity-80"
          >
            about
          </Link>
        </nav>
      </div>
    </header>
  );
}
