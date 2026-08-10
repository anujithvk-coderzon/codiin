"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Slice = { name: string; count: number };
type DayStats = {
  date: string;
  /** The only days that may be picked, newest first. */
  days: string[];
  total: number;
  /** Crawlers, counted separately so they do not inflate the headline. */
  bots: number;
  sources: Slice[];
  paths: Slice[];
  campaigns: Slice[];
};

// "10 Aug 2026, Mon"
const label = (day: string) =>
  new Date(`${day}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  });

/* A busy day lands on twenty different article pages, nearly all of them
   once. Showing every one buries the three that matter under a list of ones. */
const TOP = 6;

/** One breakdown — sources, or pages, or campaigns. */
const Breakdown = ({
  title,
  rows,
  total,
}: {
  title: string;
  rows: Slice[];
  total: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  const shown = expanded ? rows : rows.slice(0, TOP);
  const hidden = rows.length - shown.length;

  return (
    <div className="min-w-0 rounded-lg border border-zinc-200 bg-zinc-50/60 p-3.5">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        {title}
      </h3>

      <ul className="space-y-2.5">
        {shown.map((row, i) => {
          const percent = Math.round((row.count / total) * 100);
          return (
            <li key={row.name} className="min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="min-w-0 break-all text-sm text-zinc-700">
                  {row.name}
                </span>
                <span className="shrink-0 font-mono text-sm tabular-nums text-zinc-900">
                  {row.count}
                  <span className="ml-1.5 text-xs font-normal text-zinc-400">
                    {percent}%
                  </span>
                </span>
              </div>
              {/* Widths are against the day's total, not the biggest row, so
                  the bars in a column add up to the whole day and can be read
                  against each other. The leader is solid and the rest lighter,
                  so the ranking is visible without reading the numbers. */}
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-zinc-200/70">
                <div
                  className={`h-full rounded-full ${
                    i === 0 ? "bg-indigo-500" : "bg-indigo-300"
                  }`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      {rows.length > TOP && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-medium text-indigo-600 transition hover:text-indigo-800"
        >
          {expanded ? "Show less" : `Show ${hidden} more`}
        </button>
      )}
    </div>
  );
};

const VisitsByDay = ({ onClose }: { onClose: () => void }) => {
  /* Starts empty on purpose. The route treats a missing date as today, and
     its answer tells us which day that was — so today is never worked out in
     the browser, where it could disagree with the server. */
  const [date, setDate] = useState("");
  const [days, setDays] = useState<string[]>([]);
  const [stats, setStats] = useState<DayStats | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  useEffect(() => {
    axios
      .get<DayStats>(`/api/visitorStats${date ? `?date=${date}` : ""}`)
      .then((res) => {
        setStats(res.data);
        // First load: adopt whatever the server called today.
        if (!date) setDate(res.data.date);
        setDays(res.data.days);
      })
      .catch(() => setFailed(true));
  }, [date]);

  // Only the breakdowns with something in them, so an empty Campaign does not
  // leave a hole in the row.
  const panels = stats
    ? [
        { title: "Came from", rows: stats.sources },
        { title: "Landed on", rows: stats.paths },
        { title: "Campaign", rows: stats.campaigns },
      ].filter((panel) => panel.rows.length > 0)
    : [];

  const columns =
    panels.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  /* "Loaded, but for the day you were looking at a moment ago" counts as not
     ready — the panel must not show yesterday's figures under today's date. */
  const ready = stats && stats.date === date;

  return (
    <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl">
      <header className="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3 sm:px-5">
        <h2 className="text-sm font-semibold text-zinc-900">Visitors</h2>

        <div className="flex items-center gap-2">
          {/* A dropdown, not a date input. A native calendar still scrolls
              through months and years even with min and max set — those only
              stop a date being chosen, not reached. */}
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            disabled={days.length === 0 || failed}
            aria-label="Pick a date"
            /* text-base below sm because iOS zooms the page in on any input
               smaller than 16px. */
            className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-base font-medium text-zinc-900 outline-none transition hover:border-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-400 sm:text-sm"
          >
            {days.length === 0 && (
              <option value="">{failed ? "Unavailable" : "Loading…"}</option>
            )}
            {days.map((day, i) => (
              <option key={day} value={day}>
                {i === 0 ? "Today" : i === 1 ? "Yesterday" : label(day)}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xl leading-none text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            &times;
          </button>
        </div>
      </header>

      {failed ? (
        <p className="px-4 py-12 text-center text-sm text-zinc-500 sm:px-5">
          Could not load visitor stats.
        </p>
      ) : !ready ? (
        <div className="space-y-3 p-4 sm:p-5" aria-busy="true">
          <div className="h-9 w-32 animate-pulse rounded bg-zinc-100" />
          <div className="h-32 animate-pulse rounded-lg bg-zinc-100" />
        </div>
      ) : (
        <>
          {/* The headline figure, given room — everything below it is a way of
              splitting this one number up. */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-zinc-200 px-4 py-4 sm:px-5">
            <span className="font-mono text-3xl leading-none tabular-nums text-zinc-900">
              {stats.total}
            </span>
            <span className="text-sm text-zinc-500">
              {stats.total === 1 ? "visit" : "visits"} &middot;{" "}
              {label(stats.date)}
            </span>
            {stats.bots > 0 && (
              <span
                className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500"
                title="Search engines and link previews, excluded from the figures above"
              >
                +{stats.bots} bot{stats.bots === 1 ? "" : "s"}
              </span>
            )}
          </div>

          <div className="p-4 sm:p-5">
            {stats.total === 0 ? (
              <p className="py-8 text-center text-sm text-zinc-500">
                {stats.bots > 0
                  ? "Only crawlers on this day — no real visitors."
                  : "Nobody visited on this day."}
              </p>
            ) : (
              <div className={`grid gap-3 ${columns}`}>
                {panels.map((panel) => (
                  <Breakdown
                    key={panel.title}
                    title={panel.title}
                    rows={panel.rows}
                    total={stats.total}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default VisitsByDay;
