import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C5A059] font-bold tracking-wider uppercase text-sm mb-2 block">Contactez-nous</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#4A3728] leading-tight">
              Prêt pour l'Aventure de Votre Vie?
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Nos experts en voyage sont à votre disposition pour créer votre itinéraire sur mesure au Maroc. Remplissez le formulaire ou contactez-nous directement.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#F3E9D9] rounded-full flex items-center justify-center text-[#4A3728] mr-5 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-[#4A3728] mb-1">Téléphone</h4>
                  <p className="text-gray-600">+212 5 24 44 55 66</p>
                  <p className="text-sm text-gray-500">Lun-Sam, 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#F3E9D9] rounded-full flex items-center justify-center text-[#4A3728] mr-5 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-[#4A3728] mb-1">Email</h4>
                  <p className="text-gray-600">contact@moroccoparadise.com</p>
                  <p className="text-sm text-gray-500">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#F3E9D9] rounded-full flex items-center justify-center text-[#4A3728] mr-5 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-[#4A3728] mb-1">Agence Marrakech</h4>
                  <p className="text-gray-600">123 Avenue Mohammed V, Guéliz<br/>40000 Marrakech, Maroc</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#FDFBF7] p-8 md:p-10 rounded-2xl shadow-xl border border-[#F3E9D9]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#4A3728] mb-2 uppercase tracking-wide">Nom Complet</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all" placeholder="Votre nom" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#4A3728] mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all" placeholder="votre@email.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#4A3728] mb-2 uppercase tracking-wide">Téléphone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all" placeholder="+33 6..." />
                </div>
                <div>
                  <label htmlFor="region" className="block text-xs font-bold text-[#4A3728] mb-2 uppercase tracking-wide">Région d'intérêt</label>
                  <select id="region" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-gray-600">
                    <option value="">Sélectionnez une région...</option>
                    <option value="tanger">Tanger – Tétouan – Al Hoceima</option>
                    <option value="oriental">L'Oriental (Oujda/Saïdia)</option>
                    <option value="fes">Fès – Meknès</option>
                    <option value="rabat">Rabat – Salé – Kénitra</option>
                    <option value="beni">Béni Mellal – Khénifra</option>
                    <option value="casa">Casablanca – Settat</option>
                    <option value="marrakech">Marrakech – Safi</option>
                    <option value="draa">Drâa – Tafilalet (Désert)</option>
                    <option value="other">Circuit Combiné / Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#4A3728] mb-2 uppercase tracking-wide">Détails de votre projet</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all" placeholder="Nombre de personnes, dates souhaitées, envies particulières..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#4A3728] hover:bg-[#3A2B20] text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center space-x-2">
                <span>Envoyer ma demande</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};