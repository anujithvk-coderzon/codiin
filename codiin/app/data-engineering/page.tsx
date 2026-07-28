import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Data Engineering Course Kochi | Apache Spark Training",
  description: "Master Data Engineering with CODiiN Tech Mentors Lab. Learn Apache Spark, Kafka, Airflow, AWS, and build scalable data pipelines with personalized 1:1 mentorship in Kochi.",
  keywords: ["data engineering course Kochi", "Apache Spark training Kerala", "ETL pipeline course", "big data training Kochi", "cloud data engineering AWS", "data pipeline training Ernakulam"],
  alternates: { canonical: "/data-engineering" },
  openGraph: {
    type: "website",
    url: "/data-engineering",
    title: "Data Engineering Mentorship | CODiiN Tech Mentors Lab",
    description: "Build scalable data pipelines and infrastructure with Apache Spark, Kafka, and cloud platforms.",
    images: ["/images/data-engineering-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Engineering Course Kochi | Spark & Kafka | CODiiN",
    description: "Master Apache Spark, Kafka, Airflow, AWS with expert 1:1 mentorship.",
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
  "name": "Data Engineering Mentorship",
  "description": "Comprehensive mentorship program covering data pipelines, big data processing, and cloud infrastructure",
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
  "educationalLevel": "Intermediate to Advanced",
  "occupationalCategory": "Data Engineer",
  "timeRequired": "P6M",
  "teaches": [
    "Apache Spark",
    "Apache Kafka",
    "Apache Airflow",
    "AWS",
    "Data Warehousing",
    "ETL Pipelines"
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
      "name": "Data Engineering",
      "item": "https://www.codiin.com/data-engineering"
    }
  ]
} as const;

const SCHEMA_3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What prerequisites do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You need proficiency in Python and strong SQL knowledge. Some experience with databases and command line is expected."
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
      "name": "How is data engineering different from data science?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data engineers build the infrastructure and pipelines that move and transform data. Data scientists analyze that data for insights."
      }
    },
    {
      "@type": "Question",
      "name": "Which cloud platform will I learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus primarily on AWS (S3, Redshift, Glue, EMR) as it has the largest market share. The concepts transfer to GCP and Azure."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need Spark experience before joining?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, we teach Spark from scratch. You'll go from basics to building production-grade Spark applications."
      }
    },
    {
      "@type": "Question",
      "name": "Will I work on real infrastructure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You'll work with actual cloud services, set up real pipelines, and deploy production-like systems."
      }
    },
    {
      "@type": "Question",
      "name": "How is the mentorship conducted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sessions are 1:1 with your mentor, either online or at our Kochi center. You get personalized attention and architecture reviews."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of support do I get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beyond sessions, you get doubt clearing support, project guidance, interview preparation, and access to our data engineering community."
      }
    }
  ]
} as const;

