"use client";

import { PROGRAMS } from "@/lib/site";
import axios, { isAxiosError } from "axios";
import { useState } from "react";
import SuccessModal from "./SuccessModal";

// Adding a key here is all it takes to make a field required — the submit
// check iterates Object.keys(BLANK) rather than a separate list.
const BLANK = {
  name: "",
  email: "",
  phone: "",
  field: "",
  duration: "",
  college: "",
  course: "",
  year: "",
};

const DURATIONS = [
  "1 Month",
  "2 Months",
  "3 Months",
  "4 Months",
  "6 Months",
  "More than 6 Months",
];

const YEARS = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Final Year",
  "Graduated",
];

// A dropdown is chosen from, not filled in, so "This field is required" reads
// wrong on one. Keyed by field name; anything absent gets the input wording.
const SELECT_PROMPTS: Record<string, string> = {
  field: "Please select a field",
  duration: "Please select a duration",
  year: "Please select your year",
};

export default function InternshipForm() {
  // Everything the form collects lives here, keyed the way the fields are
  // named, so `handleChange` can stay generic.
  const [data, setData] = useState(BLANK);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const check = (name: string, value: string) => {
    const v = value.trim();
    if (!v) return SELECT_PROMPTS[name] ?? "This field is required";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return "Please enter a valid email address";
    if (name === "phone" && !/^[\d\s+\-()]{10,}$/.test(v))
      return "Please enter a valid phone number";
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Only re-check a field that is already showing an error. Validating as
    // someone types into an untouched field flags it before they have finished
    // writing it.
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
      await axios.post("/api/internship", data);
      // Only after the request resolves: clearing first would throw the
      // application away if the post then failed.
      setData(BLANK);
      setErrors({});
      setDone(true);
    } catch (error) {
      console.error(isAxiosError(error) ? error.response?.data : error);
      window.alert(
        "Sorry, there was an error submitting your application. Please try again or contact us directly at contact@coderzon.com",
      );
    } finally {
      // In finally, so the button comes back whichever way it went — otherwise
      // a failed submit leaves it stuck on "Submitting...".
      setSending(false);
    }
  };

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <h3>Apply for an Internship</h3>

        <div className="form-group">
          <label htmlFor="internName">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="internName"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={data.name}
            className={errors.name ? "error" : undefined}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="internEmail">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="internEmail"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              value={data.email}
              className={errors.email ? "error" : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="internPhone">
              Phone <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="internPhone"
              name="phone"
              placeholder="+91 83018 90158"
              autoComplete="tel"
              value={data.phone}
              className={errors.phone ? "error" : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && (
              <div className="error-message">{errors.phone}</div>
            )}
          </div>
        </div>

        {/* Paired into rows rather than one field per line. Seven stacked fields
          is a long scroll on a phone, and a form that looks long is a form
          people abandon — these pair naturally anyway. */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="internField">
              Internship Field <span className="required">*</span>
            </label>
            {/* Driven by PROGRAMS so the options can never drift out of step
              with the tracks listed above on this page. */}
            <select
              id="internField"
              name="field"
              value={data.field}
              className={errors.field ? "error" : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select a field</option>
              {PROGRAMS.map((program) => (
                <option key={program.slug} value={program.title}>
                  {program.title}
                </option>
              ))}
            </select>
            {errors.field && (
              <div className="error-message">{errors.field}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="internDuration">
              Duration <span className="required">*</span>
            </label>
            <select
              id="internDuration"
              name="duration"
              value={data.duration}
              className={errors.duration ? "error" : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">How long?</option>
              {DURATIONS.map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
            {errors.duration && (
              <div className="error-message">{errors.duration}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="internCollege">
              College <span className="required">*</span>
            </label>
            <input
              type="text"
              id="internCollege"
              name="college"
              placeholder="Your college"
              autoComplete="organization"
              value={data.college}
              className={errors.college ? "error" : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.college && (
              <div className="error-message">{errors.college}</div>
            )}
          </div>
          {/* Paired with College: the course is what they study *there*, so the
              two read as one answer. Free text rather than a dropdown — the
              spread of degree names across colleges is too wide to enumerate,
              and a wrong list forces people into "Other". */}
          <div className="form-group">
            <label htmlFor="internCourse">
              Course <span className="required">*</span>
            </label>
            <input
              type="text"
              id="internCourse"
              name="course"
              placeholder="e.g. B.Tech Computer Science"
              value={data.course}
              className={errors.course ? "error" : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.course && (
              <div className="error-message">{errors.course}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="internYear">
              Year of Study <span className="required">*</span>
            </label>
            <select
              id="internYear"
              name="year"
              value={data.year}
              className={errors.year ? "error" : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select year</option>
              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.year && <div className="error-message">{errors.year}</div>}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={sending}
        >
          {sending ? "Submitting..." : "Submit Application"}
        </button>
        <p className="form-note">
          We reply within two working days about availability for your field and
          dates.
        </p>
      </form>

      <SuccessModal
        open={done}
        message="Your internship application has been received. We'll get back to you within two working days."
        onClose={() => setDone(false)}
      />
    </>
  );
}
