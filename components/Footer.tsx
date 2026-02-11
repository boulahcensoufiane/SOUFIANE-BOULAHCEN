import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2118] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-[#C5A059] rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">M</div>
              <span className="font-serif text-xl font-bold">Morocco Paradise</span>
            </div>
            <p className="text-[#F3E9D9] text-sm leading-relaxed mb-6 opacity-80">
              Création de voyages inoubliables au cœur du Maroc depuis 2008. Laissez-nous vous guider à travers les merveilles de notre beau pays.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 pb-2 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#C5A059]">
              Liens Rapides
            </h3>
            <ul className="space-y-3 text-[#F3E9D9] text-sm opacity-80">
              <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Accueil</a></li>
              <li><a href="#tours" className="hover:text-[#C5A059] transition-colors">Circuits</a></li>
              <li><a href="#destinations" className="hover:text-[#C5A059] transition-colors">Destinations</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">À Propos</a></li>
              <li><a href="#testimonials" className="hover:text-[#C5A059] transition-colors">Témoignages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-lg font-serif font-bold mb-6 pb-2 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#C5A059]">
              Coordonnées
            </h3>
            <div className="space-y-4 text-[#F3E9D9] text-sm opacity-80">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 text-[#C5A059] mr-3 mt-1 shrink-0" />
                123 Avenue Mohammed V, Marrakech, Maroc
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 text-[#C5A059] mr-3 shrink-0" />
                +212 5 24 44 55 66
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 text-[#C5A059] mr-3 shrink-0" />
                info@moroccoparadise.com
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
             <h3 className="text-lg font-serif font-bold mb-6 pb-2 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#C5A059]">
              Newsletter
            </h3>
            <p className="text-[#F3E9D9] text-sm opacity-80 mb-4">
              Abonnez-vous pour recevoir des conseils de voyage et des offres spéciales.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Votre email"
                aria-label="Adresse email pour la newsletter"
                className="bg-white px-4 py-2 text-gray-800 text-sm rounded-l focus:outline-none w-full"
              />
              <button aria-label="S'abonner" className="bg-[#C5A059] hover:bg-[#B08D55] text-white px-4 py-2 rounded-r transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-[#F3E9D9] text-sm opacity-60">
          <p>&copy; 2023 Morocco Paradise Tours. Tous droits réservés. | <a href="#" className="hover:text-white">Politique de Confidentialité</a></p>
        </div>
      </div>
    </footer>
  );
};