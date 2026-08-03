import Sidebar from "@/components/Sidebar";
import { getSession } from "@/lib/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

// Lives here rather than on the page: both dashboard pages are Client
// Components now, and a Client Component cannot export metadata.
export const metadata: Metadata = { title: "Dashboard" };

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session=await getSession()
  if(!session) {
    redirect('/')
  }
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 md:flex-row">
      <Sidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
