import Navbar from "@/components/layout/navbar/navbar";
import HeroBanner from "@/components/home/hero/hero";
import Skills from "@/components/home/skills/skills";
import Projects from "@/components/home/projects/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
