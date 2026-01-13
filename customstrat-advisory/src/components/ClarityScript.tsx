'use client';

import Script from 'next/script';

/**
 * Microsoft Clarity Analytics Script
 * 
 * Zero-request setup - no cookie banners required.
 * Replace CLARITY_PROJECT_ID with your actual Clarity project ID from clarity.ms
 * 
 * To get your Clarity Project ID:
 * 1. Go to https://clarity.microsoft.com
 * 2. Create a new project or select existing project
 * 3. Copy the Project ID from the setup instructions
 */
const CLARITY_PROJECT_ID = 'YOUR_CLARITY_PROJECT_ID_HERE';

export default function ClarityScript() {
  // Only load in production to avoid tracking during development
  if (process.env.NODE_ENV !== 'production' || !CLARITY_PROJECT_ID || CLARITY_PROJECT_ID === 'YOUR_CLARITY_PROJECT_ID_HERE') {
    return null;
  }

  return (
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
  );
}
