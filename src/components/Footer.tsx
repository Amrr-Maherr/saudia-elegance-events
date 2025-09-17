import { motion } from 'framer-motion';
import { Heart, MapPin, Phone, Mail, Crown, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: Phone, label: 'الهاتف', value: '+966 50 123 4567' },
    { icon: Mail, label: 'البريد الإلكتروني', value: 'info@events-sa.com' },
    { icon: MapPin, label: 'الموقع', value: 'الرياض، المملكة العربية السعودية' }
  ];

  const services = [
    'تنظيم حفلات الزفاف',
    'تنظيم مراسم العزاء', 
    'تجهيز القاعات والديكور',
    'خدمات الضيافة المتكاملة',
    'التصوير والتوثيق',
    'التنسيق اللوجستي'
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-hero text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Crown className="h-8 w-8 text-luxury mr-3" />
                <h3 className="text-3xl font-bold text-luxury">
                  تنظيم الفعاليات
                </h3>
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed text-lg mb-8 max-w-md">
                نحن نقدم خدمات تنظيم الأفراح والعزاء بأعلى مستوى من المهنية والأناقة في المملكة العربية السعودية منذ أكثر من 10 سنوات
              </p>

              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Award className="h-5 w-5 text-luxury" />
                  <span className="text-primary-foreground/80">+500 فعالية ناجحة</span>
                </div>
                <div className="h-4 w-px bg-primary-foreground/30" />
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Heart className="h-5 w-5 text-luxury" />
                  <span className="text-primary-foreground/80">100% رضا العملاء</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-luxury">معلومات التواصل</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 space-x-reverse group hover:bg-primary-foreground/5 p-3 rounded-lg transition-colors duration-300"
                >
                  <item.icon className="h-5 w-5 text-luxury flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-sm text-primary-foreground/70 mb-1">{item.label}</div>
                    <div className="text-primary-foreground/90">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-luxury">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-primary-foreground/80 hover:text-luxury transition-colors duration-300 cursor-default relative group"
                >
                  <span className="text-luxury mr-2">•</span>
                  {service}
                  <div className="absolute bottom-0 right-0 w-0 h-px bg-luxury group-hover:w-full transition-all duration-300" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 flex items-center space-x-2 space-x-reverse">
              <span>© {currentYear} تنظيم الفعاليات. جميع الحقوق محفوظة.</span>
            </p>
            
            <div className="flex items-center space-x-2 space-x-reverse text-primary-foreground/70">
              <span>صُنع بـ</span>
              <Heart className="h-4 w-4 text-luxury animate-pulse" />
              <span>في المملكة العربية السعودية</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;