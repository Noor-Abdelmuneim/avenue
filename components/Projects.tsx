"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowLeft } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "مجمع نسيم السكني",
      category: "مشروع سكني",
      location: "بغداد، العراق",
      status: "مكتمل",
      area: "50,000 م²",
      units: "200 وحدة",
      image: "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
      description:
        "مجمع سكني متكامل يوفر بيئة عصرية وآمنة للعائلات مع كافة الخدمات الأساسية والترفيهية.",
      features: ["مساحات خضراء", "موقف سيارات", "أمن 24/7", "مسبح", "منطقة لعب أطفال"],
    },
    {
      title: "برج الأعمال الذكي",
      category: "مشروع تجاري",
      location: "أربيل، العراق",
      status: "قيد التنفيذ",
      area: "75,000 م²",
      units: "150 مكتب",
      image: "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
      description:
        "برج إداري حديث مصمم وفق أحدث المعايير الذكية لتلبية احتياجات الأعمال المتطورة.",
      features: ["قاعات اجتماعات", "تكييف مركزي", "مطاعم", "مواقف طوابق متعددة"],
    },
    {
      title: "مجمع المكاتب الإدارية",
      category: "مشروع إداري",
      location: "البصرة، العراق",
      status: "مكتمل",
      area: "30,000 م²",
      units: "80 مكتب",
      image: "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
      description:
        "مجمع إداري يوفر بيئة عمل مثالية ومجهزة بأحدث وسائل التكنولوجيا والتسهيلات.",
      features: ["تكنولوجيا حديثة", "مناطق استراحة", "كافيتيريا", "شبكات عالية السرعة"],
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 font-snd">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-sm font-medium mb-4">
            مشاريعنا
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            مشاريع مبتكرة تعكس طموحنا
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            في أفينيو، نركز على تطوير مشاريع عقارية متميزة تعزز من جودة الحياة وتحقق استثمارًا ناجحًا ومستدامًا.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition duration-500 rounded-2xl"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <div className="bg-[#9e1915] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "مكتمل"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">المساحة:</span>
                    <div className="font-semibold text-gray-900">{project.area}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">الوحدات:</span>
                    <div className="font-semibold text-gray-900">{project.units}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">المرافق:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-[#9e1915] hover:text-[#9e1915] font-semibold"
                >
                  عرض تفاصيل المشروع
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        
        <div className="text-center mt-12">
          <a href="/projects">
          <Button className="bg-[#9e1915] hover:bg-[#e8251e] text-white px-8 py-3 rounded-full">
            عرض جميع المشاريع
            <ArrowLeft className="w-5 h-5 mr-3" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
