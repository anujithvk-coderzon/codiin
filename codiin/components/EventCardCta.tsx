"use client";

import { useRegistered } from "@/lib/registeredEvents";
import Link from "next/link";

/**
 * The action on an event card. Client-side because the wording depends on
 * whether this browser has already registered — inviting someone to register
 * for something they are marked as registered for reads as a contradiction.
 */
export default function EventCardCta({ slug }: { slug: string }) {
  const registered = useRegistered(slug);
  return (
    <Link
      href={`/events/${slug}`}
      className={registered ? "btn btn-outline" : "btn btn-primary"}
    >
      {registered ? "View details" : "Click to know more & register"}
    </Link>
  );
}
