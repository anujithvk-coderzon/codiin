import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const IST = 5.5 * 60 * 60 * 1000;

/** Counts the values of one field, biggest first. */
const tally = (values: (string | null)[]) => {
  const counts: Record<string, number> = {};
  for (const value of values) {
    const key = value || "Unknown";
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};

export async function GET(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;

  /* No date means today. Worked out here rather than in the browser so the
     server decides what "today" is, and both agree. Shifting by IST before
     slicing gives the Indian calendar date — toISOString alone reads UTC,
     which has already rolled over by 5:30am here. */
  const today = new Date(Date.now() + IST).toISOString().slice(0, 10);
  /* The thirty days the panel covers, newest first. Sent rather than built
     in the browser so the list and the data agree on what today is, and so
     the picker can only ever offer a day this route will answer for. */
  const days = Array.from({ length: 30 }, (_, i) =>
    new Date(Date.now() + IST - i * 86400000).toISOString().slice(0, 10),
  );

  const asked = req.nextUrl.searchParams.get("date");
  const date = asked ?? today;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date))
    return NextResponse.json({ message: "Bad date" }, { status: 400 });

  // The +05:30 in the string is what makes this midnight in India rather than
  // midnight wherever the server happens to be running.
  const start = new Date(`${date}T00:00:00+05:30`);
  const end = new Date(start.getTime() + 86400000);

  try {
    const visits = await prisma.visit.findMany({
      where: { createdAt: { gte: start, lt: end } },
      select: { source: true, path: true, campaign: true },
    });

    return NextResponse.json({
      date,
      days,
      total: visits.length,
      sources: tally(visits.map((v) => v.source)),
      paths: tally(visits.map((v) => v.path)),
      // Only ads carry a campaign, so most visits have none — listing
      // "Unknown: 40" would be noise rather than information.
      campaigns: tally(visits.map((v) => v.campaign).filter(Boolean)),
    });
  } catch (error) {
    console.error("GET /api/visitorStats failed:", error);
    return NextResponse.json(
      { message: "Could not load visitor stats" },
      { status: 500 },
    );
  }
}
