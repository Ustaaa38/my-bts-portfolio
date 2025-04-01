
import { useCallback } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FormationSection from '@/components/sections/FormationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import useFadeInObserver from '@/utils/useFadeInObserver';

const Index = () => {
  // Initialize the fade-in observer
  useFadeInObserver();

  // Function to open image in new tab
  const openImageInNewTab = useCallback((imagePath: string) => {
    window.open(imagePath, '_blank');
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection openImageInNewTab={openImageInNewTab} />
      <AboutSection />
      <FormationSection />
      <ExperienceSection openImageInNewTab={openImageInNewTab} />
      <ProjectsSection />
    </div>
  );
};

export default Index;
