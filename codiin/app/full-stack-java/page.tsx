import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Full Stack Java Course Kochi | Spring Boot Training",
  description: "Master Full Stack Java Development with Spring Boot at CODiiN Tech Mentors Lab. Learn Java, Spring Boot, Microservices, React with personalized 1:1 mentorship in Kochi.",
  keywords: ["Java full stack course Kochi", "Spring Boot training Kerala", "Java microservices course", "enterprise Java mentorship", "Spring framework bootcamp Kochi", "Java developer training Ernakulam"],
  alternates: { canonical: "/full-stack-java" },
  openGraph: {
    type: "website",
    url: "/full-stack-java",
    title: "Full Stack Java (Spring Boot) Mentorship | CODiiN Tech Mentors Lab",
    description: "Build enterprise-grade applications with Java. Learn Spring Boot, Microservices, and React with expert mentorship.",
    images: ["/images/fullstack-java-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Java (Spring Boot) Course Kochi | CODiiN",
    description: "Master Java, Spring Boot, Microservices with expert 1:1 mentorship. Build enterprise apps.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Full Stack Java (Spring Boot) Mentorship",
  "description": "Comprehensive mentorship program covering Java, Spring Boot, Microservices, and React for enterprise full stack development",
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
  "educationalLevel": "Beginner to Advanced",
  "occupationalCategory": "Full Stack Java Developer",
  "timeRequired": "P6M",
  "teaches": [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Microservices",
    "React",
    "PostgreSQL",
    "Docker"
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
      "name": "Full Stack Java",
      "item": "https://www.codiin.com/full-stack-java"
    }
  ]
} as const;

const SCHEMA_3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need prior Java experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, we cover Java fundamentals thoroughly before moving to Spring Boot. Basic programming knowledge helps but isn't required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the program duration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program runs for 6 months with flexible scheduling. We work around your availability for personalized 1:1 sessions."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Java over other languages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Java is the enterprise standard. It's used by 90% of Fortune 500 companies and offers exceptional job stability and career growth."
      }
    },
    {
      "@type": "Question",
      "name": "Will I learn microservices architecture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You'll build distributed systems using Spring Cloud, including service discovery, API gateway, circuit breakers, and event-driven communication."
      }
    },
    {
      "@type": "Question",
      "name": "Is frontend development included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you'll learn React.js with TypeScript to build modern user interfaces that integrate with your Spring Boot backend."
      }
    },
    {
      "@type": "Question",
      "name": "What about DevOps and deployment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll learn Docker containerization, Kubernetes basics, CI/CD pipelines, and cloud deployment on AWS."
      }
    },
    {
      "@type": "Question",
      "name": "How is the mentorship conducted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sessions are 1:1 with your mentor, either online or at our Kochi center. You get personalized attention and code reviews."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of support do I get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beyond sessions, you get doubt clearing support, project guidance, interview preparation, and access to our developer community."
      }
    }
  ]
} as const;

