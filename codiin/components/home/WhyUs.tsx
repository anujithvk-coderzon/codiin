const TRADITIONAL = [
  "One-size-fits-all curriculum",
  "Large batch sizes",
  "Theoretical focus",
  "Limited project work",
  "No personalized attention",
  "Generic assignments",
];

const CODIIN = [
  "Personalized learning path",
  "Small batch / 1:1 sessions",
  "Project-first approach",
  "Industry-grade projects",
  "Dedicated mentor support",
  "Customized assignments",
];

const BENEFITS = [
  {
    number: "01",
    title: "Assignment Support",
    text: "Stuck on an assignment? Our mentors guide you through problem-solving, not just answers.",
  },
  {
    number: "02",
    title: "Project Guidance",
    text: "Build real-world projects with expert code reviews and architecture guidance.",
  },
  {
    number: "03",
    title: "Career Mentoring",
    text: "Resume optimization, mock interviews, and industry connections.",
  },
  {
    number: "04",
    title: "Flexible Schedule",
    text: "Learn at your pace with flexible timing that fits your schedule.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Why CODiiN</span>
          <h2 className="section-title">
            The <span className="gradient-text">Mentorship Difference</span>
          </h2>
        </div>

        <div className="comparison-grid">
          <div className="comparison-card traditional">
            <h3>Traditional Training</h3>
            <ul>
              {TRADITIONAL.map((item) => (
                <li key={item}>
                  <span className="icon-x" aria-hidden="true">
                    ✗
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="vs-badge" aria-hidden="true">
            VS
          </div>

          <div className="comparison-card codiin">
            <h3>CODiiN Mentorship</h3>
            <ul>
              {CODIIN.map((item) => (
                <li key={item}>
                  <span className="icon-check" aria-hidden="true">
                    ✓
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="benefits-grid">
          {BENEFITS.map(({ number, title, text }) => (
            <div className="benefit-card" key={number}>
              <div className="benefit-number" aria-hidden="true">
                {number}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
