"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const educationData = [
  {
    id: 1,
    institution: "Gharda Institute of Technology",
    degree: "Electronics & Telecommunication Engineering",
    year: "2020 - 2024",
    score: "8.9 CGPA",
    Icon: GraduationCap,
    highlights: [
      "Skilled in MERN stack development",
      "Experienced in CI/CD and cloud DevOps",
      "Led developer team for campus app",
    ],
  },
  {
    id: 2,
    institution: "HDA Junior College",
    degree: "Higher Secondary Certificate",
    year: "2018 - 2020",
    score: "72%",
    Icon: School,
    highlights: [
      "Computer science focus",
      "Mathematics olympiad participant",
      "Built first web projects",
    ],
  },
  {
    id: 3,
    institution: "Iqra English Medium School",
    degree: "Secondary School Certificate",
    year: "2016 - 2018",
    score: "75%",
    Icon: BookOpen,
    highlights: [
      "Early programming experiments",
      "Science fair robotics winner",
      "Mathematics proficiency award",
    ],
  },
];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".education-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 32,
          duration: 0.55,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
          Education
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu) => {
            const { Icon } = edu;
            return (
              <div
                key={edu.id}
                className="education-card rounded-card border border-border bg-surface p-7 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon size={18} />
                  </div>
                  <p className="font-mono-tight text-xs text-muted">{edu.year}</p>
                </div>

                <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                <p className="text-sm text-muted mb-4">{edu.institution}</p>

                <p className="font-mono-tight text-sm text-accent mb-5">
                  {edu.score}
                </p>

                <ul className="space-y-2.5 mt-auto pt-5 border-t border-border">
                  {edu.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-muted leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
