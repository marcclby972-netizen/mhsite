'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, MessageCircle, BarChart3, RefreshCw, Phone } from 'lucide-react';

const AProposPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Marc C. Hemat',
      role: 'Fondateur & Directeur de Publication',
      description: 'Fondateur de MH Advisory. Entrepreneur passionné par l\'accompagnement digital des entreprises avec une expertise en transformation et stratégie de croissance.',
      responsibilities: [
        'Direction générale & stratégie',
        'Accompagnement digital des entreprises',
        'Création et refonte de sites internet',
        'Conseil en stratégie numérique',
      ],
      image: '/images/marc-hemat.jpg',
      contact: {
        email: 'marc.hemat@mhadvisory.fr',
        phone: '07 81 22 93 36',
        whatsapp: '06 13 85 90 73'
      }
    },
    {
      name: 'Marem Elyass',
      role: 'Directeur Technique',
      description: 'Expert technique avec une solide expérience en développement web et en solutions digitales. Spécialisé dans la création d\'outils sur mesure et l\'optimisation des performances.',
      responsibilities: [
        'Développement d\'applications web',
        'Architecture technique des projets',
        'Intégration d\'APIs et solutions tierces',
        'Maintenance et support technique',
      ],
      image: '/images/marem-elyass.jpg',
      contact: {
        email: 'marem.elyass@mhadvisory.fr',
        phone: '07 81 22 93 36',
        whatsapp: '06 13 85 90 73'
      }
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, avec une attention particulière aux détails et à la qualité.',
    },
    {
      icon: TrendingUp,
      title: 'Performance',
      description: 'Notre objectif est de dépasser vos attentes et de générer des résultats mesurables pour votre entreprise.',
    },
    {
      icon: MessageCircle,
      title: 'Transparence',
      description: 'Communication claire et transparente tout au long du projet, avec des rapports réguliers sur l\'avancement.',
    },
    {
      icon: RefreshCw,
      title: 'Innovation',
      description: 'Nous restons à la pointe des technologies et des tendances pour vous offrir les meilleures solutions.',
    },
  ];

  const stats = [
    { value: 2025, label: 'Année de Création', suffix: '' },
    { value: 2, label: 'Membres de l\'Équipe', suffix: '' },
    { value: 100, label: 'Satisfaction Client', suffix: '%' },
    { value: 24, label: 'Disponibilité', suffix: '/7' },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              À Propos de <span className="gradient-text">MH Advisory</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Une équipe de 2 experts passionnés dédiée à votre réussite digitale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Fondée en 2025, MH Advisory est née de la conviction que chaque entreprise 
                  mérite une stratégie digitale sur mesure pour réussir sa transformation.
                </p>
                <p>
                  Notre mission est simple : <strong className="text-red-600">vous générer plus que vous ne dépensez</strong>. 
                  Cette promesse guide chacune de nos décisions et de nos actions.
                </p>
                <p>
                  Spécialisée dans l'accompagnement digital des entreprises, nous proposons 
                  des services de création et refonte de sites internet, amélioration de l'identité 
                  visuelle, conseil en stratégie numérique, et mise en place de solutions d'automatisation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="card p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des experts passionnés qui mettent leur savoir-faire au service de votre réussite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card group hover:scale-105 h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Header avec photo et infos principales */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/30 transition-colors duration-300">
                      <Users className="w-10 h-10 text-red-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-100 mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-red-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Responsabilités */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-100 mb-3 text-sm">
                      Responsabilités :
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {member.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Contact */}
                  {member.contact && (
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <button
                        onClick={() => {
                          if (typeof window !== 'undefined') {
                            window.open(`tel:${member.contact.phone.replace(/\s/g, '')}`, '_self');
                          }
                        }}
                        className="w-full btn-primary flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Contacter</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Les principes qui guident notre approche et notre relation client
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card text-center group hover:scale-105"
              >
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600/30 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-red-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-100 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">
              Notre Mission
            </h2>
            
            <div className="card p-8 md:p-12">
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
                "Nous nous engageons à transformer votre entreprise en générant plus de valeur 
                que vous n'en investissez. Chaque projet est une promesse de croissance, 
                d'innovation et de succès durable."
              </p>
              
              <div className="text-lg font-semibold text-red-600">
                — L'équipe MH Advisory
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AProposPage;

