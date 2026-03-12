'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Wrench, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1920&auto=format&fit=crop"
        alt="PC Maintenance Background"
        fill
        sizes="100vw"
        className="object-cover z-0"
        referrerPolicy="no-referrer"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              <span>Diagnosticare rapidă</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              De toate pentru <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                device-ul tău!
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Aici vei găsi diferite servicii și soluții pentru dispozitivele tale, în special pentru laptop-uri, desktop-uri sau console.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="#software"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
              >
                Vezi Serviciile
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event('open-contact-drawer'));
                }}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all border border-white/20 flex items-center justify-center backdrop-blur-sm"
              >
                Contactează-ne
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left max-w-2xl mx-auto">
              <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-start gap-3 bg-black/40 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Reparații</p>
                  <p className="text-xs text-gray-400">Hardware & Software</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Rapid</p>
                  <p className="text-xs text-gray-400">Timp scurt de execuție</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Garanție</p>
                  <p className="text-xs text-gray-400">Calitate asigurată</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
