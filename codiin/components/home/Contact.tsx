import { CONTACT, SOCIAL } from "@/lib/site";
import ContactForm from "../ContactForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  YouTubeIcon,
} from "../Icons";

const SOCIAL_LINKS = [
  { href: SOCIAL.facebook, label: "Follow us on Facebook", Icon: FacebookIcon },
  {
    href: SOCIAL.instagram,
    label: "Follow us on Instagram",
    Icon: InstagramIcon,
  },
  { href: SOCIAL.linkedin, label: "Follow us on LinkedIn", Icon: LinkedInIcon },
  {
    href: SOCIAL.youtube,
    label: "Subscribe to our YouTube channel",
    Icon: YouTubeIcon,
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-badge">Get in Touch</span>
            <h2 className="section-title">
              Let&apos;s Start Your{" "}
              <span className="gradient-text">Tech Journey</span>
            </h2>
            <p>
              Have questions about our programs? Want to know which track is
              right for you? Reach out and we&apos;ll help you find your path.
            </p>

            <address className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <LocationIcon />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>{CONTACT.addressShort}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MailIcon />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <PhoneIcon />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </p>
                </div>
              </div>
            </address>

            <div className="social-links">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="social-link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
