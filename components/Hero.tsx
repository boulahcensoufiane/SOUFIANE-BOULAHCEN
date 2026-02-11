import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-[#FDFBF7] pt-20 overflow-hidden"
    >
      {/* Élément décoratif d'arrière-plan */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F3E9D9] opacity-30 skew-x-12 transform origin-top-right z-0"></div>

      <div className="max-w-[1200px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Colonne Texte */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="text-[#C5A059] font-bold tracking-wider uppercase text-sm mb-4 block">Bienvenue au Paradis</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight text-[#4A3728]">
            Découvrez la <br /> Magie du Maroc
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Vivez une expérience authentique à travers des paysages à couper le souffle et des aventures inoubliables avec nos guides experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#tours" 
              className="bg-[#C5A059] hover:bg-[#B08D55] text-white px-8 py-4 rounded font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-center"
            >
              Réserver Maintenant
            </a>
            <a 
              href="#about" 
              className="bg-transparent border-2 border-[#4A3728] text-[#4A3728] hover:bg-[#4A3728] hover:text-white px-8 py-4 rounded font-semibold transition-all duration-300 text-center"
            >
              En Savoir Plus
            </a>
          </div>
        </motion.div>

        {/* Colonne Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Image Principale (Forme Arche - Désert) */}
          <div className="absolute top-0 right-0 w-4/5 h-full rounded-t-full overflow-hidden shadow-2xl border-4 border-white z-10">
            <img 
              src="https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Caravane de chameaux dans le désert" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Image Secondaire (Nouvelle Image - Fontaine Mosaïque) */}
          <div className="absolute bottom-16 left-0 w-72 h-56 rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20 hidden lg:block transform -rotate-3 hover:rotate-0 transition-transform duration-500">
             <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Fontaine en mosaïque zellige marocaine" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Élément décoratif rond */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#C5A059] opacity-20 z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};