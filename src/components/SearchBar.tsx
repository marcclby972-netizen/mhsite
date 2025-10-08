'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Users, Palette, Phone } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: React.ComponentType<any>;
}

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchData: SearchResult[] = [
    {
      title: 'Services',
      description: 'Découvrez nos services d\'accompagnement digital',
      href: '/services',
      category: 'Pages',
      icon: FileText
    },
    {
      title: 'Branding',
      description: 'Offres d\'identité visuelle et design',
      href: '/offres',
      category: 'Pages',
      icon: Palette
    },
    {
      title: 'Étudiants',
      description: 'Offres spéciales pour les étudiants',
      href: '/etudiants',
      category: 'Pages',
      icon: Users
    },
    {
      title: 'Contact',
      description: 'Prenez rendez-vous ou contactez-nous',
      href: '/contact',
      category: 'Pages',
      icon: Phone
    },
    {
      title: 'FAQ',
      description: 'Questions fréquemment posées',
      href: '/faq',
      category: 'Support',
      icon: FileText
    },
    {
      title: 'Accompagnement Standard',
      description: '2 500€ - Idéal pour un lancement rapide',
      href: '/services#standard',
      category: 'Services',
      icon: FileText
    },
    {
      title: 'Accompagnement Amélioré',
      description: '4 500€ - Pour structurer votre offre',
      href: '/services#ameliore',
      category: 'Services',
      icon: FileText
    },
    {
      title: 'Identité Visuelle Standard',
      description: '700€ - 900€ - Identité de base',
      href: '/offres#standard',
      category: 'Services',
      icon: Palette
    },
    {
      title: 'Identité Visuelle Standard+',
      description: '1 000€ - 1 300€ - Solution complète',
      href: '/offres#standard-plus',
      category: 'Services',
      icon: Palette
    }
  ];

  const searchResults = (query: string): SearchResult[] => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    return searchData.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
    );
  };

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        const results = searchResults(query);
        setResults(results);
        setIsLoading(false);
      }, 300);
      
      return () => clearTimeout(timeoutId);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-[#EAEAEA] hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 active:scale-95 active:bg-white/10"
        title="Rechercher"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                {/* Search Input */}
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center space-x-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Rechercher un service, une page..."
                      className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                    />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  {isLoading ? (
                    <div className="p-8 text-center text-gray-400">
                      <div className="animate-spin w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                      Recherche en cours...
                    </div>
                  ) : results.length > 0 ? (
                    <div className="py-2">
                      {results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={result.href}
                            onClick={handleResultClick}
                            className="flex items-center p-4 hover:bg-gray-800/50 transition-colors group"
                          >
                            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-500/20 transition-colors">
                              <result.icon className="w-5 h-5 text-red-500" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-white font-medium group-hover:text-red-400 transition-colors">
                                {result.title}
                              </h3>
                              <p className="text-gray-400 text-sm mt-1">
                                {result.description}
                              </p>
                              <span className="inline-block mt-1 text-xs text-red-500 bg-red-500/10 px-2 py-1 rounded-full">
                                {result.category}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  ) : query.trim() ? (
                    <div className="p-8 text-center text-gray-400">
                      <Search className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                      <p>Aucun résultat trouvé pour "{query}"</p>
                      <p className="text-sm mt-2">Essayez avec d'autres mots-clés</p>
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-400">
                      <Search className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                      <p>Tapez pour rechercher...</p>
                      <p className="text-sm mt-2">Services, pages, offres...</p>
                    </div>
                  )}
                </div>

                {/* Quick Links */}
                {!query.trim() && (
                  <div className="p-4 border-t border-gray-800 bg-gray-800/30">
                    <p className="text-sm text-gray-400 mb-3">Recherches populaires :</p>
                    <div className="flex flex-wrap gap-2">
                      {['Services', 'Tarifs', 'Contact', 'FAQ'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBar;
