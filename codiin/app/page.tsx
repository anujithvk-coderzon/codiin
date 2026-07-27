import type { Metadata } from "next";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import Register from "@/components/home/Register";
import WhyUs from "@/components/home/WhyUs";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "CODiiN Tech Mentors Lab | Software Training & Mentorship in Kochi, Kerala",
  description:
    "CODiiN Tech Mentors Lab - Premier software training and mentorship in Kochi. Expert guidance in Full Stack Development, Data Analytics, Data Engineering, Data Science, and Agentic AI.",
  keywords: [
    "software training Kochi",
    "mentorship program Kochi",
    "full stack development course",
    "data analytics training",
    "data science mentorship",
    "AI training Kerala",
    "tech mentors Kochi",
    "coding bootcamp Kerala",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "CODiiN Tech Mentors Lab - Software Training & Mentorship in Kochi",
    description:
      "Transform your tech career with expert mentorship in Full Stack Development, Data Analytics, Data Science, and Agentic AI.",
    images: ["/images/og-image.jpg"],
    siteName: "CODiiN Tech Mentors Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODiiN Tech Mentors Lab - Software Training & Mentorship",
    description:
      "Transform your tech career with expert mentorship in emerging technologies.",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />

      <Navbar spy />

      <main>
        <Hero />
        <About />
        <Programs />
        <WhyUs />
        <Contact />
        <Register />
      </main>

      <Footer variant="home" />
      <WhatsAppFloat />
      <ScrollReveal />
    </>
  );
}
