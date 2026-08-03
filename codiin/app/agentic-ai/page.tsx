import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Agentic AI Course Kochi | LangChain & LLM Training",
  description: "Master Agentic AI with CODiiN Tech Mentors Lab. Learn LLMs, LangChain, RAG systems, and AI Agent frameworks with personalized 1:1 mentorship in Kochi, Kerala.",
  keywords: ["agentic AI course Kochi", "LangChain training Kerala", "LLM course", "AI agents training Kochi", "prompt engineering mentorship", "RAG systems", "generative AI training Ernakulam"],
  alternates: { canonical: "/agentic-ai" },
  openGraph: {
    type: "website",
    url: "/agentic-ai",
    title: "Agentic AI Mentorship | CODiiN Tech Mentors Lab",
    description: "Build autonomous AI agents using LLMs, LangChain, and modern AI frameworks with expert mentorship.",
    images: ["/images/agentic-ai-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Mentorship | CODiiN Tech Mentors Lab",
    description: "Build autonomous AI agents using LLMs, LangChain, and modern AI frameworks.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Agentic AI Mentorship",
  "description": "Comprehensive mentorship program covering LLMs, prompt engineering, AI agents, and RAG systems",
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
  "educationalLevel": "Intermediate",
  "occupationalCategory": "AI Engineer",
  "timeRequired": "P6M",
  "teaches": [
    "LLMs",
    "Prompt Engineering",
    "LangChain",
    "RAG",
    "AI Agents",
    "AutoGen"
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
      "name": "Agentic AI",
      "item": "https://www.codiin.com/agentic-ai"
    }
  ]
} as const;

const SCHEMA_3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need ML/AI experience to join?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No prior AI/ML experience required! We focus on practical application using APIs and frameworks, not deep learning theory. Python proficiency is sufficient."
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
      "name": "What makes this different from online courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AI agent landscape changes rapidly. Our 1:1 mentorship keeps you updated with the latest frameworks and best practices as they emerge."
      }
    },
    {
      "@type": "Question",
      "name": "Will I need to pay for API costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We guide you on using free tiers and cost-effective strategies. Most projects can be completed with minimal API costs (often under $10-20 total)."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of projects will I build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll build chatbots, document Q&A systems, research agents, and multi-agent systems - all deployable, production-ready applications."
      }
    },
    {
      "@type": "Question",
      "name": "Is this relevant for enterprise roles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Enterprise adoption of AI agents is accelerating. We cover production concerns like cost management, safety, and observability."
      }
    },
    {
      "@type": "Question",
      "name": "How is the mentorship conducted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sessions are 1:1 with your mentor, either online or at our Kochi center. You get personalized attention, code reviews, and career guidance."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of support do I get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beyond sessions, you get doubt clearing support, project guidance, interview preparation, and access to our AI community."
      }
    }
  ]
} as const;

