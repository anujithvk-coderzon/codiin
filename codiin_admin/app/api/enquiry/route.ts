import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const searchparameter=req.nextUrl.searchParams;
        const page=Number(searchparameter.get('page'))
        const take=Number(searchparameter.get('limit')) || 10
        const skip=(page - 1) * 10
       const[data, total]=await Promise.all([
           prisma.user.findMany({
            skip,
            take,
            orderBy:{'createdAt':'desc'}
           }),
           prisma.user.count()
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