import { UserType } from "@/app/generated/prisma/enums";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const denied = await requireAdmin();             // ← add
    if (denied) return denied;
    try {
        const searchparameter=req.nextUrl.searchParams;
        const page=Number(searchparameter.get('page'))
        const take=Number(searchparameter.get('limit')) || 10
        const type=searchparameter.get('type') as UserType || undefined
        const skip=(page - 1) * 10
        const where= type ? {type} : undefined;
       const[data, total]=await Promise.all([
           prisma.user.findMany({
            skip,
            take,
            orderBy:{'createdAt':'desc'},
            where
           }),
           prisma.user.count({where})
        ])
       
        return NextResponse.json({data,total})
    } catch (error) {
     console.error("GET /api/enquiry failed:", error); 
    return NextResponse.json(
      { message: "Could not load enquiries" },         
      { status: 500 },
    );
    }
}