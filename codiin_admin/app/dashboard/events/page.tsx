"use client";

import axios, { isAxiosError } from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

type EventRow = {
  id: string;
  slug: string;
  name: string;
  startDate: string;
  endDate: string;
  applicationEndDate: string;
  _count?: { EventRegistration: number };
  isPaidEvent: boolean;
  mode: "ONLINE" | "OFFLINE";
  address: string | null;
  imageUrl: string | null;
  trainerDetails: { label: string; description: string }[] | null;
  createdAt: string;
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const fmtTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

/** The deadline carries a time on new rows and not on ones created before it
 *  did. A bare "YYYY-MM-DD" is read as UTC midnight and formatted in UTC so
 *  the day cannot slip; a full timestamp is shown with its time. */
const fmtDeadline = (value: string) => {
  if (!value) return "—";
  if (value.length === 10)
    return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-IN", {
      timeZone: "UTC",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  return new Date(value).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/** Same day collapses to one date with a time range; across days both dates
 *  are spelled out, because "10 Aug, 09:00 am – 05:00 pm" would otherwise be
 *  read as a single day when it is three. */
const fmtRange = (start: string, end: string) => {
  const sameDay =
    new Date(start).toDateString() === new Date(end).toDateString();
  return sameDay
    ? `${fmtDate(start)}, ${fmtTime(start)} – ${fmtTime(end)}`
    : `${fmtDate(start)}, ${fmtTime(start)} – ${fmtDate(end)}, ${fmtTime(end)}`;
};

/** Derived, never stored — a status column would need updating every morning
 *  after an event and nobody would remember. */
const statusOf = (event: EventRow) => {
  const now = Date.now();
  if (now > new Date(event.endDate).getTime())
    return { label: "Past", className: "bg-zinc-100 text-zinc-600" };
  if (now >= new Date(event.startDate).getTime())
    return {
      label: "Happening now",
      className: "bg-emerald-50 text-emerald-700",
    };
  return { label: "Upcoming", className: "bg-indigo-50 text-indigo-700" };
};

const CreateButton = ({ className = "" }: { className?: string }) => (
  <Link
    href="/dashboard/events/new"
    className={`inline-flex items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${className}`}
  >
    <span aria-hidden="true" className="text-base leading-none">
      +
    </span>
    Create event
  </Link>
);

const Page = () => {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get<{ events: EventRow[] }>(
          "/api/createEvent/fetch",
        );
        setEvents(res.data.events);
      } catch (err) {
        setError(
          isAxiosError(err)
            ? (err.response?.data?.message ?? "Could not load events")
            : "Could not load events",
        );
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
            Events
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            {loading
              ? "Loading…"
              : events.length === 0
                ? "Nothing published yet."
                : `${events.length} event${events.length > 1 ? "s" : ""}, newest first.`}
          </p>
        </div>
        {events.length > 0 && <CreateButton />}
      </header>

      {loading ? (
        <div className="space-y-3" aria-busy="true" aria-label="Loading events">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-xl border border-zinc-200 bg-white"
            />
          ))}
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-12 text-center">
          <p className="text-sm font-medium text-red-800">{error}</p>
          <p className="mt-1 text-xs text-red-600">
            Check that the server is running, then try again.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-lg border border-red-300 bg-white px-3 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Try again
          </button>
        </div>
      ) : events.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-white px-6 py-16 text-center">
          <p className="text-sm font-medium text-zinc-900">No events yet</p>
          <p className="mx-auto mt-1 max-w-xs text-sm text-zinc-500">
            Create one and it appears here, and on the website.
          </p>
          {/* An empty screen is an invitation to act, so the action lives in
              it rather than only in the header. */}
          <CreateButton className="mt-5" />
        </div>
      ) : (
        /* Rows rather than a card grid. The poster is supporting detail here,
           not the subject — as a full-width banner it pushed the dates and
           trainers, which are what you actually scan for, below the fold of
           every card. */
        <ul className="space-y-3">
          {events.map((event) => {
            const status = statusOf(event);
            const trainerNames = (event.trainerDetails ?? [])
              .map((t) => t.label)
              .filter(Boolean)
              .join(", ");
            return (
              <li key={event.id}>
                {/* The whole row is the link — there is nothing else clickable
                    inside it, so a separate "view" control would just be one
                    more small target to hit. */}
                <Link
                  href={`/dashboard/events/${event.id}`}
                  className="group grid grid-cols-[5rem_1fr] gap-x-3 gap-y-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:grid-cols-[10rem_1fr] sm:gap-x-4 sm:gap-y-2 sm:p-4 lg:grid-cols-[14rem_1fr]"
                >
                  {/* One grid handles both shapes. At 320px the details drop to
                    their own full-width row, because beside the thumbnail they
                    would have ~172px and a date range needs ~245px. From sm the
                    poster spans both rows so the text sits alongside it, which
                    is what keeps a wide row from looking half empty. */}
                  <div className="aspect-[1200/630] w-full self-center overflow-hidden rounded-lg bg-zinc-100 sm:row-span-2">
                    {event.imageUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={event.imageUrl}
                        alt=""
                        loading="lazy"
                        // contain, not cover: posters are rarely exactly
                        // 1200×630, and cover fills the box by cropping — which
                        // takes the top and bottom off anything taller.
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-700">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                          No poster
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h2 className="min-w-0 break-words font-semibold leading-snug text-zinc-900">
                        {event.name}
                      </h2>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${status.className}`}
                      >
                        {status.label}
                      </span>
                      {/* Answers "is anyone actually coming?" without having
                          to open every event in turn. Only shown once there
                          is someone — a row of zeroes is noise. */}
                      {(event._count?.EventRegistration ?? 0) > 0 && (
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                          {event._count?.EventRegistration} registered
                        </span>
                      )}
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                        {event.mode === "ONLINE" ? "Online" : "In person"}
                      </span>
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                        {event.isPaidEvent ? "Paid" : "Free"}
                      </span>
                    </div>
                  </div>

                  {/* Full width at 320px, beside the poster from sm. */}
                  <div className="col-span-2 min-w-0 sm:col-span-1 sm:col-start-2">
                    <dl className="grid gap-x-5 gap-y-2 text-xs sm:grid-cols-3">
                      <div className="min-w-0">
                        <dt className="uppercase tracking-wider text-zinc-400">
                          Conducted on
                        </dt>
                        <dd className="mt-0.5 font-mono tabular-nums text-zinc-700">
                          {fmtRange(event.startDate, event.endDate)}
                        </dd>
                      </div>
                      <div className="min-w-0">
                        <dt className="uppercase tracking-wider text-zinc-400">
                          Application deadline
                        </dt>
                        <dd className="mt-0.5 font-mono tabular-nums text-zinc-700">
                          {fmtDeadline(event.applicationEndDate)}
                        </dd>
                      </div>
                      <div className="min-w-0">
                        <dt className="uppercase tracking-wider text-zinc-400">
                          By
                        </dt>
                        <dd className="mt-0.5 break-words text-zinc-700">
                          {trainerNames || "Not listed"}
                        </dd>
                      </div>
                    </dl>

                    {/* A span, not a link — the whole row is already the
                        anchor, and nesting one inside another is invalid HTML.
                        This is the visible cue that the row goes somewhere. */}
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <p className="min-w-0 truncate font-mono text-[11px] text-zinc-400">
                        /{event.slug}
                      </p>
                      <span className="shrink-0 text-xs font-medium text-indigo-600 transition group-hover:text-indigo-800">
                        View details{" "}
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                        >
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Page;
