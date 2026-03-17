import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Înlocuire Componente PC & Laptop',
  description: 'Upgrade și înlocuire piese defecte (RAM, SSD, Placă Video, Sursă) pentru PC și laptop. Diagnoză și montaj profesional.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
