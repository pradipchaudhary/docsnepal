import Link from "next/link";
import {
  FiGithub,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
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
              <li><Link href="/tools/photo-size" className="hover:text-gray-900">Photo Size Converter</Link></li>
              <li><Link href="/tools/police-report" className="hover:text-gray-900">Police Report</Link></li>
              <li><Link href="/tools/date-converter" className="hover:text-gray-900">Date Converter</Link></li>
              <li><Link href="/tools/pdf-tools" className="hover:text-gray-900">PDF Tools</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-gray-900">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <FiMail className="text-gray-500" />
                support@docsnepal.com
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-gray-500" />
                Nepal
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
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
