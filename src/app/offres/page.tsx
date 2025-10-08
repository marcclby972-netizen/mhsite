'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, CheckCircle, ArrowRight, Phone, Mail, Calendar, ShoppingCart, X, Sparkles, Award, FileText, Users, Zap, Shield, Clock, Target } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const OffresPage: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const { addToCart, state, dispatch } = useCart();

  // Vérifier s'il y a une offre dans le panier
  const hasOffer = state.items.some(item => item.category === 'offer');

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
      title: 'Standard',
      slogan: 'Identité visuelle de base',
      price: '700 € – 900 €',
      duration: '4 à 6 jours',
      durationBadge: '4-6 jours',
      color: 'bg-gray-700',
      icon: Palette,
      objective: 'Base solide pour votre identité',
      features: [
        'Logo principal',
        'Audit',
        '1 variation du logo',
        'Palette de couleurs personnalisée',
        '2 typographies (Titre + Texte)',
        'Charte graphique (PDF)',
        'Explication des choix visuels',
        'Fichiers livrés : JPEG, PNG, SVG, PDF',
        'Nombre de changements possible : 1 à 2'
      ],
      payment: '50 % à la commande, 50 % à la livraison',
      bonus: [
        '1 session de conseil offerte',
        'Support par email pendant 1 mois'
      ]
    },
    {
      id: 'standard-plus',
      title: 'Standard +',
      slogan: 'Identité complète + supports visuels',
      price: '1 000 € – 1 300 €',
      duration: '7 à 12 jours',
      durationBadge: '7-12 jours',
      color: 'bg-red-500',
      icon: Sparkles,
      objective: 'Solution complète avec accompagnement',
      features: [
        'Logo principal',
        'Audit visuel (Offert)',
        'Audit Stratégique',
        '2 à 3 déclinaisons (monochrome, vertical, icône…)',
        'Palette de couleurs + documentation',
        '2 à 3 typographies',
        'Charte graphique (PDF)',
        'Guide d\'utilisation complet',
        '2 sessions de suivi stratégique incluses',
        'Mockups de présentation',
        'Visuels réseaux sur demande (en option)',
        'Kit de fichiers : JPEG, PNG, SVG, PDF HD, version print',
        'Nombre de changements possible : 3 à 4'
      ],
      payment: '50 % à la commande, 50 % à la livraison',
      bonus: [
        '2 sessions de suivi stratégique incluses',
        'Support prioritaire pendant 2 mois',
        'Mockups de présentation professionnels'
      ]
    }
  ];

  const handleAddOfferToCart = (offer: any) => {
    addToCart({
      id: offer.id,
      name: `Offre ${offer.title}`,
      price: offer.price,
      category: 'offer' as const,
      isQuote: true,
      description: offer.slogan
    });
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      {/* Header */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
              <Palette className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-medium">Identité Visuelle</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Offres d'Identité Visuelle
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Créez une identité visuelle professionnelle et cohérente pour votre entreprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                icon: Shield,
                title: 'Qualité Professionnelle',
                description: 'Design de haute qualité adapté à votre secteur',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Zap,
                title: 'Livraison Rapide',
                description: 'Délais courts pour un lancement rapide',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Users,
                title: 'Accompagnement Expert',
                description: 'Conseils personnalisés tout au long du projet',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Target,
                title: 'Résultats Concrets',
                description: 'Une identité qui marque les esprits',
                gradient: 'from-red-500 to-rose-500'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-red-500/30 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-4`}>
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-400 text-sm">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offres Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative group flex flex-col h-full"
              >
                {/* Card */}
                <div className={`relative h-full flex flex-col p-8 bg-gradient-to-br ${offer.color} rounded-3xl overflow-hidden shadow-2xl border border-white/10`}>
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                  
                  {/* Badge Duration */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{offer.durationBadge}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <offer.icon className="w-8 h-8" />
                    </div>

                    {/* Header */}
                    <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-white/80 mb-4">{offer.slogan}</p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className="text-4xl font-bold">{offer.price}</div>
                      <div className="text-sm text-white/60 mt-1">{offer.duration}</div>
                    </div>

                    {/* Objective */}
                    <div className="mb-6 p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-red-400" />
                        <span className="font-semibold">Objectif</span>
                      </div>
                      <p className="text-white/80">{offer.objective}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6 flex-grow">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Contenu de l'offre
                      </h4>
                      <ul className="space-y-2">
                        {offer.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bonus */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-400" />
                        Bonus
                      </h4>
                      <ul className="space-y-2">
                        {offer.bonus.map((bonus, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                            <Sparkles className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span>{bonus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Payment */}
                    <div className="mb-6 p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-green-400" />
                        <span className="font-semibold">Paiement</span>
                      </div>
                      <p className="text-sm text-white/80">{offer.payment}</p>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => handleAddOfferToCart(offer)}
                      className="mt-auto w-full py-4 px-6 bg-white text-gray-900 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 group/btn"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Ajouter au panier</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tableau Comparatif */}
      <section className="py-16 bg-gradient-to-b from-black/20 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Comparaison Détaillée</h2>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="p-4 text-left font-semibold">Caractéristique</th>
                      <th className="p-4 text-center font-semibold">Standard</th>
                      <th className="p-4 text-center font-semibold bg-red-500/10">Standard +</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Logo principal', standard: true, plus: true },
                      { feature: 'Audit', standard: true, plus: true },
                      { feature: 'Audit Stratégique', standard: false, plus: true },
                      { feature: 'Variations du logo', standard: '1', plus: '2-3' },
                      { feature: 'Palette de couleurs', standard: true, plus: 'Avec documentation' },
                      { feature: 'Typographies', standard: '2', plus: '2-3' },
                      { feature: 'Charte graphique', standard: true, plus: true },
                      { feature: 'Guide d\'utilisation', standard: false, plus: true },
                      { feature: 'Sessions de suivi', standard: false, plus: '2 incluses' },
                      { feature: 'Mockups', standard: false, plus: true },
                      { feature: 'Visuels réseaux', standard: false, plus: 'Sur demande' },
                      { feature: 'Formats livrés', standard: 'Standard', plus: 'HD + Print' },
                      { feature: 'Changements possibles', standard: '1-2', plus: '3-4' },
                      { feature: 'Durée', standard: '4-6 jours', plus: '7-12 jours' }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          {typeof row.standard === 'boolean' ? (
                            row.standard ? (
                              <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-600 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{row.standard}</span>
                          )}
                        </td>
                        <td className="p-4 text-center bg-red-500/5">
                          {typeof row.plus === 'boolean' ? (
                            row.plus ? (
                              <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-600 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{row.plus}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à créer votre identité visuelle ?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contactez-nous pour discuter de votre projet et choisir l'offre qui vous correspond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Prendre rendez-vous</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="mailto:marc.hemat@mhadvisory.fr"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Nous contacter</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Panier flottant */}
      {state.items.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={() => dispatch({ type: 'OPEN_CHECKOUT_FORM' })}
            className="flex items-center gap-3 px-6 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-2xl transition-all duration-300 group"
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-white text-red-500 text-xs font-bold rounded-full flex items-center justify-center">
                {state.items.length}
              </span>
            </div>
            <span className="font-semibold">Voir le panier</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default OffresPage;
