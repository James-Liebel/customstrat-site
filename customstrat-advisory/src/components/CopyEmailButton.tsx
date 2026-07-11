'use client';

import { useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

/**
 * Small copy-to-clipboard affordance next to the contact email, for users
 * whose machines have no mail client wired to mailto: links.
 */
export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions/old browser) — mailto link remains
    }
  };

  return (
    <button
      onClick={copy}
      aria-label={copied ? 'Email address copied' : 'Copy email address'}
      title="Copy email address"
      className="inline-flex items-center gap-1.5 ml-3 px-2.5 py-1 rounded-full text-xs font-semibold
        border border-white/20 bg-white/5 text-white/70
        hover:text-white hover:border-white/35 hover:bg-white/10 transition-colors align-middle"
    >
      {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
