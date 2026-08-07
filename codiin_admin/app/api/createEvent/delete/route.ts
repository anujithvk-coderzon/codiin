import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { del } from "@vercel/blob";
import { NextResponse } from "next/server";



export async function DELETE(req:Request) {
    const denied=await requireAdmin()
    if(denied) return denied
    try {
        const {searchParams}=new URL(req.url)
        const id=searchParams.get('id')
        if(!id) return NextResponse.json({message:"ID required"},{status:400})
        const event=await prisma.event.findUnique({where:{id}})
        if(!event) return NextResponse.json({message:"Event not found"},{status:404})
        const image=event.imageUrl??null;
        await prisma.event.delete({where:{id}})
        if(image&&image!==null){
            await del(image).catch((e)=>{
                console.log("Failed to delete image from blob",e);
            })
        }
        return NextResponse.json({message:"Event deleted successfully"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Unexpected error occured",error},{status:500})
    }
}