export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 backdrop-blur-lg bg-white/70 supports-[backdrop-filter]:bg-white/50 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3 group">
          <img src="https://images.unsplash.com/photo-1589571894960-20bbe2828aa3?auto=format&fit=crop&w=80&q=80" width={32} height={32} alt="DocsNepal Logo" className="rounded-md shadow-sm ring-1 ring-zinc-200 group-hover:ring-indigo-400 transition" />
          <span className="font-semibold tracking-tight">DocsNepal</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="#templates" className="hidden md:inline text-sm text-zinc-600 hover:text-zinc-900 transition">Templates</a>
          <a href="#how" className="hidden md:inline text-sm text-zinc-600 hover:text-zinc-900 transition">How&nbsp;it&nbsp;works</a>
          <a href="#features" className="hidden md:inline text-sm text-zinc-600 hover:text-zinc-900 transition">Features</a>
          <a href="https://github.com/pradipchaudhary/docsnepal" aria-label="GitHub" className="p-2 rounded-lg hover:bg-zinc-100 transition">
            <i data-lucide="github" className="w-5 h-5 text-zinc-700"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}
