"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Project } from "@/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

// 最新の4つのプロジェクトを表示
const selectedProjects = projects.slice(0, 4);

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
          {selectedProjects.map((project) => (
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
}