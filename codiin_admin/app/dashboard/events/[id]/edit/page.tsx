"use client";

import EventForm, { type EventFormValues } from "@/components/EventForm";
import axios, { isAxiosError } from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Pair = { label: string; description: string };
type Fee = { label: string; amount: number };
type LinkRow = { label: string; link: string };

type EventDetail = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  applicationEndDate: string;
  isPaidEvent: boolean;
  mode: "ONLINE" | "OFFLINE";
  address: string | null;
  imageUrl: string | null;
  whoShouldAttend: string[];
  benefits: string[];
  syllabus: Pair[] | null;
  feesStructure: Fee[] | null;
  importantLinks: LinkRow[] | null;
  trainerDetails: Pair[] | null;
};

/**
 * A datetime-local input needs "YYYY-MM-DDTHH:mm" in the *viewer's* zone. The
 * stored value is UTC, so the offset has to come off before slicing — using
 * toISOString() here would show 04:30 for an event that starts at 10:00 IST.
 */
const toLocalInput = (iso: string) => {
  const d = new Date(iso);
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
};

/**
 * The deadline used to be stored as a bare "YYYY-MM-DD" and now carries a
 * time, so both shapes exist in the table. Ten characters means an older
 * row: it opens at midnight rather than being dropped.
 */
const deadlineToInput = (value: string) =>
  !value ? "" : value.length === 10 ? `${value}T00:00` : toLocalInput(value);

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get<{ event: EventDetail }>(
          `/api/createEvent/fetchSpecific?id=${encodeURIComponent(id)}`,
        );
        setEvent(res.data.event);
      } catch (err) {
        setError(
          isAxiosError(err)
            ? (err.response?.data?.message ?? "Could not load the event")
            : "Could not load the event",
        );
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="space-y-4" aria-busy="true" aria-label="Loading event">
          <div className="h-8 w-48 animate-pulse rounded bg-zinc-200" />
          <div className="h-72 animate-pulse rounded-xl bg-zinc-200" />
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-12 text-center">
          <p className="text-sm font-medium text-red-800">
            {error || "Event not found"}
          </p>
          <Link
            href="/dashboard/events"
            className="mt-4 inline-block rounded-lg border border-red-300 bg-white px-3 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Back to events
          </Link>
        </div>
      </div>
    );
  }

  const initial: EventFormValues = {
    form: {
      name: event.name,
      description: event.description,
      startDate: toLocalInput(event.startDate),
      endDate: toLocalInput(event.endDate),
      applicationEndDate: deadlineToInput(event.applicationEndDate ?? ""),
      isPaidEvent: event.isPaidEvent,
      mode: event.mode,
      address: event.address ?? "",
    },
    whoShouldAttend: event.whoShouldAttend ?? [],
    benefits: event.benefits ?? [],
    syllabus: event.syllabus ?? [],
    fees: event.feesStructure ?? [],
    links: event.importantLinks ?? [],
    trainers: event.trainerDetails ?? [],
  };

  return (
    <EventForm
      initial={initial}
      existingImageUrl={event.imageUrl}
      submitLabel="Save changes"
      savingLabel="Saving…"
      onSubmit={async (fd) => {
        await axios.patch(
          `/api/createEvent/edit?id=${encodeURIComponent(id)}`,
          fd,
        );
        toast.success("Changes saved");
        router.push(`/dashboard/events/${id}`);
      }}
    />
  );
};

export default Page;
