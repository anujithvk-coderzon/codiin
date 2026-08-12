import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Full Stack JavaScript Course Kochi | MERN Stack Training",
  description: "Master Full Stack JavaScript Development with MERN/MEAN stack at CODiiN Tech Mentors Lab. Learn React, Node.js, Express, MongoDB with personalized 1:1 mentorship in Kochi.",
  keywords: ["MERN stack course Kochi", "JavaScript full stack training Kerala", "React Node.js course", "full stack JavaScript mentorship", "MEAN stack bootcamp Kochi", "web development training Ernakulam"],
  alternates: { canonical: "/full-stack-javascript" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript",
    title: "Full Stack JavaScript (MERN/MEAN) Mentorship | CODiiN Tech Mentors Lab",
    description: "Build modern web applications with JavaScript. Learn React, Node.js, Express, and MongoDB with expert mentorship.",
    images: ["/images/fullstack-js-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack JavaScript (MERN/MEAN) Course Kochi | CODiiN",
    description: "Master React, Node.js, MongoDB with expert 1:1 mentorship. Build modern web apps.",
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
  "name": "Full Stack JavaScript (MERN/MEAN) Mentorship",
  "description": "Comprehensive mentorship program covering React/Angular, Node.js, Express, MongoDB for full stack JavaScript development",
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
  "occupationalCategory": "Full Stack JavaScript Developer",
  "timeRequired": "P6M",
  "teaches": [
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "Express",
    "MongoDB",
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
      "name": "Full Stack JavaScript",
      "item": "https://www.codiin.com/full-stack-javascript"
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
        "text": "No prior experience is required. We start from the fundamentals of JavaScript and progressively build up to advanced concepts."
      }
    },
    {
      "@type": "Question",
      "name": "What is the mentorship format?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll have 1:1 sessions with your mentor (2-3 times per week), plus access to recorded content, assignments, and project work."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to complete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program is designed as a comprehensive 6-month journey. We recommend dedicating 15-20 hours per week for optimal learning."
      }
    },
    {
      "@type": "Question",
      "name": "Will I be job-ready after this program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You'll have a strong portfolio of 4+ production-quality projects, solid understanding of the MERN stack, and interview preparation."
      }
    },
    {
      "@type": "Question",
      "name": "Should I learn React or Angular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend React as it has the largest job market and ecosystem. However, if your target company uses Angular, we can customize the curriculum."
      }
    },
    {
      "@type": "Question",
      "name": "Is this program suitable for working professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! The flexible scheduling and 1:1 format accommodate different time zones and work schedules."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of support will I receive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You get doubt-clearing support via chat, code review on all assignments, resume and LinkedIn profile optimization, mock interviews, and lifetime access to the CODiiN community."
      }
    },
    {
      "@type": "Question",
      "name": "Can I build my own project idea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Your capstone project can be a custom idea. Your mentor will help you scope it appropriately and guide you through the implementation."
      }
    }
  ]
} as const;

