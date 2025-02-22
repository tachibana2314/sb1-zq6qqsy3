import { projects } from "@/lib/data";
import { WorksClient } from "./WorksClient";

export default function Works() {
  return <WorksClient projects={projects} />;
}