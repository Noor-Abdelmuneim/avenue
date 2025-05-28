import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ChevronRight, Clock, User, Eye, Search, Calendar } from "lucide-react"
import Header from "@/components/header"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-24"></div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#1a365d] transition-colors">
              الرئيسية
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
            <span className="text-[#1a365d] font-medium">الأخبار</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-[#1a365d] to-[#2d5a87] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=500&width=1600"
            alt="News"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">الأخبار</h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              تابع آخر أخبار بلوم هولدنغ ومشاريعنا الجديدة والتطورات في السوق العقاري
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="ابحث في الأخبار..."
                  className="pr-10 py-3 border-gray-300 focus:border-[#1a365d]"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="cursor-pointer hover:bg-[#1a365d] hover:text-white transition-colors">
                جميع الأخبار
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-[#1a365d] hover:text-white transition-colors">
                مشاريع جديدة
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-[#1a365d] hover:text-white transition-colors">
                جوائز
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-[#1a365d] hover:text-white transition-colors">
                شراكات
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-[#1a365d] hover:text-white transition-colors">
                فعاليات
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">الأخبار المميزة</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured Article */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Featured News"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-[#e53e3e] text-white px-3 py-1">
                  عاجل
                </Badge>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>20 ديسمبر 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>2,500 مشاهدة</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    بلوم هولدنغ تعلن عن إطلاق مشروع "بلوم سيتي" بقيمة 2 مليار درهم
                  </h3>
                  <p className="text-sm opacity-90">
                    أكبر مشروع سكني متكامل في تاريخ الشركة يضم 3000 وحدة سكنية ومرافق تجارية وترفيهية شاملة...
                  </p>
                </div>
              </div>
            </Card>

            {/* Secondary Featured Articles */}
            <div className="space-y-6">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0">
                <div className="flex gap-4 p-6">
                  <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=100&width=150"
                      alt="News 2"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>18 ديسمبر 2024</span>
                      <Badge variant="outline" className="text-xs">جوائز</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-[#1a365d] mb-2 group-hover:text-[#e53e3e] transition-colors">
                      بلوم هولدنغ تحصد جائزة أفضل مطور عقاري للعام الثالث على التوالي
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      حصلت الشركة على الجائزة من معرض دبي العقاري تقديراً لإنجازاتها المتميزة...
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0">
                <div className="flex gap-4 p-6">
                  <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=100&width=150"
                      alt="News 3"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>15 ديسمبر 2024</span>
                      <Badge variant="outline" className="text-xs">شراكات</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-[#1a365d] mb-2 group-hover:text-[#e53e3e] transition-colors">
                      شراكة استراتيجية مع بنك الإمارات دبي الوطني لتمويل المشاريع الجديدة
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      اتفاقية تمويل بقيمة 1.5 مليار درهم لدعم خطط التوسع المستقبلية...
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0">
                <div className="flex gap-4 p-6">
                  <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=100&width=150"
                      alt="News 4"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>12 ديسمبر 2024</span>
                      <Badge variant="outline" className="text-xs">مشاريع</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-[#1a365d] mb-2 group-hover:text-[#e53e3e] transition-colors">
                      اكتمال تسليم 95% من وحدات مشروع بلوم جاردنز
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      تسليم أكثر من 475 وحدة سكنية للعملاء قبل الموعد المحدد بشهرين...
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">أحدث الأخبار</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="News 5"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 text-sm">
                  مشاريع
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>10 ديسمبر 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4\
