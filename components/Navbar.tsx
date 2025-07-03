// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-semibold">
          DocsNepal
        </a>
        <div>
          <a href="/generate" className="text-white px-4">Generate</a>
          <a href="#features" className="text-white px-4">Features</a>
        </div>
      </div>
    </nav>
  );
}
