'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CookiesPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              Politique de <span className="gradient-text">Cookies</span>
            </h1>
            <p className="text-xl text-gray-400">
              Comment nous utilisons les cookies sur notre site
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Qu'est-ce qu'un cookie ?
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone 
                    lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences 
                    pendant une période donnée.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Types de cookies utilisés
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                      Cookies strictement nécessaires
                    </h3>
                    <p className="text-gray-400">
                      Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés. 
                      Ils incluent les cookies de session et de sécurité.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                      Cookies de performance
                    </h3>
                    <p className="text-gray-400">
                      Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site 
                      en collectant des informations de manière anonyme.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                      Cookies de fonctionnalité
                    </h3>
                    <p className="text-gray-400">
                      Ces cookies permettent au site de se souvenir de vos choix et de fournir des fonctionnalités 
                      améliorées et personnalisées.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Cookies utilisés sur notre site
                </h2>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 text-gray-100 font-semibold">Nom</th>
                          <th className="text-left py-2 text-gray-100 font-semibold">Type</th>
                          <th className="text-left py-2 text-gray-100 font-semibold">Durée</th>
                          <th className="text-left py-2 text-gray-100 font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-400">
                        <tr className="border-b border-white/5">
                          <td className="py-2">mh-advisory-cart</td>
                          <td className="py-2">Fonctionnel</td>
                          <td className="py-2">Session</td>
                          <td className="py-2">Sauvegarde du contenu du panier</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2">mh-advisory-cookie-consent</td>
                          <td className="py-2">Fonctionnel</td>
                          <td className="py-2">1 an</td>
                          <td className="py-2">Mémorise votre choix concernant les cookies</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2">_ga</td>
                          <td className="py-2">Analytique</td>
                          <td className="py-2">2 ans</td>
                          <td className="py-2">Google Analytics - Distinction des utilisateurs</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2">_gid</td>
                          <td className="py-2">Analytique</td>
                          <td className="py-2">24h</td>
                          <td className="py-2">Google Analytics - Distinction des utilisateurs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Gestion de vos cookies
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Vous pouvez contrôler et gérer les cookies de plusieurs façons :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Via les paramètres de votre navigateur</li>
                    <li>Via notre bannière de cookies</li>
                    <li>En nous contactant directement</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Paramètres du navigateur
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    La plupart des navigateurs vous permettent de :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Voir quels cookies sont stockés</li>
                    <li>Supprimer les cookies individuellement ou tous à la fois</li>
                    <li>Bloquer les cookies de sites tiers</li>
                    <li>Bloquer tous les cookies</li>
                    <li>Supprimer tous les cookies à la fermeture du navigateur</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Cookies tiers
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Notre site peut contenir des cookies provenant de services tiers :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Google Analytics :</strong> Pour analyser l'utilisation du site</li>
                    <li><strong>Google Fonts :</strong> Pour l'affichage des polices</li>
                    <li><strong>Vercel :</strong> Pour l'hébergement et les performances</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Contact
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Si vous avez des questions concernant notre utilisation des cookies, 
                    vous pouvez nous contacter :
                  </p>
                  <ul className="list-none space-y-2">
                    <li><strong>Email :</strong> marc.hemat@mhadvisory.fr</li>
                    <li><strong>Téléphone :</strong> 07 81 22 93 36</li>
                    <li><strong>WhatsApp :</strong> 06 13 85 90 73</li>
                    <li><strong>Adresse :</strong> Ile de France, Seine-et-Marne, Oissery 77178</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Modifications
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Cette politique de cookies peut être modifiée à tout moment. 
                    Les modifications prendront effet dès leur publication sur cette page.
                  </p>
                  <p>
                    <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;

