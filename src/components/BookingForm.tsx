'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface BookingData {
  name: string;
  email: string;
  motif: string;
  date: Date | null;
  time: string;
}

const MOTIFS = [
  'Audit gratuit',
  'Accompagnement stratégique',
  'Branding & Identité visuelle',
  'Webdesign & Développement',
  'Marketing digital',
  'Formation & Conseil',
  'Autre'
];

const TIME_SLOTS = [
  '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00'
];

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    motif: '',
    date: null,
    time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (field: keyof BookingData, value: string | Date | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.motif && formData.date && formData.time;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          motif: formData.motif,
          date: formData.date?.toISOString().split('T')[0],
          time: formData.time
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setSuccessMessage(`Rendez-vous confirmé pour le ${formData.date?.toLocaleDateString('fr-FR')} à ${formData.time}`);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            motif: '',
            date: null,
            time: ''
          });
          setIsSuccess(false);
          setSuccessMessage('');
        }, 5000);
      } else {
        setError(result.error || 'Erreur lors de la réservation');
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isWeekend = (date: Date) => {
    return date.getDay() === 0; // Dimanche
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-gray-800"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Calendar className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-2 font-montserrat">
            Réserver un rendez-vous
          </h2>
          <p className="text-gray-400">
            Choisissez un créneau disponible pour votre consultation
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Nom */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="Votre nom complet"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Adresse e-mail *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              {/* Motif */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Motif du rendez-vous *
                </label>
                <select
                  value={formData.motif}
                  onChange={(e) => handleInputChange('motif', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="">Sélectionnez un motif</option>
                  {MOTIFS.map((motif) => (
                    <option key={motif} value={motif} className="bg-gray-800">
                      {motif}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date et Heure */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date *
                  </label>
                  <DatePicker
                    selected={formData.date}
                    onChange={(date) => handleInputChange('date', date)}
                    filterDate={(date) => !isWeekend(date) && !isPastDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Sélectionnez une date"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    wrapperClassName="w-full"
                    required
                  />
                </div>

                {/* Heure */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Heure *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Sélectionnez une heure</option>
                    {TIME_SLOTS.map((time) => (
                      <option key={time} value={time} className="bg-gray-800">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message d'erreur */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-400"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {error}
                </motion.div>
              )}

              {/* Bouton de soumission */}
              <motion.button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isFormValid() && !isSubmitting
                    ? 'bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-500/25'
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Réservation en cours...
                  </div>
                ) : (
                  'Confirmer le rendez-vous'
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
                Rendez-vous confirmé !
              </h3>
              
              <p className="text-green-400 text-lg mb-6">
                {successMessage}
              </p>
              
              <p className="text-gray-400 text-sm">
                Un e-mail de confirmation vous sera envoyé sous peu.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

