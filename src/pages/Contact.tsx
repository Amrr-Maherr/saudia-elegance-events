import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      info: "+966531606234",
      description: "متاح 24/7 للرد على استفساراتكم",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      info: "+966531606234",
      description: "للتواصل السريع والمباشر",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      info: "info@foushi-events.com",
      description: "سنرد عليكم خلال 24 ساعة",
    },
    {
      icon: MapPin,
      title: "الموقع",
      info: "الدمام، المملكة العربية السعودية",
      description: "(المنطقه الشرقيه)",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "تم إرسال الرسالة بنجاح!",
        description: "سنتواصل معكم في أقرب وقت ممكن.",
      });
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "مرحباً، أود الاستفسار عن خدمات تنظيم الفعاليات"
    );
    window.open(`https://wa.me/966501234567?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#580012] mb-6">
              تواصل معنا
            </h1>
            <p className="text-xl text-[#580012] leading-relaxed">
              نحن هنا لمساعدتكم في تنظيم فعاليتكم المثالية. تواصلوا معنا اليوم
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => {
              let href = "#";
              if (item.title === "الهاتف") href = `tel:${item.info}`;
              if (item.title === "واتساب")
                href = `https://wa.me/${item.info.replace(/\D/g, "")}`;
              if (item.title === "البريد الإلكتروني")
                href = `mailto:${item.info}`;
              if (item.title === "الموقع")
                href = `https://www.google.com/maps/search/${encodeURIComponent(
                  item.info
                )}`;

              return (
                <motion.a
                  key={item.title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="block"
                >
                  <Card className="h-full bg-card shadow-elegant hover:shadow-gold transition-all duration-300 text-center cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-6 w-6 text-luxury-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#580012] mb-2">
                        {item.title}
                      </h3>
                      <p
                        className="text-accent font-medium mb-2 text-center"
                        dir="ltr"
                      >
                        {item.info}
                      </p>
                      <p className="text-sm text-[#580012]">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="bg-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#580012] text-center">
                    أرسل لنا رسالة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#580012] mb-2"
                      >
                        الاسم الكامل
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border-border"
                        placeholder="اكتب اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#580012] mb-2"
                      >
                        رقم الهاتف
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border-border"
                        placeholder="05xxxxxxxx"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#580012] mb-2"
                      >
                        الرسالة
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full bg-white border-border resize-none"
                        placeholder="اكتب تفاصيل الفعالية التي تريد تنظيمها..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-gold text-luxury-foreground hover:bg-gradient-gold/90 shadow-gold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2 space-x-reverse">
                          <div className="w-4 h-4 border-2 border-luxury-foreground border-t-transparent rounded-full animate-spin" />
                          <span>جاري الإرسال...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2 space-x-reverse">
                          <Send className="h-4 w-4" />
                          <span>إرسال الرسالة</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <Card
                onClick={handleWhatsAppClick}
                className="bg-gradient-gold shadow-gold !cursor-pinter"
              >
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-16 w-16 text-luxury-foreground mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-luxury-foreground mb-4">
                    تواصل سريع عبر واتساب
                  </h3>
                  <p className="text-luxury-foreground/90 mb-6">
                    للحصول على رد فوري وسريع على استفساراتكم
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Clock className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-[#580012] text-center mb-6">
                    ساعات العمل
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-border pb-2 flex-row-reverse">
                      <span className="text-[#580012] font-medium">
                        السبت - الخميس
                      </span>
                      <span className="text-[#580012]">9:00 ص - 10:00 م</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2 flex-row-reverse">
                      <span className="text-[#580012] font-medium">الجمعة</span>
                      <span className="text-[#580012]">2:00 م - 10:00 م</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-elegant">
                <CardContent className="p-8">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#580012] text-center mb-4">
                    مناطق الخدمة
                  </h3>
                  <div className="text-center space-y-2">
                    <p className="text-elegant-foreground">الدمام</p>
                    <p className="text-accent font-medium mt-4">
                      (المنطقه الشرقيه)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              أسئلة شائعة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  كم تستغرق عملية التخطيط؟
                </h3>
                <p className="text-primary-foreground/80">
                  عادة نحتاج من أسبوعين إلى شهر للتخطيط المثالي حسب حجم الفعالية
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  هل تقدمون خدمات في الدمام؟
                </h3>
                <p className="text-primary-foreground/80">
                  نعم، نقدم خدماتنا في الدمام ضمن المنطقة الشرقية
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
