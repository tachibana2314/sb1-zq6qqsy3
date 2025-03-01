"use client";

import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/atoms/ScrollIndicator";

const images = [
  "/images/hero/1.jpeg",
  "/images/hero/2.jpeg",
  "/images/hero/3.jpeg",
  "/images/hero/4.jpeg",
  "/images/hero/5.jpeg",
];

export const Hero = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 6,
            delay: index * 6,
            repeat: Infinity,
            repeatDelay: (images.length - 1) * 6,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}
      
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">TSUMUGITE</h1>
          <p className="text-lg md:text-xl mb-2 md:mb-4">理想の暮らしをデザインする</p>
          <p className="text-base md:text-lg">新築・リフォーム・リノベーション</p>
        </motion.div>
      </div>
      
      <ScrollIndicator />
    </div>
  );
};