import { motion } from 'framer-motion';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-gradient-hero text-primary-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              تنظيم الفعاليات
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              نحن نقدم خدمات تنظيم الأفراح والعزاء بأعلى مستوى من المهنية والأناقة في المملكة العربية السعودية
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-accent">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+966 50 123 4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">info@events-sa.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-accent">خدماتنا</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>تنظيم حفلات الزفاف</li>
              <li>تنظيم مراسم العزاء</li>
              <li>تجهيز القاعات</li>
              <li>خدمات الضيافة</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 flex items-center justify-center space-x-1 space-x-reverse">
            <span>© 2024 تنظيم الفعاليات. جميع الحقوق محفوظة. صُنع بـ</span>
            <Heart className="h-4 w-4 text-accent" />
            <span>في المملكة العربية السعودية</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;