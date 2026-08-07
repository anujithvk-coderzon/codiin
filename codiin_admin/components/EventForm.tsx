"use client";

import { isAxiosError } from "axios";
import { cloneElement, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

/* ---------------------------------------------------------------- types --
   Mirror the route's eventType exactly. A mismatch here is silent: the JSON
   still posts, Prisma just receives undefined for that field. */

type SyllabusItem = { label: string; description: string };
type FeeItem = { label: string; amount: number };
type LinkItem = { label: string; link: string };
type TrainerItem = { label: string; description: string };

/* ----------------------------------------------------------- primitives -- */

/* text-base below sm, text-sm above: iOS zooms the whole page in when a focused
   input is under 16px, and the zoom does not undo itself on blur. */
const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-base text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 sm:py-2 sm:text-sm";

const inputErrorClass =
  "border-red-400 focus:border-red-500 focus:ring-red-100";

const MAX_POSTER_BYTES = 2 * 1024 * 1024;

function Section({
  title,
  hint,
  optional,
  invalid,
  children,
}: {
  title: string;
  hint?: string;
  optional?: boolean;
  invalid?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`overflow-hidden rounded-xl border bg-white shadow-sm transition ${
        invalid ? "border-red-300 ring-1 ring-red-100" : "border-zinc-200"
      }`}
    >
      {/* A ruled header rather than a heading floating above the fields — it
          gives each card an edge to start from, which is what makes a long
          stack of them scannable. */}
      <div
        className={`border-b px-4 py-3 sm:px-5 ${
          invalid
            ? "border-red-200 bg-red-50/40"
            : "border-zinc-200 bg-zinc-50/60"
        }`}
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h2 className="text-base font-semibold tracking-tight text-zinc-900">
            {title}
          </h2>
          {/* Marking which sections can be skipped is faster to read than
              checking every field inside them for an asterisk. */}
          {optional ? (
            <span className="rounded-full bg-zinc-200/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
              Optional
            </span>
          ) : (
            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-700">
              Required
            </span>
          )}
        </div>
        {hint && (
          <p className="mt-1 text-sm leading-relaxed text-zinc-500">{hint}</p>
        )}
      </div>

      <div className="p-4 sm:p-5">{children}</div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactElement;
}) {
  // Cloned rather than asking each caller to repeat these three attributes on
  // its own input — which is exactly how they ended up on the wrapper.
  const control = cloneElement(
    children as React.ReactElement<Record<string, unknown>>,
    {
      "aria-required": required || undefined,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error
        ? `${id}-error`
        : hint
          ? `${id}-hint`
          : undefined,
    },
  );

  return (
    <div>
      <label
        htmlFor={id}
        className="flex flex-wrap items-baseline gap-x-1.5 text-sm font-medium text-zinc-800"
      >
        <span>{label}</span>
        {required ? (
          <span className="text-red-600" aria-hidden="true">
            *
          </span>
        ) : (
          // Spelled out rather than left blank. "No asterisk" only reads as
          // optional once you have noticed the convention.
          <span className="text-xs font-normal text-zinc-400">Optional</span>
        )}
      </label>
      {hint && (
        <p
          id={`${id}-hint`}
          className="mt-1 text-xs leading-relaxed text-zinc-500"
        >
          {hint}
        </p>
      )}
      <div className="mt-2">{control}</div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-start gap-1 text-xs font-medium text-red-700"
        >
          <span aria-hidden="true">&#9888;</span>
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * One repeater for all five lists — they differ only in the shape of a row,
 * so the row is passed in rather than the component written five times.
 *
 * Each row is a bordered block with its own header, instead of a single flex
 * line. At 320px a number, the inputs and a Remove button side by side leaves
 * about 150px for the actual fields.
 */
function Repeater<T>({
  items,
  setItems,
  blank,
  addLabel,
  empty,
  rowLabel,
  renderRow,
}: {
  items: T[];
  setItems: (next: T[]) => void;
  blank: () => T;
  addLabel: string;
  empty: string;
  rowLabel: string;
  renderRow: (item: T, update: (next: T) => void) => React.ReactNode;
}) {
  return (
    <div>
      {items.length === 0 ? (
        <p className="rounded-lg border border-dashed border-zinc-300 px-4 py-6 text-center text-sm text-zinc-500">
          {empty}
        </p>
      ) : (
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="rounded-lg border border-zinc-200 bg-zinc-50/60 p-3"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                  {rowLabel} {i + 1}
                </span>
                <button
                  type="button"
                  onClick={() => setItems(items.filter((_, idx) => idx !== i))}
                  className="rounded px-2 py-1 text-xs font-medium text-zinc-500 transition hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  Remove
                </button>
              </div>
              {renderRow(item, (next) =>
                setItems(items.map((it, idx) => (idx === i ? next : it))),
              )}
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={() => setItems([...items, blank()])}
        className="mt-3 w-full rounded-lg border border-dashed border-zinc-300 px-3 py-2 text-xs font-medium text-zinc-600 transition hover:border-indigo-400 hover:bg-indigo-50/40 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:w-auto sm:border-solid"
      >
        + {addLabel}
      </button>
    </div>
  );
}

/* ---------------------------------------------------------------- page -- */

const BLANK_FORM = {
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  applicationEndDate: "",
  isPaidEvent: false,
  mode: "ONLINE" as "ONLINE" | "OFFLINE",
  address: "",
};
export type EventFormValues = {
  form: typeof BLANK_FORM;
  whoShouldAttend: string[];
  benefits: string[];
  syllabus: SyllabusItem[];
  fees: FeeItem[];
  links: LinkItem[];
  trainers: TrainerItem[];
};

export const pad = (n: number) => String(n).padStart(2, "0");

/* The day after a YYYY-MM-DD. Parsed with an explicit T00:00 so it is read as
   local midnight — bare "2026-08-07" would parse as UTC and roll to the wrong
   day in India. setDate handles month and year ends on its own. */
const nextDay = (ymd: string) => {
  const d = new Date(`${ymd}T00:00`);
  d.setDate(d.getDate() + 1);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

/* The shortest event worth publishing. Anything less reads as a mistyped end
   time rather than a real session. */
const MIN_EVENT_MINUTES = 30;

/* A Date as a `datetime-local` input writes it: local wall-clock, no zone.
   toISOString() would give UTC and read 5.5 hours early in India. */
const toLocalInput = (d: Date) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;

/* Now, in the same format, for measuring against the deadline. */
const localNow = () => toLocalInput(new Date());

/* Today's date alone, local. */
const localToday = () => localNow().slice(0, 10);

/* `min` on a datetime-local input is inclusive, so bounding the end by the
   start itself would leave the two selectable as equal. */
const plusMinutes = (dt: string, minutes: number) => {
  const d = new Date(dt);
  d.setMinutes(d.getMinutes() + minutes);
  return toLocalInput(d);
};

const emptyValues = (): EventFormValues => ({
  form: BLANK_FORM,
  whoShouldAttend: [],
  benefits: [],
  syllabus: [],
  fees: [],
  links: [],
  trainers: [],
});

/**
 * The whole event form. Both /new and /[id]/edit render this — the only
 * differences are what it starts with and where the FormData is sent, so
 * those are props rather than a second copy of eight hundred lines.
 */
const EventForm = ({
  initial,
  existingImageUrl = null,
  submitLabel,
  savingLabel,
  onSubmit,
}: {
  initial?: EventFormValues;
  existingImageUrl?: string | null;
  submitLabel: string;
  savingLabel: string;
  /** Receives the built FormData. Navigation and toasts belong to the caller. */
  onSubmit: (fd: FormData) => Promise<void>;
}) => {
  const start = initial ?? emptyValues();
  /* A new event cannot start in the past; an existing one already might,
     and blocking a save would make a past event uneditable. */
  const isNew = !initial;
  const [form, setForm] = useState(start.form);
  const [whoShouldAttend, setWhoShouldAttend] = useState<string[]>(
    start.whoShouldAttend,
  );
  const [benefits, setBenefits] = useState<string[]>(start.benefits);
  const [syllabus, setSyllabus] = useState<SyllabusItem[]>(start.syllabus);
  const [fees, setFees] = useState<FeeItem[]>(start.fees);
  const [links, setLinks] = useState<LinkItem[]>(start.links);
  const [trainers, setTrainers] = useState<TrainerItem[]>(start.trainers);

  const [file, setFile] = useState<File | null>(null);
  // Only meaningful when editing: the intent to clear a stored poster.
  const [removeImage, setRemoveImage] = useState(false);
  const [saving, setSaving] = useState(false);
  const [dirtyOverride, setDirtyOverride] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = <K extends keyof typeof BLANK_FORM>(
    key: K,
    value: (typeof BLANK_FORM)[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Clear a field's error as soon as it is touched — leaving it on screen
    // while the value changes underneath is the thing that makes forms feel
    // like they are arguing with you.
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  // Derived rather than stored: the preview is a pure function of the file.
  const previewUrl = useMemo(
    () => (file ? URL.createObjectURL(file) : null),
    [file],
  );

  // The object URL pins the file in memory until revoked.
  useEffect(() => {
    if (!previewUrl) return;
    return () => URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  const isDirty =
    JSON.stringify(form) !== JSON.stringify(start.form) ||
    file !== null ||
    removeImage ||
    [whoShouldAttend, benefits, syllabus, fees, links, trainers].some(
      (list) => list.length > 0,
    );

  // Ten sections is a lot of typing to lose to a stray Cmd+W or a back
  // gesture. The browser shows its own generic wording; all we control is
  // whether it asks at all.
  useEffect(() => {
    if (!isDirty || saving || dirtyOverride) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [isDirty, saving, dirtyOverride]);

  // Enter inside any single-line input submits a form by default. In a form
  // this long that means one keystroke while typing a chapter title fires the
  // whole thing. Textareas keep Enter for new lines; the button still works.
  const guardEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    const el = e.target as HTMLElement;
    if (
      e.key === "Enter" &&
      el.tagName !== "TEXTAREA" &&
      el.tagName !== "BUTTON"
    ) {
      e.preventDefault();
    }
  };

  const pickFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0];
    // Reset first, so picking the same file again still fires onChange.
    e.target.value = "";
    if (!picked) return;

    if (picked.size > MAX_POSTER_BYTES) {
      setErrors((prev) => ({
        ...prev,
        poster: `That image is ${Math.round((picked.size / 1024 / 1024) * 10) / 10}MB. The limit is 2MB — resize it and try again.`,
      }));
      return;
    }

    setErrors((prev) => {
      const next = { ...prev };
      delete next.poster;
      return next;
    });
    // Choosing a replacement supersedes an earlier decision to remove.
    setRemoveImage(false);
    setFile(picked);
  };

  const validate = () => {
    const found: Record<string, string> = {};

    if (!form.name.trim()) found.name = "Enter a name for the event.";
    if (!form.description.trim())
      found.description = "Describe what the event is.";

    /* The three dates are compared as strings, not through `new Date()`.
       `datetime-local` gives "YYYY-MM-DDTHH:mm" in local time while `date`
       gives "YYYY-MM-DD", which Date parses as UTC midnight — so the old
       comparison measured the deadline against the start across a 5.5 hour
       offset and flagged same-day deadlines depending on the time of day.
       Both formats are fixed-width and big-endian, so `<` on the strings is
       an exact calendar comparison with no zone involved. */
    const startDay = form.startDate.slice(0, 10);

    // Checked in the order the fields are asked for, so the first error is
    // always the earliest field rather than a downstream consequence of it.
    // The deadline carries a time now, so it is compared to the minute.
    const deadlineDay = form.applicationEndDate.slice(0, 10);

    if (!form.applicationEndDate)
      found.applicationEndDate = "Choose when applications close.";
    else if (isNew && deadlineDay <= localToday())
      // Compared by day, not by minute: a deadline a few hours from now is
      // no use to someone who still has to fill the form in.
      found.applicationEndDate = "The deadline must be tomorrow or later.";

    if (!form.startDate) found.startDate = "Choose when it starts.";
    else if (deadlineDay && startDay <= deadlineDay)
      // Compared by day, not by minute: applications closing at 6pm and the
      // event starting at 7pm the same evening leaves nobody time to act on
      // the deadline. This also covers the past-date case, since the deadline
      // itself cannot be in the past on a new event.
      found.startDate = "The event must start the day after applications close, at the earliest.";

    if (!form.endDate) found.endDate = "Choose when it ends.";
    else if (form.startDate) {
      /* Measured in minutes rather than compared as strings: "at least 30
         minutes later" is arithmetic, and both values are local wall-clock
         strings, so Date parses them on the same footing and the difference
         is correct whatever the zone. */
      const minutes =
        (new Date(form.endDate).getTime() - new Date(form.startDate).getTime()) /
        60000;
      if (minutes < MIN_EVENT_MINUTES)
        found.endDate = `The event must run for at least ${MIN_EVENT_MINUTES} minutes.`;
    }

    if (form.mode === "OFFLINE" && !form.address.trim())
      found.address = "An in-person event needs an address.";
    if (form.isPaidEvent && fees.filter((f) => f.label.trim()).length === 0)
      found.fees = "Add at least one fee, or mark the event free.";

    return found;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const found = validate();
    setErrors(found);

    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      // Take them to the problem rather than making them hunt for it.
      const el = document.getElementById(firstKey);
      el?.scrollIntoView({ block: "center", behavior: "smooth" });
      el?.focus({ preventScroll: true });
      return;
    }

    setSaving(true);
    try {
      const body = {
        name: form.name.trim(),
        description: form.description.trim(),
        // datetime-local gives wall time with no zone. Converting here, in the
        // browser, resolves it against the admin's clock — doing it on the
        // server would resolve against UTC and shift every event by 5:30.
        startDate: new Date(form.startDate).toISOString(),
        endDate: new Date(form.endDate).toISOString(),
        // Sent as a full ISO timestamp now that the field carries a time.
        // The column is a String, so this needs no schema change.
        applicationEndDate: new Date(form.applicationEndDate).toISOString(),
        isPaidEvent: form.isPaidEvent,
        mode: form.mode,
        address: form.mode === "OFFLINE" ? form.address.trim() : null,
        // The current poster, echoed back so the route can tell "unchanged"
        // from "cleared". null here means the admin removed it; a new upload
        // overrides this value on the server anyway.
        imageUrl: removeImage && !file ? null : (existingImageUrl ?? null),
        whoShouldAttend: whoShouldAttend.map((s) => s.trim()).filter(Boolean),
        benefits: benefits.map((s) => s.trim()).filter(Boolean),
        syllabus: syllabus.filter((s) => s.label.trim()),
        feesStructure: form.isPaidEvent
          ? fees.filter((f) => f.label.trim())
          : [],
        importantLinks: links.filter((l) => l.label.trim() && l.link.trim()),
        trainerDetails: trainers.filter((t) => t.label.trim()),
      };

      const fd = new FormData();
      if (file) fd.append("file", file);
      fd.append("body", JSON.stringify(body));

      // Cleared before the caller navigates, so the unsaved-changes guard does
      // not fire on the way out — at this point the work is saved, not lost.
      setDirtyOverride(true);
      await onSubmit(fd);
    } catch (err) {
      setDirtyOverride(false);
      const message = isAxiosError(err)
        ? (err.response?.data?.message ?? "Could not save the event")
        : "Could not save the event";
      setErrors({ submit: message });
      toast.error(message);
    } finally {
      setSaving(false);
    }
  };

  const problemCount = Object.keys(errors).filter((k) => k !== "submit").length;

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={guardEnter}
      noValidate
      className="mx-auto max-w-6xl px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pt-10"
    >
      <header className="mb-5">
        <h1 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
          New Event
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Fields marked <span className="text-red-600">*</span> are required.
          Everything else can be filled in later by editing the event.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3 lg:items-start lg:gap-5">
        {/* Main column: the long-form content — anything with a
            textarea needs the width. */}
        <div className="space-y-4 sm:space-y-5 lg:col-span-2">
          <Section
            title="Basics"
            invalid={Boolean(errors.name || errors.description)}
          >
            <div className="space-y-4">
              <Field
                id="name"
                label="Event name"
                required
                hint="Shown as the page heading, and used to build the web address."
                error={errors.name}
              >
                <input
                  id="name"
                  className={`${inputClass} ${errors.name ? inputErrorClass : ""}`}
                  placeholder="Agentic AI Workshop"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </Field>

              <Field
                id="description"
                label="Description"
                required
                hint="The main text on the event page. Two or three sentences on what it covers and who runs it."
                error={errors.description}
              >
                <textarea
                  id="description"
                  rows={5}
                  className={`${inputClass} ${errors.description ? inputErrorClass : ""}`}
                  placeholder="A hands-on session where you build and ship an autonomous agent…"
                  value={form.description}
                  onChange={(e) => set("description", e.target.value)}
                />
              </Field>
            </div>
          </Section>

          <Section
            title="Schedule"
            hint="Set the application deadline first — the event dates are bounded by it. Enter times as they appear on your clock; they are stored in UTC and shown to visitors in Indian time."
            invalid={Boolean(
              errors.startDate || errors.endDate || errors.applicationEndDate,
            )}
          >
            {/* Asked for first because the other two are constrained by it:
                filling the start date first only to have it invalidated by a
                later deadline is the wrong way round. */}
            <Field
              id="applicationEndDate"
              label="Applications close"
              required
              hint="The moment applications stop — tomorrow at the earliest, so people have time to apply. Set this before the event dates; the event starts the day after this."
              error={errors.applicationEndDate}
            >
              <input
                id="applicationEndDate"
                type="datetime-local"
                /* Tomorrow at the earliest — today, even at a future
                   hour, leaves too little of a window to fill anything in.
                   Set through a ref rather than rendered: a bound derived
                   from the current date differs between the server and the
                   client and mismatches on hydration, and a ref callback
                   runs on the client only. validate() checks it again. */
                ref={(el) => {
                  if (el) el.min = `${nextDay(localToday())}T00:00`;
                }}
                className={`${inputClass} ${errors.applicationEndDate ? inputErrorClass : ""} sm:max-w-xs`}
                value={form.applicationEndDate}
                onChange={(e) => set("applicationEndDate", e.target.value)}
              />
            </Field>

            <div className="mt-4 grid gap-4 border-t border-zinc-200 pt-4 sm:grid-cols-2">
              <Field
                id="startDate"
                label="Starts"
                required
                error={errors.startDate}
              >
                <input
                  id="startDate"
                  type="datetime-local"
                  // The day after the deadline at the earliest. Disabled
                  // until there is a deadline to bound it, so the order is
                  // enforced by the form rather than explained by the hint.
                  min={
                    form.applicationEndDate
                      ? `${nextDay(form.applicationEndDate.slice(0, 10))}T00:00`
                      : undefined
                  }
                  disabled={!form.applicationEndDate}
                  className={`${inputClass} ${errors.startDate ? inputErrorClass : ""} disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-400`}
                  value={form.startDate}
                  onChange={(e) => set("startDate", e.target.value)}
                />
              </Field>

              <Field id="endDate" label="Ends" required error={errors.endDate}>
                <input
                  id="endDate"
                  type="datetime-local"
                  // The earliest valid end, not the start itself — `min` is
                  // inclusive, so passing startDate would leave an end equal
                  // to the start selectable in the picker.
                  min={
                    form.startDate
                      ? plusMinutes(form.startDate, MIN_EVENT_MINUTES)
                      : undefined
                  }
                  disabled={!form.startDate}
                  className={`${inputClass} ${errors.endDate ? inputErrorClass : ""} disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-400`}
                  value={form.endDate}
                  onChange={(e) => set("endDate", e.target.value)}
                />
              </Field>
            </div>
          </Section>

          <Section title="Format" invalid={Boolean(errors.address)}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="mode"
                label="Mode"
                required
                hint="In-person events ask for an address."
              >
                <select
                  id="mode"
                  className={inputClass}
                  value={form.mode}
                  onChange={(e) =>
                    set("mode", e.target.value as "ONLINE" | "OFFLINE")
                  }
                >
                  <option value="ONLINE">Online</option>
                  <option value="OFFLINE">In person</option>
                </select>
              </Field>

              {/* Only asked for when it applies. A field the admin has to know to
                ignore is a field they can get wrong. */}
              {form.mode === "OFFLINE" && (
                <Field
                  id="address"
                  label="Address"
                  required
                  hint="Include the landmark — students navigate by those."
                  error={errors.address}
                >
                  <input
                    id="address"
                    className={`${inputClass} ${errors.address ? inputErrorClass : ""}`}
                    placeholder="AKL Heights, Seaport Road, near Bharathmatha College, Kochi"
                    value={form.address}
                    onChange={(e) => set("address", e.target.value)}
                  />
                </Field>
              )}
            </div>
          </Section>

          <Section
            title="Poster"
            optional
            hint="Export as WebP at 1200×630 and aim for under 200KB — small files cost far less storage and bandwidth, and load instantly when the link is shared. 2MB is the hard limit. This is also the image WhatsApp shows in the link preview, so keep any text on it large."
          >
            {file && previewUrl ? (
              /* A replacement has been chosen but not yet uploaded. */
              <div>
                {/* Plain img: a local object URL has nothing for next/image to
                    optimise, and would need the host allowlisted. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="Poster preview"
                  className="w-full rounded-lg border border-zinc-200"
                />
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="min-w-0 break-all text-xs text-zinc-500">
                    {file.name} &middot; {Math.round(file.size / 1024)} KB
                  </p>
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="shrink-0 rounded px-2 py-1 text-xs font-medium text-zinc-500 transition hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    Discard
                  </button>
                </div>
              </div>
            ) : existingImageUrl && !removeImage ? (
              /* Editing, poster untouched. The controls sit outside a label,
                 because a button inside one opens the file picker instead of
                 doing its own job. */
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={existingImageUrl}
                  alt=""
                  className="w-full rounded-lg border border-zinc-200 bg-zinc-100 object-contain"
                />
                <p className="mt-2 text-xs text-zinc-500">
                  Current poster. Leave it alone and it stays as it is.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <label className="cursor-pointer rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus-within:ring-2 focus-within:ring-indigo-400">
                    Replace image
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className="sr-only"
                      onChange={pickFile}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => setRemoveImage(true)}
                    className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    Remove poster
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {removeImage && (
                  /* Staged, not done — nothing is deleted until Save. Saying so
                     is what makes Keep it a real way back. */
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
                    <p className="min-w-0 text-xs font-medium text-amber-800">
                      The poster will be removed when you save.
                    </p>
                    <button
                      type="button"
                      onClick={() => setRemoveImage(false)}
                      className="shrink-0 rounded px-2 py-1 text-xs font-semibold text-amber-800 underline transition hover:bg-amber-100"
                    >
                      Keep it
                    </button>
                  </div>
                )}
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 px-4 py-8 text-center transition hover:border-indigo-400 hover:bg-indigo-50/40 focus-within:ring-2 focus-within:ring-indigo-400">
                  <span className="text-sm font-medium text-zinc-700">
                    Choose an image
                  </span>
                  <span className="mt-1 text-xs text-zinc-500">
                    JPEG, PNG or WebP
                  </span>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="sr-only"
                    onChange={pickFile}
                  />
                </label>
              </div>
            )}

            {errors.poster && (
              <p className="mt-2 flex items-start gap-1 text-xs font-medium text-red-700">
                <span aria-hidden="true">&#9888;</span>
                {errors.poster}
              </p>
            )}
          </Section>

          <Section
            title="Syllabus"
            optional
            hint="Chapters in the order they are taught."
          >
            <Repeater<SyllabusItem>
              items={syllabus}
              setItems={setSyllabus}
              blank={() => ({ label: "", description: "" })}
              addLabel="Add a chapter"
              rowLabel="Chapter"
              empty="No chapters added."
              renderRow={(item, update) => (
                <div className="space-y-2">
                  <input
                    className={inputClass}
                    placeholder="Title — e.g. Introduction to LLM agents"
                    value={item.label}
                    onChange={(e) => update({ ...item, label: e.target.value })}
                  />
                  <textarea
                    rows={2}
                    className={inputClass}
                    placeholder="What this chapter covers"
                    value={item.description}
                    onChange={(e) =>
                      update({ ...item, description: e.target.value })
                    }
                  />
                </div>
              )}
            />
          </Section>

          <Section
            title="Trainers"
            optional
            hint="Who is running it. For a mentorship brand this is often the strongest reason someone signs up."
          >
            <Repeater<TrainerItem>
              items={trainers}
              setItems={setTrainers}
              blank={() => ({ label: "", description: "" })}
              addLabel="Add a trainer"
              rowLabel="Trainer"
              empty="No trainers added."
              renderRow={(item, update) => (
                <div className="space-y-2">
                  <input
                    className={inputClass}
                    placeholder="Name"
                    value={item.label}
                    onChange={(e) => update({ ...item, label: e.target.value })}
                  />
                  <textarea
                    rows={2}
                    className={inputClass}
                    placeholder="Role, company, and what they will cover"
                    value={item.description}
                    onChange={(e) =>
                      update({ ...item, description: e.target.value })
                    }
                  />
                </div>
              )}
            />
          </Section>
        </div>

        {/* Sidebar: short, self-contained sections. Sticky so they
            stay reachable while the main column scrolls. */}
        <aside className="space-y-4 sm:space-y-5 lg:sticky lg:top-6">
          <Section
            title="Who should attend"
            optional
            hint="One line per group. Be specific — it stops the wrong people signing up."
          >
            <Repeater<string>
              items={whoShouldAttend}
              setItems={setWhoShouldAttend}
              blank={() => ""}
              addLabel="Add a group"
              rowLabel="Group"
              empty="No groups added."
              renderRow={(item, update) => (
                <input
                  className={inputClass}
                  placeholder="Final year CS students with basic Python"
                  value={item}
                  onChange={(e) => update(e.target.value)}
                />
              )}
            />
          </Section>

          <Section
            title="Benefits"
            optional
            hint="What someone leaves with. Certificates, recordings, a finished project."
          >
            <Repeater<string>
              items={benefits}
              setItems={setBenefits}
              blank={() => ""}
              addLabel="Add a benefit"
              rowLabel="Benefit"
              empty="No benefits added."
              renderRow={(item, update) => (
                <input
                  className={inputClass}
                  placeholder="Certificate of completion"
                  value={item}
                  onChange={(e) => update(e.target.value)}
                />
              )}
            />
          </Section>

          <Section title="Pricing" invalid={Boolean(errors.fees)}>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={form.isPaidEvent}
                onChange={(e) => set("isPaidEvent", e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-400"
              />
              <span className="min-w-0">
                <span className="block text-sm font-medium text-zinc-900">
                  This is a paid event
                </span>
                <span className="block text-xs leading-relaxed text-zinc-500">
                  Leave it unticked and the page shows the event as free.
                </span>
              </span>
            </label>

            {/* The fee rows only exist once the event is paid. Showing them
              disabled would still invite the admin to fill them in. */}
            {form.isPaidEvent && (
              <div className="mt-4 border-t border-zinc-200 pt-4">
                <p className="mb-3 text-xs leading-relaxed text-zinc-500">
                  One row per line item. The total is worked out for you, so
                  don&apos;t add a row for it.
                </p>
                <div id="fees">
                  <Repeater<FeeItem>
                    items={fees}
                    setItems={setFees}
                    blank={() => ({ label: "", amount: 0 })}
                    addLabel="Add a fee"
                    rowLabel="Fee"
                    empty="No fees added yet."
                    renderRow={(item, update) => (
                      <div className="grid gap-2 sm:grid-cols-[1fr_9rem]">
                        <input
                          className={inputClass}
                          placeholder="Registration fee"
                          value={item.label}
                          onChange={(e) =>
                            update({ ...item, label: e.target.value })
                          }
                        />
                        <input
                          type="number"
                          min={0}
                          inputMode="numeric"
                          className={inputClass}
                          placeholder="Amount in ₹"
                          value={item.amount || ""}
                          // Number(), not the raw string — the column is an Int,
                          // and "500" would concatenate rather than add.
                          onChange={(e) =>
                            update({
                              ...item,
                              amount: Number(e.target.value) || 0,
                            })
                          }
                        />
                      </div>
                    )}
                  />
                </div>

                {errors.fees && (
                  <p className="mt-2 text-xs font-medium text-red-700">
                    {errors.fees}
                  </p>
                )}

                {fees.length > 0 && (
                  <div className="mt-3 flex items-baseline justify-between rounded-lg bg-zinc-50 px-3 py-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Total
                    </span>
                    <span className="font-mono text-sm font-semibold tabular-nums text-zinc-900">
                      ₹{fees.reduce((sum, f) => sum + (f.amount || 0), 0)}
                    </span>
                  </div>
                )}
              </div>
            )}
          </Section>

          <Section
            title="Important links"
            optional
            hint="Anything a visitor needs to open — a map, a join link, a WhatsApp group."
          >
            <Repeater<LinkItem>
              items={links}
              setItems={setLinks}
              blank={() => ({ label: "", link: "" })}
              addLabel="Add a link"
              rowLabel="Link"
              empty="No links added."
              renderRow={(item, update) => (
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    className={inputClass}
                    placeholder="WhatsApp group"
                    value={item.label}
                    onChange={(e) => update({ ...item, label: e.target.value })}
                  />
                  <input
                    type="url"
                    className={inputClass}
                    placeholder="https://…"
                    value={item.link}
                    onChange={(e) => update({ ...item, link: e.target.value })}
                  />
                </div>
              )}
            />
          </Section>
        </aside>
      </div>

      {/* Fixed rather than in flow: the form is long, and the action should
          never be more than a glance away. The pb-28 on the form keeps the
          last section clear of it. */}
      <div className="fixed inset-x-0 bottom-0 border-t border-zinc-200 bg-white/95 backdrop-blur md:left-60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <p className="min-w-0 text-xs text-zinc-500" aria-live="polite">
            {errors.submit ? (
              <span className="font-medium text-red-700">{errors.submit}</span>
            ) : problemCount > 0 ? (
              <span className="font-medium text-red-700">
                {problemCount} field{problemCount > 1 ? "s" : ""} need
                {problemCount > 1 ? "" : "s"} attention
              </span>
            ) : (
              <>
                <span className="text-red-600">*</span> required
              </>
            )}
          </p>
          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {saving ? savingLabel : submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EventForm;
