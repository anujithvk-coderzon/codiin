import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Data Analytics Course Kochi | Power BI & Tableau Training",
  description: "Master Data Analytics with CODiiN Tech Mentors Lab. Learn Python, SQL, Power BI, Tableau, and statistical analysis with personalized 1:1 mentorship in Kochi.",
  keywords: ["data analytics course Kochi", "Power BI training Kerala", "Tableau course", "Python for data analysis", "business intelligence training Kochi", "Excel analytics Ernakulam"],
  alternates: { canonical: "/data-analytics" },
  openGraph: {
    type: "website",
    url: "/data-analytics",
    title: "Data Analytics Mentorship | CODiiN Tech Mentors Lab",
    description: "Extract insights from data using Python, SQL, Power BI, and Tableau with expert mentorship.",
    images: ["/images/data-analytics-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analytics Course Kochi | Power BI & Tableau | CODiiN",
    description: "Master data visualization, SQL, Python analytics with expert 1:1 mentorship.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Data Analytics Mentorship",
  "description": "Comprehensive mentorship program covering data analysis, visualization, and business intelligence",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "CODiiN Tech Mentors Lab",
    "url": "https://www.codiin.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    }
  },
  "educationalLevel": "Beginner to Intermediate",
  "occupationalCategory": "Data Analyst",
  "timeRequired": "P6M",
  "teaches": [
    "Python",
    "SQL",
    "Power BI",
    "Tableau",
    "Excel",
    "Statistical Analysis"
  ],
  "courseMode": "blended",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "location": {
      "@type": "Place",
      "name": "CODiiN Tech Mentors Lab",
      "address": "Kochi, Kerala, India"
    }
  }
} as const;

const SCHEMA_2 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.codiin.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Programs",
      "item": "https://www.codiin.com/#programs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Data Analytics",
      "item": "https://www.codiin.com/data-analytics"
    }
  ]
} as const;

const SCHEMA_3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need prior programming experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, we teach everything from scratch. Basic computer literacy and Excel familiarity are helpful, but not required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the program duration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program runs for 6 months with flexible scheduling. Sessions are personalized 1:1 to fit your availability."
      }
    },
    {
      "@type": "Question",
      "name": "Which tool should I focus on - Power BI or Tableau?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll learn both! Power BI is widely used in Microsoft-centric organizations, while Tableau is popular in startups and tech companies."
      }
    },
    {
      "@type": "Question",
      "name": "Is Python necessary for data analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Python is increasingly valued. We teach you enough Python to handle complex analysis and automation that visualization tools can't do."
      }
    },
    {
      "@type": "Question",
      "name": "What industries can I work in after this program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data analysts are needed everywhere - e-commerce, banking, healthcare, marketing, manufacturing, consulting, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Will I work on real datasets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You'll work with real-world datasets throughout the program and build a portfolio of projects."
      }
    },
    {
      "@type": "Question",
      "name": "How is the mentorship conducted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sessions are 1:1 with your mentor, either online or at our Kochi center. You get personalized attention and project reviews."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of support do I get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beyond sessions, you get doubt clearing support, project guidance, interview preparation, and access to our analytics community."
      }
    }
  ]
} as const;

