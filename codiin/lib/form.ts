export const FORM_ENDPOINT = "https://formsubmit.co/ajax/contact@codiin.com";

export type FieldErrors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-()]{10,}$/;

/**
 * Mirrors the validation rules the original script.js applied on blur:
 * required first, then a type-specific format check.
 */
export function validateValue(
  value: string,
  type: string,
  required: boolean,
): string {
  const trimmed = value.trim();

  if (required && !trimmed) return "This field is required";
  if (!trimmed) return "";

  if (type === "email" && !EMAIL_RE.test(trimmed)) {
    return "Please enter a valid email address";
  }
  if (type === "tel" && !PHONE_RE.test(trimmed)) {
    return "Please enter a valid phone number";
  }
  return "";
}

export type FieldSpec = {
  name: string;
  type: string;
  required: boolean;
};

export function validateForm(
  form: HTMLFormElement,
  fields: FieldSpec[],
): FieldErrors {
  const errors: FieldErrors = {};
  for (const field of fields) {
    const el = form.elements.namedItem(field.name) as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | null;
    if (!el) continue;
    const message = validateValue(el.value, field.type, field.required);
    if (message) errors[field.name] = message;
  }
  return errors;
}

export async function submitForm(form: HTMLFormElement): Promise<void> {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error("Form submission failed");
}
