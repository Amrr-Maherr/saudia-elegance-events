import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Crown, Users, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: Crown,
      title: 'حفلات الزفاف',
      description: 'تنظيم حفلات زفاف راقية ومميزة تترك ذكريات لا تُنسى'
    },
    {
      icon: Users,
      title: 'مراسم العزاء',
      description: 'تنظيم مراسم العزاء بكل احترام ومهنية وفقاً للتقاليد'
    },
    {
      icon: Sparkles,
      title: 'خدمات متكاملة',
      description: 'من التخطيط إلى التنفيذ، نوفر كل ما تحتاجونه'
    }
  ];

  const features = [
    'خبرة أكثر من 10 سنوات',
    'فريق محترف ومتخصص',
    'خدمات متكاملة وشاملة',
    'أسعار تنافسية ومناسبة'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              تنظيم الأفراح والعزاء
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                بمهنية وأناقة
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              نحن نساعدكم في تنظيم فعالياتكم المهمة بأعلى مستوى من الاحترافية والتميز في المملكة العربية السعودية
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold px-8 py-3 text-lg"
              >
                <Link to="/contact">
                  تواصل معنا الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg"
              >
                <Link to="/gallery">
                  اطلع على أعمالنا
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              خدماتنا المميزة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات لضمان نجاح فعالياتكم
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card shadow-elegant hover:shadow-gold transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="h-8 w-8 text-luxury-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                لماذا تختارونا؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                نحن نفخر بتقديم خدمات استثنائية في تنظيم الفعاليات. فريقنا المحترف يضمن تنفيذ فعالياتكم بأعلى معايير الجودة والأناقة.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 space-x-reverse"
                  >
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/about">
                  اعرف المزيد عنا
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-gold rounded-2xl p-8 shadow-gold">
                <div className="bg-card rounded-xl p-8 text-center">
                  <Crown className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    +500
                  </h3>
                  <p className="text-muted-foreground">
                    فعالية ناجحة تم تنظيمها
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              هل أنتم مستعدون لتنظيم فعاليتكم؟
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              دعونا نساعدكم في إنشاء ذكريات لا تُنسى. تواصلوا معنا اليوم لمناقشة تفاصيل فعاليتكم
            </p>
            
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold px-8 py-3 text-lg"
            >
              <Link to="/contact">
                احجز استشارة مجانية
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;