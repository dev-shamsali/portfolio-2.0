import Navbar from "@/components/layout/navbar/navbar";
import ContactCard from "@/components/contact/information/info";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Shams Ali — Software Engineer for MERN stack, Next.js, and DevOps work. Email, LinkedIn, and GitHub.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact Shams Ali",
    description:
      "Get in touch with Shams Ali — Software Engineer for MERN stack, Next.js, and DevOps work. Email, LinkedIn, and GitHub.",
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Navbar />
      <main>
        <ContactCard />
      </main>
    </>
  );
}
