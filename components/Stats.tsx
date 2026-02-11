import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: "15+", text: "Années d'Expérience" },
  { number: "5,000+", text: "Voyageurs Heureux" },
  { number: "50+", text: "Circuits Uniques" },
  { number: "4.9/5", text: "Note Clients" },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-[#F3E9D9] py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-2 font-serif">{stat.number}</div>
              <div className="text-[#4A3728] font-medium">{stat.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};