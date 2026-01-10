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

// THE UNIFIED LOGO BLUE style (Darker on Left)
const LOGO_BLUE_BG = {
  angle: '135deg',
  stops: [
    '#0A1A2F 0%',  // Deep Navy (Left)
    '#1e4b75 100%' // Logo Blue (Right)
  ]
};

const LOGO_BLUE_HERO_OVERLAY = {
  angle: '135deg',
  linearStops: [
    'rgba(10, 26, 47, 0.98) 0%', // Darker start (Left)
    'rgba(30, 75, 117, 0.88) 100%' // Logo Blue (Right)
  ],
  radialAccents: [
    'radial-gradient(circle at 20% 20%, rgba(201, 169, 97, 0.12) 0%, transparent 60%)',
    'radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)'
  ]
};

export const pageThemes: Record<string, PageTheme> = {
  // Case Studies - Logo Blue Diamond
  'gilded-diamond': {
    accent: 'rgba(201, 169, 97, 0.25)', // Gold tint
    backgroundGradient: LOGO_BLUE_BG,
    heroOverlay: LOGO_BLUE_HERO_OVERLAY,
    pattern: 'diamond',
    motion: 'orbit',
    intensity: 'medium',
    motionSpeed: { primary: 24, secondary: 30 }
  },

  // Insights/Articles - Logo Blue Ink
  'ink-dots': {
    accent: 'rgba(255, 255, 255, 0.15)',
    backgroundGradient: LOGO_BLUE_BG,
    heroOverlay: LOGO_BLUE_HERO_OVERLAY,
    pattern: 'dots',
    motion: 'drift',
    intensity: 'medium',
    motionSpeed: { primary: 28, secondary: 35 }
  },

  // About - Logo Blue Strata
  'aura-strata': {
    accent: 'rgba(201, 169, 97, 0.18)',
    backgroundGradient: LOGO_BLUE_BG,
    heroOverlay: LOGO_BLUE_HERO_OVERLAY,
    pattern: 'strata',
    motion: 'float',
    intensity: 'medium',
    motionSpeed: { primary: 20, secondary: 26 }
  },

  // Endorsements - Logo Blue Rings
  'soft-rings': {
    accent: 'rgba(255, 255, 255, 0.12)',
    backgroundGradient: LOGO_BLUE_BG,
    heroOverlay: LOGO_BLUE_HERO_OVERLAY,
    pattern: 'rings',
    motion: 'orbit',
    intensity: 'medium',
    motionSpeed: { primary: 32, secondary: 40 }
  },

  // Contact - Logo Blue Grid
  'signal-grid': {
    accent: 'rgba(255, 255, 255, 0.10)',
    backgroundGradient: LOGO_BLUE_BG,
    heroOverlay: LOGO_BLUE_HERO_OVERLAY,
    pattern: 'grid',
    motion: 'scanline',
    intensity: 'medium',
    motionSpeed: { primary: 18, secondary: 22 }
  },

  // Home (Default) - Keeps white background as requested
  'default-clean': {
    accent: 'rgba(255, 255, 255, 0.15)',
    backgroundGradient: LOGO_BLUE_BG,
    heroOverlay: {
      angle: '135deg',
      linearStops: [
        'rgba(10, 26, 47, 0.98) 0%', // Darker start (Left)
        'rgba(30, 75, 117, 0.88) 100%' // Logo Blue (Right)
      ]
    },
    pattern: 'dots',
    motion: 'drift',
    intensity: 'medium',
    motionSpeed: { primary: 30, secondary: 38 }
  }
};

/**
 * Get theme for a page route
 */
export function getThemeForRoute(route: string): PageTheme {
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

  if (route.startsWith('/insights/')) {
    return pageThemes['ink-dots'];
  }

  const themeKey = routeMap[route] || 'default-clean';
  return pageThemes[themeKey] || pageThemes['default-clean'];
}
