export const SITE_URL = "https://www.codiin.com";

export const CONTACT = {
  email: "contact@codiin.com",
  phone: "+91 83018 90158",
  phoneHref: "tel:+918301890158",
  phoneIntl: "+91-8301890158",
  address:
    "AKL Heights, Seaport Road, Near Bharathmatha College, Kochi, Kerala - 682021",
  addressShort: "AKL Heights, Seaport Road, Kochi",
  company: "CODERZON Technologies Pvt Ltd",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/CodiinTechnologies",
  instagram: "https://www.instagram.com/codiin_/",
  linkedin: "https://www.linkedin.com/company/codiin/",
  youtube: "https://www.youtube.com/@codiin",
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/918301890158?text=${encodeURIComponent(message)}`;
}

/** The nine mentorship programs, in the order the site lists them. */
export const PROGRAMS = [
  { slug: "full-stack-javascript", title: "Full Stack JavaScript" },
  { slug: "full-stack-python", title: "Full Stack Python" },
  { slug: "full-stack-java", title: "Full Stack Java" },
  { slug: "full-stack-dotnet", title: "Full Stack .NET" },
  { slug: "hybrid-mobile-app", title: "Hybrid Mobile Apps" },
  { slug: "data-analytics", title: "Data Analytics" },
  { slug: "data-engineering", title: "Data Engineering" },
  { slug: "data-science", title: "Data Science" },
  { slug: "agentic-ai", title: "Agentic AI" },
] as const;

export type ProgramSlug = (typeof PROGRAMS)[number]["slug"];

/** Programs split the way the article-page footer groups them. */
export const DEV_PROGRAMS = PROGRAMS.slice(0, 5);
export const DATA_PROGRAMS = PROGRAMS.slice(5);
