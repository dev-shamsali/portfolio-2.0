"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/shams-ali-shaikh-27194425a", label: "LinkedIn" },
  { icon: FaGithub, url: "https://github.com/dev-shamsali", label: "GitHub" },
  { icon: FaInstagram, url: "https://www.instagram.com/shamsss.in", label: "Instagram" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-6 lg:px-8 bg-background overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[26rem] h-[26rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6"
          >
            Shams Ali Shaikh
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted leading-relaxed max-w-[58ch] mb-8"
          >
            Full-stack developer and DevOps engineer building responsive web
            apps and the scalable, secured infrastructure they run on.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-medium hover:bg-accent-strong transition-colors"
            >
              Get in touch
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto lg:mx-0 w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-card border border-accent/30 -z-10" />
          <div className="relative aspect-[4/5] rounded-card overflow-hidden border border-border bg-surface">
            <Image
              src="/shamsali.jpeg"
              alt="Shams Ali"
              fill
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
