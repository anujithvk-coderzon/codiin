/**
 * Renders a schema.org JSON-LD block.
 *
 * The payload is static, author-controlled site data — never
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
