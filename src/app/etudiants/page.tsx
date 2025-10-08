'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Clock, TrendingUp, Users, Target, CheckCircle, ArrowRight, Phone, Mail, Calendar, ShoppingCart, X, Rocket, BarChart3, Wrench, Zap, Award, Shield, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const EtudiantsPage: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const { addToCart, state, dispatch } = useCart();

  // Vérifier s'il y a une offre étudiante dans le panier
  const hasStudentOffer = state.items.some(item => item.category === 'student');

  // Écouter les changements de showCheckoutForm
  useEffect(() => {
    if (state.showCheckoutForm) {
      setShowContactForm(true);
      dispatch({ type: 'CLOSE_CHECKOUT_FORM' });
    }
  }, [state.showCheckoutForm, dispatch]);

  const offers = [
    {
      id: 'standard',
      title: 'Accompagnement Standard',
      slogan: 'Idéal pour un lancement rapide de ton projet',
      price: '500€',
      percentage: '+ 15% du CA',
      duration: '2 Semaines Minimum',
      durationBadge: '2 semaines min',
      color: 'bg-gray-700',
      icon: Rocket,
      objective: 'Lancement rapide',
      features: [
        'Étude de marché',
        'Choix du positionnement',
        'Clarification de l\'offre',
        'Soutien choix légal',
        'Partage des outils de gestion d\'entreprise',
        'Création des outils - Simple Logo 2 variantes',
        'Conseil stratégique sur l\'utilisation',
        'Site web Landing page non complexe ou App',
        'Confirmation de la discipline et motivation via questionnaires',
        'Suivi jusqu\'au résultat attendu'
      ],
      tools: [
        'CRM',
        'Questionnaire client',
        'Tâches',
        'Calendrier',
        'Prise de RDV',
        'Prospection'
      ]
    },
    {
      id: 'ameliore',
      title: 'Accompagnement Amélioré',
      slogan: 'Pour structurer ton offre et scaler ton business',
      price: '850€',
      percentage: '+ 5 → 10% CA',
      duration: '1 Mois Minimum',
      durationBadge: '1 mois min',
      color: 'bg-red-500',
      icon: BarChart3,
      objective: 'Structuration & scaling',
      features: [
        'Étude de marché',
        'Choix du positionnement',
        'Clarification de l\'offre + Vision future : scalabilité',
        'Soutien choix légal',
        'Partage des outils de gestion d\'entreprise',
        'Création des outils - Poussé Logo 2 variantes',
        'Conseil stratégique sur l\'utilisation',
        'Site web Landing page ou App',
        'Confirmation de la discipline et motivation via questionnaires',
        'Conseil erreur par lesquels vous n\'êtes pas obligé de passer',
        'Formation au moyen de Prospection cold call + TikTok + Post LinkedIn',
        'Suivi jusqu\'au résultat attendu'
      ],
      tools: [
        'CRM',
        'Questionnaire client',
        'Tâches',
        'Calendrier',
        'Prise de RDV',
        'Prospection'
      ],
      bonus: [
        'Vision future et scalabilité',
        'Formation prospection',
        'Formation TikTok',
        'Formation LinkedIn',
        'Conseils anti-erreurs'
      ]
    },
    {
      id: 'amelioration',
      title: 'Offres d\'amélioration des services',
      slogan: 'Pour faire évoluer ton image et ton efficacité interne',
      price: '300€',
      percentage: '+ 2 → 8% CA',
      duration: '1 Mois Minimum',
      durationBadge: '1 mois min',
      color: 'bg-red-600',
      icon: Wrench,
      objective: 'Amélioration continue',
      features: [
        'Étude du marché',
        'Étude des outils de communication',
        'Étude de la personne conviction, besoin',
        'Étude de services ou produit',
        'Analyse des canaux de ventes',
        'Diagnostic',
        'Suivi de la mise en place des solutions trouvées',
        'Suivi jusqu\'au résultat attendu'
      ],
      tools: [
        'Analyse de marché',
        'Audit communication',
        'Analyse comportementale',
        'Diagnostic ventes',
        'Solutions personnalisées'
      ]
    }
  ];

  const contactInfo = {
    phone: '07 81 22 93 36',
    email: 'marc.hemat@mhadvisory.fr'
  };

  const handleAddToCart = (offer: any) => {
    addToCart({
      id: offer.id,
      name: offer.title,
      price: offer.price,
      category: 'student' as const,
      isQuote: true,
      description: offer.features.slice(0, 3).join(', ')
    });
  };

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
            <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Offres <span className="gradient-text">Étudiantes</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Lancez votre entreprise avec nos accompagnements spécialement conçus pour les étudiants. 
              Tarifs préférentiels et accompagnement personnalisé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appeler maintenant</span>
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>RDV gratuit</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avantages Section - Pourquoi nos offres étudiantes */}
      <section className="py-20 border-t border-white/5">
        <div className="container-custom section-padding">
          {/* Section Titre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">
              Pourquoi choisir nos <span className="gradient-text">offres étudiantes</span> ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des accompagnements spécialement conçus pour les étudiants entrepreneurs, avec des tarifs adaptés et un suivi personnalisé
            </p>
          </motion.div>

          {/* Avantages en grille */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Zap,
                title: 'Tarifs préférentiels',
                description: 'Des prix adaptés aux budgets étudiants sans compromis sur la qualité',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Award,
                title: 'Accompagnement expert',
                description: 'Bénéficiez de notre expérience pour éviter les erreurs coûteuses',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Shield,
                title: 'Suivi jusqu\'au résultat',
                description: 'Nous restons à vos côtés jusqu\'à l\'atteinte de vos objectifs',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Heart,
                title: 'Paiement flexible',
                description: 'Options de paiement adaptées : forfait + % du CA selon vos revenus',
                color: 'from-pink-500 to-rose-500'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#1a1a19] rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Gradient top bar */}
                <div className={`h-1 bg-gradient-to-r ${advantage.color} rounded-t-2xl absolute top-0 left-0 right-0`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.color} p-0.5 mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-[#1a1a19] rounded-xl flex items-center justify-center">
                    <advantage.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-100 mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Résumé des 3 offres */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-red-900/20 via-[#1a1a19] to-[#1a1a19] rounded-2xl p-8 border border-red-500/20 mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-100">
                Nos <span className="gradient-text">3 formules</span> d'accompagnement
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${offer.color} rounded-xl p-6 text-white`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <offer.icon className="w-10 h-10 text-white/90" />
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{offer.durationBadge}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{offer.title}</h4>
                  <p className="text-white/80 text-sm mb-4">{offer.objective}</p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-3xl font-bold">{offer.price}</div>
                    <div className="text-white/90 text-sm">{offer.percentage}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-300 text-lg mb-4">
                💡 <strong>Bon à savoir :</strong> Toutes nos offres incluent un suivi personnalisé jusqu'au résultat attendu !
              </p>
              <button
                onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Découvrir les détails</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Tableau comparatif complet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
                <span className="gradient-text">Comparatif détaillé</span> des offres
              </h3>
              <p className="text-gray-400">Compare facilement et choisis l'offre qui te correspond</p>
            </div>

            <div className="bg-[#1a1a19] rounded-2xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-gradient-to-r from-red-900/30 to-red-800/30">
                    <tr>
                      <th className="text-left py-5 px-6 text-gray-100 font-bold text-lg">Caractéristiques</th>
                      <th className="text-center py-5 px-6">
                        <div className="flex flex-col items-center">
                          <Rocket className="w-6 h-6 text-gray-400 mb-2" />
                          <span className="text-gray-100 font-bold">Standard</span>
                          <span className="text-sm text-gray-400 mt-1">500€</span>
                        </div>
                      </th>
                      <th className="text-center py-5 px-6 bg-red-500/10">
                        <div className="flex flex-col items-center">
                          <BarChart3 className="w-6 h-6 text-red-400 mb-2" />
                          <span className="text-gray-100 font-bold">Amélioré</span>
                          <span className="text-sm text-red-400 mt-1">850€ ⭐</span>
                        </div>
                      </th>
                      <th className="text-center py-5 px-6">
                        <div className="flex flex-col items-center">
                          <Wrench className="w-6 h-6 text-gray-400 mb-2" />
                          <span className="text-gray-100 font-bold">Amélioration</span>
                          <span className="text-sm text-gray-400 mt-1">300€</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: 'Durée minimum', values: ['2 semaines', '1 mois', '1 mois'] },
                      { label: 'Étude de marché', values: [true, true, true] },
                      { label: 'Positionnement stratégique', values: [true, true, false] },
                      { label: 'Clarification de l\'offre', values: [true, true, false] },
                      { label: 'Soutien juridique', values: [true, true, false] },
                      { label: 'Outils de gestion', values: ['6 outils', '6 outils', 'Audit outils existants'] },
                      { label: 'Création Logo', values: ['2 variantes', '2 variantes (poussé)', '❌'] },
                      { label: 'Site web / App', values: ['Landing page simple', 'Landing page pro', '❌'] },
                      { label: 'Formation prospection', values: ['❌', 'Cold call + TikTok + LinkedIn', '❌'] },
                      { label: 'Vision scalabilité', values: ['❌', '✅', '❌'] },
                      { label: 'Analyse canaux de vente', values: ['❌', '❌', '✅'] },
                      { label: 'Suivi jusqu\'au résultat', values: [true, true, true] },
                      { label: 'Pourcentage CA', values: ['+ 15%', '+ 5 → 10%', '+ 2 → 8%'] }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6 text-gray-300 font-medium">{row.label}</td>
                        {row.values.map((value, colIndex) => (
                          <td key={colIndex} className={`py-4 px-6 text-center ${colIndex === 1 ? 'bg-red-500/5' : ''}`}>
                            {typeof value === 'boolean' ? (
                              value ? (
                                <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-600 mx-auto" />
                              )
                            ) : (
                              <span className={`text-sm ${colIndex === 1 ? 'text-red-400 font-semibold' : 'text-gray-400'}`}>
                                {value}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer du tableau */}
              <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 p-6 text-center border-t border-white/10">
                <p className="text-gray-300 mb-4">
                  <strong className="text-red-400">👉 Notre recommandation :</strong> L'offre Améliorée est la plus complète pour lancer ton projet avec toutes les formations et outils nécessaires !
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {offers.map((offer) => (
                    <button
                      key={offer.id}
                      onClick={() => {
                        document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => handleAddToCart(offer), 500);
                      }}
                      className={`${offer.id === 'ameliore' ? 'btn-primary' : 'btn-secondary'} text-sm px-6 py-3`}
                    >
                      Choisir {offer.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Nos <span className="gradient-text">Accompagnements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Choisis l'accompagnement adapté à ton projet
            </p>
            <div className="bg-[#1a1a19]/50 rounded-xl p-6 max-w-4xl mx-auto border border-white/10">
              <p className="text-gray-300 text-lg">
                Chaque offre est conçue pour un niveau différent de besoin et d'ambition. Compare et choisis celle qui correspond à ta situation.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card group hover:scale-105 cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedOffer(selectedOffer === offer.id ? null : offer.id)}
              >
                {/* Header */}
                <div className={`${offer.color} p-6 rounded-t-xl mb-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <offer.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">{offer.durationBadge}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
                  <p className="text-white/90 text-sm mb-4 italic">{offer.slogan}</p>
                  <div className="text-4xl font-bold text-white mb-2">{offer.price}</div>
                  <div className="text-white/90 text-sm">{offer.percentage}</div>
                </div>

                {/* Features */}
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <h4 className="font-semibold text-gray-100 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Inclus dans l'accompagnement :</span>
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {offer.features.slice(0, 6).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                    
                    {offer.features.length > 6 && (
                      <li className="text-sm text-gray-500 italic">
                        + {offer.features.length - 6} autres éléments...
                      </li>
                    )}
                  </ul>

                  {/* Tools - AVANT les bonus */}
                  <div className="mb-6">
                    <h5 className="font-medium text-gray-100 mb-3">Outils fournis :</h5>
                    <div className="flex flex-wrap gap-2">
                      {offer.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="bg-red-600/20 text-red-400 text-xs px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bonus for Amélioré - APRÈS les outils */}
                  {offer.bonus && (
                    <div className="mb-6">
                      <h5 className="font-medium text-gray-100 mb-3">Bonus :</h5>
                      <div className="space-y-2">
                        {offer.bonus.map((bonus, bonusIndex) => (
                          <div key={bonusIndex} className="flex items-center space-x-2 text-sm text-yellow-400">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span>{bonus}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button - Toujours en bas */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(offer);
                    }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 mt-auto"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Découvrir cette offre</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Detailed Features Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1a1a19] rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {(() => {
              const offer = offers.find(o => o.id === selectedOffer);
              if (!offer) return null;
              
              return (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-100">{offer.title}</h3>
                    <button
                      onClick={() => setSelectedOffer(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className={`${offer.color} p-4 rounded-lg mb-6`}>
                    <div className="text-white text-center">
                      <div className="text-3xl font-bold">{offer.price}</div>
                      <div className="text-white/90">{offer.percentage}</div>
                      <div className="text-white/80 text-sm mt-2">Durée : {offer.duration}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-100 mb-4">Détail complet de l'accompagnement :</h4>
                      <ul className="space-y-3">
                        {offer.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-100 mb-4">Outils fournis :</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {offer.tools.map((tool, index) => (
                          <div key={index} className="bg-red-600/20 text-red-400 text-sm px-3 py-2 rounded text-center">
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {offer.bonus && (
                      <div>
                        <h4 className="font-semibold text-gray-100 mb-4">Bonus exclusifs :</h4>
                        <ul className="space-y-2">
                          {offer.bonus.map((bonus, index) => (
                            <li key={index} className="flex items-center space-x-2 text-yellow-400">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span>{bonus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-4 mt-8">
                    <button
                      onClick={() => setSelectedOffer(null)}
                      className="flex-1 btn-secondary"
                    >
                      Fermer
                    </button>
                    <button 
                      onClick={() => {
                        const selectedOfferData = offers.find(offer => offer.id === selectedOffer);
                        if (selectedOfferData) {
                          handleAddToCart(selectedOfferData);
                          setSelectedOffer(null);
                        }
                      }}
                      className="flex-1 btn-primary flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Ajouter au panier</span>
                    </button>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">
              Prêt à lancer votre projet ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card text-center">
                <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-100 mb-2">Appel gratuit</h3>
                <p className="text-gray-400 mb-4">Discutons de votre projet en 15 minutes</p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-red-600 font-semibold text-lg"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="card text-center">
                <Mail className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-100 mb-2">Email</h3>
                <p className="text-gray-400 mb-4">Réponse sous 24h</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-red-600 font-semibold text-lg"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Prendre rendez-vous</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#151514]/95 backdrop-blur-md rounded-xl border border-white/10 w-full max-w-lg max-h-[90vh] flex flex-col"
          >
            {/* Header fixe */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
              <h3 className="text-xl font-bold text-gray-100">Finaliser votre commande</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">
                  Remplissez ce formulaire pour finaliser votre commande. Nous vous contacterons dans les plus brefs délais.
                </p>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>

                {/* Champs spécifiques aux offres étudiantes */}
                {hasStudentOffer && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        École / Université *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="Ex: Université Paris-Saclay, HEC, etc."
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Année d'étude *
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        required
                      >
                        <option value="">Sélectionnez votre année</option>
                        <option value="L1">Licence 1ère année</option>
                        <option value="L2">Licence 2ème année</option>
                        <option value="L3">Licence 3ème année</option>
                        <option value="M1">Master 1ère année</option>
                        <option value="M2">Master 2ème année</option>
                        <option value="Doctorat">Doctorat</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Cursus / Filière *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="Ex: Marketing Digital, Informatique, Commerce, etc."
                        required
                      />
                    </div>
                  </>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>
              </div>
            </div>

            {/* Footer fixe avec boutons */}
            <div className="p-6 border-t border-white/10 flex-shrink-0">
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 btn-secondary"
                >
                  Annuler
                </button>
                <button
                  onClick={() => {
                    // Logique d'envoi du formulaire
                    alert('Commande envoyée ! Nous vous contacterons bientôt.');
                    setShowContactForm(false);
                  }}
                  className="flex-1 btn-primary"
                >
                  Envoyer la commande
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EtudiantsPage;
