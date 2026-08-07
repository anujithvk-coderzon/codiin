import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { fmtDeadline, fmtRange } from "@/lib/events";
import { prisma } from "@/lib/prisma";
import { whatsappHref } from "@/lib/site";
import type { Metadata } from "next";
import EventCardCta from "@/components/EventCardCta";
import EventRegisteredTag from "@/components/EventRegisteredTag";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Workshops, bootcamps and webinars run by CODiiN Tech Mentors Lab in Kochi. Hands-on sessions in Data Science, Agentic AI, Full Stack Development and more.",
  alternates: { canonical: "/events" },
  openGraph: {
    type: "website",
    url: "/events",
    title: "Upcoming Events | CODiiN Tech Mentors Lab",
    description:
      "Hands-on workshops and bootcamps run by CODiiN in Kochi, Kerala.",
  },
};

/**
 * Events are created in the admin, so this page cannot be baked at build time
 * like the rest of the site. Sixty seconds keeps it effectively static — one
 * render is shared by everyone until it expires — while a newly published
 * event still appears within the minute.
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

type EventRow = Awaited<ReturnType<typeof prisma.event.findMany>>[number];

export default async function EventsPage() {
  let events: EventRow[] = [];
  let unavailable = false;
  try {
    events = await prisma.event.findMany({
      where: { endDate: { gte: new Date() } },
      orderBy: { startDate: "asc" },
    });
  } catch (error) {
    console.error("Could not load events:", error);
    unavailable = true;
  }
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="program-hero">
          <div className="program-hero-bg" />
          <div className="container">
            <div className="program-hero-content">
              <span className="program-hero-badge">Events</span>
              <h1>
                What&apos;s coming up at{" "}
                <span className="gradient-text">CODiiN</span>
              </h1>
              <p className="program-hero-desc">
                Workshops, bootcamps and webinars run out of our Kochi lab.
                Hands-on sessions where you build something and leave with it.
              </p>
            </div>
          </div>
        </section>

        <section className="events-section">
          <div className="container">
            {unavailable ? (
              <div className="events-empty">
                <h2>We can&apos;t load events right now</h2>
                <p>
                  Something went wrong at our end. Try again shortly, or message
                  us and we&apos;ll tell you what&apos;s coming up.
                </p>
                <a
                  href={whatsappHref(
                    "Hi CODiiN! What events do you have coming up?",
                  )}
                  className="btn btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask on WhatsApp
                </a>
              </div>
            ) : events.length === 0 ? (
              <div className="events-empty">
                <h2>Nothing scheduled right now</h2>
                <p>
                  We run workshops through the year. Send us a message and
                  we&apos;ll tell you when the next one opens.
                </p>
                <a
                  href={whatsappHref(
                    "Hi CODiiN! Let me know when your next event is announced.",
                  )}
                  className="btn btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask on WhatsApp
                </a>
              </div>
            ) : (
              <div className="events-list">
                {events.map((event) => {
                  const deadline = fmtDeadline(event.applicationEndDate);

                  return (
                    <article
                      key={event.id}
                      className={`event-card${event.imageUrl ? " has-poster" : ""}`}
                    >
                      {event.imageUrl && (
                        <div className="event-card-media">
                          <Image
                            src={event.imageUrl}
                            alt={`${event.name} poster`}
                            width={1200}
                            height={630}
                            sizes="(min-width: 720px) 250px, 100vw"
                            className="event-card-img"
                          />
                        </div>
                      )}

                      <div className="event-card-body">
                        <div className="event-card-tags">
                          <span className="event-tag">
                            {event.mode === "ONLINE" ? "Online" : "In person"}
                          </span>
                          <span className="event-tag">
                            {event.isPaidEvent ? "Paid" : "Free"}
                          </span>
                          <EventRegisteredTag slug={event.slug} />
                        </div>

                        <h2>{event.name}</h2>

                        <dl className="event-card-meta">
                          <div>
                            <dt>When</dt>
                            <dd>{fmtRange(event.startDate, event.endDate)}</dd>
                          </div>
                          <div>
                            <dt>Where</dt>
                            <dd>
                              {event.mode === "ONLINE"
                                ? "Online"
                                : (event.address ?? "Kochi")}
                            </dd>
                          </div>
                          {deadline && (
                            <div>
                              <dt>Apply by</dt>
                              <dd>{deadline}</dd>
                            </div>
                          )}
                        </dl>

                        <p className="event-card-desc">{event.description}</p>

                        <div className="event-card-actions">
                          {/* One way in. The detail page carries the syllabus,
                              fees and the poster at a size worth reading, so
                              the card does not have to. */}
                          <EventCardCta slug={event.slug} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat message="Hi CODiiN! I'd like to know about your upcoming events." />
    </>
  );
}
