// app/layout.tsx or app/root-layout.tsx (Next.js 15)
import type { Metadata } from "next";
import "../styles/globals.css";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import HomeLayout from "@/components/layout/HomeLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Docsnepal - Simplifying government documents, tools, and public information for everyone in Nepal.",
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <HomeLayout>
          {children}
        </HomeLayout>
      </body>
    </html>
  );
}
