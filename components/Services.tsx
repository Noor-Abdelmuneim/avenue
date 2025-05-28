"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "تحليل السوق والاتجاهات",
      description:
        "نقدم تحليلات دقيقة تساعد المستثمرين على فهم التغيرات في السوق العقاري واستغلال الفرص بفعالية.",
      features: ["دراسات السوق", "تحليل الاتجاهات", "تحديد الفرص"],
      image: "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
    },
    {
      title: "استشارات المستثمرين",
      description:
        "نقدم استشارات عقارية واستثمارية مبنية على المعرفة والخبرة لضمان قرارات مدروسة ونتائج مضمونة.",
      features: ["استشارات عقارية", "إدارة المخاطر", "تحليل جدوى"],
      image: "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
    },
    {
      title: "التخطيط التسويقي",
      description:
        "نقوم بوضع خطط تسويقية مبتكرة لجذب العملاء والمستثمرين وضمان نجاح المشاريع.",
      features: ["خطط تسويق", "استراتيجيات رقمية", "حملات مستهدفة"],
      image: "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
    },
    {
      title: "التطوير التنظيمي",
      description:
        "نساعد الشركات العقارية على تحسين أدائها من خلال تطوير الهيكل الإداري والمهارات.",
      features: [
        "هيكلة إدارية",
        "تحسين الأداء",
        "تطوير المهارات",
        "خطط استراتيجية",
      ],
      image: "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-sm font-medium mb-4">
            خدماتنا
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            حلول عقارية واستثمارية متكاملة
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة من الخدمات التي تغطي مختلف مراحل الاستثمار والتطوير العقاري، بتوجيه من فريق محترف وخبرة تمتد لسنوات في السوق العراقي.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white hover:shadow-2xl shadow-md border-0 transition-all duration-500 rounded-2xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              </div>

              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    الخدمات المتضمنة:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-2 h-2 bg-[#9e1915] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-[#9e1915] hover:text-[#9e1915] font-semibold"
                >
                  اكتشف المزيد
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
