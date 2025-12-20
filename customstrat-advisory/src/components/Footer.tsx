import Link from 'next/link';
import { siteContent } from '@/content/siteContent';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{siteContent.company.name}</h3>
            <p className="text-gray-300 mb-4">{siteContent.footer.description}</p>
            <p className="text-gray-400 text-sm">{siteContent.company.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href={`mailto:${siteContent.company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteContent.company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteContent.company.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteContent.company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          {siteContent.footer.copyright}
        </div>
      </div>
    </footer>
  );
}