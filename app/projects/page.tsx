import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  Search,
  MapPin,
  Home,
  Building,
  Filter,
  ArrowRight,
  Calendar,
} from "lucide-react";

export default function ProjectsPage() {
  // Project categories
  const categories = [
    { id: "all", name: "جميع المشاريع" },
    { id: "residential", name: "سكني" },
    { id: "commercial", name: "تجاري" },
    { id: "mixed", name: "متعدد الاستخدامات" },
    { id: "hospitality", name: "ضيافة" },
  ];

  // Featured projects
  const featuredProjects = [
    {
      id: 1,
      slug: "bloom-gardens",
      title: "بلوم جاردنز",
      type: "سكني",
      location: "دبي لاند",
      image: "/Bloom/1.jpg",
      status: "متاح الآن",
      statusColor: "bg-green-500",
      priceFrom: "850,000",
      bedrooms: "1-3",
      description:
        "مجتمع سكني متكامل يضم فلل وشقق فاخرة مع حدائق خضراء واسعة ومرافق ترفيهية متنوعة",
      featured: true,
    },
    {
      id: 2,
      slug: "bloom-heights",
      title: "بلوم هايتس",
      type: "سكني",
      location: "وسط دبي",
      image:
        "/Al Naseem/WhatsApp Image 2025-04-07 at 16.22.52.jpeg",
      status: "قريباً",
      statusColor: "bg-orange-500",
      priceFrom: "1,200,000",
      bedrooms: "2-4",
      description:
        "أبراج سكنية فاخرة تضم شقق عصرية مع إطلالات خلابة على أفق دبي ومرافق حصرية",
      featured: true,
    },
  ];

  // All projects
  const allProjects = [
    ...featuredProjects,
    {
      id: 3,
      slug: "bloom-marina",
      title: "بلوم مارينا",
      type: "سكني",
      location: "دبي مارينا",
      image:
        "/Al Naseem/WhatsApp Image 2025-04-07 at 16.26.52.jpeg",
      status: "تحت الإنشاء",
      statusColor: "bg-blue-500",
      priceFrom: "1,500,000",
      bedrooms: "1-4",
      description:
        "وحدات سكنية فاخرة على الواجهة البحرية مع مرافق ترفيهية حصرية ومارينا خاصة",
    },
    {
      id: 4,
      slug: "bloom-towers",
      title: "بلوم تاورز",
      type: "سكني",
      location: "الخليج التجاري",
      image:
        "/Bloom/800....2.png",
      status: "متاح الآن",
      statusColor: "bg-green-500",
      priceFrom: "950,000",
      bedrooms: "1-3",
      description:
        "أبراج سكنية عصرية في قلب دبي مع إطلالات بانورامية ومرافق متكاملة",
    },
    {
      id: 5,
      slug: "bloom-business-center",
      title: "بلوم بزنس سنتر",
      type: "تجاري",
      location: "شارع الشيخ زايد",
      image:
        "/Al Naseem/WhatsApp Image 2025-04-07 at 16.32.47.jpeg",
      status: "متاح الآن",
      statusColor: "bg-green-500",
      priceFrom: "1,800,000",
      bedrooms: null,
      description:
        "مجمع مكاتب تجارية فاخرة في موقع استراتيجي مع خدمات متكاملة للشركات",
    },
    {
      id: 6,
      slug: "bloom-residences",
      title: "بلوم ريزيدنسز",
      type: "سكني",
      location: "جميرا فيليج سيركل",
      image:
        "/Bloom/1000 interior (1).png",
      status: "قريباً",
      statusColor: "bg-orange-500",
      priceFrom: "1,100,000",
      bedrooms: "2-3",
      description:
        "شقق سكنية فاخرة مع تصاميم عصرية ومساحات واسعة ومرافق متكاملة",
    },
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />

      {/* Spacer for fixed Navbar */}
      <div className="h-1 md:h-5"></div>

      {/* Breadcrumb */}
      <div className="font-snd bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-2xl">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#9e1915] transition"
            >
              الرئيسية
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
            <span className="text-[#9e1915] font-burdaMedium">مشاريعنا</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="font-snd relative h-[60vh] bg-gradient-to-r from-[#1a365d] to-[#2d5a87] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Bloom/1.jpg"
            alt="مشاريع بلوم هولدنغ"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-burdaBold mb-6 leading-tight">
              مشاريعنا
            </h1>
            <p className="text-xl md:text-2xl font-burdaLight leading-relaxed opacity-90">
              اكتشف مجموعة متنوعة من المشاريع السكنية والتجارية الفاخرة في أفضل
              مواقع العراق
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white">
        {/* Featured Projects */}
        <section className="py-16">
          <div className="font-snd container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-burdaBold text-[#1a365d] mb-4">
                المشاريع المميزة
              </h2>
              <div className="w-20 h-1 bg-[#e53e3e]"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <Badge
                      className={`absolute top-4 right-4 ${project.statusColor} text-white`}
                    >
                      {project.status}
                    </Badge>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-burdaBold mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm opacity-90">
                          {project.location}
                        </span>
                      </div>
                      <p className="text-white/90 font-burdaLight mb-4 leading-relaxed text-xl md:text-2xl">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {project.bedrooms && (
                            <div className="flex items-center gap-1">
                              <Home className="w-4 h-4" />
                              <span className="text-sm">
                                {project.bedrooms} غرف نوم
                              </span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span className="text-sm">{project.type}</span>
                          </div>
                        </div>
                        <Link href={`/projects/${project.slug}`}>
                          <Button
                            size="sm"
                            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                          >
                            عرض التفاصيل
                            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="py-16 bg-gray-50">
          <div className="font-snd container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-burdaBold text-[#1a365d] mb-4">
                جميع المشاريع
              </h2>
              <div className="w-20 h-1 bg-[#e53e3e]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge
                      className={`absolute top-4 right-4 ${project.statusColor} text-white`}
                    >
                      {project.status}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-burdaBold mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm opacity-90">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      {project.bedrooms && (
                        <div className="flex items-center gap-1">
                          <Home className="w-4 h-4" />
                          <span>{project.bedrooms} غرف نوم</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span>{project.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 font-burdaLight mb-6 leading-relaxed line-clamp-2 text-xl md:text-2xl">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link href={`/projects/${project.slug}`}>
                        <Button className="bg-[#e53e3e] hover:bg-[#c53030] text-white">
                          عرض التفاصيل
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#9e1915] via-gray-600 to-[#9e1915] text-white">
          <div className="font-snd absolute inset-0 opacity-10"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-burdaBold mb-6">
              هل تبحث عن منزل أحلامك؟
            </h2>
            <p className="text-xl md:text-2xl font-burdaLight mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              فريقنا من الخبراء جاهز لمساعدتك في العثور على المشروع المثالي الذي
              يلبي احتياجاتك وتطلعاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact">
                <Button className="bg-[#e53e3e] hover:bg-[#c53030] text-white px-10 py-4 text-lg font-burdaMedium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  تواصل مع مستشار عقاري
                </Button>
              </a>
              <a href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1a365d] px-10 py-4 text-lg font-burdaMedium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  حجز موعد لزيارة المشاريع
                  <Calendar className="w-5 h-5 mr-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
