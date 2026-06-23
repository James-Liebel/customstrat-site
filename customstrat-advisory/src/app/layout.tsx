import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReset from '@/components/ScrollReset';
import VisualEffects from '@/components/VisualEffects';
import '@/styles/globals.css';
import { siteContent } from '@/content/siteContent';
import { Inter, Manrope } from 'next/font/google';

// Microsoft Clarity Project ID
// Get it from: https://clarity.microsoft.com
const CLARITY_PROJECT_ID = 'v0jv4m5p9c';

// Strict Content-Security-Policy. Delivered via <meta> because GitHub Pages
// cannot set HTTP response headers. The allowlist is exactly what the site
// loads (self + Microsoft Clarity). script-src/style-src must keep
// 'unsafe-inline': Next's static export inlines per-page RSC bootstrap scripts
// (plus our fx-gate + Clarity loader) that cannot share one hashed policy, and
// many components use inline style attributes — see SECURITY.md for the residual
// risk and the header-only controls (frame-ancestors, HSTS, X-Frame-Options,
// X-Content-Type-Options, Permissions-Policy) that need a CDN/proxy.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "frame-src 'none'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.clarity.ms",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://*.clarity.ms https://c.bing.com",
  "font-src 'self'",
  "connect-src 'self' https://*.clarity.ms",
  "upgrade-insecure-requests",
  "block-all-mixed-content",
].join('; ');

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
  metadataBase: new URL('https://customstrat.com'),
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
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    google: 'JwxuCxGQc1XbW0UpRbcR0uigN6MWAEK896uSfIi1_No',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        {/* CSP gated to production so it doesn't block next dev HMR (which needs
            eval/websockets). The exported static site always builds in prod. */}
        {process.env.NODE_ENV === 'production' && (
          <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        )}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="flex flex-col min-h-screen antialiased font-sans text-slate-900 overflow-x-hidden">
        {/* fx gate: lets globals.css hide reveal targets before first paint,
            so scroll-reveal can fade them in. Skipped for reduced motion and
            absent entirely without JS (content stays fully visible). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('fx')}catch(e){}`,
          }}
        />
        {/* Microsoft Clarity Analytics Script - Loads early for tracking
            Zero-request setup - no cookie banners required */}
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-dropdown focus:bg-white focus:text-primary focus:font-semibold focus:px-4 focus:py-2 focus:rounded-xl focus:shadow-soft-lg"
        >
          Skip to content
        </a>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
          <ScrollReset />
          <VisualEffects />
        </div>
      </body>
    </html>
  );
}