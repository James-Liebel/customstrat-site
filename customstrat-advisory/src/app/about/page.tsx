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
          <h2 className="text-primary mb-12 text-center">{siteContent.about.leadership.title}</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Leader Photo */}
              <div className="mx-auto md:mx-0">
                <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/katie-liebel.jpg"
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Leader Info */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-2">{leader.name}</h3>
                <p className="text-xl text-gray-600 mb-4">{leader.title}</p>
                <p className="text-lg text-primary font-semibold mb-6">{leader.company}</p>

                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">{leader.bio}</p>
                  
                  {leader.extended.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">{paragraph}</p>
                  ))}
                </div>

                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  View LinkedIn Profile
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-primary mb-12 text-center">{siteContent.about.engagement.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {siteContent.about.engagement.methods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{method}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/team-meeting.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}