import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookie = await cookies();

  // delete() alone is usually enough, but the browser only clears a cookie
  // when the attributes match the ones it was stored with. Overwriting it
  // with an empty value and maxAge: 0 — using the same options as login —
  // guarantees it goes, whatever the browser.
  cookie.set("adminToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  cookie.delete("adminToken");

  return NextResponse.json({ ok: true });
}
