'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state, dispatch } = useCart();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Étudiants', href: '/etudiants' },
    { name: 'Branding', href: '/offres' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#151514]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
        : 'bg-transparent backdrop-blur-md'
    }`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 active:scale-95">
            <img 
              src="/logo-mh-advisory.png" 
              alt="MH Advisory" 
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-[#EAEAEA] hover:text-white transition-all duration-300 font-medium text-sm px-3 py-2 rounded-lg hover:bg-white/5 active:scale-95 active:bg-white/10 ${
                  isActive(item.href) ? "text-white bg-white/10" : ""
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-2 flex-shrink-0">
            
            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-[#EAEAEA] hover:text-white transition-all duration-300 ml-4 rounded-lg hover:bg-white/5 active:scale-95 active:bg-white/10"
            >
              <ShoppingCart className="w-5 h-5" />
              
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A51A1A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {state.items.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#EAEAEA] hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 active:scale-95 active:bg-white/10"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden py-4 border-t border-white/10 mt-2"
            >
              <nav className="flex flex-col space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center text-[#EAEAEA] hover:text-white transition-all duration-300 py-3 px-4 font-medium rounded-lg hover:bg-white/5 ${
                        isActive(item.href) ? "text-white bg-white/10" : ""
                      }`}
                    >
                      {item.name}
                      {isActive(item.href) && (
                        <motion.div
                          className="ml-2 w-2 h-2 bg-red-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="pt-4 mt-4 border-t border-white/10"
                >
                  <div className="flex items-center space-x-3 text-sm text-[#A3A3A3]">
                    <Phone className="w-4 h-4" />
                    <span>07 81 22 93 36</span>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
