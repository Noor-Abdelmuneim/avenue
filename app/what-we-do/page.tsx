import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Building,
  TrendingUp,
  Users,
  Home,
  Hotel,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Award,
  Zap,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />

      {/* Spacer for fixed header */}
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
            <span className="text-[#9e1915] font-medium">ما نقوم به</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="font-snd relative h-[60vh] bg-gradient-to-r from-[#9e1915] to-[#2d5a87] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/736x/6a/5f/94/6a5f9423f4d61bbf677e7d057c50713f.jpg"
            alt="What We Do"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#9e1915]/80 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ما نقوم به
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              نقدم حلولاً شاملة ومتكاملة في قطاعات التطوير العقاري والاستثمار
              والضيافة والتعليم
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="font-snd container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-gray-600 font-semibold mb-4 text-lg">
              خدماتنا
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#9e1915] mb-6">
              مجالات عملنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نعمل في عدة قطاعات حيوية لنقدم حلولاً متكاملة تلبي احتياجات السوق
              المتنوعة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real Estate Development */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#9e1915] to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#9e1915] mb-4">
                  التطوير العقاري
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  تطوير مشاريع سكنية وتجارية متكاملة تلبي أعلى معايير الجودة
                  والاستدامة في أفضل مواقع دبي
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>مجتمعات سكنية متكاملة</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>أبراج سكنية فاخرة</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>مراكز تجارية</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Investment */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-[#c53030] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#9e1915] mb-4">
                  الاستثمار العقاري
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  فرص استثمارية متنوعة في القطاع العقاري مع عوائد مجزية ومخاطر
                  محسوبة
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>صناديق الاستثمار العقاري</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>الاستثمار المباشر</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>الشراكات الاستراتيجية</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Asset Management */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-[#c53030]  rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#9e1915] mb-4">
                  إدارة الأصول
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  خدمات إدارة شاملة للأصول العقارية لضمان أقصى عائد وقيمة مضافة
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>إدارة المحافظ العقارية</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>خدمات الصيانة</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>إدارة الإيجارات</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Hospitality */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-[#c53030]  rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Hotel className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#9e1915] mb-4">
                  الضيافة والفنادق
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  تطوير وإدارة مشاريع الضيافة الفاخرة التي تقدم تجارب استثنائية
                  للضيوف
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>فنادق 5 نجوم</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>منتجعات سياحية</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>مراكز المؤتمرات</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-[#c53030]  rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#9e1915] mb-4">
                  التعليم
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  تطوير مؤسسات تعليمية عالمية المستوى تساهم في بناء أجيال
                  المستقبل
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>مدارس دولية</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>جامعات ومعاهد</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>مراكز التدريب</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Retail */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#9e1915] to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#9e1915] mb-4">
                  التجارة والتسوق
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  تطوير مراكز تجارية ومولات عصرية تلبي احتياجات المجتمع المحلي
                  والسياح
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>مولات تجارية</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>مراكز التسوق المجتمعية</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>أسواق متخصصة</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="font-snd container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-gray-600 font-semibold mb-4 text-lg">
              منهجيتنا
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#9e1915] mb-6">
              كيف نعمل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع منهجية علمية ومدروسة في جميع مشاريعنا لضمان تحقيق أفضل
              النتائج
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9e1915] to-[#2d5a87] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  1
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#9e1915] to-[#2d5a87] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#9e1915] mb-4">
                  التخطيط والدراسة
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  دراسة شاملة للسوق والموقع ووضع خطة استراتيجية مفصلة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9e1915] to-[#2d5a87] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  2
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-[#c53030] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#9e1915] mb-4">
                  التصميم والتطوير
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  تصميم مبتكر يجمع بين الجمال والوظائف العملية والاستدامة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9e1915] to-[#2d5a87] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  3
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-[#c53030] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#9e1915] mb-4">
                  التنفيذ والبناء
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  تنفيذ المشروع وفقاً لأعلى معايير الجودة والسلامة والمواعيد
                  المحددة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9e1915] to-[#2d5a87] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  4
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-[#c53030] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#9e1915] mb-4">
                  التسليم والمتابعة
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  تسليم المشروع وتقديم خدمات ما بعد البيع والصيانة المستمرة
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="font-snd container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-gray-600 font-semibold mb-4 text-lg">
              مشاريعنا المميزة
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#9e1915] mb-6">
              أعمالنا المتميزة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة من أبرز مشاريعنا التي تعكس التزامنا بالجودة والابتكار
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg"
                  alt="Bloom Gardens"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1">
                  مكتمل
                </Badge>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">بلوم جاردنز</h3>
                  <p className="text-sm opacity-90">
                    مجتمع سكني متكامل - دبي لاند
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span>500 وحدة سكنية</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>دبي لاند</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  مجتمع سكني متكامل يضم فلل وشقق فاخرة مع مرافق ترفيهية شاملة
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(4.9/5)</span>
                </div>
                <Button className="w-full bg-[#9e1915] hover:bg-[#2d5a87] text-white">
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg"
                  alt="Bloom Heights"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1">
                  تحت الإنشاء
                </Badge>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">بلوم هايتس</h3>
                  <p className="text-sm opacity-90">
                    أبراج سكنية فاخرة - وسط دبي
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>45 طابق</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>وسط دبي</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  أبراج سكنية فاخرة مع إطلالات بانورامية على أفق دبي
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gray-600 h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">65%</span>
                </div>
                <Button className="w-full bg-[#9e1915] hover:bg-[#2d5a87] text-white">
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/a4/7d/af/a47dafdcc8dd1c222985aa9c25152f11.jpg"
                  alt="Bloom Marina"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-[#9e1915] text-white px-3 py-1">
                  قريباً
                </Badge>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">بلوم مارينا</h3>
                  <p className="text-sm opacity-90">واجهة بحرية - دبي مارينا</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span>300 وحدة</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>دبي مارينا</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  وحدات سكنية فاخرة على الواجهة البحرية مع مرافق حصرية
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">
                    حائز على جائزة أفضل تصميم
                  </span>
                </div>
                <Button className="w-full bg-[#9e1915] hover:bg-[#2d5a87] text-white">
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#9e1915] hover:bg-[#2d5a87] text-white px-8 py-4 text-lg font-medium rounded-lg">
              عرض جميع المشاريع
              <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="font-snd py-20 bg-gradient-to-r from-[#9e1915] via-gray-600 to-[#9e1915] text-white">
        <div className="font-snd absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            هل لديك مشروع في ذهنك؟
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            دعنا نساعدك في تحويل رؤيتك إلى واقع من خلال خبرتنا الواسعة وفريقنا
            المتخصص
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button className="bg-[#c53030] hover:bg-gray-600 text-white px-10 py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                ابدأ مشروعك معنا
                <Briefcase className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <a href="/AVENUE Real Estate.pdf" download>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#9e1915] px-10 py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                تحميل البروشور
                <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
