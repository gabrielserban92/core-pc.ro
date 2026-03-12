'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Wrench, CheckCircle2, Rocket, Package, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const images = [
  "https://github.com/gabrielserban92/core-pc.ro/blob/main/assets/inlocuire-componente.jpg?raw=true",
  "https://github.com/gabrielserban92/core-pc.ro/blob/main/assets/inlocuire-cooler.jpg?raw=true",
  "https://github.com/gabrielserban92/core-pc.ro/blob/main/assets/inlocuire-placa-video.jpg?raw=true",
  "https://github.com/gabrielserban92/core-pc.ro/blob/main/assets/inlocuire-rami.jpg?raw=true",
  "https://github.com/gabrielserban92/core-pc.ro/blob/main/assets/m2-ssd.jpg?raw=true"
];

const serviceOptions = [
  { id: 'ventilatoare', name: 'Montare ventilatoare suplimentare', price: 49.99 },
  { id: 'standard', name: 'Înlocuire componentă standard (RAM, SSD, HDD, Placă video)', price: 99.99 },
  { id: 'cooler', name: 'Schimb cooler procesor', price: 149.99 },
  { id: 'display', name: 'Înlocuire display laptop', price: 199.99 },
  { id: 'carcasa', name: 'Înlocuire carcasă PC', price: 299.99 },
];

export default function InlocuireComponente() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);

  const nextImage = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Images */}
          <div className="space-y-4 lg:sticky lg:top-24 h-fit">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group">
              <Image
                src={images[activeImage]}
                alt="Înlocuire Componente"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
                priority
              />
              
              {/* Navigation Arrows */}
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
            </div>
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
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Înlocuire Componente</h1>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Preț manoperă</p>
                <div className="text-4xl font-bold text-emerald-400">{selectedService.price.toFixed(2)} lei</div>
              </div>
              <Link href="/#contact" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Programează o înlocuire
              </Link>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8 flex gap-3 text-yellow-500/90 text-sm leading-relaxed">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>⚠️ Prețul afișat include doar manopera. Componentele se achită separat.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Alege tipul de intervenție:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedService(option)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedService.id === option.id 
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
                        : 'bg-zinc-900 border-white/10 text-gray-300 hover:border-white/30 hover:bg-zinc-800'
                    }`}
                  >
                    <div className="font-medium">{option.name}</div>
                    <div className={`text-sm mt-1 ${selectedService.id === option.id ? 'text-emerald-500/80' : 'text-gray-500'}`}>
                      {option.price.toFixed(2)} lei
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p className="font-medium text-white text-base">PC-ul, consola sau laptopul tău nu mai face față?</p>
              
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">💻 Se mișcă greu în aplicații sau jocuri?</li>
                <li className="flex items-center gap-2">🔧 Ai o componentă defectă sau un ecran spart?</li>
                <li className="flex items-center gap-2">⚡ Îți dorești mai multă viteză și performanță?</li>
              </ul>
              
              <p className="text-base text-white font-medium bg-white/5 p-4 rounded-xl border border-white/10">
                Lasă-ne pe noi să-l readucem la viață!
              </p>

              <div>
                <h2 className="flex items-center gap-2 mb-3 font-bold text-lg text-white">
                  <Wrench className="w-5 h-5 text-emerald-400" />
                  Serviciile noastre includ:
                </h2>
                <ul className="list-none space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Înlocuire componente (PC & Laptop)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Upgrade stocare: trecere de la HDD la SSD sau adăugare SSD</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Adăugare memorie RAM pentru un sistem mai rapid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Schimb cooler procesor pentru o răcire eficientă</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Înlocuire carcasă (PC & Laptop)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Montare ventilatoare suplimentare pentru un flux de aer mai bun (PC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Înlocuire display pentru laptopuri cu ecran spart</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>➕ Și multe alte servicii – contactează-ne pentru mai multe detalii!</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <p className="flex items-center gap-2 font-medium text-white">
                  <Rocket className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400">Livrare personală</span> conform zonelor incluse.
                </p>
                <p className="flex items-center gap-2 font-medium text-white">
                  <Package className="w-5 h-5 text-emerald-400" />
                  Livrare gratuită prin curier.
                </p>
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
