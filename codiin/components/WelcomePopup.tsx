"use client";

import { whatsappHref } from "@/lib/site";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons";

const STORAGE_KEY = "codiin:welcome-seen";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
    }
    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="modal welcome-modal active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcomeTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="modal-content welcome-modal-content">
        <button
          type="button"
          className="welcome-modal-close"
          onClick={close}
          aria-label="Close"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h3 id="welcomeTitle">
          Welcome!{" "}
          {/* Decorative: the heading reads the same without it, and a screen
              reader announcing "waving hand sign" adds nothing. */}
          <span aria-hidden="true">👋</span>
        </h3>
        <p>
          Need help getting started? Chat with our course experts on WhatsApp
          for quick, personalized assistance.
        </p>

        <a
          href={whatsappHref("Hi")}
          className="welcome-modal-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
