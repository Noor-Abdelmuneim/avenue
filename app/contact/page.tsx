"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Lock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [isMapActive, setIsMapActive] = useState(false);

  const handleMapClick = () => {
    setIsMapActive(true);
  };

  const handleMapLock = () => {
    setIsMapActive(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectInterest: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectInterest: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "العنوان",
      details: [
        "القادسية، شارع مجمع الوزراء، قرب الصابئة المندائية",
        "بغداد، العراق",
      ],
      color: "from-gray-600 to-[#9e1915]",
    },
    {
      icon: Phone,
      title: "الهاتف",
      details: ["+964 770 123 4567", "+964 781 456 7890"],
      color: "from-[#1a365d] to-[#9e1915]",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@avenue-iq.com", "support@avenue-iq.com"],
      color: "from-[#1a365d] to-[#9e1915]",
    },
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <div className="h-1 md:h-5"></div>

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
            <span className="text-[#9e1915] font-burdaMedium">اتصل بنا</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="font-snd relative h-[50vh] bg-gradient-to-r from-[#1a365d] to-[#2d5a87] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Bloom/1.jpg"
            alt="اتصل بنا - بلوم هولدنغ"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-burdaBold mb-6 leading-tight">
              اتصل بنا
            </h1>
            <p className="text-xl md:text-2xl font-burdaLight leading-relaxed opacity-90">
              نحن هنا لمساعدتك في العثور على منزل أحلامك أو الإجابة على
              استفساراتك
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white">
        {/* Contact Information */}
        <section className="py-16">
          <div className="font-snd container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-gray-600 font-semibold mb-4 text-lg">
                تواصل معنا
              </div>
              <h2 className="text-4xl md:text-5xl font-burdaBold text-[#9e1915] mb-6">
                كيف يمكنك الوصول إلينا
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-burdaLight max-w-3xl mx-auto">
                فريقنا المتخصص جاهز لمساعدتك في أي وقت عبر قنوات التواصل
                المختلفة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-burdaBold text-gray-600 mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-gray-600 font-burdaLight leading-relaxed text-xl md:text-2xl"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-8">
          <div className="font-snd container mx-auto px-4">
            <div className="grid gap-16">
              {/* Contact Form */}
              <div className="mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-burdaBold text-[#1a365d] mb-4">
                    أرسل لنا رسالة
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-600 font-burdaLight">
                    املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                  </p>
                </div>

                {isSubmitted ? (
                  <Card className="p-8 text-center border-0 shadow-lg bg-green-50">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-burdaBold text-green-700 mb-2">
                        تم إرسال رسالتك بنجاح!
                      </h3>
                      <p className="text-green-600 font-burdaLight text-xl md:text-2xl">
                        سنتواصل معك خلال 24 ساعة
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="p-8 border-0 shadow-lg">
                    <CardContent className="p-0">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label
                              htmlFor="name"
                              className="text-[#1a365d] font-burdaMedium mb-2 block"
                            >
                              الاسم الكامل *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="border-gray-300 focus:border-[#1a365d] focus:ring-[#1a365d]"
                              placeholder="أدخل اسمك الكامل"
                            />
                          </div>
                          <div>
                            <Label
                              htmlFor="email"
                              className="text-[#1a365d] font-burdaMedium mb-2 block"
                            >
                              البريد الإلكتروني *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="border-gray-300 focus:border-[#1a365d] focus:ring-[#1a365d]"
                              placeholder="أدخل بريدك الإلكتروني"
                            />
                          </div>
                        </div>

                        <div>
                          <Label
                            htmlFor="subject"
                            className="text-[#1a365d] font-burdaMedium mb-2 block"
                          >
                            الموضوع *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="border-gray-300 focus:border-[#1a365d] focus:ring-[#1a365d]"
                            placeholder="موضوع الرسالة"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="message"
                            className="text-[#1a365d] font-burdaMedium mb-2 block"
                          >
                            الرسالة *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="border-gray-300 focus:border-[#1a365d] focus:ring-[#1a365d]"
                            placeholder="اكتب رسالتك هنا..."
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gray-600 hover:bg-[#c53030] text-white py-3 text-lg font-burdaMedium rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          إرسال الرسالة
                          <Send className="w-5 h-5 mr-2" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* Map Embed */}
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-80">
                    {/* Iframe لخريطة Google */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d106730.15825456278!2d44.3557296!3d33.2843572!3m2!1i1024!2i768!4f13.1!2m1!1z2KPZgdmG2YrZiCDZhNmE2LnZgtin2LHYp9iq4oCt!5e0!3m2!1sen!2siq!4v1748429043225!5m2!1sen!2siq"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                    {/* Overlay محتوى الخريطة */}
                    {!isMapActive && (
                      <div
                        className="absolute inset-0 bg-[#1a365d]/20 flex items-center justify-center cursor-pointer transition-opacity duration-300"
                        onClick={handleMapClick}
                      >
                        <div className="text-center text-white">
                          <MapPin className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-xl md:text-2xl font-burdaLight">
                            موقعنا على الخريطة
                          </p>
                          <p className="text-lg md:text-xl opacity-90 font-burdaLight">
                            العراق بغداد
                          </p>
                          <p className="text-xl md:text-2xl mt-2 font-burdaLight">
                            (انقر لتفعيل الخريطة)
                          </p>
                        </div>
                      </div>
                    )}

                    {/* زر إعادة قفل الخريطة */}
                    {isMapActive && (
                      <button
                        onClick={handleMapLock}
                        className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-90 transition-all flex items-center gap-1"
                      >
                        <Lock className="w-4 h-4" />
                        قفل الخريطة
                      </button>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media and Follow Us */}
        {/* Social Media and Follow Us */}
        <section className="py-20 bg-gray-50">
          <div className="font-snd container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-gray-600 font-semibold mb-4 text-lg">
                تابعنا
              </div>
              <h2 className="text-3xl md:text-4xl font-burdaBold text-[#9e1915] mb-6">
                ابق على تواصل معنا
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-burdaLight max-w-3xl mx-auto">
                تابع آخر أخبارنا وتحديثاتنا عبر منصات التواصل الاجتماعي
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <Link
                href="https://www.facebook.com/avenuerealestateiq/about_contact_and_basic_info"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-8 h-8 text-white" />
              </Link>

              <Link
                href="https://www.instagram.com/avenuerealestateiq/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-r from-[#E4405F] to-[#F56040] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-8 h-8 text-white" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/avenuerealestateiq/?originalSubdomain=iq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#0A66C2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-8 h-8 text-white" />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCMk9f86fVXgqDr0AnTHdX1g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Youtube className="w-8 h-8 text-white" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
