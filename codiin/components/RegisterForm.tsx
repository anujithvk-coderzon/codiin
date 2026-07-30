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
];

const EXPERIENCE = [
  "Student",
  "Fresher",
  "1-2 Years Experience",
  "3-5 Years Experience",
  "5+ Years Experience",
];

const RegisterForm = () => {
  const [values, setValues] = useState({
     name: "",
    email: "",
    phone: "",
    program:"",
    experience: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const check = (name: string, value: string) => {
    const v = value.trim();
    if (!v) return "This field is required";
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
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found: Record<string, string> = {};
    for (const name of ["name", "email", "phone", "program"]) {
      const message = check(name, values[name as keyof typeof values]);
      if (message) found[name] = message;
    }
    setErrors(found);
    if (Object.keys(found).length) return;

    setSending(true);
    try {
      const data = new FormData();
      data.append("_subject", "New Course Registration - CODiiN");
      data.append("_captcha", "false");
      data.append("_template", "table");
      Object.entries(values).forEach(([k, v]) => data.append(k, v));

      axios.post('/api/register',values)

      // const res = await fetch("https://formsubmit.co/ajax/contact@codiin.com", {
      //   method: "POST",
      //   body: data,
      //   headers: { Accept: "application/json" },
      // });
      // if (!res.ok) throw new Error("failed");

      setValues({ name: "", email: "", phone: "", program: "", experience: "" });
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
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="regName">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="regName"
            name="name"
            placeholder="Your full name"
            autoComplete="name"
            className={errors.name ? "error" : undefined}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="regEmail">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="regEmail"
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
          <label htmlFor="regPhone">
            Phone <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="regPhone"
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

        <div className="form-group">
          <label htmlFor="regProgram">
            Preferred Program <span className="required">*</span>
          </label>
          <select
            id="regProgram"
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
          {errors.program && <div className="error-message">{errors.program}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="regExperience">Current Experience</label>
          <select
            id="regExperience"
            name="experience"
            value={values.experience}
            onChange={handleChange}
          >
            <option value="">Select your background</option>
            {EXPERIENCE.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block btn-lg"
          disabled={sending}
        >
          {sending ? "Sending..." : "Register Now"}
        </button>
        <p className="form-note">
          By registering, you agree to our terms and privacy policy.
        </p>
      </form>

      <SuccessModal
        open={done}
        message="Thank you for registering! We will contact you shortly to schedule your free consultation."
        onClose={() => setDone(false)}
      />
    </>
  );
};

export default RegisterForm;
