"use client";

import EventForm from "@/components/EventForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();

  return (
    <EventForm
      submitLabel="Create event"
      savingLabel="Creating…"
      onSubmit={async (fd) => {
        await axios.post("/api/createEvent/create", fd);
        toast.success("Event created");
        router.push("/dashboard/events");
      }}
    />
  );
};

export default Page;
