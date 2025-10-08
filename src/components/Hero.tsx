'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedStats from '@/components/AnimatedStats';

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const dynamicWords = [
    'entreprise',
    'marque',
    'start-up',
    'agence',
    'projet',
    'activité',
    'business',
    'cabinet'
  ];

  const stats = [
    { value: 180, label: 'Augmentation CA', suffix: '%' },
    { value: 25, label: 'Clients satisfaits', suffix: '+' },
    { value: 6, label: 'Mois de ROI', suffix: '' },
  ];

  // Animation des mots toutes les 2.5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => 
        (prevIndex + 1) % dynamicWords.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fond dégradé subtil en haut */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Colonne gauche : Texte principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Titre principal avec mot dynamique */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Transformez votre{' '}
              <div className="inline-block relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-[#A51A1A] relative"
                  >
                    {dynamicWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              {' '}avec une stratégie digitale performante
            </h1>

            {/* Sous-titre */}
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mb-8 leading-relaxed">
              Nous accompagnons les entreprises dans leur transformation digitale pour augmenter leur chiffre d'affaires de 180% en moyenne en 6 mois.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Bouton principal (rouge) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href="/services" 
                  className="bg-[#A51A1A] hover:bg-[#C21B1B] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-[#A51A1A]/25"
                >
                  <span>Découvrir nos services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Bouton secondaire (gris) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href="/contact" 
                  className="bg-[#1E1E1E] hover:bg-[#2B2B2B] text-gray-200 px-6 py-3 rounded-xl font-medium transition-all duration-300 inline-flex items-center space-x-2 border border-gray-700 hover:border-gray-600"
                >
                  <span>Nous contacter</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Colonne droite : Statistiques */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#1a1a19] rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <AnimatedStats stats={stats} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Particules flottantes en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/20 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-600/20 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-red-500/25 rounded-full animate-pulse delay-3000" />
      </div>
    </section>
  );
};

export default Hero;
