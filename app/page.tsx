import { Hero } from "@/components/organisms/Hero";
import { About } from "@/components/organisms/About";
import { Services } from "@/components/organisms/Services";
import { Projects } from "@/components/organisms/Projects";
import { Contact } from "@/components/organisms/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}