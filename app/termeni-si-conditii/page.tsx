import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function TermeniSiConditii() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      <div className="pt-40 lg:pt-48 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Termeni și Condiții</h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Bine ați venit pe core-pc.ro. Utilizarea acestui site web și a serviciilor noastre este supusă următorilor Termeni și Condiții. Prin accesarea și utilizarea acestui site, sunteți de acord să respectați acești termeni.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Servicii oferite</h2>
          <p>
            core-pc.ro oferă servicii de mentenanță IT, asamblare PC, reparații laptop-uri și console, precum și servicii de web design. Detaliile și prețurile estimative sunt prezentate pe site, însă prețul final va fi comunicat în urma unei diagnosticări sau a unei discuții detaliate.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Programări și Diagnosticare</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Programările se pot face prin intermediul formularului de contact, telefonic sau prin email.</li>
            <li>Diagnosticarea echipamentelor poate implica anumite costuri, care vă vor fi comunicate în prealabil.</li>
            <li>Ne rezervăm dreptul de a refuza anumite reparații dacă echipamentul este prea vechi sau componentele nu mai sunt disponibile pe piață.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Prețuri și Plată</h2>
          <p>
            Toate prețurile afișate pe site au caracter informativ (preț de pornire). Costul final va fi stabilit de comun acord cu clientul înainte de începerea oricărei lucrări. Plata se va efectua conform metodelor agreate (cash, transfer bancar etc.) la finalizarea serviciilor.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Garanție</h2>
          <p>
            Oferim garanție pentru serviciile prestate (manoperă) conform legislației în vigoare. Garanția pentru componentele hardware noi este oferită de producătorul/distribuitorul acestora. Garanția se anulează în cazul intervențiilor neautorizate, șocurilor mecanice, electrice sau contactului cu lichide.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Limitarea răspunderii</h2>
          <p>
            Nu ne asumăm răspunderea pentru pierderea datelor de pe mediile de stocare (HDD, SSD, stick-uri USB) predate pentru reparații. Este responsabilitatea clientului să efectueze un backup al datelor importante înainte de a preda echipamentul.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Modificarea termenilor</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările vor intra în vigoare imediat după publicarea lor pe site. Vă recomandăm să verificați periodic această pagină.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contact</h2>
          <p>
            Pentru orice neclarități privind acești Termeni și Condiții, ne puteți contacta la <a href="mailto:contact@core-pc.ro" className="text-emerald-400 hover:underline">contact@core-pc.ro</a>.
          </p>
        </div>
      </div>
      <Footer />
      <FloatingActions />
    </main>
  );
}
