import Logo from '@/components/Logo'

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-50 border-t border-zinc-200 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm text-zinc-600">

                {/* Logo & Description (larger column) */}
                <div className="md:col-span-2 space-y-3">
                    <Logo />
                    <p className="text-zinc-500 leading-relaxed">
                        DocsNepal is a smart platform for generating official documents for Nepali citizens — fast, easy, and reliable.
                    </p>
                </div>

                {/* Documentation Links */}
                <div>
                    <h4 className="text-zinc-800 font-semibold mb-2">Documentation</h4>
                    <ul className="space-y-1">
                        <li><a href="/docs/getting-started" className="hover:text-indigo-600">Getting Started</a></li>
                        <li><a href="/docs/templates" className="hover:text-indigo-600">Templates</a></li>
                        <li><a href="/docs/faq" className="hover:text-indigo-600">FAQ</a></li>
                    </ul>
                </div>

                {/* Quick Navigation Links */}
                <div>
                    <h4 className="text-zinc-800 font-semibold mb-2">Quick Links</h4>
                    <ul className="space-y-1">
                        <li><a href="/dashboard" className="hover:text-indigo-600">Dashboard</a></li>
                        <li><a href="/about" className="hover:text-indigo-600">About</a></li>
                        <li><a href="/contact" className="hover:text-indigo-600">Contact</a></li>
                    </ul>
                </div>

                {/* Social Links & Legal */}
                <div>
                    <h4 className="text-zinc-800 font-semibold mb-2">Connect</h4>
                    <div className="flex gap-4 mb-3">
                    </div>
                    <div className="space-x-4">
                        <a href="/terms" className="hover:text-indigo-600">Terms</a>
                        <a href="/privacy" className="hover:text-indigo-600">Privacy</a>
                    </div>
                    <p className="text-xs text-zinc-400 mt-4">&copy; {new Date().getFullYear()} DocsNepal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
