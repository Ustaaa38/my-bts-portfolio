
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ExperienceSectionProps {
  openImageInNewTab: (imagePath: string) => void;
}

const ExperienceSection = ({ openImageInNewTab }: ExperienceSectionProps) => {
  return (
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
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => openImageInNewTab('public/lovable-uploads/997b835c-7ae4-4281-9a81-81015ae03075.png')}
            >
              <Download className="mr-2 h-4 w-4" />
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
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => openImageInNewTab('public/lovable-uploads/753c9f31-66c7-4ead-a7c3-ebc2af0a0a8c.png')}
            >
              <Download className="mr-2 h-4 w-4" />
              Voir l'attestation de stage
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
