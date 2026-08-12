"use client";

import axios, { isAxiosError } from "axios";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";

type OneOnOne = {
  id: string;
  name: string;
  email: string;
  country: string;
  dialCode: string;
  phone: string;
  course: string;
  qualification: string;
  institution: string;
  fieldOfStudy: string;
  yearOfPass: string;
  message: string | null;
  createdAt: string;
};

type Response = { data: OneOnOne[]; total: number };

const PAGE_SIZE = 10;

const fmtWhen = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

/** One labelled value in the phone-width card. */
const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="min-w-0">
    <dt className="text-xs uppercase tracking-wider text-zinc-400">{label}</dt>
    <dd className="mt-0.5 break-words text-sm text-zinc-700">{value || "—"}</dd>
  </div>
);

const Page = () => {
  const [rows, setRows] = useState<OneOnOne[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get<Response>(
          `/api/oneOnOne?page=${page}&limit=${PAGE_SIZE}`,
        );
        setTotal(res.data.total);
        // Page 1 replaces, later pages append — otherwise "Load more" would
        // throw away everything already on screen.
        setRows((prev) =>
          page === 1 ? res.data.data : [...prev, ...res.data.data],
        );
      } catch (err) {
        const message = isAxiosError(err)
          ? (err.response?.data?.message ?? "Could not load mentoring requests")
          : "Could not load mentoring requests";
        setError(message);
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [page]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
            1:1 Mentoring Requests
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            People who asked for a personal mentor on codiin.com.
          </p>
        </div>
        {!loading && !error && rows.length > 0 && (
          <div className="flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-1.5 text-sm">
            <span className="font-medium text-zinc-600">Showing</span>
            <span className="font-semibold text-zinc-900">{rows.length}</span>
            <span className="text-zinc-500">of</span>
            <span className="font-semibold text-indigo-600">{total}</span>
            <span className="text-zinc-500">requests</span>
          </div>
        )}
      </header>

      {loading && rows.length === 0 ? (
        <div className="space-y-2" aria-busy="true" aria-label="Loading requests">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-16 animate-pulse rounded-xl border border-zinc-200 bg-white"
            />
          ))}
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-12 text-center">
          <p className="text-sm font-medium text-red-800">{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-lg border border-red-300 bg-white px-3 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100"
          >
            Try again
          </button>
        </div>
      ) : rows.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-white px-6 py-16 text-center">
          <p className="text-sm font-medium text-zinc-900">No requests yet</p>
          <p className="mx-auto mt-1 max-w-xs text-sm text-zinc-500">
            When someone asks for a mentor on the 1:1 page, they&apos;ll appear
            here so you can call them back.
          </p>
        </div>
      ) : (
        <>
          {/* Cards below lg, a table above. Eleven fields per person cannot be
              read as columns on a phone, and a table that scrolls sideways
              hides the ones you opened the page for. */}
          <ul className="space-y-3 lg:hidden">
            {rows.map((row) => (
              <li
                key={row.id}
                className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="min-w-0 break-words text-sm font-semibold text-zinc-900">
                    {row.name}
                  </p>
                  <span className="font-mono text-xs tabular-nums text-zinc-400">
                    {fmtWhen(row.createdAt)}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-indigo-600">
                  {row.course}
                </p>

                <dl className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-wider text-zinc-400">
                      Email
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${row.email}`}
                        className="break-all text-sm text-indigo-600 hover:underline"
                      >
                        {row.email}
                      </a>
                    </dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-wider text-zinc-400">
                      Phone
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={`tel:${row.dialCode}${row.phone}`}
                        className="text-sm tabular-nums text-indigo-600 hover:underline"
                      >
                        {row.dialCode} {row.phone}
                      </a>
                    </dd>
                  </div>
                  <Detail label="Country" value={row.country} />
                  <Detail label="Qualification" value={row.qualification} />
                  <Detail label="Institution" value={row.institution} />
                  <Detail label="Field of study" value={row.fieldOfStudy} />
                  <Detail label="Year of passing" value={row.yearOfPass} />
                </dl>

                {row.message && (
                  <div className="mt-3 border-t border-zinc-100 pt-3">
                    <p className="text-xs uppercase tracking-wider text-zinc-400">
                      Message
                    </p>
                    <p className="mt-1 whitespace-pre-line break-words text-sm leading-relaxed text-zinc-700">
                      {row.message}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm lg:block">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wider text-zinc-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Contact</th>
                  <th className="px-4 py-3 font-medium">Course</th>
                  <th className="px-4 py-3 font-medium">Education</th>
                  <th className="px-4 py-3 font-medium">Received</th>
                  <th className="w-10 px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {rows.map((row) => {
                  const expanded = open.has(row.id);
                  return (
                    <Fragment key={row.id}>
                      <tr className="align-top hover:bg-zinc-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-zinc-900">{row.name}</p>
                          <p className="mt-0.5 text-xs text-zinc-500">
                            {row.country}
                          </p>
                        </td>
                        <td className="px-4 py-3 text-zinc-600">
                          <a
                            href={`mailto:${row.email}`}
                            className="block break-all hover:text-indigo-600"
                          >
                            {row.email}
                          </a>
                          <a
                            href={`tel:${row.dialCode}${row.phone}`}
                            className="block tabular-nums text-zinc-500 hover:text-indigo-600"
                          >
                            {row.dialCode} {row.phone}
                          </a>
                        </td>
                        <td className="max-w-[12rem] break-words px-4 py-3 text-zinc-600">
                          {row.course}
                        </td>
                        <td className="max-w-[16rem] px-4 py-3 text-zinc-600">
                          <p className="break-words">{row.qualification}</p>
                          <p className="mt-0.5 break-words text-xs text-zinc-500">
                            {row.institution} · {row.fieldOfStudy} ·{" "}
                            {row.yearOfPass}
                          </p>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-xs tabular-nums text-zinc-500">
                          {fmtWhen(row.createdAt)}
                        </td>
                        <td className="px-4 py-3">
                          {/* Only offered when there is something to open. */}
                          {row.message && (
                            <button
                              type="button"
                              onClick={() => toggle(row.id)}
                              aria-expanded={expanded}
                              aria-label={
                                expanded ? "Hide message" : "Show message"
                              }
                              className="rounded p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
                            >
                              <span
                                className={`block text-xs transition-transform ${
                                  expanded ? "rotate-180" : ""
                                }`}
                              >
                                ▼
                              </span>
                            </button>
                          )}
                        </td>
                      </tr>
                      {expanded && row.message && (
                        <tr className="bg-zinc-50/60">
                          <td colSpan={6} className="px-4 pb-4 pt-0">
                            <p className="text-xs uppercase tracking-wider text-zinc-400">
                              Message
                            </p>
                            <p className="mt-1 max-w-3xl whitespace-pre-line break-words text-sm leading-relaxed text-zinc-700">
                              {row.message}
                            </p>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex justify-center">
            {rows.length >= total ? (
              <p className="text-sm text-zinc-400">
                That&apos;s all {total} {total === 1 ? "request" : "requests"}.
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setPage((p) => p + 1)}
                disabled={loading}
                className="flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>{loading ? "Loading…" : "Load more"}</span>
                <span className="font-mono text-xs tabular-nums text-zinc-400">
                  {rows.length}/{total}
                </span>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
