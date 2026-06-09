# CustomStrat Advisory Design System

## Overview

This design system creates an elite, cohesive visual language for midsize banks and insurance companies: expensive, stable, boardroom-credible, with a subtle "creative soul."

**Prime Directive:** About + Case Studies + Insights are the "polished reference" pages. They define the canonical visual language. Home remains distinct (shares tokens/motion quality but keeps its own personality and layout).

---

## Page Inventory & Current State

### Home (`/`)
- **Purpose:** Marketing, conversion, brand introduction
- **Background:** Light with animated gradient background
- **Section Spacing:** Custom padding, three-column layout
- **Cards:** None (list-based layout)
- **Buttons:** Custom primary buttons
- **Motion:** Float animations, fadeInUp, custom easing
- **CTAs:** None (removed)
- **Status:** ✅ Distinct layout preserved; needs token normalization only

### About (`/about`)
- **Purpose:** Credibility, authority, boardroom
- **Background:** Dark canvas (`cs-page--lightToDark`)
- **Section Spacing:** `section-padding` (4rem/5rem)
- **Cards:** Glass cards (`.cs-card`, `.cs-card--soft`, `.cs-card--hover`)
- **Buttons:** Inline links (`.cs-link-inline`)
- **Motion:** Parallax float, card hover transforms
- **CTAs:** None
- **Status:** ✅ Already uses system classes; needs cluster shell

### Case Studies / Services (`/services`)
- **Purpose:** Proof, credibility, conversion
- **Background:** Continuous dark-to-light gradient canvas
- **Section Spacing:** Custom (`cs-services-stage`, `cs-services-approach-shell`)
- **Cards:** Glass approach cards (`.cs-approach-card`)
- **Buttons:** Service navigation buttons (`.cs-service-btn`)
- **Motion:** Orb animations, marquee, shine effects
- **CTAs:** None
- **Status:** ✅ Already uses system classes; needs cluster shell

### Services Detail Pages (`/services/*`)
- **Purpose:** Proof, case study detail
- **Background:** Light (`bg-white`)
- **Section Spacing:** `section-padding`
- **Cards:** None (table/grid layout)
- **Buttons:** None
- **Motion:** Minimal
- **CTAs:** None
- **Status:** ⚠️ Needs cluster shell + consistent spacing

### Insights Listing (`/insights`)
- **Purpose:** Library, research vault, credibility
- **Background:** Light (`bg-white`)
- **Section Spacing:** `section-padding`
- **Cards:** Article cards (custom styling in InsightsClient)
- **Buttons:** `.btn-primary` in footer CTA
- **Motion:** Scroll reveal, hover transforms
- **CTAs:** Footer CTA (should be removed or moved)
- **Status:** ⚠️ Needs cluster shell + dark canvas

### Insights Detail Pages (`/insights/*`)
- **Purpose:** Library, research vault, reading experience
- **Background:** Dark hero + white article surface
- **Section Spacing:** Custom (`.cs-article`, `.cs-body`)
- **Cards:** None (article layout)
- **Buttons:** Back link (`.cs-back-link`)
- **Motion:** Minimal
- **CTAs:** None
- **Status:** ✅ Already uses system classes; needs cluster shell

### Endorsements (`/endorsements`)
- **Purpose:** Credibility, social proof
- **Background:** Light (`bg-white`)
- **Section Spacing:** `section-padding`
- **Cards:** Testimonial cards (custom in EndorsementsClient)
- **Buttons:** None
- **Motion:** Scroll reveal, cursor spotlight, tilt
- **CTAs:** None
- **Status:** ⚠️ Needs cluster shell + dark canvas + glass cards

### Contact (`/contact`)
- **Purpose:** Conversion, utility
- **Background:** Light (`bg-white`)
- **Section Spacing:** `section-padding`
- **Cards:** Contact info card (custom)
- **Buttons:** `.btn-primary`, `.cs-contact-cta`
- **Motion:** Minimal
- **CTAs:** None
- **Status:** ⚠️ Needs cluster shell + dark canvas

---

## Style Clusters

