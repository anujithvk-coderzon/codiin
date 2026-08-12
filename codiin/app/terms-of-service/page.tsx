import type { Metadata } from "next";
import Footer from "@/components/Footer";
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
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="page-hero">
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
                  <a href="mailto:contact@coderzon.com">
                    {"contact@coderzon.com"}
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
