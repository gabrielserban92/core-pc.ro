import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Update BIOS Placă de Bază',
  description: 'Actualizare de BIOS realizată în siguranță pentru compatibilitate cu noi procesoare, rezolvarea erorilor și stabilitate maximă.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
