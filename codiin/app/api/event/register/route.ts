import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req:Request){
    try {
        const {searchParams}= new URL(req.url);
        const slug=searchParams.get('slug')?.toString()
        if (!slug) return NextResponse.json({ message: "Missing event" }, { status: 400 })
        const body=await req.json()
        const duplicate=await prisma.eventRegistration.findFirst({where:{email:body.email,slug:slug}})
        if(duplicate)return NextResponse.json({message:"Already Registered"},{status:400})
        await prisma.eventRegistration.create({data:{
            name:body.name,
            email:body.email,
            slug:slug,
            college:body.college,
            course:body.course,
            mobile:body.mobile,
            yearOfPass:body.yearOfPass,
            howYouKnow:body.howYouKnow
        }})
        return NextResponse.json({message:"Done"},{status:201})
    } catch (error) {
        return NextResponse.json({message:"Unexpecter error occured",error},{status:500})
    }
}