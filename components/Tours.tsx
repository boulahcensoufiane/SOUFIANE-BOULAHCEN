import React from 'react';
import { MapPin, Clock, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface RegionData {
  id: number;
  regionName: string;
  mainCities: string[];
  description: string;
  tourTypes: string;
  duration: string;
  highlights: string[];
  image: string;
}

const regionsData: RegionData[] = [
  {
    id: 1,
    regionName: "Tanger – Tétouan – Al Hoceima",
    mainCities: ["Tanger", "Chefchaouen", "Tétouan", "Al Hoceima"],
    description: "La porte de l'Afrique, où la Méditerranée rencontre l'Atlantique. Des ruelles bleues de Chefchaouen à l'élégance cosmopolite de Tanger.",
    tourTypes: "Culturel & Balnéaire",
    duration: "5 - 7 Jours",
    highlights: ["Cap Spartel", "Grottes d'Hercule", "Médina Bleue", "Plages de la Méditerranée"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    regionName: "L'Oriental",
    mainCities: ["Oujda", "Saïdia", "Nador", "Figuig"],
    description: "Une région mystérieuse aux trésors cachés, des oasis millénaires de Figuig aux plages dorées de Saïdia.",
    tourTypes: "Détente & Découverte",
    duration: "4 - 6 Jours",
    highlights: ["Plage de Saïdia", "Oasis de Figuig", "Monts des Béni-Snassen", "Marché d'Oujda"],
    image: "https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    regionName: "Fès – Meknès",
    mainCities: ["Fès", "Meknès", "Ifrane", "Moulay Idriss"],
    description: "Le cœur spirituel et historique du Royaume. Voyagez dans le temps à travers les plus grandes médinas médiévales et les vestiges romains.",
    tourTypes: "Histoire & Patrimoine",
    duration: "6 - 8 Jours",
    highlights: ["Médina de Fès (UNESCO)", "Volubilis", "Bab Mansour", "Forêts de Cèdres"],
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    regionName: "Rabat – Salé – Kénitra",
    mainCities: ["Rabat", "Salé", "Kénitra"],
    description: "La capitale moderne et son patrimoine classé. Une élégance rare entre remparts historiques et brise océanique.",
    tourTypes: "Culturel & Urbain",
    duration: "3 - 5 Jours",
    highlights: ["Tour Hassan", "Kasbah des Oudayas", "Nécropole de Chellah", "Musée Mohammed VI"],
    image: "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    regionName: "Béni Mellal – Khénifra",
    mainCities: ["Béni Mellal", "Khénifra", "Azilal"],
    description: "Le château d'eau du Maroc. Des paysages verdoyants, des cascades majestueuses et des lacs d'altitude au cœur de l'Atlas.",
    tourTypes: "Nature & Aventure",
    duration: "4 - 6 Jours",
    highlights: ["Cascades d'Ouzoud", "Lac Bin el Ouidane", "Géoparc M'Goun", "Sources Oum Rabia"],
    image: "https://images.unsplash.com/photo-1463168817392-f3f8510f0322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    regionName: "Casablanca – Settat",
    mainCities: ["Casablanca", "El Jadida", "Mohammedia"],
    description: "Le dynamisme économique mêlé à l'héritage Art Déco et aux cités portugaises fortifiées face à l'Atlantique.",
    tourTypes: "Affaires & Loisirs",
    duration: "3 - 5 Jours",
    highlights: ["Mosquée Hassan II", "Cité Portugaise (Mazagan)", "Quartier Habous", "Corniche"],
    image: "https://images.unsplash.com/photo-1563276639-650428d052d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    regionName: "Marrakech – Safi",
    mainCities: ["Marrakech", "Essaouira", "Safi"],
    description: "L'icône du tourisme marocain. L'effervescence de la Ville Ocre contraste avec la douceur artistique de l'ancienne Mogador.",
    tourTypes: "Luxe & Tradition",
    duration: "5 - 8 Jours",
    highlights: ["Place Jemaa el-Fna", "Jardin Majorelle", "Médina d'Essaouira", "Désert d'Agafay"],
    image: "https://images.unsplash.com/photo-1590080875483-1c8d1a3340a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    regionName: "Drâa – Tafilalet",
    mainCities: ["Ouarzazate", "Errachidia", "Zagora", "Tinghir"],
    description: "La magie du Grand Sud. Kasbahs en pisé, palmeraies infinies et les dunes majestueuses du Sahara sous un ciel étoilé.",
    tourTypes: "Désert & Évasion",
    duration: "5 - 9 Jours",
    highlights: ["Dunes de Merzouga", "Aït Ben Haddou", "Gorges du Todra", "Vallée du Drâa"],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const Tours: React.FC = () => {
  return (
    <section id="tours" className="py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-20 relative">
          <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Nos Destinations</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#4A3728]">
            Régions & Circuits
          </h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto mt-6 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Le Maroc est une terre de contrastes. Explorez nos circuits organisés par région pour découvrir la diversité géographique et culturelle du Royaume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
          {regionsData.map((region, index) => (
            <motion.div 
              key={region.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col h-full bg-white rounded-t-2xl border-b border-[#F3E9D9] hover:border-[#C5A059] transition-colors duration-500"
            >
              {/* Image Container */}
              <div className="h-[280px] overflow-hidden rounded-2xl relative shadow-lg">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                <img 
                  src={region.image} 
                  alt={region.regionName} 
                  loading="lazy"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute bottom-4 left-4 z-20">
                   <span className="bg-[#C5A059] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                     {region.tourTypes}
                   </span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 pb-4 px-2 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-[#4A3728] mb-3 group-hover:text-[#C5A059] transition-colors">
                  {region.regionName}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-[#C5A059] mr-1.5" />
                    <span>{region.duration}</span>
                  </div>
                   <div className="flex items-center">
                    <Compass className="w-4 h-4 text-[#C5A059] mr-1.5" />
                    <span>Exploration</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                  {region.description}
                </p>

                {/* Cities Tag */}
                <div className="mb-6 flex items-start">
                   <MapPin className="w-4 h-4 text-[#C5A059] mr-2 mt-1 flex-shrink-0" />
                   <span className="text-xs text-gray-500 font-medium uppercase tracking-wide leading-relaxed">
                     {region.mainCities.join(" • ")}
                   </span>
                </div>

                {/* Highlights */}
                <div className="bg-[#FDFBF7] p-4 rounded-lg mb-6 border border-[#F3E9D9]">
                  <p className="text-xs font-bold text-[#4A3728] uppercase tracking-wider mb-2 opacity-80">Points Forts</p>
                  <div className="flex flex-wrap gap-2">
                    {region.highlights.slice(0, 3).map((h, i) => (
                      <span key={i} className="text-xs bg-white text-gray-600 px-2 py-1 rounded border border-gray-100 shadow-sm">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href="#contact"
                  className="mt-auto w-full inline-flex items-center justify-center space-x-2 border border-[#4A3728] text-[#4A3728] py-4 rounded-lg font-semibold hover:bg-[#4A3728] hover:text-white transition-all duration-300 group-hover:shadow-md"
                >
                  <span>Voir les Détails</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};