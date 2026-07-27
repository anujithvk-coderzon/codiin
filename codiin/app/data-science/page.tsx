import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Data Science Course Kochi | Machine Learning Training",
  description: "Master Data Science with CODiiN Tech Mentors Lab. Learn Machine Learning, Deep Learning, NLP, and MLOps with personalized 1:1 mentorship in Kochi, Kerala.",
  keywords: ["data science course Kochi", "machine learning training Kerala", "deep learning course", "AI ML training Kochi", "Python data science mentorship", "ML bootcamp Ernakulam"],
  alternates: { canonical: "/data-science" },
  openGraph: {
    type: "website",
    url: "/data-science",
    title: "Data Science Mentorship | CODiiN Tech Mentors Lab",
    description: "Master Machine Learning, Deep Learning, and AI with expert mentorship and real-world projects.",
    images: ["/images/data-science-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Science Course Kochi | ML & Deep Learning | CODiiN",
    description: "Master Machine Learning, Deep Learning, NLP with expert 1:1 mentorship.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Data Science Mentorship",
  "description": "Comprehensive mentorship program covering machine learning, deep learning, NLP, and MLOps",
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
  "educationalLevel": "Intermediate to Advanced",
  "occupationalCategory": "Data Scientist",
  "timeRequired": "P6M",
  "teaches": [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "MLOps",
    "Statistics"
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
      "name": "Data Science",
      "item": "https://www.codiin.com/data-science"
    }
  ]
} as const;

const SCHEMA_3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a PhD to become a data scientist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No! Most industry data science positions value practical skills and project experience. This program focuses on applied skills."
      }
    },
    {
      "@type": "Question",
      "name": "How much math do I need to know?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should be comfortable with high school math. We teach the linear algebra, calculus, and statistics you need as we go."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need Python experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic Python programming is a prerequisite. You should be comfortable with variables, loops, functions, and basic data structures."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Data Science and Data Analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data Analytics focuses on descriptive analysis. Data Science goes into predictive modeling, machine learning, and building AI systems."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program is designed as a comprehensive 6-month journey. We recommend dedicating 15-20 hours per week."
      }
    },
    {
      "@type": "Question",
      "name": "Will I learn about LLMs and ChatGPT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We cover transformer architectures, fine-tuning language models, and working with modern NLP."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover MLOps and deployment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. You'll learn Docker, FastAPI, MLflow, and cloud deployment — skills that differentiate you in interviews."
      }
    },
    {
      "@type": "Question",
      "name": "Will there be Kaggle competitions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We encourage Kaggle participation. You'll work on at least one competition during the program."
      }
    }
  ]
} as const;

