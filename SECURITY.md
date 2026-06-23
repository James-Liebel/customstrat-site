# Security

Security posture of the CustomStrat Advisory website (https://customstrat.com):
what is hardened in the codebase, and the controls that must be applied at the
platform/infrastructure layer.

## Architecture & threat model

The site is a **static export** (`next build` with `output: 'export'`) served by
**GitHub Pages** from the `main` branch root. There is **no application server,
database, authentication, user input, or server-side code in production** — every
page is pre-rendered HTML/CSS/JS. This removes the classic server-side risks
(SQLi, SSRF, auth bypass, RCE, request smuggling) from the *deployed* site. The
main residual web risks for a static site are third-party script compromise,
clickjacking, transport downgrade/mixed content, and information disclosure. The
build toolchain runs locally on a trusted machine with first-party input only.

The only third party is **Microsoft Clarity** (analytics).

## Hardening applied in code

### Content-Security-Policy (via `<meta http-equiv>`)
GitHub Pages cannot set HTTP headers, so the CSP is delivered as a `<meta>` tag in
the root layout (`customstrat-advisory/src/app/layout.tsx`), rendered into the
`<head>` of every page. The allowlist was built from a real network trace
(`scripts/csp-inventory.mjs`) and verified to enforce with **zero violations
across all 24 routes** (`scripts/csp-verify.mjs`).

```
default-src 'self'; base-uri 'self'; object-src 'none'; form-action 'self';
frame-src 'none'; worker-src 'self' blob:; manifest-src 'self';
script-src 'self' 'unsafe-inline' https://*.clarity.ms;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https://*.clarity.ms https://c.bing.com;
font-src 'self'; connect-src 'self' https://*.clarity.ms;
upgrade-insecure-requests; block-all-mixed-content
```

Rationale:
- `default-src 'self'` + tight per-type allowlists: only first-party assets and
  Microsoft Clarity load. Clarity domains observed: `scripts.clarity.ms` /
  `www.clarity.ms` (script), `i.clarity.ms` (telemetry → connect),
  `c.clarity.ms` / `c.bing.com` (pixel images).
- `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`: block
  plugin/embed injection, `<base>` hijacking, and form-action exfiltration.
- `img-src … data:`: the ambient background uses an inline `data:` SVG.
- `upgrade-insecure-requests` + `block-all-mixed-content`: force HTTPS for all
  subresources (the latter is deprecated-but-harmless; superseded by the former).
- **`script-src` / `style-src` keep `'unsafe-inline'` — accepted, documented
  residual risk.** Next's static export inlines a per-page React Server
  Components bootstrap script whose content differs on every page, so one shared
  hashed/nonce policy is infeasible without server-side rendering; adding any
  hash/nonce would disable `'unsafe-inline'` and break hydration. Many components
  also use inline `style` attributes. The XSS exposure this leaves is low because
  the site renders **no user-supplied or dynamic content** (no query-driven
  rendering, no DB, contact is via mailto/LinkedIn) — there is no injection sink.
  If the site ever moves to SSR or a CDN that injects per-request nonces, switch
  to a nonce-based `script-src` and drop `'unsafe-inline'`.

### Referrer-Policy
`<meta name="referrer" content="strict-origin-when-cross-origin">` — cross-site
requests/links leak only the origin, never full paths.

### External link hygiene
Every `target="_blank"` link (LinkedIn, in Footer/Contact/About) uses
`rel="noopener noreferrer"` — prevents reverse-tabnabbing and referrer leakage.

### Subresource Integrity (SRI)
No first-party resource is loaded from a third-party URL (fonts are self-hosted
via `next/font`; all CSS/JS is first-party). The only external script is
Microsoft Clarity, fetched by Microsoft's own dynamic loader from a versioned,
frequently-changing URL with no published stable hash — **SRI is not
applicable**; it is constrained by the CSP `script-src` allowlist instead.

### Dependencies (`npm audit`)
`npm audit` reports **0 vulnerabilities** (none critical/high/moderate/low).
- `picomatch` ReDoS / method-injection (high) — fixed via `npm audit fix`.
- **Next.js 14.2 → 16.2.9 and React 18.3 → 19.** The Next 14 advisories were all
  **server-side runtime** issues (Image Optimizer DoS, RSC/Server-Component DoS,
  rewrite request smuggling, middleware cache poisoning, WebSocket SSRF,
  nonce-CSP XSS, …) — not reachable on a static export with no Next server, but
  still flagged by `npm audit`, and only cleared by `next@16.2.9`. The framework
  was therefore upgraded. Knock-on changes:
  - `lucide-react` bumped to 1.x for React 19 compatibility; its 1.x line dropped
    brand icons, so the LinkedIn icon is now a local inline SVG
    (`src/components/LinkedinIcon.tsx`).
  - `turbopack.root` pinned in `next.config.mjs` — a stray `package-lock.json` at
    the repo root otherwise made Next 16 infer the wrong workspace root and fail
    page resolution.
  - React 19 introduced no type or runtime breakage in this codebase.
- `postcss` (Next-bundled, < 8.5.10, moderate, build-time only) — cleared via an
  `overrides` pin to `^8.5.10`.

**Post-upgrade verification:** production build succeeds; all 25 routes render
with 0 CSP violations and 0 console errors; Microsoft Clarity loads; client-side
navigation works **including into nested article pages** (no hard-reload / white
-flash regression); footer + contact LinkedIn icon and overall styling intact
(screenshot-checked).

### Information disclosure
- No `.env` files in the repo; no production browser source maps
  (`productionBrowserSourceMaps` off — no `.map` files emitted); no source/internal
  files leak into the deployed root.
- `robots.txt` / `sitemap.xml` reference only public pages.
- The repository is **public** and was scanned — it contains **no secrets**. The
  Microsoft Clarity project ID and Google Search Console verification token are
  public by design (they live in client HTML).

## Verification
`scripts/csp-verify.mjs` serves the exported site and drives a headless browser
over **every route**, asserting: zero `securitypolicyviolation` events, zero
console errors, every page renders, Microsoft Clarity initializes
(`window.clarity`), and client-side navigation works under the CSP.
Latest run: **PASS** — 25 routes, 0 violations, 0 errors, Clarity loaded.
Re-run after any change that adds a third-party resource, and update the CSP
allowlist in `layout.tsx` accordingly.

## Controls that require manual / infrastructure action

Bare GitHub Pages cannot set HTTP response headers, and a `<meta>` CSP cannot
express `frame-ancestors` (clickjacking). These require platform action:

### 1. GitHub repository settings (free — do these now)
- **Settings → Pages → Enforce HTTPS: ON** (serves HSTS from GitHub's edge and
  redirects HTTP→HTTPS).
- **Settings → Code security and analysis:** turn on **Dependabot alerts**,
  **Dependabot security updates**, **Secret scanning**, and **push protection**.
- **Settings → Branches:** protect `main` (require PR before merge; block
  force-push / deletion).
- Enable **2FA** on the GitHub account.

### 2. Real security headers via a CDN/proxy (recommended)
Front `customstrat.com` with **Cloudflare** (free) and add the headers GitHub
Pages can't. In Cloudflare → Rules → Transform Rules → *Modify Response Header*
(or a Worker), set:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()
Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; form-action 'self'; frame-ancestors 'none'; frame-src 'none'; worker-src 'self' blob:; manifest-src 'self'; script-src 'self' 'unsafe-inline' https://*.clarity.ms; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.clarity.ms https://c.bing.com; font-src 'self'; connect-src 'self' https://*.clarity.ms; upgrade-insecure-requests
```
Notes:
- `frame-ancestors 'none'` (header-only) is the real clickjacking defense;
  `X-Frame-Options: DENY` covers legacy browsers.
- Serving the CSP as a real header (in addition to the meta) also enables
  violation reporting via `report-to` later.
- For HSTS `preload`, submit the domain at https://hstspreload.org once HTTPS is
  confirmed working site-wide.

### 3. DNS (optional, defense-in-depth)
- Add a **CAA** record restricting which CAs may issue certificates.
- Enable **DNSSEC** at the registrar.

## Reporting a vulnerability
Email **kliebel@customstrat.com**. This is a static brochure site with no
bug-bounty program, but reports are appreciated and will be addressed promptly.
