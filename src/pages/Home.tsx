import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Crown,
  Users,
  Sparkles,
  CheckCircle,
  Star,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/hero";

const Home = () => {
  const services = [
    {
      icon: Crown,
      title: "حفلات الزفاف",
      description:
        "تنظيم حفلات زفاف راقية ومميزة تترك ذكريات لا تُنسى مع الاهتمام بأدق التفاصيل",
    },
    {
      icon: Users,
      title: "مراسم العزاء",
      description:
        "تنظيم مراسم العزاء بكل احترام ومهنية وفقاً للتقاليد السعودية الأصيلة",
    },
    {
      icon: Sparkles,
      title: "خدمات متكاملة",
      description:
        "من التخطيط إلى التنفيذ، نوفر كل ما تحتاجونه لإنجاح فعاليتكم بأعلى المعايير",
    },
  ];

  const features = [
    { text: "خبرة في تقديم الفعاليات في الممكلة", icon: Award },
    { text: "فريق محترف ومتخصص", icon: Users },
    { text: "خدمات متكاملة وشاملة", icon: Sparkles },
    { text: "أسعار تنافسية ومناسبة", icon: Star },
  ];

  const stats = [
    { number: "+500", label: "فعالية ناجحة تم تنظيمها", delay: 0 },
    { number: "+300", label: "حفل زفاف مميز", delay: 0.1 },
    { number: "+200", label: "مراسم عزاء محترمة", delay: 0.2 },
    { number: "100%", label: "رضا وثقة العملاء", delay: 0.3 },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="section-spacing bg-gradient-calm dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-bold text-[#580012] mb-6">خدماتنا المميزة</h2>
            <div className="divider-gold max-w-24 mx-auto mb-6" />
            <p className="text-xl !text-[#580012]  max-w-3xl mx-auto text-elegant">
              نقدم مجموعة شاملة من الخدمات المتخصصة لضمان نجاح فعالياتكم وتحقيق
              تطلعاتكم بأعلى معايير الجودة والأناقة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full !bg-white dark:bg-gray-900 shadow-subtle hover-lift border-border/50">
                  <CardContent className="p-10 text-center">
                    <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-10 w-10 text-luxury-foreground dark:text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#580012] dark:text-white mb-6">
                      {service.title}
                    </h3>
                    <p className="text-[#580012] leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-background dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: stat.delay, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-elegant dark:bg-gray-700 rounded-2xl p-8 hover-lift">
                  <div className="text-4xl lg:text-5xl font-bold text-accent dark:text-yellow-400 mb-4">
                    {stat.number}
                  </div>
                  <div className="text-[#580012] dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-spacing bg-gradient-calm dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold text-[#580012] dark:text-white mb-8">
                لماذا تختارونا؟
              </h2>
              <p className="text-xl !text-[#580012] dark:text-gray-300 mb-10 leading-relaxed text-elegant">
                نحن نفخر بتقديم خدمات استثنائية في تنظيم الفعاليات منذ أكثر من
                عقد من الزمان. فريقنا المحترف يضمن تنفيذ فعالياتكم بأعلى معايير
                الجودة والأناقة، مع الحفاظ على التقاليد السعودية الأصيلة.
              </p>

              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 space-x-reverse group"
                  >
                    <div className="w-12 h-12 bg-gradient-gold dark:bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-luxury-foreground dark:text-white" />
                    </div>
                    <span className="text-[#580012] dark:text-white font-medium text-lg">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Button
                asChild
                variant="elegant"
                size="lg"
                className="hover-glow text-[#580012]"
              >
                <Link to="/about">
                  اعرف المزيد عنا
                  <ArrowLeft className="mr-3 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-gold dark:bg-yellow-500 rounded-3xl p-2 shadow-luxury">
                <div className="bg-card dark:bg-gray-900 rounded-2xl p-12 text-center">
                  <Crown className="h-24 w-24 text-accent dark:text-yellow-400 mx-auto mb-8" />
                  <h3 className="text-4xl font-bold text-white dark:text-white mb-4">
                    التميز والإتقان
                  </h3>
                  <p className="text-white dark:text-gray-300 text-lg leading-relaxed">
                    نسعى لتحقيق أحلامكم وجعل فعالياتكم استثنائية لا تُنسى
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-gradient-calm dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold !text-[#580012] dark:text-white mb-4">
              آراء العملاء
            </h2>
            <div className="divider-gold max-w-24 mx-auto mb-6" />
            <p className="text-xl !text-[#580012] dark:text-gray-300 max-w-3xl mx-auto text-elegant">
              ما يقوله عملاؤنا عن خدماتنا في تنظيم الفعاليات واهتمامنا بأدق
              التفاصيل.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "أحمد السليمان",
                feedback:
                  "يعطيكم ربي الف عافية والعاملات ماقصرو الصراحه قامو بالواجب وان شاءالله دايم نتعامل معاكم بالافراح يارب",
                avatar: "/images/WhatsApp1.jpg",
              },
              {
                name: "نورة عبدالله",
                feedback:
                  "بيض الله وجهك ع الشكل والترتيب كل شئ مثل ما تمنيت قلتي بتسمعين من الضيوف وفعلا سمعت الضيافة ما وقفت العاملات بشوشات انتي عسل ومتعاونة 🤍🤍",
                avatar: "/images/image.webp",
              },
              {
                name: "فاطمة الحربي",
                feedback:
                  "يعطيك العافية ماقصرتي وحبيت اشكرك واشكر جميع العاملات اللي معك وبارك الله في جهودكم وتعاونكم الجميل 👍😘💝💐",
                avatar: "/images/WhatsApp2.jpg",
              },
              {
                name: "سعود القرشي",
                feedback:
                  "شكرا على الضيافة الكل مدح بالشغل وسألت اغلب الضيوف قالو لي وصلت الضيافة لنا ،، ربي يسعدك وبين مجهودك بالزواج ♥♥🌹",
                avatar: "/images/WhatsApp3.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full !bg-white dark:bg-gray-900 shadow-subtle hover-lift border-border/50">
                  <CardContent className="p-8 text-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
                    />
                    <p className="!text-[#580012] dark:text-gray-300 leading-relaxed mb-4 text-elegant">
                      {testimonial.feedback}
                    </p>
                    <h4 className="text-lg font-semibold !text-[#580012] dark:text-white">
                      {testimonial.name}
                    </h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-hero dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-primary-foreground dark:text-white mb-8">
              هل أنتم مستعدون لتنظيم فعاليتكم؟
            </h2>
            <p className="text-xl text-primary-foreground/90 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-elegant">
              دعونا نساعدكم في إنشاء ذكريات لا تُنسى وتنظيم فعالية استثنائية
              تعكس ذوقكم الرفيع وتحقق تطلعاتكم. تواصلوا معنا اليوم لمناقشة
              تفاصيل مشروعكم
            </p>

            <Button asChild variant="gold" size="xl" className="hover-glow">
              <Link to="/contact">
                تواصل معنا عبر واتساب
                <ArrowLeft className="mr-3 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
