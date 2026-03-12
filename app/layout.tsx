import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import ContactDrawer from '@/components/ContactDrawer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'core-pc.ro | Mentenanță PC & Laptop',
  description: 'Magazin online pentru servicii de mentenanță PC, laptop și console. Asamblare, curățare, optimizare.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-black text-white" suppressHydrationWarning>
        {children}
        <CookieConsent />
        <ContactDrawer />
      </body>
    </html>
  );
}
