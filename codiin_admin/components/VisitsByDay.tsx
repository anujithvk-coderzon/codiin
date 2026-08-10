"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Slice = { name: string; count: number };
type DayStats = {
  date: string;
  /** The only days that may be picked, newest first. */
  days: string[];
  total: number;
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

/** One breakdown — sources, or pages, or campaigns. */
const Breakdown = ({ title, rows }: { title: string; rows: Slice[] }) => {
  if (rows.length === 0) return null;
  // Against the biggest row rather than the total: five even sources would
  // otherwise all render as slivers.
  const largest = Math.max(1, ...rows.map((row) => row.count));

  return (
    <div className="min-w-0">
      <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        {title}
      </h3>
      <ul className="mt-2 space-y-2">
        {rows.map((row) => (
          <li key={row.name} className="min-w-0">
            <div className="flex items-baseline justify-between gap-3">
              <span className="min-w-0 truncate text-sm text-zinc-700">
                {row.name}
              </span>
              <span className="font-mono text-sm tabular-nums text-zinc-900">
                {row.count}
              </span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-indigo-500"
                style={{ width: `${(row.count / largest) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
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

  return (
    <section className="rounded-xl border border-zinc-200 bg-white shadow-xl">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-zinc-900">Visitors</h2>
          <p className="mt-0.5 text-xs text-zinc-500">
            {failed ? "Unavailable" : date ? label(date) : "Loading…"}
          </p>
        </div>

        <div className="flex items-center gap-2">
        {/* A dropdown, not a date input. A native calendar still scrolls
            through months and years even with min and max set — those only
            stop a date being chosen, not reached. Thirty fixed options
            cannot be navigated out of at all. */}
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

      <div className="p-4 sm:p-5">
        {failed ? (
          <p className="py-8 text-center text-sm text-zinc-500">
            Could not load visitor stats.
          </p>
        ) : !stats || stats.date !== date ? (
          // Also covers "loaded, but for the day you were looking at a moment
          // ago" — the panel should not show yesterday's figures under today's
          // heading while the new request is out.
          <div className="space-y-2" aria-busy="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-5 animate-pulse rounded bg-zinc-100" />
            ))}
          </div>
        ) : stats.total === 0 ? (
          <p className="py-8 text-center text-sm text-zinc-500">
            No visits on this day.
          </p>
        ) : (
          <>
            <p className="mb-5 text-sm text-zinc-500">
              <span className="font-mono text-lg tabular-nums text-zinc-900">
                {stats.total}
              </span>{" "}
              {stats.total === 1 ? "visit" : "visits"}
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Breakdown title="Came from" rows={stats.sources} />
              <Breakdown title="Landed on" rows={stats.paths} />
              <Breakdown title="Campaign" rows={stats.campaigns} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VisitsByDay;
