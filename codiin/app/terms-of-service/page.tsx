import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for CODiiN Tech Mentors Lab. Read about our mentorship program terms, conditions, and policies.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    type: "website",
    url: "/terms-of-service",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="page-hero" style={{ "paddingTop": "120px", "paddingBottom": "60px" }}>
          <div className="container">
            <h1>
              {"Terms of Service"}
            </h1>
            <p className="hero-subtitle">
              {"Last updated: December 2024"}
            </p>
          </div>
        </section>
        <section className="legal-content">
          <div className="container">
            <div className="legal-section">
              <h2>
                {"1. Agreement to Terms"}
              </h2>
              <p>
                {"By accessing or using the services provided by CODiiN Tech Mentors Lab, a mentorship brand operated by CODERZON Technologies Pvt Ltd (\"we,\" \"our,\" or \"us\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."}
              </p>
              <p>
                {"These terms apply to all visitors, users, and participants of our mentorship programs."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"2. Services Description"}
              </h2>
              <p>
                {"CODiiN Tech Mentors Lab provides technology education and mentorship services, including but not limited to:"}
              </p>
              <ul>
                <li>
                  {"Personalized 1:1 mentorship programs"}
                </li>
                <li>
                  {"Full Stack Web Development training (JavaScript, Python, Java, .NET)"}
                </li>
                <li>
                  {"Data Analytics, Data Engineering, and Data Science programs"}
                </li>
                <li>
                  {"Agentic AI and emerging technology training"}
                </li>
                <li>
                  {"Hybrid Mobile App Development training"}
                </li>
                <li>
                  {"Project-based learning and portfolio development"}
                </li>
                <li>
                  {"Career guidance and job placement assistance"}
                </li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>
                {"3. Enrollment and Registration"}
              </h2>
              <h3>
                {"3.1 Eligibility"}
              </h3>
              <p>
                {"To enroll in our programs, you must:"}
              </p>
              <ul>
                <li>
                  {"Be at least 18 years of age, or have parental/guardian consent"}
                </li>
                <li>
                  {"Provide accurate and complete registration information"}
                </li>
                <li>
                  {"Have access to necessary hardware and internet connectivity"}
                </li>
              </ul>
              <h3>
                {"3.2 Program Selection"}
              </h3>
              <p>
                {"Program selection is subject to an initial consultation to ensure the chosen program aligns with your goals and current skill level. We reserve the right to recommend alternative programs if deemed more suitable."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"4. Payment Terms"}
              </h2>
              <h3>
                {"4.1 Fees"}
              </h3>
              <p>
                {"Program fees are communicated during the enrollment process. All fees are in Indian Rupees (INR) unless otherwise specified."}
              </p>
              <h3>
                {"4.2 Payment Schedule"}
              </h3>
              <p>
                {"Payment terms and schedules are agreed upon during enrollment. We offer flexible payment options based on individual circumstances."}
              </p>
              <h3>
                {"4.3 Refund Policy"}
              </h3>
              <p>
                {"Refund requests are evaluated on a case-by-case basis. Please contact us within 7 days of enrollment if you wish to discuss a refund. Refunds may be prorated based on services already rendered."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"5. Program Participation"}
              </h2>
              <h3>
                {"5.1 Attendance and Commitment"}
              </h3>
              <p>
                {"Success in our programs requires regular attendance and active participation. You are expected to:"}
              </p>
              <ul>
                <li>
                  {"Attend scheduled mentorship sessions"}
                </li>
                <li>
                  {"Complete assigned projects and exercises"}
                </li>
                <li>
                  {"Communicate promptly regarding scheduling changes"}
                </li>
                <li>
                  {"Maintain professional conduct during all interactions"}
                </li>
              </ul>
              <h3>
                {"5.2 Program Duration"}
              </h3>
              <p>
                {"Program duration varies based on the chosen track and individual pace of learning. Estimated completion times are provided as guidelines and may vary."}
              </p>
              <h3>
                {"5.3 Rescheduling"}
              </h3>
              <p>
                {"Session rescheduling requests should be made at least 24 hours in advance. Repeated no-shows without prior notice may affect your program progress."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"6. Intellectual Property"}
              </h2>
              <h3>
                {"6.1 Course Materials"}
              </h3>
              <p>
                {"All course materials, including but not limited to curriculum content, presentations, code samples, and resources, are the intellectual property of CODiiN Tech Mentors Lab. You may use these materials for personal learning purposes only."}
              </p>
              <h3>
                {"6.2 Your Work"}
              </h3>
              <p>
                {"Projects and code you create during the program remain your intellectual property. However, we may use anonymized examples for educational purposes with your consent."}
              </p>
              <h3>
                {"6.3 Restrictions"}
              </h3>
              <p>
                {"You may not:"}
              </p>
              <ul>
                <li>
                  {"Reproduce or distribute course materials without written permission"}
                </li>
                <li>
                  {"Use materials for commercial training purposes"}
                </li>
                <li>
                  {"Share login credentials or course access with others"}
                </li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>
                {"7. Code of Conduct"}
              </h2>
              <p>
                {"All participants are expected to:"}
              </p>
              <ul>
                <li>
                  {"Treat mentors, staff, and fellow learners with respect"}
                </li>
                <li>
                  {"Maintain academic integrity and honesty"}
                </li>
                <li>
                  {"Refrain from harassment, discrimination, or disruptive behavior"}
                </li>
                <li>
                  {"Use appropriate language in all communications"}
                </li>
                <li>
                  {"Respect confidentiality of other participants' information"}
                </li>
              </ul>
              <p>
                {"Violation of this code of conduct may result in program termination without refund."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"8. Limitation of Liability"}
              </h2>
              <p>
                {"While we strive to provide high-quality mentorship and training:"}
              </p>
              <ul>
                <li>
                  {"We do not guarantee specific employment outcomes or job placement"}
                </li>
                <li>
                  {"Program completion does not guarantee certification from third-party organizations"}
                </li>
                <li>
                  {"We are not liable for any indirect, incidental, or consequential damages"}
                </li>
                <li>
                  {"Our total liability shall not exceed the amount paid for the program"}
                </li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>
                {"9. Disclaimer"}
              </h2>
              <p>
                {"Our services are provided \"as is\" without warranties of any kind. We make no guarantees regarding:"}
              </p>
              <ul>
                <li>
                  {"Specific career outcomes or salary expectations"}
                </li>
                <li>
                  {"Continuous availability of all program features"}
                </li>
                <li>
                  {"Compatibility with all software or hardware configurations"}
                </li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>
                {"10. Termination"}
              </h2>
              <p>
                {"We reserve the right to terminate your participation in our programs if you:"}
              </p>
              <ul>
                <li>
                  {"Violate these Terms of Service"}
                </li>
                <li>
                  {"Fail to meet payment obligations"}
                </li>
                <li>
                  {"Engage in misconduct or disruptive behavior"}
                </li>
                <li>
                  {"Misrepresent your qualifications or identity"}
                </li>
              </ul>
              <p>
                {"You may terminate your participation by providing written notice. Refund eligibility will be determined based on our refund policy."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"11. Changes to Terms"}
              </h2>
              <p>
                {"We may modify these Terms of Service at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"12. Governing Law"}
              </h2>
              <p>
                {"These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kochi, Kerala."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"13. Contact Information"}
              </h2>
              <p>
                {"For questions about these Terms of Service, please contact us:"}
              </p>
              <ul className="contact-list">
                <li>
                  <strong>
                    {"Company:"}
                  </strong>
                  {" CODERZON Technologies Pvt Ltd"}
                </li>
                <li>
                  <strong>
                    {"Brand:"}
                  </strong>
                  {" CODiiN Tech Mentors Lab"}
                </li>
                <li>
                  <strong>
                    {"Email:"}
                  </strong>
                  <a href="mailto:contact@codiin.com">
                    {"contact@codiin.com"}
                  </a>
                </li>
                <li>
                  <strong>
                    {"Phone:"}
                  </strong>
                  <a href="tel:+918301890158">
                    {"+91 83018 90158"}
                  </a>
                </li>
                <li>
                  <strong>
                    {"Address:"}
                  </strong>
                  {" AKL Heights, Seaport Road, Near Bharathmatha College, Kochi, Kerala 682021"}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
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
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Data & AI"}
              </h4>
              <ul>
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
                {"Connect"}
              </h4>
              <ul>
                <li>
                  <a href="mailto:contact@codiin.com">
                    {"contact@codiin.com"}
                  </a>
                </li>
                <li>
                  <a href="tel:+918301890158">
                    {"+91 83018 90158"}
                  </a>
                </li>
                <li>
                  {"Kochi, Kerala"}
                </li>
              </ul>
              <div className="social-links">
                <a href="https://www.facebook.com/CodiinTechnologies" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/codiin_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/codiin/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@codiin" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}>
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

      <WhatsAppFloat message={"Hi CODiiN! I have a question."} />
    </>
  );
}
