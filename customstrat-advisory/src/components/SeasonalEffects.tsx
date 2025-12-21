'use client';

import { useEffect, useState } from 'react';

interface SeasonalEffectsProps {
  enabled?: boolean;
}

export default function SeasonalEffects({ enabled = true }: SeasonalEffectsProps) {
  const [season, setSeason] = useState<'winter' | 'spring' | 'summer' | 'fall' | null>(null);
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);
  const [leaves, setLeaves] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!enabled) return;

    const month = new Date().getMonth();
    let currentSeason: 'winter' | 'spring' | 'summer' | 'fall' | null = null;

    // Determine season based on month
    if (month >= 2 && month <= 4) {
      currentSeason = 'spring';
    } else if (month >= 5 && month <= 7) {
      currentSeason = 'summer';
    } else if (month >= 8 && month <= 10) {
      currentSeason = 'fall';
    } else {
      currentSeason = 'winter';
    }

    setSeason(currentSeason);

    // Create snowflakes for winter
    if (currentSeason === 'winter') {
      const snowflakeArray: JSX.Element[] = [];
      const snowflakeSymbols = ['❄', '❅', '❆'];
      
      for (let i = 0; i < 50; i++) {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;
        const size = 0.5 + Math.random() * 1;
        const symbol = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
        
        snowflakeArray.push(
          <div
            key={`snowflake-${i}`}
            className="snowflake"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}em`,
              opacity: 0.7 + Math.random() * 0.3,
            }}
          >
            {symbol}
          </div>
        );
      }
      setSnowflakes(snowflakeArray);
    }

    // Create leaves for fall
    if (currentSeason === 'fall') {
      const leafArray: JSX.Element[] = [];
      const leafSymbols = ['🍂', '🍁'];
      const colors = ['#8B4513', '#CD853F', '#A0522D', '#D2691E'];
      
      for (let i = 0; i < 30; i++) {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 8;
        const size = 0.8 + Math.random() * 1.2;
        const symbol = leafSymbols[Math.floor(Math.random() * leafSymbols.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        leafArray.push(
          <div
            key={`leaf-${i}`}
            className="leaf"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}em`,
              color: color,
            }}
          >
            {symbol}
          </div>
        );
      }
      setLeaves(leafArray);
    }
  }, [enabled]);

  if (!enabled || !season) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {season === 'winter' && snowflakes}
      {season === 'fall' && leaves}
    </div>
  );
}

