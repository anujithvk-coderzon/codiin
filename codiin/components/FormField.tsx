"use client";

import type { ReactNode } from "react";

export function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div className="error-message" role="alert">
      {message}
    </div>
  );
}

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor}>
      {children}
      {required && (
        <>
          {" "}
          <span className="required">*</span>
        </>
      )}
    </label>
  );
}

export const PROGRAM_OPTIONS = [
  { value: "Full Stack JavaScript", label: "Full Stack JavaScript (MERN/MEAN)" },
  { value: "Full Stack Python", label: "Full Stack Python (Django/FastAPI)" },
  { value: "Full Stack Java", label: "Full Stack Java (Spring Boot)" },
  { value: "Full Stack .NET", label: "Full Stack .NET (ASP.NET Core)" },
  {
    value: "Hybrid Mobile Apps",
    label: "Hybrid Mobile Apps (React Native/Flutter)",
  },
  { value: "Data Analytics", label: "Data Analytics" },
  { value: "Data Engineering", label: "Data Engineering" },
  { value: "Data Science", label: "Data Science" },
  { value: "Agentic AI", label: "Agentic AI" },
] as const;
