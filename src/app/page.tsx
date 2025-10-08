'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Users, Zap, CheckCircle, Star, BarChart3, Lightbulb, Shield, Clock } from 'lucide-react';
import AnimatedStats from '@/components/AnimatedStats';
import FloatingParticles from '@/components/FloatingParticles';
import Hero from '@/components/Hero';

const HomePage: React.FC = () => {
  const services = [
    {
      title: 'Conseil Stratégie',
      description: 'Définition de votre stratégie digitale sur mesure pour maximiser votre ROI',
      icon: Target,
      features: ['Audit complet', 'Roadmap stratégique', 'KPI personnalisés'],
    },
    {
      title: 'Design Identité',
      description: 'Création d\'une identité visuelle forte et cohérente sur tous vos supports',
      icon: Star,
      features: ['Logo & charte graphique', 'Templates personnalisés', 'Guidelines complètes'],
    },
    {
      title: 'Développement Outils',
      description: 'Développement d\'outils digitaux sur mesure pour automatiser vos processus',
      icon: Zap,
      features: ['Applications web', 'Intégrations API', 'Maintenance continue'],
    },
  ];

  const technologies = [
    { name: 'Figma', description: 'Design', icon: '/icons/figma.svg' },
    { name: 'Notion', description: 'Gestion de projet', icon: '/icons/notion.svg' },
    { name: 'Google Analytics', description: 'Analyse de données', icon: '/icons/google-analytics.svg' },
    { name: 'Meta Ads', description: 'Publicité ciblée', icon: '/icons/meta-ads.svg' },
  ];

  const stats = [
    { value: 180, label: 'Augmentation CA', suffix: '%' },
    { value: 25, label: 'Clients satisfaits', suffix: '+' },
    { value: 6, label: 'Mois de ROI', suffix: '' },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Diagnostic & Analyse',
      description: 'Nous analysons votre situation actuelle, vos objectifs et vos défis pour comprendre votre contexte unique.',
      icon: BarChart3,
      details: ['Audit de votre présence digitale', 'Analyse concurrentielle', 'Identification des opportunités']
    },
    {
      step: 2,
      title: 'Stratégie Personnalisée',
      description: 'Développement d\'une roadmap stratégique adaptée à vos besoins et votre secteur d\'activité.',
      icon: Lightbulb,
      details: ['Définition des objectifs SMART', 'Roadmap de transformation', 'KPI de suivi personnalisés']
    },
    {
      step: 3,
      title: 'Mise en Œuvre',
      description: 'Exécution de la stratégie avec création d\'outils, visuels et solutions digitales sur mesure.',
      icon: Zap,
      details: ['Création d\'identité visuelle', 'Développement d\'outils', 'Formation de vos équipes']
    },
    {
      step: 4,
      title: 'Suivi & Optimisation',
      description: 'Accompagnement continu avec analyse des performances et ajustements pour maximiser vos résultats.',
      icon: TrendingUp,
      details: ['Reporting mensuel', 'Optimisation continue', 'Support technique']
    }
  ];

  const results = [
    {
      title: 'Augmentation du Chiffre d\'Affaires',
      percentage: '+180%',
      description: 'Nos clients voient en moyenne une augmentation de 180% de leur CA en 6 mois',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Efficacité Publicitaire',
      percentage: '+60%',
      description: 'Meilleure allocation budgétaire et ciblage plus précis grâce à l\'analyse stratégique',
      icon: Target,
      color: 'bg-red-500'
    },
    {
      title: 'Conversion Client',
      percentage: '+70%',
      description: 'Optimisation des pages de vente et cohérence visuelle renforçant la confiance client',
      icon: BarChart3,
      color: 'bg-purple-500'
    }
  ];

  const values = [
    {
      title: 'Expertise Reconnue',
      description: 'Plus de 25 entreprises accompagnées avec succès dans leur transformation digitale',
      icon: Star,
      color: 'text-yellow-400'
    },
    {
      title: 'Approche Personnalisée',
      description: 'Chaque stratégie est unique et adaptée aux spécificités de votre entreprise',
      icon: Users,
      color: 'text-red-400'
    },
    {
      title: 'Résultats Garantis',
      description: 'Engagement sur des résultats mesurables avec suivi et optimisation continue',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      title: 'Accompagnement Long Terme',
      description: 'Support continu pour assurer la pérennité et l\'évolution de votre stratégie',
      icon: Clock,
      color: 'text-red-400'
    }
  ];

  return (
    <div className="min-h-screen">
      <FloatingParticles />
      
      {/* Hero Section */}
      <Hero />

      {/* Comment nous fonctionnons */}
      <section className="py-20">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Comment nous <span className="gradient-text">fonctionnons</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une méthodologie éprouvée en 4 étapes pour transformer votre entreprise et maximiser vos résultats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-[#A51A1A] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-bold text-red-600">0{step.step}</span>
                      <h3 className="text-xl font-bold text-gray-100">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-20 gradient-bg-red">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Nos <span className="gradient-text">Expertises</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des services complémentaires pour une transformation digitale réussie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card text-center group hover:scale-105 transition-transform duration-300 flex flex-col h-full"
              >
                <div className="bg-[#A51A1A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Bouton aligné en bas */}
                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center w-full bg-[#A51A1A] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <span>Découvrir</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-20">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Des <span className="gradient-text">résultats</span> concrets
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Les chiffres parlent d'eux-mêmes : nos clients voient des améliorations significatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center card p-8"
              >
                <div className={`${result.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <result.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-100 mb-2">{result.percentage}</div>
                <h3 className="text-xl font-bold text-gray-100 mb-4">{result.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 gradient-bg-red">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Pourquoi nous <span className="gradient-text">choisir</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des valeurs fortes qui guident notre approche et garantissent votre succès
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-start space-x-6">
                  <div className={`${value.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-100 mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Technologies & <span className="gradient-text">Outils</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nous utilisons les meilleurs outils du marché pour garantir des résultats optimaux
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="card p-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-100 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 section-bg">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Rejoignez les entreprises qui ont choisi MH Advisory pour leur transformation digitale et augmentent leur chiffre d'affaires de 180% en moyenne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/services" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
                  <span>Découvrir nos services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2">
                  <span>Nous contacter</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;