import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { del } from "@vercel/blob";
import { NextResponse } from "next/server";

/**
 * Removes events that have already finished, and their posters with them.
 *
 * Registrations go too — the relation is onDelete: Cascade, so the database
 * clears them as the event goes. Worth knowing before running this: those rows
 * hold names, emails and phone numbers, and nothing recovers them.
 */
export async function DELETE() {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const finished = await prisma.event.findMany({
      where: { endDate: { lt: new Date() } },
      select: { id: true, imageUrl: true },
    });

    if (finished.length === 0) return NextResponse.json({ deleted: 0 });

    await prisma.event.deleteMany({
      where: { id: { in: finished.map((event) => event.id) } },
    });

    /* Posters go after the rows, not before: if the delete fails the event is
       still intact and still has its image. del() takes an array, so this is
       one call however many there are, and a blob failure is logged rather
       than failing the request — the rows are already gone by then. */
    const posters = finished
      .map((event) => event.imageUrl)
      .filter((url): url is string => Boolean(url));

    if (posters.length > 0) {
      await del(posters).catch((error) => {
        console.error("Failed to delete posters from blob storage:", error);
      });
    }

    return NextResponse.json({ deleted: finished.length });
  } catch (error) {
    console.error("DELETE /api/createEvent/cleanup failed:", error);
    return NextResponse.json(
      { message: "Could not remove finished events" },
      { status: 500 },
    );
  }
}
