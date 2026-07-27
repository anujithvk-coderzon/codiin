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
  { name: "phone", type: "tel", required: false },
  { name: "message", type: "text", required: true },
];

const SUCCESS =
  "Your message has been sent successfully. We'll get back to you soon!";

export default function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const spec = (name: string) => FIELDS.find((f) => f.name === name);

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const field = spec(e.target.name);
    if (!field) return;
    const message = validateValue(e.target.value, field.type, field.required);
    setErrors((prev) => ({ ...prev, [field.name]: message }));
  };

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = e.currentTarget;
    // Only re-validate a field that is already showing an error, matching
    // the original behaviour.
    if (!errors[target.name]) return;
    const field = spec(target.name);
    if (!field) return;
    const message = validateValue(target.value, field.type, field.required);
    setErrors((prev) => ({ ...prev, [target.name]: message }));
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
        className="contact-form"
        id="contactForm"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="hidden"
          name="_subject"
          value="New Contact Inquiry - CODiiN"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <h3>Send us a Message</h3>

        <div className="form-group">
          <FieldLabel htmlFor="contactName" required>
            Full Name
          </FieldLabel>
          <input
            type="text"
            id="contactName"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            className={cls("name")}
            aria-invalid={!!errors.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.name} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <FieldLabel htmlFor="contactEmail" required>
              Email
            </FieldLabel>
            <input
              type="email"
              id="contactEmail"
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
            <FieldLabel htmlFor="contactPhone">Phone</FieldLabel>
            <input
              type="tel"
              id="contactPhone"
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
        </div>

        <div className="form-group">
          <label htmlFor="contactInterest">Interested In</label>
          <select id="contactInterest" name="interest" defaultValue="">
            <option value="">Select a program</option>
            {PROGRAM_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>

        <div className="form-group">
          <FieldLabel htmlFor="contactMessage" required>
            Message
          </FieldLabel>
          <textarea
            id="contactMessage"
            name="message"
            rows={4}
            placeholder="Tell us about your goals..."
            className={cls("message")}
            aria-invalid={!!errors.message}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.message} />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      <SuccessModal
        open={modalOpen}
        message={SUCCESS}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
