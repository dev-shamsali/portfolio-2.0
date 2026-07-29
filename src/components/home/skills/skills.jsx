"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CORE_STACK = [
  { title: "React", img: "/11.png" },
  { title: "Next.js", img: "/8.png" },
  { title: "Redux", img: "/logos/redux.svg" },
  { title: "MUI", img: "/logos/mui.svg" },
  { title: "Tailwind CSS", img: "/12.png" },
  { title: "Framer Motion", img: "/logos/framer.svg" },
  { title: "Node.js", img: "/9.png" },
  { title: "Express.js", img: "/expressjs.webp" },
  { title: "Socket.io", img: "/logos/socketio.svg" },
  { title: "MongoDB", img: "/7.png" },
  { title: "MySQL", img: "/logos/mysql.svg" },
  { title: "Redis", img: "/logos/redis.svg" },
  { title: "Firebase", img: "/5.png" },
  { title: "AWS", img: "/2.png" },
  { title: "Vercel", img: "/logos/vercel.svg" },
  { title: "Nginx", img: "/logos/nginx.svg" },
  { title: "Docker", img: "/3.png" },
  { title: "Kubernetes", img: "/logos/kubernetes.svg" },
  { title: "Jenkins", img: "/logos/jenkins.svg" },
  { title: "GitHub Actions", img: "/logos/githubactions.svg" },
  { title: "GitLab", img: "/logos/gitlab.svg" },
  { title: "Prometheus", img: "/logos/prometheus.svg" },
  { title: "Grafana", img: "/logos/grafana.svg" },
  { title: "DataDog", img: "/logos/datadog.svg" },
  { title: "Razorpay", img: "/logos/razorpay.svg" },
  { title: "Stripe", img: "/logos/stripe.svg" },
  { title: "Git & GitHub", img: "/6.png" },
  { title: "Postman", img: "/logos/postman.svg" },
  { title: "Python", img: "/10.png" },
];

const SKILL_GROUPS = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Context API", "JavaScript (ES6+)", "Tailwind CSS", "Material-UI", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "WebSocket", "Socket.io", "JWT Auth"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL", "Redis", "Firebase Realtime DB", "Firestore"],
  },
  {
    label: "Cloud & deployment",
    items: ["AWS EC2 / S3 / Lambda / RDS", "Vercel", "Firebase Hosting", "Nginx", "PM2", "SSL/TLS"],
  },
  {
    label: "DevOps & CI/CD",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI/CD"],
  },
  {
    label: "Monitoring & security",
    items: ["Prometheus", "Grafana", "DataDog", "Fail2ban", "Security audits"],
  },
  {
    label: "AI developer tools",
    items: ["Claude Code", "Claude Agent SDK", "Claude Code subagents"],
  },
  {
    label: "Payments",
    items: ["Razorpay", "Stripe", "PayPal API"],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub", "GitLab", "Postman", "Linux", "Bash scripting"],
  },
  {
    label: "Practices",
    items: ["Agile / Scrum", "Sprint planning", "Kanban", "Team leadership", "Client communication"],
  },
];

function LogoChip({ title, img }) {
  return (
    <div className="flex items-center gap-3 shrink-0 pl-4 pr-6 py-3 rounded-full border border-border bg-surface">
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="" aria-hidden="true" className="w-6 h-6 object-contain" />
      </div>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">
        {title}
      </span>
    </div>
  );
}

export default function Skills() {
  const track = [...CORE_STACK, ...CORE_STACK];
  const gridRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".skill-group-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 28,
          duration: 0.5,
          ease: "power2.out",
          delay: (i % 3) * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="max-w-content mx-auto px-6 lg:px-8 mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Skills &amp; tools
        </h2>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] mb-16">
        <div className="flex w-max gap-4 animate-marquee">
          {track.map((skill, i) => (
            <LogoChip key={`${skill.title}-${i}`} title={skill.title} img={skill.img} />
          ))}
        </div>
      </div>

      <div ref={gridRef} className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.label}
              className="skill-group-card rounded-card border border-border bg-surface p-6"
            >
              <p className="font-mono-tight text-xs uppercase tracking-wider text-accent mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-foreground/5 text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
