"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Project } from "@/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects: Project[] = [
  {
    id: "1",
    title: "築30年の戸建てリノベーション",
    location: "名古屋市中区",
    date: "2024/03",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    category: "RENOVATION"
  },
  {
    id: "2",
    title: "モダンな新築住宅",
    location: "名古屋市千種区",
    date: "2024/02",
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    category: "NEW_BUILD"
  },
  {
    id: "3",
    title: "マンションフルリフォーム",
    location: "名古屋市東区",
    date: "2024/01",
    imageUrl: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4",
    category: "REFORM"
  },
  {
    id: "4",
    title: "デザイナーズ住宅",
    location: "名古屋市昭和区",
    date: "2023/12",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    category: "NEW_BUILD"
  }
];

export const Projects = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">WORKS</h2>
          <p className="text-gray-600">これまでに手がけた住まいづくりの事例をご紹介します</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <Link href={`/works/${project.id}`} key={project.id} className="block">
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
        <div className="mt-12 text-right">
          <Link 
            href="/works"
            className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors group"
          >
            <span className="border-b border-gray-900 group-hover:border-gray-600">more</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};