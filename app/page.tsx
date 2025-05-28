import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero-section";
import About from "@/components/About-us";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import LatestNews from "@/components/Latest-news";
import CTA from "@/components/CTA-section";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className=" bg-white" dir="rtl">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <LatestNews />
      <CTA />
      <Footer />
    </div>
  );
}
