
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.section-fade').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Portfolio BTS SIO SISR
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Étudiant passionné par l'administration des réseaux et la cybersécurité
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" />
            Télécharger mon CV
          </Button>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="py-20 bg-white section-fade">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">À propos de moi</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Je suis actuellement étudiant en BTS SIO, option SISR, au lycée Monge de Charleville-Mézières, après un bac STMG avec spécialité RH. Passionné par l'administration des réseaux, la cybersécurité et la gestion des systèmes, ce portfolio présente mes travaux pratiques réalisés pendant ma formation.
            </p>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section id="formation" className="py-20 bg-gray-50 section-fade">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Formation BTS SIO</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">SISR</h3>
              <p className="text-gray-600">
                Spécialisation en administration et sécurité des systèmes et réseaux. Configuration des serveurs, gestion des infrastructures et sécurisation des réseaux.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">SLAM</h3>
              <p className="text-gray-600">
                Développement d'applications et solutions logicielles pour les entreprises. Maîtrise des langages de programmation et des méthodologies de projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences */}
      <section id="experience" className="py-20 bg-white section-fade">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Expériences Professionnelles</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Stage - Première année (Kapsaloon)</h3>
              <p className="text-gray-500 mb-4">5 semaines - Mars 2024</p>
              <p className="text-gray-600">
                Gestion des réseaux et configuration des systèmes internes de l'entreprise.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Stage - Deuxième année (Préfecture)</h3>
              <p className="text-gray-500 mb-4">5 semaines - Février 2025</p>
              <p className="text-gray-600">
                Audit des systèmes informatiques et gestion de réseau et cybersécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travaux Pratiques */}
      <section id="projects" className="py-20 bg-gray-50 section-fade">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Travaux Pratiques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Remplacement parc informatique", date: "01/01/2025 - 28/02/2025" },
              { title: "Configuration réseau", date: "19/02/2025 - 21/02/2025" },
              { title: "Installation serveur FOG", date: "02/12/2024 - 07/02/2025" },
              { title: "TP RGPD", date: "09/12/2024 - 13/12/2024" },
              { title: "Serveur de messagerie", date: "09/12/2024 - 13/12/2024" },
              { title: "Audit cybersécurité", date: "11/10/2024 - 09/12/2024" }
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{project.date}</p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
