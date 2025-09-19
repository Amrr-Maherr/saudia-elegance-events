import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import video from "../data/media/Generated File September 19, 2025 - 6_50PM.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* خلفية الفيديو */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو
      </video>

      {/* طبقة شفافة فوق الفيديو */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/70 dark:from-black/50 dark:via-black/40 dark:to-black/70" />

      {/* المحتوى */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="font-bold text-primary-foreground mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            تنظيم المناسبات
            <span className="block text-primary-foreground mt-4">
              بمهنية وأناقة استثنائية
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-primary-foreground/90 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-elegant"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            نحن نساعدكم في تنظيم فعالياتكم المهمة بأعلى مستوى من الاحترافية
            والتميز في المملكة العربية السعودية، مع الحفاظ على التقاليد الأصيلة
            واللمسة العصرية الراقية
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild variant="gold" size="xl" className="hover-glow">
              <Link to="/contact">
                تواصل معنا الآن
                <ArrowLeft className="mr-3 h-6 w-6" />
              </Link>
            </Button>

            <Button
              asChild
              variant="minimal"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground dark:border-gray-400 dark:text-gray-300 bg-primary-foreground/10 hover:bg-primary-foreground/10 dark:bg-gray-800"
            >
              <Link to="/gallery">اطلع على أعمالنا</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* تأثير عائم */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-luxury/10 dark:bg-yellow-400/20 blur-3xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default Hero;
