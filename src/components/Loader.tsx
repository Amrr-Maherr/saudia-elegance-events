// components/Loader.js
"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full py-20">
      <motion.div
        className="w-12 h-12 border-4 border-[#580012] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
