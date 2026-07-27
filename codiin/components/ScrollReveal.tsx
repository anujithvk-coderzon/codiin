"use client";

import { useEffect } from "react";

const SELECTOR = ".program-card, .benefit-card, .feature";

/**
 * Fade-and-rise reveal for card grids, ported from script.js.
 *
 * The hidden state is applied from JS on mount so that users without
 * JavaScript (and crawlers) always see fully visible content.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (elements.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    for (const el of elements) el.classList.add("reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 },
    );

    for (const el of elements) observer.observe(el);

    return () => {
      observer.disconnect();
      for (const el of elements) el.classList.remove("reveal", "visible");
    };
  }, []);

  return null;
}
