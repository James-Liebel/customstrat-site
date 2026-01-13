'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { trackServiceClick } from '@/lib/clarityTracking';

interface TrackedServiceLinkProps {
  href: string;
  serviceName: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

/**
 * A Link component that tracks service clicks with Microsoft Clarity
 */
export default function TrackedServiceLink({
  href,
  serviceName,
  className,
  ariaLabel,
  children,
}: TrackedServiceLinkProps) {
  const handleClick = () => {
    trackServiceClick(serviceName, href);
  };

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
