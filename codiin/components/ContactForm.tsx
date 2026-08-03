"use client";

import { useState } from "react";
import SuccessModal from "./SuccessModal";
import axios from "axios";

const PROGRAMS = [
  "Data Science",
  "Agentic AI",
  "Data Analytics",
  "Data Engineering",
  "Full Stack Python (Django/FastAPI)",
  "Full Stack Java (Spring Boot)",
  "Full Stack JavaScript (MERN/MEAN)",
  "Full Stack .NET (ASP.NET Core)",
  "Hybrid Mobile Apps (React Native/Flutter)",
  "Other / Not Sure",
];

const ContactForm = () => {
  const [values, setValues] = useState({
    type: "CONTACT",
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  // Every field on this form is mandatory, so the empty check comes first and
  // covers all of them — including the program select, whose placeholder
  // option carries an empty value and so fails it like any blank input.
  const check = (name: string, value: string) => {
    const v = value.trim();
    if (!v)
      return name === "program"
        ? "Please select a program"
        : "This field is required";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return "Please enter a valid email address";
    if (name === "phone" && !/^[\d\s+\-()]{10,}$/.test(v))
      return "Please enter a valid phone number";
    return "";
  };

  const REQUIRED = ["name", "email", "phone", "program", "message"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found: Record<string, string> = {};
    for (const name of REQUIRED) {
      const message = check(name, values[name as keyof typeof values]);
      if (message) found[name] = message;
    }
    setErrors(found);
    if (Object.keys(found).length) return;

    setSending(true);
    try {
      const data = new FormData();
      data.append("_subject", "New Contact Inquiry - CODiiN");
      data.append("_captcha", "false");
      data.append("_template", "table");
      Object.entries(values).forEach(([k, v]) => data.append(k, v));
     axios.post('/api/register',values)
      const res = await fetch("https://formsubmit.co/ajax/contact@codiin.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("failed");

      setValues({ type: "CONTACT", name: "", email: "", phone: "", program: "", message: "" });
      setDone(true);
    } catch {
      window.alert(
        "Sorry, there was an error submitting the form. Please try again or contact us directly at contact@codiin.com",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <h3>Send us a Message</h3>

        <div className="form-group">
          <label htmlFor="contactName">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            className={errors.name ? "error" : undefined}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contactEmail">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="contactEmail"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              className={errors.email ? "error" : undefined}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="contactPhone">
              Phone <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="phone"
              placeholder="+91 83018 90158"
              autoComplete="tel"
              className={errors.phone ? "error" : undefined}
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contactInterest">
            Interested In <span className="required">*</span>
          </label>
          <select
            id="contactInterest"
            name="program"
            className={errors.program ? "error" : undefined}
            value={values.program}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a program</option>
            {PROGRAMS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.program && (
            <div className="error-message">{errors.program}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contactMessage">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="contactMessage"
            name="message"
            rows={4}
            placeholder="Tell us about your goals..."
            className={errors.message ? "error" : undefined}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      <SuccessModal
        open={done}
        message="Your message has been sent successfully. We'll get back to you soon!"
        onClose={() => setDone(false)}
      />
    </>
  );
};

export default ContactForm;