export default function AgenticAiPage() {
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
              <h1>
                {"Agentic AI"}
              </h1>
              <p className="program-hero-desc">
                {"Build the future of AI. Learn to create autonomous agents that can reason, plan, and execute complex tasks using LLMs and modern frameworks."}
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
                src="/img/programs/agentic-ai.png"
                alt="Agentic AI — the tools and techniques covered in this program"
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
                  {"This cutting-edge program focuses on the rapidly evolving field of AI agents. You'll learn to harness the power of Large Language Models to build systems that can autonomously complete complex tasks, reason about problems, and interact with external tools and APIs."}
                </p>
                <div className="learning-outcomes">
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Understand LLM architectures and capabilities"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Master prompt engineering techniques"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build RAG systems for knowledge retrieval"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Create autonomous AI agents with LangChain"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Implement multi-agent systems with AutoGen/CrewAI"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Deploy AI applications to production"}
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
                        {"Cutting-Edge Tech"}
                      </strong>
                      <p>
                        {"GPT-4, Claude, LangChain, LlamaIndex"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Hands-On Building"}
                      </strong>
                      <p>
                        {"Build real AI agents and chatbots"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Latest Frameworks"}
                      </strong>
                      <p>
                        {"AutoGen, CrewAI, Semantic Kernel"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Production Skills"}
                      </strong>
                      <p>
                        {"Deploy, monitor, and scale AI systems"}
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
                  {"Agentic AI?"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"The next frontier in artificial intelligence is here"}
              </p>
            </div>
            <div className="why-cards">
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3>
                  {"Revolutionary Technology"}
                </h3>
                <p>
                  {"AI agents represent the next evolution of AI. They can reason, plan, and execute complex tasks autonomously."}
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
                  {"Explosive Demand"}
                </h3>
                <p>
                  {"Companies are racing to integrate AI agents. Skilled developers who can build these systems are highly sought after."}
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
                  {"Practical Applications"}
                </h3>
                <p>
                  {"From customer service bots to research assistants, code generators to data analysts - AI agents are transforming every industry."}
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
                  {"Powerful Frameworks"}
                </h3>
                <p>
                  {"LangChain, AutoGen, CrewAI - learn the tools that make building sophisticated AI systems accessible."}
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
                  {"Build Real Products"}
                </h3>
                <p>
                  {"Create chatbots, research assistants, document Q&A systems, and multi-agent workflows that solve real problems."}
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
                  {"Premium Career Path"}
                </h3>
                <p>
                  {"AI engineers with agent-building skills command top-tier salaries. This is one of the most in-demand specializations in tech."}
                </p>
              </div>
            </div>
            <div className="why-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {"300%"}
                </span>
                <span className="stat-label">
                  {"Growth in AI Agent Jobs"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"$15B+"}
                </span>
                <span className="stat-label">
                  {"AI Agent Market by 2028"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"75%"}
                </span>
                <span className="stat-label">
                  {"Enterprises Adopting AI Agents"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"#1"}
                </span>
                <span className="stat-label">
                  {"Hottest AI Skill 2024-25"}
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
                {"Roles you can pursue after mastering Agentic AI"}
              </p>
            </div>
            <div className="career-grid">
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <h3>
                  {"AI Agent Developer"}
                </h3>
                <p>
                  {"Build autonomous AI agents using LangChain, AutoGen, and modern frameworks."}
                </p>
                <span className="demand-badge">
                  {"Hot Skill"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3>
                  {"Conversational AI Engineer"}
                </h3>
                <p>
                  {"Design and build intelligent chatbots and virtual assistants for enterprises."}
                </p>
                <span className="demand-badge">
                  {"High Demand"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    {" "}
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3>
                  {"RAG Systems Developer"}
                </h3>
                <p>
                  {"Build knowledge retrieval systems that connect LLMs to enterprise data."}
                </p>
                <span className="demand-badge">
                  {"Trending"}
                </span>
              </div>
              <div className="career-card">
                <div className="career-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    {" "}
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3>
                  {"LLM Application Developer"}
                </h3>
                <p>
                  {"Integrate LLM capabilities into applications and build AI-powered products."}
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
                  {"Prompt Engineer"}
                </h3>
                <p>
                  {"Optimize prompts and design effective AI interactions for enterprise applications."}
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
                  {"AI Solutions Architect"}
                </h3>
                <p>
                  {"Design end-to-end AI solutions combining agents, RAG, and enterprise systems."}
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
                {"Master the cutting-edge AI agent technology stack"}
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>
                  {"LLMs & APIs"}
                </h3>
                <div className="tech-items">
                  <div className="tech-item">
                    <h4>
                      {"OpenAI (GPT-4)"}
                    </h4>
                    <p>
                      {"Industry-leading LLM with function calling, vision, and code generation capabilities."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      {"Anthropic (Claude)"}
                    </h4>
                    <p>
                      {"Safe, helpful AI with long context windows and excellent reasoning abilities."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/ollama" className="tech-link">
                        {"Local LLMs (Ollama)"}
                      </Link>
                    </h4>
                    <p>
                      {"Llama, Mistral, and other models for on-premise and cost-effective deployments."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/embeddings" className="tech-link">
                        {"Embeddings"}
                      </Link>
                    </h4>
                    <p>
                      {"OpenAI, Cohere, and sentence-transformers for semantic search and RAG."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Agent Frameworks"}
                </h3>
                <div className="tech-items">
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/langchain" className="tech-link">
                        {"LangChain"}
                      </Link>
                    </h4>
                    <p>
                      {"The most popular framework for building LLM applications with chains and agents."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/chains-lcel" className="tech-link">
                        {"Chains & LCEL"}
                      </Link>
                    </h4>
                    <p>
                      {"Build composable AI pipelines with LangChain Expression Language."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/langgraph" className="tech-link">
                        {"LangGraph"}
                      </Link>
                    </h4>
                    <p>
                      {"Build complex, stateful multi-actor AI applications with graph workflows."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/autogen" className="tech-link">
                        {"AutoGen"}
                      </Link>
                    </h4>
                    <p>
                      {"Microsoft's framework for building multi-agent conversational systems."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/crewai" className="tech-link">
                        {"CrewAI"}
                      </Link>
                    </h4>
                    <p>
                      {"Framework for orchestrating role-playing, autonomous AI agents."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/agent-architectures" className="tech-link">
                        {"Agent Architectures"}
                      </Link>
                    </h4>
                    <p>
                      {"Design patterns: ReAct, Plan-and-Execute, Reflection, Router, Multi-Agent."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/openai-assistants" className="tech-link">
                        {"OpenAI Assistants"}
                      </Link>
                    </h4>
                    <p>
                      {"OpenAI's official API for building stateful agents with threads and tools."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/dspy" className="tech-link">
                        {"DSPy"}
                      </Link>
                    </h4>
                    <p>
                      {"Stanford's declarative framework for optimizing LLM prompts programmatically."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/semantic-kernel" className="tech-link">
                        {"Semantic Kernel"}
                      </Link>
                    </h4>
                    <p>
                      {"Microsoft's enterprise SDK for building AI applications with plugins."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/haystack" className="tech-link">
                        {"Haystack"}
                      </Link>
                    </h4>
                    <p>
                      {"Production-ready framework for building search and RAG pipelines."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  <Link href="/agentic-ai/articles/rag" className="tech-link">
                    {"RAG"}
                  </Link>
                  {" & Infrastructure"}
                </h3>
                <div className="tech-items">
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/vector-databases" className="tech-link">
                        {"Vector Databases"}
                      </Link>
                    </h4>
                    <p>
                      {"Pinecone, Chroma, Weaviate, and Qdrant for storing and retrieving embeddings."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/llamaindex" className="tech-link">
                        {"LlamaIndex"}
                      </Link>
                    </h4>
                    <p>
                      {"Data framework for connecting LLMs to custom data sources and knowledge bases."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/graphrag" className="tech-link">
                        {"GraphRAG"}
                      </Link>
                    </h4>
                    <p>
                      {"Combine knowledge graphs with RAG for complex multi-hop reasoning queries."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/agent-memory" className="tech-link">
                        {"Agent Memory"}
                      </Link>
                    </h4>
                    <p>
                      {"Short-term, long-term, episodic & semantic memory for conversational agents."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/mcp" className="tech-link">
                        {"MCP Protocol"}
                      </Link>
                    </h4>
                    <p>
                      {"Anthropic's Model Context Protocol for universal AI tool integration."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/langsmith" className="tech-link">
                        {"LangSmith"}
                      </Link>
                    </h4>
                    <p>
                      {"Observability and debugging platform for LLM applications."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/agent-safety" className="tech-link">
                        {"Agent Safety"}
                      </Link>
                    </h4>
                    <p>
                      {"Guardrails, input validation, output filtering for production AI agents."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Advanced & Production"}
                </h3>
                <div className="tech-items">
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/multimodal-agents" className="tech-link">
                        {"Multimodal Agents"}
                      </Link>
                    </h4>
                    <p>
                      {"Build agents that process images, audio, and video with GPT-4V and Claude Vision."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/browser-agents" className="tech-link">
                        {"Browser Agents"}
                      </Link>
                    </h4>
                    <p>
                      {"AI-powered web automation with Playwright for scraping and task automation."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/voice-agents" className="tech-link">
                        {"Voice Agents"}
                      </Link>
                    </h4>
                    <p>
                      {"Speech-enabled AI with Whisper and TTS for voice conversations."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/streaming" className="tech-link">
                        {"Streaming Responses"}
                      </Link>
                    </h4>
                    <p>
                      {"Real-time AI output with SSE, WebSockets, and async streaming."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/cost-optimization" className="tech-link">
                        {"Cost Optimization"}
                      </Link>
                    </h4>
                    <p>
                      {"Reduce LLM costs with caching, token optimization, and model selection."}
                    </p>
                  </div>
                  <div className="tech-item">
                    <h4>
                      <Link href="/agentic-ai/articles/agent-evaluation" className="tech-link">
                        {"Agent Evaluation"}
                      </Link>
                    </h4>
                    <p>
                      {"Test and benchmark AI agents with RAGAS, DeepEval, and LLM-as-judge."}
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
                {"A comprehensive journey into the world of AI agents"}
              </p>
            </div>
            <div className="curriculum-grid">
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"01"}
                  </span>
                  <h3>
                    <Link href="/agentic-ai/articles/llm-foundations" className="tech-link">
                      {"LLM Foundations"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"How LLMs Work (Transformers, Attention)"}
                  </li>
                  <li>
                    {"OpenAI, Anthropic, & Open Source Models"}
                  </li>
                  <li>
                    {"API Integration & Best Practices"}
                  </li>
                  <li>
                    {"Token Management & Cost Optimization"}
                  </li>
                  <li>
                    {"Model Selection for Different Tasks"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"02"}
                  </span>
                  <h3>
                    <Link href="/agentic-ai/articles/prompt-engineering" className="tech-link">
                      {"Prompt Engineering"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"Prompt Design Principles"}
                  </li>
                  <li>
                    {"Few-Shot & Chain-of-Thought Prompting"}
                  </li>
                  <li>
                    {"System Prompts & Personas"}
                  </li>
                  <li>
                    {"Output Formatting & Structured Generation"}
                  </li>
                  <li>
                    {"Prompt Templates & Management"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"03"}
                  </span>
                  <h3>
                    <Link href="/agentic-ai/articles/rag" className="tech-link">
                      {"RAG Systems"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"Vector Databases (Pinecone, Chroma, Weaviate)"}
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/embeddings" className="tech-link">
                      {"Embeddings"}
                    </Link>
                    {" & Semantic Search"}
                  </li>
                  <li>
                    {"Document Chunking Strategies"}
                  </li>
                  <li>
                    {"Retrieval Optimization"}
                  </li>
                  <li>
                    {"Hybrid Search, Reranking & "}
                    <Link href="/agentic-ai/articles/graphrag" className="tech-link">
                      {"GraphRAG"}
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
                    <Link href="/agentic-ai/articles/langchain" className="tech-link">
                      {"LangChain"}
                    </Link>
                    {" Deep Dive"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/agentic-ai/articles/chains-lcel" className="tech-link">
                      {"Chains & LCEL"}
                    </Link>
                    {" (LangChain Expression Language)"}
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/agent-memory" className="tech-link">
                      {"Memory"}
                    </Link>
                    {" & Conversation Management"}
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/function-calling" className="tech-link">
                      {"Tools"}
                    </Link>
                    {", "}
                    <Link href="/agentic-ai/articles/mcp" className="tech-link">
                      {"MCP"}
                    </Link>
                    {" & Function Calling"}
                  </li>
                  <li>
                    {"Agents & Agent Executors"}
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/langgraph" className="tech-link">
                      {"LangGraph"}
                    </Link>
                    {" for Complex Workflows"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"05"}
                  </span>
                  <h3>
                    {"Multi-Agent Systems"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/agentic-ai/articles/agent-architectures" className="tech-link">
                      {"Agent Architectures & Patterns"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/autogen" className="tech-link">
                      {"AutoGen"}
                    </Link>
                    {" for Agent Collaboration"}
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/crewai" className="tech-link">
                      {"CrewAI"}
                    </Link>
                    {" for Task-Oriented Agents"}
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/openai-assistants" className="tech-link">
                      {"OpenAI Assistants API"}
                    </Link>
                  </li>
                  <li>
                    {"Orchestrating Complex Workflows"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"06"}
                  </span>
                  <h3>
                    {"Production & Deployment"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"Building AI APIs (FastAPI)"}
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/streaming" className="tech-link">
                      {"Streaming Responses"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/langsmith" className="tech-link">
                      {"LangSmith"}
                    </Link>
                    {" for Observability"}
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/agent-safety" className="tech-link">
                      {"Guardrails & Safety"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/agentic-ai/articles/cost-optimization" className="tech-link">
                      {"Cost Management"}
                    </Link>
                    {" & "}
                    <Link href="/agentic-ai/articles/agent-evaluation" className="tech-link">
                      {"Evaluation"}
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
                {"Cutting-edge AI projects that showcase your skills"}
              </p>
            </div>
            <div className="projects-detailed-grid">
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"LangChain"}
                  </span>
                </div>
                <h3>
                  {"Intelligent Chatbot"}
                </h3>
                <p>
                  {"Build a context-aware chatbot with memory, personality, and the ability to use external tools."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Conversation memory and context tracking"}
                    </li>
                    <li>
                      {"Custom personality and system prompts"}
                    </li>
                    <li>
                      {"Tool integration (web search, calculator)"}
                    </li>
                    <li>
                      {"Streaming responses with Streamlit UI"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"LangChain"}
                  </span>
                  <span>
                    {"OpenAI"}
                  </span>
                  <span>
                    {"Streamlit"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      {" "}
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"RAG"}
                  </span>
                </div>
                <h3>
                  {"Document Q&A System"}
                </h3>
                <p>
                  {"Create a RAG application that answers questions about uploaded documents with citations."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"PDF and document ingestion pipeline"}
                    </li>
                    <li>
                      {"Semantic chunking strategies"}
                    </li>
                    <li>
                      {"Hybrid search with reranking"}
                    </li>
                    <li>
                      {"Answer with source citations"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"LlamaIndex"}
                  </span>
                  <span>
                    {"Pinecone"}
                  </span>
                  <span>
                    {"FastAPI"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"Multi-Agent"}
                  </span>
                </div>
                <h3>
                  {"Research Agent Team"}
                </h3>
                <p>
                  {"Build a multi-agent system where agents collaborate to research topics and write reports."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Specialized agent roles (researcher, writer, editor)"}
                    </li>
                    <li>
                      {"Web search and data gathering"}
                    </li>
                    <li>
                      {"Collaborative workflow orchestration"}
                    </li>
                    <li>
                      {"Output quality validation"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"CrewAI"}
                  </span>
                  <span>
                    {"AutoGen"}
                  </span>
                  <span>
                    {"Tavily"}
                  </span>
                </div>
              </div>
              <div className="project-detailed-card">
                <div className="project-header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6" />
                      {" "}
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <span className="project-badge">
                    {"LangGraph"}
                  </span>
                </div>
                <h3>
                  {"Code Assistant Agent"}
                </h3>
                <p>
                  {"Create an AI coding assistant that can understand codebases, write code, and debug issues."}
                </p>
                <div className="project-features">
                  <h4>
                    {"Key Features:"}
                  </h4>
                  <ul>
                    <li>
                      {"Codebase understanding with RAG"}
                    </li>
                    <li>
                      {"Code generation and refactoring"}
                    </li>
                    <li>
                      {"GitHub integration for PRs"}
                    </li>
                    <li>
                      {"Stateful conversation with LangGraph"}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span>
                    {"LangGraph"}
                  </span>
                  <span>
                    {"Claude"}
                  </span>
                  <span>
                    {"GitHub API"}
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
                {"Technical skills to build production-grade AI agents"}
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
                        {"LLM APIs & Integration"}
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
                        {"Prompt Engineering"}
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
                        {"LangChain & LangGraph"}
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
                        {"RAG Systems"}
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
                        {"Multi-Agent Frameworks"}
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
                        {"Vector Databases"}
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
                    {"AI System Design"}
                  </span>
                  <span className="skill-tag">
                    {"Prompt Optimization"}
                  </span>
                  <span className="skill-tag">
                    {"Agent Architecture"}
                  </span>
                  <span className="skill-tag">
                    {"Cost Management"}
                  </span>
                  <span className="skill-tag">
                    {"AI Safety"}
                  </span>
                  <span className="skill-tag">
                    {"Evaluation & Testing"}
                  </span>
                  <span className="skill-tag">
                    {"Production Deployment"}
                  </span>
                  <span className="skill-tag">
                    {"Observability"}
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
                        {"Developers who want to integrate AI capabilities into their applications."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        {" "}
                        <line x1="2" y1="12" x2="22" y2="12" />
                        {" "}
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Data Scientists"}
                      </h3>
                      <p>
                        {"ML practitioners looking to expand into the LLM and agent space."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        {" "}
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"AI Enthusiasts"}
                      </h3>
                      <p>
                        {"Anyone passionate about AI who wants to build practical applications."}
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
                      {"Python programming proficiency"}
                    </li>
                    <li>
                      {"Basic understanding of APIs"}
                    </li>
                    <li>
                      {"Familiarity with web development concepts"}
                    </li>
                    <li>
                      {"Curiosity about AI and LLMs"}
                    </li>
                  </ul>
                  <p className="prereq-note">
                    {"No prior AI/ML experience required - we focus on practical application, not theory!"}
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
                {"Everything you need to know about our Agentic AI program"}
              </p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>
                  {"Do I need ML/AI experience to join?"}
                </h3>
                <p>
                  {"No prior AI/ML experience required! We focus on practical application using APIs and frameworks, not deep learning theory. Python proficiency is sufficient."}
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
                  {"What makes this different from online courses?"}
                </h3>
                <p>
                  {"The AI agent landscape changes rapidly. Our 1:1 mentorship keeps you updated with the latest frameworks and best practices as they emerge."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Will I need to pay for API costs?"}
                </h3>
                <p>
                  {"We guide you on using free tiers and cost-effective strategies. Most projects can be completed with minimal API costs (often under $10-20 total)."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What kind of projects will I build?"}
                </h3>
                <p>
                  {"You'll build chatbots, document Q&A systems, research agents, and multi-agent systems - all deployable, production-ready applications."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Is this relevant for enterprise roles?"}
                </h3>
                <p>
                  {"Yes! Enterprise adoption of AI agents is accelerating. We cover production concerns like cost management, safety, and observability."}
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
                  {"Beyond sessions, you get doubt clearing support, project guidance, interview preparation, and access to our AI community."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Ready to Build the "}
                <span className="gradient-text">
                  {"Future of AI?"}
                </span>
              </h2>
              <p>
                {"Book a free consultation to discuss your goals and start your journey into Agentic AI."}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in the Agentic AI program."} />
    </>
  );
}
