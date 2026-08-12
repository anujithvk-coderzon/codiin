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

function alreadyLogged() {
  try {
    if (sessionStorage.getItem("codiin:logged")) return true;
    sessionStorage.setItem("codiin:logged", "1");
    return false;
  } catch {

    return false;
  }
}

/* Every browser driven by automation sets this. It is part of the WebDriver
   specification, so Puppeteer, Playwright and Selenium all report true unless
   someone has gone out of their way to patch it out — and no real browser
   ever does. Cheaper and far more precise than guessing from the user agent,
   which a headless Chrome fills in exactly like the real thing. */
function automated() {
  return navigator.webdriver === true;
}

export default function VisitLogger() {
  useEffect(() => {
    if (isNotFound() || automated() || alreadyLogged()) return;

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
  }, []);

  return null;
}
