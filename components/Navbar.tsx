import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`} role="navigation" aria-label="Menu principal">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} role="button" aria-label="Retour à l'accueil">
          <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
            M
          </div>
          <span className="font-serif text-2xl font-bold text-[#4A3728]">Morocco Paradise</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 items-center">
          {['Accueil', 'Circuits', 'Destinations', 'À Propos', 'Témoignages', 'Contact'].map((item) => {
            // Map French names to IDs
            const idMap: Record<string, string> = {
              'Accueil': 'home',
              'Circuits': 'tours',
              'Destinations': 'destinations',
              'À Propos': 'about',
              'Témoignages': 'testimonials',
              'Contact': 'contact'
            };
            return (
              <li key={item}>
                <a 
                  href={`#${idMap[item]}`} 
                  onClick={(e) => scrollToSection(e, idMap[item])}
                  className="text-[#4A3728] hover:text-[#C5A059] font-medium transition-colors"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Language Switcher & Mobile Toggle */}
        <div className="flex items-center">
          <div className="hidden lg:flex items-center ml-8 relative group cursor-pointer">
            <button aria-label="Changer de langue" className="flex items-center text-[#4A3728] hover:text-[#C5A059] transition-colors bg-transparent border-none">
              <Globe className="w-5 h-5 mr-1" />
              <span className="mr-1">FR</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
              <div className="px-4 py-2 hover:bg-[#F3E9D9] cursor-pointer" role="button" tabIndex={0}>English</div>
              <div className="px-4 py-2 hover:bg-[#F3E9D9] cursor-pointer" role="button" tabIndex={0}>العربية</div>
            </div>
          </div>

          <button 
            className="lg:hidden ml-4 text-[#4A3728]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-8 flex flex-col space-y-4 border-t border-gray-100">
          {['Accueil', 'Circuits', 'Destinations', 'À Propos', 'Témoignages', 'Contact'].map((item) => {
             const idMap: Record<string, string> = {
              'Accueil': 'home',
              'Circuits': 'tours',
              'Destinations': 'destinations',
              'À Propos': 'about',
              'Témoignages': 'testimonials',
              'Contact': 'contact'
            };
            return (
              <a 
                key={item}
                href={`#${idMap[item]}`} 
                onClick={(e) => scrollToSection(e, idMap[item])}
                className="text-[#4A3728] hover:text-[#C5A059] font-medium text-lg border-b border-gray-100 pb-2"
              >
                {item}
              </a>
            );
          })}
           <div className="flex items-center pt-2 text-[#4A3728]">
              <Globe className="w-5 h-5 mr-2" />
              <span>FR / EN / AR</span>
            </div>
        </div>
      )}
    </nav>
  );
};