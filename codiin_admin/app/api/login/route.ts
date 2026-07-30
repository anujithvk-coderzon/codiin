import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function POST(req:Request) {
    const email=process.env.ADMIN_EMAIL;
    const password=process.env.ADMIN_PASSWORD;
    try {
        const data=await req.json()
    
        if(data.email.trim()!=email || data.password.trim()!=password){
          return NextResponse.json({message:"Invalid credentials"},{status:401})
        }
        const token=jwt.sign({email},process.env.JWT_SECRET!,{expiresIn:"8h"})
        const cookie=await cookies()
        cookie.set("adminToken",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:'lax',
            maxAge: 60 * 60 * 8
        })
        return NextResponse.json({ok:true});
    } catch (error) {
    console.error("Login failed:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}