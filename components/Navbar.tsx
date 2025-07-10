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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#9e1915] text-white text-md py-1.5 px-4 font-snd">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2" dir="ltr">
              <Phone className="w-3.5 h-3.5" />
              <span>+964 780 330 0093</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>nawaf@avenue-iq.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>العراق، بغداد</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">تابعونا:</span>
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
              (Icon, i) => (
                <Link
                  href="#"
                  key={i}
                  className="hover:text-blue-300 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto px-4 py-3 font-snd">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/Avenue Logo Colored.png"
                alt="أفنيو"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/about", label: "من نحن" },
                { href: "/what-we-do", label: "خدماتنا" },
                { href: "/projects", label: "مشاريعنا" },
                { href: "/news", label: "الأخبار" },
                { href: "/contact", label: "اتصل بنا" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-700 text-xl hover:text-[#9e1915] font-burdaMedium relative group transition-colors"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#9e1915] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Button className="text-xl bg-gradient-to-r from-[#9e1915] to-[#d5241e] text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105">
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
            <div className="font-snd lg:hidden mt-2 pb-4 bg-white rounded-lg shadow-lg animate-slideDown">
              <div className="flex flex-col gap-4 pt-4 px-4">
                {[
                  { href: "/", label: "الرئيسية" },
                  { href: "/about", label: "من نحن" },
                  { href: "/what-we-do", label: "خدماتنا" },
                  { href: "/projects", label: "مشاريعنا" },
                  { href: "/news", label: "الأخبار" },
                  { href: "/contact", label: "اتصل بنا" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-gray-700 hover:text-[#9e1915] font-burdaMedium py-2 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
                <a href="/contact">
                  <Button className="bg-gradient-to-r from-[#9e1915] to-[#d5241e] text-white rounded-full py-2 mt-2 shadow-md hover:shadow-lg transition-transform hover:scale-105">
                    احجز استشارة مجانية
                  </Button>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
