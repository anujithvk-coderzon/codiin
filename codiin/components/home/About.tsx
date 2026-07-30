import Image from "next/image";
import { CareerIcon, MentorshipIcon, ProjectsIcon } from "../Icons";

const FEATURES = [
  {
    Icon: MentorshipIcon,
    title: "1:1 Mentorship",
    text: "Personalized guidance from industry experts",
  },
  {
    Icon: ProjectsIcon,
    title: "Real Projects",
    text: "Build portfolio-worthy applications",
  },
  {
    Icon: CareerIcon,
    title: "Career Support",
    text: "Resume building & interview preparation",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Us</span>
          <h2 className="section-title">
            We Don&apos;t Just Teach,{" "}
            <span className="gradient-text">We Mentor</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <p className="about-lead">
              At CODiiN Tech Mentors Lab, we believe in the power of
              personalized mentorship. Based in Kochi, Kerala, we&apos;re
              transforming how students learn technology.
            </p>
            <p>
              Unlike traditional training institutes, we focus on{" "}
              <strong>hands-on project experience</strong> and{" "}
              <strong>one-on-one guidance</strong>. Our mentors are industry
              professionals who help you build real-world applications, not just
              theoretical knowledge.
            </p>
            <p>
              Every student gets dedicated support for assignments, projects,
              and career preparation. We don&apos;t just prepare you for
              jobs—we prepare you to excel in them.
            </p>
            <div className="about-features">
              {FEATURES.map(({ Icon, title, text }) => (
                <div className="feature" key={title}>
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image">
            <Image
              src="/img/about.png"
              alt="The disciplines CODiiN mentors: Gen-AI, Agentic AI, Full Stack, Data Science, Data Analytics, Big Data, Cloud, Mobile App Development and Cyber Security"
              className="about-img"
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
