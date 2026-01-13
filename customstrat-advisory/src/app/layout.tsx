import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import { siteContent } from '@/content/siteContent';
import { Inter, Manrope } from 'next/font/google';

// Microsoft Clarity Project ID
// Get it from: https://clarity.microsoft.com
const CLARITY_PROJECT_ID = 'v0jv4m5p9c';

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
        {/* Microsoft Clarity Analytics Script - Loads early for tracking
            Zero-request setup - no cookie banners required */}
        {CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'YOUR_CLARITY_PROJECT_ID_HERE' && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
              `,
            }}
          />
        )}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}