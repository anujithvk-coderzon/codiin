import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CODiiN Tech Mentors Lab. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    url: "/privacy-policy",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="page-hero" style={{ "paddingTop": "120px", "paddingBottom": "60px" }}>
          <div className="container">
            <h1>
              {"Privacy Policy"}
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
                {"1. Introduction"}
              </h2>
              <p>
                {"CODiiN Tech Mentors Lab, a mentorship brand operated by CODERZON Technologies Pvt Ltd (\"we,\" \"our,\" or \"us\"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or enroll in our mentorship programs."}
              </p>
              <p>
                {"By accessing our website or using our services, you agree to the collection and use of information in accordance with this policy."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"2. Information We Collect"}
              </h2>
              <h3>
                {"2.1 Personal Information"}
              </h3>
              <p>
                {"We may collect the following personal information when you:"}
              </p>
              <ul>
                <li>
                  {"Fill out inquiry or enrollment forms"}
                </li>
                <li>
                  {"Subscribe to our newsletter"}
                </li>
                <li>
                  {"Contact us via email, phone, or WhatsApp"}
                </li>
                <li>
                  {"Enroll in our mentorship programs"}
                </li>
              </ul>
              <p>
                {"This information may include:"}
              </p>
              <ul>
                <li>
                  {"Full name"}
                </li>
                <li>
                  {"Email address"}
                </li>
                <li>
                  {"Phone number"}
                </li>
                <li>
                  {"Educational background"}
                </li>
                <li>
                  {"Professional experience"}
                </li>
                <li>
                  {"Program preferences"}
                </li>
              </ul>
              <h3>
                {"2.2 Automatically Collected Information"}
              </h3>
              <p>
                {"When you visit our website, we may automatically collect:"}
              </p>
              <ul>
                <li>
                  {"IP address"}
                </li>
                <li>
                  {"Browser type and version"}
                </li>
                <li>
                  {"Pages visited and time spent"}
                </li>
                <li>
                  {"Referring website"}
                </li>
                <li>
                  {"Device information"}
                </li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>
                {"3. How We Use Your Information"}
              </h2>
              <p>
                {"We use the collected information for the following purposes:"}
              </p>
              <ul>
                <li>
                  <strong>
                    {"Service Delivery:"}
                  </strong>
                  {" To provide mentorship programs and educational services"}
                </li>
                <li>
                  <strong>
                    {"Communication:"}
                  </strong>
                  {" To respond to inquiries, send program updates, and provide support"}
                </li>
                <li>
                  <strong>
                    {"Improvement:"}
                  </strong>
                  {" To analyze website usage and improve our services"}
                </li>
                <li>
                  <strong>
                    {"Marketing:"}
                  </strong>
                  {" To send promotional materials (only with your consent)"}
                </li>
                <li>
                  <strong>
                    {"Legal Compliance:"}
                  </strong>
                  {" To comply with applicable laws and regulations"}
                </li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>
                {"4. Information Sharing"}
              </h2>
              <p>
                {"We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:"}
              </p>
              <ul>
                <li>
                  <strong>
                    {"Service Providers:"}
                  </strong>
                  {" With trusted third-party services that help us operate our website (e.g., form submission services, analytics)"}
                </li>
                <li>
                  <strong>
                    {"Legal Requirements:"}
                  </strong>
                  {" When required by law or to protect our rights"}
                </li>
                <li>
                  <strong>
                    {"Business Transfers:"}
                  </strong>
                  {" In connection with a merger, acquisition, or sale of assets"}
                </li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>
                {"5. Data Security"}
              </h2>
              <p>
                {"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"6. Your Rights"}
              </h2>
              <p>
                {"Under applicable data protection laws, you have the following rights:"}
              </p>
              <ul>
                <li>
                  <strong>
                    {"Access:"}
                  </strong>
                  {" Request a copy of your personal data"}
                </li>
                <li>
                  <strong>
                    {"Correction:"}
                  </strong>
                  {" Request correction of inaccurate data"}
                </li>
                <li>
                  <strong>
                    {"Deletion:"}
                  </strong>
                  {" Request deletion of your personal data"}
                </li>
                <li>
                  <strong>
                    {"Objection:"}
                  </strong>
                  {" Object to processing of your data for marketing purposes"}
                </li>
                <li>
                  <strong>
                    {"Portability:"}
                  </strong>
                  {" Request transfer of your data to another service"}
                </li>
              </ul>
              <p>
                {"To exercise these rights, please contact us at "}
                <a href="mailto:contact@codiin.com">
                  {"contact@codiin.com"}
                </a>
                {"."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"7. Cookies"}
              </h2>
              <p>
                {"Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"8. Third-Party Links"}
              </h2>
              <p>
                {"Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"9. Children's Privacy"}
              </h2>
              <p>
                {"Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"10. Changes to This Policy"}
              </h2>
              <p>
                {"We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically."}
              </p>
            </div>
            <div className="legal-section">
              <h2>
                {"11. Contact Us"}
              </h2>
              <p>
                {"If you have any questions about this Privacy Policy, please contact us:"}
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
