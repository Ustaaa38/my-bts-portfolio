
import { Button } from '@/components/ui/button';
import { Eye, BookOpenCheck } from 'lucide-react';

interface HeroSectionProps {
  openImageInNewTab: (imagePath: string) => void;
}

const HeroSection = ({ openImageInNewTab }: HeroSectionProps) => {
  return (
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
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => openImageInNewTab('public/lovable-uploads/83bd7278-027f-4fc9-8734-a8399742ace8.png')}
          >
            <Eye className="mr-2 h-4 w-4" />
            Voir mon CV
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => openImageInNewTab('public/lovable-uploads/46b75f71-9698-4418-a0b0-6b8a8ba6e88b.png')}
          >
            <BookOpenCheck className="mr-2 h-4 w-4" />
            Voir mon portefeuille de compétences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
