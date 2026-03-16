'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneWarning, setPhoneWarning] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact-drawer', handleOpen);
    
    // Also open if hash is #contact
    if (window.location.hash === '#contact') {
      setIsOpen(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        setIsOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('open-contact-drawer', handleOpen);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const closeDrawer = () => {
    setIsOpen(false);
    if (window.location.hash === '#contact') {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    // Reset form state after closing
    setTimeout(() => {
      setStatus('idle');
      setErrorMessage('');
      setAgreed(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      setStatus('error');
      setErrorMessage('Vă rugăm să acceptați politica de confidențialitate.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = {
      firstName: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'A apărut o eroare la trimiterea mesajului.');
      }

      setStatus('success');
      if (data.orderNumber) {
        setErrorMessage(`Mesajul a fost trimis! Nr. comandă: ${data.orderNumber}`);
      } else {
        setErrorMessage('Mesajul a fost trimis cu succes!');
      }
      form.reset();
      setAgreed(false);
      
      // Close drawer after 5 seconds to let them read the order number
      setTimeout(() => {
        closeDrawer();
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'A apărut o eroare. Te rugăm să încerci din nou.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-white/10 z-[101] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Contactează-ne</h2>
              <button
                onClick={closeDrawer}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nume/Prenume
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="numele si prenumele dvs."
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="adresa de email"
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="număr de telefon"
                    onInput={(e) => {
                      const val = e.currentTarget.value;
                      if (/[^0-9+]/.test(val)) {
                        setPhoneWarning(true);
                        setTimeout(() => setPhoneWarning(false), 3000);
                      }
                      e.currentTarget.value = val.replace(/[^0-9+]/g, '');
                    }}
                    className={`w-full px-4 py-3 bg-zinc-900 border ${phoneWarning ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10'} rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all`}
                  />
                  {phoneWarning && (
                    <p className="text-red-400 text-xs mt-2 ml-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Sunt permise doar cifre și semnul +
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Cum vă putem ajuta?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Mesajul dvs."
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="privacy"
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 bg-zinc-900"
                    />
                  </div>
                  <label htmlFor="privacy" className="text-sm text-gray-400">
                    Am citit și sunt de acord cu{' '}
                    <Link href="/politica-de-confidentialitate" onClick={closeDrawer} className="text-emerald-400 hover:underline">
                      politica de confidențialitate
                    </Link>
                  </label>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!agreed || status === 'loading'}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-gray-500 text-zinc-950 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 disabled:shadow-none"
                >
                  {status === 'loading' ? (
                    <>
                      Se trimite...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Trimite
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
