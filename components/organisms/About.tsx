"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text Content - On top for mobile, on top for desktop */}
            <div className="flex flex-col justify-center order-1 md:order-1">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-light">ABOUT</h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    「TSUMUGITE」は、福岡を中心に店舗デザイン・店舗施工を一貫して手掛けています。
                  </p>
                  <p>
                    ジャンル・業種問わず、<br />
                    ・お客様のコンセプトに合わせた空間づくり<br />
                    ・コストを抑えながらもオーナーの想いが詰まった空間づくり<br />
                  </p>
                  <p>
                    を提案いたします。<br />
                    デザインから施工、アフターフォローまで一貫して対応しているので、安心してお店作りをお任せください。
                  </p>
                </div>
                <div className="hidden md:block">
                  <Link 
                    href="/about"
                    className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors group"
                  >
                    <span className="border-b border-gray-900 group-hover:border-gray-600">詳しく見る</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Image - Below text for mobile, below text for desktop */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-2 md:order-2"
            >
              <div className="relative aspect-[4/3] bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="TSUMUGITE"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Mobile-only "See More" link that appears below the image */}
          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/about"
              className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors group"
            >
              <span className="border-b border-gray-900 group-hover:border-gray-600">詳しく見る</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};