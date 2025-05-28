"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowLeft,
  Building2,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Eye,
  CheckCircle,
  Globe,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero-section";
import About from "@/components/About-us";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import LatestNews from "@/components/Latest-news";
import CTA from "@/components/CTA-section";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className=" bg-white" dir="rtl">
      {/* Top Bar */}
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <LatestNews/>
      <CTA/>
      <Footer/>
      
    </div>
  );
}
