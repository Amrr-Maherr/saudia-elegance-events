import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  // Using placeholder image URLs - in real app these would be actual event photos
  const galleryItems = [
    {
      id: 1,
      title: 'حفل زفاف راقي',
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop',
      description: 'تنظيم حفل زفاف أنيق بتفاصيل ذهبية'
    },
    {
      id: 2,
      title: 'قاعة عزاء مهيأة',
      category: 'funeral',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
      description: 'تجهيز قاعة عزاء بأجواء هادئة ومريحة'
    },
    {
      id: 3,
      title: 'زينة الورود',
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500&h=300&fit=crop',
      description: 'تنسيق ورود طبيعية للمناسبات'
    },
    {
      id: 4,
      title: 'تجهيز الضيافة',
      category: 'catering',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=500&h=300&fit=crop',
      description: 'خدمات ضيافة متكاملة ومتميزة'
    },
    {
      id: 5,
      title: 'إضاءة احتفالية',
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=300&fit=crop',
      description: 'إضاءة مميزة تضفي أجواء ساحرة'
    },
    {
      id: 6,
      title: 'تنظيم مراسم',
      category: 'funeral',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
      description: 'تنظيم مراسم العزاء بكل احترام'
    }
  ];

  const categories = [
    { key: 'all', label: 'جميع الأعمال' },
    { key: 'wedding', label: 'الأفراح' },
    { key: 'funeral', label: 'العزاء' },
    { key: 'catering', label: 'الضيافة' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              معرض أعمالنا
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              اطلعوا على بعض من أجمل الفعاليات التي قمنا بتنظيمها بنجاح
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Badge
                key={category.key}
                variant={filter === category.key ? "default" : "secondary"}
                className={`cursor-pointer px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  filter === category.key
                    ? 'bg-gradient-gold text-luxury-foreground hover:bg-gradient-gold/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-elegant'
                }`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.1,
                  layout: { duration: 0.3 }
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="overflow-hidden bg-card shadow-elegant hover:shadow-gold transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 left-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-elegant text-elegant-foreground"
                      >
                        {categories.find(cat => cat.key === item.category)?.label}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                لا توجد أعمال في هذا التصنيف حالياً
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '+500', label: 'فعالية منجزة' },
              { number: '+300', label: 'حفل زفاف' },
              { number: '+200', label: 'مراسم عزاء' },
              { number: '100%', label: 'رضا العملاء' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              هل أعجبتكم أعمالنا؟
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              نحن مستعدون لتنظيم فعاليتكم القادمة بنفس المستوى من التميز والإبداع
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-gold text-luxury-foreground font-semibold rounded-lg shadow-gold hover:shadow-xl transition-all duration-300"
              >
                تواصلوا معنا الآن
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;