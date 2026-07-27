import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  ChartIcon,
  ClockIcon,
  CodeIcon,
  DatabaseIcon,
  DotnetIcon,
  GlobeIcon,
  JavaIcon,
  MobileIcon,
  PythonIcon,
  RobotIcon,
} from "../Icons";

type ProgramCard = {
  slug: string;
  title: string;
  desc: string;
  skills: string[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  featured?: boolean;
  badge?: string;
};

const CARDS: ProgramCard[] = [
  {
    slug: "full-stack-javascript",
    title: "Full Stack JavaScript",
    desc: "Build modern web apps with the MERN/MEAN stack - React, Node.js, and MongoDB.",
    skills: ["React / Next.js", "Node.js / Express", "MongoDB", "TypeScript"],
    Icon: CodeIcon,
  },
  {
    slug: "full-stack-python",
    title: "Full Stack Python",
    desc: "Master Django and FastAPI for building robust, scalable web applications.",
    skills: ["Django / FastAPI", "PostgreSQL", "React Frontend", "Docker"],
    Icon: PythonIcon,
  },
  {
    slug: "full-stack-java",
    title: "Full Stack Java",
    desc: "Build enterprise applications with Spring Boot and microservices architecture.",
    skills: ["Spring Boot", "Microservices", "React / Angular", "Kubernetes"],
    Icon: JavaIcon,
  },
  {
    slug: "full-stack-dotnet",
    title: "Full Stack .NET",
    desc: "Master ASP.NET Core and C# for building powerful Microsoft ecosystem apps.",
    skills: ["ASP.NET Core", "Entity Framework", "Blazor / React", "Azure Cloud"],
    Icon: DotnetIcon,
  },
  {
    slug: "hybrid-mobile-app",
    title: "Hybrid Mobile Apps",
    desc: "Build cross-platform iOS & Android apps with React Native or Flutter.",
    skills: ["React Native", "Flutter", "Firebase", "App Store Deploy"],
    Icon: MobileIcon,
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    desc: "Learn to extract insights from data using modern analytics tools and visualization techniques.",
    skills: [
      "Python / SQL",
      "Power BI / Tableau",
      "Excel Advanced",
      "Statistical Analysis",
    ],
    Icon: ChartIcon,
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    desc: "Build scalable data pipelines and infrastructure to handle big data challenges.",
    skills: [
      "Apache Spark / Kafka",
      "Airflow / dbt",
      "AWS / GCP / Azure",
      "Data Warehousing",
    ],
    Icon: DatabaseIcon,
  },
  {
    slug: "data-science",
    title: "Data Science",
    desc: "Master machine learning, deep learning, and statistical modeling to solve complex problems.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP / Computer Vision",
      "MLOps",
    ],
    Icon: GlobeIcon,
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    desc: "Build autonomous AI agents that can reason, plan, and execute complex tasks independently.",
    skills: [
      "LLM & Prompt Engineering",
      "LangChain / AutoGen",
      "RAG Systems",
      "AI Agent Frameworks",
    ],
    Icon: RobotIcon,
    featured: true,
    badge: "Trending",
  },
];

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Programs</span>
          <h2 className="section-title">
            Mentorship <span className="gradient-text">Programs</span>
          </h2>
          <p className="section-subtitle">
            Choose your path to tech excellence with our specialized mentorship
            tracks
          </p>
        </div>
        <div className="programs-grid">
          {CARDS.map(({ slug, title, desc, skills, Icon, featured, badge }) => (
            <article
              className={`program-card${featured ? " featured" : ""}`}
              key={slug}
            >
              <Link
                href={`/${slug}`}
                className="program-link"
                aria-label={`${title} program details`}
              />
              {badge && <div className="program-badge">{badge}</div>}
              <div className="program-icon">
                <Icon />
              </div>
              <h3 className="program-title">{title}</h3>
              <p className="program-desc">{desc}</p>
              <ul className="program-skills">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div className="program-footer">
                <span className="program-duration">
                  <ClockIcon />
                  6 Months+
                </span>
                <Link
                  href={`/${slug}`}
                  className={`btn ${featured ? "btn-primary" : "btn-outline"} btn-sm`}
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
