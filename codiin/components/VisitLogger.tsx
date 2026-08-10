"use client";

import axios from "axios";
import { useEffect } from "react";

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

export default function VisitLogger() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source") || linkedFrom() || "Direct";

    axios
      .post("/api/visitor", {
        path: window.location.pathname,
        source,
        campaign: params.get("utm_campaign"),
      })
      .catch(() => {});
  }, []);

  return null;
}
