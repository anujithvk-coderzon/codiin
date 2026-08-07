/**
 * Shared between the events listing and an individual event page. Both format
 * the same three dates, and having formatted them separately is how the two
 * pages end up disagreeing about what day an event starts.
 */

/** The shapes stored in the Json columns, as the admin writes them. */
export type Pair = { label: string; description: string };
export type Fee = { label: string; amount: number };
export type LinkItem = { label: string; link: string };

/* These render on the server, which runs in UTC. Without an explicit zone
   every date would be formatted for the server rather than for the person
   reading it in Kerala. */
const IST = "Asia/Kolkata";

export const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-IN", {
    timeZone: IST,
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const fmtTime = (d: Date) =>
  d.toLocaleTimeString("en-IN", {
    timeZone: IST,
    hour: "2-digit",
    minute: "2-digit",
  });

/** A one-day event reads as a date and a time window; longer ones as dates. */
export const fmtRange = (start: Date, end: Date) => {
  const sameDay =
    start.toLocaleDateString("en-IN", { timeZone: IST }) ===
    end.toLocaleDateString("en-IN", { timeZone: IST });
  return sameDay
    ? `${fmtDate(start)}, ${fmtTime(start)} – ${fmtTime(end)}`
    : `${fmtDate(start)} – ${fmtDate(end)}`;
};

/* The deadline carries a time on rows created since the admin form started
   asking for one, and not on older ones. Ten characters is a bare
   "YYYY-MM-DD": read as UTC midnight and formatted in UTC, so the day cannot
   slip for anyone behind it. Anything longer is a real timestamp and is shown
   in IST with its time. */
export const fmtDeadline = (value: string) => {
  if (!value) return null;
  if (value.length === 10)
    return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-IN", {
      timeZone: "UTC",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  return new Date(value).toLocaleString("en-IN", {
    timeZone: IST,
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/** Whether the deadline has passed. A date-only value stays open until the
 *  end of that day; a timestamp closes at the moment itself. */
export const isClosed = (value: string) => {
  if (!value) return false;
  const at =
    value.length === 10
      ? new Date(`${value}T23:59:59Z`)
      : new Date(value);
  return at < new Date();
};

/** Indian formatting, and no decimals on a whole-rupee fee. */
export const fmtAmount = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
