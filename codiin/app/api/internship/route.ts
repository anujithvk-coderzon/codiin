import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

type InternshipData = {
  name: string;
  email: string;
  phone: string;
  field: string;
  duration: string;
  college: string;
  year: string;
};

export async function POST(request: Request) {
  try {
    const data: InternshipData = await request.json();
    await prisma.internship.create({
      data: {
        fullName: data.name,
        email: data.email,
        phone: data.phone,  
        program: data.field,
        duration: data.duration,
        college: data.college,
        year_of_study: data.year,
      },
    });
    // The status belongs in the init, not the body — NextResponse.json({
    // status: 201 }) answers 200 with a body that merely mentions 201.
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("POST /api/internship failed:", error);
    // Without this the handler returns undefined, which Next reports as an
    // error and turns into a 500 with no body. The form needs a real failure
    // status so its catch can show the alert instead of the success modal.
    return NextResponse.json(
      { message: "Could not submit the application" },
      { status: 500 },
    );
  }
}

