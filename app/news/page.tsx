import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  Calendar,
  User,
  Eye,
  Share2,
  Search,
  Filter,
  ArrowRight,
  TrendingUp,
  Building,
  Award,
  Users,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function NewsPage() {
  const featuredNews = [
    {
      id: 1,
      title: "بلوم هولدنغ تطلق مشروع بلوم سيتي الجديد بقيمة 2 مليار درهم",
      excerpt:
        "مشروع سكني متكامل يضم 3000 وحدة سكنية في قلب دبي مع مرافق عالمية المستوى",
      image:
        "https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg",
      date: "15 يناير 2024",
      author: "فريق الأخبار",
      views: "2.5K",
      category: "مشاريع جديدة",
      featured: true,
    },
    {
      id: 2,
      title: "بلوم ليفينغ تحصل على جائزة أفضل مطور عقاري لعام 2024",
      excerpt: "تقديراً لالتزامها بالجودة والابتكار في مجال التطوير العقاري",
      image:
        "https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg",
      date: "10 يناير 2024",
      author: "إدارة التسويق",
      views: "1.8K",
      category: "جوائز وتكريم",
      featured: true,
    },
  ];

  const regularNews = [
    {
      id: 3,
      title: "افتتاح المرحلة الثانية من مشروع بلوم جاردنز",
      excerpt: "تسليم 500 وحدة سكنية جديدة مع مرافق ترفيهية متطورة",
      image:
        "https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg",
      date: "8 يناير 2024",
      author: "قسم المشاريع",
      views: "1.2K",
      category: "تطوير المشاريع",
    },
    {
      id: 4,
      title: "شراكة استراتيجية مع أفضل المقاولين العالميين",
      excerpt: "توقيع اتفاقيات جديدة لضمان أعلى معايير الجودة في التنفيذ",
      image:
        "https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg",
      date: "5 يناير 2024",
      author: "الإدارة التنفيذية",
      views: "950",
      category: "شراكات",
    },
    {
      id: 5,
      title: "بلوم هولدنغ تستثمر في التقنيات الذكية للمنازل",
      excerpt: "تطبيق أحدث تقنيات المنزل الذكي في جميع المشاريع الجديدة",
      image:
        "https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg",
      date: "2 يناير 2024",
      author: "قسم التطوير",
      views: "1.1K",
      category: "تقنية",
    },
    {
      id: 6,
      title: "إطلاق برنامج الاستدامة البيئية في جميع المشاريع",
      excerpt: "التزام بتقليل البصمة الكربونية وتطبيق معايير البناء الأخضر",
      image:
        "https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg",
      date: "28 ديسمبر 2023",
      author: "قسم الاستدامة",
      views: "800",
      category: "استدامة",
    },
    {
      id: 7,
      title: "نمو مبيعات بلوم ليفينغ بنسبة 40% في العام الماضي",
      excerpt: "أرقام قياسية جديدة تؤكد ثقة العملاء في جودة مشاريعنا",
      image:
        "https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg",
      date: "25 ديسمبر 2023",
      author: "قسم المبيعات",
      views: "1.5K",
      category: "نتائج مالية",
    },
    {
      id: 8,
      title: "افتتاح مركز خدمة العملاء الجديد في دبي مول",
      excerpt: "خدمات متطورة وفريق متخصص لتقديم أفضل تجربة للعملاء",
      image:
        "https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg",
      date: "20 ديسمبر 2023",
      author: "خدمة العملاء",
      views: "650",
      category: "خدمات",
    },
  ];

  const categories = [
    "جميع الأخبار",
    "مشاريع جديدة",
    "جوائز وتكريم",
    "تطوير المشاريع",
    "شراكات",
    "تقنية",
    "استدامة",
    "نتائج مالية",
    "خدمات",
  ];

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
            <span className="text-[#9e1915] font-medium">الأخبار</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="font-snd relative h-[50vh] bg-gradient-to-r from-[#9e1915] to-[#2d5a87] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/736x/6a/5f/94/6a5f9423f4d61bbf677e7d057c50713f.jpg"
            alt="أخبار بلوم هولدنغ"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#9e1915]/80 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              الأخبار
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              آخر الأخبار والتطورات من عالم بلوم هولدنغ
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white">
        {/* Featured News */}
        <section className="font-snd py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#9e1915] mb-4">
                الأخبار المميزة
              </h2>
              <div className="w-20 h-1 bg-[#9e1915]"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <Card
                  key={news.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-[#9e1915] text-white">
                      {news.category}
                    </Badge>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-3 leading-tight">
                        {news.title}
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{news.date}</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          اقرأ المزيد
                          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Regular News */}
        <section className="font-snd py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#9e1915] mb-4">
                آخر الأخبار
              </h2>
              <div className="w-20 h-1 bg-[#9e1915]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((news) => (
                <Card
                  key={news.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-[#9e1915] text-white text-xs">
                      {news.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#9e1915] mb-3 leading-tight group-hover:text-[#9e1915] transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{news.views}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#9e1915] rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs text-gray-600">
                          {news.author}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs hover:bg-[#9e1915] hover:text-white"
                      >
                        اقرأ المزيد
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="font-snd py-16 bg-gradient-to-r from-[#9e1915] to-[#2d5a87] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              اشترك في نشرتنا الإخبارية
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              احصل على آخر الأخبار والتحديثات من بلوم هولدنغ مباشرة في بريدك
              الإلكتروني
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/70"
              />
              <Button className="bg-[#9e1915] hover:bg-[#c53030] text-white px-6">
                اشترك
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16">
          <div className="font-snd container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9e1915] to-[#2d5a87] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#9e1915] mb-2">
                    150+
                  </div>
                  <div className="text-gray-600">خبر منشور</div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9e1915] to-[#c53030] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#9e1915] mb-2">
                    25+
                  </div>
                  <div className="text-gray-600">مشروع مغطى</div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#9e1915] mb-2">
                    10+
                  </div>
                  <div className="text-gray-600">جائزة وتكريم</div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#9e1915] mb-2">
                    50K+
                  </div>
                  <div className="text-gray-600">قارئ شهرياً</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
