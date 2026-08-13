import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OneOnOneForm from "@/components/OneOnOneForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  CheckIcon,
  ClockIcon,
  MentorshipIcon,
  ProjectsIcon,
} from "@/components/Icons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1:1 Mentoring",
  description:
    "Learn one-to-one with a working professional. Personal mentoring in Data Science, Agentic AI, Full Stack Development and more — sessions built around your pace, your goals and your timetable.",
  keywords: [
    "one on one tutoring",
    "personal programming mentor",
    "1:1 coding classes Kochi",
    "private software training Kerala",
    "individual mentorship programming",
  ],
  alternates: { canonical: "/one-on-one" },
  openGraph: {
    type: "website",
    url: "/one-on-one",
    title: "1:1 Mentoring | CODiiN Tech Mentors Lab",
    description:
      "Personal, one-to-one mentoring with a working professional, at your pace.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

/* Written for someone choosing what to spend their evenings on, so each line
   says what you would come out able to do — not what the subject is. */
const SUBJECTS = [
  {
    slug: "data-science",
    title: "Data Science",
    desc: "Statistics, machine learning and getting a model into production.",
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    desc: "LLMs, tool use, and agents that plan and finish a task on their own.",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    desc: "SQL, Power BI and Tableau, up to dashboards people decide from.",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    desc: "Pipelines, Spark and warehouses that keep running without you.",
  },
  {
    slug: "full-stack-python",
    title: "Full Stack Python",
    desc: "Django or FastAPI, a database, and a front end on top of it.",
  },
  {
    slug: "full-stack-java",
    title: "Full Stack Java",
    desc: "Spring Boot, a proper data layer, and React in front of it.",
  },
  {
    slug: "full-stack-javascript",
    title: "Full Stack JavaScript",
    desc: "The MERN stack, from first commit through to deployed.",
  },
  {
    slug: "full-stack-dotnet",
    title: "Full Stack .NET",
    desc: "C#, ASP.NET Core and the interface that consumes it.",
  },
  {
    slug: "hybrid-mobile-app",
    title: "Hybrid Mobile Apps",
    desc: "React Native or Flutter — one codebase, Android and iOS.",
  },
];

const BENEFITS = [
  {
    title: "Set the pace yourself",
    desc: "Skip what you already know and spend the time on what you do not. No fixed syllabus setting the speed.",
  },
  {
    title: "A schedule around your work",
    desc: "Evenings, weekends, early mornings. Agreed directly between you and your mentor.",
  },
  {
    title: "Ask anything, for the full hour",
    desc: "The full session is yours, so you can ask as much as you want and go back over anything.",
  },
  {
    title: "A plan written for your goal",
    desc: "A new job, a promotion, an idea you want to build. The plan is written to get you there.",
  },
];

const STEPS = [
  {
    title: "Tell us what you need",
    desc: "Tell us your background and what you want to be able to do.",
  },
  {
    title: "A short call",
    desc: "A short call to agree the goal, the starting point and the time you can commit.",
  },
  {
    title: "Meet your mentor",
    desc: "You are matched with a mentor for that field, and the two of you set the schedule.",
  },
  {
    title: "Start learning",
    desc: "Focused sessions, practice in between, and a mentor who knows exactly where you are.",
  },
];

export default function OneOnOnePage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        {/* Reuses the course-page hero rather than the plain legal-page one:
            this is a landing page that has to convert, so it needs the dark
            band, the badge and somewhere to put the calls to action. */}
        <section className="program-hero">
          <div className="program-hero-bg" />
          <div className="container">
            <div className="program-hero-content">
              <span className="program-hero-badge">1:1 Mentoring</span>
              <h1>
                One mentor, <span className="gradient-text">one student</span>,
                your pace
              </h1>
              <p className="program-hero-desc">
                One student, one mentor, one plan. You decide what you want to
                achieve, we build the sessions around it, and you move at
                whatever speed suits you — so you get there faster.
              </p>
              <div className="program-hero-meta">
                <div className="meta-item">
                  <MentorshipIcon />
                  <span>1:1 Sessions</span>
                </div>
                <div className="meta-item">
                  <ClockIcon />
                  <span>Flexible Timings</span>
                </div>
                <div className="meta-item">
                  <ProjectsIcon />
                  <span>Goal-Based Plan</span>
                </div>
              </div>
              <div className="program-hero-cta">
                <Link href="#request" className="btn btn-primary btn-lg">
                  Request a Mentor
                </Link>
                <Link href="#courses" className="btn btn-outline btn-lg">
                  See the Subjects
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="internship-highlights-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Why one-to-one</span>
              <h2 className="section-title">
                Learn it <span className="gradient-text">faster</span>
              </h2>
              <p className="section-subtitle">
                In a batch, everyone moves at the same speed. One-to-one, you
                move quickly through what you already know and spend the real
                time on the parts that take practice.
              </p>
            </div>

            <div className="oneonone-benefits">
              {BENEFITS.map((item) => (
                <div key={item.title} className="oneonone-benefit">
                  <CheckIcon />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-us" id="courses">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Subjects</span>
              <h2 className="section-title">
                What you can learn{" "}
                <span className="gradient-text">one-to-one</span>
              </h2>
              <p className="section-subtitle">
                Every program we run as a batch is also available one-to-one.
                Follow any card for the full syllabus — the material is the
                same, the delivery is not.
              </p>
            </div>

            <div className="programs-grid">
              {SUBJECTS.map((subject) => (
                <Link
                  key={subject.slug}
                  href={`/${subject.slug}`}
                  className="program-card internship-track-card"
                >
                  <h3>{subject.title}</h3>
                  <p>{subject.desc}</p>
                  <span className="internship-track-link">
                    View full syllabus &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="internship-steps-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">How it works</span>
              <h2 className="section-title">
                From request to{" "}
                <span className="gradient-text">first session</span>
              </h2>
            </div>

            <ol className="internship-steps">
              {STEPS.map((step, i) => (
                <li key={step.title}>
                  {/* Numbered because these genuinely happen in order. */}
                  <span className="internship-step-number">{i + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="register" id="request">
          <div className="container">
            <div className="register-wrapper">
              <div className="register-content">
                <span className="section-badge">Request a mentor</span>
                <h2 className="section-title">
                  Tell us what you want{" "}
                  <span className="gradient-text">to build</span>
                </h2>
                <p>
                  Fill this in and a coordinator will call to map out the plan —
                  where you are now, what you want to be able to do, and the
                  fastest route between the two. No charge for that
                  conversation.
                </p>
                <ul className="register-benefits">
                  <li>
                    <CheckIcon />
                    Free introductory call
                  </li>
                  <li>
                    <CheckIcon />
                    A mentor matched to your field
                  </li>
                  <li>
                    <CheckIcon />
                    Online, or in person in Kochi
                  </li>
                </ul>
              </div>
              <div className="register-form-container">
                <OneOnOneForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat message="Hi CODiiN! I'd like to know more about one-to-one mentoring." />
    </>
  );
}
