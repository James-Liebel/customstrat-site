'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  animationType?: 'parallax' | 'zoom' | 'pan' | 'lift' | 'tilt' | 'glitch';
  className?: string;
}

export default function AnimatedImage({
  src,
  alt,
  width = 800,
  height = 600,
  animationType = 'lift',
  className = '',
}: AnimatedImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const animationClasses = {
    parallax: 'image-parallax',
    zoom: 'image-zoom',
    pan: 'image-pan',
    lift: 'image-hover-lift',
    tilt: 'tilt-3d',
    glitch: 'glitch-effect',
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${animationClasses[animationType]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{
          transform: isHovered && animationType === 'zoom' ? 'scale(1.1)' : 'scale(1)',
        }}
      />
      {animationType === 'parallax' && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      )}
    </div>
  );
}

