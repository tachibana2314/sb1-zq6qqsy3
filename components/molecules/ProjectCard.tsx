"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  showDetails?: boolean;
}

export const ProjectCard = ({ project, showDetails = false }: ProjectCardProps) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="aspect-[4/3] relative">
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
    <div className="p-4 bg-white">
        <>
          <p className="text-xs md:text-sm text-gray-500 mb-1">{project.category}</p>
          <p className="text-xs md:text-sm text-gray-500 mb-1">{project.location}</p>
          <h3 className="text-base md:text-lg font-medium line-clamp-2 group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
        </>
    </div>
  </motion.div>
  );
};