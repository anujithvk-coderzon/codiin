"use client";

import axios, { isAxiosError } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { markRegistered, useRegistered } from "@/lib/registeredEvents";
import SuccessModal from "./SuccessModal";
import Toast from "./Toast";

// Adding a key here is all it takes to make a field required — the submit
// check iterates Object.keys(BLANK) rather than a separate list.
const BLANK = {
  name: "",
  email: "",
  mobile: "",
  college: "",
  course: "",
  yearOfPass: "",
  howYouKnow: "",
};

const SOURCES = [
  "Instagram",
  "WhatsApp",
  "A friend or classmate",
  "My college",
  "Google search",
  "LinkedIn",
  "Other",
];

/* Typed rather than picked from a list. A range wide enough to include both a
   first-year student and someone who graduated decades ago is forty options
   long, and a dropdown that long renders taller than the dialog it sits in —
   the browser draws it outside the modal entirely. Typing four digits is also
   faster than scrolling to 1998. The bounds are only enforced in check(),
   which runs on blur and submit, so the current year is never read during a
   render. */
const YEARS_AHEAD = 8;
const YEARS_BACK = 30;

// A dropdown is chosen from, not filled in, so "This field is required" reads
// wrong on one. Keyed by field name; anything absent gets the input wording.
const SELECT_PROMPTS: Record<string, string> = {
  howYouKnow: "Please tell us how you heard about this",
};

const LABELS: Record<keyof typeof BLANK, string> = {
  name: "Full Name",
  email: "Email",
  mobile: "Mobile Number",
  college: "College",
  course: "Course",
  yearOfPass: "Year of Passing",
  howYouKnow: "How did you hear about this?",
};

