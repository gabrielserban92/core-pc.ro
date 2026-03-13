'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, CheckCircle2, Monitor, AlertCircle, Rocket, Package, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const images = [
  "https://lh3.googleusercontent.com/d/1DUJvN0gN5MciOw27p_1O8WHtrzZST0ru"
];

export default function InstalareSistemOperare() {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <div className="pt-40 lg:pt-48 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Images */}
          <div className="space-y-4 lg:sticky lg:top-24 h-fit">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group">
              <Image
                src={images[activeImage]}
                alt="Instalare Sistem Operare"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
                priority
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex overflow-x-auto gap-2 sm:gap-3 pb-2 snap-x [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative flex-none w-[calc((100%-2rem)/5)] sm:w-[calc((100%-3rem)/5)] aspect-square rounded-xl overflow-hidden border-2 transition-all snap-start ${
                      activeImage === idx ? 'border-emerald-500' : 'border-transparent hover:border-white/20'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Instalare Sistem de Operare</h1>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Preț pornire</p>
                <div className="text-4xl font-bold text-emerald-400">149,99 lei</div>
              </div>
              <Link href="/#contact" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Programează o instalare
              </Link>
            </div>

            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p className="font-medium text-white text-base">Ai nevoie de o instalare rapidă și corectă a sistemului de operare? 💻</p>
              
              <p>A început sistemul să ruleze tot mai lent? S-ar putea să ai nevoie de o reinstalare de sistem! Pentru a funcționa cât mai bine device-ul, recomandăm ștergerea completă și instalarea de la zero.</p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 text-gray-300 text-sm leading-relaxed">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                <p><strong>Important:</strong> Instalăm sistemul de operare doar pe SSD, nu pe HDD-uri, pentru a garanta o performanță optimă. Pentru recuperare date sau copiere, prețul se discută ulterior, în funcție de mărimea fișierelor.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 mb-3 font-bold text-lg text-white">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Instalare Completă:
                </h2>
                <ul className="list-none space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Instalare sistem de operare: Windows 10 sau 11 (versiunile Home sau Pro)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Instalare drivere & update-uri la zi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Activare Windows cu licență retail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Instalare programe cerute + suita Office</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Optimizare sistem pentru cea mai bună performanță în aplicații/jocuri</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link href="/livrare-ridicare" className="flex items-center gap-2 font-medium text-white hover:text-emerald-300 transition-colors">
                  <Rocket className="w-5 h-5 text-emerald-400" />
                  <span><span className="text-emerald-400">Livrare personală</span> conform zonelor incluse (pentru intervenții fizice).</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
