"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Eye,
  Target,
  Shield,
  Star,
  Heart,
  TrendingUp,
  Users,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <div className="h-1 md:h-5" />

      <div className="bg-gray-50 py-4 font-snd">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-2xl">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#9e1915] transition"
            >
              الرئيسية
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
            <span className="text-[#9e1915] font-burdaMedium">من نحن</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#9e1915] to-[#2d5a87] overflow-hidden">
        <Image
          src="https://i.pinimg.com/736x/6a/5f/94/6a5f9423f4d61bbf677e7d057c50713f.jpg"
          alt="عن أفينيو"
          fill
          className="object-cover opacity-20 absolute inset-0"
        />
        <div className="font-snd absolute inset-0 bg-gradient-to-r from-[#9e1915]/80 to-transparent " />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-burdaBold mb-6">من نحن</h1>
            <p
              className="text-xl md:text-3xl font-burdaLight leading-relaxed"
            >
              خبرة عراقية رائدة في الاستثمار والتطوير العقاري منذ عام 2019
            </p>
          </div>
        </div>
      </section>

      {/* قصتنا */}
      <section className="py-20">
        <div className="font-snd container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#e53e3e] font-semibold mb-4 text-lg">
                قصتنا
              </div>
              <h2 className="text-4xl md:text-5xl font-burdaBold text-[#9e1915] mb-6">
                من العراق إلى المستقبل
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-burdaLight mb-6 leading-relaxed">
                تأسست شركة أفينيو للاستثمار والتطوير العقاري في عام 2019، ومنذ
                انطلاقتها حققت الشركة نموًا ملحوظًا في سوق العقارات العراقي من
                خلال تقديم خدمات استشارية متكاملة ومشاريع تطوير عقاري نوعية.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-burdaLight mb-8 leading-relaxed">
                نحن نؤمن أن نجاحنا ينبع من فهمنا العميق للسوق المحلي، ورغبتنا
                الصادقة في تحسين جودة الحياة، وبناء مجتمعات متكاملة آمنة
                ومستدامة.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-burdaBold text-[#e53e3e] mb-2">
                    2019
                  </div>
                  <div className="text-gray-600">سنة التأسيس</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-burdaBold text-[#e53e3e] mb-2">
                    +10
                  </div>
                  <div className="text-gray-600">مشاريع ناجحة</div>
                </div>
              </div>
            </div>
            <div className="relative mx-auto">
              <Image
                src="https://i.pinimg.com/736x/07/9e/24/079e24438b5dc87aece9ac2f109adbbe.jpg"
                alt="Avenue Projects"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#9e1915] text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-burdaBold">ثقة وشراكة</div>
                <div className="text-sm">بخبرات محلية ورؤية عالمية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الرؤية والرسالة */}
      <section className="py-20 bg-gray-50">
        <div className="font-snd container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-[#e53e3e] font-semibold mb-4 text-lg">
              رؤيتنا ورسالتنا
            </div>
            <h2 className="text-4xl md:text-5xl font-burdaBold text-[#9e1915] mb-6">
              أسسنا الاستراتيجية
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-burdaLight max-w-3xl mx-auto">
              نلتزم بتقديم مشاريع نوعية واستشارات مهنية تنسجم مع أهداف عملائنا
              وتخدم التنمية المستدامة
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#9e1915] rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-burdaBold text-[#9e1915] mb-4">
                  رؤيتنا
                </h3>
                <p className="text-gray-700 font-burdaLight leading-relaxed text-xl md:text-2xl">
                  أن نكون المطور العقاري الأكثر ثقة في العراق والمنطقة، من خلال
                  توفير حلول عمرانية مبتكرة، تساهم في تحسين جودة الحياة.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#9e1915] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-burdaBold text-[#9e1915] mb-4">
                  رسالتنا
                </h3>
                <p className="text-gray-700 font-burdaLight leading-relaxed text-xl md:text-2xl">
                  تقديم خدمات تطوير واستثمار عقاري شاملة وموثوقة، ترتكز على
                  الابتكار، الجودة، وتحقيق رضا العملاء وتعزيز التنمية الوطنية.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* قيمنا */}
      <section className="py-20">
        <div className="font-snd container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-[#e53e3e] font-semibold mb-4 text-lg">
              قيمنا
            </div>
            <h2 className="text-4xl md:text-5xl font-burdaBold text-[#9e1915] mb-6">
              الركائز التي نؤمن بها
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield />,
                title: "النزاهة",
                desc: "نعمل بشفافية وصدق في كل تعاملاتنا",
              },
              {
                icon: <Star />,
                title: "التميز",
                desc: "نسعى للابتكار وتحقيق أعلى معايير الجودة",
              },
              {
                icon: <Heart />,
                title: "المسؤولية",
                desc: "نلتزم بالمجتمع ونسهم في تنميته",
              },
              {
                icon: <TrendingUp />,
                title: "الاستدامة",
                desc: "نراعي البيئة ونخطط للمستقبل",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#9e1915] to-gray-800 rounded-2xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-burdaBold text-[#9e1915] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-burdaLight text-xl md:text-2xl">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* فريق القيادة */}
      <section className="py-20 bg-gray-50">
        <div className="font-snd container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-[#e53e3e] font-semibold mb-4 text-lg">
              فريق القيادة
            </div>
            <h2 className="text-4xl md:text-5xl font-burdaBold text-[#9e1915] mb-6">
              قادة الرؤية
            </h2>
            <p className="text-xl md:text-2xl font-burdaLight text-gray-600 max-w-3xl mx-auto">
              يقودنا فريق يتمتع بخبرة واسعة ورؤية مستقبلية لبناء بيئة استثمارية
              رائدة في العراق والمنطقة
            </p>
          </div>

          {/* الرئيس ونائب الرئيس */}
          <div className="font-snd grid md:grid-cols-2 gap-8 mb-16">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <Image
                    src="/pre1.png"
                    alt="رئيس مجلس الإدارة"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                {/* <h3 className="text-xl font-burdaBold text-[#9e1915] mb-2">
                  أ. أحمد عبد الرزاق
                </h3> */}
                <p className="text-[#e53e3e] font-burdaMedium mb-4 text-xl md:text-2xl">
                  رئيس مجلس الإدارة
                </p>
                <p className="text-gray-600 font-burdaLight text-xl md:text-2xl leading-7">
                  نحن نؤمن بقوة بأن النجاح لا يقاس فقط بالأرقام والإنجازات,هذا
                  ما قاله رئيس مجلس الإدارة" بل أيضا بتأثيرنا الإيجابي على
                  مجتمعنا نحن ملتزمون بخلق قيمة مضافة لمجتمعنا من خلال مبادرات
                  اجتماعية تعكس قيمنا الإنسانية واهتمامنا بالشباب العراقي
                  وبالتنمية المستدامة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <Image
                    src="/pre2.png"
                    alt="نائب رئيس مجلس الإدارة"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                {/* <h3 className="text-xl font-burdaBold text-[#9e1915] mb-2">
                  د. سارة محمد كريم
                </h3> */}
                <p className="text-[#e53e3e] font-burdaMedium mb-4 text-xl md:text-2xl">
                  نائب رئيس مجلس الإدارة
                </p>
                <p className="text-gray-600 font-burdaLight text-xl md:text-2xl leading-7">
                  نعمل بجد لدعم المشاريع والمبادرات التي تساهم في تحسين جودة
                  الحياة سواء عبر المساهمة في التعليم وتطوير المهارات او من خلال
                  المشاركة في برامج بيئية تهدف الى الحفاظ على الموارد الطبيعية
                  وتعزيز الاستدامة . نعتبر ان مسؤوليتنا تمتد الى ما هو ابعد من
                  عملنا اليومي , حيث نحرص على ان تكون انشطتنا التجارية جزءا من
                  كل مشروع نشارك فيه وكل مبادرة ندعمها هي تجسيد لرؤيتنا في بناء
                  مجتمع اقوى واكثر ازدهارا . نحن نضع مصلحة المجتمع في قلب
                  استراتيجياتنا , ونعمل على ان تكون جهودنا مستدامة وذات تاثير
                  إيجابي دائم . من خلال التزامنا , نطمح الى احداث تغيير حقيقي
                  ينعكس على حياة الافراد ويسهم في نمو وتطور بلدنا الحبيب
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#9e1915] via-[#2d5a87] to-[#9e1915] text-white">
        <div className="font-snd container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-burdaBold mb-6">
            كن جزءًا من التغيير
          </h2>
          <p className="text-xl md:text-2xl font-burdaLight mb-10 max-w-3xl mx-auto">
            تواصل معنا اليوم وابدأ شراكتك الاستثمارية مع شركة أفينيو
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button className="bg-[#e53e3e] hover:bg-[#c53030] text-white text-lg px-8 py-4 rounded-full">
                تواصل معنا
                <MapPin className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#9e1915] px-8 py-4 text-lg rounded-full"
              >
                انضم لفريقنا
                <Users className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
