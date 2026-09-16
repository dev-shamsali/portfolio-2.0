// Central SEO identity/config. Single source of truth for domains and
// entity data so canonical URLs and structured data stay consistent
// across shamsali.devcodehub.cloud (primary) and shamsali.vibescript.cloud
// (secondary, same content — canonical always points to primary).

export const PRIMARY_DOMAIN = (
  process.env.NEXT_PUBLIC_PRIMARY_SITE_URL || "https://shamsali.devcodehub.cloud"
).replace(/\/$/, "");

export const SECONDARY_DOMAIN = (
  process.env.NEXT_PUBLIC_SECONDARY_SITE_URL || "https://shamsali.vibescript.cloud"
).replace(/\/$/, "");

export const SITE_NAME = "Shams Ali";

export const SITE_TITLE = "Shams Ali | Software Engineer, MERN Stack, Next.js & DevOps";

export const SITE_DESCRIPTION =
  "Shams Ali is a Software Engineer specializing in the MERN stack, Next.js, Node.js, DevOps, cloud infrastructure, Docker, CI/CD, Nginx and production deployments.";

export const SITE_KEYWORDS = [
  "Shams Ali",
  "Software Engineer",
  "Full Stack Developer",
  "DevOps Engineer",
  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "AWS",
  "Docker",
  "Nginx",
  "CI/CD",
  "GitHub Actions",
  "Mumbai",
];

export const SOCIAL_LINKS = {
  github: "https://github.com/dev-shamsali",
  linkedin: "https://www.linkedin.com/in/shams-ali-shaikh-27194425a",
  instagram: "https://www.instagram.com/shamsss.in",
};

export const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME };

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${PRIMARY_DOMAIN}/#person`,
    name: SITE_NAME,
    url: PRIMARY_DOMAIN,
    jobTitle: "Software Engineer",
    description: SITE_DESCRIPTION,
    email: "mailto:dev.shamsali@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    knowsAbout: [
      "MERN Stack",
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
      "MySQL",
      "DevOps",
      "Cloud Infrastructure",
      "Docker",
      "Nginx",
      "Linux",
      "CI/CD",
    ],
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PRIMARY_DOMAIN}/#website`,
    name: SITE_NAME,
    url: PRIMARY_DOMAIN,
    publisher: { "@id": `${PRIMARY_DOMAIN}/#person` },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${PRIMARY_DOMAIN}${item.path}`,
    })),
  };
}
