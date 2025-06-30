import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-zinc-800 font-sans">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
