import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Hybrid Mobile App Development Course Kochi | React Native & Flutter Training",
  description: "Master Hybrid Mobile App Development with React Native and Flutter at CODiiN Tech Mentors Lab. Build cross-platform apps for iOS and Android with personalized 1:1 mentorship in Kochi.",
  keywords: ["React Native course Kochi", "Flutter training Kerala", "hybrid mobile app development", "cross-platform app course", "mobile app mentorship Kochi", "iOS Android development Ernakulam"],
  alternates: { canonical: "/hybrid-mobile-app" },
  openGraph: {
    type: "website",
    url: "/hybrid-mobile-app",
    title: "Hybrid Mobile App Development (React Native/Flutter) | CODiiN Tech Mentors Lab",
    description: "Build cross-platform mobile apps for iOS and Android. Learn React Native, Flutter with expert mentorship.",
    images: ["/images/hybrid-mobile-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hybrid Mobile App Development Course Kochi | CODiiN",
    description: "Master React Native, Flutter with expert 1:1 mentorship. Build cross-platform mobile apps.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Hybrid Mobile App Development (React Native/Flutter) Mentorship",
  "description": "Comprehensive mentorship program covering React Native, Flutter, and cross-platform mobile app development for iOS and Android",
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
  "occupationalCategory": "Mobile App Developer",
  "timeRequired": "P6M",
  "teaches": [
    "React Native",
    "Flutter",
    "Dart",
    "JavaScript",
    "Mobile UI/UX",
    "App Store Deployment"
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
      "name": "Hybrid Mobile App Development",
      "item": "https://www.codiin.com/hybrid-mobile-app"
    }
  ]
} as const;

const SCHEMA_3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I learn React Native or Flutter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both are excellent choices! React Native is ideal if you know JavaScript. Flutter offers better performance and beautiful UI. We help you choose based on your background and career goals."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a Mac to develop iOS apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For final iOS deployment, yes. But you can develop and test on Android throughout. We guide you on affordable Mac options or cloud-based solutions when needed."
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
      "name": "Will my apps work on both iOS and Android?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! That's the power of hybrid development. Write once, deploy to both platforms. You'll learn platform-specific optimizations too."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need prior mobile development experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No prior mobile experience needed. Basic programming knowledge helps. For React Native, JavaScript familiarity is useful; for Flutter, we teach Dart from scratch."
      }
    },
    {
      "@type": "Question",
      "name": "Will I publish apps to the App Store and Play Store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! You'll learn the entire deployment process including app signing, store guidelines, and submission. Your capstone project will be a published app."
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
        "text": "Beyond sessions, you get doubt clearing support, project guidance, interview preparation, and access to our mobile developer community."
      }
    }
  ]
} as const;

