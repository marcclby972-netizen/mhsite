'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: 'Services & Tarifs',
      questions: [
        {
          question: 'Quels sont vos tarifs pour un accompagnement complet ?',
          answer: 'Nos tarifs varient selon vos besoins :\n• Accompagnement Standard : 2 500€ (2-3 mois)\n• Accompagnement Amélioré : 4 500€ (3-6 mois)\n• Accompagnement Premium : Sur devis (6-12 mois)\n\nNous proposons également des modules complémentaires à partir de 40€.'
        },
        {
          question: 'Proposez-vous des offres spéciales pour les étudiants ?',
          answer: 'Oui ! Nous avons des offres spécialement conçues pour les étudiants :\n• Accompagnement Standard : 500€ (au lieu de 2 500€)\n• Accompagnement Amélioré : 1 200€ (au lieu de 4 500€)\n• Accompagnement Premium : 2 000€ (au lieu de sur devis)\n\nCes tarifs incluent un accompagnement personnalisé et des outils adaptés à votre projet étudiant.'
        },
        {
          question: 'Combien coûte une identité visuelle ?',
          answer: 'Nous proposons deux offres d\'identité visuelle :\n• Standard : 700€ - 900€ (4-6 jours)\n• Standard+ : 1 000€ - 1 300€ (7-12 jours)\n\nCes prix incluent le logo, la charte graphique, les typographies et tous les fichiers sources.'
        },
        {
          question: 'Y a-t-il des frais cachés ?',
          answer: 'Non, nos tarifs sont transparents. Le prix affiché inclut tout ce qui est mentionné dans l\'offre. Nous vous fournissons un devis détaillé avant tout engagement.'
        }
      ]
    },
    {
      category: 'Processus & Méthodologie',
      questions: [
        {
          question: 'Comment se déroule un accompagnement ?',
          answer: 'Notre méthodologie en 4 étapes :\n1. Diagnostic & Analyse : Audit de votre situation actuelle\n2. Stratégie Personnalisée : Développement d\'une roadmap adaptée\n3. Mise en Œuvre : Création des outils et solutions\n4. Suivi & Optimisation : Accompagnement continu et ajustements'
        },
        {
          question: 'Combien de temps prend un projet ?',
          answer: 'La durée dépend du type d\'accompagnement :\n• Accompagnement Standard : 2-3 mois\n• Accompagnement Amélioré : 3-6 mois\n• Accompagnement Premium : 6-12 mois\n• Identité visuelle : 4-12 jours\n• Modules complémentaires : 1-2 semaines'
        },
        {
          question: 'Travaillez-vous avec des entreprises de toutes tailles ?',
          answer: 'Oui, nous accompagnons des entreprises de toutes tailles :\n• Startups et entrepreneurs individuels\n• PME et ETI\n• Grandes entreprises\n• Étudiants et porteurs de projet\n\nNotre approche s\'adapte à votre contexte et vos ressources.'
        },
        {
          question: 'Proposez-vous un suivi après la livraison ?',
          answer: 'Oui, tous nos accompagnements incluent un suivi :\n• Support technique pendant 1-12 mois selon l\'offre\n• Sessions de suivi stratégique\n• Optimisation continue des performances\n• Formation de vos équipes'
        }
      ]
    },
    {
      category: 'Technique & Support',
      questions: [
        {
          question: 'Quels outils et technologies utilisez-vous ?',
          answer: 'Nous utilisons les dernières technologies :\n• Design : Figma, Adobe Creative Suite\n• Développement : React, Next.js, Node.js\n• Analytics : Google Analytics, Facebook Pixel\n• CRM : HubSpot, Salesforce\n• Outils de collaboration : Slack, Notion'
        },
        {
          question: 'Comment puis-je suivre l\'avancement de mon projet ?',
          answer: 'Nous vous tenons informé régulièrement :\n• Rapports hebdomadaires détaillés\n• Réunions de suivi programmées\n• Accès à un espace client en ligne\n• Communication directe avec votre chef de projet'
        },
        {
          question: 'Que se passe-t-il si je ne suis pas satisfait ?',
          answer: 'Votre satisfaction est notre priorité :\n• Révisions illimitées pendant la phase de création\n• Garantie de satisfaction\n• Support client réactif\n• Ajustements gratuits selon les termes du contrat'
        },
        {
          question: 'Proposez-vous de la formation ?',
          answer: 'Oui, nous formons vos équipes :\n• Formation aux outils créés\n• Bonnes pratiques digitales\n• Gestion des réseaux sociaux\n• Analyse des performances\n• Sessions individuelles ou collectives'
        }
      ]
    },
    {
      category: 'Contact & Rendez-vous',
      questions: [
        {
          question: 'Comment prendre rendez-vous ?',
          answer: 'Plusieurs options s\'offrent à vous :\n• Formulaire de contact sur le site\n• Téléphone : 07 81 22 93 36\n• Email : marc.hemat@mhadvisory.fr\n• Chat en direct (disponible 9h-19h)\n• WhatsApp : 06 13 85 90 73'
        },
        {
          question: 'Proposez-vous un audit gratuit ?',
          answer: 'Oui, nous offrons un audit gratuit de 30 minutes pour :\n• Analyser votre situation actuelle\n• Identifier les opportunités d\'amélioration\n• Vous proposer des solutions adaptées\n• Établir un plan d\'action personnalisé'
        },
        {
          question: 'Dans quelles zones géographiques intervenez-vous ?',
          answer: 'Nous intervenons partout en France :\n• Consultations à distance (visioconférence)\n• Déplacements sur site si nécessaire\n• Suivi en ligne pour tous nos clients\n• Support technique 24h/7j'
        },
        {
          question: 'Quels sont vos délais de réponse ?',
          answer: 'Nous nous engageons à vous répondre rapidement :\n• Email : sous 24h en moyenne\n• Téléphone : immédiatement pendant les heures ouvrables\n• Chat : instantané (9h-19h)\n• Urgences : numéro dédié disponible'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      {/* Header */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-medium">Questions Fréquentes</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              FAQ
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-red-500 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const globalIndex = categoryIndex * 10 + index;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-white pr-4">
                          {item.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-300 leading-relaxed whitespace-pre-line">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Notre équipe est là pour vous aider. Contactez-nous directement !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Nous contacter</span>
              </Link>
              
              <a
                href="tel:0781229336"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>07 81 22 93 36</span>
              </a>
              
              <a
                href="mailto:marc.hemat@mhadvisory.fr"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
