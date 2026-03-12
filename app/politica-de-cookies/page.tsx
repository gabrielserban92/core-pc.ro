import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function PoliticaDeCookies() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      <div className="pt-40 lg:pt-48 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Politica de Cookies</h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Această Politică de Cookies explică ce sunt cookie-urile, cum le folosim pe site-ul core-pc.ro și cum puteți gestiona preferințele dumneavoastră referitoare la acestea.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere text mici care sunt stocate pe dispozitivul dumneavoastră (computer, tabletă, smartphone) atunci când vizitați un site web. Ele sunt utilizate pe scară largă pentru a face site-urile să funcționeze sau să funcționeze mai eficient, precum și pentru a oferi informații proprietarilor site-ului.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Cum folosim cookie-urile?</h2>
          <p>Folosim cookie-uri pentru următoarele scopuri:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Strict necesare:</strong> Aceste cookie-uri sunt esențiale pentru a vă permite să navigați pe site și să utilizați funcțiile acestuia.</li>
            <li><strong>Performanță și Analiză:</strong> Aceste cookie-uri colectează informații despre modul în care vizitatorii utilizează site-ul (de exemplu, paginile cele mai vizitate). Aceste date ne ajută să îmbunătățim modul în care funcționează site-ul.</li>
            <li><strong>Funcționalitate:</strong> Aceste cookie-uri permit site-ului să rețină alegerile pe care le faceți (cum ar fi limba preferată) și să ofere caracteristici îmbunătățite și mai personale.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Cookie-uri de la terți</h2>
          <p>
            În anumite cazuri, folosim cookie-uri furnizate de terți de încredere (cum ar fi Google Analytics) pentru a ne ajuta să înțelegem cum utilizați site-ul și cum putem îmbunătăți experiența dumneavoastră.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Cum puteți controla cookie-urile?</h2>
          <p>
            Aveți dreptul de a decide dacă acceptați sau respingeți cookie-urile. Puteți seta sau modifica controalele browserului dumneavoastră web pentru a accepta sau refuza cookie-urile. Dacă alegeți să respingeți cookie-urile, puteți utiliza în continuare site-ul nostru, deși accesul la anumite funcționalități și zone poate fi restricționat.
          </p>
          <p>
            Pentru mai multe informații despre cum să gestionați cookie-urile din browserul dumneavoastră, vă rugăm să consultați secțiunea de ajutor a browserului pe care îl utilizați (Chrome, Firefox, Safari, Edge, etc.).
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Actualizări ale politicii</h2>
          <p>
            Putem actualiza această Politică de Cookies din când în când pentru a reflecta, de exemplu, modificările aduse cookie-urilor pe care le folosim sau din alte motive operaționale, legale sau de reglementare. Vă rugăm să revizitați această pagină periodic.
          </p>
        </div>
      </div>
      <Footer />
      <FloatingActions />
    </main>
  );
}
