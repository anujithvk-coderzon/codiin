import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

type syllabus={label:string,description:string}
type feesStructure={label:string,amount:number}
type importantLinks={label:string,link:string}
type trainerDetails={label:string,description:string}

type eventType = {
  name: string;
  description: string;
  applicationEndDate: string;
  startDate: string;
  endDate: string;
  isPaidEvent: boolean;
  syllabus: syllabus[]|null;
  feesStructure: feesStructure[]|null;
  importantLinks: importantLinks[]|null;
  imageUrl: string|null;
  mode: 'ONLINE'|'OFFLINE';
  address: string|null;
  whoShouldAttend: string[];
  benefits: string[];
  trainerDetails: trainerDetails[]|null;
};

export async function POST(request: Request) {
   const denied = await requireAdmin();
  if (denied) return denied;
  const form = await request.formData()
  const file=form.get('file')
  const raw=form.get('body')
  let imageUrl: string | null=null
  
  if(file instanceof File && file.size>0){
    const imageUpload=await put(`events/${file.name}`,file,{
    access:'public',
    storeId:process.env.BLOB_STORE_ID,
    token:process.env.BLOB_READ_WRITE_TOKEN,
    addRandomSuffix:true
  })
  imageUrl=imageUpload.url;
  }
  if (typeof raw !== "string") {
      return NextResponse.json({ message: "Missing body" }, { status: 400 });
   }
  
  const body:eventType=JSON.parse(raw)
  const slug = body.name.toLowerCase().replace(/ /g, "-")+"-"+body.startDate.slice(0,10);
  try {
    await prisma.event.create({
    data:{
        name: body.name,
        slug: slug,
        description: body.description,
        applicationEndDate:body.applicationEndDate,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
        isPaidEvent: body.isPaidEvent,
        syllabus: body.syllabus?? [],
        address: body.address?? null,
        whoShouldAttend: body.whoShouldAttend,  
        imageUrl: imageUrl ?? null ,
        mode: body.mode,
        feesStructure: body.feesStructure ?? [],
        importantLinks: body.importantLinks ?? [],
        benefits: body.benefits,
        trainerDetails: body.trainerDetails ?? []
    }
    })
    return NextResponse.json({message:"Event created succesfully"},{status:200})
  } catch (error) {
    return NextResponse.json({message:"Unexpected error occured",error},{status:500})
  }

}