export default function DataEngineeringPage() {
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
                {"Data Engineering"}
              </h1>
              <p className="program-hero-desc">
                {"Learn to build robust, scalable data pipelines and infrastructure. Master the tools that power modern data-driven organizations."}
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
                  {"This program focuses on building the infrastructure that enables data-driven decision making. You'll learn to design, build, and maintain the pipelines that move and transform data at scale."}
                </p>
                <div className="learning-outcomes">
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Design and implement ETL/ELT pipelines"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Process large-scale data with Apache Spark"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build streaming pipelines with Apache Kafka"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Orchestrate workflows with Airflow"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Deploy data solutions on AWS/GCP/Azure"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Design data warehouses and data lakes"}
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
                        {"Spark, Kafka, Airflow, dbt, and cloud platforms"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Cloud Experience"}
                      </strong>
                      <p>
                        {"Hands-on with AWS (S3, Redshift, Glue)"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Real Pipelines"}
                      </strong>
                      <p>
                        {"Build production-grade data infrastructure"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Architecture Design"}
                      </strong>
                      <p>
                        {"Learn to design scalable data systems"}
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
                  {"Data Engineering?"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Build the infrastructure that powers data-driven organizations"}
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
                  {"Explosive Demand"}
                </h3>
                <p>
                  {"Data engineering is one of the fastest-growing tech roles. Companies need engineers to build data infrastructure."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    {" "}
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    {" "}
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
                <h3>
                  {"Critical Role"}
                </h3>
                <p>
                  {"Data engineers enable analytics and ML teams. Without good data infrastructure, data science fails."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  </svg>
                </div>
                <h3>
                  {"Cloud-Native Skills"}
                </h3>
                <p>
                  {"Master cloud platforms (AWS, GCP, Azure) and modern tools that companies are actively adopting."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3>
                  {"Real-time Processing"}
                </h3>
                <p>
                  {"Learn stream processing with Kafka and Spark Streaming - skills needed for modern data architectures."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" />
                    {" "}
                    <rect x="14" y="3" width="7" height="7" />
                    {" "}
                    <rect x="14" y="14" width="7" height="7" />
                    {" "}
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
                <h3>
                  {"Big Data Scale"}
                </h3>
                <p>
                  {"Work with petabytes of data using distributed systems like Spark and modern data lakehouse architectures."}
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
                  {"Premium Salaries"}
                </h3>
                <p>
                  {"Data engineers command some of the highest salaries in tech due to specialized skills and high demand."}
                </p>
              </div>
            </div>
            <div className="why-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {"50%"}
                </span>
                <span className="stat-label">
                  {"Faster Growth Than Average"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"100K+"}
                </span>
                <span className="stat-label">
                  {"DE Jobs in India"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"#2"}
                </span>
                <span className="stat-label">
                  {"Most In-Demand Data Role"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"5:1"}
                </span>
                <span className="stat-label">
                  {"Ratio of DE to DS Jobs"}
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
                {"Roles you can pursue after mastering Data Engineering"}
              </p>
            </div>
            <div className="career-grid">
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    {" "}
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    {" "}
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
                <h3>
                  {"Data Engineer"}
                </h3>
                <p>
                  {"Design and build data pipelines, ETL processes, and data infrastructure for analytics."}
                </p>
                <span className="demand-badge">
                  {"High Demand"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  </svg>
                </div>
                <h3>
                  {"Cloud Data Engineer"}
                </h3>
                <p>
                  {"Build and manage data solutions on AWS, GCP, or Azure cloud platforms."}
                </p>
                <span className="demand-badge">
                  {"Trending"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <h3>
                  {"Streaming Engineer"}
                </h3>
                <p>
                  {"Build real-time data pipelines using Kafka, Spark Streaming, and Flink."}
                </p>
                <span className="demand-badge">
                  {"Specialized"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" />
                    {" "}
                    <rect x="14" y="3" width="7" height="7" />
                    {" "}
                    <rect x="14" y="14" width="7" height="7" />
                    {" "}
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
                <h3>
                  {"Big Data Engineer"}
                </h3>
                <p>
                  {"Work with large-scale distributed systems processing petabytes of data."}
                </p>
                <span className="demand-badge">
                  {"High Demand"}
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
                  {"Platform Engineer"}
                </h3>
                <p>
                  {"Build and maintain data platforms that support analytics and ML workloads."}
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
                  {"Data Architect"}
                </h3>
                <p>
                  {"Design enterprise data architectures, data lakes, and warehouse solutions."}
                </p>
                <span className="demand-badge">
                  {"Senior Role"}
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
                {"Master the modern data engineering stack"}
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>
                  {"Processing & Compute"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-engineering/articles/apache-spark" className="tech-item">
                    <h4>
                      {"Apache Spark"}
                    </h4>
                    {" "}
                    <p>
                      {"Distributed computing for batch and stream processing of large datasets."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/pyspark" className="tech-item">
                    <h4>
                      {"PySpark"}
                    </h4>
                    {" "}
                    <p>
                      {"Python API for Spark - DataFrames, SQL, UDFs, and performance tuning."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/spark-streaming" className="tech-item">
                    <h4>
                      {"Spark Streaming"}
                    </h4>
                    {" "}
                    <p>
                      {"Real-time stream processing with Structured Streaming and watermarks."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-kafka" className="tech-item">
                    <h4>
                      {"Apache Kafka"}
                    </h4>
                    {" "}
                    <p>
                      {"Distributed event streaming for real-time data pipelines and integration."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-flink" className="tech-item">
                    <h4>
                      {"Apache Flink"}
                    </h4>
                    {" "}
                    <p>
                      {"Stream processing framework with exactly-once semantics and low latency."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-airflow" className="tech-item">
                    <h4>
                      {"Apache Airflow"}
                    </h4>
                    {" "}
                    <p>
                      {"Workflow orchestration for scheduling and monitoring data pipelines."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/dbt" className="tech-item">
                    <h4>
                      {"dbt"}
                    </h4>
                    {" "}
                    <p>
                      {"Data transformation tool for building reliable, tested data models."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/schema-registry" className="tech-item">
                    <h4>
                      {"Schema Registry"}
                    </h4>
                    {" "}
                    <p>
                      {"Manage and evolve data schemas for Kafka streaming pipelines."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Storage & Data Modeling"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-engineering/articles/data-modeling" className="tech-item">
                    <h4>
                      {"Data Modeling"}
                    </h4>
                    {" "}
                    <p>
                      {"Star schema, snowflake schema, and Data Vault design patterns."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/delta-lake" className="tech-item">
                    <h4>
                      {"Delta Lake"}
                    </h4>
                    {" "}
                    <p>
                      {"ACID transactions, time travel, and schema evolution for data lakes."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-iceberg" className="tech-item">
                    <h4>
                      {"Apache Iceberg"}
                    </h4>
                    {" "}
                    <p>
                      {"Open table format with hidden partitioning and partition evolution."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/medallion-architecture" className="tech-item">
                    <h4>
                      {"Medallion Architecture"}
                    </h4>
                    {" "}
                    <p>
                      {"Bronze, silver, and gold layers for lakehouse data organization."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/slowly-changing-dimensions" className="tech-item">
                    <h4>
                      {"Slowly Changing Dimensions"}
                    </h4>
                    {" "}
                    <p>
                      {"SCD Types 1, 2, 3, and 6 for tracking historical data changes."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-warehousing" className="tech-item">
                    <h4>
                      {"Data Warehouses"}
                    </h4>
                    {" "}
                    <p>
                      {"Build star schema models on Snowflake, Redshift, or BigQuery."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/sql" className="tech-item">
                    <h4>
                      {"PostgreSQL"}
                    </h4>
                    {" "}
                    <p>
                      {"Advanced SQL, query optimization, and database design principles."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Data Quality & CDC"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-engineering/articles/great-expectations" className="tech-item">
                    <h4>
                      {"Great Expectations"}
                    </h4>
                    {" "}
                    <p>
                      {"Data validation, quality testing, and expectation suites for pipelines."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/change-data-capture" className="tech-item">
                    <h4>
                      {"Change Data Capture"}
                    </h4>
                    {" "}
                    <p>
                      {"Stream database changes with Debezium and Kafka Connect."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Cloud Platforms"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-engineering/articles/aws-data-engineering" className="tech-item">
                    <h4>
                      {"AWS Data Services"}
                    </h4>
                    {" "}
                    <p>
                      {"S3, Glue, Redshift, EMR, and Kinesis for cloud data engineering."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/bigquery" className="tech-item">
                    <h4>
                      {"Google BigQuery"}
                    </h4>
                    {" "}
                    <p>
                      {"Serverless data warehouse with SQL analytics and BigQuery ML."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/azure-data-services" className="tech-item">
                    <h4>
                      {"Azure Data Services"}
                    </h4>
                    {" "}
                    <p>
                      {"Synapse Analytics, Data Factory, and Data Lake Storage Gen2."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/snowflake" className="tech-item">
                    <h4>
                      {"Snowflake"}
                    </h4>
                    {" "}
                    <p>
                      {"Cloud data warehouse with streams, tasks, and time travel."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/databricks" className="tech-item">
                    <h4>
                      {"Databricks"}
                    </h4>
                    {" "}
                    <p>
                      {"Unified analytics platform with Unity Catalog and lakehouse architecture."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"DevOps & Infrastructure"}
                </h3>
                <div className="tech-items">
                  <Link href="/data-engineering/articles/docker" className="tech-item">
                    <h4>
                      {"Docker & Kubernetes"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerize and orchestrate data applications and pipelines."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/terraform" className="tech-item">
                    <h4>
                      {"Terraform"}
                    </h4>
                    {" "}
                    <p>
                      {"Infrastructure as Code for reproducible data infrastructure."}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-lakes" className="tech-item">
                    <h4>
                      {"Data Lakes"}
                    </h4>
                    {" "}
                    <p>
                      {"Design and implement data lakes with Delta Lake and Apache Iceberg."}
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
                {"A comprehensive path to becoming a skilled data engineer"}
              </p>
            </div>
            <div className="curriculum-grid">
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"01"}
                  </span>
                  <h3>
                    <Link href="/data-engineering/articles/sql">
                      {"Python & SQL Foundations"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"Python for Data Engineering"}
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/sql">
                      {"Advanced SQL & Query Optimization"}
                    </Link>
                  </li>
                  <li>
                    {"Database Design Principles"}
                  </li>
                  <li>
                    {"Data Modeling Techniques"}
                  </li>
                  <li>
                    {"Working with APIs"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"02"}
                  </span>
                  <h3>
                    <Link href="/data-engineering/articles/apache-spark">
                      {"Big Data with Spark"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-engineering/articles/apache-spark">
                      {"Spark Architecture & Components"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/pyspark">
                      {"PySpark DataFrames & SQL"}
                    </Link>
                  </li>
                  <li>
                    {"Data Transformations at Scale"}
                  </li>
                  <li>
                    {"Spark Optimization Techniques"}
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/spark-streaming">
                      {"Spark Structured Streaming"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"03"}
                  </span>
                  <h3>
                    <Link href="/data-engineering/articles/apache-kafka">
                      {"Stream Processing"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-engineering/articles/apache-kafka">
                      {"Apache Kafka Fundamentals"}
                    </Link>
                  </li>
                  <li>
                    {"Producers & Consumers"}
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/schema-registry">
                      {"Kafka Connect & Schema Registry"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/apache-flink">
                      {"Apache Flink Stream Processing"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/change-data-capture">
                      {"Change Data Capture (CDC)"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"04"}
                  </span>
                  <h3>
                    <Link href="/data-engineering/articles/apache-airflow">
                      {"Workflow Orchestration"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-engineering/articles/apache-airflow">
                      {"Apache Airflow Architecture"}
                    </Link>
                  </li>
                  <li>
                    {"DAGs & Operators"}
                  </li>
                  <li>
                    {"Task Dependencies & Scheduling"}
                  </li>
                  <li>
                    {"Error Handling & Retries"}
                  </li>
                  <li>
                    {"Monitoring & Alerting"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"05"}
                  </span>
                  <h3>
                    <Link href="/data-engineering/articles/data-warehousing">
                      {"Data Warehousing"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-engineering/articles/data-modeling">
                      {"Data Modeling (Star/Snowflake/Data Vault)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/dbt">
                      {"dbt (Data Build Tool)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/great-expectations">
                      {"Data Quality & Great Expectations"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/slowly-changing-dimensions">
                      {"Slowly Changing Dimensions (SCD)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/medallion-architecture">
                      {"Medallion Architecture"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"06"}
                  </span>
                  <h3>
                    <Link href="/data-engineering/articles/aws-data-engineering">
                      {"Cloud Platforms"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-engineering/articles/aws-data-engineering">
                      {"AWS S3, Glue, Redshift"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/bigquery">
                      {"Google BigQuery & GCP"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/azure-data-services">
                      {"Azure Synapse & Data Services"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/snowflake">
                      {"Snowflake Data Cloud"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/databricks">
                      {"Databricks Lakehouse Platform"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"07"}
                  </span>
                  <h3>
                    <Link href="/data-engineering/articles/delta-lake">
                      {"Lakehouse & Table Formats"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-engineering/articles/delta-lake">
                      {"Delta Lake ACID Transactions"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/apache-iceberg">
                      {"Apache Iceberg Table Format"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/data-lakes">
                      {"Data Lakes Architecture"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/terraform">
                      {"Infrastructure as Code (Terraform)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-engineering/articles/etl-pipelines">
                      {"CI/CD for Data Pipelines"}
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
                {"Production-grade data engineering projects for your portfolio"}
              </p>
            </div>
            <div className="projects-detailed-grid">
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Streaming"}
                  </span>
                </div>
                <h3>
                  {"Real-time Analytics Pipeline"}
                </h3>
                <p>
                  {"Build a streaming pipeline that ingests, processes, and visualizes data in real-time."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Kafka producer for event ingestion"}
                    </li>
                    <li>
                      {"Spark Streaming for processing"}
                    </li>
                    <li>
                      {"Real-time aggregations and windowing"}
                    </li>
                    <li>
                      {"Dashboard integration for visualization"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Kafka"}
                  </span>
                  <span>
                    {"Spark"}
                  </span>
                  <span>
                    {"PostgreSQL"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      {" "}
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      {" "}
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Cloud"}
                  </span>
                </div>
                <h3>
                  {"Data Warehouse on Cloud"}
                </h3>
                <p>
                  {"Design and implement a star schema data warehouse on AWS Redshift with dbt transformations."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Star schema dimensional modeling"}
                    </li>
                    <li>
                      {"dbt models with testing and docs"}
                    </li>
                    <li>
                      {"Airflow DAGs for orchestration"}
                    </li>
                    <li>
                      {"Data quality checks and monitoring"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"AWS"}
                  </span>
                  <span>
                    {"Redshift"}
                  </span>
                  <span>
                    {"dbt"}
                  </span>
                  <span>
                    {"Airflow"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Lakehouse"}
                  </span>
                </div>
                <h3>
                  {"Data Lake Architecture"}
                </h3>
                <p>
                  {"Create a modern data lakehouse with bronze/silver/gold layers and automated quality checks."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Medallion architecture (bronze/silver/gold)"}
                    </li>
                    <li>
                      {"Delta Lake for ACID transactions"}
                    </li>
                    <li>
                      {"Schema evolution and time travel"}
                    </li>
                    <li>
                      {"Data quality validation pipeline"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"S3"}
                  </span>
                  <span>
                    {"Delta Lake"}
                  </span>
                  <span>
                    {"Spark"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      {" "}
                      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"End-to-End"}
                  </span>
                </div>
                <h3>
                  {"ETL Platform"}
                </h3>
                <p>
                  {"Build a complete ETL platform with orchestration, monitoring, and data quality validation."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Modular ETL pipeline architecture"}
                    </li>
                    <li>
                      {"Airflow DAGs with error handling"}
                    </li>
                    <li>
                      {"Great Expectations for validation"}
                    </li>
                    <li>
                      {"Containerized with Docker"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Airflow"}
                  </span>
                  <span>
                    {"Python"}
                  </span>
                  <span>
                    {"Docker"}
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
                {"Technical skills to build production-grade data infrastructure"}
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
                        {"Python & SQL"}
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
                        {"Apache Spark"}
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
                        {"Apache Kafka"}
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
                        {"Apache Airflow"}
                      </span>
                      <span>
                        {"Advanced"}
                      </span>
                    </div>
                    <div className="skill-progress" style={{ "--progress": "85%" } as CSSProperties} />
                  </div>
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>
                        {"AWS Cloud Services"}
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
                        {"Docker & Kubernetes"}
                      </span>
                      <span>
                        {"Intermediate"}
                      </span>
                    </div>
                    <div className="skill-progress" style={{ "--progress": "75%" } as CSSProperties} />
                  </div>
                </div>
              </div>
              <div className="skills-category">
                <h3>
                  {"Professional Skills"}
                </h3>
                <div className="skill-tags">
                  <span className="skill-tag">
                    {"Data Modeling"}
                  </span>
                  <span className="skill-tag">
                    {"System Design"}
                  </span>
                  <span className="skill-tag">
                    {"Pipeline Architecture"}
                  </span>
                  <span className="skill-tag">
                    {"Performance Tuning"}
                  </span>
                  <span className="skill-tag">
                    {"Data Quality"}
                  </span>
                  <span className="skill-tag">
                    {"Documentation"}
                  </span>
                  <span className="skill-tag">
                    {"Troubleshooting"}
                  </span>
                  <span className="skill-tag">
                    {"Cost Optimization"}
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
                        <polyline points="16 18 22 12 16 6" />
                        {" "}
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Software Developers"}
                      </h3>
                      <p>
                        {"Developers looking to transition into data engineering roles."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        {" "}
                        <line x1="12" y1="20" x2="12" y2="4" />
                        {" "}
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Data Analysts"}
                      </h3>
                      <p>
                        {"Analysts wanting to move into more technical, infrastructure-focused roles."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        {" "}
                        <line x1="8" y1="21" x2="16" y2="21" />
                        {" "}
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Database Administrators"}
                      </h3>
                      <p>
                        {"DBAs looking to expand into modern data infrastructure and cloud platforms."}
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
                      {"Proficiency in Python programming"}
                    </li>
                    <li>
                      {"Strong SQL knowledge"}
                    </li>
                    <li>
                      {"Basic understanding of databases"}
                    </li>
                    <li>
                      {"Familiarity with command line"}
                    </li>
                  </ul>
                  <p className="prereq-note">
                    {"This is an intermediate-level program. Some programming experience is required."}
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
                {"Everything you need to know about our Data Engineering program"}
              </p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>
                  {"What prerequisites do I need?"}
                </h3>
                <p>
                  {"You need proficiency in Python and strong SQL knowledge. Some experience with databases and command line is expected. This is an intermediate-level program."}
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
                  {"How is data engineering different from data science?"}
                </h3>
                <p>
                  {"Data engineers build the infrastructure and pipelines that move and transform data. Data scientists analyze that data for insights. DE is more about building reliable systems than building models."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Which cloud platform will I learn?"}
                </h3>
                <p>
                  {"We focus primarily on AWS (S3, Redshift, Glue, EMR) as it has the largest market share. The concepts transfer easily to GCP and Azure."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Do I need Spark experience before joining?"}
                </h3>
                <p>
                  {"No, we teach Spark from scratch. You'll go from basics to building production-grade Spark applications during the program."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Will I work on real infrastructure?"}
                </h3>
                <p>
                  {"Yes! You'll work with actual cloud services, set up real pipelines, and deploy production-like systems during the projects."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"How is the mentorship conducted?"}
                </h3>
                <p>
                  {"Sessions are 1:1 with your mentor, either online or at our Kochi center. You get personalized attention, architecture reviews, and career guidance."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What kind of support do I get?"}
                </h3>
                <p>
                  {"Beyond sessions, you get doubt clearing support, project guidance, interview preparation, and access to our data engineering community."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Ready to Build "}
                <span className="gradient-text">
                  {"Data Infrastructure?"}
                </span>
              </h2>
              <p>
                {"Book a free consultation to discuss your background and create a personalized learning plan."}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in the Data Engineering program."} />
    </>
  );
}