export default function DataSciencePage() {
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
                {"Mentorship Program"}
              </span>
              <h1>
                {"Data Science"}
              </h1>
              <p className="program-hero-desc">
                {"Dive deep into machine learning, deep learning, and AI. Learn to build predictive models that solve real business problems."}
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
          </div>
        </section>
        <section className="why-learn">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">
                {"Why Data Science?"}
              </span>
              <h2 className="section-title">
                {"Why Learn "}
                <span className="gradient-text">
                  {"Data Science?"}
                </span>
              </h2>
              <p className="section-subtitle">
                {"Data Science is transforming every industry — and skilled professionals are in unprecedented demand"}
              </p>
            </div>
            <div className="why-learn-grid">
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
                  {"Explosive Growth"}
                </h3>
                <p>
                  {"Data Science job postings have grown 650% since 2012. The U.S. Bureau of Labor Statistics projects 36% growth through 2031 — much faster than average for all occupations."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    {" "}
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>
                  {"Impact Every Industry"}
                </h3>
                <p>
                  {"From healthcare to finance, retail to manufacturing — every industry needs data scientists. Your skills will be valuable no matter which domain interests you."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    {" "}
                    <polyline points="2 17 12 22 22 17" />
                    {" "}
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <h3>
                  {"Solve Real Problems"}
                </h3>
                <p>
                  {"Predict disease outbreaks, optimize supply chains, detect fraud, personalize recommendations. Data scientists tackle problems that matter and see tangible impact."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <h3>
                  {"AI/ML Revolution"}
                </h3>
                <p>
                  {"With ChatGPT and generative AI transforming tech, understanding machine learning fundamentals is more valuable than ever. Data scientists are at the heart of the AI revolution."}
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
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
                  {"Talent Shortage"}
                </h3>
                <p>
                  {"There's a significant shortage of qualified data scientists globally. Companies struggle to find skilled professionals, making it an excellent time to enter the field."}
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
                  {"Creative & Technical"}
                </h3>
                <p>
                  {"Data science uniquely combines creativity with technical rigor. You'll explore data, find patterns, tell stories with visualizations, and build intelligent systems."}
                </p>
              </div>
            </div>
            <div className="industry-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {"36%"}
                </span>
                <span className="stat-label">
                  {"projected job growth"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"650%"}
                </span>
                <span className="stat-label">
                  {"growth since 2012"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"11.5M"}
                </span>
                <span className="stat-label">
                  {"new jobs by 2026"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {"#1"}
                </span>
                <span className="stat-label">
                  {"best job in America (Glassdoor)"}
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
                  {"This comprehensive program covers the full spectrum of data science, from statistical foundations to advanced deep learning. You'll work on real datasets and build models that demonstrate your capabilities to employers."}
                </p>
                <div className="learning-outcomes">
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Master statistical analysis and hypothesis testing"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Build and tune machine learning models"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Develop deep learning solutions with TensorFlow/PyTorch"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Implement NLP and computer vision applications"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Deploy models to production with MLOps practices"}
                    </span>
                  </div>
                  <div className="outcome">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {"Communicate findings effectively to stakeholders"}
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
                        {"End-to-End Projects"}
                      </strong>
                      <p>
                        {"From data collection to model deployment"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Kaggle Competitions"}
                      </strong>
                      <p>
                        {"Participate in real ML competitions"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Research Papers"}
                      </strong>
                      <p>
                        {"Learn to read and implement papers"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {"Interview Prep"}
                      </strong>
                      <p>
                        {"ML system design and coding practice"}
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
                {"A rigorous path to becoming a skilled data scientist"}
              </p>
            </div>
            <div className="curriculum-grid">
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"01"}
                  </span>
                  <h3>
                    {"Python & Mathematics"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-science/articles/python-data-science" className="tech-link">
                      {"Python for Data Science"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/numpy-pandas" className="tech-link">
                      {"NumPy & Pandas Mastery"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/data-preprocessing" className="tech-link">
                      {"Data Preprocessing"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/eda" className="tech-link">
                      {"Exploratory Data Analysis (EDA)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/linear-algebra" className="tech-link">
                      {"Linear Algebra Essentials"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/statistics" className="tech-link">
                      {"Probability & Statistics"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/ab-testing" className="tech-link">
                      {"A/B Testing"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"02"}
                  </span>
                  <h3>
                    <Link href="/data-science/articles/machine-learning" className="tech-link">
                      {"Machine Learning Fundamentals"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-science/articles/supervised-learning" className="tech-link">
                      {"Supervised Learning (Regression, Classification)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/unsupervised-learning" className="tech-link">
                      {"Unsupervised Learning (Clustering, Dimensionality Reduction)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/feature-engineering" className="tech-link">
                      {"Feature Engineering"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/model-evaluation" className="tech-link">
                      {"Model Evaluation & Validation"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/hyperparameter-tuning" className="tech-link">
                      {"Hyperparameter Tuning"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"03"}
                  </span>
                  <h3>
                    {"Advanced Machine Learning"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-science/articles/xgboost" className="tech-link">
                      {"Ensemble Methods (Random Forest, XGBoost)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/time-series" className="tech-link">
                      {"Time Series Analysis"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/recommendation-systems" className="tech-link">
                      {"Recommendation Systems"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/anomaly-detection" className="tech-link">
                      {"Anomaly Detection"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/imbalanced-data" className="tech-link">
                      {"Handling Imbalanced Data"}
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
                    <Link href="/data-science/articles/deep-learning" className="tech-link">
                      {"Deep Learning"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-science/articles/neural-networks" className="tech-link">
                      {"Neural Network Fundamentals"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/tensorflow-keras" className="tech-link">
                      {"TensorFlow & Keras"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/pytorch" className="tech-link">
                      {"PyTorch"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/computer-vision" className="tech-link">
                      {"CNNs for Computer Vision"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/rnn-lstm" className="tech-link">
                      {"RNNs & LSTMs for Sequences"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/reinforcement-learning" className="tech-link">
                      {"Reinforcement Learning"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"05"}
                  </span>
                  <h3>
                    {"NLP & Computer Vision"}
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-science/articles/text-embeddings" className="tech-link">
                      {"Text Preprocessing & Embeddings"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/spacy-nltk" className="tech-link">
                      {"spaCy & NLTK"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/nlp-transformers" className="tech-link">
                      {"Transformers & BERT"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/object-detection" className="tech-link">
                      {"Object Detection"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/gans" className="tech-link">
                      {"Generative Adversarial Networks (GANs)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/shap-lime" className="tech-link">
                      {"Model Interpretability (SHAP & LIME)"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="curriculum-module">
                <div className="module-header">
                  <span className="module-number">
                    {"06"}
                  </span>
                  <h3>
                    <Link href="/data-science/articles/mlops" className="tech-link">
                      {"MLOps & Deployment"}
                    </Link>
                  </h3>
                </div>
                <ul className="module-topics">
                  <li>
                    <Link href="/data-science/articles/mlflow-dvc" className="tech-link">
                      {"Model Versioning (MLflow, DVC)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/model-serving" className="tech-link">
                      {"Model Serving (FastAPI, Flask)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/docker-ml" className="tech-link">
                      {"Docker for ML"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/aws-sagemaker" className="tech-link">
                      {"Cloud Deployment (AWS SageMaker)"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-science/articles/model-monitoring" className="tech-link">
                      {"Monitoring & Model Drift"}
                    </Link>
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
                {"Data Science opens doors to diverse, impactful roles"}
              </p>
            </div>
            <div className="career-grid">
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Data Scientist"}
                  </h3>
                  <span className="demand-badge">
                    {"High Demand"}
                  </span>
                </div>
                <p>
                  {"Build predictive models, analyze complex datasets, and drive data-informed decisions across the organization."}
                </p>
                <div className="career-skills">
                  <span>
                    {"ML Models"}
                  </span>
                  <span>
                    {"Python"}
                  </span>
                  <span>
                    {"Statistics"}
                  </span>
                  <span>
                    {"Visualization"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Machine Learning Engineer"}
                  </h3>
                  <span className="demand-badge">
                    {"High Demand"}
                  </span>
                </div>
                <p>
                  {"Design and deploy ML systems at scale. Bridge the gap between data science research and production systems."}
                </p>
                <div className="career-skills">
                  <span>
                    {"MLOps"}
                  </span>
                  <span>
                    {"TensorFlow"}
                  </span>
                  <span>
                    {"Docker"}
                  </span>
                  <span>
                    {"AWS"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"NLP Engineer"}
                  </h3>
                  <span className="demand-badge">
                    {"Trending"}
                  </span>
                </div>
                <p>
                  {"Build systems that understand and generate human language. Work on chatbots, search, and content analysis."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Transformers"}
                  </span>
                  <span>
                    {"BERT"}
                  </span>
                  <span>
                    {"LLMs"}
                  </span>
                  <span>
                    {"spaCy"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Computer Vision Engineer"}
                  </h3>
                  <span className="demand-badge">
                    {"Growing"}
                  </span>
                </div>
                <p>
                  {"Develop systems that see and understand images and video. Work in autonomous vehicles, healthcare, security."}
                </p>
                <div className="career-skills">
                  <span>
                    {"CNNs"}
                  </span>
                  <span>
                    {"OpenCV"}
                  </span>
                  <span>
                    {"YOLO"}
                  </span>
                  <span>
                    {"PyTorch"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"AI Research Scientist"}
                  </h3>
                  <span className="demand-badge">
                    {"Advanced"}
                  </span>
                </div>
                <p>
                  {"Push the boundaries of what's possible with AI. Develop new algorithms and publish research papers."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Research"}
                  </span>
                  <span>
                    {"Deep Learning"}
                  </span>
                  <span>
                    {"Publications"}
                  </span>
                  <span>
                    {"PhD"}
                  </span>
                </div>
              </div>
              <div className="career-card">
                <div className="career-header">
                  <h3>
                    {"Analytics Manager"}
                  </h3>
                  <span className="demand-badge">
                    {"Leadership"}
                  </span>
                </div>
                <p>
                  {"Lead data science teams and translate business problems into analytical solutions. Bridge tech and business."}
                </p>
                <div className="career-skills">
                  <span>
                    {"Leadership"}
                  </span>
                  <span>
                    {"Strategy"}
                  </span>
                  <span>
                    {"Communication"}
                  </span>
                  <span>
                    {"ML"}
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
                {"Industry-standard tools for modern data science"}
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>
                  {"Machine Learning Frameworks"}
                </h3>
                <div className="tech-items">
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🔬"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/scikit-learn" className="tech-link">
                          {"Scikit-learn"}
                        </Link>
                      </h4>
                      <p>
                        {"The essential ML library. Classification, regression, clustering, and more. Perfect for traditional ML and rapid prototyping."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🔥"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/pytorch" className="tech-link">
                          {"PyTorch"}
                        </Link>
                      </h4>
                      <p>
                        {"Dynamic deep learning framework favored by researchers. Intuitive, Pythonic, and powerful for building neural networks."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🧠"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/tensorflow-keras" className="tech-link">
                          {"TensorFlow / Keras"}
                        </Link>
                      </h4>
                      <p>
                        {"Google's production-grade ML platform. Deploy models anywhere — mobile, web, edge devices, and cloud."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🚀"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/xgboost" className="tech-link">
                          {"XGBoost / LightGBM"}
                        </Link>
                      </h4>
                      <p>
                        {"Gradient boosting libraries that win Kaggle competitions. Essential for tabular data and production ML systems."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"NLP & Computer Vision"}
                </h3>
                <div className="tech-items">
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🤗"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/nlp-transformers" className="tech-link">
                          {"Hugging Face Transformers"}
                        </Link>
                      </h4>
                      <p>
                        {"State-of-the-art NLP models. BERT, GPT, T5 and more. The hub for modern language AI development."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"📝"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/spacy-nltk" className="tech-link">
                          {"spaCy & NLTK"}
                        </Link>
                      </h4>
                      <p>
                        {"Industrial-strength NLP libraries. Text processing, named entity recognition, and linguistic analysis."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"👁️"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/computer-vision" className="tech-link">
                          {"OpenCV & Computer Vision"}
                        </Link>
                      </h4>
                      <p>
                        {"Computer vision library with 2500+ algorithms. Image processing, object detection, and video analysis."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🎯"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/yolo-detectron" className="tech-link">
                          {"YOLO / Detectron2"}
                        </Link>
                      </h4>
                      <p>
                        {"Real-time object detection frameworks. Build systems that identify and locate objects in images and video."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <h3>
                  {"MLOps & Deployment"}
                </h3>
                <div className="tech-items">
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"📊"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/mlops" className="tech-link">
                          {"MLflow & MLOps"}
                        </Link>
                      </h4>
                      <p>
                        {"Open-source platform for ML lifecycle. Track experiments, package models, and deploy to production."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"🐳"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/docker-ml" className="tech-link">
                          {"Docker"}
                        </Link>
                      </h4>
                      <p>
                        {"Containerize your ML models. Ensure reproducibility and smooth deployment across environments."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"☁️"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/aws-sagemaker" className="tech-link">
                          {"AWS SageMaker"}
                        </Link>
                      </h4>
                      <p>
                        {"Fully managed ML service. Train, tune, and deploy models at scale with built-in algorithms and infrastructure."}
                      </p>
                    </div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">
                      {"⚡"}
                    </div>
                    <div className="tech-info">
                      <h4>
                        <Link href="/data-science/articles/fastapi" className="tech-link">
                          {"FastAPI"}
                        </Link>
                      </h4>
                      <p>
                        {"Modern Python API framework. Deploy your models as high-performance REST APIs with automatic documentation."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="companies-using">
              <h3>
                {"Companies Hiring Data Scientists"}
              </h3>
              <p className="companies-intro">
                {"These industry leaders are actively seeking data science talent:"}
              </p>
              <div className="company-logos">
                <span className="company-name">
                  {"Google"}
                </span>
                <span className="company-name">
                  {"Amazon"}
                </span>
                <span className="company-name">
                  {"Microsoft"}
                </span>
                <span className="company-name">
                  {"Meta"}
                </span>
                <span className="company-name">
                  {"Netflix"}
                </span>
                <span className="company-name">
                  {"Uber"}
                </span>
                <span className="company-name">
                  {"Airbnb"}
                </span>
                <span className="company-name">
                  {"Tesla"}
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
                {"End-to-end ML projects that demonstrate your expertise to employers"}
              </p>
            </div>
            <div className="projects-detailed">
              <div className="project-detailed-card">
                <div className="project-number">
                  {"01"}
                </div>
                <div className="project-content">
                  <h3>
                    {"Customer Churn Prediction System"}
                  </h3>
                  <p className="project-desc">
                    {"Build an end-to-end machine learning pipeline to predict which customers are likely to cancel their subscriptions. Learn the complete workflow from data to deployment."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Exploratory data analysis with visualizations"}
                      </li>
                      <li>
                        {"Feature engineering from raw customer data"}
                      </li>
                      <li>
                        {"Model training with multiple algorithms (Logistic Regression, Random Forest, XGBoost)"}
                      </li>
                      <li>
                        {"Hyperparameter tuning with cross-validation"}
                      </li>
                      <li>
                        {"Model interpretation with SHAP values"}
                      </li>
                      <li>
                        {"REST API deployment with FastAPI"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"The complete ML workflow, handling imbalanced datasets, model selection, feature importance analysis, and deploying models as production-ready APIs."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"Scikit-learn"}
                    </span>
                    <span>
                      {"XGBoost"}
                    </span>
                    <span>
                      {"SHAP"}
                    </span>
                    <span>
                      {"MLflow"}
                    </span>
                    <span>
                      {"FastAPI"}
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
                    {"Image Classification with Deep Learning"}
                  </h3>
                  <p className="project-desc">
                    {"Create a state-of-the-art image classification system using convolutional neural networks. Master transfer learning and deep learning best practices."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Custom dataset creation and preprocessing"}
                      </li>
                      <li>
                        {"Data augmentation pipeline for robust training"}
                      </li>
                      <li>
                        {"CNN architecture from scratch and with transfer learning"}
                      </li>
                      <li>
                        {"Fine-tuning pre-trained models (ResNet, EfficientNet)"}
                      </li>
                      <li>
                        {"Grad-CAM visualizations for model interpretation"}
                      </li>
                      <li>
                        {"Interactive web demo with Gradio"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Deep learning fundamentals, CNN architectures, transfer learning strategies, GPU training, model interpretation, and creating user-friendly ML demos."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"PyTorch"}
                    </span>
                    <span>
                      {"ResNet"}
                    </span>
                    <span>
                      {"Grad-CAM"}
                    </span>
                    <span>
                      {"Gradio"}
                    </span>
                    <span>
                      {"Weights & Biases"}
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
                    {"Sentiment Analysis with Transformers"}
                  </h3>
                  <p className="project-desc">
                    {"Build an NLP system that understands the sentiment and emotion in text. Work with state-of-the-art transformer models and deploy as an API."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Text preprocessing and tokenization pipeline"}
                      </li>
                      <li>
                        {"Fine-tuning BERT/RoBERTa for sentiment classification"}
                      </li>
                      <li>
                        {"Multi-class emotion detection"}
                      </li>
                      <li>
                        {"Aspect-based sentiment analysis"}
                      </li>
                      <li>
                        {"Model quantization for efficient inference"}
                      </li>
                      <li>
                        {"Production API with rate limiting and caching"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Transformer architecture, transfer learning for NLP, handling text data, model optimization techniques, and building production-ready NLP services."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"Transformers"}
                    </span>
                    <span>
                      {"BERT"}
                    </span>
                    <span>
                      {"Hugging Face"}
                    </span>
                    <span>
                      {"FastAPI"}
                    </span>
                    <span>
                      {"Docker"}
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
                    {"Time Series Forecasting Dashboard"}
                  </h3>
                  <p className="project-desc">
                    {"Develop a comprehensive forecasting system for business metrics like sales, demand, or stock prices. Combine multiple models and create interactive visualizations."}
                  </p>
                  <div className="project-features">
                    <h4>
                      {"Key Features You'll Build:"}
                    </h4>
                    <ul>
                      <li>
                        {"Time series decomposition and analysis"}
                      </li>
                      <li>
                        {"Classical methods (ARIMA, Exponential Smoothing)"}
                      </li>
                      <li>
                        {"Facebook Prophet for trend and seasonality"}
                      </li>
                      <li>
                        {"LSTM neural networks for sequence prediction"}
                      </li>
                      <li>
                        {"Ensemble of multiple forecasting models"}
                      </li>
                      <li>
                        {"Interactive Streamlit dashboard with Plotly charts"}
                      </li>
                    </ul>
                  </div>
                  <div className="project-learnings">
                    <h4>
                      {"What You'll Learn:"}
                    </h4>
                    <p>
                      {"Time series fundamentals, multiple forecasting approaches, handling seasonality and trends, model ensembling, and building interactive data applications."}
                    </p>
                  </div>
                  <div className="project-tech">
                    <span>
                      {"Prophet"}
                    </span>
                    <span>
                      {"TensorFlow"}
                    </span>
                    <span>
                      {"Streamlit"}
                    </span>
                    <span>
                      {"Plotly"}
                    </span>
                    <span>
                      {"statsmodels"}
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
                      {"Python & Data Libraries"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "95%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Machine Learning Algorithms"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "90%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Deep Learning (PyTorch/TensorFlow)"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "85%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"NLP & Computer Vision"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "80%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"Statistics & Mathematics"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "85%" }} />
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">
                      {"MLOps & Deployment"}
                    </span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ "width": "75%" }} />
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
                    {"Problem Formulation"}
                  </span>
                  <span className="skill-tag">
                    {"Data Storytelling"}
                  </span>
                  <span className="skill-tag">
                    {"Experiment Design"}
                  </span>
                  <span className="skill-tag">
                    {"Statistical Thinking"}
                  </span>
                  <span className="skill-tag">
                    {"Model Interpretation"}
                  </span>
                  <span className="skill-tag">
                    {"Business Acumen"}
                  </span>
                  <span className="skill-tag">
                    {"Research Skills"}
                  </span>
                  <span className="skill-tag">
                    {"Kaggle Competitions"}
                  </span>
                  <span className="skill-tag">
                    {"Technical Writing"}
                  </span>
                  <span className="skill-tag">
                    {"Presentation Skills"}
                  </span>
                  <span className="skill-tag">
                    {"Stakeholder Communication"}
                  </span>
                  <span className="skill-tag">
                    {"A/B Testing"}
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
                <h3 className="faq-question">
                  {"Do I need a PhD to become a data scientist?"}
                </h3>
                <p className="faq-answer">
                  {"No! While PhDs are common in research roles, most industry data science positions value practical skills and project experience. This program focuses on applied skills that employers want."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"How much math do I need to know?"}
                </h3>
                <p className="faq-answer">
                  {"You should be comfortable with high school math. We teach the linear algebra, calculus, and statistics you need as we go. The focus is on intuition and application rather than proofs."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Do I need Python experience?"}
                </h3>
                <p className="faq-answer">
                  {"Basic Python programming is a prerequisite. You should be comfortable with variables, loops, functions, and basic data structures. We'll teach you the data science-specific libraries."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"What's the difference between Data Science and Data Analytics?"}
                </h3>
                <p className="faq-answer">
                  {"Data Analytics focuses on descriptive analysis and visualization. Data Science goes further into predictive modeling, machine learning, and building AI systems. This program covers the full spectrum."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"How long is the program?"}
                </h3>
                <p className="faq-answer">
                  {"The program is designed as a comprehensive 6-month journey. We recommend dedicating 15-20 hours per week. The depth of content requires this time to truly master the skills."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Will I learn about LLMs and ChatGPT?"}
                </h3>
                <p className="faq-answer">
                  {"Yes! We cover transformer architectures, fine-tuning language models, and working with modern NLP. For deeper LLM/agent development, also check our Agentic AI program."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Do you cover MLOps and deployment?"}
                </h3>
                <p className="faq-answer">
                  {"Absolutely. We believe a model not in production isn't useful. You'll learn Docker, FastAPI, MLflow, and cloud deployment — skills that differentiate you in interviews."}
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {"Will there be Kaggle competitions?"}
                </h3>
                <p className="faq-answer">
                  {"Yes! We encourage participation in Kaggle competitions. You'll work on at least one competition during the program. It's excellent for learning and building your profile."}
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
                        {"STEM Graduates"}
                      </h3>
                      <p>
                        {"Engineering, math, or science graduates looking to enter data science."}
                      </p>
                    </div>
                  </div>
                  <div className="audience-item">
                    <div className="audience-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        {" "}
                        <line x1="12" y1="20" x2="12" y2="4" />
                        {" "}
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <div>
                      <h3>
                        {"Data Analysts"}
                      </h3>
                      <p>
                        {"Analysts ready to move beyond dashboards into predictive modeling."}
                      </p>
                    </div>
                  </div>
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
                        {"Software Engineers"}
                      </h3>
                      <p>
                        {"Developers wanting to add machine learning to their skill set."}
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
                      {"Basic statistics knowledge"}
                    </li>
                    <li>
                      {"Some SQL experience"}
                    </li>
                    <li>
                      {"High school level math (algebra, basic calculus)"}
                    </li>
                  </ul>
                  <p className="prereq-note">
                    {"We'll teach you the math you need, but some programming background is essential."}
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
                {"Ready to Become a "}
                <span className="gradient-text">
                  {"Data Scientist?"}
                </span>
              </h2>
              <p>
                {"Book a free consultation to discuss your background and create a personalized learning plan."}
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

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals through personalized mentorship and hands-on learning."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
              <div className="footer-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  {" "}
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {"AKL Heights, Seaport Road, Near Bharathmatha College, Kochi, Kerala - 682021"}
                </span>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-java">
                    {"Full Stack Java"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-dotnet">
                    {"Full Stack .NET"}
                  </Link>
                </li>
                <li>
                  <Link href="/hybrid-mobile-app">
                    {"Hybrid Mobile Apps"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-engineering">
                    {"Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
                <li>
                  <Link href="/agentic-ai">
                    {"Agentic AI"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Quick Links"}
              </h4>
              <ul>
                <li>
                  <Link href="/">
                    {"Home"}
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    {"About Us"}
                  </Link>
                </li>
                <li>
                  <Link href="/#why-us">
                    {"Why CODiiN"}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    {"Contact"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>
                {"Get in Touch"}
              </h4>
              <p>
                <a href="mailto:contact@codiin.com">
                  {"contact@codiin.com"}
                </a>
              </p>
              <p>
                <a href="tel:+918301890158">
                  {"+91 83018 90158"}
                </a>
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/CodiinTechnologies" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/codiin_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/codiin/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@codiin" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
            <div className="footer-legal">
              <Link href="/privacy-policy">
                {"Privacy Policy"}
              </Link>
              <Link href="/terms-of-service">
                {"Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in the Data Science program."} />
    </>
  );
}