export default function DataAnalyticsPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <JsonLd data={SCHEMA_2} />
      <JsonLd data={SCHEMA_3} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="program-hero">
          <div className="program-hero-bg" />
          <div className="container">
            <div className="program-hero-content">
              <Link href="/#programs" className="back-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {" All Programs"}
              </Link>
              <span className="program-hero-badge">
                {"Mentorship Program"}
              </span>
              <h1>
                {"Data Analytics"}
              </h1>
              <p className="program-hero-desc">
                {"Learn to transform raw data into actionable insights. Master the tools and techniques used by data analysts to drive business decisions."}
              </p>
              <div className="program-hero-meta">
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    {" "}
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>
                    {"6 Months"}
                  </span>
                </div>
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    {" "}
                    <circle cx="9" cy="7" r="4" />
                    {" "}
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>
                    {"1:1 Mentorship"}
                  </span>
                </div>
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    {" "}
                    <polyline points="2 17 12 22 22 17" />
                    {" "}
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  <span>
                    {"Project-Based"}
                  </span>
                </div>
              </div>
              <div className="program-hero-cta">
                <Link href="/#register" className="btn btn-primary btn-lg">
                  {"Enroll Now"}
                </Link>
                <Link href="/#contact" className="btn btn-outline btn-lg">
                  {"Talk to Mentor"}
                </Link>
              </div>
            </div>

            <div className="program-hero-visual">
              <Image
                src="/img/programs/data-analytics.png"
                alt="Data Analytics — the tools and techniques covered in this program"
                className="program-hero-img"
                width={512}
                height={512}
                priority
              />
            </div>
          </div>
        </section>
        <section className="program-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2>
                  {"What You'll Learn"}
                </h2>
                <p>
                  {"This program equips you with the skills to analyze data, create compelling visualizations, and communicate insights effectively. Perfect for those looking to start a career in data analytics or add analytical skills to their current role."}
                </p>
                <div className="learning-outcomes">
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Write efficient SQL queries for data extraction"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Analyze and manipulate data using Python (Pandas, NumPy)"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Create interactive dashboards with Power BI and Tableau"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Apply statistical methods to derive insights"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Master advanced Excel functions and pivot tables"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Present data stories to stakeholders effectively"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="overview-sidebar">
                <div className="sidebar-card">
                  <h3>
                    {"Program Highlights"}
                  </h3>
                  <ul className="highlights-list">
                    <li>
                      <strong>
                        {"Industry Tools"}
                      </strong>
                      <p>
                        {"Learn Power BI, Tableau, SQL, and Python"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Real Datasets"}
                      </strong>
                      <p>
                        {"Work with actual business data scenarios"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Portfolio Projects"}
                      </strong>
                      <p>
                        {"Build 3-4 analysis projects for your resume"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Business Context"}
                      </strong>
                      <p>
                        {"Learn to translate data into business insights"}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-learn">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {"Why Learn "}
                <span className="gradient-text">
                  {"Data Analytics?"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Every business decision today is driven by data"}
              </p>
            </div>
            <div className="why-cards">
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20V10" />
                    {" "}
                    <path d="M18 20V4" />
                    {" "}
                    <path d="M6 20v-4" />
                  </svg>
                </div>
                <h3>
                  {"High Demand Skill"}
                </h3>
                <p>
                  {"Data analysts are needed in every industry - from retail to healthcare, finance to tech startups."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    {" "}
                    <line x1="2" y1="12" x2="22" y2="12" />
                    {" "}
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>
                  {"Accessible Entry Point"}
                </h3>
                <p>
                  {"One of the most accessible paths into the data field. No prior coding experience required to start."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    {" "}
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3>
                  {"Business Impact"}
                </h3>
                <p>
                  {"Make real impact on business decisions. Your insights directly influence strategy and growth."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    {" "}
                    <line x1="8" y1="21" x2="16" y2="21" />
                    {" "}
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>
                  {"Powerful Tools"}
                </h3>
                <p>
                  {"Master industry-standard tools like Power BI, Tableau, SQL, and Python that employers value."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3>
                  {"Career Flexibility"}
                </h3>
                <p>
                  {"Work across industries or specialize in marketing, finance, operations, or product analytics."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    {" "}
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>
                  {"Strong Earning Potential"}
                </h3>
                <p>
                  {"Data analysts command competitive salaries with clear paths to senior and specialized roles."}
                </p>
              </div>
            </div>
            <div className="why-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {"23%"}
                </span>
                <span className="stat-label">
                  {"Job Growth Rate"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"500K+"}
                </span>
                <span className="stat-label">
                  {"Analytics Jobs in India"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"80%"}
                </span>
                <span className="stat-label">
                  {"Companies Use Data Analytics"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"#5"}
                </span>
                <span className="stat-label">
                  {"LinkedIn Top Skills"}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="career-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {"Career "}
                <span className="gradient-text">
                  {"Opportunities"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Roles you can pursue after mastering Data Analytics"}
              </p>
            </div>
            <div className="career-grid">
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20V10" />
                    {" "}
                    <path d="M18 20V4" />
                    {" "}
                    <path d="M6 20v-4" />
                  </svg>
                </div>
                <h3>
                  {"Data Analyst"}
                </h3>
                <p>
                  {"Analyze data, create reports, and provide insights to drive business decisions."}
                </p>
                <span className="demand-badge">
                  {"High Demand"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    {" "}
                    <line x1="8" y1="21" x2="16" y2="21" />
                    {" "}
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>
                  {"BI Analyst"}
                </h3>
                <p>
                  {"Build dashboards and reports using Power BI and Tableau for business intelligence."}
                </p>
                <span className="demand-badge">
                  {"High Demand"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    {" "}
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    {" "}
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    {" "}
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3>
                  {"Marketing Analyst"}
                </h3>
                <p>
                  {"Analyze marketing campaigns, customer behavior, and optimize marketing spend."}
                </p>
                <span className="demand-badge">
                  {"Trending"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    {" "}
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>
                  {"Financial Analyst"}
                </h3>
                <p>
                  {"Analyze financial data, create forecasts, and support investment decisions."}
                </p>
                <span className="demand-badge">
                  {"Stable"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    {" "}
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <h3>
                  {"Operations Analyst"}
                </h3>
                <p>
                  {"Optimize business processes and improve operational efficiency through data analysis."}
                </p>
                <span className="demand-badge">
                  {"Growing"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    {" "}
                    <circle cx="9" cy="7" r="4" />
                    {" "}
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    {" "}
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>
                  {"Product Analyst"}
                </h3>
                <p>
                  {"Analyze product usage data to drive product decisions and improve user experience."}
                </p>
                <span className="demand-badge">
                  {"Trending"}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="tech-deep-dive">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {"Technologies "}
                <span className="gradient-text">
                  {"Deep Dive"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Master the essential data analytics toolkit"}
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>
                  {"Visualization Tools"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-analytics/articles/power-bi" className="tech-item">
                    <h4>
                      {"Power BI"}
                    </h4>
                    {" "}
                    <p>
                      {"Microsoft's powerful BI tool for interactive dashboards and enterprise reporting."}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/tableau" className="tech-item">
                    <h4>
                      {"Tableau"}
                    </h4>
                    {" "}
                    <p>
                      {"Industry-leading visualization platform for creating stunning, interactive charts."}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/excel-analytics" className="tech-item">
                    <h4>
                      {"Excel"}
                    </h4>
                    {" "}
                    <p>
                      {"Advanced Excel with pivot tables, charts, and data analysis functions."}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/dashboard-design" className="tech-item">
                    <h4>
                      {"Dashboard Design"}
                    </h4>
                    {" "}
                    <p>
                      {"Learn principles for creating effective, user-friendly analytics dashboards."}
                    </p>
                  </Link>
                  <div className="tech-item">
                    <h4>
                      {"Google Data Studio"}
                    </h4>
                    <p>
                      {"Free tool for creating shareable dashboards connected to various data sources."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Data & SQL"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-analytics/articles/sql-analytics" className="tech-item">
                    <h4>
                      {"SQL"}
                    </h4>
                    {" "}
                    <p>
                      {"Query databases to extract, filter, and aggregate data for analysis."}
                    </p>
                  </Link>
                  <div className="tech-item">
                    <h4>
                      {"PostgreSQL/MySQL"}
                    </h4>
                    <p>
                      {"Work with popular relational databases used in production environments."}
                    </p>
                  </div>
                  <Link href="/data-analytics/articles/power-query" className="tech-item">
                    <h4>
                      {"Power Query"}
                    </h4>
                    {" "}
                    <p>
                      {"Transform and clean data within Power BI and Excel environments."}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/dax" className="tech-item">
                    <h4>
                      {"DAX"}
                    </h4>
                    {" "}
                    <p>
                      {"Data Analysis Expressions for creating powerful measures in Power BI."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Data & SQL"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-analytics/articles/data-cleaning" className="tech-item">
                    <h4>
                      {"Data Cleaning"}
                    </h4>
                    {" "}
                    <p>
                      {"Master techniques for handling missing data, duplicates, and outliers."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Python & Statistics"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-analytics/articles/pandas" className="tech-item">
                    <h4>
                      {"Pandas"}
                    </h4>
                    {" "}
                    <p>
                      {"Python library for data manipulation, cleaning, and analysis."}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/data-visualization-python" className="tech-item">
                    <h4>
                      {"Matplotlib & Seaborn"}
                    </h4>
                    {" "}
                    <p>
                      {"Create publication-quality visualizations in Python."}
                    </p>
                  </Link>
                  <div className="tech-item">
                    <h4>
                      {"NumPy"}
                    </h4>
                    <p>
                      {"Numerical computing foundation for statistical calculations."}
                    </p>
                  </div>
                  <Link href="/data-analytics/articles/statistics-analytics" className="tech-item">
                    <h4>
                      {"Statistical Analysis"}
                    </h4>
                    {" "}
                    <p>
                      {"Hypothesis testing, correlation, regression, and A/B testing."}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/ab-testing" className="tech-item">
                    <h4>
                      {"A/B Testing"}
                    </h4>
                    {" "}
                    <p>
                      {"Design experiments, calculate sample sizes, and interpret statistical results."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Analytics Platforms"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-analytics/articles/google-analytics" className="tech-item">
                    <h4>
                      {"Google Analytics 4"}
                    </h4>
                    {" "}
                    <p>
                      {"Master web analytics with GA4's event-based model and reporting."}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/data-storytelling" className="tech-item">
                    <h4>
                      {"Data Storytelling"}
                    </h4>
                    {" "}
                    <p>
                      {"Transform data insights into compelling narratives that drive action."}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-curriculum">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {"Curriculum "}
                <span className="gradient-text">
                  {"Overview"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"A practical learning path covering essential data analytics skills"}
              </p>
            </div>
            <div className="curriculum-grid">
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"01"}
                  </span>
                  <Link href="/data-analytics/articles/excel-analytics">
                    <h3>
                      {"Excel Mastery"}
                    </h3>
                  </Link>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-analytics/articles/excel-analytics">
                      {"Advanced Formulas (VLOOKUP, INDEX-MATCH)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/excel-analytics">
                      {"Pivot Tables & Pivot Charts"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/data-cleaning">
                      {"Data Cleaning Techniques"}
                    </Link>
                  </li>
                  <li>
                    {"Conditional Formatting"}
                  </li>
                  <li>
                    {"Dashboard Creation in Excel"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"02"}
                  </span>
                  <Link href="/data-analytics/articles/sql-analytics">
                    <h3>
                      {"SQL for Analytics"}
                    </h3>
                  </Link>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-analytics/articles/sql-analytics">
                      {"SELECT, WHERE, ORDER BY, GROUP BY"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/sql-analytics">
                      {"JOINs (INNER, LEFT, RIGHT, FULL)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/sql-analytics">
                      {"Subqueries & CTEs"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/sql-analytics">
                      {"Window Functions"}
                    </Link>
                  </li>
                  <li>
                    {"Query Optimization"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"03"}
                  </span>
                  <Link href="/data-analytics/articles/pandas">
                    <h3>
                      {"Python for Data Analysis"}
                    </h3>
                  </Link>
                </div>
                <ul className="module-topics">
                  <li>
                    {"Python Fundamentals"}
                  </li>
                  <li>
                    {"NumPy for Numerical Computing"}
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/pandas">
                      {"Pandas for Data Manipulation"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/data-cleaning">
                      {"Data Cleaning & Preprocessing"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/data-visualization-python">
                      {"Matplotlib & Seaborn Visualization"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"04"}
                  </span>
                  <Link href="/data-analytics/articles/statistics-analytics">
                    <h3>
                      {"Statistics for Analytics"}
                    </h3>
                  </Link>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-analytics/articles/statistics-analytics">
                      {"Descriptive Statistics"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/statistics-analytics">
                      {"Probability Distributions"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/statistics-analytics">
                      {"Hypothesis Testing"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/statistics-analytics">
                      {"Correlation & Regression"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/ab-testing">
                      {"A/B Testing Fundamentals"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"05"}
                  </span>
                  <Link href="/data-analytics/articles/power-bi">
                    <h3>
                      {"Power BI"}
                    </h3>
                  </Link>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-analytics/articles/power-query">
                      {"Data Import & Transformation (Power Query)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/power-bi">
                      {"Data Modeling & Relationships"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/dax">
                      {"DAX Formulas & Measures"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/power-bi">
                      {"Interactive Visualizations"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/dashboard-design">
                      {"Dashboard Design Best Practices"}
                    </Link>
                  </li>
                  <li>
                    {"Publishing & Sharing Reports"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"06"}
                  </span>
                  <Link href="/data-analytics/articles/tableau">
                    <h3>
                      {"Tableau"}
                    </h3>
                  </Link>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-analytics/articles/tableau">
                      {"Connecting to Data Sources"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/tableau">
                      {"Creating Charts & Graphs"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/tableau">
                      {"Calculated Fields & Parameters"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/tableau">
                      {"Dashboard Actions & Filters"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-analytics/articles/data-storytelling">
                      {"Storytelling with Data"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="projects-detailed">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {"Projects You'll "}
                <span className="gradient-text">
                  {"Build"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Real-world analytics projects that demonstrate your skills"}
              </p>
            </div>
            <div className="projects-detailed-grid">
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="20" x2="12" y2="10" />
                      {" "}
                      <line x1="18" y1="20" x2="18" y2="4" />
                      {" "}
                      <line x1="6" y1="20" x2="6" y2="16" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Power BI"}
                  </span>
                </div>
                <h3>
                  {"Sales Performance Dashboard"}
                </h3>
                <p>
                  {"Analyze sales data to identify trends, top products, and regional performance with interactive visuals."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Multi-page interactive dashboard"}
                    </li>
                    <li>
                      {"Year-over-year comparison analysis"}
                    </li>
                    <li>
                      {"Product and region drill-downs"}
                    </li>
                    <li>
                      {"DAX measures for KPI calculations"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Power BI"}
                  </span>
                  <span>
                    {"SQL"}
                  </span>
                  <span>
                    {"DAX"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      {" "}
                      <circle cx="9" cy="7" r="4" />
                      {" "}
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Python"}
                  </span>
                </div>
                <h3>
                  {"Customer Segmentation Analysis"}
                </h3>
                <p>
                  {"Segment customers based on behavior patterns and create targeted marketing recommendations."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"RFM analysis (Recency, Frequency, Monetary)"}
                    </li>
                    <li>
                      {"K-means clustering visualization"}
                    </li>
                    <li>
                      {"Customer lifetime value calculation"}
                    </li>
                    <li>
                      {"Actionable marketing recommendations"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Python"}
                  </span>
                  <span>
                    {"Pandas"}
                  </span>
                  <span>
                    {"Scikit-learn"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      {" "}
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Tableau"}
                  </span>
                </div>
                <h3>
                  {"Financial KPI Tracker"}
                </h3>
                <p>
                  {"Build an executive dashboard tracking revenue, expenses, and profitability metrics for leadership."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Real-time financial metrics overview"}
                    </li>
                    <li>
                      {"Budget vs. actual variance analysis"}
                    </li>
                    <li>
                      {"Trend analysis with forecasting"}
                    </li>
                    <li>
                      {"Executive-ready presentation format"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Tableau"}
                  </span>
                  <span>
                    {"Excel"}
                  </span>
                  <span>
                    {"SQL"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      {" "}
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      {" "}
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"End-to-End"}
                  </span>
                </div>
                <h3>
                  {"E-commerce Analytics Report"}
                </h3>
                <p>
                  {"Complete end-to-end analysis of an online store with conversion funnels and cohort analysis."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Conversion funnel analysis"}
                    </li>
                    <li>
                      {"Cohort retention analysis"}
                    </li>
                    <li>
                      {"Product performance metrics"}
                    </li>
                    <li>
                      {"A/B test result interpretation"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Python"}
                  </span>
                  <span>
                    {"SQL"}
                  </span>
                  <span>
                    {"Power BI"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="skills-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {"Skills You'll "}
                <span className="gradient-text">
                  {"Master"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Technical and analytical skills for data-driven decision making"}
              </p>
            </div>
            <div className="skills-grid">
              <div className="skills-category">
                <h3>
                  {"Technical Skills"}
                </h3>
                <div className="skill-bars">
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>
                        {"SQL & Database Queries"}
                      </span>
                      <span>
                        {"Advanced"}
                      </span>
                    </div>
                    <div className="skill-progress" style={{ "--progress": "90%" } as CSSProperties} />
                  </div>
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>
                        {"Power BI & Tableau"}
                      </span>
                      <span>
                        {"Advanced"}
                      </span>
                    </div>
                    <div className="skill-progress" style={{ "--progress": "90%" } as CSSProperties} />
                  </div>
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>
                        {"Python for Analysis"}
                      </span>
                      <span>
                        {"Intermediate"}
                      </span>
                    </div>
                    <div className="skill-progress" style={{ "--progress": "75%" } as CSSProperties} />
                  </div>
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>
                        {"Excel & Spreadsheets"}
                      </span>
                      <span>
                        {"Advanced"}
                      </span>
                    </div>
                    <div className="skill-progress" style={{ "--progress": "95%" } as CSSProperties} />
                  </div>
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>
                        {"Statistical Analysis"}
                      </span>
                      <span>
                        {"Intermediate"}
                      </span>
                    </div>
                    <div className="skill-progress" style={{ "--progress": "80%" } as CSSProperties} />
                  </div>
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>
                        {"Data Cleaning & ETL"}
                      </span>
                      <span>
                        {"Advanced"}
                      </span>
                    </div>
                    <div className="skill-progress" style={{ "--progress": "85%" } as CSSProperties} />
                  </div>
                </div>
              </div>
              <div className="skills-category">
                <h3>
                  {"Professional Skills"}
                </h3>
                <div className="skill-tags">
                  <span className="skill-tag">
                    {"Data Storytelling"}
                  </span>
                  <span className="skill-tag">
                    {"Business Acumen"}
                  </span>
                  <span className="skill-tag">
                    {"Dashboard Design"}
                  </span>
                  <span className="skill-tag">
                    {"Report Writing"}
                  </span>
                  <span className="skill-tag">
                    {"Stakeholder Communication"}
                  </span>
                  <span className="skill-tag">
                    {"Problem Solving"}
                  </span>
                  <span className="skill-tag">
                    {"Critical Thinking"}
                  </span>
                  <span className="skill-tag">
                    {"Presentation Skills"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-audience">
          <div className="container">
            <div className="audience-grid">
              <div className="audience-content">
                <h2>
                  {"Who Is This "}
                  <span className="gradient-text">
                    {"Program For?"}
                  </span>
                </h2>
                <div className="audience-list">
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        {" "}
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Aspiring Data Analysts"}
                      </h3>
                      <p>
                        {"Students or freshers who want to start a career in data analytics."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        {" "}
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Business Professionals"}
                      </h3>
                      <p>
                        {"Managers, marketers, or operations professionals wanting to become data-driven."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        {" "}
                        <line x1="12" y1="8" x2="12" y2="12" />
                        {" "}
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Excel Users"}
                      </h3>
                      <p>
                        {"Those comfortable with Excel who want to level up to advanced analytics tools."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="audience-prereq">
                <div className="prereq-card">
                  <h3>
                    {"Prerequisites"}
                  </h3>
                  <ul>
                    <li>
                      {"Basic computer skills"}
                    </li>
                    <li>
                      {"Familiarity with Excel (basic level)"}
                    </li>
                    <li>
                      {"Curiosity about data and problem-solving"}
                    </li>
                    <li>
                      {"No programming experience required"}
                    </li>
                  </ul>
                  <p className="prereq-note">
                    {"We'll teach you everything from scratch, including Python programming!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {"Frequently Asked "}
                <span className="gradient-text">
                  {"Questions"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Everything you need to know about our Data Analytics program"}
              </p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>
                  {"Do I need prior programming experience?"}
                </h3>
                <p>
                  {"No, we teach everything from scratch. Basic computer literacy and Excel familiarity are helpful, but not required."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What is the program duration?"}
                </h3>
                <p>
                  {"The program runs for 6 months with flexible scheduling. Sessions are personalized 1:1 to fit your availability."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Which tool should I focus on - Power BI or Tableau?"}
                </h3>
                <p>
                  {"You'll learn both! Power BI is widely used in Microsoft-centric organizations, while Tableau is popular in startups and tech companies. Having both skills maximizes your opportunities."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Is Python necessary for data analytics?"}
                </h3>
                <p>
                  {"Python is increasingly valued for analytics roles. We teach you enough Python to handle complex analysis and automation that visualization tools alone can't do."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What industries can I work in after this program?"}
                </h3>
                <p>
                  {"Data analysts are needed everywhere - e-commerce, banking, healthcare, marketing, manufacturing, consulting, and more. Your skills are transferable across industries."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Will I work on real datasets?"}
                </h3>
                <p>
                  {"Yes! You'll work with real-world datasets throughout the program and build a portfolio of projects that demonstrate your skills to employers."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"How is the mentorship conducted?"}
                </h3>
                <p>
                  {"Sessions are 1:1 with your mentor, either online or at our Kochi center. You get personalized attention, project reviews, and career guidance."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What kind of support do I get?"}
                </h3>
                <p>
                  {"Beyond sessions, you get doubt clearing support, project guidance, interview preparation, and access to our analytics community."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Ready to Become a "}
                <span className="gradient-text">
                  {"Data Analyst?"}
                </span>
              </h2>
              <p>
                {"Book a free consultation to discuss your goals and create a personalized learning plan."}
              </p>
              <div className="cta-buttons">
                <Link href="/#register" className="btn btn-primary btn-lg">
                  {"Register Now"}
                </Link>
                <Link href="/#contact" className="btn btn-outline btn-lg">
                  {"Ask Questions"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="program" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in the Data Analytics program."} />
    </>
  );
}
