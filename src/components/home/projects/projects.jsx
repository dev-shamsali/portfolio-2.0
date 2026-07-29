"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projectList = [
  {
    title: "Arna Skincare",
    stat: "800ms to 120ms API response",
    description:
      "Production MERN storefront on AWS EC2 with Razorpay payments, real-time inventory, and Prometheus monitoring dashboards.",
    url: "https://arnaskincare.in",
    tags: ["MERN", "AWS EC2", "Razorpay", "Prometheus"],
  },
  {
    title: "DevCodeHub",
    stat: "100+ concurrent users",
    description:
      "Real-time collaborative code editor with role-based access, version history, and syntax highlighting for 25+ languages.",
    url: "https://devcodehub.cloud",
    tags: ["Next.js", "Socket.io", "Firebase"],
  },
  {
    title: "This portfolio",
    stat: null,
    description:
      "Server-rendered with Next.js, animated with GSAP and Framer Motion, tuned for Core Web Vitals rather than decoration for its own sake.",
    url: "https://shamsali.vercel.app",
    tags: ["Next.js", "GSAP", "Vercel"],
  },
  {
    title: "Production cloud infrastructure",
    stat: "Fail2ban + Certbot hardened",
    description:
      "VPS setup for MERN and Python apps: Nginx reverse proxy, PM2 process management, and real-time Prometheus monitoring.",
    url: "http://72.61.242.86",
    tags: ["Nginx", "PM2", "Certbot", "Prometheus"],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
          delay: (i % 2) * 0.08,
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
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Selected work
          </h2>
          <p className="text-muted leading-relaxed">
            Production applications and infrastructure I&apos;ve built and
            deployed end to end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group rounded-card p-8 border border-border bg-surface hover:border-accent/40 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <ArrowUpRight
                  size={20}
                  strokeWidth={2}
                  className="shrink-0 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>

              {project.stat && (
                <p className="font-mono-tight text-xs text-accent mb-3">
                  {project.stat}
                </p>
              )}

              <p className="text-muted text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-tight text-xs px-2.5 py-1 rounded-full bg-foreground/5 text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/dev-shamsali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:border-accent/40 hover:text-accent transition-colors"
          >
            <Github size={18} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
