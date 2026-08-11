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
  browsers: Slice[];
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

/** One breakdown — sources, or pages, or campaigns, or browsers. */
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
    <section className="min-w-0 rounded-lg border border-zinc-200 bg-zinc-50/60 p-3 sm:p-3.5">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        {title}
      </h3>

      <ul className="space-y-2.5">
        {shown.map((row, i) => {
          const percent = Math.round((row.count / total) * 100);
          return (
            <li key={row.name} className="min-w-0">
              {/* items-start, not baseline: a label that wraps to three lines
                  would otherwise drag the number down with it. */}
              <div className="flex items-start justify-between gap-2">
                {/* min-w-0 lets this shrink; without it the flex item refuses
                    to go below its content width and pushes the number out. */}
                <span className="min-w-0 break-words text-sm leading-snug text-zinc-700">
                  {row.name}
                </span>
                {/* shrink-0 so the figure is never the thing that wraps. */}
                <span className="shrink-0 font-mono text-sm tabular-nums text-zinc-900">
                  {row.count}
                  <span className="ml-1.5 text-xs font-normal text-zinc-400">
                    {percent}%
                  </span>
                </span>
              </div>
              {/* Widths are against the day's total, not the biggest row, so a
                  column of bars adds up to the whole day. The leader is solid
                  and the rest lighter, so the ranking reads without numbers. */}
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-zinc-200/70">
                <div
                  className={`h-full rounded-full transition-all ${
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
          aria-expanded={expanded}
          className="mt-3 rounded text-xs font-medium text-indigo-600 transition hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          {expanded ? "Show less" : `Show ${hidden} more`}
        </button>
      )}
    </section>
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
        { title: "Browser", rows: stats.browsers },
      ].filter((panel) => panel.rows.length > 0)
    : [];

  /* "Loaded, but for the day you were looking at a moment ago" counts as not
     ready — the panel must not show yesterday's figures under today's date. */
  const ready = stats && stats.date === date;

  return (
    /* A column with a capped height: the header stays put and only the middle
       scrolls. Without the cap, expanding a breakdown grows the panel past the
       viewport and — because the backdrop centres it — the top goes off screen
       with no way to reach it. min-h-0 is what allows the middle to shrink;
       a flex child defaults to its content size and would refuse to. */
    <section className="flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl border border-zinc-200 bg-white shadow-2xl sm:max-h-[85vh] sm:rounded-xl">
      <header className="flex shrink-0 flex-wrap items-center gap-2 border-b border-zinc-200 px-4 py-3 sm:px-5">
        <h2 className="mr-auto text-sm font-semibold text-zinc-900">Visitors</h2>

        {/* Ordered so a narrow screen reads title · close, then the picker
            full-width underneath; from sm they sit on one line. */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="order-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xl leading-none text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:order-3"
        >
          &times;
        </button>

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
          className="order-3 w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-base font-medium text-zinc-900 outline-none transition hover:border-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-400 sm:order-2 sm:w-auto sm:text-sm"
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
      </header>

      {/* The only scrolling region. overscroll-contain stops a flick at the
          bottom from scrolling the dashboard behind it. */}
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
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
            {/* The headline figure — everything below it is a way of splitting
                this one number up. Sticky so it stays legible while the
                breakdowns scroll under it. */}
            <div className="sticky top-0 z-10 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-zinc-200 bg-white/95 px-4 py-4 backdrop-blur sm:px-5">
              <span className="font-mono text-3xl leading-none tabular-nums text-zinc-900">
                {stats.total}
              </span>
              <span className="min-w-0 text-sm text-zinc-500">
                {stats.total === 1 ? "visit" : "visits"} &middot;{" "}
                {label(stats.date)}
              </span>
              {stats.bots > 0 && (
                <span
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500"
                  title="Crawlers, not counted above"
                >
                  +{stats.bots} bot{stats.bots === 1 ? "" : "s"}
                </span>
              )}
            </div>

            <div className="p-4 sm:p-5">
              {stats.total === 0 ? (
                <p className="py-8 text-center text-sm text-zinc-500">
                  Nobody visited on this day.
                </p>
              ) : (
                /* Two columns at most. This panel is 768px wide at its widest,
                   so three columns leaves ~230px each — not enough for a path
                   like /full-stack-python/articles/virtual-environments.
                   items-start keeps each card its own height rather than
                   stretching every card to match the tallest one when one is
                   expanded. */
                <div className="grid items-start gap-3 md:grid-cols-2">
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
      </div>
    </section>
  );
};

export default VisitsByDay;
