'use client'

import Script from 'next/script'

type GoogleAnalyticsProps = {
  gaId: string;
};

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  if (!gaId) {
    return null;
  }
  
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}
