import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
