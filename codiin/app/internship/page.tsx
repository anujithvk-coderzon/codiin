import Footer from "@/components/Footer";
import InternshipForm from "@/components/InternshipForm";
import Navbar from "@/components/Navbar";
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
  title: "Internship Programs",
  description:
    "Apply for a mentor-led internship at CODiiN Tech Mentors Lab in Kochi. Work on real projects in Data Science, Agentic AI, Data Analytics, Data Engineering, Full Stack Development and Mobile Apps.",
  keywords: [
    "internship Kochi",
    "software internship Kerala",
    "data science internship",
    "full stack internship",
    "AI internship Kochi",
    "college internship program",
  ],
  alternates: { canonical: "/internship" },
  openGraph: {
    type: "website",
    url: "/internship",
    title: "Internship Programs | CODiiN Tech Mentors Lab",
    description:
      "Mentor-led internships on real projects, for students in any year of study.",
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

const HIGHLIGHTS = [
  "A real project with real users, not a practice exercise",
  "One-to-one mentorship throughout the project",
  "Your choice of duration, from one month upward",
  "A certificate, and finished work you can show in interviews",
];

/**
 * The tracks an intern can join. Descriptions are written for a student
 * choosing where to spend a few months, so each one says what you would
 * actually build — not what the subject is.
 */
const TRACKS = [
  {
    slug: "data-science",
    title: "Data Science",
    desc: "Train and evaluate models on a real dataset, then ship one behind an API.",
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    desc: "Build an autonomous agent that plans, calls tools and completes a task end to end.",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    desc: "Turn raw business data into dashboards that someone actually makes decisions from.",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    desc: "Build the pipeline that moves and cleans data on a schedule, and keep it running.",
  },
  {
    slug: "full-stack-python",
    title: "Full Stack Python",
    desc: "Ship a Django or FastAPI application, database and front end included.",
  },
  {
    slug: "full-stack-java",
    title: "Full Stack Java",
    desc: "Build a Spring Boot service with a proper data layer and a React front end.",
  },
  {
    slug: "full-stack-javascript",
    title: "Full Stack JavaScript",
    desc: "Take a MERN application from first commit to deployed and working.",
  },
  {
    slug: "full-stack-dotnet",
    title: "Full Stack .NET",
    desc: "Build an ASP.NET Core API and the interface that consumes it.",
  },
  {
    slug: "hybrid-mobile-app",
    title: "Hybrid Mobile Apps",
    desc: "Build one React Native or Flutter app that runs on both Android and iOS.",
  },
];

const STEPS = [
  {
    title: "Apply",
    desc: "Send us your field, the duration you want and where you study.",
  },
  {
    title: "Talk it through",
    desc: "A short call to agree what you will work on and what you want out of it.",
  },
  {
    title: "Get matched",
    desc: "You are placed on a track and a project that suit your level and timeline.",
  },
  {
    title: "Build and ship",
    desc: "You build it through to something finished, reviewed, and ready to show.",
  },
];

export default function InternshipPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        {/* Reuses the course-page hero rather than the plain legal-page one:
            this is a landing page that has to convert, so it needs the dark
            band, the badge and somewhere to put the two calls to action. */}
        <section className="program-hero">
          <div className="program-hero-bg" />
          <div className="container">
            <div className="program-hero-content">
              <span className="program-hero-badge">Internship Program</span>
              <h1>
                Internship that helps you gain{" "}
                <span className="gradient-text">industry experience</span>
              </h1>
              <p className="program-hero-desc">
                Work on a real project that people actually use. You will write
                code that becomes part of it, learn how professional teams build
                software, and finish with something solid to show an employer.
              </p>
              <div className="program-hero-meta">
                <div className="meta-item">
                  <ClockIcon />
                  <span>1 to 6+ months</span>
                </div>
                <div className="meta-item">
                  <MentorshipIcon />
                  <span>1:1 Mentorship</span>
                </div>
                <div className="meta-item">
                  <ProjectsIcon />
                  <span>Project-Based</span>
                </div>
              </div>
              <div className="program-hero-cta">
                <Link href="#apply" className="btn btn-primary btn-lg">
                  Apply Now
                </Link>
                <Link href="#tracks" className="btn btn-outline btn-lg">
                  See the Tracks
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="internship-highlights-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">What you build</span>
              <h2 className="section-title">
                Built around <span className="gradient-text">real work</span>
              </h2>
              <p className="section-subtitle">
                Most internships hand out a tutorial and a certificate. This
                one runs the way our mentorship programs do: a real project, a
                mentor who reviews your work, and a deadline that matters.
              </p>
            </div>

            <ul className="internship-highlights">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="why-us" id="tracks">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Tracks</span>
              <h2 className="section-title">
                Pick the area you want to{" "}
                <span className="gradient-text">work in</span>
              </h2>
              <p className="section-subtitle">
                Every track below runs as a full mentorship program too. An
                internship is the shorter, project-first route into the same
                material — follow any card to read the full syllabus.
              </p>
            </div>

            <div className="programs-grid">
              {TRACKS.map((track) => (
                <Link
                  key={track.slug}
                  href={`/${track.slug}`}
                  className="program-card internship-track-card"
                >
                  <h3>{track.title}</h3>
                  <p>{track.desc}</p>
                  <span className="internship-track-link">
                    View full program &rarr;
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
                From application to{" "}
                <span className="gradient-text">finished project</span>
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

        <section className="register" id="apply">
          <div className="container">
            <div className="register-wrapper">
              <div className="register-content">
                <span className="section-badge">Apply now</span>
                <h2 className="section-title">
                  Tell us what you want{" "}
                  <span className="gradient-text">to work on</span>
                </h2>
                <p>
                  Send us your field and your dates, and we will come back to
                  you on availability. Open to students in any year of study and
                  to recent graduates.
                </p>
                <ul className="register-benefits">
                  <li>
                    <CheckIcon />
                    No fee to apply
                  </li>
                  <li>
                    <CheckIcon />
                    Start dates through the year
                  </li>
                  <li>
                    <CheckIcon />
                    Remote or in person at our Kochi lab
                  </li>
                </ul>
              </div>
              <div className="register-form-container">
                <InternshipForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat message="Hi CODiiN! I'd like to know more about your internship programs." />
    </>
  );
}
