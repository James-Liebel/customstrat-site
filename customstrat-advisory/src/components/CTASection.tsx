import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTASection({
  title,
  subtitle,
  primaryCta = { label: "Start a conversation", href: "/contact" },
  secondaryCta = { label: "View services", href: "/services" },
}: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,.6) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl animate-[float_18s_ease-in-out_infinite]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-[float_22s_ease-in-out_infinite_1.5s]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-balance">{title}</h2>
          {subtitle && <p className="mt-6 text-white/90 text-lg leading-relaxed">{subtitle}</p>}

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="primary" className="shadow-glow">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button asChild variant="secondary" className="text-[#0B2E57]">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>

          <div className="mt-10 text-sm text-white/70">
            Practical, board-ready strategy • Proven transformation execution • Financial-services specialists
          </div>
        </div>
      </div>
    </section>
  );
}
