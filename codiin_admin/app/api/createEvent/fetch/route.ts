import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
    const denied = await requireAdmin();
     if (denied) return denied;
try {
    const events=await prisma.event.findMany({orderBy:{createdAt:'desc'}})
    return NextResponse.json({events},{status:200})
} catch (error) {
    return NextResponse.json({message:"Unexpected error occured",error})
}    
}