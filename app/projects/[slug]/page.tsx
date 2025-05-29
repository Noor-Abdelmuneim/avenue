"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  MapPin,
  Car,
  Waves,
  Calendar,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Dumbbell,
  Trees,
  Shield,
  Wifi,
  Coffee,
  Users,
} from "lucide-react";

const getProjectData = (slug: string) => {
  const projects: Record<string, any> = {
    "bloom-gardens": {
      id: 1,
      slug: "bloom-gardens",
      title: "بلوم جاردنز",
      type: "سكني",
      location: "دبي لاند",
      mainImage: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
      status: "متاح الآن",
      statusColor: "bg-green-500",
      priceFrom: "850,000",
      priceTo: "2,500,000",
      bedrooms: "1-3",
      bathrooms: "2-4",
      area: "120-350",
      completion: "2023",
      description:
        "بلوم جاردنز هو مجتمع سكني متكامل يقع في قلب دبي لاند، ويوفر أسلوب حياة فاخر وسط مساحات خضراء واسعة ومرافق ترفيهية متنوعة. يضم المشروع مجموعة من الفلل والشقق الفاخرة المصممة بأعلى معايير الجودة والرفاهية، مع تشطيبات راقية ومساحات داخلية وخارجية مدروسة بعناية.",
      longDescription: [
        "يتميز مشروع بلوم جاردنز بموقعه الاستراتيجي في دبي لاند، حيث يوفر سهولة الوصول إلى أهم المعالم والمرافق في دبي، مع الحفاظ على الخصوصية والهدوء الذي تبحث عنه العائلات.",
        "تم تصميم المشروع ليكون واحة خضراء في قلب المدينة، مع حدائق واسعة ومساحات مفتوحة تشكل أكثر من 40% من المساحة الإجمالية للمشروع، مما يوفر بيئة صحية ومريحة للسكان.",
        "تتنوع الوحدات السكنية في بلوم جاردنز بين شقق استوديو وشقق بغرفة نوم واحدة وغرفتين وثلاث غرف نوم، بالإضافة إلى فلل فاخرة بتصاميم مختلفة، لتلبية احتياجات مختلف العائلات والأفراد.",
        "جميع الوحدات مجهزة بأحدث التقنيات الذكية وأنظمة التكييف المركزية، مع مطابخ مجهزة بالكامل وأجهزة منزلية من أفضل العلامات التجارية العالمية.",
      ],
      features: [
        "تصاميم معمارية عصرية",
        "مساحات خضراء واسعة",
        "مسابح متعددة",
        "نادي صحي متكامل",
        "ملاعب رياضية",
        "مناطق لعب للأطفال",
        "مواقف سيارات مغطاة",
        "أمن وحراسة على مدار الساعة",
        "مركز تسوق داخلي",
        "مطاعم ومقاهي",
        "مدرسة دولية",
        "عيادة طبية",
      ],
      amenities: [
        { name: "مسابح", icon: Waves },
        { name: "نادي رياضي", icon: Dumbbell },
        { name: "حدائق", icon: Trees },
        { name: "أمن 24/7", icon: Shield },
        { name: "مواقف سيارات", icon: Car },
        { name: "إنترنت", icon: Wifi },
        { name: "مطاعم", icon: Coffee },
        { name: "نادي اجتماعي", icon: Users },
      ],
      gallery: [
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
      ],
      floorPlans: [
        {
          name: "شقة بغرفة نوم واحدة",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          area: "120",
          bedrooms: "1",
          bathrooms: "2",
        },
        {
          name: "شقة بغرفتي نوم",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          area: "180",
          bedrooms: "2",
          bathrooms: "3",
        },
        {
          name: "شقة بثلاث غرف نوم",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          area: "250",
          bedrooms: "3",
          bathrooms: "4",
        },
      ],
      locationData: {
        address: "دبي لاند، دبي، الإمارات العربية المتحدة",
        mapImage: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        nearbyPlaces: [
          { name: "مطار دبي الدولي", distance: "25 دقيقة" },
          { name: "داون تاون دبي", distance: "20 دقيقة" },
          { name: "مول الإمارات", distance: "15 دقيقة" },
          { name: "مدينة دبي الطبية", distance: "10 دقائق" },
        ],
      },
      similarProjects: [
        {
          id: 2,
          slug: "bloom-heights",
          title: "بلوم هايتس",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          location: "وسط دبي",
        },
        {
          id: 3,
          slug: "bloom-marina",
          title: "بلوم مارينا",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          location: "دبي مارينا",
        },
      ],
    },
    "bloom-heights": {
      id: 2,
      slug: "bloom-heights",
      title: "بلوم هايتس",
      type: "سكني",
      location: "وسط دبي",
      mainImage: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
      status: "قريباً",
      statusColor: "bg-orange-500",
      priceFrom: "1,200,000",
      priceTo: "3,500,000",
      bedrooms: "2-4",
      bathrooms: "2-5",
      area: "150-400",
      completion: "2025",
      description:
        "بلوم هايتس هو مشروع سكني فاخر يتكون من برجين سكنيين في وسط دبي، يوفر إطلالات بانورامية خلابة على أفق المدينة وبرج خليفة. يضم المشروع شققاً فاخرة بتصاميم عصرية ومساحات مختلفة، مع مرافق حصرية للسكان.",
      longDescription: [
        "يقع مشروع بلوم هايتس في قلب دبي، على مقربة من أهم المعالم السياحية والتجارية في المدينة، مما يجعله وجهة مثالية للسكن والاستثمار.",
        "يتكون المشروع من برجين سكنيين بارتفاع 45 طابقاً، مع تصميم معماري فريد يعكس الطابع العصري والفخامة التي تشتهر بها دبي.",
        "تتنوع الوحدات السكنية في بلوم هايتس بين شقق بغرفتين وثلاث وأربع غرف نوم، بالإضافة إلى بنتهاوس فاخرة في الطوابق العليا.",
        "جميع الوحدات مصممة بعناية فائقة مع الاهتمام بأدق التفاصيل، وتتميز بمساحات واسعة ونوافذ كبيرة توفر إطلالات خلابة على المدينة.",
      ],
      features: [
        "إطلالات بانورامية",
        "تشطيبات فاخرة",
        "مسبح لا نهائي",
        "سبا وجاكوزي",
        "صالة رياضية متطورة",
        "قاعة احتفالات",
        "حدائق معلقة",
        "خدمة الكونسيرج",
        "مواقف سيارات خاصة",
        "أمن وحراسة على مدار الساعة",
        "محلات تجارية",
        "مطاعم فاخرة",
      ],
      amenities: [
        { name: "مسبح لا نهائي", icon: Waves },
        { name: "نادي رياضي", icon: Dumbbell },
        { name: "حدائق معلقة", icon: Trees },
        { name: "أمن 24/7", icon: Shield },
        { name: "مواقف سيارات", icon: Car },
        { name: "إنترنت", icon: Wifi },
        { name: "مطاعم", icon: Coffee },
        { name: "نادي اجتماعي", icon: Users },
      ],
      gallery: [
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
      ],
      floorPlans: [
        {
          name: "شقة بغرفتي نوم",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          area: "150",
          bedrooms: "2",
          bathrooms: "2",
        },
        {
          name: "شقة بثلاث غرف نوم",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          area: "220",
          bedrooms: "3",
          bathrooms: "3",
        },
        {
          name: "شقة بأربع غرف نوم",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          area: "350",
          bedrooms: "4",
          bathrooms: "5",
        },
      ],
      locationData: {
        address: "وسط دبي، دبي، الإمارات العربية المتحدة",
        mapImage: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
        nearbyPlaces: [
          { name: "برج خليفة", distance: "5 دقائق" },
          { name: "دبي مول", distance: "7 دقائق" },
          { name: "مطار دبي الدولي", distance: "15 دقيقة" },
          { name: "مركز دبي المالي العالمي", distance: "10 دقائق" },
        ],
      },
      similarProjects: [
        {
          id: 1,
          slug: "bloom-gardens",
          title: "بلوم جاردنز",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          location: "دبي لاند",
        },
        {
          id: 3,
          slug: "bloom-marina",
          title: "بلوم مارينا",
          image: "https://i.pinimg.com/736x/cc/f0/e1/ccf0e1b50a84c0a0e9895c2e950df05f.jpg",
          location: "دبي مارينا",
        },
      ],
    },
  };

  return projects[slug] || null;
};

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const project = getProjectData(slug);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  if (!project || !project.locationData) {
    return (
      <div className="font-snd min-h-screen bg-white flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1a365d] mb-4">
            المشروع غير موجود
          </h1>
          <p className="text-gray-600 mb-6">
            عذراً، لم نتمكن من العثور على المشروع المطلوب.
          </p>
          <Link href="/projects">
            <Button className="bg-[#1a365d] hover:bg-[#2d5a87] text-white">
              العودة إلى المشاريع
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />

      {/* Spacer for fixed Navbar */}
      <div className="h-1 md:h-5"></div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="font-snd container mx-auto px-4">
          <nav className="flex items-center gap-2 text-2xl">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#9e1915] transition"
            >
              الرئيسية
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
            <Link
              href="/projects"
              className="text-gray-600 hover:text-[#1a365d] transition-colors"
            >
              مشاريعنا
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
            <span className="text-[#9e1915] font-medium">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="font-snd relative h-[80vh] bg-gradient-to-r from-[#1a365d] to-[#2d5a87] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.mainImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <Badge
              className={`${project.statusColor} text-white mb-4 text-sm px-3 py-1`}
            >
              {project.status}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-xl opacity-90">{project.location}</span>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-6">
              {project.bedrooms && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm opacity-80">غرف النوم</div>
                  <div className="text-2xl font-bold">{project.bedrooms}</div>
                </div>
              )}
              {project.area && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm opacity-80">المساحة</div>
                  <div className="text-2xl font-bold">{project.area} متر²</div>
                </div>
              )}
              {project.completion && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm opacity-80">تاريخ الإنجاز</div>
                  <div className="text-2xl font-bold">{project.completion}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white">
        {/* Project Overview */}
        <section className="py-16">
          <div className="font-snd container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-3 mx-auto">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
                    نظرة عامة
                  </h2>
                  <div className="space-y-4">
                    {project.longDescription &&
                      project.longDescription.map(
                        (paragraph: string, index: number) => (
                          <p
                            key={index}
                            className="text-lg text-gray-700 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
                    المميزات
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features &&
                      project.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#e53e3e]" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-gray-50">
          <div className="font-snd container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
                المرافق والخدمات
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مجموعة متنوعة من المرافق والخدمات عالية الجودة لضمان راحة
                ورفاهية السكان
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.amenities &&
                project.amenities.map((amenity: any, index: number) => (
                  <div key={index} className="text-center group">
                    <div className="w-24 h-24 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1a365d] transition-all duration-300 group-hover:scale-110">
                      <amenity.icon className="w-12 h-12 text-[#1a365d] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                      {amenity.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Gallery Only Section */}
        <section className="py-20">
          <div className="font-snd container mx-auto px-4">
            <div className="w-full">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6 text-center">
                  معرض الصور
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-8">
                  استكشف جمال وفخامة مشروع {project.title} من خلال هذه الصور
                </p>
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <>
                  <div className="relative mb-6">
                    <div className="relative h-[60vh] overflow-hidden rounded-xl">
                      <Image
                        src={
                          project.gallery[activeGalleryImage] ||
                          "/placeholder.svg"
                        }
                        alt={`${project.title} - صورة ${
                          activeGalleryImage + 1
                        }`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-12 h-12"
                      onClick={() =>
                        setActiveGalleryImage((prev) =>
                          prev === 0 ? project.gallery.length - 1 : prev - 1
                        )
                      }
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-12 h-12"
                      onClick={() =>
                        setActiveGalleryImage((prev) =>
                          prev === project.gallery.length - 1 ? 0 : prev + 1
                        )
                      }
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-6 gap-4">
                    {project.gallery.map((image: string, index: number) => (
                      <div
                        key={index}
                        className={`relative h-24 overflow-hidden rounded-lg cursor-pointer ${
                          activeGalleryImage === index
                            ? "ring-4 ring-[#e53e3e]"
                            : ""
                        }`}
                        onClick={() => setActiveGalleryImage(index)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - صورة مصغرة ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 bg-gray-50">
          <div className="font-snd container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
                الموقع
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                يتمتع {project.title} بموقع استراتيجي يوفر سهولة الوصول إلى أهم
                المعالم والمرافق في دبي
              </p>
            </div>

            <div className="grid  gap-8">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden border-0 shadow-lg h-full">
                  <div className="relative h-full min-h-[400px]">
                    <Image
                      src={project.locationData?.mapImage || "/placeholder.svg"}
                      alt={`خريطة موقع ${project.title}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1a365d]/10 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                        <MapPin className="w-8 h-8 text-[#e53e3e] mx-auto mb-2" />
                        <p className="font-bold text-[#1a365d]">
                          {project.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {project.locationData?.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
