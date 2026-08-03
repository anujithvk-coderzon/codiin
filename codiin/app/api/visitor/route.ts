import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  try {
    const ip =
  req.headers.get("x-forwarded-for")?.split(",")[0] ||
  req.headers.get("x-real-ip") ||
  "unknown";
    const exist=await prisma.visit.findFirst({where:{ip,createdAt:{gte:today}}})
    if(!exist){
        await prisma.visit.create({data:{ip}})
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("POST /api/visitor failed:", error);
    return new Response(null, { status: 500 });
  }
}
