import Navbar from "@/components/layout/navbar/navbar";
import Hero from "@/components/aboutme/hero/hero";
import Education from "@/components/aboutme/education/education";
import Experience from "@/components/aboutme/experience/experience";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata = {
  title: "About",
  description:
    "About Shams Ali — Software Engineer specializing in the MERN stack, Next.js, and DevOps. Background, education, and professional experience.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "About Shams Ali",
    description:
      "About Shams Ali — Software Engineer specializing in the MERN stack, Next.js, and DevOps. Background, education, and professional experience.",
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
      </main>
    </>
  );
}
