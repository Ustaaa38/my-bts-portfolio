
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
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
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 section-fade">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Travaux Pratiques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
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
  );
};

export default ProjectsSection;
