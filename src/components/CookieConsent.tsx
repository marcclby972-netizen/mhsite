'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('mh-advisory-cookie-consent');
      if (!consent) {
        setIsVisible(true);
      }
    }
  }, []);

  const acceptCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mh-advisory-cookie-consent', 'accepted');
    }
    setIsVisible(false);
  };

  const rejectCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mh-advisory-cookie-consent', 'rejected');
    }
    setIsVisible(false);
  };

  if (!isMounted || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 z-50 glass rounded-xl p-4 md:p-6 max-w-2xl mx-auto"
      >
        <div className="flex items-start space-x-4">
          <Cookie className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Gestion des Cookies
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              En continuant à naviguer, vous acceptez notre utilisation des cookies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={acceptCookies}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Check className="w-4 h-4" />
                <span>Accepter</span>
              </motion.button>
              
              <button
                onClick={rejectCookies}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <X className="w-4 h-4" />
                <span>Refuser</span>
              </button>
              
              <a
                href="/cookies"
                className="btn-secondary text-center"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;

