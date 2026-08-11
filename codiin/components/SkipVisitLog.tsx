"use client";

import { markNotFound } from "@/lib/visitLog";
import { useEffect } from "react";

export default function SkipVisitLog() {
  useEffect(() => {
    markNotFound();
  }, []);

  return null;
}
