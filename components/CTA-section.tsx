"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-[#9e1915] to-slate-900 text-white relative overflow-hidden">
      {/* خلفية شفافة */}
      <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            هل أنت مستعد لتأخذ خطوتك الاستثمارية التالية؟
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed">
            تواصل معنا اليوم واكتشف كيف يمكن لأفينيو أن تساعدك في تحقيق أهدافك العقارية
            والاستثمارية من خلال حلول مبتكرة وخبرة راسخة.
          </p>

          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#9e1915] hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              احجز استشارتك الآن
              <ArrowLeft className="w-6 h-6 mr-3" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#9e1915] px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm bg-white/10"
            >
              تحميل البروفايل التعريفي
            </Button>
          </div>

          {/* معلومات التواصل */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <div className="font-semibold text-lg mb-1">اتصل بنا</div>
              <div className="text-gray-200 text-sm" dir="ltr">+964 770 123 4567</div>
            </div>
            <div>
              <Mail className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <div className="font-semibold text-lg mb-1">راسلنا</div>
              <div className="text-gray-200 text-sm">info@avenue-iq.com</div>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <div className="font-semibold text-lg mb-1">موقعنا</div>
              <div className="text-gray-200 text-sm">بغداد - العراق</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
