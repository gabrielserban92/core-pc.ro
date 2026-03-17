import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Configurare PC Personalizată',
  description: 'Configurare inițială, partiționare corectă a unităților de stocare și setări personalizate pentru noul tău PC.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
