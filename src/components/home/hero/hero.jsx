"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TerminalPanel from "./terminal-panel";

const line1 = ["Full-stack", "developer,"];
const line2 = ["DevOps", "engineer."];

const word = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

      <motion.div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative w-full max-w-content mx-auto px-6 lg:px-8 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono-tight text-sm text-muted mb-5"
          >
            Hi, I&apos;m Shams Ali
          </motion.p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight mb-6">
            <motion.span
              className="block"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
            >
              {line1.map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  transition={{ duration: 0.5 }}
                  className="inline-block mr-[0.28em]"
                >
                  {w}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="block"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
            >
              {line2.map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  transition={{ duration: 0.5 }}
                  className="inline-block mr-[0.28em]"
                >
                  {w}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="text-lg text-muted leading-relaxed max-w-[52ch] mb-10"
          >
            I build production MERN applications and the cloud infrastructure
            that keeps them fast, secure, and online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-medium hover:bg-accent-strong transition-colors"
            >
              Get in touch
              <ArrowUpRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TerminalPanel />
        </motion.div>
      </div>
    </section>
  );
}
