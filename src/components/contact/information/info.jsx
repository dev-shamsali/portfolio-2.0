"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  { id: "whatsapp", icon: FaWhatsapp, url: "https://wa.me/919226539203", label: "WhatsApp" },
  { id: "linkedin", icon: FaLinkedin, url: "https://linkedin.com/in/shams-ali-shaikh-27194425a", label: "LinkedIn" },
  { id: "github", icon: FaGithub, url: "https://github.com/dev-shamsali", label: "GitHub" },
  { id: "instagram", icon: FaInstagram, url: "https://www.instagram.com/shamsss.in", label: "Instagram" },
];

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    content: "dev.shamsali@gmail.com",
    href: "mailto:dev.shamsali@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    content: "+91 92265 39203",
    href: "tel:+919226539203",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    content: "Mumbai, Maharashtra, India",
    href: null,
  },
];

export default function ContactCard() {
  return (
    <section className="min-h-[100dvh] flex items-center py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-content w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Get in touch
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-[50ch] mb-10">
            Have a project, a role, or just a question? I&apos;d like to hear
            about it.
          </p>

          <div className="space-y-5 mb-10">
            {contactInfo.map((item) => {
              return (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center text-accent shrink-0">
                    <item.icon size={17} />
                  </div>
                  <div>
                    <p className="font-mono-tight text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-base text-foreground hover:text-accent transition-colors"
                      >
                        {item.content}
                      </Link>
                    ) : (
                      <p className="text-base text-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <p className="font-mono-tight text-xs uppercase tracking-wider text-muted mb-3">
              Connect
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
          <div className="absolute -inset-3 rounded-card border border-accent/30 -z-10" />
          <div className="relative aspect-square rounded-card overflow-hidden border border-border bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/contact.gif"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
