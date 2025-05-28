"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ArrowLeft } from "lucide-react";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        "https://i.pinimg.com/736x/bc/c0/94/bcc094e2867aff8bc64e76b057af9629.jpg",
      title: "مرحباً بكم في أفينيو للاستثمار والتطوير العقاري",
      subtitle: "رائدون في تقديم الاستشارات العقارية منذ 2019",
      description:
        "نسعى جاهدين لتلبية متطلبات عملائنا بشكل فعال من خلال تقديم المشورة المهنية والتوجيه اللازم لمساعدتهم على اتخاذ قرارات مستنيرة وناجحة في مجال العقارات.",
      buttonText: "اكتشف المزيد",
      videoText: "شاهد الفيديو التعريفي",
    },
    {
      image:
        "https://i.pinimg.com/736x/28/01/83/280183b564e3c2c996dc0714153ee6ef.jpg",
      title: "رؤيتنا",
      subtitle: "نحو مجتمعات سكنية متميزة وتطوير عمراني مبتكر",
      description:
        "نسعى لأن نكون المطور العقاري الأكثر ثقة وأماناً، مع التركيز على الجودة العالية والموثوقية، وتقديم تجربة استثنائية في بناء المجتمعات السكنية وتطويرها.",
      buttonText: "تعرف على رؤيتنا",
      videoText: "رؤية وأهداف",
    },
    {
      image:
        "https://i.pinimg.com/736x/a5/56/e8/a556e8fc7c3146e625ebdb58d0fec548.jpg",
      title: "التزامنا نحو التنمية المستدامة",
      subtitle: "نحترم البيئة ونشجع الابتكار",
      description:
        "من خلال استخدام تقنيات البناء الخضراء وتحسين كفاءة استهلاك الطاقة والمياه، نحرص على تقديم حلول مبتكرة ومواكبة للتحولات في السوق العقاري.",
      buttonText: "اعرف المزيد",
      videoText: "مشاريع مستدامة",
    },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-20">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-[#9e1915] font-medium">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#9e1915] hover:bg-[#e0423d] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center"
                  >
                    {slide.buttonText}
                    <ArrowLeft className="w-5 h-5 ml-3" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 flex items-center"
                  >
                    <Play className="w-5 h-5 mr-3" />
                    {slide.videoText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm bg-black/20 rounded-full w-12 h-12"
        onClick={prevSlide}
        aria-label="الشريحة السابقة"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm bg-black/20 rounded-full w-12 h-12"
        onClick={nextSlide}
        aria-label="الشريحة التالية"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`انتقل إلى الشريحة ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">اكتشف المزيد</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
