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
    description: "نسعى جاهدين لتلبية متطلبات عملائنا بشكل فعال من خلال تقديم المشورة المهنية والتوجيه اللازم لمساعدتهم على اتخاذ قرارات مستنيرة وناجحة في مجال العقارات.",
    buttonText: "اكتشف المزيد",
    videoText: "شاهد الفيديو التعريفي",
    pageLink: "/about",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image: "https://i.pinimg.com/736x/28/01/83/280183b564e3c2c996dc0714153ee6ef.jpg",
    title: "رؤيتنا",
    subtitle: "نحو مجتمعات سكنية متميزة وتطوير عمراني مبتكر",
    description: "نسعى لأن نكون المطور العقاري الأكثر ثقة وأماناً، مع التركيز على الجودة العالية والموثوقية، وتقديم تجربة استثنائية في بناء المجتمعات السكنية وتطويرها.",
    buttonText: "تعرف على رؤيتنا",
    videoText: "رؤية وأهداف",
    pageLink: "/about",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image: "https://i.pinimg.com/736x/a5/56/e8/a556e8fc7c3146e625ebdb58d0fec548.jpg",
    title: "التزامنا نحو التنمية المستدامة",
    subtitle: "نحترم البيئة ونشجع الابتكار",
    description: "من خلال استخدام تقنيات البناء الخضراء وتحسين كفاءة استهلاك الطاقة والمياه، نحرص على تقديم حلول مبتكرة ومواكبة للتحولات في السوق العقاري.",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const openVideo = (videoLink) => {
    setCurrentVideoLink(videoLink);
    setIsVideoOpen(true);
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
              <div className="max-w-7xl mx-20">
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
                  <Link href={slide.pageLink} passHref>
                    <Button
                      size="lg"
                      className="bg-[#9e1915] hover:bg-[#e0423d] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center"
                    >
                      {slide.buttonText}
                      <ArrowLeft className="w-5 h-5 ml-3" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 flex items-center"
                    onClick={() => openVideo(slide.videoLink)}
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

      {/* أزرار التحكم */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm bg-black/20 rounded-full w-12 h-12"
        onClick={prevSlide}
        aria-label="السابق"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm bg-black/20 rounded-full w-12 h-12"
        onClick={nextSlide}
        aria-label="التالي"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* نافذة الفيديو */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-lg p-4">
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
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
