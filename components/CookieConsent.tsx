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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-zinc-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center relative overflow-hidden"
          >
            {/* Element decorativ de fundal */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                <Cookie className="w-8 h-8 text-emerald-400" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">
                Politica de Cookies
              </h2>
              
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                Folosim cookie-uri pentru a vă asigura cea mai bună experiență pe site-ul nostru. Pentru a continua navigarea, vă rugăm să acceptați utilizarea acestora conform{' '}
                <Link href="/politica-de-cookies" className="text-emerald-400 hover:underline font-medium">
                  Politicii noastre de Cookies
                </Link>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-3 rounded-xl font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Nu sunt de acord
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-3 rounded-xl font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/25"
                >
                  Sunt de acord
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
