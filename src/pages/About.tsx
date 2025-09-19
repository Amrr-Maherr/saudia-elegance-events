import { motion } from "framer-motion";
import { Award, Users, Clock, Heart, Shield, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "الشغف والاهتمام",
      description: "نعمل بشغف وحب لضمان نجاح كل فعالية نقوم بتنظيمها",
    },
    {
      icon: Shield,
      title: "الثقة والمصداقية",
      description:
        "نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة والشفافية",
    },
    {
      icon: Star,
      title: "التميز والجودة",
      description: "نسعى دائماً لتقديم أعلى مستويات الجودة في جميع خدماتنا",
    },
  ];

  const stats = [
    { number: "+500", label: "فعالية ناجحة" },
    { number: "+10", label: "سنوات خبرة" },
    { number: "+100", label: "عميل راضي" },
    { number: "24/7", label: "دعم متواصل" },
  ];

  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#580012] mb-6">
              من نحن
            </h1>
            <p className="text-xl text-[#580012] leading-relaxed">
              نحن فريق متخصص في تنظيم الفعاليات بخبرة تزيد عن 10 سنوات في
              المملكة العربية السعودية
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-[#580012] mb-6">قصتنا</h2>
              <div className="space-y-4 text-[#580012] leading-relaxed">
                <p>
                  بدأت رحلتنا من الحلم بتقديم خدمات تنظيم فعاليات استثنائية تجمع
                  بين الأصالة والحداثة. منذ أكثر من عقد من الزمان، نقوم بتنظيم
                  الأفراح والعزاء بأعلى معايير المهنية والاحتراف.
                </p>
                <p>
                  نؤمن بأن كل فعالية لها طابعها الخاص، ولذلك نعمل مع عملائنا
                  لفهم رؤيتهم وتحقيق تطلعاتهم. فريقنا المتخصص يضمن تنفيذ كل
                  التفاصيل بدقة واهتمام.
                </p>
                <p>
                  نحن نفخر بكوننا الخيار المفضل للعائلات في المملكة العربية
                  السعودية لتنظيم أهم اللحظات في حياتهم.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-gold rounded-2xl p-1 shadow-gold">
                <div className="bg-card rounded-xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-accent mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm text-[#580012]">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold !text-[#580012] mb-4">
              قيمنا ومبادئنا
            </h2>
            <p className="text-xl text-[#580012] max-w-2xl mx-auto">
              نؤمن بالقيم الأصيلة التي توجه عملنا وتضمن رضا عملائنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card shadow-elegant hover:shadow-gold transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-luxury-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#580012] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-[#580012] leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Award className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              رسالتنا
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              نسعى لتقديم خدمات تنظيم فعاليات متميزة تجمع بين الأصالة والعراقة
              السعودية مع لمسة عصرية من الأناقة والرقي، لنساعد عملاءنا في إنشاء
              ذكريات جميلة تدوم مدى الحياة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-[#580012] mb-6">
                فريق العمل
              </h2>
              <p className="text-lg text-[#580012] mb-6 leading-relaxed">
                يتكون فريقنا من مجموعة من المتخصصين ذوي الخبرة الواسعة في مجال
                تنظيم الفعاليات. نحن نعمل كفريق واحد لضمان تقديم أفضل الخدمات
                لعملائنا الكرام.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-[#580012]">مخططون متخصصون</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-[#580012]">منسقون لوجستيون</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-[#580012]">مصممون إبداعيون</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <div className="bg-gradient-gold rounded-2xl p-8 shadow-gold">
                <Users className="h-20 w-20 text-luxury-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-luxury-foreground mb-2">
                  فريق محترف
                </h3>
                <p className="text-luxury-foreground/90">
                  نعمل معاً لتحقيق أحلامكم
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
