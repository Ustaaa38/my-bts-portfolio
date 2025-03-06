
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "nav-blur" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-lg font-semibold mr-2">Aslan Gokhan</span>
            <span className="text-sm text-gray-500">Portfolio</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('formation')} className="text-gray-600 hover:text-primary transition-colors">
              Formation
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-primary transition-colors">
              Expériences
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-primary transition-colors">
              Travaux Pratiques
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
