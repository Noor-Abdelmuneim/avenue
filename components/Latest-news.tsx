"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Eye } from "lucide-react";
const LatestNews = () => {
  const news = [
    {
      title:
        "شركة ** توقع اتفاقية شراكة استراتيجية مع مجموعة الإمارات للاستثمار",
      date: "15 ديسمبر 2024",
      category: "أخبار الشركة",
      image:
        "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
      excerpt:
        "وقعت الشركة اتفاقية شراكة استراتيجية مع مجموعة الإمارات للاستثمار بهدف تطوير مشاريع عقارية جديدة بقيمة تزيد عن 500 مليون درهم...",
      readTime: "5 دقائق",
      views: "1,250",
    },
    {
      title: "إطلاق مشروع عقاري جديد في قلب دبي بقيمة 800 مليون درهم",
      date: "10 ديسمبر 2024",
      category: "مشاريع جديدة",
      image:
        "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
      excerpt:
        "أعلنت الشركة عن إطلاق مشروعها العقاري الجديد 'واحة دبي' الذي يضم 300 وحدة سكنية فاخرة ومرافق ترفيهية متكاملة...",
      readTime: "7 دقائق",
      views: "2,100",
    },
    {
      title: "حصول الشركة على جائزة أفضل شركة استثمارية في الإمارات لعام 2024",
      date: "5 ديسمبر 2024",
      category: "جوائز وتكريم",
      image:
        "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
      excerpt:
        "حصلت الشركة على جائزة أفضل شركة استثمارية في دولة الإمارات العربية المتحدة لعام 2024 من مؤسسة الشرق الأوسط للتميز...",
      readTime: "3 دقائق",
      views: "3,500",
    },
    {
      title: "افتتاح مكتب جديد في أبوظبي لتوسيع نطاق الخدمات",
      date: "1 ديسمبر 2024",
      category: "توسعات",
      image:
        "https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg",
      excerpt:
        "افتتحت الشركة مكتبها الجديد في أبوظبي كجزء من خطة التوسع الاستراتيجية لتقديم خدمات أفضل لعملائها في جميع أنحاء الدولة...",
      readTime: "4 دقائق",
      views: "1,800",
    },
  ];
  return (
    <>
      {/* News Section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-sm font-medium mb-6">
              الأخبار والفعاليات
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              آخر الأخبار والتطورات
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              تابع آخر أخبارنا وفعالياتنا وإنجازاتنا لتبقى على اطلاع دائم بأحدث
              تطوراتنا ومشاريعنا الجديدة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.map((article, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#9e1915] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <a href="/news">
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-[#9e1915] hover:text-blue-700 font-semibold"
                      >
                        اقرأ المزيد
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </a>
                    <span className="text-xs text-gray-500">
                      {article.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/news">
              <Button className="bg-[#9e1915] hover:bg-[#9e1915] text-white px-8 py-3 rounded-full">
                عرض جميع الأخبار
                <ArrowLeft className="w-5 h-5 mr-3" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
