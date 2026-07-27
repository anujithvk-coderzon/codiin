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
            <div className="image-card">
              <div className="mentor-illustration">
                <div className="mentor-circle">
                  <svg viewBox="0 0 200 200" className="mentor-svg" aria-hidden="true">
                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" style={{ stopColor: "#6366f1" }} />
                        <stop offset="100%" style={{ stopColor: "#8b5cf6" }} />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="url(#gradient1)"
                      opacity="0.1"
                    />
                    <circle cx="100" cy="70" r="30" fill="url(#gradient1)" />
                    <path
                      d="M50 150 Q100 120 150 150"
                      stroke="url(#gradient1)"
                      strokeWidth="40"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="floating-badge badge-1">Full Stack</div>
                <div className="floating-badge badge-2">AI/ML</div>
                <div className="floating-badge badge-3">Data Science</div>
                <div className="floating-badge badge-4">Mobile Apps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
