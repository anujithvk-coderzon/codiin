"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * How long is left to apply for an event.
 *
 * A client component because the events pages are cached — `/events` is static
 * with a 60-second revalidation and `/events/[slug]` is cached after its first
 * request. A countdown rendered on the server would show whatever was true
 * when the page was cached, for everyone who saw it afterwards.
 */
export default function EventCountdown({ deadline }: { deadline: string }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const target = new Date(deadline).getTime();

    const update = () => {
      const left = target - Date.now();
      if (left <= 0) {
        setText("Applications closed");
        return;
      }

      const days = Math.floor(left / 86400000);
      const hours = Math.floor((left % 86400000) / 3600000);
      const mins = Math.floor((left % 3600000) / 60000);
      const secs = Math.floor((left % 60000) / 1000);

      /* Leading units are dropped once they reach zero, so a deadline an hour
         away reads "04h : 08m : 39s" rather than "0d : 04h : 08m : 39s". Each
         unit is kept only if it, or something larger, is non-zero — seconds
         always show, so there is never an empty pill. */
      const parts: string[] = [];
      if (days) parts.push(`${days}d`);
      if (days || hours) parts.push(`${pad(hours)}h`);
      if (days || hours || mins) parts.push(`${pad(mins)}m`);
      parts.push(`${pad(secs)}s`);

      setText(parts.join(" : "));
    };

    /* Every second, because the seconds are on screen. The update runs in
       this callback rather than directly in the effect, which is both what
       keeps `now` out of the render — a server value baked into cached HTML
       would mismatch on hydration — and what keeps the set-state-in-effect
       rule quiet. */
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, [deadline]);

  // Empty for the first second, rather than rendering a wrong value.
  if (!text) return null;

  return (
    <p className="event-countdown">
      {text !== "Applications closed" && (
        <span className="event-countdown-label">Closes in</span>
      )}
      {text}
    </p>
  );
}
