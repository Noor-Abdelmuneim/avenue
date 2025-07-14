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
      image:
        "https://i.pinimg.com/1200x/f8/6a/82/f86a825479ac98f0b1040ea80f0b5ec5.jpg",
    },
    {
      title: "استشارات المستثمرين",
      description:
        "نقدم استشارات عقارية واستثمارية مبنية على المعرفة والخبرة لضمان قرارات مدروسة ونتائج مضمونة.",
      features: ["استشارات عقارية", "إدارة المخاطر", "تحليل جدوى"],
      image:
        "https://i.pinimg.com/736x/37/39/e5/3739e5fa57344c0d7f44e9854b525473.jpg",
    },
    {
      title: "التخطيط التسويقي",
      description:
        "نقوم بوضع خطط تسويقية مبتكرة لجذب العملاء والمستثمرين وضمان نجاح المشاريع.",
      features: ["خطط تسويق", "استراتيجيات رقمية", "حملات مستهدفة"],
      image:
        "https://i.pinimg.com/1200x/2a/33/c7/2a33c7347de60d0c65be83a72c4495be.jpg",
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
      image:
        "https://i.pinimg.com/736x/9c/7a/3a/9c7a3a5a0b27ce38ef9f99260836aa28.jpg",
    },
  ];

  return (
    <section className="md:py-14 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 font-snd">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-lg font-burdaMedium mb-4">
            خدماتنا
          </div>
          <h2 className="text-4xl md:text-5xl font-burdaBold text-gray-900 mb-4">
            حلول عقارية واستثمارية متكاملة
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 font-burdaLight max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة من الخدمات التي تغطي مختلف مراحل الاستثمار والتطوير
            العقاري، بتوجيه من فريق محترف وخبرة تمتد لسنوات في السوق العراقي.
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
                <h3 className="text-2xl font-burdaBold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 font-burdaLight text-lg md:text-2xl">{service.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    الخدمات المتضمنة:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="w-2 h-2 bg-[#9e1915] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/what-we-do">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-[#9e1915] hover:text-[#9e1915] font-semibold"
                  >
                    اكتشف المزيد
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
