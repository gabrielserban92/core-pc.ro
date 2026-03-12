import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function PoliticaDeConfidentialitate() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      <div className="pt-40 lg:pt-48 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Politica de Confidențialitate</h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Această Politică de Confidențialitate descrie modul în care core-pc.ro (&quot;noi&quot;, &quot;nostru&quot; sau &quot;site-ul&quot;) colectează, utilizează și protejează informațiile dumneavoastră personale atunci când utilizați serviciile noastre.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Informațiile pe care le colectăm</h2>
          <p>Putem colecta următoarele tipuri de informații:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Informații de contact:</strong> Nume, prenume, adresă de email, număr de telefon.</li>
            <li><strong>Informații tehnice:</strong> Adresa IP, tipul de browser, sistemul de operare, paginile vizitate.</li>
            <li><strong>Informații despre dispozitiv:</strong> Detalii despre hardware-ul sau software-ul pentru care solicitați asistență.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Cum utilizăm informațiile</h2>
          <p>Folosim informațiile colectate pentru:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A vă furniza serviciile solicitate (reparații, asamblare, consultanță).</li>
            <li>A comunica cu dumneavoastră (răspunsuri la mesaje, actualizări despre statusul reparației).</li>
            <li>A îmbunătăți site-ul și serviciile noastre.</li>
            <li>A respecta obligațiile legale.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Protejarea datelor</h2>
          <p>
            Ne angajăm să protejăm datele dumneavoastră personale. Implementăm măsuri de securitate tehnice și organizatorice adecvate pentru a preveni accesul neautorizat, pierderea sau alterarea datelor.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Partajarea informațiilor</h2>
          <p>
            Nu vindem, nu închiriem și nu transferăm datele dumneavoastră personale către terți în scopuri de marketing. Putem partaja date doar cu furnizori de servicii de încredere (ex. firme de curierat) strict pentru îndeplinirea serviciilor solicitate.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Drepturile dumneavoastră</h2>
          <p>Conform legislației aplicabile (GDPR), aveți următoarele drepturi:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dreptul de acces la datele personale.</li>
            <li>Dreptul la rectificarea datelor inexacte.</li>
            <li>Dreptul la ștergerea datelor (&quot;dreptul de a fi uitat&quot;).</li>
            <li>Dreptul la restricționarea prelucrării.</li>
            <li>Dreptul la portabilitatea datelor.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contact</h2>
          <p>
            Pentru orice întrebări sau solicitări legate de această politică de confidențialitate, ne puteți contacta la adresa de email: <a href="mailto:contact@core-pc.ro" className="text-emerald-400 hover:underline">contact@core-pc.ro</a>.
          </p>
        </div>
      </div>
      <Footer />
      <FloatingActions />
    </main>
  );
}
