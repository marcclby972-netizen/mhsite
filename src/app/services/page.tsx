'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Clock, Mail, Phone, GraduationCap, Calendar, CheckCircle, ArrowRight, Rocket, BarChart3, Wrench, Target, Star, Zap, Users, Briefcase, Plus, Minus, Instagram, Sparkles, Palette, Monitor, Search, FileText, TrendingUp, Image } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import ShoppingCartComponent from '@/components/ShoppingCart';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'service' | 'offer' | 'student';
  features: string[];
  isQuote?: boolean;
  icon?: any;
  color?: string;
}

const services: Service[] = [
  // Services individuels (modules complémentaires)
  {
    id: 'social-media-kit',
    name: 'Kit Social Media (5 visuels)',
    description: 'Création de visuels adaptés à votre charte graphique',
    price: '150 – 300 €',
    category: 'service',
    features: ['5 visuels personnalisés', 'Formats adaptés réseaux sociaux', 'Respect de votre charte graphique', 'Fichiers sources fournis'],
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'mockups-textile',
    name: 'Mockups Textile + Visuels Produit',
    description: 'Mise en valeur de vos produits avec visuels réalistes',
    price: '100 – 300 €',
    category: 'service',
    features: ['Mockups personnalisés', 'Visuels produit réalistes', 'Mise en situation', 'Formats haute qualité'],
    icon: Image,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'logo-design',
    name: 'Logo (et variantes)',
    description: 'Création d\'un logo unique ou déclinaisons d\'existants',
    price: '200 €',
    category: 'service',
    features: ['Logo principal', 'Variantes', 'Fichiers sources', 'Formats multiples'],
    icon: Palette,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'webdesign',
    name: 'Webdesign (maquette site web)',
    description: 'Conception UI moderne et responsive',
    price: '600 – 1 200 €',
    category: 'service',
    features: ['Design responsive', 'UX/UI optimisée', 'Maquettes interactives', 'Prototypes Figma'],
    icon: Monitor,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'audit-visuel',
    name: 'Audit Visuel Entreprise',
    description: 'Analyse complète des problèmes visuels',
    price: '40 – 70 €',
    category: 'service',
    features: ['Audit complet', 'Identification des problèmes', 'Recommandations', 'Rapport détaillé'],
    icon: Search,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'strategie-contenu',
    name: 'Stratégie de Contenu',
    description: 'Plan de contenu complet avec livrable stratégique',
    price: '300 – 500 €',
    category: 'service',
    features: ['Stratégie personnalisée', 'Calendrier éditorial', 'Plan de contenu', 'Livrable stratégique'],
    icon: FileText,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'pack-insta-starter',
    name: 'Pack Insta Starter',
    description: 'Mini charte + 5 visuels cohérents pour Instagram',
    price: '250 €',
    category: 'service',
    features: ['Mini charte graphique', '5 visuels Instagram', 'Cohérence visuelle', 'Formats optimisés'],
    icon: Instagram,
    color: 'from-pink-500 to-rose-500'
  }
];

const offers = [
  {
    id: 'standard',
    title: 'Accompagnement Standard',
    slogan: 'Idéal pour un lancement rapide de votre projet',
    price: '2 500 €',
    duration: '2-3 mois',
    description: 'Accompagnement complet pour lancer votre activité avec les bases solides',
    features: [
      'Audit complet de votre présence digitale',
      'Stratégie digitale personnalisée',
      '5 visuels pour vos réseaux sociaux',
      'Support 3 mois',
      'Formation aux outils'
    ],
    color: 'bg-gray-700',
    icon: Rocket,
    compatibleModules: ['logo-design', 'audit-visuel', 'strategie-contenu', 'pack-insta-starter', 'social-media-kit']
  },
  {
    id: 'ameliore',
    title: 'Accompagnement Amélioré',
    slogan: 'Pour structurer votre offre et scaler votre business',
    price: '4 500 €',
    duration: '3-6 mois',
    description: 'Solution complète pour développer votre activité et augmenter vos revenus',
    features: [
      'Tout du Pack Standard',
      '15 visuels premium',
      'Site web professionnel',
      'Support 6 mois',
      'Formation avancée'
    ],
    color: 'bg-red-500',
    icon: BarChart3,
    compatibleModules: ['logo-design', 'webdesign', 'social-media-kit', 'mockups-textile', 'audit-visuel', 'strategie-contenu', 'pack-insta-starter']
  },
  {
    id: 'premium',
    title: 'Accompagnement Premium',
    slogan: 'Pour faire évoluer votre image et votre efficacité interne',
    price: 'Sur devis',
    duration: '6-12 mois',
    description: 'Accompagnement personnalisé avec tous les modules pour une transformation complète',
    features: [
      'Tout du Pack Amélioré',
      '20 visuels premium + animations',
      'Application mobile sur mesure',
      'Accompagnement 12 mois',
      'Support prioritaire'
    ],
    color: 'bg-red-600',
    icon: Wrench,
    compatibleModules: ['logo-design', 'webdesign', 'social-media-kit', 'mockups-textile', 'audit-visuel', 'strategie-contenu', 'pack-insta-starter']
  }
];

