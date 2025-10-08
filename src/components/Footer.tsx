'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

// Icône TikTok personnalisée
const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.995-1.194-2.115-1.194-3.338h-2.956v13.017a3.89 3.89 0 0 1-7.78 0c0-2.148 1.742-3.89 3.89-3.89.36 0 .711.049 1.041.142V8.334a6.898 6.898 0 0 0-1.041-.08c-3.635 0-6.59 2.955-6.59 6.59s2.955 6.59 6.59 6.59 6.59-2.955 6.59-6.59V9.66c1.293.995 2.91 1.606 4.721 1.606v-2.956c-1.81 0-3.427-.611-4.721-1.606-.389-.3-.729-.649-1.02-1.041-.291-.392-.533-.824-.721-1.284-.188-.46-.282-.943-.282-1.447z"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/mh.scales?igsh=aW9qazB0ZXdxMW5l&utm_source=qr' },
    { name: 'TikTok', icon: TikTok, href: 'https://www.tiktok.com/@mh.scales?_t=ZN-90KIQD4qq3C&_r=1' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/company-mhadvisory/' },
  ];

  const footerLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Conditions générales de vente', href: '/conditions-generales-vente' },
    { name: 'Conditions d\'utilisation', href: '/conditions-utilisation' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { name: 'Cookies', href: '/cookies' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 rounded-t-3xl mx-2 md:mx-4 lg:mx-6 xl:mx-8">
      {/* Contenu principal du footer */}
      <div className="container-custom section-padding py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Colonne 1: Logo + Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Logo aligné avec les titres */}
            <div className="mb-6">
              <img 
                src="/logo-mh-advisory-footer.png" 
                alt="MH Advisory" 
                className="h-6 w-auto object-contain"
              />
            </div>


            {/* Description */}
            <div className="mb-8">
              <p className="text-[#EAEAEA] text-lg leading-relaxed font-normal mb-3">
                Agence de Stratégie Digitale spécialisée dans l'accompagnement des entreprises 
                vers une transformation digitale réussie.
              </p>
              <p className="text-[#A51A1A] text-lg font-semibold">
                Nous générons plus que vous ne dépensez.
              </p>
            </div>

          </motion.div>

          {/* Colonne 2: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-[#EAEAEA] font-semibold tracking-wide uppercase text-sm mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start space-x-4 group"
              >
                <div className="p-2 bg-[#A51A1A]/10 rounded-lg group-hover:bg-[#A51A1A]/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#A51A1A]" />
                </div>
                <div>
                  <p className="text-[#A3A3A3] text-sm font-medium mb-1">Email</p>
                  <a 
                    href="mailto:marc.hemat@mhadvisory.fr"
                    className="text-[#EAEAEA] hover:text-[#A51A1A] transition-colors duration-200"
                  >
                    marc.hemat@mhadvisory.fr
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start space-x-4 group"
              >
                <div className="p-2 bg-[#A51A1A]/10 rounded-lg group-hover:bg-[#A51A1A]/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#A51A1A]" />
                </div>
                <div>
                  <p className="text-[#A3A3A3] text-sm font-medium mb-1">Téléphone</p>
                  <a 
                    href="tel:0613859073"
                    className="text-[#EAEAEA] hover:text-[#A51A1A] transition-colors duration-200"
                  >
                    06 13 85 90 73
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-start space-x-4 group"
              >
                <div className="p-2 bg-[#A51A1A]/10 rounded-lg group-hover:bg-[#A51A1A]/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#A51A1A]" />
                </div>
                <div>
                  <p className="text-[#A3A3A3] text-sm font-medium mb-1">Localisation</p>
                  <span className="text-[#EAEAEA]">Paris, France</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Colonne 3: Mentions légales */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col"
          >
            <h3 className="text-[#EAEAEA] font-semibold tracking-wide uppercase text-sm mb-6">
              Légal
            </h3>
            <div className="space-y-4">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <Link
                    href={link.href}
                    className="block text-[#A3A3A3] hover:text-[#A51A1A] transition-colors duration-200 text-sm leading-relaxed"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ligne de séparation et copyright */}
      <div className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container-custom section-padding py-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
            {/* Copyright à gauche */}
            <div className="flex items-center space-x-3">
              <p className="text-[#A3A3A3] text-sm">
                © {currentYear} MH Advisory. Tous droits réservés.
              </p>
            </div>

            {/* Icônes sociales au centre */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-2 bg-[#151514] rounded-lg border border-white/5 hover:border-[#A51A1A]/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#A51A1A] transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Slogan à droite */}
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-[#A51A1A] rounded-full"></div>
              <span className="text-[#A3A3A3] text-xs tracking-wide uppercase">
                Transformateur de business
              </span>
              <div className="w-1 h-1 bg-[#A51A1A] rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;