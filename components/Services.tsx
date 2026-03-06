'use client';

import { motion } from 'motion/react';
import { Settings, Monitor, Laptop, Gamepad2, Wrench, RefreshCw, Layers, Shield } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'asamblare-pc',
    title: 'Asamblare PC',
    description: 'Asamblare profesională a componentelor tale, cu un cable management impecabil.',
    icon: Layers,
    price: '499,99 lei',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    id: 'mentenanta-pc',
    title: 'Mentenanță PC',
    description: 'Curățare de praf, schimbare pastă termoconductoare și optimizare sistem.',
    icon: Monitor,
    price: 'de la 100 RON',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10'
  },
  {
    id: 'mentenanta-laptop',
    title: 'Mentenanță Laptop',
    description: 'Curățare sistem de răcire, schimbare pastă și pad-uri termice.',
    icon: Laptop,
    price: 'de la 120 RON',
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10'
  },
  {
    id: 'mentenanta-console',
    title: 'Mentenanță Console',
    description: 'Curățare completă și schimbare pastă/metal lichid pentru PS și Xbox.',
    icon: Gamepad2,
    price: 'de la 150 RON',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    id: 'instalare-os',
    title: 'Instalare OS',
    description: 'Instalare Windows, drivere și programe de bază pentru o funcționare optimă.',
    icon: Settings,
    price: 'de la 80 RON',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    id: 'inlocuire-componente',
    title: 'Înlocuire Componente',
    description: 'Upgrade sau înlocuire piese defecte (RAM, SSD, Placă Video, etc).',
    icon: Wrench,
    price: 'de la 50 RON',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  },
  {
    id: 'optimizare-sistem',
    title: 'Optimizare Sistem',
    description: 'Debloat Windows, setări pentru performanță maximă în jocuri și aplicații.',
    icon: RefreshCw,
    price: 'de la 100 RON',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10'
  },
  {
    id: 'reparatii-diverse',
    title: 'Reparații Diverse',
    description: 'Înlocuire mufă HDMI, recondiționare balamale laptop, reparație stick drift.',
    icon: Shield,
    price: 'Contactează-ne',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  }
];

export default function Services() {
  return (
    <section id="servicii" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Serviciile Noastre
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Cele mai populare servicii
          </h3>
          <p className="text-gray-400 text-lg">
            Oferim o gamă largă de servicii profesionale pentru a te asigura că echipamentul tău funcționează la performanțe maxime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 h-full hover:border-emerald-500/30 transition-all group flex flex-col">
                <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                
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
                    href={service.id === 'asamblare-pc' ? '/servicii/hardware/asamblare-pc' : `#contact`}
                    className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors"
                  >
                    Detalii &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
