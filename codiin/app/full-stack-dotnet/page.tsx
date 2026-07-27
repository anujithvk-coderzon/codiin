import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Full Stack .NET Course Kochi | ASP.NET Core Training",
  description: "Master Full Stack .NET Development with ASP.NET Core at CODiiN Tech Mentors Lab. Learn C#, ASP.NET Core, Entity Framework, Azure with personalized 1:1 mentorship in Kochi.",
  keywords: [".NET full stack course Kochi", "ASP.NET Core training Kerala", "C# web development course", ".NET Core mentorship", "Blazor bootcamp Kochi", "Microsoft developer training Ernakulam"],
  alternates: { canonical: "/full-stack-dotnet" },
  openGraph: {
    type: "website",
    url: "/full-stack-dotnet",
    title: "Full Stack .NET (ASP.NET Core) Mentorship | CODiiN Tech Mentors Lab",
    description: "Build enterprise applications with .NET. Learn C#, ASP.NET Core, Entity Framework, and Azure with expert mentorship.",
    images: ["/images/fullstack-dotnet-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack .NET (ASP.NET Core) Course Kochi | CODiiN",
    description: "Master C#, ASP.NET Core, Azure with expert 1:1 mentorship. Build enterprise apps.",
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
  "name": "Full Stack .NET (ASP.NET Core) Mentorship",
  "description": "Comprehensive mentorship program covering C#, ASP.NET Core, Entity Framework, Blazor, and Azure for enterprise full stack development",
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
  "occupationalCategory": "Full Stack .NET Developer",
  "timeRequired": "P6M",
  "teaches": [
    "C#",
    "ASP.NET Core",
    "Entity Framework",
    "Blazor",
    "SQL Server",
    "Azure",
    "REST APIs"
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
      "name": "Full Stack .NET",
      "item": "https://www.codiin.com/full-stack-dotnet"
    }
  ]
} as const;

