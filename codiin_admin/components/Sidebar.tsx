"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const NAV = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/enquiries", label: "Course Enquiry" },
  { href: "/dashboard/internships", label: "Internship Requests" },
  { href: "/dashboard/one-on-one", label: "1:1 Mentoring" },
  { href: "/dashboard/events", label: "Events" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await axios.post("/api/logout");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("Could not log out. Please try again.");
      setLoggingOut(false);
    }
  };

  return (
    <aside className="flex w-full shrink-0 flex-col bg-[#0f172a] md:h-screen md:w-60 md:sticky md:top-0">
      <div className="flex items-center gap-2 px-5 py-5">
        <Image
          src="/codiin-logo-light.svg"
          alt="CODiiN"
          width={104}
          height={26}
          className="h-6 w-auto"
        />
        <span className="ml-auto rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-300">
          Admin
        </span>
      </div>

      {/* Wraps on mobile, where this is a horizontal bar. Three labels —
          Dashboard, Course Enquiry, Internship Requests — are wider than a
          320px screen, and without flex-wrap the last one is simply cut off
          with no way to reach it. */}
      <nav className="flex flex-wrap gap-1 px-3 pb-2 md:flex-col md:flex-nowrap md:pb-0">
        {NAV.map((item) => {
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                active
                  ? "bg-indigo-600 font-medium text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/10 p-3">
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-50"
        >
          {loggingOut ? "Logging out…" : "Log out"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
