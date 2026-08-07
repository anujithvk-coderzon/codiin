"use client";

import { useEffect } from "react";

/**
 * A brief message that dismisses itself. Kept in the project rather than
 * pulled from a library — the site has no UI dependencies and this is forty
 * lines.
 *
 * Rendered even when empty so it can transition in and out; `active` is what
 * makes it visible.
 */
export default function Toast({
  message,
  onDismiss,
  duration = 4000,
}: {
  message: string | null;
  /** Must be stable — a new function each render would restart the timer. */
  onDismiss: () => void;
  duration?: number;
}) {
  useEffect(() => {
    if (!message) return;
    const id = window.setTimeout(onDismiss, duration);
    // Cleared on unmount and whenever the message changes, so a second toast
    // gets its full duration rather than inheriting what was left of the first.
    return () => window.clearTimeout(id);
  }, [message, onDismiss, duration]);

  return (
    <div
      className={`toast${message ? " active" : ""}`}
      role="status"
      // polite rather than assertive: this is worth announcing, but not worth
      // interrupting whatever a screen reader is already saying.
      aria-live="polite"
    >
      {message}
    </div>
  );
}
