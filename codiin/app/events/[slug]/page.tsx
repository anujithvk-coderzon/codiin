import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EventRegisterForm from "@/components/EventRegisterForm";
import EventRegisteredTag from "@/components/EventRegisteredTag";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { prisma } from "@/lib/prisma";
import {
  fmtAmount,
  fmtDeadline,
  fmtRange,
  isClosed,
  type Fee,
  type Pair,
} from "@/lib/events";
import { whatsappHref } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

/**
 * Not prerendered with generateStaticParams: the event list changes from the
 * admin, and a build that had to reach the database to enumerate slugs would
 * fail the whole deploy whenever it could not. Each page renders on first
 * request instead and is then cached like the rest of the site.
 */
export const revalidate = 60;

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

/* generateMetadata and the page body both need the event. Wrapped so the two
   share one query per request rather than hitting the database twice. */
const getEvent = cache(async (slug: string) => {
  try {
    return await prisma.event.findUnique({ where: { slug } });
  } catch (error) {
    console.error(`Could not load event "${slug}":`, error);
    return null;
  }
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return { title: "Event not found" };

  return {
    title: event.name,
    // Trimmed rather than sent whole: a description past ~160 characters is
    // truncated in results anyway.
    description: event.description.slice(0, 155),
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: {
      type: "website",
      url: `/events/${event.slug}`,
      title: `${event.name} | CODiiN Tech Mentors Lab`,
      description: event.description.slice(0, 155),
      images: event.imageUrl ? [{ url: event.imageUrl }] : undefined,
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) notFound();

  const syllabus = (event.syllabus ?? []) as Pair[];
  const trainers = (event.trainerDetails ?? []) as Pair[];
  const fees = (event.feesStructure ?? []) as Fee[];
  const deadline = fmtDeadline(event.applicationEndDate);
  const venue = event.mode === "ONLINE" ? "Online" : (event.address ?? "Kochi");
  const register = whatsappHref(`Hi CODiiN! I'd like to join "${event.name}".`);

  // An event still listed but past its application deadline should not invite
  // an application it can no longer take.
  const closed = isClosed(event.applicationEndDate);

  /* Everything below the hero is optional except the description, so the two
     columns are built from what actually exists. Without this an event with
     no poster, syllabus or trainers rendered an empty column beside a full
     one — which is why the description belongs here rather than in the hero. */
  const hasAside =
    fees.length > 0 ||
    event.whoShouldAttend.length > 0 ||
    event.benefits.length > 0;

  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        {/* Everything a visitor needs to decide, before any scrolling: what it
            is, when, where, by when to apply, and how to register. */}
        <section className="program-hero event-hero">
          <div className="program-hero-bg" />
          <div className="container">
            <div className="program-hero-content">
              <Link href="/events" className="event-back-link">
                &larr; All events
              </Link>

              <div className="event-hero-tags">
                <span className="event-tag">
                  {event.mode === "ONLINE" ? "Online" : "In person"}
                </span>
                <span className="event-tag">
                  {event.isPaidEvent ? "Paid" : "Free"}
                </span>
                {closed && (
                  <span className="event-tag event-tag-closed">
                    Applications closed
                  </span>
                )}
                <EventRegisteredTag slug={event.slug} />
              </div>

              <h1>{event.name}</h1>

              <dl className="event-hero-facts">
                <div>
                  <dt>When</dt>
                  <dd>{fmtRange(event.startDate, event.endDate)}</dd>
                </div>
                <div>
                  <dt>Where</dt>
                  <dd>{venue}</dd>
                </div>
                {deadline && (
                  <div>
                    <dt>Apply by</dt>
                    <dd>{deadline}</dd>
                  </div>
                )}
              </dl>

              <div className="program-hero-cta">
                {/* Registration is a form, not a chat. Once applications have
                    closed there is nothing to submit, so it falls back to
                    asking about the next one. */}
                {closed ? (
                  <a
                    href={register}
                    className="btn btn-primary btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask about the next one
                  </a>
                ) : (
                  <EventRegisterForm
                    slug={event.slug}
                    eventName={event.name}
                    endsAt={event.endDate.toISOString()}
                    idPrefix="hero"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="event-detail-section">
          <div className="container">
            {/* The sidebar column only exists when there is something to put in
                it. `has-aside` is what turns on the two-column grid. */}
            <div
              className={`event-detail-layout${hasAside ? " has-aside" : ""}`}
            >
              <div className="event-detail-main">
                {event.imageUrl && (
                  <figure className="event-detail-poster">
                    {/* The one place the poster is worth reading, so it gets
                        real width — the listing thumbnail cannot show this. */}
                    <Image
                      src={event.imageUrl}
                      alt={`${event.name} poster`}
                      width={1200}
                      height={1600}
                      sizes="(min-width: 992px) 620px, calc(100vw - 40px)"
                      className="event-detail-poster-img"
                      priority
                    />
                  </figure>
                )}

                {/* Required in the schema, so this block always renders and the
                    main column is never empty. */}
                <div className="event-detail-block">
                  <h2>About this event</h2>
                  <p className="event-about">{event.description}</p>
                </div>

                {syllabus.length > 0 && (
                  <div className="event-detail-block">
                    <h2>What we&apos;ll cover</h2>
                    <ol className="event-syllabus">
                      {syllabus.map((item, i) => (
                        <li key={`${item.label}-${i}`}>
                          <span className="event-syllabus-number">{i + 1}</span>
                          <div>
                            <h3>{item.label}</h3>
                            {item.description && <p>{item.description}</p>}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {trainers.length > 0 && (
                  <div className="event-detail-block">
                    <h2>Who&apos;s taking it</h2>
                    <ul className="event-trainers">
                      {trainers.map((item, i) => (
                        <li key={`${item.label}-${i}`}>
                          <h3>{item.label}</h3>
                          {item.description && <p>{item.description}</p>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Closes the page on the action, for anyone who read to the
                    end rather than deciding from the hero. */}
                <div className="event-detail-block event-final-cta">
                  <h2>{closed ? "Missed this one?" : "Ready to join?"}</h2>
                  <p>
                    {closed
                      ? "Applications for this one have closed. Message us and we'll tell you when the next one opens."
                      : "Fill in the form and we'll confirm your seat."}
                  </p>
                  <div className="event-final-cta-actions">
                    {closed ? (
                      <a
                        href={register}
                        className="btn btn-primary btn-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ask about the next one
                      </a>
                    ) : (
                      <EventRegisterForm
                        slug={event.slug}
                        eventName={event.name}
                        endsAt={event.endDate.toISOString()}
                        idPrefix="footer"
                      />
                    )}
                  </div>
                </div>
              </div>

              {hasAside && (
                /* The facts you check rather than read. Sticky on a wide
                   screen; below 992px it stacks under the main column, which
                   is why the dates and the CTA are in the hero and not here. */
                <aside className="event-detail-aside">
                  {fees.length > 0 && (
                    <div className="event-aside-card">
                      <h2>Fees</h2>
                      <dl className="event-fees">
                        {fees.map((fee, i) => (
                          <div key={`${fee.label}-${i}`}>
                            <dt>{fee.label}</dt>
                            <dd>{fmtAmount(fee.amount)}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}

                  {event.whoShouldAttend.length > 0 && (
                    <div className="event-aside-card">
                      <h2>Who it&apos;s for</h2>
                      <ul className="event-aside-list">
                        {event.whoShouldAttend.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.benefits.length > 0 && (
                    <div className="event-aside-card">
                      <h2>What you leave with</h2>
                      <ul className="event-aside-list">
                        {event.benefits.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </aside>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat
        message={`Hi CODiiN! I'd like to know more about "${event.name}".`}
      />
    </>
  );
}
