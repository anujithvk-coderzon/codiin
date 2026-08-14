"use client";

import EventCountdown from "./EventCountdown";
import { dismissPromo, usePromoDismissed } from "@/lib/eventPromo";
import { useRegistered } from "@/lib/registeredEvents";
import Image from "next/image";
import Link from "next/link";

/**
 * A floating card on the home page for the newest event still taking
 * applications. Sits above the WhatsApp button, links through to the events
 * page, and stays closed for the rest of the browsing session once dismissed.
 */
export default function EventPromo({
  slug,
  name,
  deadline,
  imageUrl,
  isPaid,
}: {
  slug: string;
  name: string;
  deadline: string;
  imageUrl: string | null;
  isPaid: boolean;
}) {
  const dismissed = usePromoDismissed();
  /* Someone who has already registered does not need to be told about it.
     Both hooks run before the early return — a conditional hook call would
     break the rules of hooks the moment either value changed. */
  const registered = useRegistered(slug);

  if (dismissed || registered) return null;

  return (
    <div className="event-promo" role="complementary" aria-label="Upcoming event">
      {/* The close button is a sibling of the link, not inside it — nesting a
          button in an anchor means a tap on the X also follows the link. */}
      {/* Dismissed on click too, not only via the X — once someone has gone
          to the events page, showing them the same card again is noise. The
          write is synchronous, so it lands before the navigation. */}
      <Link
        href="/events"
        className="event-promo-link"
        onClick={dismissPromo}
      >
        <div className="event-promo-head">
          {imageUrl && (
            <span className="event-promo-thumb">
              <Image
                src={imageUrl}
                alt=""
                width={400}
                height={400}
                sizes="60px"
                className="event-promo-img"
              />
            </span>
          )}
          <span className="event-promo-titles">
            <span className="event-promo-badge">
              {/* A quiet pulse, so the card reads as live rather than static. */}
              <span className="event-promo-dot" aria-hidden="true" />
              Upcoming event
            </span>
            {/* On the title's own line, so it costs no extra height — and it
                survives on a phone, where the badge row above is hidden. */}
            <span className="event-promo-titleline">
              <span
                className={`event-promo-price${isPaid ? "" : " is-free"}`}
              >
                {isPaid ? "Paid" : "Free"}
              </span>
              <span className="event-promo-name">{name}</span>
            </span>
          </span>
        </div>

        {/* Timer and call to action stack on a wide card and sit side by side
            on a phone, where the saved ~30px of height matters more than the
            emphasis the full-width band gives. */}
        <span className="event-promo-foot">
          {/* The countdown is the reason to look, so it gets its own band. */}
          <span className="event-promo-timer">
            <EventCountdown deadline={deadline} />
          </span>

          <span className="event-promo-cta">
            Register
            {/* Dropped on the narrowest screens, where the row has no room
                for a word that carries nothing. */}
            <span className="event-promo-cta-word"> now</span> &rarr;
          </span>
        </span>
      </Link>

      <button
        type="button"
        className="event-promo-close"
        aria-label="Close"
        onClick={dismissPromo}
      >
        &times;
      </button>
    </div>
  );
}
