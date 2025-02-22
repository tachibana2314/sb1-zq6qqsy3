"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/types";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from "react";

interface WorkDetailClientProps {
  project: Project;
}

export function WorkDetailClient({ project }: WorkDetailClientProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-24">
        <Link 
          href="/works"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 md:mb-12"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          一覧に戻る
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 md:space-y-16"
        >
          {/* メイン情報 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-light mb-4 md:mb-6">{project.title}</h1>
              <div className="space-y-3 md:space-y-4 text-gray-600">
                <p className="flex items-center">
                  <span className="font-medium w-20 md:w-24">場所：</span>
                  <span>{project.location}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-20 md:w-24">完工：</span>
                  <span>{project.date}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-20 md:w-24">カテゴリー：</span>
                  <span>{project.category}</span>
                </p>
                <p className="mt-6 md:mt-8 leading-relaxed">{project.description}</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] order-1 md:order-2">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* 画像スライダー */}
          <div className="relative -mx-4 md:mx-0">
            <div className="overflow-hidden md:rounded-lg" ref={emblaRef}>
              <div className="flex">
                {project.images?.map((image, index) => (
                  <div key={index} className="relative flex-[0_0_100%] min-w-0 px-4 md:px-0">
                    <div className="relative aspect-[4/3] md:aspect-[16/9]">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover md:rounded-lg"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* ナビゲーションボタン */}
            <button
              onClick={scrollPrev}
              className="absolute left-6 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="前の画像"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-6 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="次の画像"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}