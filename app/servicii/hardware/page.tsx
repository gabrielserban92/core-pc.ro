'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const hardwareServices = [
  {
    title: 'Asamblare PC',
    price: '499,99 lei',
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/a08mj84j7rv2-RO/image',
    href: '/servicii/hardware/asamblare-pc'
  },
  {
    title: 'Mentenanță PC',
    price: 'De la 399,99 lei',
    image: 'https://picsum.photos/seed/mentenantapc/800/800',
    href: '#contact'
  },
  {
    title: 'Mentenanță laptop',
    price: 'De la 249,99 lei',
    image: 'https://picsum.photos/seed/mentenantalaptop/800/800',
    href: '#contact'
  },
  {
    title: 'Mentenanță console',
    price: 'De la 199,99 lei',
    image: 'https://picsum.photos/seed/mentenantaconsole/800/800',
    href: '#contact'
  },
  {
    title: 'Inlocuire mufa HDMI',
    price: 'De la 299,99 lei',
    image: 'https://picsum.photos/seed/hdmi/800/800',
    href: '#contact'
  },
  {
    title: 'Reconditionare balamale',
    price: 'De la 199,99 lei',
    image: 'https://picsum.photos/seed/balamale/800/800',
    href: '#contact'
  },
  {
    title: 'Reparatie stick drift',
    price: 'De la 149,99 lei',
    image: 'https://picsum.photos/seed/stickdrift/800/800',
    href: '#contact'
  },
  {
    title: 'Înlocuire thumb grip-uri',
    price: '59,99 lei',
    image: 'https://picsum.photos/seed/thumbgrips/800/800',
    href: '#contact'
  },
  {
    title: 'Înlocuire componente',
    price: 'De la 49,99 lei',
    image: 'https://picsum.photos/seed/componente/800/800',
    href: '#contact'
  },
  {
    title: 'Schimb pastă termoconductoare',
    price: 'De la 99,99 lei',
    image: 'https://picsum.photos/seed/pasta/800/800',
    href: '#contact'
  }
];

export default function HardwarePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Servicii Hardware</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Alege serviciul de care ai nevoie pentru echipamentul tău. De la asamblări premium la reparații complexe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {hardwareServices.map((service, index) => (
            <Link href={service.href} key={index} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/20 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.price}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
