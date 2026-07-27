import { CONTACT, SITE_URL, SOCIAL } from "./site";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "AKL Heights, Seaport Road, Near Bharathmatha College",
  addressLocality: "Kochi",
  addressRegion: "Kerala",
  postalCode: "682021",
  addressCountry: "IN",
};

const PROVIDER = {
  "@type": "Organization",
  name: "CODiiN Tech Mentors Lab",
};

const COURSES = [
  {
    name: "Full Stack Web Development",
    description:
      "Complete mentorship in modern web technologies including React, Node.js, and databases",
  },
  {
    name: "Data Analytics",
    description:
      "Master data analysis, visualization, and business intelligence tools",
  },
  {
    name: "Data Engineering",
    description: "Build robust data pipelines and infrastructure with modern tools",
  },
  {
    name: "Data Science",
    description:
      "Advanced machine learning, deep learning, and statistical analysis",
  },
  {
    name: "Agentic AI",
    description:
      "Build autonomous AI agents using LLMs, LangChain, and modern AI frameworks",
  },
];

export const organizationSchema = {
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.9548",
    longitude: "76.2674",
  },
  areaServed: { "@type": "Place", name: "Kerala, India" },
  sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.linkedin, SOCIAL.youtube],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tech Mentorship Programs",
    itemListElement: COURSES.map((course) => ({
      "@type": "Course",
      ...course,
      provider: PROVIDER,
    })),
  },
};

export const localBusinessSchema = {
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

export function courseSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      ...PROVIDER,
      sameAs: SITE_URL,
    },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    author: PROVIDER,
    publisher: PROVIDER,
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}
