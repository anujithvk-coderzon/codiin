import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { del, put } from "@vercel/blob";
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

export async function PATCH(request: Request) {
   const denied = await requireAdmin();
  if (denied) return denied;
  let imageUrl: string | undefined=undefined
  const {searchParams}=new URL(request.url)
  const id=searchParams.get('id')
  if(!id) return NextResponse.json({message:"Id required"},{status:400})

  const eventExist=await prisma.event.findUnique({where:{id}})
  if(!eventExist) return NextResponse.json({message:"Event not found"},{status:404})

  const form = await request.formData()
  const file=form.get('file')
  const raw=form.get('body')
  if (typeof raw !== "string") {
      return NextResponse.json({ message: "Missing body" }, { status: 400 });
  }

  const body:eventType=JSON.parse(raw) 
  if(body.imageUrl!=null)
  {
      imageUrl=body.imageUrl
  }
  if(file instanceof File && file.size>0){
    const imageUpload=await put(`events/${file.name}`,file!,{
    access:'public',
    storeId:process.env.BLOB_STORE_ID,
    token:process.env.BLOB_READ_WRITE_TOKEN,
    addRandomSuffix:true
  })
  imageUrl=imageUpload.url;
  }
  const oldUrl=eventExist.imageUrl
  const finalUrl = imageUrl ?? null;

  try {
    await prisma.event.update({where:{id},data:{
        name:body.name,
        description:body.description,
        applicationEndDate:body.applicationEndDate,
        startDate: body.startDate,
        endDate: body.endDate,
        isPaidEvent: body.isPaidEvent,
        syllabus: body.syllabus?? [],
        address: body.address?? undefined,
        whoShouldAttend: body.whoShouldAttend,  
        imageUrl: imageUrl ?? null ,
        mode: body.mode,
        feesStructure: body.feesStructure ?? [],
        importantLinks: body.importantLinks ?? [],
        benefits: body.benefits,
        trainerDetails: body.trainerDetails ?? []
    }})
    if(oldUrl&&oldUrl!==finalUrl){
    await del(oldUrl).catch((e)=>{
      console.log('Failed to remove image from blob',eventExist.imageUrl,e)
    })
  }
    return NextResponse.json({message:"Event edited successfully"},{status:200})
  } catch (error) {
    return NextResponse.json({message:"Unexpected error occured",error},{status:500})
  }

}