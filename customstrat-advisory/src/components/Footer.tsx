import Link from 'next/link';
import { siteContent } from '@/content/siteContent';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-dark to-gray-900" />
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,.35) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-14 text-white">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/new logo.png"
                  alt="CustomStrat Advisory"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xl font-semibold brand-name">{siteContent.company.shortName}</div>
            </div>
            <p className="text-white/75 leading-relaxed">{siteContent.footer.description}</p>


          </div>

          <div>
            <div className="font-semibold mb-4">Explore</div>
            <ul className="space-y-2 text-white/80">
              {siteContent.footer.quickLinks.map((l) => (
                <li key={l.href}>
                  <Link className="hover:text-white transition inline-flex items-center gap-2 group" href={l.href}>
                    <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-4">Contact</div>
            <div className="text-white/80 space-y-2">
              <div>
                <a href={`mailto:${siteContent.company.email}`} className="hover:text-white transition">
                  {siteContent.company.email}
                </a>
              </div>
              <div>
                <a href={`tel:${siteContent.company.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition">
                  {siteContent.company.phone}
                </a>
              </div>
              <div>{siteContent.company.location}</div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link href="/contact" className="btn-secondary !text-[#0B2E57]">
                Get in touch
              </Link>
              <a 
                href="https://www.linkedin.com/in/katie-liebel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={18} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/70">
          <div>© {year} {siteContent.company.name}. All rights reserved.</div>
          <a 
            href="https://www.linkedin.com/in/katie-liebel/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin size={14} />
            <span>Follow on LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}