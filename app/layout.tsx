import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DARVYN DIGITAL | Real estate marketing agency",
  description:
    "We help Realtors & Developers build a predictable Lead → Nurture → Site Visit → Sales engine using AI & Performance Marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        
        {/* -------------------------------------------
            1. META PIXEL SCRIPT (Existing)
           ------------------------------------------- */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '857766096772105');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* -------------------------------------------
            2. GOOGLE TAG MANAGER SCRIPT (New)
           ------------------------------------------- */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PXGSWX8H');
            `,
          }}
        />

        {/* -------------------------------------------
            NO-SCRIPT FALLBACKS (For disabled JS)
           ------------------------------------------- */}
        
        <noscript>
          {/* Meta Pixel Fallback */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=857766096772105&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
          
          {/* Google Tag Manager Fallback (New) */}
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXGSWX8H"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}