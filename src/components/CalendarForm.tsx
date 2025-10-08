'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

interface BookingData {
  name: string;
  email: string;
  reason: string;
  date: string;
  time: string;
}

interface AvailableSlots {
  date: string;
  availableSlots: string[];
  available: boolean;
}

const CalendarForm: React.FC = () => {
  const [step, setStep] = useState<'form' | 'confirmation' | 'error'>('form');
  const [loading, setLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '',
    email: '',
    reason: '',
    date: '',
    time: ''
  });

  const reasons = [
    { value: 'audit', label: 'Audit gratuit' },
    { value: 'accompagnement', label: 'Accompagnement' },
    { value: 'etudiant', label: 'Offre Étudiante' },
    { value: 'autre', label: 'Autre' }
  ];

  // Génération des dates disponibles (30 prochains jours)
  const getAvailableDates = () => {
    const dates = [];
    const today = dayjs();
    
    for (let i = 1; i <= 30; i++) {
      const date = today.add(i, 'day');
      
      // Exclure les dimanches (day = 0)
      if (date.day() !== 0) {
        dates.push({
          value: date.format('YYYY-MM-DD'),
          label: date.locale('fr').format('dddd, D MMMM')
        });
      }
    }
    
    return dates;
  };

  // Récupération des créneaux disponibles
  const fetchAvailableSlots = async (date: string) => {
    if (!date) return;
    
    setLoadingSlots(true);
    try {
      const response = await fetch(`/api/book-meeting?date=${date}`);
      const data: AvailableSlots = await response.json();
      
      if (data.available) {
        setAvailableSlots(data.availableSlots);
      } else {
        setAvailableSlots([]);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des créneaux:', error);
      setAvailableSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  // Gestion du changement de date
  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setBookingData({ ...bookingData, date, time: '' });
    fetchAvailableSlots(date);
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/book-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok) {
        setStep('confirmation');
      } else {
        setStep('error');
      }
    } catch (error) {
      console.error('Erreur lors de la réservation:', error);
      setStep('error');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep('form');
    setBookingData({
      name: '',
      email: '',
      reason: '',
      date: '',
      time: ''
    });
    setSelectedDate('');
    setAvailableSlots([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-16 bg-[#A51A1A] rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <Calendar className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-100 mb-2">Prendre rendez-vous</h3>
          <p className="text-gray-400">Réservez votre créneau de 30 minutes gratuit</p>
        </div>

        <AnimatePresence mode="wait">
          {step === 'form' && (
            <motion.form
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Informations personnelles */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-100 flex items-center">
                  <User className="w-5 h-5 mr-2 text-red-400" />
                  Vos informations
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-xl text-[#EAEAEA] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom et prénom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-xl text-[#EAEAEA] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Raison du rendez-vous */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Raison du rendez-vous *
                </label>
                <select
                  value={bookingData.reason}
                  onChange={(e) => setBookingData({ ...bookingData, reason: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-xl text-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Sélectionnez une raison</option>
                  {reasons.map((reason) => (
                    <option key={reason.value} value={reason.value}>
                      {reason.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sélection de date */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Date *
                </label>
                <select
                  value={bookingData.date}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1a1a19]/50 border border-white/10 rounded-xl text-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Sélectionnez une date</option>
                  {getAvailableDates().map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sélection d'heure */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Heure *
                  </label>
                  
                  {loadingSlots ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-6 h-6 text-red-500 animate-spin mr-2" />
                      <span className="text-gray-400">Chargement des créneaux...</span>
                    </div>
                  ) : availableSlots.length > 0 ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {availableSlots.map((slot) => (
                        <motion.button
                          key={slot}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setBookingData({ ...bookingData, time: slot })}
                          className={`p-3 rounded-xl font-medium transition-all duration-300 ${
                            bookingData.time === slot
                              ? 'bg-[#A51A1A] text-white'
                              : 'bg-[#1a1a19]/50 border border-white/10 text-[#EAEAEA] hover:bg-white/5'
                          }`}
                        >
                          {slot}
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <AlertCircle className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <p className="text-gray-400">Aucun créneau disponible pour cette date</p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Bouton de soumission */}
              <motion.button
                type="submit"
                disabled={loading || !bookingData.name || !bookingData.email || !bookingData.reason || !bookingData.date || !bookingData.time}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full bg-[#A51A1A] hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Confirmation en cours...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>Confirmer le rendez-vous</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          )}

          {step === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                ✅ Votre rendez-vous a bien été confirmé
              </h3>
              
              <p className="text-gray-400 mb-6">
                Vous recevrez une invitation dans votre boîte mail.
              </p>
              
              <div className="bg-[#1a1a19]/50 rounded-xl p-4 mb-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Nom:</span>
                    <span className="text-gray-100">{bookingData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-gray-100">{bookingData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-gray-100">
                      {dayjs(bookingData.date).locale('fr').format('dddd, D MMMM YYYY')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Heure:</span>
                    <span className="text-gray-100">{bookingData.time}</span>
                  </div>
                </div>
              </div>
              
              <motion.button
                onClick={resetForm}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1a1a19] hover:bg-[#202020] text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300"
              >
                Prendre un autre rendez-vous
              </motion.button>
            </motion.div>
          )}

          {step === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <AlertCircle className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                ❌ Une erreur est survenue
              </h3>
              
              <p className="text-gray-400 mb-6">
                Merci de réessayer dans quelques instants.
              </p>
              
              <motion.button
                onClick={resetForm}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#A51A1A] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300"
              >
                Réessayer
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CalendarForm;
