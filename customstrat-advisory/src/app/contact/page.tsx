import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { siteContent } from '@/content/siteContent';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with CustomStrat Advisory to discuss your strategic needs.',
};

export default function ContactPage() {
  const contact = siteContent.contact.info;

  return (
    <>
      <Hero
        title={siteContent.contact.hero.title}
        image="/images/hero-contact.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl mb-6">
                  <Image
                    src="/images/katie-liebel.webp"
                    alt={contact.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{contact.name}</h3>
                <p className="text-xl text-gray-600 mb-2">{contact.title}</p>
                <p className="text-lg text-primary font-semibold mb-6">{contact.company}</p>
              </div>

              <div className="space-y-4">
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
                      href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}