export default function FullStackJavaPage() {
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
                {"Java Stack"}
              </span>
              <h1>
                {"Full Stack Java "}
                <span className="gradient-text">
                  {"(Spring Boot)"}
                </span>
              </h1>
              <p className="program-hero-desc">
                {"Build robust, enterprise-grade applications with Java and Spring Boot. Master microservices architecture, security, and modern frontend development with React."}
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
                    {"Enterprise Focus"}
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
                src="/img/programs/full-stack-java.png"
                alt="Full Stack Java — the tools and techniques covered in this program"
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
                  {"This comprehensive mentorship program covers enterprise Java development with Spring Boot. You'll build scalable, secure applications following industry best practices."}
                </p>
                <div className="learning-outcomes">
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build REST APIs with Spring Boot"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Design microservices architecture"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Implement Spring Security with OAuth2/JWT"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Master Hibernate/JPA for database operations"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Deploy with Docker and Kubernetes"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build modern UIs with React"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="overview-sidebar">
                <div className="sidebar-card">
                  <h3>
                    {"Tech Stack"}
                  </h3>
                  <ul className="highlights-list">
                    <li>
                      <strong>
                        {"Backend"}
                      </strong>
                      <p>
                        {"Java 17+, Spring Boot, Spring Security, Spring Cloud"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Frontend"}
                      </strong>
                      <p>
                        {"React.js, TypeScript, Tailwind CSS"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Database"}
                      </strong>
                      <p>
                        {"PostgreSQL, Hibernate/JPA, Redis"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"DevOps"}
                      </strong>
                      <p>
                        {"Docker, Kubernetes, Jenkins, AWS"}
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
                  {"Full Stack Java?"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Java remains the backbone of enterprise software worldwide"}
              </p>
            </div>
            <div className="why-cards">
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
                  {"Enterprise Standard"}
                </h3>
                <p>
                  {"Java powers 90% of Fortune 500 companies. It's the go-to language for banking, healthcare, and enterprise applications."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>
                  {"Rock-Solid Stability"}
                </h3>
                <p>
                  {"Java's strong typing and mature ecosystem ensure reliable, maintainable code that scales across years of development."}
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
                  {"Massive Job Market"}
                </h3>
                <p>
                  {"Java developers are in constant demand globally. The language has maintained top 3 position in job postings for decades."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3>
                  {"Spring Boot Power"}
                </h3>
                <p>
                  {"Spring Boot makes Java development fast and enjoyable. Build production-ready applications with minimal configuration."}
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
                  {"Microservices Ready"}
                </h3>
                <p>
                  {"Spring Cloud ecosystem makes building distributed microservices architecture straightforward and maintainable."}
                </p>
              </div>
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
                  {"High Earning Potential"}
                </h3>
                <p>
                  {"Java developers command premium salaries. Enterprise expertise with Spring Boot makes you highly marketable."}
                </p>
              </div>
            </div>
            <div className="why-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {"35M+"}
                </span>
                <span className="stat-label">
                  {"Java Developers Worldwide"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"90%"}
                </span>
                <span className="stat-label">
                  {"Fortune 500 Use Java"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"1M+"}
                </span>
                <span className="stat-label">
                  {"Java Job Openings Globally"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"#1"}
                </span>
                <span className="stat-label">
                  {"Enterprise Language Choice"}
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
                {"Roles you can pursue after mastering Full Stack Java"}
              </p>
            </div>
            <div className="career-grid">
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    {" "}
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3>
                  {"Java Full Stack Developer"}
                </h3>
                <p>
                  {"Build complete enterprise applications using Java, Spring Boot, and React/Angular."}
                </p>
                <span className="demand-badge">
                  {"High Demand"}
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
                  {"Microservices Architect"}
                </h3>
                <p>
                  {"Design and implement distributed systems using Spring Cloud and container orchestration."}
                </p>
                <span className="demand-badge">
                  {"Senior Role"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>
                  {"Backend Engineer"}
                </h3>
                <p>
                  {"Develop robust APIs and backend services for high-traffic enterprise applications."}
                </p>
                <span className="demand-badge">
                  {"High Demand"}
                </span>
              </div>
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
                  {"Enterprise Developer"}
                </h3>
                <p>
                  {"Work on large-scale banking, healthcare, and financial systems using Java technologies."}
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
                  {"DevOps Engineer"}
                </h3>
                <p>
                  {"Manage CI/CD pipelines, containerization, and cloud deployments for Java applications."}
                </p>
                <span className="demand-badge">
                  {"Trending"}
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
                  {"Technical Lead"}
                </h3>
                <p>
                  {"Lead development teams building complex enterprise solutions with Java technologies."}
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
                {"Master the enterprise Java technology ecosystem"}
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>
                  {"Backend & Framework"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-java/articles/java-fundamentals" className="tech-item">
                    <h4>
                      {"Java 17+"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern Java with records, sealed classes, pattern matching, and enhanced switch expressions."}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/spring-boot" className="tech-item">
                    <h4>
                      {"Spring Boot"}
                    </h4>
                    {" "}
                    <p>
                      {"Opinionated framework for building production-ready applications with auto-configuration."}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/spring-security" className="tech-item">
                    <h4>
                      {"Spring Security"}
                    </h4>
                    {" "}
                    <p>
                      {"Comprehensive authentication and authorization with OAuth2, JWT, and role-based access."}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/hibernate-jpa" className="tech-item">
                    <h4>
                      {"Spring Data JPA"}
                    </h4>
                    {" "}
                    <p>
                      {"Simplified data access with repository abstraction over Hibernate ORM."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Microservices & Cloud"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-java/articles/microservices" className="tech-item">
                    <h4>
                      {"Microservices Architecture"}
                    </h4>
                    {" "}
                    <p>
                      {"Design and build distributed systems with Spring Cloud ecosystem."}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/service-discovery" className="tech-item">
                    <h4>
                      {"Service Discovery"}
                    </h4>
                    {" "}
                    <p>
                      {"Eureka and Consul for dynamic service registration and discovery."}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/api-gateway" className="tech-item">
                    <h4>
                      {"API Gateway"}
                    </h4>
                    {" "}
                    <p>
                      {"Spring Cloud Gateway for routing, filtering, and rate limiting."}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/circuit-breaker" className="tech-item">
                    <h4>
                      {"Circuit Breaker"}
                    </h4>
                    {" "}
                    <p>
                      {"Resilience4j patterns for fault-tolerant microservices."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"DevOps & Infrastructure"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-java/articles/docker-basics" className="tech-item">
                    <h4>
                      {"Docker"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerize Java applications for consistent deployment across environments."}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/kubernetes-java" className="tech-item">
                    <h4>
                      {"Kubernetes"}
                    </h4>
                    {" "}
                    <p>
                      {"Orchestrate containerized microservices with automated scaling and management."}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/message-queues" className="tech-item">
                    <h4>
                      {"RabbitMQ/Kafka"}
                    </h4>
                    {" "}
                    <p>
                      {"Message queues for async communication between microservices."}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/distributed-tracing" className="tech-item">
                    <h4>
                      {"Distributed Tracing"}
                    </h4>
                    {" "}
                    <p>
                      {"Zipkin and Jaeger for tracking requests across services."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Frontend & Database"}
                </h3>
                <div className="tech-items">
                  <div className="tech-item">
                    <h4>
                      {"React.js"}
                    </h4>
                    <p>
                      {"Build modern, component-based user interfaces with hooks and state management."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      {"TypeScript"}
                    </h4>
                    <p>
                      {"Type-safe JavaScript for building scalable frontend applications."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      {"PostgreSQL"}
                    </h4>
                    <p>
                      {"Advanced relational database with JSON support and powerful query capabilities."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      {"Redis"}
                    </h4>
                    <p>
                      {"In-memory caching and session management for high-performance applications."}
                    </p>
                  </div>
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
                {"A structured learning path for enterprise Java development"}
              </p>
            </div>
            <div className="curriculum-grid">
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"01"}
                  </span>
                  <h3>
                    <Link href="/full-stack-java/articles/java-fundamentals">
                      {"Java Fundamentals"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-java/articles/java-fundamentals">
                      {"Java 17+ Features"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/java-fundamentals">
                      {"Object-Oriented Programming"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/java-collections">
                      {"Collections & Generics"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/java-streams">
                      {"Streams & Lambda Expressions"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/exception-handling">
                      {"Exception Handling & I/O"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/multithreading">
                      {"Multithreading & Concurrency"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"02"}
                  </span>
                  <h3>
                    <Link href="/full-stack-java/articles/spring-boot">
                      {"Spring Boot Core"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-java/articles/spring-boot">
                      {"Spring Boot Auto-Configuration"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/spring-boot">
                      {"Dependency Injection & IoC"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/rest-apis-java">
                      {"REST API Development"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/spring-boot">
                      {"Request Handling & Validation"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/design-patterns">
                      {"Design Patterns"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/unit-testing">
                      {"Testing with JUnit & Mockito"}
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
                    <Link href="/full-stack-java/articles/hibernate-jpa">
                      {"Data Layer & JPA"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-java/articles/hibernate-jpa">
                      {"Spring Data JPA"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/hibernate-jpa">
                      {"Hibernate ORM"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/hibernate-jpa">
                      {"Entity Relationships"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/hibernate-jpa">
                      {"Query Methods & JPQL"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/database-migrations">
                      {"Database Migrations (Flyway)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/caching-redis">
                      {"Caching with Redis"}
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
                    <Link href="/full-stack-java/articles/spring-security">
                      {"Security & Auth"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-java/articles/spring-security">
                      {"Spring Security Fundamentals"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/spring-security">
                      {"JWT Authentication"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/spring-security">
                      {"OAuth2 & OpenID Connect"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/spring-security">
                      {"Role-Based Access Control"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/spring-security">
                      {"Security Best Practices"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"05"}
                  </span>
                  <h3>
                    <Link href="/full-stack-java/articles/microservices">
                      {"Microservices"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-java/articles/microservices">
                      {"Microservices Architecture"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/api-gateway">
                      {"Spring Cloud Gateway"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/service-discovery">
                      {"Service Discovery (Eureka)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/config-server">
                      {"Config Server"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/message-queues">
                      {"Inter-service Communication"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/circuit-breaker">
                      {"Circuit Breaker (Resilience4j)"}
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
                    <Link href="/full-stack-java/articles/docker-basics">
                      {"DevOps & Deployment"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-java/articles/docker-basics">
                      {"Docker Containerization"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/kubernetes-java">
                      {"Kubernetes Basics"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/cicd-java">
                      {"CI/CD with Jenkins/GitHub Actions"}
                    </Link>
                  </li>
                  <li>
                    {"AWS Deployment (EC2, ECS)"}
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/logging-monitoring">
                      {"Monitoring & Logging"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-java/articles/distributed-tracing">
                      {"Distributed Tracing"}
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
                {"Enterprise-grade projects that showcase your Java expertise"}
              </p>
            </div>
            <div className="projects-detailed-grid">
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      {" "}
                      <line x1="8" y1="21" x2="16" y2="21" />
                      {" "}
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Enterprise"}
                  </span>
                </div>
                <h3>
                  {"Banking API System"}
                </h3>
                <p>
                  {"Build a secure banking API with account management, transactions, and comprehensive audit logging."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Multi-account management with transaction history"}
                    </li>
                    <li>
                      {"JWT authentication with refresh tokens"}
                    </li>
                    <li>
                      {"Transaction processing with ACID compliance"}
                    </li>
                    <li>
                      {"Audit logging with Spring AOP"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Spring Boot"}
                  </span>
                  <span>
                    {"Spring Security"}
                  </span>
                  <span>
                    {"PostgreSQL"}
                  </span>
                  <span>
                    {"JWT"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
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
                  <span className="project-badge">
                    {"Microservices"}
                  </span>
                </div>
                <h3>
                  {"E-Commerce Platform"}
                </h3>
                <p>
                  {"Create a distributed e-commerce system with separate services for orders, inventory, payments, and notifications."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Service discovery with Eureka"}
                    </li>
                    <li>
                      {"API Gateway with rate limiting"}
                    </li>
                    <li>
                      {"Event-driven architecture with RabbitMQ"}
                    </li>
                    <li>
                      {"Distributed tracing and monitoring"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Spring Cloud"}
                  </span>
                  <span>
                    {"Eureka"}
                  </span>
                  <span>
                    {"RabbitMQ"}
                  </span>
                  <span>
                    {"Docker"}
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
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      {" "}
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Full Stack"}
                  </span>
                </div>
                <h3>
                  {"HR Management System"}
                </h3>
                <p>
                  {"Build an enterprise HR system with employee management, leave tracking, and role-based access control."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Employee onboarding workflow"}
                    </li>
                    <li>
                      {"Leave management with approvals"}
                    </li>
                    <li>
                      {"Role-based dashboard views"}
                    </li>
                    <li>
                      {"Report generation with PDF export"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Spring Boot"}
                  </span>
                  <span>
                    {"React"}
                  </span>
                  <span>
                    {"PostgreSQL"}
                  </span>
                  <span>
                    {"OAuth2"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20V10" />
                      {" "}
                      <path d="M18 20V4" />
                      {" "}
                      <path d="M6 20v-4" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Real-time"}
                  </span>
                </div>
                <h3>
                  {"Analytics Dashboard"}
                </h3>
                <p>
                  {"Create a real-time analytics platform with WebSocket updates and interactive data visualization."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Real-time data streaming with WebSocket"}
                    </li>
                    <li>
                      {"Interactive charts and visualizations"}
                    </li>
                    <li>
                      {"Redis caching for performance"}
                    </li>
                    <li>
                      {"Custom alert thresholds"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Spring WebSocket"}
                  </span>
                  <span>
                    {"React"}
                  </span>
                  <span>
                    {"Redis"}
                  </span>
                  <span>
                    {"Chart.js"}
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
                {"Technical and professional skills for enterprise development"}
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
                        {"Java & Spring Boot"}
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
                        {"Microservices Architecture"}
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
                        {"Database & ORM"}
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
                        {"React & Frontend"}
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
                        {"Docker & Kubernetes"}
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
                        {"Testing & CI/CD"}
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
                    {"System Design"}
                  </span>
                  <span className="skill-tag">
                    {"Code Review"}
                  </span>
                  <span className="skill-tag">
                    {"Technical Documentation"}
                  </span>
                  <span className="skill-tag">
                    {"Agile Methodology"}
                  </span>
                  <span className="skill-tag">
                    {"Problem Solving"}
                  </span>
                  <span className="skill-tag">
                    {"Team Collaboration"}
                  </span>
                  <span className="skill-tag">
                    {"Performance Optimization"}
                  </span>
                  <span className="skill-tag">
                    {"Security Best Practices"}
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
                        {"CS/IT Graduates"}
                      </h3>
                      <p>
                        {"Students with Java basics looking to build enterprise applications."}
                      </p>
                    </div>
                  </div>
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
                        {"Java Developers"}
                      </h3>
                      <p>
                        {"Experienced Java devs wanting to master Spring Boot and microservices."}
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
                        {"Enterprise Developers"}
                      </h3>
                      <p>
                        {"Professionals targeting enterprise/corporate development roles."}
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
                      {"Basic understanding of programming concepts"}
                    </li>
                    <li>
                      {"Familiarity with Java syntax (helpful)"}
                    </li>
                    <li>
                      {"Laptop with 8GB+ RAM recommended"}
                    </li>
                    <li>
                      {"5-6 hours per week for learning"}
                    </li>
                  </ul>
                  <p className="prereq-note">
                    {"We cover Java fundamentals thoroughly before Spring Boot!"}
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
                {"Everything you need to know about our Java program"}
              </p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>
                  {"Do I need prior Java experience?"}
                </h3>
                <p>
                  {"No, we cover Java fundamentals thoroughly before moving to Spring Boot. Basic programming knowledge helps but isn't required."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What is the program duration?"}
                </h3>
                <p>
                  {"The program runs for 6 months with flexible scheduling. We work around your availability for personalized 1:1 sessions."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Why choose Java over other languages?"}
                </h3>
                <p>
                  {"Java is the enterprise standard. It's used by 90% of Fortune 500 companies and offers exceptional job stability and career growth in banking, healthcare, and large-scale systems."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Will I learn microservices architecture?"}
                </h3>
                <p>
                  {"Yes! You'll build distributed systems using Spring Cloud, including service discovery, API gateway, circuit breakers, and event-driven communication."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Is frontend development included?"}
                </h3>
                <p>
                  {"Yes, you'll learn React.js with TypeScript to build modern user interfaces that integrate seamlessly with your Spring Boot backend."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What about DevOps and deployment?"}
                </h3>
                <p>
                  {"You'll learn Docker containerization, Kubernetes basics, CI/CD pipelines, and cloud deployment on AWS, preparing you for real-world enterprise environments."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"How is the mentorship conducted?"}
                </h3>
                <p>
                  {"Sessions are 1:1 with your mentor, either online or at our Kochi center. You get personalized attention, code reviews, and career guidance."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What kind of support do I get?"}
                </h3>
                <p>
                  {"Beyond sessions, you get doubt clearing support, project guidance, interview preparation, and access to our developer community."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Ready to Master "}
                <span className="gradient-text">
                  {"Enterprise Java?"}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in the Full Stack Java program."} />
    </>
  );
}
