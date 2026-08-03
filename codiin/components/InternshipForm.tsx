"use client";

import { PROGRAMS } from "@/lib/site";
import { useState } from "react";

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

export default function InternshipForm() {
  // Everything the form collects lives here, keyed the way the fields are
  // named, so `handleChange` can stay generic.
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    field: "",
    duration: "",
    college: "",
    year: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submission is yours to wire up — `data` holds the full application at
    // this point, ready to POST.
    console.log(data);
  };

  return (
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
          onChange={handleChange}
        />
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
            onChange={handleChange}
          />
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
            onChange={handleChange}
          />
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
            onChange={handleChange}
          >
            <option value="">Select a field</option>
            {PROGRAMS.map((program) => (
              <option key={program.slug} value={program.title}>
                {program.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="internDuration">
            Duration <span className="required">*</span>
          </label>
          <select
            id="internDuration"
            name="duration"
            value={data.duration}
            onChange={handleChange}
          >
            <option value="">How long?</option>
            {DURATIONS.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="internYear">
            Year of Study <span className="required">*</span>
          </label>
          <select
            id="internYear"
            name="year"
            value={data.year}
            onChange={handleChange}
          >
            <option value="">Select year</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit Application
      </button>
      <p className="form-note">
        We reply within two working days about availability for your field and
        dates.
      </p>
    </form>
  );
}
