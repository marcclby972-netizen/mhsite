'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, GraduationCap, Send, MapPin, Clock, MessageCircle, CheckCircle, ArrowRight, Users, Target } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'booking' | 'contact'>('booking');

  const contactMethods = [
    {
      id: 'appointment',
      title: 'Rendez-vous gratuit',
      description: '30 minutes pour comprendre vos besoins',
      icon: Calendar,
      color: 'bg-red-500',
      popular: true
    },
    {
      id: 'call',
      title: 'Appel direct',
      description: 'Discutons de votre projet immédiatement',
      icon: Phone,
      color: 'bg-red-600',
      popular: false
    },
    {
      id: 'email',
      title: 'Email détaillé',
      description: 'Décrivez votre projet par écrit',
      icon: Mail,
      color: 'bg-red-700',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Diagnostic gratuit',
      description: 'Analyse de votre situation actuelle'
    },
    {
      icon: Users,
      title: 'Expert dédié',
      description: 'Accompagnement personnalisé'
    },
    {
      icon: Clock,
      title: 'Réponse rapide',
      description: 'Retour sous 24h maximum'
    }
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Transformons votre <span className="gradient-text">projet</span> ensemble
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Prêt à augmenter votre chiffre d'affaires de 180% ? Parlons de votre transformation digitale
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card p-6"
                >
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-100 mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-12">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="bg-[#1a1a19]/50 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab('booking')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === 'booking'
                        ? 'bg-[#A51A1A] text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Prendre rendez-vous</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab('contact')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === 'contact'
                        ? 'bg-[#A51A1A] text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Nous contacter</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'booking' ? (
                <div>
                  <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-xl p-6 mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                        <Calendar className="w-4 h-4 text-black" />
                      </div>
                      <h3 className="text-lg font-bold text-yellow-400">Système de Réservation</h3>
                    </div>
                    <p className="text-yellow-100 mb-3">
                      Le système de réservation automatique est en cours de configuration.
                    </p>
                    <p className="text-yellow-200 text-sm">
                      En attendant, vous pouvez nous contacter directement par téléphone ou email.
                    </p>
                  </div>
                  <BookingForm />
                </div>
              ) : (
                <div className="bg-[#151514]/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">Contactez-nous directement</h3>
                    <p className="text-gray-400">Choisissez votre méthode de contact préférée</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={method.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="card p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer"
                        onClick={() => {
                          if (method.id === 'appointment') {
                            setActiveTab('booking');
                          } else if (method.id === 'call') {
                            window.open('tel:0781229336', '_self');
                          } else if (method.id === 'email') {
                            window.open('mailto:marc.hemat@mhadvisory.fr', '_self');
                          }
                        }}
                      >
                        {method.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                              Recommandé
                            </span>
                          </div>
                        )}
                        
                        <div className={`${method.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                          <method.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-100 mb-3">{method.title}</h3>
                        <p className="text-gray-400 mb-4">{method.description}</p>
                        
                        <div className="text-red-400 font-semibold text-center break-words">
                          {method.id === 'appointment' && 'Réserver maintenant'}
                          {method.id === 'call' && '07 81 22 93 36'}
                          {method.id === 'email' && 'marc.hemat@mhadvisory.fr'}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* WhatsApp Contact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="bg-[#1a1a19]/50 rounded-xl p-6 border border-white/10"
                  >
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-gray-100 mb-2">WhatsApp</h4>
                      <p className="text-gray-400 mb-4">Pour un échange rapide et informel</p>
                      <motion.a
                        href="https://wa.me/33613859073"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>06 13 85 90 73</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Autres moyens de nous joindre</h2>
              <p className="text-gray-400">Vous préférez nous contacter directement ? Voici nos coordonnées</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-4">Appel direct</h3>
                <p className="text-gray-400 mb-4">Pour un échange immédiat</p>
                <a
                  href="tel:0781229336"
                  className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors"
                >
                  07 81 22 93 36
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-4">WhatsApp</h3>
                <p className="text-gray-400 mb-4">Pour un échange rapide et informel</p>
                <a
                  href="https://wa.me/33613859073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors"
                >
                  06 13 85 90 73
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactPage;