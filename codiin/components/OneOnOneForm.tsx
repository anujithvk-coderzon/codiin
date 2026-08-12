"use client";

import { COUNTRIES, dialFor } from "@/lib/countries";
import { PROGRAMS } from "@/lib/site";
import axios, { isAxiosError } from "axios";
import { useState } from "react";
import SuccessModal from "./SuccessModal";

// Adding a key here is all it takes to make a field required — the submit
// check iterates Object.keys(BLANK) rather than a separate list. `message` is
// the one optional field, so it is excluded below by name.
const BLANK = {
  name: "",
  email: "",
  country: "India",
  phone: "",
  course: "",
  qualification: "",
  institution: "",
  fieldOfStudy: "",
  yearOfPass: "",
  message: "",
};

const OPTIONAL = new Set(["message"]);

const QUALIFICATIONS = [
  "School student (up to 12th)",
  "Diploma",
  "Bachelor's degree",
  "Master's degree",
  "PhD",
  "Working professional",
  "Other",
];

// A dropdown is chosen from, not filled in, so "This field is required" reads
// wrong on one. Keyed by field name; anything absent gets the input wording.
const SELECT_PROMPTS: Record<string, string> = {
  country: "Please select your country",
  course: "Please select a course",
  qualification: "Please select your qualification",
};

const LABELS: Record<keyof typeof BLANK, string> = {
  name: "Full Name",
  email: "Email",
  country: "Country",
  phone: "Phone Number",
  course: "Course You Want to Learn",
  qualification: "Highest Qualification",
  institution: "School / College / Company",
  fieldOfStudy: "Field of Study",
  yearOfPass: "Year of Passing",
  message: "Anything else we should know?",
};

/* Same range and reasoning as the event registration form: wide enough for a
   first-year student and someone who graduated decades ago, checked on blur
   rather than offered as forty dropdown options. */
const YEARS_AHEAD = 8;
const YEARS_BACK = 40;

export default function OneOnOneForm() {
  const [data, setData] = useState(BLANK);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const dial = dialFor(data.country);

  const check = (name: string, value: string) => {
    const v = value.trim();
    if (!v)
      return OPTIONAL.has(name)
        ? ""
        : (SELECT_PROMPTS[name] ?? "This field is required");
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return "Please enter a valid email address";
    /* Digits only, and without the country code — that comes from the country
       dropdown. Lengths differ by country (India 10, UAE 9, US 10), so the
       check is a range rather than an exact figure. */
    if (name === "phone" && !/^\d{6,15}$/.test(v))
      return "Enter your number without the country code";
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name } = e.target;
    // Phone and year are digits and nothing else, capped as they are typed.
    const raw = e.target.value;
    const value =
      name === "phone"
        ? raw.replace(/\D/g, "").slice(0, 15)
        : name === "yearOfPass"
          ? raw.replace(/\D/g, "").slice(0, 4)
          : raw;

    setData((prev) => ({ ...prev, [name]: value }));
    // Only re-check a field that is already showing an error. Validating as
    // someone types into an untouched field flags it before they have
    // finished writing it.
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found: Record<string, string> = {};
    for (const name of Object.keys(BLANK)) {
      const message = check(name, data[name as keyof typeof data]);
      if (message) found[name] = message;
    }
    setErrors(found);
    if (Object.keys(found).length) return;

    setSending(true);
    try {
      await axios.post("/api/one-on-one", {
        ...data,
        // Sent apart from the number so the admin can read either on its own,
        // and so a number is never stored with the wrong code baked in.
        dialCode: dial,
      });
      // Only after the request resolves: clearing first would throw the
      // enquiry away if the post then failed.
      setData(BLANK);
      setErrors({});
      setDone(true);
    } catch (error) {
      console.error(isAxiosError(error) ? error.response?.data : error);
      window.alert(
        "Sorry, there was an error sending your request. Please try again or contact us directly at contact@coderzon.com",
      );
    } finally {
      setSending(false);
    }
  };

  const field = (
    name: keyof typeof BLANK,
    type: "text" | "email" | "tel",
    placeholder: string,
    autoComplete?: string,
  ) => (
    <div className="form-group">
      <label htmlFor={`oo-${name}`}>
        {LABELS[name]} <span className="required">*</span>
      </label>
      <input
        type={type}
        id={`oo-${name}`}
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

  const select = (
    name: keyof typeof BLANK,
    prompt: string,
    options: string[],
  ) => (
    <div className="form-group">
      <label htmlFor={`oo-${name}`}>
        {LABELS[name]} <span className="required">*</span>
      </label>
      <select
        id={`oo-${name}`}
        name={name}
        value={data[name]}
        className={errors[name] ? "error" : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="">{prompt}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[name] && <div className="error-message">{errors[name]}</div>}
    </div>
  );

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <h3>Request a Mentor</h3>

        {field("name", "text", "Your name", "name")}

        <div className="form-row">
          {field("email", "email", "your@email.com", "email")}

          {/* Country is its own field because it sets the dial code below. */}
          <div className="form-group">
            <label htmlFor="oo-country">
              {LABELS.country} <span className="required">*</span>
            </label>
            <select
              id="oo-country"
              name="country"
              value={data.country}
              className={errors.country ? "error" : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="country-name"
            >
              <option value="">Select your country</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.name}>
                  {c.name} ({c.dial})
                </option>
              ))}
            </select>
            {errors.country && (
              <div className="error-message">{errors.country}</div>
            )}
          </div>
        </div>

        {/* The dial code is shown, not typed. It follows the country above, so
            it can never disagree with it, and the person only enters the part
            they actually know. */}
        <div className="form-group">
          <label htmlFor="oo-phone">
            {LABELS.phone} <span className="required">*</span>
          </label>
          <div className={`phone-field${errors.phone ? " error" : ""}`}>
            <span className="phone-dial" aria-hidden="true">
              {dial}
            </span>
            <input
              type="tel"
              id="oo-phone"
              name="phone"
              inputMode="numeric"
              placeholder="9526995375"
              autoComplete="tel-national"
              aria-describedby="oo-phone-hint"
              value={data.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div id="oo-phone-hint" className="field-hint">
            {dial} is set from the country you chose.
          </div>
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        {select(
          "course",
          "Select a course",
          PROGRAMS.map((p) => p.title),
        )}

        <div className="form-row">
          {select("qualification", "Select one", QUALIFICATIONS)}
          {field("yearOfPass", "text", "e.g. 2027 (or expected)")}
        </div>

        <div className="form-row">
          {field("institution", "text", "Your college or company", "organization")}
          {field("fieldOfStudy", "text", "e.g. B.Tech CSE")}
        </div>

        <div className="form-group">
          <label htmlFor="oo-message">{LABELS.message}</label>
          <textarea
            id="oo-message"
            name="message"
            rows={3}
            placeholder="Your goals, your timeline, anything you'd like the mentor to know"
            value={data.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          disabled={sending}
        >
          {sending ? "Sending..." : "Request a Mentor"}
        </button>
      </form>

      <SuccessModal
        open={done}
        message="Thanks — we've got your request. A mentor coordinator will call you within one working day to talk through your goals."
        onClose={() => setDone(false)}
      />
    </>
  );
}
