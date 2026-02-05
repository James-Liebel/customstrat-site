import { siteContent } from "@/content/siteContent";
import Image from "next/image";
import Link from "next/link";
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
        {/* Background Image with Darker Blue Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-home.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#1e4b75]/90 to-[#1e4b75]/60"></div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-white py-12 text-center">
          <div className="flex justify-center mb-8 animate-[fadeInUp_800ms_ease-out]">
            <div className="relative group w-48 h-48">
              <div className="absolute -inset-4 bg-white rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Image
                src="/images/new logo.png"
                alt="CustomStrat Advisory logo"
                fill
                priority
                className="object-contain relative z-10"
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

      {/* Main Content Sections - REVERTED TO WHITE BACKGROUND */}
      <section className="cs-section py-20 relative z-10 bg-white shadow-2xl">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Services Offered */}
            <div className="space-y-6">
              <h2 className="text-primary text-xl font-bold uppercase tracking-widest border-b-2 border-accent pb-2 inline-block">
                {siteContent.home.sections.servicesOffered.title}
              </h2>
              <ul className="space-y-4">
                {siteContent.home.sections.servicesOffered.items.map((item, index) => (
                  <li key={index} className="text-gray-700 flex items-start gap-3">
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
                  <li key={index} className="text-gray-700 flex items-start gap-3">
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
                  <li key={index} className="text-gray-700 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/about#services" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
                  More detail on services <span>→</span>
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
                  <li key={index} className="text-gray-700 flex items-start gap-3">
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
                <span className="text-lg">→</span>
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
