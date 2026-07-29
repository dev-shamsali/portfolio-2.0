"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="max-w-content mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono-tight text-lg font-medium text-foreground"
        >
          shams<span className="text-accent">.</span>ali
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <li key={link.path} className="relative py-2">
                <Link
                  href={link.path}
                  className={
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground transition-colors"
                  }
                >
                  {link.name}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-0.5 h-px w-full bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={
                      pathname === link.path
                        ? "text-accent"
                        : "text-muted hover:text-foreground transition-colors"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