export default function ServicesPage() {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactMethod, setContactMethod] = useState<'email' | 'call' | 'appointment'>('email');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [studentInfo, setStudentInfo] = useState({
    school: '',
    year: '',
    diploma: ''
  });
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const handleAddOfferToCart = (offer: any) => {
    addToCart({
      id: offer.id,
      name: offer.title,
      price: offer.price,
      category: 'offer' as const,
      isQuote: offer.price === 'Sur devis',
      description: offer.description
    });
  };

  const handleAddModuleToCart = (module: any) => {
    addToCart({
      id: module.id,
      name: module.name,
      price: module.price,
      category: 'service' as const,
      isQuote: true,
      description: module.description
    });
  };

  const toggleModule = (moduleId: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const getFilteredModules = () => {
    if (!selectedOffer) return services;
    const offer = offers.find(o => o.id === selectedOffer);
    return services.filter(service => offer?.compatibleModules.includes(service.id));
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    
    let whatsappMessage = `Bonjour, je suis intéressé(e) par :\n`;
    
    if (selectedOffer) {
      const offer = offers.find(o => o.id === selectedOffer);
      whatsappMessage += `- Offre : ${offer?.title}\n`;
    }
    
    if (selectedModules.length > 0) {
      whatsappMessage += `- Modules : ${selectedModules.map(id => {
        const selectedService = services.find(s => s.id === id);
        return selectedService?.name;
      }).join(', ')}\n`;
    }
    
    whatsappMessage += `\nMes informations :\n`;
    whatsappMessage += `Nom : ${contactInfo.name}\n`;
    whatsappMessage += `Email : ${contactInfo.email}\n`;
    whatsappMessage += `Téléphone : ${contactInfo.phone}\n`;
    
    if (contactInfo.message) {
      whatsappMessage += `Message : ${contactInfo.message}\n`;
    }

    if (hasStudentOffer) {
      whatsappMessage += `\nInformations étudiant :\n`;
      whatsappMessage += `École : ${studentInfo.school}\n`;
      whatsappMessage += `Année : ${studentInfo.year}\n`;
      whatsappMessage += `Cursus : ${studentInfo.diploma}\n`;
    }

    const whatsappUrl = `https://wa.me/33613859073?text=${encodeURIComponent(whatsappMessage)}`;
    
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
    
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Nos <span className="gradient-text">Accompagnements</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Choisissez l'accompagnement qui correspond à votre besoin
            </p>
            <div className="bg-[#1a1a19]/50 rounded-xl p-6 max-w-4xl mx-auto border border-white/10">
              <p className="text-gray-300 text-lg">
                Nos offres sont pensées pour s'adapter à votre niveau d'avancement et vos objectifs de croissance. 
                Personnalisez votre accompagnement avec nos modules complémentaires.
              </p>
            </div>
          </motion.div>

          {/* Navigation d'ancrage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>Nos Offres</span>
            </button>
            <button
              onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Modules Complémentaires</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Offres Section */}
      <section id="offers" className="py-20">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Nos <span className="gradient-text">Offres d'Accompagnement</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trois niveaux d'accompagnement pour répondre à tous vos besoins de transformation digitale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`card group hover:scale-105 cursor-pointer flex flex-col h-full ${
                  selectedOffer === offer.id ? 'ring-2 ring-red-500' : ''
                }`}
                onClick={() => setSelectedOffer(selectedOffer === offer.id ? null : offer.id)}
              >
                {/* Header */}
                <div className={`${offer.color} p-8 rounded-t-xl mb-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <offer.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-full">
                      <span className="text-white text-sm font-medium">{offer.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
                  <p className="text-white/90 text-sm mb-4 italic">{offer.slogan}</p>
                  <div className="text-4xl font-bold text-white mb-2">{offer.price}</div>
                  <p className="text-white/90 text-sm">{offer.description}</p>
                </div>

                {/* Features */}
                <div className="px-6 pb-6 flex-1">
                  <h4 className="font-semibold text-gray-100 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Inclus dans l'accompagnement :</span>
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddOfferToCart(offer);
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

      {/* Modules Complémentaires Section */}
      <section id="modules" className="py-20 gradient-bg">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              <span className="gradient-text">Personnalisez</span> votre accompagnement
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
              Ajoutez des modules complémentaires pour enrichir votre offre
            </p>
            {selectedOffer && (
              <p className="text-sm text-gray-500">
                Modules compatibles avec l'offre sélectionnée
              </p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {getFilteredModules().map((service, index) => {
              const ServiceIcon = service.icon || Target;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative bg-[#1a1a19] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
                    ${selectedModules.includes(service.id) 
                      ? 'ring-2 ring-green-500 shadow-lg shadow-green-500/20 scale-105' 
                      : 'hover:scale-105 border border-white/10 hover:border-white/20'
                    }`}
                  onClick={() => toggleModule(service.id)}
                >
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${service.color || 'from-red-600 to-red-800'}`} />
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Icon and Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.color || 'from-red-600 to-red-800'} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-[#1a1a19] rounded-xl flex items-center justify-center">
                          <ServiceIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {selectedModules.includes(service.id) ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-green-500 rounded-full p-1.5"
                        >
                          <CheckCircle className="w-5 h-5 text-white" />
                        </motion.div>
                      ) : (
                        <div className="bg-white/5 rounded-full p-1.5 group-hover:bg-white/10 transition-colors">
                          <Plus className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      )}
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[3rem]">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6 space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className={`w-1 h-1 rounded-full mt-2 bg-gradient-to-r ${service.color || 'from-red-600 to-red-800'}`} />
                          <span className="text-xs text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">À partir de</p>
                        <span className={`text-xl font-bold bg-gradient-to-r ${service.color || 'from-red-600 to-red-800'} bg-clip-text text-transparent`}>
                          {service.price}
                        </span>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddModuleToCart(service);
                        }}
                        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 bg-gradient-to-r ${service.color || 'from-red-600 to-red-800'} text-white shadow-lg`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color || 'from-red-600 to-red-800'} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </motion.div>
              );
            })}
          </div>

          {/* CTA Final */}
          {selectedOffer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <div className="bg-[#1a1a19]/50 rounded-xl p-8 max-w-2xl mx-auto border border-white/10">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Construire mon accompagnement</h3>
                <p className="text-gray-400 mb-6">
                  Vous avez sélectionné une offre et {selectedModules.length} module{selectedModules.length > 1 ? 's' : ''} complémentaire{selectedModules.length > 1 ? 's' : ''}
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <span>Demander un devis personnalisé</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Shopping Cart */}
      <ShoppingCartComponent />

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1a1a19] rounded-xl w-full max-w-lg max-h-[90vh] flex flex-col"
          >
            {/* Header fixe */}
            <div className="p-6 border-b border-white/10 flex-shrink-0">
              <h3 className="text-2xl font-bold text-center text-gray-100">Formulaire de Contact</h3>
            </div>
            
            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
            
              <form id="contact-form" onSubmit={handleSubmitContact} className="space-y-4">
              {/* Contact Method Selection */}
              <div className="space-y-3">
                <label className="form-label">Méthode de contact préférée :</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={contactMethod === 'email'}
                      onChange={(e) => setContactMethod(e.target.value as any)}
                      className="text-red-600"
                    />
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">Email</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="call"
                      checked={contactMethod === 'call'}
                      onChange={(e) => setContactMethod(e.target.value as any)}
                      className="text-red-600"
                    />
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">Appel téléphonique</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="appointment"
                      checked={contactMethod === 'appointment'}
                      onChange={(e) => setContactMethod(e.target.value as any)}
                      className="text-red-600"
                    />
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">Rendez-vous de 15 min</span>
                  </label>
                </div>
              </div>

              {/* Appointment Scheduling */}
              {contactMethod === 'appointment' && (
                <div className="space-y-3">
                  <label className="form-label">Choisissez votre créneau :</label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="input-field"
                      required
                    />
                    <select
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="input-field"
                      required
                    >
                      <option value="">Heure</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Votre nom complet"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                  className="input-field"
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  className="input-field"
                  required
                />
                <input
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                  className="input-field"
                  required
                />
                
                {/* Champs spécifiques aux offres étudiantes */}
                {hasStudentOffer && (
                  <>
                    <input
                      type="text"
                      placeholder="École / Université *"
                      value={studentInfo.school}
                      onChange={(e) => setStudentInfo({...studentInfo, school: e.target.value})}
                      className="input-field"
                      required
                    />
                    <select
                      value={studentInfo.year}
                      onChange={(e) => setStudentInfo({...studentInfo, year: e.target.value})}
                      className="input-field"
                      required
                    >
                      <option value="">Année d'étude *</option>
                      <option value="L1">Licence 1ère année</option>
                      <option value="L2">Licence 2ème année</option>
                      <option value="L3">Licence 3ème année</option>
                      <option value="M1">Master 1ère année</option>
                      <option value="M2">Master 2ème année</option>
                      <option value="Doctorat">Doctorat</option>
                      <option value="Autre">Autre</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Cursus / Filière *"
                      value={studentInfo.diploma}
                      onChange={(e) => setStudentInfo({...studentInfo, diploma: e.target.value})}
                      className="input-field"
                      required
                    />
                  </>
                )}
                
                <textarea
                  placeholder="Votre message (optionnel)"
                  value={contactInfo.message}
                  onChange={(e) => setContactInfo({...contactInfo, message: e.target.value})}
                  className="input-field h-24 resize-none"
                  rows={3}
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 btn-secondary"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  form="contact-form"
                  className="flex-1 btn-primary flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Envoyer</span>
                </button>
              </div>
              </form>
            </div>
            
            {/* Footer fixe avec boutons */}
            <div className="p-6 border-t border-white/10 flex-shrink-0">
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 btn-secondary"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  form="contact-form"
                  className="flex-1 btn-primary flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Envoyer</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}