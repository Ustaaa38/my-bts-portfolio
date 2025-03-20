
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Eye } from 'lucide-react';

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
      
      {/* Hero Section with Background Image */}
      <section 
        className="min-h-screen flex items-center justify-center pt-16 relative"
        style={{
          backgroundImage: 'url(https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/04/19/node_591655/14211810/public/2024/04/19/16141220.jpeg?itok=qoS8ndhh1713525041)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="text-center px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Portfolio BTS SIO SISR
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Étudiant passionné par l'administration des réseaux et la cybersécurité
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            <Eye className="mr-2 h-4 w-4" />
            Voir mon CV
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
            <p className="text-gray-600 leading-relaxed mt-4">
              Dans le cadre de ma poursuite d'études, je souhaite intégrer un apprentissage en alternance à l'EPSI en tant qu'Administrateur systèmes, réseaux et bases de données. Cette expérience me permettra de combiner théorie et pratique, tout en contribuant à des projets innovants dans un environnement en constante évolution. La cybersécurité, enjeu majeur pour les entreprises, sera également au cœur de mon développement professionnel. Je suis prêt à mettre mes compétences et ma motivation au service de l'entreprise.
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
              <h3 className="text-xl font-semibold mb-4">SISR (Systèmes Informatiques aux Organisations)</h3>
              <p className="text-gray-600">
                La spécialité SISR est orientée vers la gestion, l'administration et la sécurité des systèmes et réseaux informatiques au sein des entreprises. Ce cursus vous prépare à devenir un expert dans la gestion des infrastructures informatiques critiques. Vous apprendrez à configurer, déployer et maintenir des réseaux complexes, tout en garantissant leur sécurité contre les attaques et vulnérabilités.
              </p>
              <p className="text-gray-600 mt-4">
                Au cours de cette formation, vous serez amené à travailler sur des systèmes d'exploitation tels que Linux et Windows Server, ainsi que sur des équipements réseaux comme les routeurs et les switches. Vous développerez des compétences en gestion des serveurs, en virtualisation des ressources et en sécurité des réseaux. De plus, la spécialité SISR inclut des cours sur l'administration des bases de données et la gestion des incidents, vous permettant de maîtriser les outils essentiels pour assurer une infrastructure fiable et sécurisée.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">SLAM (Solutions Logicielles et Applications Métiers)</h3>
              <p className="text-gray-600">
                La spécialité SLAM forme les étudiants aux métiers du développement logiciel, en mettant l'accent sur la conception, le développement et la gestion des applications métiers spécifiques aux besoins des entreprises. Ce parcours vous amène à comprendre les enjeux des logiciels utilisés au sein des organisations et à créer des solutions efficaces et adaptées à chaque contexte.
              </p>
              <p className="text-gray-600 mt-4">
                Vous apprendrez à utiliser des langages de programmation modernes comme Java, Python, PHP, et à développer des applications web, mobiles ou des logiciels de gestion. Vous serez initié à la création de bases de données, à l'intégration des applications, ainsi qu'aux processus de tests et de déploiement des logiciels. Un autre aspect important de la formation SLAM est la gestion de projets de développement, ce qui vous permet d'acquérir une méthodologie agile pour travailler efficacement en équipe et gérer des projets complexes.
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
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary flex-shrink-0">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvyf1-klWit_tj2AxwUIl7OoLmENBwKzESg&s" 
                    alt="Kapsaloon logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Stage - Première année (Kapsaloon)</h3>
                  <p className="text-gray-500">5 semaines - Mars 2024</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Kapsaloon Kebab Charleville-Mézières. J'ai réalisé un site web en WordPress et effectué la gestion des réseaux et configuration des systèmes internes de l'entreprise.
              </p>
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                Voir l'attestation de stage
              </Button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary flex-shrink-0">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahb94vMCOgcGzpqG-HFNNrT5-Zqp1BifEXQ&s" 
                    alt="Préfecture logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Stage - Deuxième année (Préfecture)</h3>
                  <p className="text-gray-500">5 semaines - Février 2025</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Préfecture des Ardennes. Mon stage de 5 semaines à la préfecture m'a permis de participer à l'audit des systèmes informatiques et d'acquérir des compétences en gestion de réseau et cybersécurité.
              </p>
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                Voir l'attestation de stage
              </Button>
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
              { title: "Configuration et installation de deux cœurs de réseau", date: "19/02/2025 - 21/02/2025" },
              { title: "Installation serveur FOG", date: "02/12/2024 - 07/02/2025" },
              { title: "TP RGPD", date: "09/12/2024 - 13/12/2024" },
              { title: "Serveur de messagerie mail", date: "09/12/2024 - 13/12/2024" },
              { title: "Audit cybersécurité", date: "11/10/2024 - 09/12/2024" },
              { title: "TP DNS", date: "18/11/2024 - 09/12/2024" },
              { title: "Service de haute disponibilité", date: "04/11/2024 - 15/11/2024" },
              { title: "Multiples TP Docker", date: "(dates multiples)" },
              { title: "TP NAS", date: "14/10/2024 - 18/10/2024" }
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
