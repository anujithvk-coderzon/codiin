
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export async function GET() {
  const denied = await requireAdmin();             // ← add
    if (denied) return denied;
const IST= 5*60*60*1000
const shifted=new Date(Date.now()+IST)
shifted.setUTCHours(0,0,0,0)
const today=new Date(shifted.getTime()-IST)
  try {
    const [todayEnquiryCount, todayVisitorCount] = await Promise.all([
        prisma.user.count({where:{createdAt:{gte:today}}}),
        prisma.visit.count({where:{createdAt:{gte:today}}})
    ])
    return NextResponse.json({enquiry:todayEnquiryCount,visits:todayVisitorCount})
}catch (error) {
    console.error("GET /api/dashboardStats failed:", error);
    return new Response(null, { status: 500 });
  }
}
