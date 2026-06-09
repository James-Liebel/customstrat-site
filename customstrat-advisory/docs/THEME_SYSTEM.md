# Page Theme System

## Overview

Each non-home page has a distinct visual theme with:
- **Unique accent color tint** (premium palette)
- **Custom background gradient** (body)
- **Darker hero overlay** (clearly separated from body)
- **Distinct pattern type** (subtle texture)
- **Unique motion type** (slow, tasteful animation)
- **Appropriate intensity** (low for reading, medium for browsing)

All themes maintain executive-clean aesthetic with subtle, premium touches.

---

## Theme Definitions

### `gilded-diamond` (Case Studies)
- **Accent**: Gold tint `rgba(201, 169, 97, 0.25)`
- **Pattern**: Diamond outlines
- **Motion**: Orbit (24s/30s cycles)
- **Intensity**: Medium
- **Use**: `/services` and all service detail pages
- **Rationale**: Premium, structured, proof-focused

### `ink-dots` (Insights/Articles)
- **Accent**: Cool charcoal tint `rgba(71, 85, 105, 0.20)`
- **Pattern**: Dotted texture
- **Motion**: Drift (28s/35s cycles)
- **Intensity**: Medium (listing), Low (detail pages)
- **Use**: `/insights` and all article detail pages
- **Rationale**: Reading-focused, scholarly, library-like

### `aura-strata` (About)
- **Accent**: Warm neutral gold `rgba(201, 169, 97, 0.18)`
- **Pattern**: Strata bands
- **Motion**: Float (20s/26s cycles)
- **Intensity**: Medium
- **Use**: `/about`
- **Rationale**: Authority, warmth, depth

### `soft-rings` (Endorsements)
- **Accent**: Muted gold/stone `rgba(201, 169, 97, 0.20)`
- **Pattern**: Rings
- **Motion**: Orbit-slow (32s/40s cycles)
- **Intensity**: Medium
- **Use**: `/endorsements`
- **Rationale**: Credibility, soft, trustworthy

### `signal-grid` (Contact)
- **Accent**: Subtle blue-gray `rgba(91, 143, 196, 0.18)`
- **Pattern**: Grid
- **Motion**: Scanline (18s/22s cycles)
- **Intensity**: Medium
- **Use**: `/contact`
- **Rationale**: Modern, signal-focused, professional

### `default-clean` (Fallback)
- **Accent**: Neutral blue-gray `rgba(91, 143, 196, 0.15)`
- **Pattern**: Dots (very subtle)
- **Motion**: Drift (30s/38s cycles)
- **Intensity**: Low
- **Use**: Any unmapped page
- **Rationale**: Safe, neutral, clean

---

## Page → Theme Mapping

| Route | Theme Key | Intensity | Notes |
|-------|-----------|-----------|-------|
| `/services` | `gilded-diamond` | medium | Reference aesthetic |
| `/services/*` | `gilded-diamond` | medium | All service detail pages |
| `/insights` | `ink-dots` | medium | Listing page |
| `/insights/*` | `ink-dots` | **low** | All article detail pages (reading-focused) |
| `/about` | `aura-strata` | medium | Authority page |
| `/endorsements` | `soft-rings` | medium | Credibility page |
| `/contact` | `signal-grid` | medium | Conversion page |
| Other | `default-clean` | low | Fallback |

---

## Pattern Types

### `diamond`
- SVG-based diamond grid outlines
- Very low opacity (2.5-3%)
- Premium, structured feel
- **Use**: Case studies (gilded-diamond)

### `dots`
- Radial gradient dots
- Very low opacity (3%)
- Clean, modern texture
- **Use**: Insights, default

### `grid`
- Linear grid lines
- Very low opacity (2%)
- Technical, signal-like
- **Use**: Contact, endorsements

### `rings`
- Concentric ring patterns
- Very low opacity (2-2.5%)
- Soft, organic feel
- **Use**: Endorsements

### `strata`
- Layered band patterns
- Very low opacity (1.5-2%)
- Depth, geological feel
- **Use**: About

---

## Motion Types

### `drift`
- Gentle floating movement
- 28-38s cycles
- Subtle, calming
- **Use**: Insights, default

### `orbit`
- Circular movement around a point
- 24-40s cycles
- Structured, premium
- **Use**: Case studies, endorsements

### `scanline`
- Horizontal sweep with elliptical glows
- 18-22s cycles
- Technical, signal-like
- **Use**: Contact

### `float`
- Vertical gentle movement
- 20-26s cycles
- Organic, breathing
- **Use**: About

---

## Hero Overlay System

**Critical Requirement**: Hero must be noticeably darker than page body.

### Implementation
- Hero overlay uses theme's `heroOverlay` definition
- Combines linear gradient (base) with optional radial accents
- Fades to lighter body via `hero-overlay::after` gradient
- All hero overlays use darker values than their corresponding body gradients

### Example (gilded-diamond)
- **Body**: `rgba(255, 255, 255, 1)` → `rgba(14, 24, 38, 0.96)`
- **Hero**: `rgba(10, 20, 35, 0.95)` → `rgba(26, 58, 92, 0.88)` (darker)

---

## Intensity Levels

- **Low** (0.35 opacity multiplier): Reading-focused pages, minimal distraction
- **Medium** (0.55 opacity multiplier): Standard pages, balanced presence
- **High** (0.75 opacity multiplier): Rarely used, high-impact pages only

---

## Implementation Details

### Files
- `src/theme/pageThemes.ts` - Theme definitions
- `src/components/Atmosphere.tsx` - Theme-based atmosphere component
- `src/components/Hero.tsx` - Theme-aware hero with darker overlay
- `src/styles/globals.css` - Motion keyframes and utilities

### Usage
```tsx
// Automatic (route-based)
<Atmosphere />

// Manual override
<Atmosphere themeKey="gilded-diamond" intensity="medium" />

// Hero with theme
<Hero title="..." themeKey="gilded-diamond" />
```

### Z-Index Layering
- Atmosphere: `z-0` (base background)
- Content wrapper: `z-10` (above atmosphere)
- Hero: `z-10` (above atmosphere, darker overlay)

---

## Cleanliness Checks

✅ **Reduced visual clutter**
- Pattern opacity capped at 4%
- Glow opacity reduced (0.35-0.55 multiplier)
- Larger blur radii (3xl)
- Slower motion (18-40s cycles)

✅ **No horizontal scrolling**
- All elements contained within viewport
- Overflow hidden on containers

✅ **All interactions clickable**
- All decorative layers: `pointer-events-none`
- Content layers: `pointer-events-auto`

✅ **Hero separation**
- Hero overlay always darker than body
- Clear visual transition via fade gradient
- Hero feels like "stage" or "spotlight moment"

✅ **Accessibility**
- Respects `prefers-reduced-motion`
- Maintains WCAG AA contrast
- No animation blocking content

---

## Notes

- Home page (`/`) has no Atmosphere (remains visually distinct)
- All themes use premium color palette (no neon, no rainbow)
- Motion is slow and tasteful (12-40s cycles)
- Patterns are very subtle (1.5-4% opacity)
- Hero is always darker than body for clear separation
- Each page has unique identity while staying in same design family

