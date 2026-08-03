"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type NavLink = {
  href: string;
  label: string;
  /** Renders as the filled call-to-action button at the end of the list. */
  cta?: boolean;
};

const DEFAULT_LINKS: NavLink[] = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

export default function Navbar({
  links = DEFAULT_LINKS,
  /** Enables scroll-spy highlighting of in-page section links. */
  spy = false,
}: {
  links?: NavLink[];
  spy?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef<HTMLElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Shadow on the navbar once the page has scrolled past the hero edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the slide-in menu covers the page.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape, or on a click outside the navbar.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open, close]);

  // Close the menu whenever the viewport grows past the mobile breakpoint,
  // otherwise the body scroll lock would persist on a desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Scroll-spy: highlight the link for the section currently in view.
  useEffect(() => {
    if (!spy) return;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );
    if (sections.length === 0) return;

    const onScroll = () => {
      const position = window.scrollY + 100;
      let current = "";
      for (const section of sections) {
        if (
          position >= section.offsetTop &&
          position < section.offsetTop + section.offsetHeight
        ) {
          current = section.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [spy]);

  return (
    <header>
      <nav
        ref={navRef}
        className={`navbar${scrolled ? " scrolled" : ""}`}
        id="navbar"
      >
        <div className="container">
          <Link
            href="/"
            className="logo"
            aria-label="CODiiN Tech Mentors Lab - Home"
            onClick={close}
          >
            <Image
              src="/img/codiin-logo.png"
              alt="CODiiN Tech Mentors Lab"
              className="logo-img"
              width={315}
              height={111}
              priority
            />
          </Link>

          <ul className={`nav-links${open ? " active" : ""}`} id="navLinks">
            {links.map((link) => {
              const isActive =
                spy && !link.cta && link.href === `/#${active}` && active !== "";
              return (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className={
                      link.cta
                        ? "btn btn-primary btn-nav"
                        : isActive
                          ? "active"
                          : undefined
                    }
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className={`mobile-menu-btn${open ? " active" : ""}`}
            id="mobileMenuBtn"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
