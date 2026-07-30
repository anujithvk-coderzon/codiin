import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Dashboard" };

type Registration = {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  experience: string | null;
  createdAt: Date;
};

/**
 * TODO — connect to the database.
 *
 * The admin schema has no models yet. Once you add the `User` model
 * (copy it from ../codiin/prisma/schema.prisma) and run `prisma generate`,
 * replace the body of this function with:
 *
 *   return prisma.user.findMany({ orderBy: { createdAt: "desc" }, take: 25 });
 */
async function getRegistrations(): Promise<Registration[]> {
  return [];
}

function relativeTime(date: Date) {
  const minutes = Math.round((Date.now() - date.getTime()) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

function isToday(date: Date) {
  const now = new Date();
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}

export default async function DashboardPage() {
    
  const registrations = await getRegistrations();

  const total = registrations.length;
  const today = registrations.filter((r) => isToday(r.createdAt)).length;

  const programCounts = registrations.reduce<Record<string, number>>((acc, r) => {
    acc[r.program] = (acc[r.program] ?? 0) + 1;
    return acc;
  }, {});
  const topProgram =
    Object.entries(programCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";

  const stats = [
    { label: "Total enquiries", value: String(total) },
    { label: "New today", value: String(today) },
    { label: "Most requested", value: topProgram },
  ];

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

      {/* Context, deliberately quiet — the list below is the actual work. */}
      <dl className="mb-8 grid grid-cols-2 overflow-hidden rounded-xl border border-zinc-200 bg-white sm:grid-cols-3 sm:divide-x sm:divide-zinc-200">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 py-3.5">
            <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {stat.label}
            </dt>
            <dd className="mt-1 font-mono text-lg tabular-nums text-zinc-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <section>
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-zinc-900">
            Latest enquiries
          </h2>
          {total > 0 && (
            <Link
              href="/dashboard/enquiries"
              className="rounded text-xs font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              View all
            </Link>
          )}
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
          {total === 0 ? (
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
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500">
                    <th className="px-4 py-2.5 font-medium">Name</th>
                    <th className="px-4 py-2.5 font-medium">Program</th>
                    <th className="px-4 py-2.5 font-medium">Phone</th>
                    <th className="px-4 py-2.5 text-right font-medium">
                      Received
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {registrations.map((r) => (
                    <tr key={r.id} className="hover:bg-zinc-50">
                      <td className="px-4 py-3">
                        <div className="font-medium text-zinc-900">{r.name}</div>
                        <div className="text-xs text-zinc-500">{r.email}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                          {r.program}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {/* Calling is the real next action — make it one tap. */}
                        <a
                          href={`tel:${r.phone}`}
                          className="rounded font-mono text-xs tabular-nums text-zinc-700 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        >
                          {r.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-xs tabular-nums text-zinc-500">
                        {relativeTime(r.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