export default function HybridMobileAppPage() {
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
                {"Mobile Development"}
              </span>
              <h1>
                {"Hybrid Mobile App "}
                <span className="gradient-text">
                  {"(React Native/Flutter)"}
                </span>
              </h1>
              <p className="program-hero-desc">
                {"Build beautiful, high-performance mobile apps for iOS and Android from a single codebase. Master the most popular cross-platform frameworks used by companies worldwide."}
              </p>
              <div className="program-hero-meta">
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    {" "}
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>
                    {"6 Months+"}
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
                src="/img/programs/hybrid-mobile-app.png"
                alt="Hybrid Mobile Apps — the tools and techniques covered in this program"
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
                {"Why Mobile?"}
              </span>
              <h2 className="section-title">
                {"Why Learn "}
                <span className="gradient-text">
                  {"Hybrid Mobile Development?"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Mobile is where your users are — and hybrid development is the smartest way to reach them all"}
              </p>
            </div>
            <div className="why-learn-grid">
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    {" "}
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <h3>
                  {"6.8 Billion Mobile Users"}
                </h3>
                <p>
                  {"Mobile devices dominate internet usage. Over 60% of web traffic comes from mobile. Apps generate $935 billion in revenue annually — and growing rapidly."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    {" "}
                    <path d="M2 17l10 5 10-5" />
                    {" "}
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>
                  {"One Codebase, Two Platforms"}
                </h3>
                <p>
                  {"Write your app once, deploy to both iOS and Android. Save 40-60% development time compared to native development. Companies love the cost efficiency."}
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
                  {"High Demand & Salaries"}
                </h3>
                <p>
                  {"React Native and Flutter developers are among the highest-paid in mobile development. Startups and enterprises alike are actively hiring skilled cross-platform developers."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    {" "}
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    {" "}
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    {" "}
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3>
                  {"Native-Like Performance"}
                </h3>
                <p>
                  {"Modern hybrid frameworks deliver 60fps animations and native UI components. Users can't tell the difference — but you save months of development time."}
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
                  {"Industry Adoption"}
                </h3>
                <p>
                  {"Facebook, Instagram, Airbnb, Uber Eats use React Native. Google Pay, Alibaba, BMW use Flutter. These aren't experiments — they're production apps serving millions."}
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
                  {"Startup & Freelance Ready"}
                </h3>
                <p>
                  {"Launch MVPs quickly. Iterate based on user feedback. Perfect for entrepreneurs and freelancers who want to build mobile products without hiring two separate teams."}
                </p>
              </div>
            </div>
            <div className="industry-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {"6.8B"}
                </span>
                <span className="stat-label">
                  {"Mobile users worldwide"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"$935B"}
                </span>
                <span className="stat-label">
                  {"App revenue in 2024"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"42%"}
                </span>
                <span className="stat-label">
                  {"Use React Native (top 500 apps)"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"60%"}
                </span>
                <span className="stat-label">
                  {"Faster development time"}
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
                  {"This comprehensive mentorship program covers everything you need to build professional mobile apps. You'll master cross-platform development and publish real apps to both app stores."}
                </p>
                <div className="learning-outcomes">
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build cross-platform apps with React Native or Flutter"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Design beautiful, responsive mobile UI/UX"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Integrate with REST APIs and backend services"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Implement authentication, push notifications, and more"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Deploy to App Store and Google Play Store"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Handle device features: camera, GPS, storage"}
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
                        {"React Native Track"}
                      </strong>
                      <p>
                        {"React Native, JavaScript/TypeScript, Expo, Redux"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Flutter Track"}
                      </strong>
                      <p>
                        {"Flutter, Dart, Provider/Riverpod, Material Design"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Backend"}
                      </strong>
                      <p>
                        {"Firebase, REST APIs, Node.js, GraphQL"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Deployment"}
                      </strong>
                      <p>
                        {"App Store, Play Store, CodePush, Fastlane"}
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
                {"A structured learning path from mobile basics to app store deployment"}
              </p>
            </div>
            <div className="curriculum-grid">
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"01"}
                  </span>
                  <h3>
                    <Link href="/hybrid-mobile-app/articles/react-native">
                      {"Mobile Development Fundamentals"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"Mobile app architecture patterns"}
                  </li>
                  <li>
                    {"iOS & Android platform differences"}
                  </li>
                  <li>
                    {"Development environment setup"}
                  </li>
                  <li>
                    {"Debugging & testing on devices"}
                  </li>
                  <li>
                    {"Version control with Git"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"02"}
                  </span>
                  <h3>
                    <Link href="/hybrid-mobile-app/articles/react-native">
                      {"React Native"}
                    </Link>
                    {" / "}
                    <Link href="/hybrid-mobile-app/articles/flutter">
                      {"Flutter"}
                    </Link>
                    {" Core"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"Component-based architecture"}
                  </li>
                  <li>
                    {"State management patterns"}
                  </li>
                  <li>
                    {"Navigation & routing"}
                  </li>
                  <li>
                    {"Styling & theming"}
                  </li>
                  <li>
                    {"Animations & gestures"}
                  </li>
                  <li>
                    {"Platform-specific code"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"03"}
                  </span>
                  <h3>
                    <Link href="/hybrid-mobile-app/articles/mobile-ui-ux">
                      {"UI/UX & Design Systems"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"Mobile UI design principles"}
                  </li>
                  <li>
                    {"Responsive layouts"}
                  </li>
                  <li>
                    {"Custom components library"}
                  </li>
                  <li>
                    {"Dark mode implementation"}
                  </li>
                  <li>
                    {"Accessibility (a11y)"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"04"}
                  </span>
                  <h3>
                    <Link href="/hybrid-mobile-app/articles/firebase">
                      {"Backend Integration"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"REST API consumption"}
                  </li>
                  <li>
                    {"GraphQL with Apollo/Relay"}
                  </li>
                  <li>
                    <Link href="/hybrid-mobile-app/articles/firebase">
                      {"Firebase (Auth, Firestore, Storage)"}
                    </Link>
                  </li>
                  <li>
                    {"Real-time data with WebSockets"}
                  </li>
                  <li>
                    {"Offline-first architecture"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"05"}
                  </span>
                  <h3>
                    <Link href="/hybrid-mobile-app/articles/firebase">
                      {"Device Features & Native Modules"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"Camera & image picker"}
                  </li>
                  <li>
                    {"Geolocation & maps"}
                  </li>
                  <li>
                    {"Push notifications (FCM/APNs)"}
                  </li>
                  <li>
                    {"Local storage & SQLite"}
                  </li>
                  <li>
                    {"Biometric authentication"}
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"06"}
                  </span>
                  <h3>
                    <Link href="/hybrid-mobile-app/articles/app-store-deployment">
                      {"Deployment & App Store"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    {"App signing & certificates"}
                  </li>
                  <li>
                    {"App Store guidelines"}
                  </li>
                  <li>
                    {"Play Store submission"}
                  </li>
                  <li>
                    {"CI/CD with Fastlane"}
                  </li>
                  <li>
                    {"Over-the-air updates"}
                  </li>
                  <li>
                    {"Analytics & crash reporting"}
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
                {"Unlock exciting roles in the mobile development industry"}
              </p>
            </div>
            <div className="career-grid">
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Mobile App Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"High Demand"}
                  </span>
                </div>
                <p>
                  {"Build cross-platform mobile apps for startups and enterprises. Work on consumer-facing products used by millions."}
                </p>
                <div className="career-skills">
                  <span>
                    {"React Native"}
                  </span>
                  <span>
                    {"Flutter"}
                  </span>
                  <span>
                    {"Firebase"}
                  </span>
                  <span>
                    {"APIs"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"React Native Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"High Demand"}
                  </span>
                </div>
                <p>
                  {"Specialize in React Native ecosystem. Leverage JavaScript skills to build performant mobile applications."}
                </p>
                <div className="career-skills">
                  <span>
                    {"React Native"}
                  </span>
                  <span>
                    {"TypeScript"}
                  </span>
                  <span>
                    {"Redux"}
                  </span>
                  <span>
                    {"Expo"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Flutter Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"Trending"}
                  </span>
                </div>
                <p>
                  {"Master Google's UI toolkit for beautiful, natively compiled apps. Growing demand across industries."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Flutter"}
                  </span>
                  <span>
                    {"Dart"}
                  </span>
                  <span>
                    {"Firebase"}
                  </span>
                  <span>
                    {"Material UI"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Full Stack Mobile Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"High Value"}
                  </span>
                </div>
                <p>
                  {"Build complete mobile solutions including backend. Highly valued in startups and product companies."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Mobile"}
                  </span>
                  <span>
                    {"Node.js"}
                  </span>
                  <span>
                    {"Firebase"}
                  </span>
                  <span>
                    {"AWS"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Mobile Tech Lead"}
                  </h3>
                  <span className="demand-badge">
                    {"Senior Role"}
                  </span>
                </div>
                <p>
                  {"Lead mobile development teams, architect solutions, and mentor junior developers."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Architecture"}
                  </span>
                  <span>
                    {"Team Lead"}
                  </span>
                  <span>
                    {"Code Review"}
                  </span>
                  <span>
                    {"Strategy"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Freelance App Developer"}
                  </h3>
                  <span className="demand-badge">
                    {"Flexible"}
                  </span>
                </div>
                <p>
                  {"Build apps for clients worldwide. High earning potential with project-based work."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Full Stack"}
                  </span>
                  <span>
                    {"Client Mgmt"}
                  </span>
                  <span>
                    {"Remote"}
                  </span>
                  <span>
                    {"MVP"}
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
                {"Industry-standard tools and frameworks for modern mobile development"}
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>
                  {"React Native Track"}
                </h3>
                <div className="tech-items">
                  <Link href="/hybrid-mobile-app/articles/react-native" className="tech-item">
                    <div className="tech-logo">
                      {"⚛️"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"React Native"}
                      </h4>
                      <p>
                        {"Facebook's framework for building native apps using React. Write in JavaScript, get native iOS and Android apps. Used by Instagram, Facebook, Walmart."}
                      </p>
                    </div>
                  </Link>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"📱"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"Expo"}
                      </h4>
                      <p>
                        {"The fastest way to build React Native apps. Simplified development workflow, over-the-air updates, and access to native APIs without native code."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"📘"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"TypeScript"}
                      </h4>
                      <p>
                        {"Type-safe JavaScript for large codebases. Catch errors early, improve code quality. Industry standard for professional mobile development."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🔄"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"Redux / Zustand"}
                      </h4>
                      <p>
                        {"State management solutions for complex apps. Handle app-wide state, async operations, and data persistence elegantly."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Flutter Track"}
                </h3>
                <div className="tech-items">
                  <Link href="/hybrid-mobile-app/articles/flutter" className="tech-item">
                    <div className="tech-logo">
                      {"💙"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Flutter"}
                      </h4>
                      <p>
                        {"Google's UI toolkit for beautiful, natively compiled apps. Single codebase for mobile, web, and desktop. Used by Google Pay, Alibaba, BMW."}
                      </p>
                    </div>
                  </Link>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🎯"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"Dart"}
                      </h4>
                      <p>
                        {"Modern, object-oriented language optimized for UI. Easy to learn, powerful features, excellent tooling. Perfect for app development."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🎨"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"Material Design 3"}
                      </h4>
                      <p>
                        {"Google's design system with beautiful, accessible components. Build stunning UIs that follow platform conventions."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"📦"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"Provider / Riverpod"}
                      </h4>
                      <p>
                        {"Recommended state management for Flutter. Clean, testable, and scalable architecture for apps of any size."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"Backend & Tools"}
                </h3>
                <div className="tech-items">
                  <Link href="/hybrid-mobile-app/articles/firebase" className="tech-item">
                    <div className="tech-logo">
                      {"🔥"}
                    </div>
                    {" "}
                    <div className="tech-info">
                      <h4>
                        {"Firebase"}
                      </h4>
                      <p>
                        {"Google's mobile platform for authentication, database, storage, and analytics. Perfect backend for mobile apps without server management."}
                      </p>
                    </div>
                  </Link>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🔔"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"Push Notifications"}
                      </h4>
                      <p>
                        {"FCM and APNs integration. Engage users with timely notifications. Essential for user retention and engagement."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🚀"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"Fastlane"}
                      </h4>
                      <p>
                        {"Automate app deployment to App Store and Play Store. Screenshots, code signing, and releases — all automated."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"📊"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        {"Analytics & Monitoring"}
                      </h4>
                      <p>
                        {"Firebase Analytics, Crashlytics, Sentry. Understand user behavior and fix crashes before users complain."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="companies-using">
              <h3>
                {"Companies Using These Technologies"}
              </h3>
              <p className="companies-intro">
                {"Industry leaders trust React Native and Flutter for their mobile apps:"}
              </p>
              <div className="company-logos">
                <span className="company-name">
                  {"Instagram"}
                </span>
                <span className="company-name">
                  {"Uber Eats"}
                </span>
                <span className="company-name">
                  {"Airbnb"}
                </span>
                <span className="company-name">
                  {"Google Pay"}
                </span>
                <span className="company-name">
                  {"Alibaba"}
                </span>
                <span className="company-name">
                  {"BMW"}
                </span>
                <span className="company-name">
                  {"Walmart"}
                </span>
                <span className="company-name">
                  {"Discord"}
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
                {"Real-world mobile apps that showcase your skills to employers"}
              </p>
            </div>
            <div className="projects-detailed">
              <div className="project-detailed-card">
                <div className="project-number">
                  {"01"}
                </div>
                <div className="project-content">
                  <h3>
                    {"Food Delivery App"}
                  </h3>
                  <p className="project-desc">
                    {"Build a complete food delivery application similar to Swiggy/Zomato. Learn to handle real-time orders, location services, and payment integration."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Restaurant listings with search, filters, and categories"}
                      </li>
                      <li>
                        {"Real-time order tracking with live map updates"}
                      </li>
                      <li>
                        {"Shopping cart with multiple restaurant handling"}
                      </li>
                      <li>
                        {"Payment integration (Razorpay/Stripe)"}
                      </li>
                      <li>
                        {"Push notifications for order updates"}
                      </li>
                      <li>
                        {"Rating and review system"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Geolocation, maps integration, real-time updates, payment gateways, complex state management, and building consumer-grade mobile UX."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"React Native"}
                    </span>
                    <span>
                      {"Firebase"}
                    </span>
                    <span>
                      {"Google Maps"}
                    </span>
                    <span>
                      {"Razorpay"}
                    </span>
                    <span>
                      {"Redux"}
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
                    {"Social Fitness App"}
                  </h3>
                  <p className="project-desc">
                    {"Create a fitness tracking app with social features. Track workouts, compete with friends, and share achievements — like Strava meets Instagram."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Workout tracking with GPS for running/cycling"}
                      </li>
                      <li>
                        {"Social feed with activity sharing"}
                      </li>
                      <li>
                        {"Challenges and leaderboards"}
                      </li>
                      <li>
                        {"Progress charts and statistics"}
                      </li>
                      <li>
                        {"Camera integration for progress photos"}
                      </li>
                      <li>
                        {"Apple Health / Google Fit integration"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Health APIs, background location tracking, social features, data visualization, camera handling, and building engaging fitness experiences."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"Flutter"}
                    </span>
                    <span>
                      {"Dart"}
                    </span>
                    <span>
                      {"Firebase"}
                    </span>
                    <span>
                      {"Health APIs"}
                    </span>
                    <span>
                      {"Charts"}
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
                    {"E-Commerce Mobile App"}
                  </h3>
                  <p className="project-desc">
                    {"Build a full-featured shopping app with a beautiful UI. Handle product catalogs, cart management, and seamless checkout experiences."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Product catalog with categories and search"}
                      </li>
                      <li>
                        {"Wishlist and favorites functionality"}
                      </li>
                      <li>
                        {"Shopping cart with persistent storage"}
                      </li>
                      <li>
                        {"Secure checkout with multiple payment options"}
                      </li>
                      <li>
                        {"Order history and tracking"}
                      </li>
                      <li>
                        {"Push notifications for offers and order updates"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"E-commerce patterns, secure payments, offline data persistence, product image optimization, and building conversion-focused mobile UX."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"React Native"}
                    </span>
                    <span>
                      {"TypeScript"}
                    </span>
                    <span>
                      {"Stripe"}
                    </span>
                    <span>
                      {"AsyncStorage"}
                    </span>
                    <span>
                      {"REST API"}
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
                    {"Real-Time Chat App"}
                  </h3>
                  <p className="project-desc">
                    {"Create a WhatsApp-like messaging application with real-time communication, media sharing, and group chats."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Real-time messaging with typing indicators"}
                      </li>
                      <li>
                        {"Group chats with admin controls"}
                      </li>
                      <li>
                        {"Image, video, and file sharing"}
                      </li>
                      <li>
                        {"Voice messages recording and playback"}
                      </li>
                      <li>
                        {"Message read receipts and online status"}
                      </li>
                      <li>
                        {"End-to-end encryption basics"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Real-time communication, WebSocket handling, media upload/download, audio recording, message queuing, and building responsive chat interfaces."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"Flutter"}
                    </span>
                    <span>
                      {"Firebase"}
                    </span>
                    <span>
                      {"Firestore"}
                    </span>
                    <span>
                      {"Cloud Storage"}
                    </span>
                    <span>
                      {"WebRTC"}
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
                      {"React Native / Flutter"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "95%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"JavaScript / Dart"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "90%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Mobile UI/UX Design"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "85%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Firebase & Backend Integration"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "90%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"App Store Deployment"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "85%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"State Management"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "85%" }} />
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
                    {"Mobile UX Principles"}
                  </span>
                  <span className="skill-tag">
                    {"Agile Development"}
                  </span>
                  <span className="skill-tag">
                    {"Debugging"}
                  </span>
                  <span className="skill-tag">
                    {"Performance Optimization"}
                  </span>
                  <span className="skill-tag">
                    {"App Store Guidelines"}
                  </span>
                  <span className="skill-tag">
                    {"Cross-Platform Testing"}
                  </span>
                  <span className="skill-tag">
                    {"Team Collaboration"}
                  </span>
                  <span className="skill-tag">
                    {"Technical Communication"}
                  </span>
                  <span className="skill-tag">
                    {"User-Centric Design"}
                  </span>
                  <span className="skill-tag">
                    {"Version Control"}
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
                <h3>
                  {"Should I learn React Native or Flutter?"}
                </h3>
                <p>
                  {"Both are excellent choices! React Native is ideal if you already know JavaScript — you'll leverage existing skills. Flutter offers better performance and more consistent UI across platforms. We help you choose based on your background and career goals."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Do I need a Mac to develop iOS apps?"}
                </h3>
                <p>
                  {"For final iOS deployment and testing on real devices, yes. But you can develop and test on Android emulators throughout most of the course. We guide you on affordable Mac options (Mac Mini, MacBook Air) or cloud-based solutions like MacStadium when you need iOS testing."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What is the program duration?"}
                </h3>
                <p>
                  {"The program is designed as a comprehensive 6-month journey. We recommend dedicating 15-20 hours per week for optimal learning. The pace can be adjusted based on your prior experience and availability."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Will my apps work on both iOS and Android?"}
                </h3>
                <p>
                  {"Yes! That's the entire point of hybrid development. You write your code once and deploy to both platforms. You'll also learn platform-specific optimizations to make your apps feel truly native on each platform."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Do I need prior mobile development experience?"}
                </h3>
                <p>
                  {"No prior mobile experience is needed. Basic programming knowledge helps. For React Native, JavaScript familiarity is useful; for Flutter, we teach Dart from scratch. We start from the fundamentals and build up systematically."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"Will I publish apps to the App Store and Play Store?"}
                </h3>
                <p>
                  {"Absolutely! You'll learn the entire deployment process including app signing, certificates, store guidelines, and submission. Your capstone project will be a published app that you can show to employers and clients."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"How is the mentorship conducted?"}
                </h3>
                <p>
                  {"Sessions are 1:1 with your mentor, either online or at our Kochi center. You get personalized attention, live coding sessions, code reviews, and career guidance tailored to your goals."}
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  {"What kind of support do I get?"}
                </h3>
                <p>
                  {"Beyond mentorship sessions, you get doubt-clearing support via chat, code review on all assignments, resume optimization, mock interviews, and lifetime access to our mobile developer community."}
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
                        {"Web Developers"}
                      </h3>
                      <p>
                        {"Expand into mobile development with React Native using your JavaScript skills."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        {" "}
                        <line x1="12" y1="18" x2="12.01" y2="18" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Aspiring Mobile Developers"}
                      </h3>
                      <p>
                        {"Start your mobile development journey with the most in-demand frameworks."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 20h9" />
                        {" "}
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Entrepreneurs & Freelancers"}
                      </h3>
                      <p>
                        {"Build your own app ideas or offer mobile development services to clients."}
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
                      {"Basic programming concepts (any language)"}
                    </li>
                    <li>
                      {"For React Native: JavaScript knowledge helpful"}
                    </li>
                    <li>
                      {"For Flutter: We teach Dart from scratch"}
                    </li>
                    <li>
                      {"Android phone or iOS device for testing"}
                    </li>
                    <li>
                      {"Laptop with 8GB+ RAM"}
                    </li>
                  </ul>
                  <p className="prereq-note">
                    {"No prior mobile development experience needed. We start from the fundamentals!"}
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
                {"Ready to Build "}
                <span className="gradient-text">
                  {"Mobile Apps?"}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in the Hybrid Mobile App Development program."} />
    </>
  );
}
