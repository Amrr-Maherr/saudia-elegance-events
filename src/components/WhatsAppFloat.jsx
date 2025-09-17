// WhatsAppFloat.jsx
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/966501234567"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.2 }}
    //   transition={{ type: "spring", stiffness: 300 }}
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
};

export default WhatsAppFloat;
