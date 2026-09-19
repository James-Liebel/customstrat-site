/**
 * Renders a schema.org JSON-LD block.
 *
 * `<script type="application/ld+json">` is data, not executable JS, but it is
 * still governed by the page's `script-src`. The CSP in the root layout keeps
 * `'unsafe-inline'`, so these blocks are allowed as-is.
 *
 * The `<` escape prevents a string inside the payload from closing the script
 * element early; `JSON.stringify` alone would not.
 */
export default function JsonLd({ schema }: { schema: object | null }) {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
