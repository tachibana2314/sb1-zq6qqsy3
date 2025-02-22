"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center flex flex-col items-center"
    >
      <p className="text-xs md:text-sm mb-1 md:mb-2">Scroll</p>
      <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
    </motion.div>
  );
};