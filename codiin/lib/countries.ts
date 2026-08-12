/**
 * Countries with their international dialling codes, for the one-to-one
 * enquiry form.
 *
 * Not the full ISO list — that is 250 entries and most would never be picked.
 * This covers India, the Gulf states where a large share of Malayali families
 * live and work, and the countries students most often move to. "Other" is at
 * the end so nobody is stuck.
 *
 * Sorted with India first because it is the overwhelming majority, then
 * alphabetically. A dropdown that makes the common answer the first answer
 * saves nearly everyone a scroll.
 */
export type Country = { name: string; code: string; dial: string };

export const COUNTRIES: Country[] = [
  { name: "India", code: "IN", dial: "+91" },
  { name: "Australia", code: "AU", dial: "+61" },
  { name: "Bahrain", code: "BH", dial: "+973" },
  { name: "Bangladesh", code: "BD", dial: "+880" },
  { name: "Belgium", code: "BE", dial: "+32" },
  { name: "Canada", code: "CA", dial: "+1" },
  { name: "China", code: "CN", dial: "+86" },
  { name: "Denmark", code: "DK", dial: "+45" },
  { name: "Egypt", code: "EG", dial: "+20" },
  { name: "France", code: "FR", dial: "+33" },
  { name: "Germany", code: "DE", dial: "+49" },
  { name: "Hong Kong", code: "HK", dial: "+852" },
  { name: "Indonesia", code: "ID", dial: "+62" },
  { name: "Ireland", code: "IE", dial: "+353" },
  { name: "Israel", code: "IL", dial: "+972" },
  { name: "Italy", code: "IT", dial: "+39" },
  { name: "Japan", code: "JP", dial: "+81" },
  { name: "Jordan", code: "JO", dial: "+962" },
  { name: "Kenya", code: "KE", dial: "+254" },
  { name: "Kuwait", code: "KW", dial: "+965" },
  { name: "Malaysia", code: "MY", dial: "+60" },
  { name: "Maldives", code: "MV", dial: "+960" },
  { name: "Nepal", code: "NP", dial: "+977" },
  { name: "Netherlands", code: "NL", dial: "+31" },
  { name: "New Zealand", code: "NZ", dial: "+64" },
  { name: "Nigeria", code: "NG", dial: "+234" },
  { name: "Norway", code: "NO", dial: "+47" },
  { name: "Oman", code: "OM", dial: "+968" },
  { name: "Pakistan", code: "PK", dial: "+92" },
  { name: "Philippines", code: "PH", dial: "+63" },
  { name: "Poland", code: "PL", dial: "+48" },
  { name: "Portugal", code: "PT", dial: "+351" },
  { name: "Qatar", code: "QA", dial: "+974" },
  { name: "Saudi Arabia", code: "SA", dial: "+966" },
  { name: "Singapore", code: "SG", dial: "+65" },
  { name: "South Africa", code: "ZA", dial: "+27" },
  { name: "South Korea", code: "KR", dial: "+82" },
  { name: "Spain", code: "ES", dial: "+34" },
  { name: "Sri Lanka", code: "LK", dial: "+94" },
  { name: "Sweden", code: "SE", dial: "+46" },
  { name: "Switzerland", code: "CH", dial: "+41" },
  { name: "Thailand", code: "TH", dial: "+66" },
  { name: "Turkey", code: "TR", dial: "+90" },
  { name: "United Arab Emirates", code: "AE", dial: "+971" },
  { name: "United Kingdom", code: "GB", dial: "+44" },
  { name: "United States", code: "US", dial: "+1" },
  { name: "Vietnam", code: "VN", dial: "+84" },
  { name: "Other", code: "XX", dial: "+" },
];

/** Lookup by name, since that is what the form stores and submits. */
export const dialFor = (name: string) =>
  COUNTRIES.find((c) => c.name === name)?.dial ?? "+";
