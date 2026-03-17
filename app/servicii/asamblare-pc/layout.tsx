import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asamblare PC Gaming & Office',
  description: 'Servicii profesionale de asamblare PC cu cable management impecabil. Construim sisteme office și de gaming performante.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
