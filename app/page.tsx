import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <FAQ />
      <Footer />
      <FloatingActions />
    </main>
  );
}
