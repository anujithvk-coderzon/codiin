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
    title: "Sessions at your pace",
    desc: "Nobody moves on because the rest of the batch did. You go as fast or as slowly as the topic needs.",
  },
  {
    title: "A timetable that fits yours",
    desc: "Evenings, weekends, or early mornings before work. Agreed with your mentor, not fixed by a batch schedule.",
  },
  {
    title: "Your questions, answered properly",
    desc: "No waiting your turn and no question too basic. The whole session is yours.",
  },
  {
    title: "Built around your goal",
    desc: "A job switch, a college project, a specific stack at work — the plan is written for that, not for a syllabus.",
  },
];

const STEPS = [
  {
    title: "Tell us what you need",
    desc: "Fill in the form below with your background and what you want to learn.",
  },
  {
    title: "A short call",
    desc: "We talk through where you are now, what you're aiming at, and how much time you have.",
  },
  {
    title: "Meet your mentor",
    desc: "We match you with someone who works in that field, and you agree a schedule between you.",
  },
  {
    title: "Start learning",
    desc: "One-to-one sessions, with work between them and a mentor who knows where you left off.",
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
                Some people learn best in a room with twenty others. Some
                don&apos;t. If you want undivided attention from someone who
                does this work for a living, this is that — personal sessions,
                built around your goal and your timetable.
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
                The whole session is{" "}
                <span className="gradient-text">yours</span>
              </h2>
              <p className="section-subtitle">
                A batch has to move at the speed of the group. A mentor moves at
                the speed of you — which usually means faster on what you
                already know, and slower where it actually matters.
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
                Every program we run as a batch can also be taken personally.
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
                  <span className="gradient-text">to learn</span>
                </h2>
                <p>
                  Fill this in and a coordinator will call you to talk it
                  through — what you already know, what you&apos;re aiming at,
                  and how much time you can give it. There is no charge for that
                  conversation.
                </p>
                <ul className="register-benefits">
                  <li>
                    <CheckIcon />
                    Free introductory call
                  </li>
                  <li>
                    <CheckIcon />
                    Mentors who work in the field
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
