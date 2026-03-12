'use client';

import { motion } from 'motion/react';
import { Truck, Clock, HeadphonesIcon, UserCheck, ShieldCheck, Layers, Wallet, Settings, MapPin } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Livrare Gratuită\n(Tur-Retur)',
    description: 'Pentru comenzi și servicii ce depășesc 449,99 lei, transportul este asigurat personal de noi, conform tabelului.',
    icon: Truck,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    linkText: 'zone incluse ->',
    linkHref: '/livrare-ridicare'
  },
  {
    title: 'Transport personalizat',
    description: 'Nu te încadrezi la transport gratuit? Beneficiezi de transport asigurat de noi conform tabelului, de la 50 lei.',
    icon: MapPin,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    linkText: 'Grilă costuri transport ->',
    linkHref: '/livrare-ridicare'
  },
  {
    title: 'Livrare rapidă',
    description: 'Ne mișcăm repede. Majoritatea reparațiilor și asamblărilor sunt gata în 24-48 de ore.',
    icon: Clock,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    title: 'Personal calificat',
    description: 'Operațiunile de mentenanță sunt executate de personal calificat și cu experiență.',
    icon: UserCheck,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  },
  {
    title: 'Servicii complete',
    description: 'Acoperim întreaga gamă de servicii pentru mentenanța și asamblarea calculatoarelor.',
    icon: Layers,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    title: 'Calitate garantată',
    description: 'Asigurăm garanție pentru manopera executată și pentru piesele înlocuite.',
    icon: ShieldCheck,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10'
  },
  {
    title: 'Asistență și suport',
    description: 'Suntem aici să te ajutăm cu sfaturi și recomandări pentru a alege cele mai bune componente.',
    icon: HeadphonesIcon,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10'
  },
  {
    title: 'Funcționalitate',
    description: 'Mentenanța profesională menține funcționalitatea optimă a oricărui computer.',
    icon: Settings,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  }
];

export default function Features() {
  return (
    <section id="despre" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Descoperă ce ne face să ieșim în evidență
          </h2>
          <p className="text-gray-400 text-lg">
            Ne pasă de clienții noștri și de echipamentele lor. Oferim nu doar servicii, ci o experiență completă.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900 transition-colors flex flex-col"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 whitespace-pre-line">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">{feature.description}</p>
              {feature.linkText && feature.linkHref && (
                <div className="mt-4 text-right">
                  <Link href={feature.linkHref} className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
                    {feature.linkText}
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
