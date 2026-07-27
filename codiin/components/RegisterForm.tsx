"use client";

import { useState, type FormEvent, type FocusEvent } from "react";
import {
  submitForm,
  validateForm,
  validateValue,
  type FieldErrors,
  type FieldSpec,
} from "@/lib/form";
import { ErrorMessage, FieldLabel, PROGRAM_OPTIONS } from "./FormField";
import SuccessModal from "./SuccessModal";

const FIELDS: FieldSpec[] = [
  { name: "name", type: "text", required: true },
  { name: "email", type: "email", required: true },
  { name: "phone", type: "tel", required: true },
  { name: "program", type: "text", required: true },
];

const SUCCESS =
  "Thank you for registering! We will contact you shortly to schedule your free consultation.";

const EXPERIENCE_OPTIONS = [
  { value: "Student", label: "Student" },
  { value: "Fresher", label: "Fresher" },
  { value: "1-2 Years", label: "1-2 Years Experience" },
  { value: "3-5 Years", label: "3-5 Years Experience" },
  { value: "5+ Years", label: "5+ Years Experience" },
];

export default function RegisterForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const spec = (name: string) => FIELDS.find((f) => f.name === name);

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const field = spec(e.target.name);
    if (!field) return;
    setErrors((prev) => ({
      ...prev,
      [field.name]: validateValue(e.target.value, field.type, field.required),
    }));
  };

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.currentTarget;
    if (!errors[target.name]) return;
    const field = spec(target.name);
    if (!field) return;
    setErrors((prev) => ({
      ...prev,
      [target.name]: validateValue(target.value, field.type, field.required),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const found = validateForm(form, FIELDS);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = form.elements.namedItem(
        Object.keys(found)[0],
      ) as HTMLElement | null;
      first?.focus();
      return;
    }

    setSending(true);
    try {
      await submitForm(form);
      form.reset();
      setModalOpen(true);
    } catch {
      window.alert(
        "Sorry, there was an error submitting the form. Please try again or contact us directly at contact@codiin.com",
      );
    } finally {
      setSending(false);
    }
  };

  const cls = (name: string) => (errors[name] ? "error" : undefined);

  return (
    <>
      <form
        className="register-form"
        id="registerForm"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="hidden"
          name="_subject"
          value="New Course Registration - CODiiN"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="form-group">
          <FieldLabel htmlFor="regName" required>
            Full Name
          </FieldLabel>
          <input
            type="text"
            id="regName"
            name="name"
            placeholder="Your full name"
            autoComplete="name"
            className={cls("name")}
            aria-invalid={!!errors.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.name} />
        </div>

        <div className="form-group">
          <FieldLabel htmlFor="regEmail" required>
            Email
          </FieldLabel>
          <input
            type="email"
            id="regEmail"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            className={cls("email")}
            aria-invalid={!!errors.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.email} />
        </div>

        <div className="form-group">
          <FieldLabel htmlFor="regPhone" required>
            Phone
          </FieldLabel>
          <input
            type="tel"
            id="regPhone"
            name="phone"
            placeholder="+91 83018 90158"
            autoComplete="tel"
            className={cls("phone")}
            aria-invalid={!!errors.phone}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.phone} />
        </div>

        <div className="form-group">
          <FieldLabel htmlFor="regProgram" required>
            Preferred Program
          </FieldLabel>
          <select
            id="regProgram"
            name="program"
            defaultValue=""
            className={cls("program")}
            aria-invalid={!!errors.program}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option value="">Select a program</option>
            {PROGRAM_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <ErrorMessage message={errors.program} />
        </div>

        <div className="form-group">
          <label htmlFor="regExperience">Current Experience</label>
          <select id="regExperience" name="experience" defaultValue="">
            <option value="">Select your background</option>
            {EXPERIENCE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
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
        open={modalOpen}
        message={SUCCESS}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
