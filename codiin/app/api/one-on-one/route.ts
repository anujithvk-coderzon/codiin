import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // The form validates all of these, but the form is not the only thing
    // that can post here.
    const required = [
      "name",
      "email",
      "country",
      "dialCode",
      "phone",
      "course",
      "qualification",
      "institution",
      "fieldOfStudy",
      "yearOfPass",
    ] as const;
    for (const field of required) {
      if (!String(data[field] ?? "").trim())
        return NextResponse.json(
          { message: `${field} is required` },
          { status: 400 },
        );
    }

    await prisma.oneOnOne.create({
      data: {
        name: data.name,
        email: data.email,
        country: data.country,
        dialCode: data.dialCode,
        phone: data.phone,
        course: data.course,
        qualification: data.qualification,
        institution: data.institution,
        fieldOfStudy: data.fieldOfStudy,
        yearOfPass: data.yearOfPass,
        // The one optional field, so an empty string is stored as absent.
        message: String(data.message ?? "").trim() || null,
      },
    });

    return NextResponse.json({ message: "Received" }, { status: 201 });
  } catch (error) {
    console.error("POST /api/one-on-one failed:", error);
    return NextResponse.json(
      { message: "Could not send your request" },
      { status: 500 },
    );
  }
}
