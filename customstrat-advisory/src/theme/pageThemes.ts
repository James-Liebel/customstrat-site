/**
 * Page Theme System
 * 
 * Defines visual themes for each page route, providing:
 * - Accent color tint (premium palette)
 * - Background gradient recipe (body)
 * - Hero overlay recipe (darker than body)
 * - Pattern type (subtle texture)
 * - Motion type (slow, tasteful animation)
 * - Intensity level
 * 
 * All themes maintain executive-clean aesthetic with subtle, premium touches.
 */

export type PatternType = 'diamond' | 'dots' | 'grid' | 'rings' | 'strata';
export type MotionType = 'drift' | 'orbit' | 'scanline' | 'float';
export type IntensityLevel = 'low' | 'medium';

export interface PageTheme {
  accent: string; // Primary accent color (tint)
  accentSecondary?: string; // Optional secondary accent
  backgroundGradient: {
    angle: string;
    stops: string[]; // Array of color stops
  };
  heroOverlay: {
    angle: string;
    linearStops: string[]; // Linear gradient stops (must be darker than backgroundGradient)
    radialAccents?: string[]; // Optional radial gradient overlays
  };
  pattern: PatternType;
  motion: MotionType;
  intensity: IntensityLevel;
  motionSpeed?: {
    primary: number; // seconds
    secondary?: number; // seconds
  };
}

