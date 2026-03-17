import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instalare Windows & Drivere',
  description: 'Instalare profesională Windows 11/10, configurare drivere și programe de bază pentru o funcționare perfectă și rapidă a sistemului tău.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
