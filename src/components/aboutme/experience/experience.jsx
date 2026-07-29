"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experienceData = [
  {
    id: 1,
    company: "Nexcore Alliance",
    location: "Mumbai, Maharashtra",
    role: "Senior Software Engineer",
    year: "Mar 2024 - Present",
    highlights: [
      "Developed, deployed, and monitored 15+ production MERN applications serving 50K+ users across e-commerce, SaaS, and fintech domains with 99.9% uptime",
      "Designed scalable cloud architecture on AWS EC2 using Nginx reverse proxy, load balancing, and high-availability patterns",
      "Implemented monitoring and observability with Prometheus, Grafana, and APM tools for performance analysis and incident response",
      "Configured CI/CD pipelines with GitHub Actions and Jenkins for automated testing and zero-downtime deployments",
      "Established security hardening with Fail2ban, SSL/TLS encryption, and regular security audits",
      "Cut API response times 70% through database indexing, query optimization, and Redis caching",
      "Led cross-functional teams through client communication, sprint planning, and delivery timelines",
    ],
  },
  {
    id: 2,
    company: "ISRC.ORG.IN",
    location: "Kurla, Maharashtra",
    role: "Web Development Intern",
    year: "Jan 2024 - Mar 2024",
    highlights: [
      "Built and deployed responsive full-stack applications on the MERN stack with Firebase, serving 5K+ active users",
      "Configured production Linux environments with Nginx, SSL certificates, and automated backup systems",
      "Improved page load times 45% by profiling with APM tools and resolving performance bottlenecks",
      "Built REST APIs and real-time WebSocket features in Agile sprints",
      "Deployed to Vercel and Firebase with automated workflows and environment variable management",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".experience-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 36,
          duration: 0.6,
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
    <section ref={sectionRef} className="py-24 px-6 lg:px-8 bg-surface">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
          Experience
        </h2>

        <div className="flex flex-col gap-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="experience-card grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-4 lg:gap-10 rounded-card border border-border bg-background p-7 lg:p-8"
            >
              <div>
                <p className="font-mono-tight text-sm text-accent mb-1">{exp.year}</p>
                <p className="text-foreground text-sm font-medium">{exp.company}</p>
                <p className="text-muted text-sm">{exp.location}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{exp.role}</h3>
                <ul className="space-y-2.5">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-muted leading-relaxed">
                      <span className="text-accent shrink-0 mt-[2px]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
