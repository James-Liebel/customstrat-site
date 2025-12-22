'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '@/content/siteContent';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <header 
      className={`sticky top-0 z-header transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft-md border-b border-slate-200/60'
          : isHome
            ? 'bg-transparent'
            : 'bg-white border-b border-slate-200'
      }`}
    >
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group">
            <div className="relative">
              <div
                className={`w-12 h-12 relative transition-transform duration-300 group-hover:scale-110 rounded-2xl ${
                  !scrolled && isHome ? 'bg-white/90 backdrop-blur-sm shadow-soft p-1' : ''
                }`}
              >
                <Image
                  src="/images/new logo.png"
                  alt="CustomStrat Advisory Logo"
                  fill
                  className="object-contain drop-shadow-[0_1px_6px_rgba(15,23,42,0.15)]"
                />
              </div>
            </div>
            <span className={`text-xl font-semibold ${!scrolled && isHome ? 'text-white' : 'text-primary'}`}>
              {siteContent.company.shortName}
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <li key={item.href} style={{ animationDelay: `${index * 50}ms` }}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-soft'
                      : !scrolled && isHome
                        ? 'text-white/85 hover:text-white'
                        : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {!isActive(item.href) && !(!scrolled && isHome) && (
                    <span className="absolute inset-0 bg-slate-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></span>
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              !scrolled && isHome ? 'hover:bg-white/10' : 'hover:bg-slate-100'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? 
              <X size={24} className={!scrolled && isHome ? 'text-white' : 'text-slate-700'} /> : 
              <Menu size={24} className={!scrolled && isHome ? 'text-white' : 'text-slate-700'} />
            }
          </button>
        </div>

        {mobileMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-2 pb-4 border-t border-slate-200/60 pt-4 stagger-fade">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-soft'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-50'
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