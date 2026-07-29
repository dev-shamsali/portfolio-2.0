"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

const LINES = [
  { prompt: "whoami", output: "Shams Ali" },
  { prompt: "stack", output: "MERN, AWS, Docker, CI/CD" },
  { prompt: "status", output: "Open to new opportunities" },
];

function emptyLines() {
  return LINES.map((l) => ({ ...l, promptChars: 0, outputChars: 0 }));
}

export default function TerminalPanel() {
  const [lines, setLines] = useState(emptyLines);
  const [done, setDone] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cardRef = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 18, mass: 0.5 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 18, mass: 0.5 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(245,239,228,0.16), transparent 60%)`;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReduced = mq.matches;
    setReduced(isReduced);

    if (isReduced) {
      setLines(LINES.map((l) => ({ ...l, promptChars: l.prompt.length, outputChars: l.output.length })));
      setDone(true);
      return;
    }

    let cancelled = false;
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function type() {
      for (let i = 0; i < LINES.length; i++) {
        for (let c = 1; c <= LINES[i].prompt.length; c++) {
          if (cancelled) return;
          await wait(26);
          setLines((prev) => {
            const next = [...prev];
            next[i] = { ...next[i], promptChars: c };
            return next;
          });
        }
        await wait(220);
        for (let c = 1; c <= LINES[i].output.length; c++) {
          if (cancelled) return;
          await wait(14);
          setLines((prev) => {
            const next = [...prev];
            next[i] = { ...next[i], outputChars: c };
            return next;
          });
        }
        await wait(380);
      }
      if (!cancelled) setDone(true);
    }

    type();
    return () => {
      cancelled = true;
    };
  }, []);

  function handleMouseMove(e) {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 16);
    rotateX.set((0.5 - py) * 16);
    glareX.set(px * 100);
    glareY.set(py * 100);
  }

  function handleMouseEnter() {
    setHovering(true);
  }

  function handleMouseLeave() {
    setHovering(false);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0" style={{ perspective: 1200 }}>
      <div className="absolute -inset-3 rounded-card border border-accent/30 -z-10" />
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-card overflow-hidden border border-[#f5efe3]/10 bg-[#231b16] h-[26rem] sm:h-[28rem] flex flex-col shadow-2xl shadow-black/30"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{ background: glareBackground, opacity: hovering ? 1 : 0 }}
        />

        <div className="relative flex items-center gap-2 px-5 py-4 border-b border-[#f5efe3]/10 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9797e]" />
          <span className="font-mono-tight text-xs text-[#b9ab98]">shams@portfolio</span>
        </div>

        <div className="relative p-6 font-mono-tight text-sm leading-relaxed flex-1">
          {lines.map((line, i) => (
            <div key={line.prompt} className="mb-4">
              <p>
                <span className="text-[#c9797e]">$ </span>
                <span className="text-[#f2ead9]">{line.prompt.slice(0, line.promptChars)}</span>
              </p>
              {line.outputChars > 0 && (
                <p className="text-[#b9ab98] mt-1">{line.output.slice(0, line.outputChars)}</p>
              )}
            </div>
          ))}
          <span
            className={`inline-block w-[7px] h-[1.1em] bg-[#c9797e] align-middle ${
              done && !reduced ? "animate-pulse" : ""
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
}
