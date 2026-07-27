/**
 * Renders a schema.org JSON-LD block.
 *
 * The payload is built from static site data in `lib/schema.ts`, never from
 * user input, and is serialised with `<` escaped so it cannot terminate the
 * surrounding script tag.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
