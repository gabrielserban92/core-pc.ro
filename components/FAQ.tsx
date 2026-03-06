'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Cât durează o asamblare PC?',
    answer: 'În mod normal, o asamblare PC durează între 2 și 4 ore, în funcție de complexitatea build-ului și de cable management. Dacă aduci componentele dimineața, de obicei îl poți ridica în aceeași zi.'
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
    answer: 'Folosim doar paste termoconductoare premium, precum Thermal Grizzly Kryonaut, Arctic MX-6 sau Noctua NT-H2, în funcție de necesitățile sistemului tău.'
  },
  {
    question: 'Cât costă o diagnosticare?',
    answer: 'Diagnosticarea este gratuită dacă alegi să repari dispozitivul la noi. În cazul în care renunți la reparație după diagnosticare, taxa este de 50 RON.'
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