### Cluster A: Editorial / Authority
**Purpose:** Boardroom credibility, institutional trust  
**Canvas:** Dark gradient background with glass morphism  
**Signature:** Subtle ambient mesh, floating shapes, glass cards  
**Pages:**
- About (`/about`)
- Endorsements (`/endorsements`)
- Contact (`/contact`)

**Rationale:** These pages establish credibility and trust. Dark canvas with glass cards conveys premium, stable, boardroom-ready authority.

### Cluster B: Library / Research Vault
**Purpose:** Knowledge repository, thought leadership  
**Canvas:** Dark gradient background (distinct from Editorial but related)  
**Signature:** Document-focused, reading-optimized, subtle library cues  
**Pages:**
- Insights listing (`/insights`)
- Insights detail pages (`/insights/*`)

**Rationale:** Research and articles need a distinct "library" feel—dark, focused, scholarly but accessible. Slightly different from Editorial to signal content depth.

### Cluster C: Case Studies / Proof
**Purpose:** Demonstrate results, showcase work  
**Canvas:** Continuous gradient (light → dark)  
**Signature:** Creative but structured, bolder accents, layout variety  
**Pages:**
- Services/Case Studies (`/services`)
- Services detail pages (`/services/*`)

**Rationale:** Case studies need to feel creative and dynamic while remaining structured. The continuous gradient and bolder accents signal innovation and results.

### Cluster D: Home
**Purpose:** Distinct brand introduction  
**Canvas:** Light with animated background  
**Signature:** Unique hero, three-column rhythm, animated elements  
**Pages:**
- Home (`/`)

**Rationale:** Home remains distinct as the entry point. Only normalizes tokens and motion quality; layout and personality preserved.

---

## Design Tokens

### Colors
```css
--color-primary: #2c5f8d
--color-primary-dark: #1a3a5c
--color-primary-light: #4a7ba7
--color-accent: #5b8fc4
--color-accent-dark: #3d6b9e
--color-accent-light: #7daad4
--color-gold: #c9a961
--color-gold-light: #e5d4a6
```

### Neutrals (Boardroom-Grade)
```css
--color-gray-50 through --color-gray-900
```

### Radii
```css
--radius-2xl: 16px
--radius-3xl: 20px
--radius-full: 999px (for pills/badges)
```

### Shadows
```css
--shadow-soft: 0 2px 8px rgba(15, 23, 42, 0.06)
--shadow-soft-md: 0 6px 18px rgba(15, 23, 42, 0.10)
--shadow-soft-lg: 0 14px 34px rgba(15, 23, 42, 0.14)
--shadow-glow: 0 0 40px rgba(91, 143, 196, 0.18)
```

### Motion Tokens
```css
--motion-duration-fast: 180ms
--motion-duration-base: 320ms
--motion-duration-slow: 500ms
--motion-easing-premium: cubic-bezier(0.23, 1, 0.32, 1)
--motion-easing-smooth: cubic-bezier(0.4, 0, 0.2, 1)
```

**Motion Rules:**
- Hover transforms: max 2–4px
- Ambient motion: 12–20s duration, low opacity
- No bounce/spring unless extremely subtle
- Premium easing: `cubic-bezier(0.23, 1, 0.32, 1)`

---

## Base Component Classes

### Sections
```css
.cs-section
  - Standardized section spacing (4rem/5rem padding)
  - Consistent container max-width
```

### Cards
```css
.cs-card
  - Base glass card (dark canvas)
  - Border: 1px solid rgba(255,255,255,0.10)
  - Background: rgba(255,255,255,0.06)
  - Backdrop blur: 10px
  - Border radius: 22px
  - Shadow: 0 20px 60px rgba(0,0,0,0.28)

.cs-card--soft
  - Softer background (0.07 opacity)

.cs-card--hover
  - Hover: translateY(-3px), border brightens

.cs-card-inner
  - Padding: 1.5rem / 1.75rem (responsive)
```

