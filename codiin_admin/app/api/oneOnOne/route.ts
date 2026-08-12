import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const searchParams = req.nextUrl.searchParams;
    /* Both fall back rather than trusting the query string: Number(null) is 0,
       which would make skip negative and Postgres reject the query. */
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const take = Math.max(1, Number(searchParams.get("limit")) || 10);
    // Multiplied by `take`, not a fixed 10 — the two only agree while the
    // page size happens to be ten.
    const skip = (page - 1) * take;

    const [data, total] = await Promise.all([
      prisma.oneOnOne.findMany({
        skip,
        take,
        orderBy: { createdAt: "desc" },
      }),
      prisma.oneOnOne.count(),
    ]);

    return NextResponse.json({ data, total });
  } catch (error) {
    console.error("GET /api/oneOnOne failed:", error);
    return NextResponse.json(
      { message: "Could not load mentoring requests" },
      { status: 500 },
    );
  }
}
