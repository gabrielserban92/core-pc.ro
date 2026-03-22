'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verificăm dacă utilizatorul a acceptat deja cookie-urile
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // O mică întârziere pentru o experiență mai plăcută (apare după ce se încarcă pagina)
      const timer = setTimeout(() => setShowConsent(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    // Dacă nu este de acord, îl redirecționăm către o pagină inexistentă pentru a declanșa 404
    router.push('/404');
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] w-[calc(100%-2rem)] sm:w-full max-w-[340px] bg-zinc-900 border border-white/10 rounded-2xl p-5 shadow-2xl overflow-hidden"
        >
          {/* Element decorativ de fundal */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30 shrink-0">
                <Cookie className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-lg font-bold text-white">
                Politica de Cookies
              </h2>
            </div>
            
            <p className="text-gray-400 mb-5 text-xs leading-relaxed">
              Folosim cookie-uri pentru a vă asigura cea mai bună experiență. Continuând, acceptați{' '}
              <Link href="/politica-de-cookies" className="text-emerald-400 hover:underline font-medium">
                Politica noastră
              </Link>.
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={handleDecline}
                className="flex-1 px-3 py-2.5 rounded-xl font-medium text-xs text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Refuz
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-3 py-2.5 rounded-xl font-bold text-xs text-zinc-950 bg-emerald-500 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/25"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
