import { requireAdmin } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET(req:Request){
    const denied=await requireAdmin()
    if(denied) return denied
    const {searchParams}=new URL(req.url)
    const id=searchParams.get('id')
    if(!id) return NextResponse.json({message:"Id required"},{status:400})
    try {
        const event=await prisma.event.findUnique({where:{id},include:{EventRegistration:true,_count:{select:{EventRegistration:true}}}})
        if(!event) return NextResponse.json({message:"Event not found"},{status:404})
        return NextResponse.json({event},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Unexpected error occured",error},{status:500})
    }
}