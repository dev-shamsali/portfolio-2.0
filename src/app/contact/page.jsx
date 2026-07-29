import Navbar from "@/components/layout/navbar/navbar";
import ContactCard from "@/components/contact/information/info";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactCard />
      </main>
    </>
  );
}
