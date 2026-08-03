import type { Metadata } from "next";
import Footer from "@/components/Footer";
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
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="page-hero">
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

      <Footer variant="program" />

      <WhatsAppFloat message={"Hi CODiiN! I have a question."} />
    </>
  );
}
