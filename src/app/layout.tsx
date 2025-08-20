import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

const metadataBase = new URL('https://texmethod.com');

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: 'Tex Method | Powering the Future of Garment Automation',
    template: '%s | Tex Method',
  },
  description: 'Tex Method Company Ltd. is a garment-manufacturing tech innovator specializing in automated sewing machines and sustainable apparel production solutions.',
  openGraph: {
    title: 'Tex Method | Powering the Future of Garment Automation',
    description: 'Innovating the apparel industry with cutting-edge automated sewing technology.',
    url: 'https://texmethod.com',
    siteName: 'Tex Method',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0A2540',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID || ""} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
