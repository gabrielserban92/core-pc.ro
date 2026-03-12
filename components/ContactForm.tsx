'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Send } from 'lucide-react';

export default function ContactForm() {
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
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
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

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nume" 
                      className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Prenume" 
                      className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    placeholder="Număr de telefon" 
                    className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
                
                <div>
                  <textarea 
                    placeholder="Mesaj" 
                    rows={4}
                    className="w-full bg-[#2A2A2C] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  Trimite mesajul
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-2xl overflow-hidden hidden lg:block min-h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop"
                alt="IT Hardware Technician"
                fill
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
