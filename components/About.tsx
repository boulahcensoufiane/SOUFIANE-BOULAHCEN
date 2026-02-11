import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-8 text-[#4A3728] relative inline-block">
              Pourquoi Choisir Morocco Paradise Tours?
              <span className="absolute bottom-[-10px] left-0 w-[60px] h-[3px] bg-[#C5A059]"></span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Avec plus de 15 ans d'expérience, nous nous spécialisons dans la création d'expériences de voyage marocaines authentiques qui vont au-delà des sentiers touristiques typiques.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: "Expertise Locale", desc: "Nos guides sont des Marocains natifs avec une connaissance approfondie de la culture locale." },
                { title: "Tourisme Durable", desc: "Nous priorisons les pratiques écologiques et soutenons les communautés locales." },
                { title: "Itinéraires Personnalisables", desc: "Personnalisez votre voyage pour correspondre à vos intérêts, votre rythme et votre budget." }
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059] flex items-center justify-center text-white mt-1 mr-4 flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4A3728] mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
              alt="Guide dans le désert" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};