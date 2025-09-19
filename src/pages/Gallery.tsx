import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null); // state للفول سكرين

  const [media, setMedia] = useState([]);

  useEffect(() => {
    const loadFiles = async () => {
      const res = await fetch("/api/files");
      const files = await res.json();
      setMedia(files.filter((m) => m.type !== "other"));
    };

    loadFiles();
  }, []);

  const tabs = [
    { key: "all", label: "الكل" },
    { key: "image", label: "صور" },
    { key: "video", label: "فيديوهات" },
  ];

  const filteredItems =
    filter === "all" ? media : media.filter((item) => item.type === filter);

  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-elegant text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#580012] mb-6">
            معرض أعمالنا
          </h1>
          <p className="text-xl text-[#580012] leading-relaxed">
            اطلعوا على بعض من أعمالنا المصورة والفيديوهات
          </p>
        </motion.div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-4">
          {tabs.map((tab) => (
            <Badge
              key={tab.key}
              variant={filter === tab.key ? "default" : "secondary"}
              className={`cursor-pointer px-6 py-2 text-sm font-medium transition-all duration-200 ${
                filter === tab.key
                  ? "bg-gradient-gold text-luxury-foreground hover:bg-gradient-gold/90"
                  : "bg-secondary text-[#580012] hover:bg-elegant"
              }`}
              onClick={() => setFilter(tab.key)}
            >
              {tab.label}
            </Badge>
          ))}
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
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card
                  className="overflow-hidden bg-card shadow-elegant hover:shadow-gold transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedMedia(item)}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      alt={`media-${item.id}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <video
                      src={item.url}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    />
                  )}
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
              <p className="text-xl text-[#580012]">
                لا توجد عناصر في هذا التصنيف حالياً
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            {selectedMedia.type === "image" ? (
              <motion.img
                src={selectedMedia.url}
                alt={`media-${selectedMedia.id}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <motion.video
                src={selectedMedia.url}
                controls
                autoPlay
                className="max-h-full max-w-full object-contain"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
