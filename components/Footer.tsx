'use client';

import Link from 'next/link';
import { Cpu, Facebook, Instagram, Youtube, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Cpu className="w-8 h-8 text-emerald-500" />
              <span className="text-xl font-bold tracking-tight text-white">core-pc.ro</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Servicii profesionale de mentenanță PC, asamblare și reparații pentru laptop-uri și console.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Youtube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Informații utile</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Întrebări frecvente
                </Link>
              </li>
              <li>
                <Link href="/politica-de-confidentialitate" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Politica de confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/livrare-ridicare" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Livrare & retur
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Politica de Cookies
                </Link>
              </li>
              <li>
                <Link href="/termeni-si-conditii" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Termeni și condiții
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact / Parteneriate</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>contact@core-pc.ro</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Sediu social: Ciolpani, jud. Ilfov, Strada Școlii nr. 149n.</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">Fii primul care află de oferte</h3>
            <p className="text-gray-400 mb-4">
              Abonează-te la newsletter, este rapid și gratuit! Promitem să nu facem spam.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Adresa ta de email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                required
              />
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-4 py-3 transition-colors"
              >
                Abonează-te
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex items-center justify-center">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} core-pc.ro. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
