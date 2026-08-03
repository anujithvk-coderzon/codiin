import { UserType } from "@/lib/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type userData = {
  type: UserType;
  name: string;
  email: string;
  phone: string;
  program: string;
  experience?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const user_data:userData= await req.json();
    const user = await prisma.user.create({ data:{
        type:user_data.type,
        name:user_data.name,
        email:user_data.email,
        phone:user_data.phone,
        program:user_data.program,
        experience:user_data.experience ?? null,
        message:user_data.message ?? null
    } });
    return NextResponse.json(user,{status:201})
  } catch (error) {
    console.log(error);
  }
}
