import Navbar from "@/components/layout/navbar/navbar";
import Hero from "@/components/aboutme/hero/hero";
import Education from "@/components/aboutme/education/education";
import Experience from "@/components/aboutme/experience/experience";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
      </main>
    </>
  );
}
