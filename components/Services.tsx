'use client';

import { motion } from 'motion/react';
import { Settings, Monitor, Laptop, Gamepad2, Wrench, RefreshCw, Layers, Sliders, FileText, Cpu, LayoutTemplate, Globe, ShoppingCart, Edit3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const softwareServices = [
  {
    id: 'instalare-sistem-operare',
    title: 'Instalare sistem operare',
    description: 'Instalare Windows, drivere și programe de bază pentru o funcționare optimă.',
    icon: Settings,
    price: 'de la 149,99 RON',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    image: 'https://raw.githubusercontent.com/gabrielserban92/core-pc.ro/main/assets/Windows_11_Installation.jpg'
  },
  {
    id: 'optimizare-sistem-operare',
    title: 'Optimizare sistem operare',
    description: 'Debloat Windows, setări pentru performanță maximă în jocuri și aplicații.',
    icon: RefreshCw,
    price: 'de la 99,99 RON',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    image: 'https://picsum.photos/seed/optimizare/600/400'
  },
  {
    id: 'configurare-pc',
    title: 'Configurare PC',
    description: 'Configurare inițială, partiționare și setări personalizate pentru nevoile tale.',
    icon: Sliders,
    price: 'de la 99,99 RON',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    image: 'https://picsum.photos/seed/configurare/600/400'
  },
  {
    id: 'instalare-office',
    title: 'Instalare Office',
    description: 'Instalare și activare pachet Microsoft Office (Word, Excel, PowerPoint).',
    icon: FileText,
    price: 'de la 99,99 RON',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    image: 'https://picsum.photos/seed/office/600/400'
  },
  {
    id: 'update-bios',
    title: 'Update BIOS',
    description: 'Actualizare de BIOS în siguranță pentru compatibilitate și stabilitate.',
    icon: Cpu,
    price: 'de la 99,99 RON',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    image: 'https://picsum.photos/seed/bios/600/400'
  }
];

const hardwareServices = [
  {
    id: 'asamblare-pc',
    title: 'Asamblare PC',
    description: 'Asamblare profesională a componentelor tale, cu un cable management impecabil.',
    icon: Layers,
    price: 'de la 499,99 lei',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    image: 'https://drive.google.com/uc?export=view&id=1Fx9SkU5bLGbgiyex8EnBMK0FdYgM_VbA'
  },
  {
    id: 'mentenanta-pc',
    title: 'Mentenanță PC',
    description: 'Curățare de praf, schimbare pastă termoconductoare și optimizare sistem.',
    icon: Monitor,
    price: 'de la 399,99 RON',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    image: 'https://drive.google.com/uc?export=view&id=1-86lYiLNCHDZEd6461Ow4aJzMGP7cwxS'
  },
  {
    id: 'mentenanta-laptop',
    title: 'Mentenanță Laptop',
    description: 'Curățare sistem de răcire, schimbare pastă și pad-uri termice.',
    icon: Laptop,
    price: 'de la 299,99 RON',
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    image: 'https://drive.google.com/uc?export=view&id=1AUOpVX008PrXqykIXj5XF87YkEkbnU5l'
  },
  {
    id: 'mentenanta-console',
    title: 'Mentenanță Console',
    description: 'Curățare completă și schimbare pastă/metal lichid pentru PS și Xbox.',
    icon: Gamepad2,
    price: 'de la 249,99 RON',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    image: 'https://drive.google.com/uc?export=view&id=1YsEtxVEuR3ntCEd35LRrPo0r0UQGb5h2'
  },
  {
    id: 'inlocuire-componente',
    title: 'Înlocuire componente',
    description: 'Upgrade sau înlocuire piese defecte (RAM, SSD, Placă Video, etc).',
    icon: Wrench,
    price: 'de la 49,99 RON',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    image: 'https://drive.google.com/uc?export=view&id=1IrwxE-nflFkE-lkPxY5mCEseF9W2GfCm'
  }
];

const webDesignServices = [
  {
    id: 'landing-page',
    title: 'Landing page',
    description: 'Creare pagină de prezentare simplă, eficientă și optimizată pentru conversii.',
    icon: LayoutTemplate,
    price: 'Contactează-ne',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    image: 'https://picsum.photos/seed/landing/600/400'
  },
  {
    id: 'site-prezentare',
    title: 'Site prezentare',
    description: 'Website complet pentru afacerea ta, cu design modern și responsiv.',
    icon: Globe,
    price: 'Contactează-ne',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    image: 'https://picsum.photos/seed/site/600/400'
  },
  {
    id: 'magazin-online',
    title: 'Magazin online',
    description: 'Platformă e-commerce completă, gata de vânzare, cu integrare plăți.',
    icon: ShoppingCart,
    price: 'Contactează-ne',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    image: 'https://picsum.photos/seed/shop/600/400'
  },
  {
    id: 'modificare-site',
    title: 'Modificare/actualizare site live',
    description: 'Mentenanță, actualizări și modificări pentru site-ul tău existent.',
    icon: Edit3,
    price: 'Contactează-ne',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    image: 'https://picsum.photos/seed/update/600/400'
  }
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full"
  >
    <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden h-full hover:border-emerald-500/30 transition-all group flex flex-col">
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform`}>
          <service.icon className={`w-6 h-6 ${service.color}`} />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-white mb-3">
          {service.title}
        </h4>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <span className="text-white font-medium text-sm">
            {service.price}
          </span>
          <Link 
            href={`/servicii/${service.id}`}
            className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors"
          >
            Detalii &rarr;
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <div className="bg-zinc-950">
      {/* Software Services */}
      <section id="software" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Servicii Software
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Soluții software complete
            </h3>
            <p className="text-gray-400 text-lg">
              De la instalări de sisteme de operare până la optimizări avansate, ne asigurăm că software-ul tău rulează impecabil.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
            {softwareServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Services */}
      <section id="hardware" className="py-24 relative border-t border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Servicii Hardware
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Reparații și mentenanță hardware
            </h3>
            <p className="text-gray-400 text-lg">
              Curățare, asamblare, upgrade-uri și reparații pentru PC-uri, laptop-uri și console.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
            {hardwareServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Web Design Services */}
      <section id="web-design" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Servicii Web Design
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Prezență online de impact
            </h3>
            <p className="text-gray-400 text-lg">
              Creăm site-uri web moderne, rapide și optimizate pentru a-ți crește afacerea în mediul digital.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {webDesignServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
