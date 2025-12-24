// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import HomeLayout from "@/components/layout/HomeLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "DocsNepal - Simplifying government documents, tools, and public information for everyone in Nepal.",
  description:
    "DocsNepal simplifies government documents, tools, and public information for everyone in Nepal. Instantly generate Nibedan, CVs, Pattas, and Affidavits with smart forms. No login required.",
  metadataBase: new URL("https://docsnepal.vercel.app"),
  alternates: {
    canonical: "https://docsnepal.vercel.app",
  },
  keywords: [
    "DocsNepal",
    "Nepal government documents",
    "Nibedan generator",
    "CV Nepali format",
    "Affidavit generator",
    "Pattas",
    "Public information",
    "Online document tools",
  ],
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0f172a",
  openGraph: {
    title: "Docsnepal - Simplifying government documents, tools, and public information for everyone in Nepal.",
    description:
      "DocsNepal simplifies government documents, tools, and public information for everyone in Nepal. Generate Nibedan, CVs, Pattas, and Affidavits instantly with smart forms. No login required.",
    url: "https://docsnepal.vercel.app",
    siteName: "DocsNepal",
    images: [
      {
        url: "https://docsnepal.vercel.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "DocsNepal - Simplifying government documents, tools, and public information for everyone in Nepal.",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docsnepal - Simplifying government documents, tools, and public information for everyone in Nepal.",
    description:
      "DocsNepal simplifies government documents, tools, and public information for everyone in Nepal. Generate Nibedan, CVs, Pattas, and Affidavits instantly with smart forms. No login required.",
    images: [
      {
        url: "https://docsnepal.vercel.app/og-banner.png",
        alt: "DocsNepal - Simplifying government documents, tools, and public information for everyone in Nepal.",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
