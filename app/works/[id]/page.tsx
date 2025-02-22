import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { WorkDetailClient } from "./WorkDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function WorkDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <WorkDetailClient project={project} />;
}