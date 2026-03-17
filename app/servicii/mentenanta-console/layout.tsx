import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentenanță Console PS & Xbox',
  description: 'Curățare completă și schimbare pastă/metal lichid pentru console PlayStation și Xbox. Scapă de supraîncălzire și zgomotul ventilatorului.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
