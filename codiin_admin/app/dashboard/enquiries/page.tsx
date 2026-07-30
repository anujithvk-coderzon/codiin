"use client";

import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  experience: string | null;
  createdAt: string; // ISO string after JSON
};

type Enquiry = {
data:User[],
total:number
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const fmtTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

const Page = () => {
  const [rows, setRows] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page,setPage]=useState(1)
  const [total,setTotal]=useState(0)

  useEffect(() => {
    const load = async () => {
      try {
        if(page===1){
        const res = await axios.get<Enquiry>(`/api/enquiry?page=${page}`);
        setRows(res.data.data);
        setTotal(res.data.total)
        return
        }
        const res = await axios.get<Enquiry>(`/api/enquiry?page=${page}`);
        setRows((prev)=>[...prev,...res.data.data])
      } catch (err) {
        const message = isAxiosError(err)
          ? (err.response?.data?.message ?? "Could not load enquiries")
          : "Could not load enquiries";
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
            Course Enquiry
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Everyone who submitted the registration form on codiin.com.
          </p>
        </div>
        {!loading && !error && rows.length > 0 && (
          <div className="flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-1.5">
  <span className="text-sm font-medium text-zinc-600">
    Showing
  </span>
  <span className="font-semibold text-zinc-900">
    {rows.length}
  </span>
  <span className="text-sm text-zinc-500">
    of
  </span>
  <span className="font-semibold text-indigo-600">
    {total}
  </span>
  <span className="text-sm text-zinc-500">
    enquiries
  </span>
</div>
        )}
      </header>

      {loading ? (
        <div className="space-y-2" aria-busy="true" aria-label="Loading enquiries">
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
        <div className="rounded-xl border border-zinc-200 bg-white px-6 py-16 text-center">
          <p className="text-sm font-medium text-zinc-900">No enquiries yet</p>
          <p className="mx-auto mt-1 max-w-xs text-sm text-zinc-500">
            When someone submits the form on codiin.com, they&apos;ll appear here
            so you can follow up.
          </p>
        </div>
      ) : (
        <>
          {/* Table — lg and up. No height cap: pagination keeps the list short,
              so the page scrolls naturally instead of nesting a scrollbar. */}
          <div className="hidden overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm lg:block">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50">
                  <tr className="border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500">
                    <th scope="col" className="px-5 py-3 font-medium">
                      Name
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Contact
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Program
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Experience
                    </th>
                    <th scope="col" className="px-5 py-3 text-right font-medium">
                      Received
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {rows.map((r) => (
                    <tr key={r.id} className="align-top transition hover:bg-zinc-50">
                      <td className="px-5 py-3.5">
                        <div className="font-medium text-zinc-900">{r.name}</div>
                      </td>
                      <td className="px-5 py-3.5">
                        <a
                          href={`mailto:${r.email}`}
                          className="block max-w-[22ch] truncate rounded text-zinc-700 transition hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                          title={r.email}
                        >
                          {r.email}
                        </a>
                        <a
                          href={`tel:${r.phone}`}
                          className="mt-0.5 block rounded font-mono text-xs tabular-nums text-zinc-500 transition hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        >
                          {r.phone}
                        </a>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="inline-block rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                          {r.program}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-zinc-600">
                        {r.experience || (
                          <span className="text-zinc-400">Not specified</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-5 py-3.5 text-right">
                        <div className="font-mono text-xs tabular-nums text-zinc-700">
                          {fmtDate(r.createdAt)}
                        </div>
                        <div className="font-mono text-xs tabular-nums text-zinc-400">
                          {fmtTime(r.createdAt)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cards — below lg. Five columns cannot fit a phone. */}
          <ul className="space-y-3 lg:hidden">
            {rows.map((r) => (
              <li
                key={r.id}
                className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="min-w-0 break-words font-medium text-zinc-900">
                    {r.name}
                  </p>
                  <span className="shrink-0 text-right font-mono text-[11px] leading-tight tabular-nums text-zinc-400">
                    {fmtDate(r.createdAt)}
                    <br />
                    {fmtTime(r.createdAt)}
                  </span>
                </div>

                <span className="mt-2 inline-block rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                  {r.program}
                </span>

                <dl className="mt-3 grid gap-1.5 text-sm">
                  <div className="flex gap-2">
                    <dt className="w-16 shrink-0 pt-0.5 text-[11px] uppercase tracking-wider text-zinc-400">
                      Email
                    </dt>
                    <dd className="min-w-0 break-all">
                      <a
                        href={`mailto:${r.email}`}
                        className="rounded text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                      >
                        {r.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-16 shrink-0 pt-0.5 text-[11px] uppercase tracking-wider text-zinc-400">
                      Phone
                    </dt>
                    <dd>
                      <a
                        href={`tel:${r.phone}`}
                        className="rounded font-mono text-xs tabular-nums text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                      >
                        {r.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-16 shrink-0 pt-0.5 text-[11px] uppercase tracking-wider text-zinc-400">
                      Level
                    </dt>
                    <dd className="min-w-0 break-words text-zinc-600">
                      {r.experience || (
                        <span className="text-zinc-400">Not specified</span>
                      )}
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center">
            {rows.length === total ?
            <p className="text-sm font-medium text-zinc-500">
  No more enquiries to load.
</p>
          :
         <button
  type="button"
  onClick={() => setPage((p) => p + 1)}
  className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
>
  <span>Load more</span>

  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-600">
    {rows.length}/{total}
  </span>
</button>
          }
            
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
