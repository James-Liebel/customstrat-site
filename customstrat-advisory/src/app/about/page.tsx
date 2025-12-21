import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import { siteContent } from '@/content/siteContent';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about CustomStrat Advisory leadership and approach to client engagement.',
};

export default function AboutPage() {
  const leader = siteContent.about.leadership.members[0];

  return (
    <>
      <Hero
        title={siteContent.about.hero.title}
        image="/images/hero-about.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-primary mb-16 text-center accent-line inline-block mx-auto block">
            {siteContent.about.leadership.title}
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Leader Photo */}
              <div className="mx-auto md:mx-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-soft-lg group-hover:shadow-soft-lg transition-all duration-500">
                  <Image
                    src="/images/fullshot.png"
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Leader Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-xl text-gray-600 mb-2">{leader.title}</p>
                  <p className="text-lg text-primary font-semibold mb-6">{leader.company}</p>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg font-medium text-gray-900">{leader.bio}</p>
                  
                  {leader.extended.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-dark font-semibold transition-all duration-300 group"
                >
                  View LinkedIn Profile
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <h2 className="text-primary mb-16 text-center accent-line inline-block mx-auto block">
            {siteContent.about.engagement.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {siteContent.about.engagement.methods.map((method, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-md transition-all duration-500 border-l-4 border-accent group-hover:-translate-y-1">
                  {/* Number indicator */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-soft-md group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 pr-8 group-hover:text-primary transition-colors duration-300">
                    {method}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="mb-6 text-white text-balance">Ready to Work Together?</h2>
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-light text-white/95 leading-relaxed">
            Let's discuss how our customer-focused approach can help your organization achieve its strategic goals.
          </p>
          <a href="/contact" className="inline-block btn-secondary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}