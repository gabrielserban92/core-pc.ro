'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Te rugăm să completezi câmpurile obligatorii (Nume, Email, Mesaj).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

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
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'A apărut o eroare. Te rugăm să încerci din nou.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Contactează-<span className="text-emerald-400">ne</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Suntem aici pentru a te ajuta cu orice problemă IT!
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#1C1C1E] rounded-3xl p-4 sm:p-6 shadow-2xl max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left Column - Form */}
            <div className="p-4 sm:p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-3">
                Trimite-ne un mesaj
              </h3>
              <p className="text-gray-400 mb-10 text-base leading-relaxed">
                Ai o problemă cu PC-ul sau vrei o configurație nouă? Scrie-ne și te vom contacta în cel mai scurt timp pentru a găsi soluția perfectă.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Nume *" 
                      required
                      className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Prenume" 
                      className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *" 
                    required
                    className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Număr de telefon" 
                    className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
                
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesaj *" 
                    required
                    rows={4}
                    className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  />
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
                    <p>Mesajul a fost trimis cu succes! Te vom contacta în curând.</p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-zinc-950 font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  {status === 'loading' ? (
                    <>
                      Se trimite...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Trimite mesajul
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-2xl overflow-hidden hidden lg:block min-h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop"
                alt="IT Hardware Technician"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/40 to-transparent" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
