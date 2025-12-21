import { Metadata } from 'next';
import Hero from '@/components/Hero';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: 'Endorsements',
  description: 'Client testimonials and recommendations for CustomStrat Advisory.',
};

export default function EndorsementsPage() {
  return (
    <>
      <Hero
        title={siteContent.endorsements.hero.title}
        image="/images/hero-home.jpg"
      />

      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-12">
            {siteContent.endorsements.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 lg:p-12 rounded-2xl shadow-soft hover:shadow-soft-md transition-all duration-500 border-l-4 border-accent relative overflow-hidden group"
              >
                {/* Decorative quote mark */}
                <div className="absolute -top-4 -right-4 text-[120px] text-accent/10 font-serif leading-none pointer-events-none">
                  "
                </div>

                {/* Animated background accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <p className="text-xl lg:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex flex-col items-end border-t border-gray-200 pt-6">
                    <p className="font-semibold text-gray-900 text-lg mb-1">
                      {testimonial.author}
                    </p>
                    {testimonial.company && (
                      <p className="text-gray-600">{testimonial.company}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="mb-6 text-white text-balance">Join Our Satisfied Clients</h2>
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-light text-white/95 leading-relaxed">
            Experience the difference that strategic expertise and customer-focused advisory can make for your organization.
          </p>
          <a href="/contact" className="inline-block btn-secondary">
            Start a Conversation
          </a>
        </div>
      </section>
    </>
  );
}