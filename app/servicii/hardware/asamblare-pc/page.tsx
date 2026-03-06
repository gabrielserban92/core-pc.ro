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
  "https://frankfurt.apollo.olxcdn.com/v1/files/a08mj84j7rv2-RO/image",
  "https://frankfurt.apollo.olxcdn.com/v1/files/m29dd9ut9tf31-RO/image;s=1000x700",
  "https://frankfurt.apollo.olxcdn.com/v1/files/2t79kacqvce23-RO/image;s=1000x700",
  "https://frankfurt.apollo.olxcdn.com/v1/files/5ayubrxfy7v62-RO/image;s=1000x700",
  "https://frankfurt.apollo.olxcdn.com/v1/files/yhghk5o5jlm91-RO/image;s=1000x700",
  "https://frankfurt.apollo.olxcdn.com/v1/files/63c0sefqqvaj1-RO/image;s=1000x700",
  "https://frankfurt.apollo.olxcdn.com/v1/files/63cs46eeq4h4-RO/image;s=1000x700"
];

const relatedServices = [
  {
    title: 'Configurare PC',
    price: '99,99 lei',
    icon: HeadphonesIcon,
    image: "https://picsum.photos/seed/configpc/400/400"
  },
  {
    title: 'Instalare sistem de operare',
    price: 'De la 149,99 lei',
    icon: Monitor,
    image: "https://picsum.photos/seed/windows/400/400"
  },
  {
    title: 'Înlocuire componente',
    price: 'De la 49,99 lei',
    icon: Wrench,
    image: "https://picsum.photos/seed/componente/400/400"
  },
  {
    title: 'Mentenanță PC',
    price: 'De la 399,99 lei',
    icon: Settings,
    image: "https://picsum.photos/seed/mentenantapc/400/400"
  },
  {
    title: 'Recondiționare balamale',
    price: 'De la 199,99 lei',
    icon: Laptop,
    image: "https://picsum.photos/seed/balamale/400/400"
  },
  {
    title: 'Instalare Suita Office',
    price: '49,99 lei',
    icon: Diamond,
    image: "https://picsum.photos/seed/office/400/400"
  },
  {
    title: 'Schimb pastă termoconductoare',
    price: 'De la 99,99 lei',
    icon: RefreshCw,
    image: "https://picsum.photos/seed/pasta/400/400"
  },
  {
    title: 'Optimizare sistem de operare',
    price: '99,99 lei',
    icon: Rocket,
    image: "https://picsum.photos/seed/optimizare/400/400"
  },
  {
    title: 'Mentenanță console',
    price: 'De la 199,99 lei',
    icon: Gamepad2,
    image: "https://picsum.photos/seed/console/400/400"
  },
  {
    title: 'Mentenanță laptop',
    price: 'De la 249,99 lei',
    icon: Laptop,
    image: "https://picsum.photos/seed/laptop/400/400"
  }
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

  const visibleCount = 5;
  const startIndex = Math.max(0, Math.min(activeImage - Math.floor(visibleCount / 2), images.length - visibleCount));
  const visibleIndices = Array.from({ length: Math.min(visibleCount, images.length) }, (_, i) => startIndex + i);

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group">
              <Image
                src={images[activeImage]}
                alt="Asamblare PC"
                fill
                className="object-cover"
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
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {visibleIndices.map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-emerald-500' : 'border-transparent hover:border-white/20'
                  }`}
                >
                  <Image
                    src={images[idx]}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Asamblare PC</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">2 recenzii</span>
            </div>

            <div className="text-3xl font-bold mb-8">499,99 lei</div>

            <div className="mb-8">
              <label className="block text-sm text-gray-400 mb-2">Cantitate</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-zinc-900 border border-white/10 rounded-full px-4 py-2">
                  <button onClick={decreaseQuantity} className="text-gray-400 hover:text-white transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button onClick={increaseQuantity} className="text-gray-400 hover:text-white transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex-1 bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
                  Adaugă în coș
                </button>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8 flex gap-3 text-yellow-500/90 text-sm leading-relaxed">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>Pentru PC-urile în valoare de peste 5000 lei, prețul asamblării este 10% din valoarea pieselor.</p>
            </div>

            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p className="font-medium text-white text-base">Vrei un PC nou, dar nu știi cum să-l asamblezi? 🧐</p>
              
              <p>💻 <strong className="text-white">Îți construim PC-ul de la zero, rapid și profesionist!</strong> Fie că ai nevoie de un <strong className="text-white">PC de gaming</strong> sau unul de <strong className="text-white">office</strong>, noi ne ocupăm de tot procesul!</p>
              
              <div>
                <p className="flex items-center gap-2 mb-3">
                  <Diamond className="w-4 h-4 text-emerald-400" />
                  <strong className="text-white">Asamblare Premium</strong> (pentru performanță maximă):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Montare și organizare componente</li>
                  <li>Cooling management</li>
                  <li>Aplicare pastă termo premium (Thermal Grizzly Kryonaut)</li>
                  <li>Cable management profesionist</li>
                  <li>Verificare componente</li>
                </ul>
              </div>

              <div>
                <p className="flex items-center gap-2 mb-3 text-rose-400 font-medium">
                  <AlertCircle className="w-4 h-4" />
                  În asamblarea premium, ne ocupam si de partea de software:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Instalare sistem de operare (Windows 11 Home/ PRO)</li>
                  <li>Instalare drivere si ultimele update-uri de sistem</li>
                  <li>Instalare programele dorite + suita Office</li>
                  <li>Optimizare sistem pentru cele mai înalte performante</li>
                  <li>Update de BIOS la ultima versiune</li>
                  <li>Teste pentru temperaturi și stabilitate</li>
                </ul>
              </div>

              <p>Practic <strong className="text-white">Asamblarea premium</strong> pregătește cap coada un PC, tu doar îl bagi in priza, iti conectezi conturile de Steam/ Epic/ Origin etc. si il folosesti cu spor!</p>

              <p className="flex items-center gap-2 font-medium text-white pt-4">
                <Rocket className="w-5 h-5 text-emerald-400" />
                Transport rapid prin curier – execuție în 24-48h!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 flex items-center justify-center mb-4 border border-white/10">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Livrare gratuită</h3>
              <p className="text-sm text-gray-400">Pentru orice comandă de peste 199 RON.<br/>Serviciile se exclud.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 flex items-center justify-center mb-4 border border-white/10">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Livrare rapidă</h3>
              <p className="text-sm text-gray-400">Pentru produsele aflate în stoc, livrarea se<br/>va face în 1-3 zile lucrătoare.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 flex items-center justify-center mb-4 border border-white/10">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Asistență si suport</h3>
              <p className="text-sm text-gray-400">De Luni până vineri, online și telefonic.<br/>(Fără tech support)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-12">Te-ar putea interesa si:</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedServices.map((service, index) => (
              <Link href="#contact" key={index} className="group block">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
