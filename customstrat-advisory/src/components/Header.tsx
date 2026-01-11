'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '@/content/siteContent';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/services' },
    { label: 'Articles', href: '/insights' },
    { label: 'Endorsements', href: '/endorsements' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Gradient: gentle, always showing
  // Example: from-white to-slate-100, subtle angle, never transparent
  const headerGradient = "bg-gradient-to-b from-white to-slate-100";

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 ${headerGradient} shadow-md border-b border-slate-200`}
      style={{ background: 'linear-gradient(180deg, #fff 80%, #f1f5f9 100%)' }} // override for even gentler gradient
    >
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image src="/images/new logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-semibold text-primary">
              {siteContent.company.shortName}
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      active
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-slate-600 hover:text-primary hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className={`lg:hidden p-2 text-slate-700`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-2 p-4 rounded-2xl bg-white border border-slate-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl font-medium ${
                    isActive(item.href)
                      ? 'bg-primary text-white'
                      : 'text-slate-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}