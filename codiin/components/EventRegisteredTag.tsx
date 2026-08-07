"use client";

import { useRegistered } from "@/lib/registeredEvents";

/**
 * The "you already registered" marker on an event card. A client component so
 * the listing page around it can stay a cached Server Component — only this
 * span depends on who is looking.
 */
export default function EventRegisteredTag({ slug }: { slug: string }) {
  const registered = useRegistered(slug);
  if (!registered) return null;
  return <span className="event-tag event-tag-registered">&#10003; Registered</span>;
}
