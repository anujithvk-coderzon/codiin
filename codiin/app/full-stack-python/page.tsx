import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Full Stack Python Course Kochi | Django Training",
  description: "Master Full Stack Python Development with Django/FastAPI at CODiiN Tech Mentors Lab. Learn Python, Django, Flask, PostgreSQL with personalized 1:1 mentorship in Kochi.",
  keywords: ["Python full stack course Kochi", "Django training Kerala", "FastAPI course", "Python web development mentorship", "Flask bootcamp Kochi", "backend development training Ernakulam"],
  alternates: { canonical: "/full-stack-python" },
  openGraph: {
    type: "website",
    url: "/full-stack-python",
    title: "Full Stack Python (Django/FastAPI) Mentorship | CODiiN Tech Mentors Lab",
    description: "Build robust web applications with Python. Learn Django, FastAPI, PostgreSQL, and React with expert mentorship.",
    images: ["/images/fullstack-python-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Python (Django/FastAPI) Course Kochi | CODiiN",
    description: "Master Python, Django, FastAPI with expert 1:1 mentorship. Build robust web apps.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Full Stack Python (Django/FastAPI) Mentorship",
  "description": "Comprehensive mentorship program covering Python, Django, FastAPI, PostgreSQL for full stack web development",
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
  "occupationalCategory": "Full Stack Python Developer",
  "timeRequired": "P6M",
  "teaches": [
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "React",
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
      "name": "Full Stack Python",
      "item": "https://www.codiin.com/full-stack-python"
    }
  ]
} as const;

const SCHEMA_3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I learn Django or FastAPI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both! Django is perfect for full-featured web applications with admin interfaces, while FastAPI excels at high-performance APIs. We cover both."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to know Python already?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic familiarity helps, but we cover Python fundamentals at the start. If you're completely new to programming, we can adjust the pace."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from JavaScript full stack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Python is known for cleaner syntax and is dominant in data science/AI. If you're interested in ML integration, this is your path."
      }
    },
    {
      "@type": "Question",
      "name": "Will I learn frontend development too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We cover React for frontend integration, plus HTMX for Django-native dynamic interfaces."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program is designed as a comprehensive 6-month journey. We recommend dedicating 15-20 hours per week."
      }
    },
    {
      "@type": "Question",
      "name": "Is Python good for getting a job?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Python developers are in high demand across web development, data science, DevOps, and ML engineering."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of support is provided?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You get 1:1 mentorship sessions, code reviews, doubt clearing via chat, resume optimization, and mock interviews."
      }
    },
    {
      "@type": "Question",
      "name": "Can I integrate machine learning in my projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We'll show you how to deploy ML models as APIs using FastAPI. This is a valuable skill as more applications integrate AI features."
      }
    }
  ]
} as const;

