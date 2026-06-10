# UI Polish Plan

**Goal:** Visual/UX polish within the *current* design language. No restyle — the live look
(dark navy atmosphere, white content surfaces, gold accents) stays. Every change below is
either a bug fix, a consistency fix, or a small additive element in the existing style.

**Evidence base:** Full-page screenshots of all 7 page types at 1440px + 390px
(2026-06-09 survey), plus a complete read of `src/` components and `globals.css`.

---

## P0 — Visible bugs (fix first)

### 1. ~~Mobile home hero text is clipped (390px)~~ — FALSE POSITIVE, no fix needed
Investigated 2026-06-09: headless Chrome enforces a ~480px minimum window width on Windows;
`--window-size=390` screenshots are 390px *crops of a ~480px layout*, which fakes right-edge
clipping (verified with a 100vw ruler-bar replica — plain block text "clipped" too).
At an honest 500px viewport the home hero renders correctly (title fits, tagline wraps).
**Site is fine on real mobile. Lesson: survey narrow viewports at ≥500px window width.**

### 2. Endorsements quotes truncated to ~80 chars mid-sentence
Every card on /endorsements shows a chopped stub ("…she listens intently, chal…") plus a
"Read Full Endorsement" toggle — a wall of cut-offs, and the page is ~60% empty dark canvas.
- **Fix:** raise threshold to ~240 chars, truncate at a sentence/word boundary, show short
  quotes in full. Fuller cards also fill the page void.
- **File:** `src/app/endorsements/EndorsementsClient.tsx` (`isLong`/`displayQuote` logic).

### 3. Articles out of date order + dead sort control
Visible on /insights: "Secrets to Survival" (Feb 2025) sits above "Beyond Scale" (Aug 2025).
In code, `sort` state exists but the comparator returns 0 for newest/oldest (no-op) and no
sort UI is rendered (`ArrowUpDown`, `Tag` icons imported unused).
- **Fix:** add a machine-sortable date to each article, implement the comparator, render a
  small sort control (Newest / Oldest / Title) styled like the existing view toggle; fix the
  manual order as a fallback.
- **Files:** `src/app/insights/page.tsx`, `src/app/insights/InsightsClient.tsx`.

### 4. Articles data duplicated and already drifted
The same article array lives in `insights/page.tsx` AND `components/RelatedArticles.tsx`,
and they disagree (Relationship Banking: `[Banking, Customer Experience]` vs
`[Strategy, Banking, Insurance]`) → related-article matching uses stale tags today.
- **Fix:** single source `src/content/articles.ts`; both import it. Update
  `docs/`-level publishing notes: future articles get added in ONE place.
- **Files:** new `src/content/articles.ts`; edit `insights/page.tsx`,
  `components/RelatedArticles.tsx`.

## P1 — Layout balance (the "empty void" pattern)

### 5. Case Studies page: ~60% empty canvas below the 3 cards
Content ends a third of the way down; the rest is blank gradient until the footer
(`cs-shell--proof` is `min-height: 100vh` with sparse content).
- **Fix:** add a slim, on-style CTA band under the cards ("Ready to discuss a project?
  → Get in touch" + secondary "Read our insights"), reusing `cs-card`/`btn` styles.
- **File:** `src/app/services/page.tsx`.

### 6. Contact page: imbalanced columns, floating white card
The "Direct Inquiry" card is small and isolated mid-void; left column is much taller.
- **Fix:** enrich the card in-style — LinkedIn button (link exists in Footer), a
  "what to expect" line (e.g., response within 1–2 business days), and a link to case
  studies; `items-start` so the card tops align.
- **File:** `src/app/contact/page.tsx`.

### 7. "Articles" vs "Insights" naming clash
Nav + hero say **Articles**; the page heading block says **LIBRARY / Insights**; URL is
`/insights`. Pick one user-facing name (recommend **Insights** to match URL + inner heading,
or **Articles** everywhere — decide with Katie; default: rename inner heading to "Articles").
- **Files:** `src/app/insights/InsightsClient.tsx` (heading), possibly `Header.tsx` label.

## P2 — Micro-interactions, a11y, small additions

8. **Mobile menu**: add `aria-expanded`/`aria-label` to the toggle, gentle open transition
   (height/opacity), keep current look. `src/components/Header.tsx`.
9. **Icon-only buttons** (grid/list toggle) and the search input need `aria-label`s.
   `InsightsClient.tsx`.
10. **Header logo alt** `"Logo"` → `"CustomStrat Advisory logo"`. `Header.tsx`.
11. **Scroll-to-top button** (additive element): small glass pill (white/10, blur) appearing
    after ~600px scroll on article pages; matches `.cs-back-link` styling.
    New `src/components/ScrollToTop.tsx`, used in article layout/pages.
12. **Search placeholder** "Search research..." → "Search articles...". `InsightsClient.tsx`.

## P3 — Token + CSS hygiene (protects consistency; zero visual change intended)

13. **Two competing brand palettes**: CSS vars say primary `#1e4b75` / accent `#4a86c0`;
    Tailwind config says primary `#2C5F8D` / accent `#5B8FC4`. Components mix both (nav
    active pill = Tailwind primary; `.btn-primary` gradient = CSS vars) → subtle mismatched
    blues across the site. Unify by pointing Tailwind colors at the CSS variables; verify
    page-by-page that nothing shifts visibly (then later optionally consolidate hexes with
    Katie's sign-off).
    `tailwind.config.ts`, `globals.css`.
14. **globals.css consolidation** (3,118 lines): `.cs-card` defined 3× with conflicting
    values; services navband/pill blocks stacked 3×; footer `.btn-secondary` override
    duplicated 2×; dead `.brand-name` rule referencing undefined `--font-family-display`;
    unused effect classes (glitch, sparkle, particle, morphing-bg, rotating-border, tilt-3d,
    magnetic-hover, image-pan/zoom, outline-tracer, seamless header/footer layer…).
    **Method:** for each candidate, `grep` usage across `src/`; delete only if unreferenced;
    keep the last-wins computed values when merging duplicates. Bar = byte-identical pages.
15. **Delete dead components** (grep-verified never imported): `ServicesGrid.tsx`,
    `CaseStudyCards.tsx`, `ui/Button.tsx`.
16. **About page stray JSX** (`< section`, `</main >` spacing). `src/app/about/page.tsx`.

---

## Sequencing & verification

- One commit per priority tier (P0 → P1 → P2 → P3), so each is independently revertable.
- **Before/after screenshot diff** for every tier: all 7 pages at 1440px + 390px; only the
  intended deltas may appear. (Survey shots saved under `%TEMP%\claude\ui-survey\`.)
- `npm run build` must pass after each tier.
- Nothing deploys until explicitly approved — the live site is untouched throughout
  (deploy = `npm run deploy` + push, as documented in `docs/DEPLOY.md`).
- Design-language guardrail: if a change reads as "new style" rather than "same style,
  cleaner," it's out of scope for this plan.
