"use client";

import { useState } from "react";

export type Registration = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  college: string;
  course: string;
  yearOfPass: string;
  howYouKnow: string;
  createdAt: string;
};

/** yearOfPass is a DateTime holding what is really just a year. */
const fmtYear = (iso: string) =>
  iso ? String(new Date(iso).getUTCFullYear()) : "—";

const fmtDay = (iso: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

/* Past this, a single list stops being something anyone reads and becomes
   something they scroll past. */
const PAGE_SIZE = 25;

type SortKey = "name" | "college" | "yearOfPass" | "createdAt";
type SortDir = "asc" | "desc";

/* In the order they should be read, not in the order they happen to be
   sortable — deriving the header from the sortable ones and appending the
   rest put "Registered" between "Passing" and "Course" and split the college
   from the course someone studies there. `key: null` is a column you cannot
   sort by, which is a property of the column, not its position. */
const COLUMNS: { key: SortKey | null; label: string }[] = [
  { key: "name", label: "Name" },
  { key: null, label: "Contact" },
  { key: "college", label: "College" },
  { key: null, label: "Course" },
  { key: "yearOfPass", label: "Passing" },
  { key: null, label: "Heard via" },
  // Metadata rather than something about the person, so it sits last.
  { key: "createdAt", label: "Registered" },
];

/** One labelled value in the phone-width card. */
const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="min-w-0">
    <dt className="text-xs uppercase tracking-wider text-zinc-400">{label}</dt>
    <dd className="mt-0.5 break-words text-sm text-zinc-700">{value || "—"}</dd>
  </div>
);

/**
 * Who signed up for an event, sortable and paged.
 *
 * Its own component rather than more of the event page — this is the part of
 * that page with state of its own, and the page was long enough already.
 */
