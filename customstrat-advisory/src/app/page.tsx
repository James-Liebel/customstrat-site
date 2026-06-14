import { siteContent } from "@/content/siteContent";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Atmosphere from "@/components/Atmosphere";

export default function HomePage() {
  const engagementModes = [
    "Monthly Retainer",
    "Fractional Chief Strategy or Transformation Officer",
    "Event-Focused",
    "By the project, part-time, or full-time teams"
  ];

  return (
    <main className="cs-shell--home relative">
      {/* Background Atmosphere Layer (Logo Blue Gradient) */}
      <Atmosphere />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary/90 to-primary/60"></div>

        {/* Living backdrop: breathing gradient blooms + diamond lattice +
            shimmer sweep + slow floating diamonds, under a legibility scrim */}
        <div className="cs-homehero" aria-hidden="true">
          <span className="cs-homehero-bloom cs-homehero-bloom--a" />
          <span className="cs-homehero-bloom cs-homehero-bloom--b" />
          <span className="cs-homehero-bloom cs-homehero-bloom--c" />
          <div className="cs-hero-grid" />
          <div className="cs-hero-shimmer" />
          <span className="cs-homehero-diamond" style={{ top: '22%', left: '12%', width: 26, height: 26, '--dur': '13s', '--delay': '0s' } as React.CSSProperties} />
          <span className="cs-homehero-diamond cs-homehero-diamond--accent" style={{ top: '64%', left: '18%', width: 18, height: 18, '--dur': '16s', '--delay': '-4s' } as React.CSSProperties} />
          <span className="cs-homehero-diamond cs-homehero-diamond--accent" style={{ top: '30%', right: '14%', width: 20, height: 20, '--dur': '15s', '--delay': '-7s' } as React.CSSProperties} />
          <span className="cs-homehero-diamond" style={{ top: '70%', right: '12%', width: 28, height: 28, '--dur': '18s', '--delay': '-2s' } as React.CSSProperties} />
          <div className="cs-homehero-scrim" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-white py-12 text-center">
          <div className="flex justify-center mb-8 animate-[fadeInUp_800ms_ease-out]">
            <div className="relative w-48 h-48">
              <Image
                src="/images/logo.webp"
                alt="CustomStrat Advisory logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-light mb-6 animate-[fadeInUp_800ms_ease-out_200ms] opacity-0 [animation-fill-mode:forwards]">
            CustomStrat Advisory, LLC
          </h1>

          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto animate-[fadeInUp_800ms_ease-out_400ms] opacity-0 [animation-fill-mode:forwards]">
            Driving growth in mid-sized banks and insurance companies through customer-centered strategy and transformation.
          </p>
        </div>
      </section>

      {/* Main content: white sheet rising over the dark hero */}
      <section className="cs-section py-20 relative z-10 bg-white shadow-2xl rounded-t-[2.5rem] -mt-6">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Services Offered */}
            <div className="space-y-6">
              <h2 className="text-primary text-xl font-bold uppercase tracking-widest border-b-2 border-accent pb-2 inline-block">
                {siteContent.home.sections.servicesOffered.title}
              </h2>
              <ul className="space-y-4">
                {siteContent.home.sections.servicesOffered.items.map((item, index) => (
                  <li key={index} className="text-slate-700 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clients Served */}
            <div className="space-y-6">
              <h2 className="text-primary text-xl font-bold uppercase tracking-widest border-b-2 border-accent pb-2 inline-block">
                {siteContent.home.sections.clientsServed.title}
              </h2>
              <ul className="space-y-4">
                {siteContent.home.sections.clientsServed.items.map((item, index) => (
                  <li key={index} className="text-slate-700 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach */}
            <div className="space-y-6">
              <h2 className="text-primary text-xl font-bold uppercase tracking-widest border-b-2 border-accent pb-2 inline-block">
                {siteContent.home.sections.approach.title}
              </h2>
              <ul className="space-y-4">
                {siteContent.home.sections.approach.items.map((item, index) => (
                  <li key={index} className="text-slate-700 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/about#services" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
                  More detail on services <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* How we engage (Formerly Value Proposition) */}
            <div className="space-y-6">
              <h2 className="text-primary text-xl font-bold uppercase tracking-widest border-b-2 border-accent pb-2 inline-block">
                How we engage
              </h2>
              <ul className="space-y-4">
                {engagementModes.map((item, index) => (
                  <li key={index} className="text-slate-700 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Success Message & CTA */}
          <div className="mt-24 text-center space-y-8">
            <p className="text-2xl md:text-3xl text-primary font-light italic opacity-80">
              {siteContent.home.successMessage}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/services"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Case Studies
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link 
                href="/insights" 
                className="btn-secondary inline-flex items-center gap-2"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
