import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instalare Microsoft Office',
  description: 'Instalare și configurare pachet Microsoft Office (Word, Excel, PowerPoint) pentru productivitate maximă acasă sau la birou.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