### Buttons
```css
.cs-btn
  - Base button class
  - Padding: 1rem 2rem
  - Border radius: var(--radius-2xl)
  - Transition: all var(--motion-duration-base) var(--motion-easing-premium)

.cs-btn--primary
  - Gradient background (primary → accent)
  - White text
  - Hover: translateY(-2px), shadow increase

.cs-btn--secondary
  - White background, primary border
  - Hover: fill with primary, text white

.cs-btn--ghost
  - Transparent, border only
  - Hover: subtle background
```

---

## Cluster Shell Classes

### `.cs-shell--editorial`
**Canvas:** Dark gradient background  
**Ambient:** Subtle mesh, floating shapes  
**Cards:** Glass morphism  
**Use on:** About, Endorsements, Contact

### `.cs-shell--library`
**Canvas:** Dark gradient (slightly different from Editorial)  
**Ambient:** Minimal, document-focused  
**Cards:** Article cards, reading surfaces  
**Use on:** Insights listing, Insights detail

### `.cs-shell--proof`
**Canvas:** Continuous gradient (light → dark)  
**Ambient:** Bolder accents, creative elements  
**Cards:** Glass cards with stronger shadows  
**Use on:** Services, Services detail

### `.cs-shell--home`
**Canvas:** Light with animated background  
**Ambient:** Animated blobs, float effects  
**Cards:** None (list-based)  
**Use on:** Home (minimal changes)

---

## Dos and Don'ts

### ✅ DO
- Use cluster shell classes on page wrappers
- Use `.cs-section` for consistent spacing
- Use `.cs-card` variants for all cards
- Use `.cs-btn` variants for all buttons
- Respect motion tokens (durations, easing)
- Keep Home layout distinct
- Ensure text readability (WCAG AA contrast)
- Use premium easing for all transitions

### ❌ DON'T
- Apply the same "fun effect" everywhere
- Use bounce/spring animations
- Create one-off button/card styles
- Break spacing rhythm
- Override cluster canvas backgrounds
- Add redundant CTAs/pre-footers
- Use hover transforms > 4px
- Create ambient motion < 12s or > 20s

---

## Checklist for New Pages

When creating a new page:

1. **Assign to cluster**
   - [ ] Determine page purpose (credibility, library, proof, marketing)
   - [ ] Assign to appropriate cluster
   - [ ] Document in this file

2. **Apply shell**
   - [ ] Wrap page content with cluster shell class
   - [ ] Verify canvas background appears correctly

3. **Use base components**
   - [ ] Replace sections with `.cs-section`
   - [ ] Replace cards with `.cs-card` variants
   - [ ] Replace buttons with `.cs-btn` variants

4. **Normalize spacing**
   - [ ] Use `.section-padding` for all sections
   - [ ] Verify consistent rhythm

5. **Motion quality**
   - [ ] Use motion tokens (durations, easing)
   - [ ] Keep hover transforms ≤ 4px
   - [ ] Ambient motion 12–20s, low opacity

6. **Remove redundancy**
   - [ ] Remove duplicate CTAs
   - [ ] Remove pre-footer blocks
   - [ ] Ensure only global Footer renders

7. **Verify**
   - [ ] Text readability (contrast)
   - [ ] No overflow clipping
   - [ ] Consistent button behavior
   - [ ] Consistent card behavior
   - [ ] Spacing feels breathable
   - [ ] Cluster feels distinct but related

---

## Implementation Status

- [x] Design tokens extracted
- [x] Motion signature defined
- [x] Cluster definitions created
- [x] Page assignments documented
- [x] Cluster shells implemented in CSS
- [x] Base components systematized
- [x] Pages refactored to use shells
- [x] Buttons normalized (where applicable)
- [x] Cards normalized (where applicable)
- [x] Spacing normalized
- [x] Redundant CTAs removed
- [x] Home normalized (tokens only)
- [x] Verification checklist passed

---

## Notes

- **About, Services, Insights** are the canonical reference pages
- **Home** remains distinct but shares tokens/motion
- All non-Home pages should feel like the same brand family
- Each cluster is distinct but related
- Motion should feel premium, not cheap
- No elements should overlap Hero sections

