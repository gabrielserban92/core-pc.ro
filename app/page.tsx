import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Services = dynamic(() => import('@/components/Services'));
const Features = dynamic(() => import('@/components/Features'));
const ContactForm = dynamic(() => import('@/components/ContactForm'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Footer = dynamic(() => import('@/components/Footer'));
const FloatingActions = dynamic(() => import('@/components/FloatingActions'));

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <ContactForm />
      <FAQ />
      <Footer />
      <FloatingActions />
    </main>
  );
}