const EventRegistrations = ({
  registrations,
  /** Authoritative even when the rows themselves were not requested. */
  count,
}: {
  registrations: Registration[];
  count: number;
}) => {
  const [sortKey, setSortKey] = useState<SortKey>("createdAt");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [page, setPage] = useState(1);

  const sorted = [...registrations].sort((a, b) => {
    /* Dates compare as timestamps and everything else as text. localeCompare
       so "Anu" and "anu" land together rather than all the capitals first. */
    const direction = sortDir === "asc" ? 1 : -1;
    if (sortKey === "createdAt" || sortKey === "yearOfPass")
      return (
        (new Date(a[sortKey]).getTime() - new Date(b[sortKey]).getTime()) *
        direction
      );
    return a[sortKey].localeCompare(b[sortKey], "en", { sensitivity: "base" }) * direction;
  });

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  /* Clamped during render rather than corrected by an effect, so a page that
     no longer exists can never be rendered even for a frame. */
  const current = Math.min(page, totalPages);
  const start = (current - 1) * PAGE_SIZE;
  const shown = sorted.slice(start, start + PAGE_SIZE);

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      return;
    }
    setSortKey(key);
    // Dates are most useful newest-first; names A–Z. Picking the direction
    // per column beats making someone click twice to get the obvious one.
    setSortDir(key === "createdAt" || key === "yearOfPass" ? "desc" : "asc");
  };

  const sortIndicator = (key: SortKey) =>
    key === sortKey ? (sortDir === "asc" ? "▲" : "▼") : "";

  return (
    <section
      id="registrations"
      className="mt-6 scroll-mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm sm:mt-8"
    >
      <header className="flex min-w-0 items-baseline gap-2 border-b border-zinc-200 bg-zinc-50/70 px-4 py-3 sm:px-5">
        <h2 className="text-sm font-semibold text-zinc-900">Registrations</h2>
        <span className="text-sm text-zinc-500">
          {count} {count === 1 ? "person" : "people"}
        </span>
      </header>

      {registrations.length === 0 ? (
        <p className="px-4 py-10 text-center text-sm text-zinc-500 sm:px-5">
          {count > 0
            ? "Registrations exist but were not loaded with this event."
            : "Nobody has registered for this event yet."}
        </p>
      ) : (
        <>
          {/* Cards below md, a table above. Eight columns of contact details
              cannot be read at 320px, and a table that scrolls sideways hides
              exactly the columns you opened the page for. */}
          <ul className="divide-y divide-zinc-100 md:hidden">
            {shown.map((person) => (
              <li key={person.id} className="px-4 py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="min-w-0 break-words text-sm font-semibold text-zinc-900">
                    {person.name}
                  </p>
                  <span className="font-mono text-xs tabular-nums text-zinc-400">
                    {fmtDay(person.createdAt)}
                  </span>
                </div>
                <dl className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-wider text-zinc-400">
                      Email
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${person.email}`}
                        className="break-all text-sm text-indigo-600 hover:underline"
                      >
                        {person.email}
                      </a>
                    </dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-wider text-zinc-400">
                      Mobile
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={`tel:${person.mobile}`}
                        className="text-sm tabular-nums text-indigo-600 hover:underline"
                      >
                        {person.mobile}
                      </a>
                    </dd>
                  </div>
                  <Detail label="College" value={person.college} />
                  <Detail label="Course" value={person.course} />
                  <Detail
                    label="Year of passing"
                    value={fmtYear(person.yearOfPass)}
                  />
                  <Detail label="Heard via" value={person.howYouKnow} />
                </dl>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <table className="w-full text-left text-sm">
              {/* Sticky so the columns stay named through twenty-five rows. */}
              <thead className="sticky top-0 z-10 border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wider text-zinc-500">
                <tr>
                  {COLUMNS.map((column) => (
                    <th
                      key={column.label}
                      scope="col"
                      className="px-4 py-2.5 font-medium"
                      aria-sort={
                        column.key && sortKey === column.key
                          ? sortDir === "asc"
                            ? "ascending"
                            : "descending"
                          : undefined
                      }
                    >
                      {column.key ? (
                        <button
                          type="button"
                          onClick={() => toggleSort(column.key as SortKey)}
                          className="flex items-center gap-1 uppercase tracking-wider transition hover:text-zinc-800"
                        >
                          {column.label}
                          <span className="text-[9px]">
                            {sortIndicator(column.key)}
                          </span>
                        </button>
                      ) : (
                        column.label
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {shown.map((person) => (
                  <tr
                    key={person.id}
                    className="align-top transition hover:bg-zinc-50"
                  >
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      {person.name}
                    </td>
                    <td className="px-4 py-3 text-zinc-600">
                      <a
                        href={`mailto:${person.email}`}
                        className="block break-all hover:text-indigo-600"
                      >
                        {person.email}
                      </a>
                      <a
                        href={`tel:${person.mobile}`}
                        className="mt-0.5 block tabular-nums text-zinc-500 hover:text-indigo-600"
                      >
                        {person.mobile}
                      </a>
                    </td>
                    {/* Capped, because a college name runs to sixty characters
                        and would otherwise take the width from every other
                        column. */}
                    <td className="max-w-[15rem] break-words px-4 py-3 text-zinc-600">
                      {person.college}
                    </td>
                    <td className="max-w-[10rem] break-words px-4 py-3 text-zinc-600">
                      {person.course}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-zinc-600">
                      {fmtYear(person.yearOfPass)}
                    </td>
                    <td className="px-4 py-3 text-zinc-600">
                      {person.howYouKnow}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-xs tabular-nums text-zinc-500">
                      {fmtDay(person.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Only worth the space once there is more than one page of them. */}
          {totalPages > 1 && (
            <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 bg-zinc-50/70 px-4 py-3 text-sm sm:px-5">
              <p className="text-zinc-500 tabular-nums">
                Showing {start + 1}–{start + shown.length} of {sorted.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage(current - 1)}
                  disabled={current === 1}
                  className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 font-medium text-zinc-700 transition hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                <span className="tabular-nums text-zinc-500">
                  {current} / {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setPage(current + 1)}
                  disabled={current === totalPages}
                  className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 font-medium text-zinc-700 transition hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </footer>
          )}
        </>
      )}
    </section>
  );
};

export default EventRegistrations;
