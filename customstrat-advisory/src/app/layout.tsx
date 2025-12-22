import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeasonalEffects from '@/components/SeasonalEffects';
import '@/styles/globals.css';
import { siteContent } from '@/content/siteContent';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-brand',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.company.name} | Strategic Advisory for Financial Services`,
    template: `%s | ${siteContent.company.name}`,
  },
  description: siteContent.company.tagline,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteContent.company.name,
    title: siteContent.company.name,
    description: siteContent.company.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen antialiased font-sans text-slate-900 bg-white overflow-x-hidden">
        <SeasonalEffects enabled={true} />
        

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}