export default function EventRegisterForm({
  slug,
  eventName,
  /** ISO end of the event — how long the "registered" marker is worth keeping. */
  endsAt,
  className = "btn btn-primary btn-lg",
  /** Distinguishes the two instances on the page for label/id purposes. */
  idPrefix,
}: {
  slug: string;
  eventName: string;
  endsAt: string;
  className?: string;
  idPrefix: string;
}) {
  const registered = useRegistered(slug);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(BLANK);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  // Stable, so showing a toast does not restart its own dismiss timer.
  const dismissToast = useCallback(() => setToast(null), []);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Focus the first field, lock the page behind the dialog, and close on
  // Escape — the three things a dialog has to do to not trap someone.
  useEffect(() => {
    if (!open) return;

    firstFieldRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const check = (name: string, value: string) => {
    const v = value.trim();
    if (!v) return SELECT_PROMPTS[name] ?? "This field is required";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return "Please enter a valid email address";
    if (name === "mobile" && !/^[\d\s+\-()]{10,}$/.test(v))
      return "Please enter a valid mobile number";
    if (name === "yearOfPass") {
      const now = new Date().getFullYear();
      if (!/^\d{4}$/.test(v)) return "Enter a 4-digit year, e.g. 2027";
      const year = Number(v);
      if (year < now - YEARS_BACK || year > now + YEARS_AHEAD)
        return `Enter a year between ${now - YEARS_BACK} and ${now + YEARS_AHEAD}`;
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name } = e.target;
    /* The year is four digits and nothing else. Capped as it is typed rather
       than rejected afterwards — maxLength alone would let a pasted "20277"
       through, and it does nothing at all on a number input. */
    const value =
      name === "yearOfPass"
        ? e.target.value.replace(/\D/g, "").slice(0, 4)
        : e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
    // Only re-check a field that is already showing an error. Validating as
    // someone types into an untouched field flags it before they have
    // finished writing it.
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Object.keys(BLANK) rather than a hand-written list, so adding a field to
    // the form cannot leave it silently unvalidated.
    const found: Record<string, string> = {};
    for (const name of Object.keys(BLANK)) {
      const message = check(name, data[name as keyof typeof data]);
      if (message) found[name] = message;
    }
    setErrors(found);
    if (Object.keys(found).length) return;

    setSending(true);
    try {
      await axios.post(
        // The event is identified by the slug in the query string, which is
        // where the route reads it from.
        `/api/event/register?slug=${encodeURIComponent(slug)}`,
        {
          ...data,
          // yearOfPass is a DateTime column, so a bare "2027" would not
          // coerce. Sent as the first of January that year.
          yearOfPass: new Date(`${data.yearOfPass}-01-01T00:00:00Z`).toISOString(),
        },
      );
      // Only after the request resolves: clearing first would throw the
      // registration away if the post then failed.
      setData(BLANK);
      setErrors({});
      setOpen(false);
      setDone(true);
      markRegistered(slug, endsAt);
    } catch (error) {
      /* The route answers 400 when this email is already on this event.
         That is not a failure to report as one — the dialog closes, a toast
         says so, and the button switches to "Registered". */
      if (isAxiosError(error) && error.response?.status === 400) {
        markRegistered(slug, endsAt);
        setOpen(false);
        setToast("You have already registered for this event.");
        return;
      }
      console.error(isAxiosError(error) ? error.response?.data : error);
      window.alert(
        "Sorry, there was an error submitting your registration. Please try again or contact us directly at contact@coderzon.com",
      );
    } finally {
      // In finally, so the button comes back whichever way it went —
      // otherwise a failed submit leaves it stuck on "Registering...".
      setSending(false);
    }
  };

  const field = (
    name: keyof typeof BLANK,
    type: "text" | "email" | "tel",
    placeholder: string,
    autoComplete?: string,
    ref?: React.Ref<HTMLInputElement>,
  ) => (
    <div className="form-group">
      <label htmlFor={`${idPrefix}-${name}`}>
        {LABELS[name]} <span className="required">*</span>
      </label>
      <input
        ref={ref}
        type={type}
        // A number input brings up the right keyboard but also accepts
        // "e", "+" and "-", and reports an empty value for anything it
        // considers invalid — which would defeat the sanitiser below. A text
        // input with a numeric inputMode gets the keypad without any of that.
        inputMode={name === "yearOfPass" ? "numeric" : undefined}
        maxLength={name === "yearOfPass" ? 4 : undefined}
        id={`${idPrefix}-${name}`}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={data[name]}
        className={errors[name] ? "error" : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors[name] && <div className="error-message">{errors[name]}</div>}
    </div>
  );

  return (
    <>
      {registered ? (
        <button type="button" className={className} disabled>
          &#10003; Registered
        </button>
      ) : (
        <button
          type="button"
          className={className}
          onClick={() => setOpen(true)}
        >
          Register
        </button>
      )}

      <div
        className={`modal${open ? " active" : ""}`}
        role="dialog"
        aria-modal={open}
        aria-labelledby={`${idPrefix}-title`}
        aria-hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="modal-content event-register-modal">
          <button
            type="button"
            className="event-register-close"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>

          <h3 id={`${idPrefix}-title`}>Register for this event</h3>
          <p className="event-register-sub">{eventName}</p>

          <form className="register-form" onSubmit={handleSubmit} noValidate>
            {field("name", "text", "Your name", "name", firstFieldRef)}

            <div className="form-row">
              {field("email", "email", "your@email.com", "email")}
              {field("mobile", "tel", "+91 83018 90158", "tel")}
            </div>

            <div className="form-row">
              {field("college", "text", "Your college", "organization")}
              {field("course", "text", "e.g. B.Tech CSE")}
            </div>

            <div className="form-row">
              {/* "or expected" so someone still studying enters the year
                  they will finish rather than skipping the field. */}
              {field("yearOfPass", "text", "e.g. 2027 (or expected)")}

              <div className="form-group">
                <label htmlFor={`${idPrefix}-howYouKnow`}>
                  {LABELS.howYouKnow} <span className="required">*</span>
                </label>
                <select
                  id={`${idPrefix}-howYouKnow`}
                  name="howYouKnow"
                  value={data.howYouKnow}
                  className={errors.howYouKnow ? "error" : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select an option</option>
                  {SOURCES.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
                {errors.howYouKnow && (
                  <div className="error-message">{errors.howYouKnow}</div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg event-register-submit"
              disabled={sending}
            >
              {sending ? "Registering..." : "Submit registration"}
            </button>
          </form>
        </div>
      </div>

      <Toast message={toast} onDismiss={dismissToast} />

      <SuccessModal
        open={done}
        message={`You're registered for ${eventName}. We'll be in touch with the details.`}
        onClose={() => setDone(false)}
      />
    </>
  );
}
