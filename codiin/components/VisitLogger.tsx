"use client";

import axios from "axios";
import { useEffect } from "react";
import { isNotFound } from "@/lib/visitLog";

const NAMES: Record<string, string> = {
  "l.instagram.com": "Instagram",
  "m.facebook.com": "Facebook",
  "lm.facebook.com": "Facebook",
  "l.facebook.com": "Facebook",
  "api.whatsapp.com": "WhatsApp",
  "t.co": "X",
};

function linkedFrom() {
  const referrer = document.referrer;
  if (!referrer) return "";
  if (referrer.startsWith(window.location.origin)) return "";
  const host = new URL(referrer).hostname.replace(/^www\./, "");
  return NAMES[host] ?? host;
}


function visitorId() {
  try {
    let id = localStorage.getItem("codiin:vid");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("codiin:vid", id);
    }
    return id;
  } catch {
    return null;
  }
}

function sessionLogged() {
  try {
    return sessionStorage.getItem("codiin:logged") !== null;
  } catch {
    return false;
  }
}

function markSession() {
  try {
    sessionStorage.setItem("codiin:logged", "1");
  } catch {
  }
}

const DWELL_MS = 3000;
const WAKE = ["scroll", "pointerdown", "keydown", "touchstart"] as const;


function automated() {
  return navigator.webdriver === true;
}

export default function VisitLogger() {
  useEffect(() => {
    if (isNotFound() || automated() || sessionLogged()) return;

    let done = false;

    const send = () => {
      if (done) return;
      if (document.visibilityState !== "visible") return;
      done = true;
      markSession();
      const params = new URLSearchParams(window.location.search);
      const source = params.get("utm_source") || linkedFrom() || "Direct";
      axios
        .post("/api/visitor", {
          path: window.location.pathname,
          source,
          campaign: params.get("utm_campaign"),
          visitorId: visitorId(),
        })
        .catch(() => {});
    };

    const timer = window.setTimeout(send, DWELL_MS);

    for (const event of WAKE) {
      window.addEventListener(event, send, { once: true, passive: true });
    }
    
    return () => {
      window.clearTimeout(timer);
      for (const event of WAKE) window.removeEventListener(event, send);
    };
  }, []);

  return null;
}
