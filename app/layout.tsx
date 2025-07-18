// app/layout.tsx or app/root-layout.tsx (Next.js 15)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "DocsNepal – Generate Nepali Official Documents Easily",
  description:
    "Generate official Nepali documents like Nibedan, CVs, Pattas, and Affidavits instantly. Fill smart forms and download ready-to-use documents in Nepali or English format. No login required.",
  metadataBase: new URL("https://docsnepal.vercel.app"),
  alternates: {
    canonical: "https://docsnepal.vercel.app",
  },
  openGraph: {
    title: "DocsNepal – Smart Document Generator for Nepal",
    description:
      "Instantly generate legally formatted Nepali documents like Nibedan, CVs, Pattas, and Affidavits. Smart, privacy-first, and no login required.",
    url: "https://docsnepal.vercel.app",
    siteName: "DocsNepal",
    images: [
      {
        url: "https://docsnepal.vercel.app/og-banner.png", // full URL recommended for OG
        width: 1200,
        height: 630,
        alt: "DocsNepal – Nepali Document Generator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DocsNepal – Smart Document Generator for Nepal",
    description:
      "Easily generate Nibedan, CVs, Pattas, and Affidavits with DocsNepal. Smart forms, Nepali format, and one-click downloads.",
    images: ["https://docsnepal.vercel.app/og-banner.png"], // full URL preferred
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
