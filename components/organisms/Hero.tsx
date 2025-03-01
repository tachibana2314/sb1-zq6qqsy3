"use client";

import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/atoms/ScrollIndicator";
import { useEffect, useState } from "react";
import Image from "next/image";

// 確実に存在する画像パスを使用
const images = [
  "/images/hero/1.jpeg",
  "/images/hero/2.jpeg",
  "/images/hero/3.jpeg",
  "/images/hero/4.jpeg",
  "/images/hero/5.jpeg",
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // 画像のプリロードを改善
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;
    
    // 各画像をロードする - window.Image を使用
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      
      // 画像がロードされたらカウントを増やす
      img.onload = () => {
        loadedCount++;
        // すべての画像がロードされたらフラグを設定
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      
      // エラー時も次の画像に進む
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
    });
    
    // 5秒後にタイムアウトして強制的に表示
    const timeout = setTimeout(() => {
      if (!imagesLoaded) {
        console.log("Image loading timed out, showing content anyway");
        setImagesLoaded(true);
      }
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, []);

  // 画像のスライドショー効果
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="h-screen relative overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      ))}
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center px-4 flex flex-col items-center"
        >
          <motion.div 
            className="mb-8 md:mb-10 w-[200px] md:w-[300px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              delay: 0.7
            }}
          >
            <Image
              src="/logo/logo.png"
              alt="TSUMUGITE"
              width={300}
              height={75}
              className="w-full h-auto brightness-0 invert"
              priority
            />
          </motion.div>
          <motion.p 
            className="text-lg md:text-xl mb-2 md:mb-4 text-white font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            理想の暮らしをデザインする
          </motion.p>
          <motion.p 
            className="text-base md:text-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            新築・リフォーム・リノベーション
          </motion.p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ScrollIndicator />
      </motion.div>
    </div>
  );
};