export default function FullStackJavascriptPage() {
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
                {"JavaScript Stack"}
              </span>
              <h1>
                {"Full Stack JavaScript "}
                <span className="gradient-text">
                  {"(MERN/MEAN)"}
                </span>
              </h1>
              <p className="program-hero-desc">
                {"Master the most popular JavaScript stack for building modern web applications. Learn React or Angular for frontend, Node.js with Express for backend, and MongoDB for database."}
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
                src="/img/programs/full-stack-javascript.png"
                alt="Full Stack JavaScript — the tools and techniques covered in this program"
                className="program-hero-img"
                width={512}
                height={512}
                priority
              />
            </div>
          </div>
        </section>
        <section className="why-learn">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">
                {"Why JavaScript?"}
              </span>
              <h2 className="section-title">
                {"Why Learn "}
                <span className="gradient-text">
                  {"Full Stack JavaScript?"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"JavaScript is the language of the web — and increasingly, the language of everything else"}
              </p>
            </div>
            <div className="why-learn-grid">
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    {" "}
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>
                  {"#1 Most Used Language"}
                </h3>
                <p>
                  {"JavaScript has been the most commonly used programming language for 11 consecutive years according to Stack Overflow surveys. Over 98% of websites use JavaScript for client-side functionality."}
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
                  {"High Demand & Growth"}
                </h3>
                <p>
                  {"JavaScript developers are among the most sought-after professionals in tech. Companies across all industries — from startups to Fortune 500 — are actively hiring skilled MERN/MEAN developers."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    {" "}
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>
                  {"One Language, Full Stack"}
                </h3>
                <p>
                  {"Use the same language for frontend, backend, database queries, and even mobile apps. No context switching — become productive faster and build complete applications independently."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
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
                  {"Massive Job Market"}
                </h3>
                <p>
                  {"Over 1.5 million JavaScript developer jobs are available globally. From startups to tech giants like Netflix, Uber, and PayPal — everyone uses JavaScript."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    {" "}
                    <polyline points="2 17 12 22 22 17" />
                    {" "}
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <h3>
                  {"Rich Ecosystem"}
                </h3>
                <p>
                  {"NPM hosts over 2 million packages — the largest software registry in the world. Whatever you want to build, there's likely a library to help. Plus, React is the most loved frontend framework."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    {" "}
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3>
                  {"Startup Friendly"}
                </h3>
                <p>
                  {"JavaScript's flexibility and speed of development make it the top choice for startups. Build MVPs quickly, iterate fast, and scale when needed. Perfect for entrepreneurs and freelancers."}
                </p>
              </div>
            </div>
            <div className="industry-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {"98%"}
                </span>
                <span className="stat-label">
                  {"of websites use JavaScript"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"2M+"}
                </span>
                <span className="stat-label">
                  {"NPM packages available"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"1.5M+"}
                </span>
                <span className="stat-label">
                  {"developer jobs globally"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"#1"}
                </span>
                <span className="stat-label">
                  {"most used language"}
                </span>
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
                  {"This comprehensive mentorship program covers the complete JavaScript ecosystem. You'll build real-world applications while mastering both frontend and backend development with JavaScript."}
                </p>
                <div className="learning-outcomes">
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build dynamic UIs with React or Angular"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Create RESTful APIs with Node.js and Express"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Design NoSQL databases with MongoDB"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Implement JWT authentication and OAuth"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Deploy to cloud platforms (Vercel, Railway, AWS)"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Master TypeScript for type-safe development"}
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
                        {"Frontend"}
                      </strong>
                      <p>
                        {"React.js / Angular, Next.js, Tailwind CSS"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Backend"}
                      </strong>
                      <p>
                        {"Node.js, Express.js, REST APIs, GraphQL"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Database"}
                      </strong>
                      <p>
                        {"MongoDB, Mongoose ODM, Redis"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"DevOps"}
                      </strong>
                      <p>
                        {"Docker, CI/CD, AWS/Vercel"}
                      </p>
                    </li>
                  </ul>
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
                {"A structured learning path covering the complete JavaScript ecosystem"}
              </p>
            </div>
            <div className="curriculum-grid">
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"01"}
                  </span>
                  <h3>
                    <Link href="/full-stack-javascript/articles/javascript-fundamentals">
                      {"JavaScript Mastery"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-javascript/articles/javascript-fundamentals">
                      {"ES6+ Modern JavaScript"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/javascript-fundamentals">
                      {"Async Programming (Promises, async/await)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/javascript-fundamentals">
                      {"Closures, Prototypes & Classes"}
                    </Link>
                  </li>
                  <li>
                    {"Modules & Build Tools"}
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/typescript">
                      {"TypeScript Fundamentals"}
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
                    <Link href="/full-stack-javascript/articles/react">
                      {"Frontend Development"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-javascript/articles/react">
                      {"React Components & Hooks"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/state-management">
                      {"State Management (Context, Redux)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/react-router">
                      {"React Router & Navigation"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/nextjs">
                      {"Next.js & Server-Side Rendering"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/tailwind">
                      {"Tailwind CSS"}
                    </Link>
                    {" & Styled Components"}
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/testing">
                      {"Testing with Jest & RTL"}
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
                    <Link href="/full-stack-javascript/articles/nodejs">
                      {"Backend with Node.js"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-javascript/articles/nodejs">
                      {"Node.js Core Concepts"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/expressjs">
                      {"Express.js Framework"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/expressjs">
                      {"RESTful API Design"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/error-handling">
                      {"Middleware & Error Handling"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/authentication">
                      {"Authentication (JWT, Passport)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/file-uploads">
                      {"File Uploads & Streaming"}
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
                    <Link href="/full-stack-javascript/articles/mongodb">
                      {"MongoDB & Data Layer"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-javascript/articles/mongodb">
                      {"MongoDB Fundamentals"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/mongodb">
                      {"Mongoose ODM & Schemas"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/mongodb">
                      {"CRUD Operations & Queries"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/mongodb-aggregation">
                      {"Aggregation Pipeline"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/mongodb">
                      {"Indexing & Performance"}
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
                    {"Advanced Topics"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-javascript/articles/graphql">
                      {"GraphQL with Apollo"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/websockets">
                      {"WebSockets & Real-time Apps"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/microservices">
                      {"Microservices Architecture"}
                    </Link>
                  </li>
                  <li>
                    {"Caching with Redis"}
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/performance">
                      {"Performance Optimization"}
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
                    {"DevOps & Deployment"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-javascript/articles/git-version-control">
                      {"Git & GitHub Workflows"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/docker">
                      {"Docker Containerization"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/cicd">
                      {"CI/CD with GitHub Actions"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-javascript/articles/environment-variables">
                      {"Environment Variables"}
                    </Link>
                  </li>
                  <li>
                    {"Cloud Deployment (AWS/Vercel)"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="career-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">
                {"Career Paths"}
              </span>
              <h2 className="section-title">
                {"Career "}
                <span className="gradient-text">
                  {"Opportunities"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Unlock diverse roles in the tech industry with JavaScript expertise"}
              </p>
            </div>
            <div className="career-grid">
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Full Stack Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"High Demand"}
                  </span>
                </div>
                <p>
                  {"Build complete web applications from frontend to backend. Work on diverse projects across industries."}
                </p>
                <div className="career-skills">
                  <span>
                    {"React"}
                  </span>
                  <span>
                    {"Node.js"}
                  </span>
                  <span>
                    {"MongoDB"}
                  </span>
                  <span>
                    {"APIs"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Frontend Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"High Demand"}
                  </span>
                </div>
                <p>
                  {"Create stunning user interfaces and interactive experiences. Focus on React, performance, and UX."}
                </p>
                <div className="career-skills">
                  <span>
                    {"React"}
                  </span>
                  <span>
                    {"Next.js"}
                  </span>
                  <span>
                    {"TypeScript"}
                  </span>
                  <span>
                    {"CSS"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Backend Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"High Demand"}
                  </span>
                </div>
                <p>
                  {"Design scalable server architectures, APIs, and database systems. Handle security and performance."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Node.js"}
                  </span>
                  <span>
                    {"Express"}
                  </span>
                  <span>
                    {"PostgreSQL"}
                  </span>
                  <span>
                    {"Redis"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"MERN Stack Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"Trending"}
                  </span>
                </div>
                <p>
                  {"Specialize in the popular MERN stack. High demand in startups and product companies."}
                </p>
                <div className="career-skills">
                  <span>
                    {"MongoDB"}
                  </span>
                  <span>
                    {"Express"}
                  </span>
                  <span>
                    {"React"}
                  </span>
                  <span>
                    {"Node.js"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Technical Lead"}
                  </h3>
                  <span className="demand-badge">
                    {"Senior Role"}
                  </span>
                </div>
                <p>
                  {"Lead development teams, make architectural decisions, and mentor junior developers."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Architecture"}
                  </span>
                  <span>
                    {"Team Lead"}
                  </span>
                  <span>
                    {"Code Review"}
                  </span>
                  <span>
                    {"Mentoring"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Freelance Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"Flexible"}
                  </span>
                </div>
                <p>
                  {"Work independently on global projects. Choose your clients and work from anywhere."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Full Stack"}
                  </span>
                  <span>
                    {"Client Mgmt"}
                  </span>
                  <span>
                    {"Remote"}
                  </span>
                  <span>
                    {"Flexibility"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tech-deep-dive">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">
                {"Tech Stack"}
              </span>
              <h2 className="section-title">
                {"Technologies You'll "}
                <span className="gradient-text">
                  {"Master"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Industry-standard tools and frameworks used by top companies"}
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>
                  {"Frontend Technologies"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-javascript/articles/react" className="tech-item">
                    <div className="tech-logo">
                      {"⚛️"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"React.js"}
                      </h4>
                      <p>
                        {"The most popular UI library. Build component-based interfaces with virtual DOM for optimal performance. Used by Facebook, Netflix, Airbnb."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-javascript/articles/nextjs" className="tech-item">
                    <div className="tech-logo">
                      {"▲"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Next.js"}
                      </h4>
                      <p>
                        {"React framework for production. Server-side rendering, static generation, and API routes. The go-to choice for modern React apps."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-javascript/articles/typescript" className="tech-item">
                    <div className="tech-logo">
                      {"📘"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"TypeScript"}
                      </h4>
                      <p>
                        {"JavaScript with types. Catch errors early, improve code quality, and enhance developer productivity. Industry standard for large codebases."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-javascript/articles/tailwind" className="tech-item">
                    <div className="tech-logo">
                      {"🎨"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Tailwind CSS"}
                      </h4>
                      <p>
                        {"Utility-first CSS framework. Build custom designs rapidly without leaving your HTML. Modern, efficient, and highly customizable."}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Backend Technologies"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-javascript/articles/nodejs" className="tech-item">
                    <div className="tech-logo">
                      {"🟢"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Node.js"}
                      </h4>
                      <p>
                        {"JavaScript runtime built on Chrome's V8 engine. Non-blocking, event-driven architecture perfect for scalable network applications."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-javascript/articles/expressjs" className="tech-item">
                    <div className="tech-logo">
                      {"🚂"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Express.js"}
                      </h4>
                      <p>
                        {"Fast, minimalist web framework for Node.js. The de-facto standard for building APIs and web applications with Node."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-javascript/articles/graphql" className="tech-item">
                    <div className="tech-logo">
                      {"🔷"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"GraphQL"}
                      </h4>
                      <p>
                        {"Query language for APIs. Request exactly the data you need. Used by GitHub, Shopify, and modern API-driven applications."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-javascript/articles/authentication" className="tech-item">
                    <div className="tech-logo">
                      {"🔐"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"JWT & OAuth"}
                      </h4>
                      <p>
                        {"Industry-standard authentication. Secure your APIs with JSON Web Tokens and implement social login with OAuth 2.0."}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Database & DevOps"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-javascript/articles/mongodb" className="tech-item">
                    <div className="tech-logo">
                      {"🍃"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"MongoDB"}
                      </h4>
                      <p>
                        {"Leading NoSQL database. Flexible document model, horizontal scaling, and powerful aggregation. Perfect for JavaScript applications."}
                      </p>
                    </div>
                  </Link>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🐘"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"PostgreSQL"}
                      </h4>
                      <p>
                        {"Advanced open-source relational database. When you need ACID compliance and complex queries. Works great with Prisma ORM."}
                      </p>
                    </div>
                  </div>
                  <Link href="/full-stack-javascript/articles/docker" className="tech-item">
                    <div className="tech-logo">
                      {"🐳"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Docker"}
                      </h4>
                      <p>
                        {"Containerization platform. Package your application with all dependencies. Essential for modern DevOps and deployment."}
                      </p>
                    </div>
                  </Link>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"☁️"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"AWS / Vercel"}
                      </h4>
                      <p>
                        {"Cloud deployment platforms. Host your applications globally with auto-scaling, CDN, and serverless functions."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="companies-using">
              <h3>
                {"Companies Using This Stack"}
              </h3>
              <p className="companies-intro">
                {"These industry leaders use JavaScript/MERN stack to power their products:"}
              </p>
              <div className="company-logos">
                <span className="company-name">
                  {"Netflix"}
                </span>
                <span className="company-name">
                  {"Uber"}
                </span>
                <span className="company-name">
                  {"PayPal"}
                </span>
                <span className="company-name">
                  {"LinkedIn"}
                </span>
                <span className="company-name">
                  {"Walmart"}
                </span>
                <span className="company-name">
                  {"Airbnb"}
                </span>
                <span className="company-name">
                  {"Facebook"}
                </span>
                <span className="company-name">
                  {"Twitter"}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="program-projects">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {"Projects You'll "}
                <span className="gradient-text">
                  {"Build"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Real-world projects that demonstrate your expertise to employers"}
              </p>
            </div>
            <div className="projects-detailed">
              <div className="project-detailed-card">
                <div className="project-number">
                  {"01"}
                </div>
                <div className="project-content">
                  <h3>
                    {"Social Media Platform"}
                  </h3>
                  <p className="project-desc">
                    {"Build a full-featured social network similar to Instagram/Twitter. This project teaches you how to handle user-generated content, real-time updates, and social interactions at scale."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"User authentication with JWT and social login (Google/GitHub)"}
                      </li>
                      <li>
                        {"Create, edit, delete posts with image uploads to cloud storage"}
                      </li>
                      <li>
                        {"Like, comment, and share functionality with optimistic UI updates"}
                      </li>
                      <li>
                        {"Real-time notifications using WebSockets"}
                      </li>
                      <li>
                        {"Follow/unfollow system with personalized feed algorithm"}
                      </li>
                      <li>
                        {"User profiles with activity history and settings"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"State management at scale, real-time data sync, file upload handling, pagination, caching strategies, and building scalable social features."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"React"}
                    </span>
                    <span>
                      {"Node.js"}
                    </span>
                    <span>
                      {"MongoDB"}
                    </span>
                    <span>
                      {"Socket.io"}
                    </span>
                    <span>
                      {"Cloudinary"}
                    </span>
                    <span>
                      {"Redis"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-number">
                  {"02"}
                </div>
                <div className="project-content">
                  <h3>
                    {"E-Commerce Store"}
                  </h3>
                  <p className="project-desc">
                    {"Create a production-ready online store with all the features customers expect. Learn to handle payments, inventory, and the complexities of e-commerce applications."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Product catalog with categories, filters, and search"}
                      </li>
                      <li>
                        {"Shopping cart with persistent state across sessions"}
                      </li>
                      <li>
                        {"Secure checkout with Stripe payment integration"}
                      </li>
                      <li>
                        {"Order management and tracking system"}
                      </li>
                      <li>
                        {"Admin dashboard for inventory and sales analytics"}
                      </li>
                      <li>
                        {"Email notifications for order confirmations"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Payment gateway integration, inventory management, SEO optimization with Next.js, admin interfaces, and handling sensitive transaction data securely."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"Next.js"}
                    </span>
                    <span>
                      {"Stripe"}
                    </span>
                    <span>
                      {"MongoDB"}
                    </span>
                    <span>
                      {"Tailwind"}
                    </span>
                    <span>
                      {"Prisma"}
                    </span>
                    <span>
                      {"Vercel"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-number">
                  {"03"}
                </div>
                <div className="project-content">
                  <h3>
                    {"Real-time Chat Application"}
                  </h3>
                  <p className="project-desc">
                    {"Build a Slack-like messaging platform with real-time communication. Master WebSocket technology and learn to build responsive, instant messaging systems."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Direct messaging and group chat rooms"}
                      </li>
                      <li>
                        {"Real-time typing indicators and online status"}
                      </li>
                      <li>
                        {"File and image sharing with preview"}
                      </li>
                      <li>
                        {"Message search and chat history"}
                      </li>
                      <li>
                        {"Push notifications for new messages"}
                      </li>
                      <li>
                        {"Voice/video call integration (WebRTC basics)"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"WebSocket connections, real-time state synchronization, message queuing, handling network interruptions gracefully, and building responsive chat UIs."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"React"}
                    </span>
                    <span>
                      {"Socket.io"}
                    </span>
                    <span>
                      {"Express"}
                    </span>
                    <span>
                      {"Redis"}
                    </span>
                    <span>
                      {"MongoDB"}
                    </span>
                    <span>
                      {"WebRTC"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-number">
                  {"04"}
                </div>
                <div className="project-content">
                  <h3>
                    {"Project Management Tool"}
                  </h3>
                  <p className="project-desc">
                    {"Create a Trello/Jira-like project management application. Learn complex UI interactions like drag-and-drop and build tools that teams actually use."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Kanban boards with drag-and-drop task management"}
                      </li>
                      <li>
                        {"Team workspaces with role-based permissions"}
                      </li>
                      <li>
                        {"Task assignments, due dates, and priorities"}
                      </li>
                      <li>
                        {"Comments and activity logs on tasks"}
                      </li>
                      <li>
                        {"Dashboard with project analytics and charts"}
                      </li>
                      <li>
                        {"Integration with external tools (GitHub, Slack)"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Complex drag-and-drop interactions, real-time collaboration, GraphQL for flexible data queries, role-based access control, and building productive team tools."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"React"}
                    </span>
                    <span>
                      {"DnD Kit"}
                    </span>
                    <span>
                      {"GraphQL"}
                    </span>
                    <span>
                      {"Apollo"}
                    </span>
                    <span>
                      {"MongoDB"}
                    </span>
                    <span>
                      {"Chart.js"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="skills-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">
                {"Expertise"}
              </span>
              <h2 className="section-title">
                {"Skills You'll "}
                <span className="gradient-text">
                  {"Gain"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Technical and professional skills that make you job-ready"}
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>
                  {"Technical Skills"}
                </h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">
                      {"JavaScript & TypeScript"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "95%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"React & Next.js"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "90%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Node.js & Express"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "90%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"MongoDB & SQL"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "85%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"REST & GraphQL APIs"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "85%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Git & DevOps"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "80%" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>
                  {"Professional Skills"}
                </h3>
                <div className="skill-tags">
                  <span className="skill-tag">
                    {"Problem Solving"}
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
                    {"System Design"}
                  </span>
                  <span className="skill-tag">
                    {"Debugging"}
                  </span>
                  <span className="skill-tag">
                    {"Performance Optimization"}
                  </span>
                  <span className="skill-tag">
                    {"Security Best Practices"}
                  </span>
                  <span className="skill-tag">
                    {"Testing & QA"}
                  </span>
                  <span className="skill-tag">
                    {"Team Collaboration"}
                  </span>
                  <span className="skill-tag">
                    {"Technical Communication"}
                  </span>
                  <span className="skill-tag">
                    {"Project Planning"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">
                {"FAQs"}
              </span>
              <h2 className="section-title">
                {"Frequently Asked "}
                <span className="gradient-text">
                  {"Questions"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Everything you need to know about the program"}
              </p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Do I need prior programming experience?"}
                </h3>
                <p className="faq-answer">
                  {"No prior experience is required. We start from the fundamentals of JavaScript and progressively build up to advanced concepts. However, basic computer literacy and familiarity with how websites work will be helpful."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"What is the mentorship format?"}
                </h3>
                <p className="faq-answer">
                  {"You'll have 1:1 sessions with your mentor (2-3 times per week), plus access to recorded content, assignments, and project work. The mentor provides personalized guidance, code reviews, and career advice tailored to your goals."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"How long does it take to complete?"}
                </h3>
                <p className="faq-answer">
                  {"The program is designed as a comprehensive 6-month journey. We recommend dedicating 15-20 hours per week for optimal learning. This duration ensures you build strong foundations and gain practical experience through real projects."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Will I be job-ready after this program?"}
                </h3>
                <p className="faq-answer">
                  {"Yes! You'll have a strong portfolio of 4+ production-quality projects, solid understanding of the MERN stack, and interview preparation. Many of our students land jobs within 2-3 months of completing the program."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Should I learn React or Angular?"}
                </h3>
                <p className="faq-answer">
                  {"We recommend React as it has the largest job market and ecosystem. However, if your target company uses Angular, we can customize the curriculum. The core JavaScript and backend skills transfer to any framework."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Is this program suitable for working professionals?"}
                </h3>
                <p className="faq-answer">
                  {"Absolutely! Many of our students are working professionals looking to upskill or transition careers. The flexible scheduling and 1:1 format accommodate different time zones and work schedules."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"What kind of support will I receive?"}
                </h3>
                <p className="faq-answer">
                  {"Beyond mentorship sessions, you get doubt-clearing support via chat, code review on all assignments, resume and LinkedIn profile optimization, mock interviews, and lifetime access to the CODiiN community."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Can I build my own project idea?"}
                </h3>
                <p className="faq-answer">
                  {"Yes! While we have structured projects to ensure you cover all essential concepts, your capstone project can be a custom idea. Your mentor will help you scope it appropriately and guide you through the implementation."}
                </p>
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
                        {"Beginners to Programming"}
                      </h3>
                      <p>
                        {"Start from JavaScript basics and progress to full stack development."}
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
                        {"Frontend Developers"}
                      </h3>
                      <p>
                        {"Expand your skills to backend development with Node.js."}
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
                        {"Career Changers"}
                      </h3>
                      <p>
                        {"Transition into tech with the most in-demand JavaScript stack."}
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
                      {"Basic understanding of how websites work"}
                    </li>
                    <li>
                      {"Familiarity with HTML & CSS (helpful but not required)"}
                    </li>
                    <li>
                      {"Laptop with internet connection"}
                    </li>
                    <li>
                      {"4-6 hours per week for learning"}
                    </li>
                  </ul>
                  <p className="prereq-note">
                    {"No prior JavaScript experience needed. We start from the fundamentals!"}
                  </p>
                </div>
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
                  {"JavaScript Full Stack?"}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in the Full Stack JavaScript program."} />
    </>
  );
}