const SCHEMA_3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need prior C# or .NET experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, we start from C# fundamentals and build up to ASP.NET Core. Basic programming knowledge is helpful but not required."
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
      "name": "Why choose .NET over other frameworks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ".NET offers exceptional performance, enterprise-grade security, and seamless Microsoft ecosystem integration."
      }
    },
    {
      "@type": "Question",
      "name": "Will I learn Blazor or React for frontend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll learn both! Blazor allows C# for frontend, while React skills help with diverse teams. You choose your focus."
      }
    },
    {
      "@type": "Question",
      "name": "Is Azure cloud included in the program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You'll learn Azure App Service, Azure Functions, Azure SQL, and deployment practices essential for modern .NET development."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need Windows for .NET development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, .NET Core is cross-platform. You can develop on Windows, macOS, or Linux using Visual Studio, VS Code, or JetBrains Rider."
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

export default function FullStackDotnetPage() {
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
                {".NET Stack"}
              </span>
              <h1>
                {"Full Stack .NET "}
                <span className="gradient-text">
                  {"(ASP.NET Core)"}
                </span>
              </h1>
              <p className="program-hero-desc">
                {"Build powerful, scalable enterprise applications with the Microsoft .NET ecosystem. Master C#, ASP.NET Core, Entity Framework, and deploy to Azure cloud."}
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
                    {"Microsoft Stack"}
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
                  {"This comprehensive mentorship program covers the complete Microsoft .NET ecosystem. You'll build enterprise-grade applications using C#, ASP.NET Core, and modern frontend technologies."}
                </p>
                <div className="learning-outcomes">
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build REST APIs with ASP.NET Core Web API"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Create interactive UIs with Blazor or React"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Master Entity Framework Core for data access"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Implement authentication with Identity & JWT"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Deploy to Azure App Services & containers"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build microservices with .NET Aspire"}
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
                        {"C#, ASP.NET Core, Entity Framework Core"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Frontend"}
                      </strong>
                      <p>
                        {"Blazor, React, Tailwind CSS"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Database"}
                      </strong>
                      <p>
                        {"SQL Server, PostgreSQL, Redis"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Cloud"}
                      </strong>
                      <p>
                        {"Azure App Service, Azure Functions, Docker"}
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
                  {"Full Stack .NET?"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Build enterprise-grade applications with Microsoft's powerful ecosystem"}
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
                  {"Microsoft Ecosystem"}
                </h3>
                <p>
                  {".NET integrates seamlessly with Azure, SQL Server, and Visual Studio - the most complete enterprise development environment."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3>
                  {"High Performance"}
                </h3>
                <p>
                  {"ASP.NET Core consistently ranks among the fastest web frameworks. Build applications that handle millions of requests efficiently."}
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
                  {"Cross-Platform"}
                </h3>
                <p>
                  {".NET Core runs on Windows, Linux, and macOS. Deploy anywhere - cloud, containers, or on-premises."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>
                  {"Enterprise Security"}
                </h3>
                <p>
                  {"Built-in security features including Identity, JWT, and OAuth2 make .NET the trusted choice for sensitive applications."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    {" "}
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3>
                  {"Full Stack with Blazor"}
                </h3>
                <p>
                  {"Write frontend and backend in C# with Blazor. One language, one ecosystem, seamless full stack development."}
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
                  {"Strong Job Market"}
                </h3>
                <p>
                  {".NET developers are highly sought after for enterprise roles. Microsoft stack expertise opens doors to premium positions."}
                </p>
              </div>
            </div>
            <div className="why-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {"7M+"}
                </span>
                <span className="stat-label">
                  {".NET Developers Worldwide"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"#1"}
                </span>
                <span className="stat-label">
                  {"Fastest .NET Performance"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"500K+"}
                </span>
                <span className="stat-label">
                  {".NET Job Openings Globally"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"25+"}
                </span>
                <span className="stat-label">
                  {"Years of .NET Evolution"}
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
                {"Roles you can pursue after mastering Full Stack .NET"}
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
                  {".NET Full Stack Developer"}
                </h3>
                <p>
                  {"Build complete applications using C#, ASP.NET Core, and Blazor or React for the frontend."}
                </p>
                <span className="demand-badge">
                  {"High Demand"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>
                  {"Backend Developer"}
                </h3>
                <p>
                  {"Develop robust APIs and backend services using ASP.NET Core and Entity Framework."}
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
                  {"Azure Cloud Developer"}
                </h3>
                <p>
                  {"Deploy and manage .NET applications on Azure cloud services and functions."}
                </p>
                <span className="demand-badge">
                  {"Trending"}
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
                  {"Blazor Developer"}
                </h3>
                <p>
                  {"Build interactive web applications using Blazor WebAssembly and Server technologies."}
                </p>
                <span className="demand-badge">
                  {"Emerging"}
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
                  {"Work on large-scale enterprise systems using the Microsoft technology stack."}
                </p>
                <span className="demand-badge">
                  {"Stable"}
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
                  {"Solutions Architect"}
                </h3>
                <p>
                  {"Design enterprise solutions using Azure and .NET technologies for complex business requirements."}
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
                {"Master the Microsoft .NET technology ecosystem"}
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>
                  {"Backend & Framework"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-dotnet/articles/csharp-fundamentals" className="tech-item">
                    <h4>
                      {"C# 12"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern C# with records, pattern matching, nullable reference types, and LINQ for expressive code."}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/aspnet-core" className="tech-item">
                    <h4>
                      {"ASP.NET Core"}
                    </h4>
                    {" "}
                    <p>
                      {"High-performance web framework for building APIs, web apps, and microservices."}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/entity-framework" className="tech-item">
                    <h4>
                      {"Entity Framework Core"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern ORM for .NET with code-first migrations, LINQ queries, and performance optimization."}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/aspnet-identity" className="tech-item">
                    <h4>
                      {"ASP.NET Core Identity"}
                    </h4>
                    {" "}
                    <p>
                      {"Complete authentication and authorization system with JWT, OAuth2, and role-based access."}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Frontend & Real-time"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-dotnet/articles/blazor" className="tech-item">
                    <h4>
                      {"Blazor WebAssembly"}
                    </h4>
                    {" "}
                    <p>
                      {"Build interactive web UIs using C# instead of JavaScript. Full .NET in the browser."}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/blazor" className="tech-item">
                    <h4>
                      {"Blazor Server"}
                    </h4>
                    {" "}
                    <p>
                      {"Server-side rendering with real-time UI updates via SignalR connection."}
                    </p>
                  </Link>
                  <div className="tech-item">
                    <h4>
                      {"SignalR"}
                    </h4>
                    <p>
                      {"Real-time web functionality for live dashboards, chat, and notifications."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      {"React Integration"}
                    </h4>
                    <p>
                      {"Build React frontends that connect seamlessly to ASP.NET Core backends."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Azure & DevOps"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-dotnet/articles/azure-cloud" className="tech-item">
                    <h4>
                      {"Azure App Service"}
                    </h4>
                    {" "}
                    <p>
                      {"Deploy and scale .NET applications with managed hosting and auto-scaling."}
                    </p>
                  </Link>
                  <div className="tech-item">
                    <h4>
                      {"Azure Functions"}
                    </h4>
                    <p>
                      {"Serverless compute for event-driven applications and background processing."}
                    </p>
                  </div>
                  <Link href="/full-stack-dotnet/articles/sql-server" className="tech-item">
                    <h4>
                      {"SQL Server / Azure SQL"}
                    </h4>
                    {" "}
                    <p>
                      {"Enterprise database with advanced features and seamless EF Core integration."}
                    </p>
                  </Link>
                  <div className="tech-item">
                    <h4>
                      {"Azure DevOps"}
                    </h4>
                    <p>
                      {"CI/CD pipelines, Git repositories, and project management for .NET projects."}
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
                {"A structured learning path for .NET full stack development"}
              </p>
            </div>
            <div className="curriculum-grid">
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"01"}
                  </span>
                  <h3>
                    <Link href="/full-stack-dotnet/articles/csharp-fundamentals">
                      {"C# Fundamentals"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-dotnet/articles/csharp-fundamentals">
                      {"C# Syntax & Data Types"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/csharp-fundamentals">
                      {"Object-Oriented Programming"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/csharp-fundamentals">
                      {"LINQ & Collections"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/csharp-fundamentals">
                      {"Async/Await Programming"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/csharp-fundamentals">
                      {"Generics & Delegates"}
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
                    <Link href="/full-stack-dotnet/articles/aspnet-core">
                      {"ASP.NET Core Web API"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-core">
                      {"MVC Architecture"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-core">
                      {"Controllers & Routing"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-core">
                      {"Dependency Injection"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-core">
                      {"Model Validation"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-core">
                      {"Middleware & Filters"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-core">
                      {"API Documentation (Swagger)"}
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
                    <Link href="/full-stack-dotnet/articles/entity-framework">
                      {"Entity Framework Core"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-dotnet/articles/entity-framework">
                      {"Code-First Approach"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/entity-framework">
                      {"Migrations & Seeding"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/entity-framework">
                      {"Relationships & Navigation"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/entity-framework">
                      {"LINQ Queries"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/entity-framework">
                      {"Performance Optimization"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/entity-framework">
                      {"Repository Pattern"}
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
                    <Link href="/full-stack-dotnet/articles/aspnet-identity">
                      {"Authentication & Security"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-identity">
                      {"ASP.NET Core Identity"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-identity">
                      {"JWT Token Authentication"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-identity">
                      {"OAuth2 & OpenID Connect"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-identity">
                      {"Role-Based Authorization"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/aspnet-identity">
                      {"CORS & Security Headers"}
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
                    <Link href="/full-stack-dotnet/articles/blazor">
                      {"Frontend Development"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-dotnet/articles/blazor">
                      {"Blazor WebAssembly"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/blazor">
                      {"Blazor Server"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/blazor">
                      {"React with .NET Backend"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/blazor">
                      {"SignalR for Real-time"}
                    </Link>
                  </li>
                  <li>
                    {"Tailwind CSS Styling"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"06"}
                  </span>
                  <h3>
                    <Link href="/full-stack-dotnet/articles/azure-cloud">
                      {"Azure & Deployment"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-dotnet/articles/azure-cloud">
                      {"Azure App Service"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/sql-server">
                      {"Azure SQL Database"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/azure-cloud">
                      {"Azure Functions"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/azure-cloud">
                      {"Docker Containers"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-dotnet/articles/azure-cloud">
                      {"CI/CD with Azure DevOps"}
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
                {"Enterprise-grade projects that showcase your .NET expertise"}
              </p>
            </div>
            <div className="projects-detailed-grid">
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      {" "}
                      <polyline points="14 2 14 8 20 8" />
                      {" "}
                      <line x1="16" y1="13" x2="8" y2="13" />
                      {" "}
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Enterprise"}
                  </span>
                </div>
                <h3>
                  {"Document Management System"}
                </h3>
                <p>
                  {"Build a complete DMS with file uploads, versioning, search, and role-based access control."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"File versioning and history tracking"}
                    </li>
                    <li>
                      {"Full-text search with Azure Cognitive Search"}
                    </li>
                    <li>
                      {"Role-based document permissions"}
                    </li>
                    <li>
                      {"Azure Blob Storage integration"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"ASP.NET Core"}
                  </span>
                  <span>
                    {"Blazor"}
                  </span>
                  <span>
                    {"SQL Server"}
                  </span>
                  <span>
                    {"Azure Blob"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1" />
                      {" "}
                      <circle cx="20" cy="21" r="1" />
                      {" "}
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Full Stack"}
                  </span>
                </div>
                <h3>
                  {"E-Commerce Platform"}
                </h3>
                <p>
                  {"Create a full-featured online store with inventory, orders, and payment integration."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Product catalog with categories and filters"}
                    </li>
                    <li>
                      {"Shopping cart and checkout flow"}
                    </li>
                    <li>
                      {"Stripe payment integration"}
                    </li>
                    <li>
                      {"Order management and notifications"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"ASP.NET Core"}
                  </span>
                  <span>
                    {"React"}
                  </span>
                  <span>
                    {"Stripe"}
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
                    {"Blazor"}
                  </span>
                </div>
                <h3>
                  {"Employee Portal"}
                </h3>
                <p>
                  {"Build an internal employee portal with attendance, leave management, and HR features."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Employee self-service dashboard"}
                    </li>
                    <li>
                      {"Leave request and approval workflow"}
                    </li>
                    <li>
                      {"Attendance tracking with reports"}
                    </li>
                    <li>
                      {"Real-time notifications via SignalR"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"Blazor Server"}
                  </span>
                  <span>
                    {"Identity"}
                  </span>
                  <span>
                    {"EF Core"}
                  </span>
                  <span>
                    {"SignalR"}
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
                  {"Create a real-time analytics dashboard with live data updates using SignalR."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Real-time data streaming with SignalR"}
                    </li>
                    <li>
                      {"Interactive charts and visualizations"}
                    </li>
                    <li>
                      {"Custom widget configuration"}
                    </li>
                    <li>
                      {"Export reports to PDF and Excel"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"ASP.NET Core"}
                  </span>
                  <span>
                    {"SignalR"}
                  </span>
                  <span>
                    {"Blazor WASM"}
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
                {"Technical and professional skills for .NET development"}
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
                        {"C# & ASP.NET Core"}
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
                        {"Entity Framework Core"}
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
                        {"Blazor Development"}
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
                        {"Azure Cloud Services"}
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
                        {"SQL Server & Database"}
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
                        {"Testing & CI/CD"}
                      </span>
                      <span>
                        {"Intermediate"}
                      </span>
                    </div>
                    <div className="skill-progress" style={{ "--progress": "80%" } as CSSProperties} />
                  </div>
                </div>
              </div>
              <div className="skills-category">
                <h3>
                  {"Professional Skills"}
                </h3>
                <div className="skill-tags">
                  <span className="skill-tag">
                    {"Clean Architecture"}
                  </span>
                  <span className="skill-tag">
                    {"SOLID Principles"}
                  </span>
                  <span className="skill-tag">
                    {"Design Patterns"}
                  </span>
                  <span className="skill-tag">
                    {"API Design"}
                  </span>
                  <span className="skill-tag">
                    {"Code Review"}
                  </span>
                  <span className="skill-tag">
                    {"Agile Methodology"}
                  </span>
                  <span className="skill-tag">
                    {"Technical Documentation"}
                  </span>
                  <span className="skill-tag">
                    {"Performance Tuning"}
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
                        {"Fresh Graduates"}
                      </h3>
                      <p>
                        {"Students wanting to enter the enterprise development world."}
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
                        {"C# Developers"}
                      </h3>
                      <p>
                        {"Developers familiar with C# wanting full stack skills."}
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
                        {"Enterprise Professionals"}
                      </h3>
                      <p>
                        {"IT professionals targeting Microsoft ecosystem roles."}
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
                      {"Basic programming understanding"}
                    </li>
                    <li>
                      {"Familiarity with any OOP language (helpful)"}
                    </li>
                    <li>
                      {"Windows/Mac/Linux laptop"}
                    </li>
                    <li>
                      {"5-6 hours per week for learning"}
                    </li>
                  </ul>
                  <p className="prereq-note">
                    {"We cover C# from the ground up before moving to ASP.NET Core!"}
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
                {"Everything you need to know about our .NET program"}
              </p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>
                  {"Do I need prior C# or .NET experience?"}
                </h3>
                <p>
                  {"No, we start from C# fundamentals and build up to ASP.NET Core. Basic programming knowledge is helpful but not required."}
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
                  {"Why choose .NET over other frameworks?"}
                </h3>
                <p>
                  {".NET offers exceptional performance, enterprise-grade security, and seamless Microsoft ecosystem integration. It's ideal for corporate and enterprise development roles."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Will I learn Blazor or React for frontend?"}
                </h3>
                <p>
                  {"You'll learn both! Blazor allows you to use C# for frontend development, while React skills help when working with diverse teams. You choose your focus."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Is Azure cloud included in the program?"}
                </h3>
                <p>
                  {"Yes! You'll learn Azure App Service, Azure Functions, Azure SQL, and deployment practices essential for modern .NET development."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Do I need Windows for .NET development?"}
                </h3>
                <p>
                  {"No, .NET Core is cross-platform. You can develop on Windows, macOS, or Linux using Visual Studio, VS Code, or JetBrains Rider."}
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
                  {".NET Full Stack?"}
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

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals through personalized mentorship and hands-on learning."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
              <div className="footer-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  {" "}
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {"AKL Heights, Seaport Road, Near Bharathmatha College, Kochi, Kerala - 682021"}
                </span>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-java">
                    {"Full Stack Java"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-dotnet">
                    {"Full Stack .NET"}
                  </Link>
                </li>
                <li>
                  <Link href="/hybrid-mobile-app">
                    {"Hybrid Mobile Apps"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-engineering">
                    {"Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
                <li>
                  <Link href="/agentic-ai">
                    {"Agentic AI"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Quick Links"}
              </h4>
              <ul>
                <li>
                  <Link href="/">
                    {"Home"}
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    {"About Us"}
                  </Link>
                </li>
                <li>
                  <Link href="/#why-us">
                    {"Why CODiiN"}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    {"Contact"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>
                {"Get in Touch"}
              </h4>
              <p>
                <a href="mailto:contact@codiin.com">
                  {"contact@codiin.com"}
                </a>
              </p>
              <p>
                <a href="tel:+918301890158">
                  {"+91 83018 90158"}
                </a>
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/CodiinTechnologies" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/codiin_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/codiin/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@codiin" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
            <div className="footer-legal">
              <Link href="/privacy-policy">
                {"Privacy Policy"}
              </Link>
              <Link href="/terms-of-service">
                {"Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in the Full Stack .NET program."} />
    </>
  );
}
