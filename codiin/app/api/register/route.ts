import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type userData = {
  name: string;
  email: string;
  phone: string;
  program: string;
  experience?: string;
};

export async function POST(req: Request) {
  try {
    const user_data:userData= await req.json();
    const user = await prisma.user.create({ data:{
        name:user_data.name,
        email:user_data.email,
        phone:user_data.phone,
        program:user_data.program,
        experience:user_data.experience ?? null
    } });
    return NextResponse.json(user,{status:201})
  } catch (error) {
    console.log(error);
  }
}
