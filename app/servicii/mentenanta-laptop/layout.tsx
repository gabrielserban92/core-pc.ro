import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentenanță și Curățare Laptop',
  description: 'Curățare profesională sistem de răcire laptop, schimbare pastă și pad-uri termice. Prevenim supraîncălzirea și prelungim viața laptopului tău.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
