"use client";

import axios from "axios";
import { useEffect } from "react";


export default function VisitLogger() {

  useEffect(() => {
    // Swallow failures on purpose. Nothing on the page depends on the visit
    // being counted, and an un-caught rejection here surfaces as a console
    // error for the visitor when the request fails.
    axios.post("/api/visitor").catch(() => {});
  }, []);

  return null;
}
