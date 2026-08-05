import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";

export async function getSession() {
    const token=(await cookies()).get('adminToken')?.value
    if(!token) return null;
    try {
        return jwt.verify(token,process.env.JWT_SECRET!)
    } catch  {
        return null
    }
}
export async function requireAdmin() {
  const session = await getSession();
  if (session) return null;
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}