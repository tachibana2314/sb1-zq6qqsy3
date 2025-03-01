"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-[15%] md:bottom-[18%] left-1/2 -translate-x-1/2 text-center flex flex-col items-center cursor-pointer text-white"
      onClick={scrollToNextSection}
      whileHover={{ scale: 1.1 }}
    >
      <motion.p 
        className="text-xs md:text-sm mb-1 md:mb-2 text-white"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        Scroll
      </motion.p>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 5, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          repeatType: "reverse" 
        }}
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </motion.div>
      <motion.div
        initial={{ y: -5, opacity: 0.5 }}
        animate={{ y: [0, 5, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          delay: 0.2,
          repeatType: "reverse" 
        }}
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 -mt-3 text-white" />
      </motion.div>
    </motion.div>
  );
};