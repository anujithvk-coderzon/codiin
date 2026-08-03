"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  createdAt: string; // an ISO string once it has been through JSON, not a Date
};

type EnquiryResponse = {
  data: Enquiry[];
  total: number;
};

// Mirrors what /api/dashboardStats returns — singular `enquiry`, plural
// `visits`, matching the route rather than tidying the names here, where a
// mismatch would silently read undefined.
type TodayStats = {
  enquiry: number;
  visits: number;
};

const RECENT_COUNT = 5;

function relativeTime(iso: string) {
  const date = new Date(iso);
  const minutes = Math.round((Date.now() - date.getTime()) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

export default function DashboardPage() {
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [todayEnquiries, setTodayEnquiries] = useState(0);
  const [todayvisits, setTodayVisits] = useState(0);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/enquiry?page=1&limit=${RECENT_COUNT}`,
        );
        if (!response.ok) throw new Error("Request failed");
        const body: EnquiryResponse = await response.json();
        setRows(body.data);
        setTotal(body.total);
      } catch (err) {
        console.error("Failed to load recent enquiries:", err);
        setError("Could not load enquiries");
      } finally {
        setLoading(false);
      }
    };
    const fetchTodayStats = async () => {
      try {
        const response = await fetch("/api/dashboardStats");
        if (!response.ok) throw new Error("Request failed");
        const body: TodayStats = await response.json();
        setTodayEnquiries(body.enquiry);
        setTodayVisits(body.visits);
      } catch (err) {
        console.error("Failed to load today's stats:", err);
      }
    };

    fetchData();
    fetchTodayStats();
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 md:px-8 md:py-10">
      <header className="mb-7">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          {new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </header>

      {/* Context, deliberately quiet — the list below is the actual work, so
          these read as figures rather than dashboard furniture. Stacked on a
          phone: three columns of numbers on a 320px screen wraps every label
          onto two lines. */}
      <dl className="mb-8 grid grid-cols-1 divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {[
          { label: "Visitors today", value: todayvisits },
          { label: "Enquiries today", value: todayEnquiries },
          { label: "Total enquiries", value: total },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-3.5">
            <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {stat.label}
            </dt>
            <dd className="mt-1 font-mono text-lg tabular-nums text-zinc-900">
              {loading ? (
                // A bare 0 while the request is still out reads as a real
                // count, and "no visitors today" is the wrong thing to say
                // before the answer has arrived.
                <span className="inline-block h-6 w-10 animate-pulse rounded bg-zinc-100 align-middle" />
              ) : (
                stat.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <section>
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-zinc-900">
            Latest enquiries
          </h2>
          {!loading && !error && total > 0 && (
            <span className="text-xs text-zinc-500">
              {Math.min(RECENT_COUNT, total)} of {total}
            </span>
          )}
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
          {loading ? (
            <div
              className="divide-y divide-zinc-100"
              aria-busy="true"
              aria-label="Loading recent enquiries"
            >
              {Array.from({ length: RECENT_COUNT }, (_, i) => (
                <div key={i} className="h-14 animate-pulse bg-zinc-50" />
              ))}
            </div>
          ) : error ? (
            <div className="px-6 py-14 text-center">
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
          ) : rows.length === 0 ? (
            <div className="px-6 py-14 text-center">
              <p className="text-sm font-medium text-zinc-900">
                No enquiries yet
              </p>
              <p className="mx-auto mt-1 max-w-xs text-sm text-zinc-500">
                When someone submits the form on codiin.com, they&apos;ll appear
                here so you can follow up.
              </p>
            </div>
          ) : (
            <>
              <table className="w-full table-fixed text-left text-sm">
                <colgroup>
                  <col className="w-[38%]" />
                  <col className="w-[24%]" />
                  <col className="w-[22%]" />
                  <col className="w-[16%]" />
                </colgroup>
                <thead>
                  <tr className="border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500">
                    <th scope="col" className="px-4 py-2.5 font-medium">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-2.5 font-medium">
                      Program
                    </th>
                    <th scope="col" className="px-4 py-2.5 font-medium">
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2.5 text-right font-medium"
                    >
                      Received
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {rows.map((r) => (
                    <tr key={r.id} className="transition hover:bg-zinc-50">
                      <td className="px-4 py-3">
                        <div className="truncate font-medium text-zinc-900">
                          {r.name}
                        </div>
                        <div className="truncate text-xs text-zinc-500">
                          {r.email}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block max-w-full truncate rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                          {r.program}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {/* Calling is the real next action — make it one tap. */}
                        <a
                          href={`tel:${r.phone}`}
                          className="rounded font-mono text-xs tabular-nums text-zinc-700 transition hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        >
                          {r.phone}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right font-mono text-xs tabular-nums text-zinc-500">
                        {relativeTime(r.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Sits inside the card, on its bottom border, so it reads as the
                  end of this list rather than a stray control on the page. The
                  count is in the label because "View all" on its own gives no
                  sense of whether that means six enquiries or six hundred. */}
              <Link
                href="/dashboard/enquiries"
                className="flex items-center justify-center gap-1.5 border-t border-zinc-200 bg-zinc-50/60 px-4 py-3 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-400"
              >
                View all {total} {total === 1 ? "enquiry" : "enquiries"}
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path d="M7 4l6 6-6 6" />
                </svg>
              </Link>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
