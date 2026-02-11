import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const destinations = [
  {
    title: "Marrakech",
    desc: "La ville rouge vibrante avec ses souks animés, ses palais magnifiques et sa place Jemaa el-Fna.",
    image: "https://images.unsplash.com/photo-1590080875483-1c8d1a3340a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fès",
    desc: "La capitale culturelle et spirituelle avec la plus grande médina du monde et ses universités anciennes.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Chefchaouen",
    desc: "L'enchantante ville bleue nichée dans les montagnes du Rif avec ses rues pittoresques.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Sahara",
    desc: "Dunes dorées immenses, treks à dos de chameau et nuits magiques sous les étoiles.",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-[#F3E9D9]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-serif font-bold mb-4 text-[#4A3728] relative inline-block">
            Destinations Populaires
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-[#C5A059]"></span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-6">
            Des médinas animées aux oasis tranquilles, découvrez les paysages diversifiés du Maroc.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="h-[200px] overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  loading="lazy"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-[#4A3728] mb-3">{dest.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{dest.desc}</p>
                <a href="#" className="inline-flex items-center text-[#C5A059] font-bold hover:text-[#B08D55] transition-colors">
                  <span>Explorer</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};