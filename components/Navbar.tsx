"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
const Navbar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#9e1915] text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+964 780 330 0093</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>nawaf@avenue-iq.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>العراق، بغداد</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs">تابعونا:</span>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Youtube className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/Avenue Logo Colored.png"
                alt="أفنيو للأستثمار والتطوير العقاري"
                className="h-16"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#9e1915] font-medium transition-colors relative group"
              >
                الرئيسية
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9e1915] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#9e1915] font-medium transition-colors relative group"
              >
                من نحن
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9e1915] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/what-we-do"
                className="text-gray-700 hover:text-[#9e1915] font-medium transition-colors relative group"
              >
                خدماتنا
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9e1915] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-[#9e1915] font-medium transition-colors relative group"
              >
                مشاريعنا
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9e1915] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/news"
                className="text-gray-700 hover:text-[#9e1915] font-medium transition-colors relative group"
              >
                الأخبار
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9e1915] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#9e1915] font-medium transition-colors relative group"
              >
                اتصل بنا
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9e1915] transition-all group-hover:w-full"></span>
              </Link>
              <Button className="bg-gradient-to-r from-[#9e1915] to-[#d5241e] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all">
                احجز استشارة مجانية
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t bg-white rounded-lg shadow-lg">
              <div className="flex flex-col gap-4 pt-4 px-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  الرئيسية
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  من نحن
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  خدماتنا
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  مشاريعنا
                </Link>
                <Link
                  href="/news"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  الأخبار
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  اتصل بنا
                </Link>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-fit mt-2">
                  احجز استشارة مجانية
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
