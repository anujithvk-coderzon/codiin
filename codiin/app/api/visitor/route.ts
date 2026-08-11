import { isBot } from "@/lib/isBot";
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
    const userAgent = req.headers.get("user-agent")

    /* Crawlers are turned away here and nothing is written for them. Checked
       before the dedupe, so a crawler cannot take a real visitor's one slot
       for the day and leave the person uncounted. */
    if (isBot(userAgent)) return new Response(null, { status: 204 })

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
          // Every row here is a person now, so this is just which browser.
          userAgent,
        }})
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("POST /api/visitor failed:", error);
    return new Response(null, { status: 500 });
  }
}
