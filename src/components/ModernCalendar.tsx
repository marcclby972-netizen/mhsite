'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, User, Mail, Phone, GraduationCap, FileText, ArrowLeft } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');

interface ModernCalendarProps {
  onDateSelect: (bookingData: BookingData) => void;
  onClose: () => void;
}

interface BookingData {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  school?: string;
  studyYear?: string;
  projectDescription?: string;
}

const ModernCalendar: React.FC<ModernCalendarProps> = ({ onDateSelect, onClose }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('24h');
  const [currentStep, setCurrentStep] = useState<'calendar' | 'form'>('calendar');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  // Formulaire de contact
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    school: '',
    studyYear: '',
    projectDescription: ''
  });

  // Heures disponibles
  const availableTimes = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '17:30', '19:00'
  ];

  // Générer les jours du mois
  const generateDays = () => {
    const startOfMonth = currentMonth.startOf('month');
    const endOfMonth = currentMonth.endOf('month');
    const startOfWeek = startOfMonth.startOf('week');
    const endOfWeek = endOfMonth.endOf('week');

    const days = [];
    let day = startOfWeek;

    while (day.isBefore(endOfWeek) || day.isSame(endOfWeek, 'day')) {
      const isCurrentMonth = day.isSame(currentMonth, 'month');
      const isToday = day.isSame(dayjs(), 'day');
      const isPast = day.isBefore(dayjs(), 'day');
      const isSelected = selectedDate === day.format('YYYY-MM-DD');
      const hasAvailability = availableTimes.length > 0;

      days.push({
        date: day.format('YYYY-MM-DD'),
        day: day.date(),
        isCurrentMonth,
        isToday,
        isPast,
        isSelected,
        hasAvailability
      });

      day = day.add(1, 'day');
    }

    return days;
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep('form');
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      setIsSubmitting(true);
      setError('');
      
      try {
        // Envoyer les données au serveur pour créer l'événement Google Calendar
        const response = await fetch('/api/calendar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            motif: formData.projectDescription || 'Consultation',
            date: selectedDate,
            time: selectedTime
          }),
        });

        const result = await response.json();

        if (response.ok) {
          onDateSelect({
            date: selectedDate,
            time: selectedTime,
            ...formData
          });
        } else {
          setError(result.error || 'Erreur lors de la réservation');
        }
      } catch (error) {
        setError('Erreur de connexion. Veuillez réessayer.');
        console.error('Erreur:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatTime = (time: string) => {
    if (timeFormat === '12h') {
      const [hours, minutes] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 || 12;
      return `${displayHour}:${minutes} ${ampm}`;
    }
    return time;
  };

  const days = generateDays();
  const weekDays = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#1a1a19] rounded-2xl border-2 border-dashed border-yellow-500/30 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-100 flex items-center">
            <Clock className="w-6 h-6 text-yellow-400 mr-3" />
            {currentStep === 'calendar' ? 'Sélectionner un créneau' : 'Vos informations'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Indicateur d'étape */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === 'calendar' ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-gray-300'
            }`}>
              1
            </div>
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === 'form' ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-gray-300'
            }`}>
              2
            </div>
          </div>
        </div>

        {currentStep === 'calendar' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendrier */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-100">
                  {currentMonth.format('MMMM YYYY')}
                </h4>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentMonth(currentMonth.subtract(1, 'month'))}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => setCurrentMonth(currentMonth.add(1, 'month'))}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Jours de la semaine */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Grille du calendrier */}
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => !day.isPast && day.hasAvailability && handleDateClick(day.date)}
                    disabled={day.isPast || !day.hasAvailability}
                    className={`
                      h-10 text-sm rounded-lg transition-all duration-200
                      ${day.isCurrentMonth ? 'text-gray-100' : 'text-gray-600'}
                      ${day.isToday ? 'bg-yellow-500 text-black font-bold' : ''}
                      ${day.isSelected ? 'bg-yellow-400 text-black font-bold' : ''}
                      ${!day.isPast && day.hasAvailability ? 'hover:bg-white/10' : ''}
                      ${day.isPast || !day.hasAvailability ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </div>

            {/* Créneaux horaires */}
            <div>
              {selectedDate ? (
                <div>
                  <h4 className="text-lg font-semibold text-gray-100 mb-4">
                    Créneaux disponibles - {dayjs(selectedDate).format('dddd, D MMMM')}
                  </h4>
                  
                  {/* Toggle format heure */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-700 rounded-lg p-1">
                      <button
                        onClick={() => setTimeFormat('12h')}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          timeFormat === '12h' ? 'bg-yellow-500 text-black' : 'text-gray-400'
                        }`}
                      >
                        12h
                      </button>
                      <button
                        onClick={() => setTimeFormat('24h')}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          timeFormat === '24h' ? 'bg-yellow-500 text-black' : 'text-gray-400'
                        }`}
                      >
                        24h
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeClick(time)}
                        className={`
                          p-3 rounded-lg text-sm font-medium transition-all duration-200
                          ${selectedTime === time 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }
                        `}
                      >
                        {formatTime(time)}
                      </button>
                    ))}
                  </div>

                  {selectedTime && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={handleConfirm}
                      className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200"
                    >
                      Continuer
                    </motion.button>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400 text-center">
                    Sélectionnez une date pour voir les créneaux disponibles
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Formulaire de contact */
          <div>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setCurrentStep('calendar')}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au calendrier
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    École/Université
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                    placeholder="Nom de votre école"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Année d'étude
                  </label>
                  <select
                    name="studyYear"
                    value={formData.studyYear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  >
                    <option value="">Sélectionnez votre année</option>
                    <option value="L1">L1 - 1ère année</option>
                    <option value="L2">L2 - 2ème année</option>
                    <option value="L3">L3 - 3ème année</option>
                    <option value="M1">M1 - Master 1</option>
                    <option value="M2">M2 - Master 2</option>
                    <option value="Doctorat">Doctorat</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Description de votre projet
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                  placeholder="Décrivez brièvement votre projet ou vos besoins..."
                />
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-100 mb-2">Récapitulatif du rendez-vous</h4>
                <p className="text-gray-300">
                  <strong>Date :</strong> {dayjs(selectedDate).format('dddd, D MMMM YYYY')}
                </p>
                <p className="text-gray-300">
                  <strong>Heure :</strong> {selectedTime}
                </p>
              </div>

              {/* Message d'erreur */}
              {error && (
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500'
                }`}
              >
                {isSubmitting ? 'Réservation en cours...' : 'Confirmer le rendez-vous'}
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ModernCalendar;