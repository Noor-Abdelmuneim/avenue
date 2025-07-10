"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, CheckCircle } from "lucide-react";
const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 font-snd">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <Image
              src="https://i.pinimg.com/736x/3f/7b/0a/3f7b0a3b789701bf145f22d2095a3820.jpg"
              alt="Avenue Real Estate"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-8 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 bg-[#9e1915] rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-burdaBold text-gray-900 text-base">
                    رؤيتنا
                  </h4>
                  <p className="text-lg font-burdaLight text-gray-600 leading-snug">
                    المطور العقاري الأكثر ثقة وأمانًا
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-600 font-burdaLight">
                نهدف إلى بناء مجتمعات سكنية متميزة وتطوير عمراني مبتكر يلبي
                احتياجات بلدنا.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-lg font-burdaMedium mb-6">
              من نحن
            </span>
            <h2 className="text-3xl md:text-5xl font-burdaBold text-gray-900 leading-snug mb-6">
              أبراج الجادة (Avenue)
              <span className="block text-[#9e1915] mt-2">
                خبراء في التطوير العقاري
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-5 leading-relaxed font-burdaLight">
              تأسست شركتنا في عام 2019، ومنذ ذلك الحين نسعى جاهدين لتقديم
              استشارات عقارية موثوقة ومبنية على فهم عميق للسوق العراقي وخبرة
              واسعة في المجال.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-burdaLight">
              نحرص على تقديم حلول مبتكرة، واستراتيجيات فعالة تحقق أهداف عملائنا
              وتعزز من جودة مشاريعهم العقارية.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {[
                ["فريق متخصص", "نخبة من المحترفين بخبرة تتجاوز 10 سنوات"],
                ["استشارات مهنية", "توجيه دقيق لاتخاذ قرارات استثمارية ناجحة"],
                ["نجاحات مستمرة", "سجل حافل بإنجازات مع عملائنا"],
                ["خدمة موثوقة", "حرص دائم على الجودة والشفافية"],
              ].map(([title, desc], idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#9e1915] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {title}
                    </div>
                    <div className="text-sm text-gray-600">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/about">
                <Button className="bg-[#9e1915] hover:bg-[#cd3c37] text-white px-7 md:px-8 py-3 rounded-full flex items-center">
                  <ArrowLeft className="w-5 h-5" />
                  تعرف علينا أكثر
                </Button>
              </a>

              <a href="/AVENUE Real Estate.pdf" download>
                <Button
                  variant="outline"
                  className="border-2 border-[#9e1915] text-[#9e1915] hover:bg-[#9e1915] hover:text-white px-10 md:px-8 py-3 rounded-full"
                >
                  تحميل البروفايل
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
