import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const IST = 5.5 * 60 * 60 * 1000;
    const shifted = new Date(Date.now()+IST);
    shifted.setUTCHours(0, 0, 0, 0);
    const today = new Date(shifted.getTime() - IST);
  try {
    const ip =
  req.headers.get("x-forwarded-for")?.split(",")[0] ||
  req.headers.get("x-real-ip") ||
  "unknown";
    const data= await req.json()

    const exist = await prisma.visit.findFirst({
      where: data.visitorId
        ? { visitorId: data.visitorId, createdAt: { gte: today } }
        : { ip, createdAt: { gte: today } },
    })
    if(!exist){
        await prisma.visit.create({data:{
          ip,
          path:data.path,
          source:data.source,
          campaign:data.campaign ?? null,
          visitorId:data.visitorId ?? null,
          userAgent:req.headers.get("user-agent"),
        }})
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("POST /api/visitor failed:", error);
    return new Response(null, { status: 500 });
  }
}
