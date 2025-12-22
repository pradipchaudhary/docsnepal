import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold text-black">
              DocsNepal
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Simplifying government documents, tools, and public information
              for everyone in Nepal.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Tools
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="/tools/photo-size" className="hover:text-black">Photo Size Converter</Link></li>
              <li><Link href="/tools/police-report" className="hover:text-black">Police Report</Link></li>
              <li><Link href="/tools/date-converter" className="hover:text-black">Date Converter</Link></li>
              <li><Link href="/tools/pdf-tools" className="hover:text-black">PDF Tools</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-black">About Us</Link></li>
              <li><Link href="/services" className="hover:text-black">Services</Link></li>
              <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Email: support@docsnepal.com</li>
              <li>Location: Nepal</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} DocsNepal. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built for public service and accessibility.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
