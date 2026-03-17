import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Optimizare Windows & Debloat',
  description: 'Optimizare sistem de operare, debloat Windows și setări avansate pentru performanță maximă și mai multe FPS-uri în jocuri.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
