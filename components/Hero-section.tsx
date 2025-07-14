"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ArrowLeft, X } from "lucide-react";

const heroSlides = [
  {
    image: "/Bloom/1.jpg",
    title: "مرحباً بكم في أفينيو للاستثمار والتطوير العقاري",
    subtitle: "رائدون في تقديم الاستشارات العقارية منذ 2019",
    description:
      "نسعى جاهدين لتلبية متطلبات عملائنا من خلال تقديم المشورة المهنية لمساعدتهم على اتخاذ قرارات ناجحة في العقارات.",
    buttonText: "اكتشف المزيد",
    videoText: "شاهد الفيديو",
    pageLink: "/about",
    videoLink: "https://youtu.be/4jUqs7JOCSI?si=dePf0aNix6cMWjcU",
  },
  {
    image: "/Bloom/800....2.png",
    title: "رؤيتنا",
    subtitle: "نحو مجتمعات سكنية متميزة وتطوير مبتكر",
    description:
      "نسعى لأن نكون المطور العقاري الأكثر ثقة، مع التركيز على الجودة العالية والموثوقية، وتجربة استثنائية في بناء المجتمعات.",
    buttonText: "تعرف على رؤيتنا",
    videoText: "رؤية وأهداف",
    pageLink: "/about",
    videoLink: "https://youtu.be/qSuv7PIq_2I?si=C81S0FRbTT8ScDZ1",
  },
  {
    image: "/Al Naseem/WhatsApp Image 2025-04-07 at 16.26.52.jpeg",
    title: "التزامنا نحو التنمية المستدامة",
    subtitle: "نحترم البيئة ونشجع الابتكار",
    description:
      "من خلال تقنيات البناء الخضراء وتحسين كفاءة استهلاك الطاقة، نقدم حلولاً مبتكرة لمواكبة السوق العقاري.",
    buttonText: "اعرف المزيد",
    videoText: "مشاريع مستدامة",
    pageLink: "/projects",
    videoLink: "https://youtu.be/lhPS0pN3daU?si=KsVqkBUrMDUMBJk5",
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

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  const openVideo = (link) => {
    const embedLink = link
      .replace("https://youtu.be/", "https://www.youtube.com/embed/")
      .split("?")[0];
    setCurrentVideoLink(embedLink);
    setIsVideoOpen(true);
  };

  return (
    <section className="relative h-screen overflow-hidden font-sans">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ${
            idx === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-burdaBold text-white mb-4 sm:mb-6 leading-snug">
                {slide.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-[#9e1915] font-burdaMedium mb-3">
                {slide.subtitle}
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 font-burdaLight mb-5 sm:mb-6 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href={slide.pageLink} passHref>
                  <Button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#9e1915] px-6 sm:px-8 py-3 sm:py-4 text-white transition-all duration-300 ease-in-out hover:bg-[#e0423d] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9e1915]">
                    <span className="relative z-10 flex items-center">
                      {slide.buttonText}
                      <ArrowLeft className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:-translate-x-1" />
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-10" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="hidden lg:inline-flex group relative items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white hover:text-[#9e1915] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  onClick={() => openVideo(slide.videoLink)}
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    {slide.videoText}
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-10" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="hidden md:flex items-center justify-center absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-white/20 backdrop-blur-md rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg transition-all duration-300 ease-in-out"
        onClick={prevSlide}
        aria-label="السابق"
      >
        <ChevronLeft className="w-6 h-6 transition-transform duration-300 hover:-translate-x-1" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="hidden md:flex items-center justify-center absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-white/20 backdrop-blur-md rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg transition-all duration-300 ease-in-out"
        onClick={nextSlide}
        aria-label="التالي"
      >
        <ChevronRight className="w-6 h-6 transition-transform duration-300 hover:translate-x-1" />
      </Button>

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-lg sm:max-w-3xl bg-black rounded-lg p-4">
            <button
              className="absolute top-2 right-2 text-white hover:text-red-500 transition-colors duration-300"
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
