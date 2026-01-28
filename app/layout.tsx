// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "docsnepal",
  description:
    "Public Information",
  metadataBase: new URL("https://docsnepal.vercel.app"),
  alternates: {
    canonical: "https://docsnepal.vercel.app",
  },
  keywords: [
    "Docsnepal",
    "docsnepal",
    "Nepal government documents"

  ],
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0f172a",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
