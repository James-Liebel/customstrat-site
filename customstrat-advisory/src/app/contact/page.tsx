import { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import { siteContent } from "@/content/siteContent";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CustomStrat Advisory to discuss your strategic needs.",
};

export default function ContactPage() {
  const contact = siteContent.contact.info;

  return (
    <>
      <Hero title={siteContent.contact.hero.title} image="/images/hero-contact.jpg" />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info (keep photo) */}
            <div>
              <div className="mb-8">
                <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl mb-6">
                  <Image
                    src="/images/katie-liebel.webp"
                    alt={contact.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <h2 className="text-3xl font-semibold text-gray-800 mb-2">{contact.name}</h2>
                <p className="text-gray-600">{contact.title}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">{contact.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <a
                      href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal Email Action (replaces the form completely) */}
            <div className="flex">
              <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-soft p-6 sm:p-8 self-start">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Email Katie</h2>

                <a
                  href={`mailto:${contact.email}`}
                  className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
                >
                  Send an Email
                </a>

                <p className="mt-4 text-sm text-gray-600">
                  This opens your email client with a blank message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
