import { siteContent } from "@/content/siteContent";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="cs-shell--home">
      {/* Hero Section with Company Branding */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-home.jpg)" }}
        >
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-overlay filter blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-overlay filter blur-3xl animate-[float_15s_ease-in-out_infinite_2s]"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-white py-20 text-center">
          {/* Logo (halo only; no badge / no gradient background) */}
          <div className="flex justify-center mb-8 animate-[fadeInUp_800ms_ease-out]">
            <div className="relative group w-40 h-40">
              {/* Halo */}
              <div className="absolute -inset-6 bg-white rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Logo only */}
              <Image
                src="/images/new logo.png"
                alt="CustomStrat Advisory logo"
                fill
                priority
                className="object-contain relative z-10"
              />
            </div>
          </div>

          {/* Company Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-2 animate-[fadeInUp_800ms_ease-out_200ms] opacity-0 [animation-fill-mode:forwards]">
            CustomStrat Advisory, LLC
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-light max-w-5xl mx-auto leading-relaxed animate-[fadeInUp_800ms_ease-out_400ms] opacity-0 [animation-fill-mode:forwards]">
            {siteContent.home.hero.title}
          </p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content Section - Three Columns */}
      <section className="cs-section bg-white animated-bg relative">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Services Offered */}
            <div className="text-center md:text-left">
              <h2 className="text-primary text-2xl md:text-3xl mb-8 pb-4 border-b-4 border-accent inline-block">
                {siteContent.home.sections.servicesOffered.title}
              </h2>
              <ul className="space-y-4 mt-8">
                {siteContent.home.sections.servicesOffered.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-lg flex items-start gap-3 group justify-center md:justify-start"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 group-hover:scale-150 transition-transform duration-[var(--motion-duration-base)]"></div>
                    <span className="group-hover:text-primary transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clients Served */}
            <div className="text-center md:text-left">
              <h2 className="text-primary text-2xl md:text-3xl mb-8 pb-4 border-b-4 border-accent inline-block">
                {siteContent.home.sections.clientsServed.title}
              </h2>
              <ul className="space-y-4 mt-8">
                {siteContent.home.sections.clientsServed.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-lg flex items-start gap-3 group justify-center md:justify-start"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 group-hover:scale-150 transition-transform duration-[var(--motion-duration-base)]"></div>
                    <span className="group-hover:text-primary transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach to Working */}
            <div className="text-center md:text-left">
              <h2 className="text-primary text-2xl md:text-3xl mb-8 pb-4 border-b-4 border-accent inline-block">
                {siteContent.home.sections.approach.title}
              </h2>
              <ul className="space-y-4 mt-8">
                {siteContent.home.sections.approach.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-lg flex items-start gap-3 group justify-center md:justify-start"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="group-hover:text-primary transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Success Message */}
          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl text-primary font-light italic">
              {siteContent.home.successMessage}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
