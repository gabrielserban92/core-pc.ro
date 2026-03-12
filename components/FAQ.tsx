'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'Cât durează o asamblare PC?',
    answer: (
      <div className="space-y-4">
        <p>Asamblarea unui PC durează, în medie, între 6 și 8 ore, în funcție de complexitatea componentelor și de atenția acordată managementului cablurilor.</p>
        <p>Predare dimineața: Ridicare în aceeași zi.</p>
        <p>Predare după ora 12:00: Livrare a doua zi, până la ora 12:00.</p>
      </div>
    )
  },
  {
    question: 'Oferiți garanție pentru serviciile prestate?',
    answer: 'Da, oferim garanție pentru toate serviciile noastre. Pentru manoperă garanția este de 3 luni, iar pentru componentele noi achiziționate prin noi se aplică garanția producătorului.'
  },
  {
    question: 'Primiți colete prin curier?',
    answer: 'Da, acceptăm dispozitive trimise prin curier din toată țara. Te rugăm să ne contactezi înainte pentru a stabili detaliile și a primi instrucțiuni de ambalare sigură.'
  },
  {
    question: 'Ce pastă termoconductoare folosiți?',
    answer: 'Folosim doar paste termoconductoare premium, precum Arctic MX-6 sau Deepcool DM9, în funcție de necesitățile sistemului tău.'
  },
  {
    question: 'Cât costă o diagnosticare?',
    answer: 'Diagnosticarea este gratuită dacă alegi să repari dispozitivul la noi. În cazul în care renunți la reparație după diagnosticare, taxa este de 50 RON.'
  },
  {
    question: 'Beneficiez de livrare gratuită tur-retur?',
    answer: (
      <>
        Pentru a consulta lista localităților în care oferim serviciul de livrare gratuită tur-retur livrate personal de noi, te rugăm să consulți lista <Link href="/livrare-ridicare" className="text-emerald-400 hover:text-emerald-300 transition-colors">aici</Link>.
      </>
    )
  },
  {
    question: 'Cât costă serviciul de livrare tur-retur oferit personal?',
    answer: (
      <>
        Pentru a vedea cât costă transportul oferit de noi tur-retur pentru comenzile ce nu depășesc 499,99 lei și se află în nordul capitalei, te rugăm să consulți lista <Link href="/livrare-ridicare" className="text-emerald-400 hover:text-emerald-300 transition-colors">aici</Link>.
      </>
    )
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-zinc-900 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ai întrebări?
          </h2>
          <p className="text-gray-400 text-lg">
            Găsești răspunsurile la cele mai frecvente întrebări mai jos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