export const pageThemes: Record<string, PageTheme> = {
  // Case Studies - Gilded Diamond
  'gilded-diamond': {
    accent: 'rgba(201, 169, 97, 0.25)', // Gold tint
    accentSecondary: 'rgba(201, 169, 97, 0.15)',
    backgroundGradient: {
      angle: '180deg',
      stops: [
        'rgba(255, 255, 255, 1) 0%',
        'rgba(245, 248, 252, 1) 32%',
        'rgba(14, 24, 38, 0.96) 100%'
      ]
    },
    heroOverlay: {
      angle: '135deg',
      linearStops: [
        'rgba(10, 20, 35, 0.95) 0%',
        'rgba(26, 58, 92, 0.88) 100%'
      ],
      radialAccents: [
        'radial-gradient(circle at 20% 50%, rgba(201, 169, 97, 0.08) 0%, transparent 50%)',
        'radial-gradient(circle at 80% 80%, rgba(91, 143, 196, 0.10) 0%, transparent 50%)'
      ]
    },
    pattern: 'diamond',
    motion: 'orbit',
    intensity: 'medium',
    motionSpeed: { primary: 24, secondary: 30 }
  },

  // Insights/Articles - Ink Dots
  'ink-dots': {
    accent: 'rgba(71, 85, 105, 0.20)', // Cool charcoal tint
    accentSecondary: 'rgba(100, 116, 139, 0.12)',
    backgroundGradient: {
      angle: '180deg',
      stops: [
        'rgba(255, 255, 255, 0.98) 0%',
        'rgba(240, 245, 250, 0.95) 35%',
        'rgba(26, 58, 92, 0.92) 100%'
      ]
    },
    heroOverlay: {
      angle: '135deg',
      linearStops: [
        'rgba(10, 20, 35, 0.96) 0%',
        'rgba(26, 58, 92, 0.90) 100%'
      ],
      radialAccents: [
        'radial-gradient(circle at 25% 30%, rgba(71, 85, 105, 0.06) 0%, transparent 50%)',
        'radial-gradient(circle at 75% 70%, rgba(100, 116, 139, 0.05) 0%, transparent 50%)'
      ]
    },
    pattern: 'dots',
    motion: 'drift',
    intensity: 'medium',
    motionSpeed: { primary: 28, secondary: 35 }
  },

  // About - Aura Strata
  'aura-strata': {
    accent: 'rgba(201, 169, 97, 0.18)', // Warm neutral gold
    accentSecondary: 'rgba(91, 143, 196, 0.12)',
    backgroundGradient: {
      angle: '135deg',
      stops: [
        'rgba(29, 58, 98, 0.72) 0%',
        'rgba(10, 20, 35, 0.98) 100%'
      ]
    },
    heroOverlay: {
      angle: '135deg',
      linearStops: [
        'rgba(10, 20, 35, 0.97) 0%',
        'rgba(26, 58, 92, 0.92) 100%'
      ],
      radialAccents: [
        'radial-gradient(circle at 16% 18%, rgba(201, 169, 97, 0.06) 0%, transparent 50%)',
        'radial-gradient(circle at 86% 76%, rgba(91, 143, 196, 0.05) 0%, transparent 50%)'
      ]
    },
    pattern: 'strata',
    motion: 'float',
    intensity: 'medium',
    motionSpeed: { primary: 20, secondary: 26 }
  },

  // Endorsements - Soft Rings
  'soft-rings': {
    accent: 'rgba(201, 169, 97, 0.20)', // Muted gold/stone
    accentSecondary: 'rgba(229, 212, 166, 0.12)',
    backgroundGradient: {
      angle: '135deg',
      stops: [
        'rgba(29, 58, 98, 0.75) 0%',
        'rgba(10, 20, 35, 0.97) 100%'
      ]
    },
    heroOverlay: {
      angle: '135deg',
      linearStops: [
        'rgba(10, 20, 35, 0.96) 0%',
        'rgba(26, 58, 92, 0.91) 100%'
      ],
      radialAccents: [
        'radial-gradient(circle at 25% 15%, rgba(201, 169, 97, 0.07) 0%, transparent 50%)',
        'radial-gradient(circle at 80% 80%, rgba(229, 212, 166, 0.05) 0%, transparent 50%)'
      ]
    },
    pattern: 'rings',
    motion: 'orbit',
    intensity: 'medium',
    motionSpeed: { primary: 32, secondary: 40 }
  },

  // Contact - Signal Grid
  'signal-grid': {
    accent: 'rgba(91, 143, 196, 0.18)', // Subtle blue-gray
    accentSecondary: 'rgba(74, 123, 167, 0.12)',
    backgroundGradient: {
      angle: '135deg',
      stops: [
        'rgba(29, 58, 98, 0.70) 0%',
        'rgba(10, 20, 35, 0.96) 100%'
      ]
    },
    heroOverlay: {
      angle: '135deg',
      linearStops: [
        'rgba(10, 20, 35, 0.95) 0%',
        'rgba(26, 58, 92, 0.89) 100%'
      ],
      radialAccents: [
        'radial-gradient(circle at 20% 20%, rgba(91, 143, 196, 0.08) 0%, transparent 50%)',
        'radial-gradient(circle at 75% 70%, rgba(74, 123, 167, 0.06) 0%, transparent 50%)'
      ]
    },
    pattern: 'grid',
    motion: 'scanline',
    intensity: 'medium',
    motionSpeed: { primary: 18, secondary: 22 }
  },

  // Default - Clean Neutral
  'default-clean': {
    accent: 'rgba(91, 143, 196, 0.15)', // Neutral blue-gray
    accentSecondary: 'rgba(148, 163, 184, 0.10)',
    backgroundGradient: {
      angle: '180deg',
      stops: [
        'rgba(255, 255, 255, 0.95) 0%',
        'rgba(26, 58, 92, 0.90) 100%'
      ]
    },
    heroOverlay: {
      angle: '135deg',
      linearStops: [
        'rgba(10, 20, 35, 0.94) 0%',
        'rgba(26, 58, 92, 0.88) 100%'
      ],
      radialAccents: [
        'radial-gradient(circle at 20% 20%, rgba(91, 143, 196, 0.06) 0%, transparent 50%)',
        'radial-gradient(circle at 80% 30%, rgba(148, 163, 184, 0.04) 0%, transparent 50%)'
      ]
    },
    pattern: 'dots',
    motion: 'drift',
    intensity: 'low',
    motionSpeed: { primary: 30, secondary: 38 }
  }
};

/**
 * Get theme for a page route
 */
export function getThemeForRoute(route: string): PageTheme {
  // Map routes to theme keys
  const routeMap: Record<string, string> = {
    '/services': 'gilded-diamond',
    '/services/strategy-development': 'gilded-diamond',
    '/services/strategy-execution': 'gilded-diamond',
    '/services/operational-improvements': 'gilded-diamond',
    '/insights': 'ink-dots',
    '/about': 'aura-strata',
    '/endorsements': 'soft-rings',
    '/contact': 'signal-grid',
  };

  // Check for insights detail pages
  if (route.startsWith('/insights/')) {
    return pageThemes['ink-dots'];
  }

  const themeKey = routeMap[route] || 'default-clean';
  return pageThemes[themeKey] || pageThemes['default-clean'];
}

