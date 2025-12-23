'use client';

export default function SiteAtmosphere() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Depth lighting */}
      <div className="absolute inset-0 cs-depth-spotlight" />

      {/* Multi-layer moving line fields (different angles/speeds for richer motion) */}
      <div className="absolute inset-0 cs-line-field cs-line-field-a opacity-[0.70]" />
      <div className="absolute inset-0 cs-line-field cs-line-field-b opacity-[0.55]" />
      <div className="absolute inset-0 cs-line-field cs-line-field-c opacity-[0.45]" />

      {/* Global “shine” / sheen sweep (very soft) */}
      <div className="absolute inset-0 cs-global-sheen opacity-[0.18]" />

      {/* Slow blurred blobs (depth) */}
      <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl cs-blob cs-blob-a" />
      <div className="absolute -bottom-32 -right-32 h-[560px] w-[560px] rounded-full blur-3xl cs-blob cs-blob-b" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl cs-blob cs-blob-c" />
    </div>
  );
}
