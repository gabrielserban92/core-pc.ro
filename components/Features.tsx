'use client';

import { motion } from 'motion/react';
import { Truck, Clock, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    title: 'Livrare gratuită',
    description: 'Pentru comenzi și servicii ce depășesc o anumită sumă, transportul este din partea noastră.',
    icon: Truck,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Livrare rapidă',
    description: 'Ne mișcăm repede. Majoritatea reparațiilor și asamblărilor sunt gata în 24-48 de ore.',
    icon: Clock,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    title: 'Asistență și suport',
    description: 'Suntem aici să te ajutăm cu sfaturi și recomandări pentru a alege cele mai bune componente.',
    icon: HeadphonesIcon,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
