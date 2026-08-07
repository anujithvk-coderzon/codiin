"use client";

import axios, { isAxiosError } from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EventRegistrations, {
  type Registration,
} from "@/components/EventRegistrations";

type Pair = { label: string; description: string };
type Fee = { label: string; amount: number };
type LinkItem = { label: string; link: string };

type EventDetail = {
  id: string;
  slug: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  applicationEndDate: string;
  isPaidEvent: boolean;
  mode: "ONLINE" | "OFFLINE";
  address: string | null;
  imageUrl: string | null;
  whoShouldAttend: string[];
  benefits: string[];
  syllabus: Pair[] | null;
  feesStructure: Fee[] | null;
  importantLinks: LinkItem[] | null;
  trainerDetails: Pair[] | null;
  createdAt: string;
  updatedAt: string;
  /* Optional so the page still renders against a route that has not started
     sending them — the sections below simply do not appear. */
  EventRegistration?: Registration[];
  _count?: { EventRegistration: number };
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

const fmtRange = (start: string, end: string) => {
  const sameDay =
    new Date(start).toDateString() === new Date(end).toDateString();
  return sameDay
    ? `${fmtDate(start)}, ${fmtTime(start)} – ${fmtTime(end)}`
    : `${fmtDate(start)}, ${fmtTime(start)} – ${fmtDate(end)}, ${fmtTime(end)}`;
};

const statusOf = (event: EventDetail) => {
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

const Chip = ({
  children,
  className = "bg-zinc-100 text-zinc-600",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${className}`}
  >
    {children}
  </span>
);

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
    <div className="border-b border-zinc-200 bg-zinc-50/60 px-4 py-3 sm:px-5">
      <h2 className="text-base font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
    </div>
    <div className="p-4 sm:p-5">{children}</div>
  </section>
);

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get<{ event: EventDetail }>(
          `/api/createEvent/fetchSpecific?id=${encodeURIComponent(id)}`,
        );
        setEvent(res.data.event);
      } catch (err) {
        // The route sends its own 404 and 400 wording, so prefer that over a
        // generic failure message.
        setError(
          isAxiosError(err)
            ? (err.response?.data?.message ?? "Could not load the event")
            : "Could not load the event",
        );
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  useEffect(() => {
    if (!confirming) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !deleting) setConfirming(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [confirming, deleting]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete(
        `/api/createEvent/delete?id=${encodeURIComponent(id)}`,
      );
      toast.success("Event deleted");
      // replace, not push: the detail page no longer exists, so Back should
      // not land on a 404.
      router.replace("/dashboard/events");
    } catch (err) {
      toast.error(
        isAxiosError(err)
          ? (err.response?.data?.message ?? "Could not delete the event")
          : "Could not delete the event",
      );
      setDeleting(false);
      setConfirming(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="space-y-4" aria-busy="true" aria-label="Loading event">
          <div className="h-8 w-48 animate-pulse rounded bg-zinc-200" />
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="h-72 animate-pulse rounded-xl bg-zinc-200 lg:col-span-2" />
            <div className="h-48 animate-pulse rounded-xl bg-zinc-200" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-12 text-center">
          <p className="text-sm font-medium text-red-800">
            {error || "Event not found"}
          </p>
          <Link
            href="/dashboard/events"
            className="mt-4 inline-block rounded-lg border border-red-300 bg-white px-3 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Back to events
          </Link>
        </div>
      </div>
    );
  }

  const status = statusOf(event);
  const registrations = event.EventRegistration ?? [];
  // The count is authoritative even when the rows are not requested.
  const registrationCount =
    event._count?.EventRegistration ?? registrations.length;

  const fees = event.feesStructure ?? [];
  const total = fees.reduce((sum, f) => sum + (Number(f.amount) || 0), 0);
  const syllabus = event.syllabus ?? [];
  const trainers = event.trainerDetails ?? [];
  const links = event.importantLinks ?? [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <Link
        href="/dashboard/events"
        className="inline-flex items-center gap-1 rounded text-sm text-zinc-500 transition hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        <span aria-hidden="true">&larr;</span> All events
      </Link>

      <header className="mb-5 mt-3 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Chip className={status.className}>{status.label}</Chip>
            <Chip>{event.mode === "ONLINE" ? "Online" : "In person"}</Chip>
            <Chip>{event.isPaidEvent ? "Paid" : "Free"}</Chip>
          </div>
          <h1 className="mt-2 break-words text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
            {event.name}
          </h1>
          <p className="mt-1 break-all font-mono text-xs text-zinc-400">
            /{event.slug}
          </p>
        </div>

        {/* Full width on a phone, where a wrapped button sitting alone on its
            own line reads as an afterthought. */}
        <div className="flex w-full shrink-0 flex-wrap gap-2 sm:w-auto">
          <Link
            href={`/dashboard/events/${event.id}/edit`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:flex-none"
          >
            Edit event
          </Link>
          {/* Quiet until hovered. A destructive action should be reachable
              without being the loudest thing on the page. */}
          <button
            type="button"
            onClick={() => setConfirming(true)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 sm:flex-none"
          >
            Delete
          </button>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-3 lg:items-start lg:gap-5">
        {/* Main column: the poster and the long-form reading — description,
            chapters, trainer bios. All of it needs the width. */}
        <div className="space-y-4 sm:space-y-5 lg:col-span-2">
          {event.imageUrl && (
            <div className="flex justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={event.imageUrl}
                alt=""
                className="max-h-96 w-auto max-w-full object-contain"
              />
            </div>
          )}

          <Card title="Description">
            <p className="whitespace-pre-line break-words text-sm leading-relaxed text-zinc-700">
              {event.description}
            </p>
          </Card>

          {syllabus.length > 0 && (
            <Card title="Syllabus">
              <ol className="space-y-3">
                {syllabus.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    {/* Numbered because chapters genuinely run in order. */}
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 font-mono text-xs font-semibold tabular-nums text-indigo-700">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="break-words text-sm font-medium text-zinc-900">
                        {item.label}
                      </p>
                      {item.description && (
                        <p className="mt-0.5 break-words text-sm leading-relaxed text-zinc-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </Card>
          )}

          {trainers.length > 0 && (
            <Card title="Trainers">
              <ul className="space-y-3">
                {trainers.map((item, i) => (
                  <li key={i} className="min-w-0">
                    <p className="break-words text-sm font-medium text-zinc-900">
                      {item.label}
                    </p>
                    {item.description && (
                      <p className="mt-0.5 break-words text-sm leading-relaxed text-zinc-600">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          )}

        </div>

        {/* Sidebar: the facts you check rather than read. Sticky, so the dates
            and fees stay on screen while the syllabus scrolls past. */}
        <aside className="space-y-4 sm:space-y-5 lg:sticky lg:top-6">
          <Card title="At a glance">
            <dl className="space-y-3">
              <div className="min-w-0">
                <dt className="text-xs uppercase tracking-wider text-zinc-400">
                  Conducted on
                </dt>
                <dd className="mt-0.5 font-mono text-sm tabular-nums text-zinc-800">
                  {fmtRange(event.startDate, event.endDate)}
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="text-xs uppercase tracking-wider text-zinc-400">
                  Application deadline
                </dt>
                <dd className="mt-0.5 font-mono text-sm tabular-nums text-zinc-800">
                  {fmtDeadline(event.applicationEndDate)}
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="text-xs uppercase tracking-wider text-zinc-400">
                  {event.mode === "ONLINE" ? "Held" : "Address"}
                </dt>
                <dd className="mt-0.5 break-words text-sm text-zinc-800">
                  {event.mode === "ONLINE" ? "Online" : event.address || "—"}
                </dd>
              </div>
              {/* The number people actually open this page to check, so it
                  sits with the other facts rather than only at the bottom
                  of a long list of names. */}
              <div className="min-w-0">
                <dt className="text-xs uppercase tracking-wider text-zinc-400">
                  Registrations
                </dt>
                <dd className="mt-0.5 text-sm text-zinc-800">
                  {registrationCount > 0 ? (
                    <a
                      href="#registrations"
                      className="font-semibold text-indigo-600 underline-offset-2 hover:underline"
                    >
                      {registrationCount}{" "}
                      {registrationCount === 1 ? "person" : "people"}
                    </a>
                  ) : (
                    <span className="text-zinc-500">Nobody yet</span>
                  )}
                </dd>
              </div>
            </dl>
          </Card>

          {event.isPaidEvent && fees.length > 0 && (
            <Card title="Fees">
              <ul className="divide-y divide-zinc-100">
                {fees.map((fee, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-3 py-2 first:pt-0"
                  >
                    <span className="min-w-0 break-words text-sm text-zinc-700">
                      {fee.label}
                    </span>
                    <span className="shrink-0 font-mono text-sm tabular-nums text-zinc-900">
                      &#8377;{fee.amount}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Summed here rather than stored — a saved total goes stale the
                  first time a line item is edited. */}
              <div className="mt-2 flex items-baseline justify-between gap-3 border-t border-zinc-200 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Total
                </span>
                <span className="font-mono text-base font-semibold tabular-nums text-zinc-900">
                  &#8377;{total}
                </span>
              </div>
            </Card>
          )}

          {event.whoShouldAttend.length > 0 && (
            <Card title="Who should attend">
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {event.whoShouldAttend.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-zinc-300" aria-hidden="true">
                      &bull;
                    </span>
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {event.benefits.length > 0 && (
            <Card title="Benefits">
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {event.benefits.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-500" aria-hidden="true">
                      &#10003;
                    </span>
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {links.length > 0 && (
            <Card title="Important links">
              <ul className="space-y-2">
                {links.map((item, i) => (
                  <li key={i} className="min-w-0">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all rounded text-sm text-indigo-600 transition hover:text-indigo-800 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      {item.label}
                    </a>
                    <p className="break-all text-xs text-zinc-400">
                      {item.link}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </aside>
      </div>

      {/* Its own component: this is the one part of the page with state of its
          own — search, sort, paging — and it sits outside the two-column grid
          because seven columns of contact details do not fit in a 625px
          column. */}
      <EventRegistrations
        registrations={registrations}
        count={registrationCount}
      />

      {confirming && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="deleteTitle"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget && !deleting) setConfirming(false);
          }}
        >
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl sm:p-6">
            <h2
              id="deleteTitle"
              className="text-base font-semibold text-zinc-900"
            >
              Delete this event?
            </h2>

            {/* Naming it is the point of the dialog — it is the last chance to
                notice you are on the wrong record. */}
            <p className="mt-2 break-words text-sm leading-relaxed text-zinc-600">
              <span className="font-medium text-zinc-900">{event.name}</span>{" "}
              will be removed from the website
              {event.imageUrl ? ", and its poster deleted" : ""}. This cannot be
              undone.
            </p>

            <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setConfirming(false)}
                disabled={deleting}
                // Autofocused rather than Delete: the safe option should be the
                // one an accidental Enter lands on.
                autoFocus
                className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-60"
              >
                Keep it
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deleting ? "Deleting…" : "Delete event"}
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="mt-5 text-xs text-zinc-400">
        Created {fmtDate(event.createdAt)} &middot; last updated{" "}
        {fmtDate(event.updatedAt)}
      </p>
    </div>
  );
};

export default Page;
