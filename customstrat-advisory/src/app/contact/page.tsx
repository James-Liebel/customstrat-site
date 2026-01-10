import { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import { siteContent } from "@/content/siteContent";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CustomStrat Advisory to discuss your strategic needs.",
};

export default function ContactPage() {
  const contact = siteContent.contact.info;

  return (
    <main className="cs-shell--editorial relative text-white">
      {/* Atmosphere: signal-grid theme */}
      <Atmosphere themeKey="signal-grid" />

      <div className="relative z-10">
        <Hero
          title={siteContent.contact.hero.title}
          image="/images/hero-contact.jpg"
          themeKey="signal-grid"
        />

        <section className="cs-section">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

              {/* Profile Side */}
              <div className="animate-[fadeInUp_800ms_ease-out]">
                <div className="mb-8">
                  <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl mb-8 ring-1 ring-white/20">
                    <Image
                      src="/images/katie-liebel.webp"
                      alt={contact.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <h2 className="text-4xl font-semibold text-white mb-2">
                    {contact.name}
                  </h2>
                  {/* Changed to text-white and increased size for prominence */}
                  <p className="text-xl text-white font-light tracking-wide">
                    {contact.title}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="text-accent-light" size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-white/50 font-semibold">Location</p>
                      <p className="text-lg text-white">{contact.location}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-accent-light" size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-white/50 font-semibold">Email</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-lg text-white hover:text-accent-light transition-colors underline underline-offset-4 decoration-white/20"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="text-accent-light" size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-white/50 font-semibold">Phone</p>
                      <a
                        href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                        className="text-lg text-white hover:text-accent-light transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Card Side */}
              <div className="flex animate-[fadeInUp_800ms_ease-out_200ms] opacity-0 [animation-fill-mode:forwards]">
                <div className="w-full rounded-3xl border border-white/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-8 sm:p-10 self-start">
                  <h2 className="text-3xl font-semibold text-gray-900 mb-4">Direct Inquiry</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Ready to discuss a project? Click below to send an email directly to Katie.
                  </p>

                  <a
                    href={`mailto:${contact.email}`}
                    className="btn-primary w-full text-center flex justify-center items-center py-4"
                  >
                    Send an Email
                  </a>


                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}