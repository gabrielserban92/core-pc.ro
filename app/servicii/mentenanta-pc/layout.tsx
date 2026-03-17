import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentenanță și Curățare PC',
  description: 'Servicii complete de mentenanță PC: curățare de praf, schimbare pastă termoconductoare și optimizare temperaturi pentru o funcționare silențioasă.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
