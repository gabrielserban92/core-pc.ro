import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import ContactDrawer from '@/components/ContactDrawer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://core-pc.ro'),
  title: {
    default: 'Core-PC | Servicii Profesionale Mentenanță PC & Laptop',
    template: '%s | Core-PC',
  },
  description: 'Servicii profesionale de mentenanță IT: asamblare PC, curățare laptop, instalare Windows, optimizare și reparații console. Intervenții rapide și sigure.',
  keywords: ['mentenanta pc', 'reparatii laptop', 'asamblare pc', 'instalare windows', 'curatare praf laptop', 'reparatii console', 'service it', 'optimizare pc'],
  authors: [{ name: 'Core-PC' }],
  creator: 'Core-PC',
  publisher: 'Core-PC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Core-PC | Servicii Profesionale Mentenanță PC & Laptop',
    description: 'Servicii profesionale de mentenanță IT: asamblare PC, curățare laptop, instalare Windows, optimizare și reparații console.',
    url: 'https://core-pc.ro',
    siteName: 'Core-PC',
    locale: 'ro_RO',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Core-PC',
    image: 'https://core-pc.ro/logo.png', // Update with actual logo URL if available
    description: 'Servicii profesionale de mentenanță IT: asamblare PC, curățare laptop, instalare Windows, optimizare și reparații console. Intervenții rapide și sigure.',
    url: 'https://core-pc.ro',
    telephone: '+40700000000', // You can update this with the real phone number
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'București',
      addressRegion: 'Ilfov',
      addressCountry: 'RO'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.4268,
      longitude: 26.1025
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    priceRange: '$$'
  };

  return (
    <html lang="ro" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-black text-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
        <ContactDrawer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
