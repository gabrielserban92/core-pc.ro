'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Home, ArrowLeft, Cpu } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden selection:bg-emerald-500/30">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-20 rounded-full" />
            <div className="w-24 h-24 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center backdrop-blur-xl relative z-10">
              <Cpu className="w-12 h-12 text-emerald-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 leading-none tracking-tighter select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 bg-zinc-950/80 px-6 py-2 rounded-2xl backdrop-blur-sm border border-white/10 rotate-[-5deg] shadow-2xl">
              Eroare de sistem
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mt-8 mb-12"
        >
          Componenta pe care o cauți lipsește sau a fost deconectată. Hai să te readucem la un sistem funcțional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1"
          >
            <Home className="w-5 h-5" />
            Înapoi Acasă
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            Pagina Anterioară
          </button>
        </motion.div>
      </div>
    </div>
  );
}
