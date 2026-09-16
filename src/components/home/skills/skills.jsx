"use client";

import { useEffect, useRef } from "react";
import { Layout, Server, Cloud, Boxes, Wrench, Sparkles } from "lucide-react";
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
    Icon: Layout,
    blurb: "Interfaces that feel fast and stay maintainable.",
    items: ["React.js", "Next.js", "Redux", "Context API", "JavaScript (ES6+)", "Tailwind CSS", "Material-UI", "Framer Motion"],
  },
  {
    label: "Backend & APIs",
    Icon: Server,
    blurb: "Services and real-time features that hold up in production.",
    items: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "WebSocket", "Socket.io", "JWT Auth"],
  },
  {
    label: "Data & cloud",
    Icon: Cloud,
    blurb: "Storage and hosting picked to fit the workload.",
    items: ["MongoDB", "MySQL", "Redis", "Firebase", "AWS EC2 / S3 / Lambda / RDS", "Vercel", "Nginx", "PM2", "SSL/TLS"],
  },
  {
    label: "DevOps & monitoring",
    Icon: Boxes,
    blurb: "Shipping and watching production without surprises.",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI/CD", "Prometheus", "Grafana", "DataDog", "Fail2ban"],
  },
  {
    label: "Tools & payments",
    Icon: Wrench,
    blurb: "The everyday toolbelt, plus checkout integrations.",
    items: ["Git", "GitHub", "GitLab", "Postman", "Linux", "Bash scripting", "Razorpay", "Stripe", "PayPal API"],
  },
  {
    label: "AI tools & practice",
    Icon: Sparkles,
    blurb: "How I actually work, day to day.",
    items: ["Claude Code", "Claude Agent SDK", "Claude Code subagents", "Agile / Scrum", "Sprint planning", "Team leadership"],
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
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Skills &amp; tools
        </h2>
        <p className="text-muted mt-2 max-w-xl">
          The stack I reach for daily, grouped by what it actually does.
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] mb-16">
        <div className="flex w-max gap-4 animate-marquee">
          {track.map((skill, i) => (
            <LogoChip key={`${skill.title}-${i}`} title={skill.title} img={skill.img} />
          ))}
        </div>
      </div>

      <div ref={gridRef} className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SKILL_GROUPS.map(({ label, Icon, blurb, items }) => (
            <div
              key={label}
              className="skill-group-card rounded-card border border-border bg-surface p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold">{label}</h3>
              </div>

              <p className="text-sm text-muted mb-5">{blurb}</p>

              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-border">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/80"
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