export default function FullStackPythonPage() {
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
                {"Python Stack"}
              </span>
              <h1>
                {"Full Stack Python "}
                <span className="gradient-text">
                  {"(Django/FastAPI)"}
                </span>
              </h1>
              <p className="program-hero-desc">
                {"Build powerful, scalable web applications with Python. Master Django for full-featured apps or FastAPI for high-performance APIs, paired with modern frontend technologies."}
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
                src="/img/programs/full-stack-python.png"
                alt="Full Stack Python — the tools and techniques covered in this program"
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
                {"Why Python?"}
              </span>
              <h2 className="section-title">
                {"Why Learn "}
                <span className="gradient-text">
                  {"Full Stack Python?"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Python's simplicity and power make it the ideal language for modern web development"}
              </p>
            </div>
            <div className="why-learn-grid">
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>
                  {"Beginner Friendly"}
                </h3>
                <p>
                  {"Python's clean, readable syntax makes it the most beginner-friendly programming language. Write less code, accomplish more, and focus on solving problems rather than fighting syntax."}
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
                  {"Versatile & Powerful"}
                </h3>
                <p>
                  {"From web apps to AI/ML, data science to automation — Python does it all. Learn once, apply everywhere. Your Python skills open doors to multiple career paths."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    {" "}
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>
                  {"Rapid Development"}
                </h3>
                <p>
                  {"Django's \"batteries included\" philosophy and FastAPI's modern design let you build production-ready applications in record time. Perfect for startups and MVPs."}
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
                  {"High Industry Demand"}
                </h3>
                <p>
                  {"Python developers are highly sought after across industries. From tech giants to startups, companies actively seek Python expertise for web development and beyond."}
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
                  {"Enterprise Ready"}
                </h3>
                <p>
                  {"Instagram, Spotify, and Dropbox run on Python. Django and FastAPI power applications serving millions of users. Build scalable, enterprise-grade solutions."}
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
                  {"AI/ML Integration"}
                </h3>
                <p>
                  {"Python dominates AI and machine learning. Build web apps that integrate ML models, chatbots, and intelligent features — a skill combination that's extremely valuable."}
                </p>
              </div>
            </div>
            <div className="industry-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {"#3"}
                </span>
                <span className="stat-label">
                  {"most popular language"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"400K+"}
                </span>
                <span className="stat-label">
                  {"PyPI packages available"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"50%+"}
                </span>
                <span className="stat-label">
                  {"growth in Python jobs"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"#1"}
                </span>
                <span className="stat-label">
                  {"for AI/ML development"}
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
                  {"This comprehensive mentorship program covers Python web development from basics to advanced topics. You'll master both Django and FastAPI while building production-ready applications."}
                </p>
                <div className="learning-outcomes">
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build full-featured web apps with Django"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Create high-performance APIs with FastAPI"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Design databases with PostgreSQL and SQLAlchemy"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Implement authentication with OAuth2 and JWT"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Deploy with Docker and cloud platforms"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build frontend interfaces with React"}
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
                        {"Python, Django, FastAPI, Flask, Celery"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Frontend"}
                      </strong>
                      <p>
                        {"React.js, HTMX, Tailwind CSS, Jinja2"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Database"}
                      </strong>
                      <p>
                        {"PostgreSQL, SQLAlchemy, Redis"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"DevOps"}
                      </strong>
                      <p>
                        {"Docker, Nginx, AWS/DigitalOcean"}
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
                {"A structured learning path covering Python web development"}
              </p>
            </div>
            <div className="curriculum-grid">
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"01"}
                  </span>
                  <h3>
                    <Link href="/full-stack-python/articles/python-fundamentals">
                      {"Python Fundamentals"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-python/articles/python-fundamentals">
                      {"Python Syntax & Data Structures"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/python-fundamentals">
                      {"Object-Oriented Programming"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/functional-programming">
                      {"Functional Programming in Python"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/virtual-environments">
                      {"Virtual Environments & pip"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/python-fundamentals">
                      {"Type Hints & Best Practices"}
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
                    <Link href="/full-stack-python/articles/django">
                      {"Django Framework"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-python/articles/django">
                      {"Django MVT Architecture"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/django">
                      {"Models & ORM Queries"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/django">
                      {"Views, Templates & Forms"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/rest-apis-python">
                      {"Django REST Framework"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/django">
                      {"Authentication & Authorization"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/django">
                      {"Django Admin Customization"}
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
                    <Link href="/full-stack-python/articles/fastapi">
                      {"FastAPI & Async Python"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-python/articles/fastapi">
                      {"Async/Await in Python"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/fastapi">
                      {"FastAPI Fundamentals"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/fastapi">
                      {"Pydantic Data Validation"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/fastapi">
                      {"Dependency Injection"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/fastapi">
                      {"OpenAPI Documentation"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/celery">
                      {"Background Tasks & WebSockets"}
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
                    {"Database & ORM"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-python/articles/postgresql">
                      {"PostgreSQL Fundamentals"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/sqlalchemy">
                      {"SQLAlchemy ORM"}
                    </Link>
                  </li>
                  <li>
                    {"Database Migrations (Alembic)"}
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/postgresql">
                      {"Query Optimization"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/redis">
                      {"Redis for Caching"}
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
                    {"Frontend Integration"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"React.js Fundamentals"}
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/rest-apis-python">
                      {"API Integration with Axios"}
                    </Link>
                  </li>
                  <li>
                    {"HTMX for Dynamic Pages"}
                  </li>
                  <li>
                    {"Tailwind CSS Styling"}
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/jwt">
                      {"JWT Authentication Flow"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/oauth2">
                      {"OAuth2 Authentication"}
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
                    <Link href="/full-stack-python/articles/devops-concepts">
                      {"DevOps & Deployment"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/full-stack-python/articles/docker">
                      {"Docker & Docker Compose"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/gunicorn-nginx">
                      {"Nginx & Gunicorn Setup"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/cicd">
                      {"CI/CD with GitHub Actions"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/aws-essentials">
                      {"AWS/DigitalOcean Deployment"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/kubernetes">
                      {"Kubernetes Orchestration"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/full-stack-python/articles/git">
                      {"Git Version Control"}
                    </Link>
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
                {"Diverse roles await Python full stack developers"}
              </p>
            </div>
            <div className="career-grid">
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Python Backend Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"High Demand"}
                  </span>
                </div>
                <p>
                  {"Build robust server-side applications and APIs. Work with Django, FastAPI, and databases."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Django"}
                  </span>
                  <span>
                    {"FastAPI"}
                  </span>
                  <span>
                    {"PostgreSQL"}
                  </span>
                  <span>
                    {"APIs"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Full Stack Python Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"High Demand"}
                  </span>
                </div>
                <p>
                  {"Build complete web applications from database to UI. Handle both frontend and backend."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Django"}
                  </span>
                  <span>
                    {"React"}
                  </span>
                  <span>
                    {"PostgreSQL"}
                  </span>
                  <span>
                    {"DevOps"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"API Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"Trending"}
                  </span>
                </div>
                <p>
                  {"Design and build high-performance REST and GraphQL APIs for web and mobile applications."}
                </p>
                <div className="career-skills">
                  <span>
                    <Link href="/full-stack-python/articles/fastapi">
                      {"FastAPI"}
                    </Link>
                  </span>
                  <span>
                    {"DRF"}
                  </span>
                  <span>
                    {"OpenAPI"}
                  </span>
                  <span>
                    <Link href="/full-stack-python/articles/microservices">
                      {"Microservices"}
                    </Link>
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"DevOps Engineer"}
                  </h3>
                  <span className="demand-badge">
                    {"Growing"}
                  </span>
                </div>
                <p>
                  {"Automate deployments and manage infrastructure. Python is the language of DevOps."}
                </p>
                <div className="career-skills">
                  <span>
                    <Link href="/full-stack-python/articles/docker">
                      {"Docker"}
                    </Link>
                  </span>
                  <span>
                    <Link href="/full-stack-python/articles/aws-essentials">
                      {"AWS"}
                    </Link>
                  </span>
                  <span>
                    <Link href="/full-stack-python/articles/cicd">
                      {"CI/CD"}
                    </Link>
                  </span>
                  <span>
                    {"Automation"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"ML Engineer (Web)"}
                  </h3>
                  <span className="demand-badge">
                    {"Emerging"}
                  </span>
                </div>
                <p>
                  {"Build web applications that integrate machine learning models and AI capabilities."}
                </p>
                <div className="career-skills">
                  <span>
                    {"FastAPI"}
                  </span>
                  <span>
                    {"TensorFlow"}
                  </span>
                  <span>
                    {"ML APIs"}
                  </span>
                  <span>
                    {"Docker"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Technical Architect"}
                  </h3>
                  <span className="demand-badge">
                    {"Senior Role"}
                  </span>
                </div>
                <p>
                  {"Design system architecture and lead technical decisions for large-scale applications."}
                </p>
                <div className="career-skills">
                  <span>
                    {"System Design"}
                  </span>
                  <span>
                    {"Microservices"}
                  </span>
                  <span>
                    {"Leadership"}
                  </span>
                  <span>
                    {"Cloud"}
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
                {"Industry-standard Python tools and frameworks"}
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>
                  {"Backend Frameworks"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-python/articles/django" className="tech-item">
                    <div className="tech-logo">
                      {"🎸"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Django"}
                      </h4>
                      <p>
                        {"The \"batteries included\" framework. Build full-featured web apps rapidly with built-in admin, ORM, authentication, and more. Powers Instagram and Pinterest."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-python/articles/flask" className="tech-item">
                    <div className="tech-logo">
                      {"⚡"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Flask"}
                      </h4>
                      <p>
                        {"Lightweight and flexible micro-framework for building web applications and APIs. Perfect for small to medium projects and learning web development fundamentals."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-python/articles/fastapi" className="tech-item">
                    <div className="tech-logo">
                      {"🚀"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"FastAPI"}
                      </h4>
                      <p>
                        {"Modern, high-performance Python web framework for building APIs with automatic OpenAPI documentation and type hints."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-python/articles/celery" className="tech-item">
                    <div className="tech-logo">
                      {"📋"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Celery"}
                      </h4>
                      <p>
                        {"Distributed task queue for handling background jobs, scheduled tasks, and async processing. Essential for scalable applications."}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Database & Storage"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-python/articles/postgresql" className="tech-item">
                    <div className="tech-logo">
                      {"🐘"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"PostgreSQL"}
                      </h4>
                      <p>
                        {"Advanced open-source relational database. ACID compliant, powerful features, and excellent Python integration. Industry standard for Django apps."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-python/articles/sqlalchemy" className="tech-item">
                    <div className="tech-logo">
                      {"🔮"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"SQLAlchemy"}
                      </h4>
                      <p>
                        {"Python SQL toolkit and ORM. Full flexibility of SQL with Python convenience. Works great with FastAPI and Flask."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-python/articles/redis" className="tech-item">
                    <div className="tech-logo">
                      {"🔴"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Redis"}
                      </h4>
                      <p>
                        {"In-memory data store for caching, sessions, and real-time features. Essential for high-performance applications."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-python/articles/aws-essentials" className="tech-item">
                    <div className="tech-logo">
                      {"☁️"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"AWS Essentials"}
                      </h4>
                      <p>
                        {"Cloud storage, compute, and database services. Learn to deploy and scale Python applications on AWS."}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"DevOps & Deployment"}
                </h3>
                <div className="tech-items">
                  <Link href="/full-stack-python/articles/docker" className="tech-item">
                    <div className="tech-logo">
                      {"🐳"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Docker"}
                      </h4>
                      <p>
                        {"Containerize your Python applications. Consistent environments from development to production. Essential for modern deployment."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-python/articles/gunicorn-nginx" className="tech-item">
                    <div className="tech-logo">
                      {"🦄"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Gunicorn + Nginx"}
                      </h4>
                      <p>
                        {"Production-grade WSGI server with Nginx reverse proxy. The standard deployment stack for Python web applications."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-python/articles/github-actions" className="tech-item">
                    <div className="tech-logo">
                      {"🔄"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"GitHub Actions"}
                      </h4>
                      <p>
                        {"Automate testing and deployment. Set up CI/CD pipelines that run tests and deploy on every push."}
                      </p>
                    </div>
                  </Link>
                  <Link href="/full-stack-python/articles/cloud-computing" className="tech-item">
                    <div className="tech-logo">
                      {"🌊"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Cloud Computing"}
                      </h4>
                      <p>
                        {"Deploy to cloud platforms. Learn VPS setup, managed databases, and cloud architecture."}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="companies-using">
              <h3>
                {"Companies Using Python Stack"}
              </h3>
              <p className="companies-intro">
                {"These industry leaders power their products with Python:"}
              </p>
              <div className="company-logos">
                <span className="company-name">
                  {"Instagram"}
                </span>
                <span className="company-name">
                  {"Spotify"}
                </span>
                <span className="company-name">
                  {"Dropbox"}
                </span>
                <span className="company-name">
                  {"Pinterest"}
                </span>
                <span className="company-name">
                  {"Reddit"}
                </span>
                <span className="company-name">
                  {"Netflix"}
                </span>
                <span className="company-name">
                  {"Uber"}
                </span>
                <span className="company-name">
                  {"Mozilla"}
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
                {"Real-world projects that demonstrate your Python expertise"}
              </p>
            </div>
            <div className="projects-detailed">
              <div className="project-detailed-card">
                <div className="project-number">
                  {"01"}
                </div>
                <div className="project-content">
                  <h3>
                    {"Blog & CMS Platform"}
                  </h3>
                  <p className="project-desc">
                    {"Build a full-featured content management system like WordPress but with Django. Learn how to create admin interfaces, handle rich content, and optimize for SEO."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Rich text editor with image uploads"}
                      </li>
                      <li>
                        {"Custom admin dashboard for content management"}
                      </li>
                      <li>
                        {"Categories, tags, and search functionality"}
                      </li>
                      <li>
                        {"SEO optimization with meta tags and sitemaps"}
                      </li>
                      <li>
                        {"User comments with moderation"}
                      </li>
                      <li>
                        {"RSS feeds and social sharing"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Django admin customization, model relationships, template inheritance, static files handling, and deploying content-driven applications."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"Django"}
                    </span>
                    <span>
                      {"PostgreSQL"}
                    </span>
                    <span>
                      {"HTMX"}
                    </span>
                    <span>
                      {"Tailwind"}
                    </span>
                    <span>
                      {"Cloudinary"}
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
                    {"Analytics Dashboard API"}
                  </h3>
                  <p className="project-desc">
                    {"Create a high-performance analytics backend with FastAPI. Process and serve data for real-time dashboards with async capabilities and automatic documentation."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"RESTful API with automatic OpenAPI docs"}
                      </li>
                      <li>
                        {"Real-time data processing with async/await"}
                      </li>
                      <li>
                        {"Time-series data aggregation and analysis"}
                      </li>
                      <li>
                        {"JWT authentication and rate limiting"}
                      </li>
                      <li>
                        {"WebSocket support for live updates"}
                      </li>
                      <li>
                        {"React dashboard frontend integration"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Async Python, Pydantic data validation, dependency injection, database optimization, and building APIs that handle high traffic."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"FastAPI"}
                    </span>
                    <span>
                      {"PostgreSQL"}
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
              <div className="project-detailed-card">
                <div className="project-number">
                  {"03"}
                </div>
                <div className="project-content">
                  <h3>
                    {"E-Commerce Backend"}
                  </h3>
                  <p className="project-desc">
                    {"Build a scalable e-commerce API with Django REST Framework. Handle products, orders, payments, and inventory with enterprise-grade patterns."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Product catalog with variants and inventory"}
                      </li>
                      <li>
                        {"Shopping cart and order management"}
                      </li>
                      <li>
                        {"Stripe payment integration"}
                      </li>
                      <li>
                        {"Background tasks with Celery (emails, notifications)"}
                      </li>
                      <li>
                        {"Admin dashboard with sales analytics"}
                      </li>
                      <li>
                        {"API documentation for frontend teams"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Django REST Framework serializers, payment gateway integration, async task queues, and building APIs that power e-commerce at scale."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"Django"}
                    </span>
                    <span>
                      {"DRF"}
                    </span>
                    <span>
                      {"Stripe"}
                    </span>
                    <span>
                      {"Celery"}
                    </span>
                    <span>
                      {"Redis"}
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
                    {"Microservices Architecture"}
                  </h3>
                  <p className="project-desc">
                    {"Design and build a microservices-based application. Learn how to split a monolith into services and handle inter-service communication."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Multiple FastAPI microservices"}
                      </li>
                      <li>
                        {"API Gateway for routing"}
                      </li>
                      <li>
                        {"Message queue communication (RabbitMQ)"}
                      </li>
                      <li>
                        {"Service discovery and health checks"}
                      </li>
                      <li>
                        {"Containerized deployment with Docker Compose"}
                      </li>
                      <li>
                        {"Centralized logging and monitoring"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Microservices patterns, event-driven architecture, Docker orchestration, and building distributed systems that scale."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"FastAPI"}
                    </span>
                    <span>
                      {"Docker"}
                    </span>
                    <span>
                      {"RabbitMQ"}
                    </span>
                    <span>
                      {"PostgreSQL"}
                    </span>
                    <span>
                      {"Nginx"}
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
                      {"Python Programming"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "95%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Django & FastAPI"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "90%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"PostgreSQL & SQLAlchemy"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "85%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"REST API Design"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "90%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Docker & Deployment"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "80%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Testing & CI/CD"}
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
                    {"API Documentation"}
                  </span>
                  <span className="skill-tag">
                    {"Database Design"}
                  </span>
                  <span className="skill-tag">
                    {"System Design"}
                  </span>
                  <span className="skill-tag">
                    {"Debugging"}
                  </span>
                  <span className="skill-tag">
                    {"Performance Tuning"}
                  </span>
                  <span className="skill-tag">
                    {"Security Best Practices"}
                  </span>
                  <span className="skill-tag">
                    {"Testing Strategies"}
                  </span>
                  <span className="skill-tag">
                    {"Team Collaboration"}
                  </span>
                  <span className="skill-tag">
                    {"Technical Writing"}
                  </span>
                  <span className="skill-tag">
                    {"Agile Development"}
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
                  {"Should I learn Django or FastAPI?"}
                </h3>
                <p className="faq-answer">
                  {"Both! Django is perfect for full-featured web applications with admin interfaces, while FastAPI excels at high-performance APIs. We cover both so you can choose the right tool for each project."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Do I need to know Python already?"}
                </h3>
                <p className="faq-answer">
                  {"Basic familiarity helps, but we cover Python fundamentals at the start. If you're completely new to programming, consider starting with basics before joining, or we can adjust the pace."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"How is this different from JavaScript full stack?"}
                </h3>
                <p className="faq-answer">
                  {"Python is known for cleaner syntax and is dominant in data science/AI. If you're interested in ML integration or prefer Python's readability, this is your path. Both are excellent for web development."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Will I learn frontend development too?"}
                </h3>
                <p className="faq-answer">
                  {"Yes! We cover React for frontend integration, plus HTMX for Django-native dynamic interfaces. You'll be able to build complete full-stack applications."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"How long is the program?"}
                </h3>
                <p className="faq-answer">
                  {"The program is designed as a comprehensive 6-month journey. We recommend dedicating 15-20 hours per week for optimal learning and project completion."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Is Python good for getting a job?"}
                </h3>
                <p className="faq-answer">
                  {"Absolutely! Python developers are in high demand. The language's versatility means you can work in web development, data science, DevOps, or ML engineering."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"What kind of support is provided?"}
                </h3>
                <p className="faq-answer">
                  {"You get 1:1 mentorship sessions, code reviews, doubt clearing via chat, resume optimization, mock interviews, and lifetime access to our community."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Can I integrate machine learning in my projects?"}
                </h3>
                <p className="faq-answer">
                  {"Yes! We'll show you how to deploy ML models as APIs using FastAPI. This is a valuable skill as more applications integrate AI features."}
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
                        {"Python Enthusiasts"}
                      </h3>
                      <p>
                        {"Those who love Python and want to build web applications."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 20V10" />
                        {" "}
                        <path d="M18 20V4" />
                        {" "}
                        <path d="M6 20v-4" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Data Professionals"}
                      </h3>
                      <p>
                        {"Data analysts/scientists wanting to build web apps for their models."}
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
                        {"Backend Developers"}
                      </h3>
                      <p>
                        {"Backend devs wanting to master the Python ecosystem."}
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
                      {"Familiarity with Python (helpful but not required)"}
                    </li>
                    <li>
                      {"Laptop with internet connection"}
                    </li>
                    <li>
                      {"4-6 hours per week for learning"}
                    </li>
                  </ul>
                  <p className="prereq-note">
                    {"We cover Python fundamentals before diving into web development!"}
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
                  {"Python Full Stack?"}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in the Full Stack Python program."} />
    </>
  );
}
