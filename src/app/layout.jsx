import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://shamsali.vercel.app";
const title = "Shams Ali - Full Stack Developer & DevOps Engineer";
const description =
  "Portfolio of Shams Ali, Full Stack Developer and DevOps Engineer specializing in the MERN stack, cloud infrastructure, and CI/CD.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Shams Ali",
  },
  description,
  keywords: [
    "Shams Ali",
    "Full Stack Developer",
    "DevOps Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Mumbai",
  ],
  authors: [{ name: "Shams Ali", url: siteUrl }],
  creator: "Shams Ali",
  applicationName: "Shams Ali Portfolio",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Shams Ali",
    title,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shams Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicons/site.webmanifest",
};

export const viewport = {
  themeColor: "#f5efe3",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shams Ali",
  url: siteUrl,
  jobTitle: "Full Stack Developer & DevOps Engineer",
  email: "mailto:dev.shamsali@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/dev-shamsali",
    "https://www.linkedin.com/in/shams-ali-shaikh-27194425a",
    "https://www.instagram.com/shamsss.in",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}
