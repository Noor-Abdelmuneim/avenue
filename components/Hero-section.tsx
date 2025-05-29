"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ArrowLeft, X } from "lucide-react";

const heroSlides = [
  {
    image: "https://i.pinimg.com/736x/bc/c0/94/bcc094e2867aff8bc64e76b057af9629.jpg",
    title: "مرحباً بكم في أفينيو للاستثمار والتطوير العقاري",
    subtitle: "رائدون في تقديم الاستشارات العقارية منذ 2019",
    description: "نسعى جاهدين لتلبية متطلبات عملائنا من خلال تقديم المشورة المهنية لمساعدتهم على اتخاذ قرارات ناجحة في العقارات.",
    buttonText: "اكتشف المزيد",
    videoText: "شاهد الفيديو",
    pageLink: "/about",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image: "https://i.pinimg.com/736x/28/01/83/280183b564e3c2c996dc0714153ee6ef.jpg",
    title: "رؤيتنا",
    subtitle: "نحو مجتمعات سكنية متميزة وتطوير مبتكر",
    description: "نسعى لأن نكون المطور العقاري الأكثر ثقة، مع التركيز على الجودة العالية والموثوقية، وتجربة استثنائية في بناء المجتمعات.",
    buttonText: "تعرف على رؤيتنا",
    videoText: "رؤية وأهداف",
    pageLink: "/about",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image: "https://i.pinimg.com/736x/a5/56/e8/a556e8fc7c3146e625ebdb58d0fec548.jpg",
    title: "التزامنا نحو التنمية المستدامة",
    subtitle: "نحترم البيئة ونشجع الابتكار",
    description: "من خلال تقنيات البناء الخضراء وتحسين كفاءة استهلاك الطاقة، نقدم حلولاً مبتكرة لمواكبة السوق العقاري.",
    buttonText: "اعرف المزيد",
    videoText: "مشاريع مستدامة",
    pageLink: "/projects",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoLink, setCurrentVideoLink] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const openVideo = (link) => {
    setCurrentVideoLink(link);
    setIsVideoOpen(true);
  };

  return (
    <section className="relative h-screen overflow-hidden font-sans">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ${
            idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-8">
            <div className="max-w-2xl sm:max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug">
                {slide.title}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-[#9e1915] font-medium mb-3">
                {slide.subtitle}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-5 sm:mb-6 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href={slide.pageLink} passHref>
                  <Button className="bg-[#9e1915] hover:bg-[#e0423d] text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all text-sm sm:text-base">
                    {slide.buttonText}
                    <ArrowLeft className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="hidden md:block border-2 border-white text-white hover:bg-white hover:text-gray-900 px-5 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-sm bg-white/10 text-sm sm:text-base"
                  onClick={() => openVideo(slide.videoLink)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {slide.videoText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* أزرار التحكم */}
      <Button
        variant="ghost"
        size="icon"
        className="hidden md:block absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm bg-black/20 rounded-full w-10 h-10 sm:w-12 sm:h-12"
        onClick={prevSlide}
        aria-label="السابق"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="hidden md:block absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm bg-black/20 rounded-full w-10 h-10 sm:w-12 sm:h-12"
        onClick={nextSlide}
        aria-label="التالي"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* نافذة الفيديو */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-lg sm:max-w-3xl bg-black rounded-lg p-4">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={currentVideoLink}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
