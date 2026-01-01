import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Glow Effect */}
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-fuchsia-400/20 blur-[120px]" />

      {/* Main Layout */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 md:px-12 lg:px-24">
        <Header />
        <main className="flex-1 py-12 md:py-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;

