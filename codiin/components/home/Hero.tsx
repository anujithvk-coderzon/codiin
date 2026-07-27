import Link from "next/link";
import { CareerIcon, MentorshipIcon, ProjectsIcon } from "../Icons";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">Mentorship-Driven Learning</span>
          <h1 className="hero-title">
            Master <span className="gradient-text">Emerging Tech</span> with
            Expert Mentors
          </h1>
          <p className="hero-subtitle">
            Transform your career with hands-on mentorship in Full Stack
            Development, Data Science, AI, and more. Real projects. Real
            guidance. Real results.
          </p>
          <div className="hero-cta">
            <Link href="#programs" className="btn btn-primary btn-lg">
              Explore Programs
            </Link>
            <Link href="#contact" className="btn btn-outline btn-lg">
              Talk to Us
            </Link>
          </div>
          <div className="hero-highlights">
            <div className="highlight">
              <MentorshipIcon />
              <span>1:1 Mentorship</span>
            </div>
            <div className="highlight">
              <ProjectsIcon />
              <span>Real Projects</span>
            </div>
            <div className="highlight">
              <CareerIcon />
              <span>Career Support</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="code-body">
              <pre>
                <code>
                  <span className="keyword">const</span>
                  {" "}
                  <span className="variable">yourFuture</span>
                  {" = {\n  "}
                  <span className="property">skills</span>
                  {": ["}
                  <span className="string">&quot;Full Stack&quot;</span>
                  {", "}
                  <span className="string">&quot;AI&quot;</span>
                  {", "}
                  <span className="string">&quot;Data&quot;</span>
                  {"],\n  "}
                  <span className="property">mentor</span>
                  {": "}
                  <span className="string">&quot;CODiiN Expert&quot;</span>
                  {",\n  "}
                  <span className="property">success</span>
                  {": "}
                  <span className="boolean">true</span>
                  {"\n};\n\n"}
                  <span className="keyword">await</span>
                  {" "}
                  <span className="function">transform</span>
                  {"(yourFuture);"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
