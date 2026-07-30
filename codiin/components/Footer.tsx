import Image from "next/image";
import Link from "next/link";
import {
  CONTACT,
  DATA_PROGRAMS,
  DEV_PROGRAMS,
  PROGRAMS,
  SOCIAL,
} from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  YouTubeIcon,
} from "./Icons";

/**
 * The original site shipped three footer arrangements. They are preserved
 * exactly, selected by `variant`.
 */
export type FooterVariant = "home" | "program" | "article";

function Brand({ withLocation }: { withLocation: boolean }) {
  return (
    <div className="footer-brand">
      <Link href="/" className="logo">
        <Image
          src="/img/codiin-logo-light.png"
          alt="CODiiN Tech Mentors Lab"
          className="logo-img"
          width={315}
          height={111}
        />
      </Link>
      <p>
        Empowering the next generation of tech professionals through
        personalized mentorship and hands-on learning.
      </p>
      <div className="footer-company">
        <strong>{CONTACT.company}</strong>
      </div>
      {withLocation && (
        <div className="footer-location">
          <LocationIcon />
          <span>{CONTACT.address}</span>
        </div>
      )}
    </div>
  );
}

function SocialRow() {
  return (
    <div className="footer-social">
      <a
        href={SOCIAL.facebook}
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        href={SOCIAL.instagram}
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
      <a
        href={SOCIAL.linkedin}
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href={SOCIAL.youtube}
        aria-label="YouTube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </a>
    </div>
  );
}

function ProgramList({ items }: { items: readonly { slug: string; title: string }[] }) {
  return (
    <ul>
      {items.map((p) => (
        <li key={p.slug}>
          <Link href={`/${p.slug}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}

function QuickLinks({ withPrograms }: { withPrograms: boolean }) {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/#about">About Us</Link>
      </li>
      {withPrograms && (
        <li>
          <Link href="/#programs">Programs</Link>
        </li>
      )}
      <li>
        <Link href="/#why-us">Why CODiiN</Link>
      </li>
      <li>
        <Link href="/#contact">Contact</Link>
      </li>
    </ul>
  );
}

function GetInTouch() {
  return (
    <div className="footer-contact">
      <h4>Get in Touch</h4>
      <p>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </p>
      <p>
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </p>
      <SocialRow />
    </div>
  );
}

export default function Footer({
  variant = "home",
}: {
  variant?: FooterVariant;
}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <Brand withLocation={variant !== "article"} />

          {variant === "home" && (
            <>
              <div className="footer-links">
                <h4>Quick Links</h4>
                <QuickLinks withPrograms />
              </div>
              <div className="footer-links">
                <h4>Programs</h4>
                <ProgramList items={PROGRAMS} />
              </div>
              <GetInTouch />
            </>
          )}

          {variant === "program" && (
            <>
              <div className="footer-links">
                <h4>Programs</h4>
                <ProgramList items={PROGRAMS} />
              </div>
              <div className="footer-links">
                <h4>Quick Links</h4>
                <QuickLinks withPrograms={false} />
              </div>
              <GetInTouch />
            </>
          )}

          {variant === "article" && (
            <>
              <div className="footer-links">
                <h4>Programs</h4>
                <ProgramList items={DEV_PROGRAMS} />
              </div>
              <div className="footer-links">
                <h4>Data &amp; AI</h4>
                <ProgramList items={DATA_PROGRAMS} />
              </div>
              <div className="footer-links">
                <h4>Connect</h4>
                <ul>
                  <li>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </li>
                  <li>
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </li>
                  <li>Kochi, Kerala</li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 {CONTACT.company}. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
