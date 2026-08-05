import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const denied = await requireAdmin();             // ← add
    if (denied) return denied;
  try {
    const searchParams = req.nextUrl.searchParams;
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const take = Math.max(1, Number(searchParams.get("limit")) || 10);
    const skip = (page - 1) * take;

    const [data, total] = await Promise.all([
      prisma.internship.findMany({
        skip,
        take,
        orderBy: { createdAt: "desc" },
      }),
      prisma.internship.count(),
    ]);

    return NextResponse.json({ data, total });
  } catch (error) {
    console.error("GET /api/internship failed:", error);
    return NextResponse.json(
      { message: "Could not load internship requests" },
      { status: 500 },
    );
  }
}
