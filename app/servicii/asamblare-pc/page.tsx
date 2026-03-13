'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Star, Minus, Plus, ShoppingCart, AlertTriangle, Monitor, Diamond, AlertCircle, Rocket, Package, Clock, HeadphonesIcon, Settings, Wrench, RefreshCw, Laptop, Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const images = [
  "https://drive.google.com/uc?export=view&id=1Fx9SkU5bLGbgiyex8EnBMK0FdYgM_VbA",
  "https://drive.google.com/uc?export=view&id=1tzLE4bJcxhI89M8btxLm8Uh2rkvr_aGZ",
  "https://drive.google.com/uc?export=view&id=1X8vLL_lIOk0O362pjeuipPeAoc0D_Na3",
  "https://drive.google.com/uc?export=view&id=1v0KFpdn7P_OrvLTdLdfUou9GlhVOnY17",
  "https://drive.google.com/uc?export=view&id=1ZEXt2G01CkG8j-ogUiND_sUuI6biXN_4",
  "https://drive.google.com/uc?export=view&id=17iprrzJpqM7gZ71uQ129ervA1UPQaSir",
  "https://drive.google.com/uc?export=view&id=18eRxMMaFgayJ13UKjCPyZj8K7uoTDUHo"
];

export default function AsamblarePC() {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

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
                alt="Asamblare PC"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Asamblare PC Gaming & Office</h1>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Preț pornire</p>
                <div className="text-4xl font-bold text-emerald-400">449,99 lei</div>
              </div>
              <Link href="/#contact" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Programează o asamblare
              </Link>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8 flex gap-3 text-yellow-500/90 text-sm leading-relaxed">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>Pentru PC-urile în valoare de peste 5000 lei, prețul asamblării este 10% din valoarea pieselor.</p>
            </div>

            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p className="font-medium text-white text-base">Vrei un PC nou, dar nu știi cum să-l asamblezi? 🧐</p>
              
              <p>„Dăm viață ideilor tale cu un setup configurat de la zero! 🚀 De la stații de lucru Office ultra-eficiente, până la bestii de Gaming gata de competiție, echipa noastră transformă componentele în performanță pură. Tu alegi destinația, noi construim motorul!”</p>
              
              <div>
                <h2 className="flex items-center gap-2 mb-3 font-bold text-lg text-white">
                  <Diamond className="w-5 h-5 text-emerald-400" />
                  Asamblare Premium (Performanță Maximă):
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Montare și organizare componente hardware</li>
                  <li>Cooling management avansat</li>
                  <li>Aplicare pastă termo premium (Deepcool DM9 / Artic-MX6)</li>
                  <li>Cable management profesionist</li>
                  <li>Verificare și testare componente</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-2 mb-3 text-rose-400 font-bold text-lg">
                  <AlertCircle className="w-5 h-5" />
                  Configurare Software Inclusă:
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Instalare sistem de operare (Windows 11 Home/ PRO)</li>
                  <li>Instalare drivere și ultimele update-uri de sistem</li>
                  <li>Instalare programe esențiale + suita Office</li>
                  <li>Optimizare sistem pentru cele mai înalte performanțe</li>
                  <li>Teste de stres pentru temperaturi și stabilitate</li>
                </ul>
              </div>

              <p className="text-base text-white font-medium bg-white/5 p-4 rounded-xl border border-white/10">Sari peste bătăile de cap cu driverele sau cablurile. Cu Asamblarea Premium, primești un PC gata de luptă: îl scoți din cutie, îl pornești și ești direct în lobby-ul de Steam sau Epic. De la noi pleacă testat, la tine ajunge perfect.</p>

              <div className="flex flex-col gap-3 pt-4">
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
