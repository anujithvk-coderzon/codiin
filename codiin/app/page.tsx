import type { Metadata } from "next";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import Register from "@/components/home/Register";
import WhyUs from "@/components/home/WhyUs";
import { CONTACT, SITE_URL, SOCIAL } from "@/lib/site";
import EventPromo from "@/components/EventPromo";
import { isClosed } from "@/lib/events";
import { prisma } from "@/lib/prisma";

/* The home page now reads one row, so it can no longer be baked once at build
   time. Sixty seconds keeps it effectively static — one render shared by
   everyone until it expires — while a newly published event still surfaces
   within the minute. */
export const revalidate = 60;

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

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "AKL Heights, Seaport Road, Near Bharathmatha College",
  addressLocality: "Kochi",
  addressRegion: "Kerala",
  postalCode: "682021",
  addressCountry: "IN",
};

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CODiiN Tech Mentors Lab",
  description:
    "Premier software training and mentorship organization specializing in emerging technologies including Full Stack Development, Data Analytics, Data Engineering, Data Science, and Agentic AI.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-image.jpg`,
  telephone: CONTACT.phoneIntl,
  email: CONTACT.email,
  address: ADDRESS,
  geo: { "@type": "GeoCoordinates", latitude: "9.9548", longitude: "76.2674" },
  areaServed: { "@type": "Place", name: "Kerala, India" },
  sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.linkedin, SOCIAL.youtube],
};

const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CODiiN Tech Mentors Lab",
  image: `${SITE_URL}/images/og-image.jpg`,
  priceRange: "$$",
  address: ADDRESS,
  telephone: CONTACT.phoneIntl,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

export default async function HomePage() {
  /* The newest event still open for applications. Wrapped because this page is
     prerendered: an unreachable database would otherwise fail the deploy of
     every page, not just this one. */
  let promo: {
    slug: string;
    name: string;
    applicationEndDate: string;
    imageUrl: string | null;
  } | null = null;
  try {
    const upcoming = await prisma.event.findMany({
      where: { endDate: { gte: new Date() } },
      orderBy: { createdAt: "desc" },
      select: {
        slug: true,
        name: true,
        applicationEndDate: true,
        imageUrl: true,
      },
    });
    /* Filtered here rather than in the query: applicationEndDate is a String
       column holding two formats, so a SQL comparison would sort a bare
       "2026-08-20" against a full timestamp and get it wrong. */
    promo = upcoming.find((event) => !isClosed(event.applicationEndDate)) ?? null;
  } catch (error) {
    console.error("Could not load the promo event:", error);
  }

  return (
    <>
      <JsonLd data={ORGANIZATION} />
      <JsonLd data={LOCAL_BUSINESS} />

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
      {promo && (
        <EventPromo
          slug={promo.slug}
          name={promo.name}
          deadline={promo.applicationEndDate}
          imageUrl={promo.imageUrl}
        />
      )}
      <WhatsAppFloat />
    </>
  );
}
