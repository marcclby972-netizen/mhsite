'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart as ShoppingCartIcon, Trash2, ExternalLink } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ShoppingCart: React.FC = () => {
  const { state, dispatch, checkout } = useCart();

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  const getTotalPrice = () => {
    return state.items
      .filter(item => item.category === 'offer' && !item.isQuote)
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^\d]/g, ''));
        return total + (isNaN(price) ? 0 : price);
      }, 0);
  };

  const hasStudentOffer = state.items.some(item => item.category === 'student');

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#151514]/95 backdrop-blur-md border-l border-white/10 z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <ShoppingCartIcon className="w-6 h-6 text-red-600" />
                  <h2 className="text-xl font-bold text-gray-100">Panier</h2>
                </div>
                <button
                  onClick={closeCart}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-100" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {state.items.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCartIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Votre panier est vide</p>
                  </div>
                ) : (
                  state.items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="card p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-100 mb-1">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-gray-400 mb-2">
                              {item.description}
                            </p>
                          )}
                          <div className="flex items-center space-x-2">
                            {item.isQuote ? (
                              <span className="text-lg font-bold text-red-600">
                                Sur devis
                              </span>
                            ) : (
                              <span className="text-lg font-bold text-red-600">
                                {item.price}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-300"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Total & Actions */}
              {state.items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-t border-white/10 pt-6"
                >
                  <div className="space-y-4">
                    {/* Total */}
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-100">Total</span>
                      <div className="text-right">
                        {hasStudentOffer && (
                          <p className="text-sm text-gray-400">+ Offre étudiant (sur devis)</p>
                        )}
                        <p className="text-xl font-bold text-red-600">
                          {getTotalPrice() > 0 ? `${getTotalPrice()}€` : 'Sur devis'}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={checkout}
                        className="w-full btn-primary flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Finaliser la commande</span>
                      </motion.button>
                      
                      <button
                        onClick={clearCart}
                        className="w-full btn-secondary text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        Vider le panier
                      </button>
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <p className="text-sm text-gray-400">
                        Les offres étudiantes sont sur devis personnalisé
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;

