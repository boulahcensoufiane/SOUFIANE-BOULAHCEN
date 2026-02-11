import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: "L'expérience du désert du Sahara a dépassé mes attentes. Se réveiller au lever du soleil sur les dunes était magique. Notre guide était incroyablement compétent.",
    author: "Michael Thompson",
    detail: "Royaume-Uni, oct. 2023",
    initial: "M"
  },
  {
    text: "Notre famille a passé le plus beau moment au Maroc grâce à Morocco Paradise Tours. Ils ont pris soin de chaque détail, et nos enfants parlent encore de la balade à dos de chameau.",
    author: "Laura Chen",
    detail: "Canada, déc. 2023",
    initial: "L"
  },
  {
    text: "En tant que voyageuse solo, je me suis sentie complètement en sécurité et bien prise en charge. Les guides étaient respectueux, les hébergements magnifiques.",
    author: "Anna Schmidt",
    detail: "Allemagne, fév. 2024",
    initial: "A"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#F3E9D9]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-serif font-bold mb-4 text-[#4A3728] relative inline-block">
            Ce Que Disent Nos Voyageurs
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-[#C5A059]"></span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-6">
            Ne nous croyez pas sur parole - écoutez nos clients satisfaits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg relative pt-12"
            >
              <div className="absolute top-0 left-8 text-6xl text-[#F3E9D9] font-serif transform -translate-y-4">"</div>
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#C5A059] fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <div className="font-bold text-[#4A3728]">{review.author}</div>
                  <div className="text-xs text-gray-500">{review.detail}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};