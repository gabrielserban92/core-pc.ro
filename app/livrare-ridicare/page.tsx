'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { Truck, MapPin, CheckCircle2, Info, Package, User, HelpCircle } from 'lucide-react';

export default function LivrareRidicare() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <div className="pt-40 lg:pt-48 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Livrare & Ridicare</h1>
        
        <div className="space-y-8">
          {/* Politica de Livrare */}
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Info className="w-6 h-6 text-emerald-400" />
              Politica de Livrare (Tur-Retur)
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Beneficiați de transport asigurat de echipa noastră pentru a vă asigura că produsele sau serviciile ajung în siguranță la destinație.
            </p>
          </div>

          {/* Livrare GRATUITĂ */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Truck className="w-6 h-6" />
              Livrare GRATUITĂ
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Pentru comenzi și servicii care depășesc valoarea de <strong className="text-white">449,99 lei</strong>, transportul este oferit gratuit în următoarele localități din ilfov:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Izvorani', 'Ciolpani', 'Luparia', 'Piscu', 'Balta Doamnei', 'Siliștea Snagovului'].map((loc) => (
                <li key={loc} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          {/* Transport Personalizat */}
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-emerald-400" />
              Transport Personalizat
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Dacă valoarea comenzii este sub pragul de gratuitate, tarifele sunt structurate pe zone din judetul ilfov, după cum urmează:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 font-semibold text-emerald-400 w-1/3">Cost Transport</th>
                    <th className="py-4 px-4 font-semibold text-emerald-400">Localități Deservite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">50 lei</td>
                    <td className="py-4 px-4 text-gray-300">Tâncăbești, Periș, Gruiu, Ciofliceni, Ghermănești, Potigrafu</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">70 lei</td>
                    <td className="py-4 px-4 text-gray-300">Dumbrăveni, Pucheni, Poienarii Apostoli</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">100 lei</td>
                    <td className="py-4 px-4 text-gray-300">Moara Vlăsiei, Balotești, Corbeanca, Buftea, Otopeni, Tunari</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Alte Opțiuni de Livrare */}
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Package className="w-6 h-6 text-emerald-400" />
              Alte Opțiuni de Livrare
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Dacă nu doriți să apelați la serviciul nostru de transport personalizat, aveți la dispoziție următoarele alternative:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Prin Curier Rapid</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Puteți trimite echipamentul prin orice firmă de curierat preferați. Vă rugăm să vă asigurați că este ambalat corespunzător (folie cu bule, cutie rigidă).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Predare Personală</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Vă așteptăm cu drag să aduceți echipamentul direct la locație.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aveți întrebări? */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 md:p-8 text-center">
            <HelpCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-white">Aveți întrebări?</h2>
            <p className="text-gray-300 leading-relaxed text-lg max-w-2xl mx-auto">
              Pentru detalii suplimentare despre procesul de recepție sau pentru a ne comunica expedierea unui colet, vă rugăm să ne contactați telefonic/whatsapp sau prin formularul de pe site. Suntem aici să vă ajutăm!
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
