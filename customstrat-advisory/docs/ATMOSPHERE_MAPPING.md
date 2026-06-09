# Atmosphere Component - Page Mapping

This document maps each page to its Atmosphere variant and intensity settings.

## Page → Variant/Intensity Mapping

### Editorial Cluster (Dark Canvas + Glass Cards)

| Page | Variant | Intensity | Rationale |
|------|---------|-----------|-----------|
| `/about` | `about` | `medium` | Authority page, needs presence but not overwhelming |
| `/endorsements` | `endorsements` | `medium` | Credibility page, balanced atmosphere |
| `/contact` | `contact` | `medium` | Conversion page, professional but approachable |

### Library Cluster (Research Vault)

| Page | Variant | Intensity | Rationale |
|------|---------|-----------|-----------|
| `/insights` | `insights` | `medium` | Listing page, needs visibility for cards |
| `/insights/*` (all detail pages) | `insights` | `low` | Reading-focused, minimal distraction |

### Proof Cluster (Case Studies)

| Page | Variant | Intensity | Rationale |
|------|---------|-----------|-----------|
| `/services` | `caseStudies` | `medium` | **Reference aesthetic** - the canonical look |
| `/services/strategy-development` | `caseStudies` | `medium` | Matches main services page |
| `/services/strategy-execution` | `caseStudies` | `medium` | Matches main services page |
| `/services/operational-improvements` | `caseStudies` | `medium` | Matches main services page |

### Home

| Page | Variant | Intensity | Rationale |
|------|---------|-----------|-----------|
| `/` | *none* | *none* | Home remains visually distinct, no Atmosphere |

## Variant Characteristics

### `caseStudies` (Reference Aesthetic)
- **Gradient**: White → Light Gray → Dark Blue (continuous)
- **Pattern**: Dots (very subtle)
- **Glow Positions**: 3 orbs (top-left, top-right, bottom-center)
- **Animation Speed**: 18s primary, 22s secondary
- **Use**: Case Studies pages (proof cluster)

### `insights`
- **Gradient**: White → Light Blue → Dark Blue (slightly different tone)
- **Pattern**: Grid (document-like)
- **Glow Positions**: 2 orbs (top-left, top-right)
- **Animation Speed**: 20s primary, 25s secondary
- **Use**: Insights listing and detail pages (library cluster)

### `about`
- **Gradient**: Dark Blue → Very Dark Blue (darker start)
- **Pattern**: Diamond outlines (premium feel)
- **Glow Positions**: 2 orbs (top-left, bottom-right)
- **Animation Speed**: 16s primary, 20s secondary
- **Use**: About page (editorial cluster)

### `contact`
- **Gradient**: Dark Blue → Very Dark Blue (similar to about)
- **Pattern**: Dots
- **Glow Positions**: 2 orbs (top-left, bottom-right)
- **Animation Speed**: 18s primary, 24s secondary
- **Use**: Contact page (editorial cluster)

### `endorsements`
- **Gradient**: Dark Blue → Very Dark Blue
- **Pattern**: Grid
- **Glow Positions**: 2 orbs (top-left, bottom-right)
- **Animation Speed**: 19s primary, 23s secondary
- **Use**: Endorsements page (editorial cluster)

### `default`
- **Gradient**: White → Dark Blue (fallback)
- **Pattern**: Dots
- **Glow Positions**: 2 orbs
- **Animation Speed**: 20s primary, 26s secondary
- **Use**: Fallback for new pages

## Intensity Levels

- **`low`**: 40% opacity multiplier - Use for reading-focused pages (article details)
- **`medium`**: 60% opacity multiplier - Use for standard pages (default)
- **`high`**: 80% opacity multiplier - Use for high-impact pages (rarely needed)

## Hero Overlay System

All non-home pages use a **darker hero overlay** than the page body:

- **Hero Background**: `rgba(10, 20, 35, 0.95)` → `rgba(26, 58, 92, 0.88)` (dark)
- **Page Body**: Starts lighter (white/light gray) and transitions to dark
- **Transition**: Hero fades to lighter body via `hero-overlay::after` gradient

This creates a clear visual separation: **dark hero "stage"** → **lighter, animated body**.

## Notes

- All Atmosphere layers are `pointer-events-none`
- All animations respect `prefers-reduced-motion`
- Hero overlay is always darker than page body
- Home page has no Atmosphere (remains distinct)
- Case Studies (`/services`) is the reference aesthetic

