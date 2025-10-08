'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MentionsLegalesPage: React.FC = () => {
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
              Mentions <span className="gradient-text">Légales</span>
            </h1>
            <p className="text-xl text-gray-400">
              Informations légales concernant MH Advisory
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
                  Éditeur du site
                </h2>
                <div className="space-y-2 text-gray-400">
                  <p><strong>Nom d'usage :</strong> MH Advisory</p>
                  <p><strong>SIREN :</strong> 942 946 419</p>
                  <p><strong>Date d'immatriculation au RNE :</strong> 07/04/2025</p>
                  <p><strong>Début d'activité :</strong> 06/04/2025</p>
                  <p><strong>Adresse :</strong> Ile de France, Seine-et-Marne, Oissery 77178</p>
                  <p><strong>Email :</strong> marc.hemat@mhadvisory.fr</p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Directeur de publication
                </h2>
                <div className="space-y-2 text-gray-400">
                  <p><strong>Nom :</strong> Marc C Hemat</p>
                  <p><strong>Qualité :</strong> Entrepreneur & Fondateur de MH Advisory</p>
                  <p><strong>Email :</strong> marc.hemat@mhadvisory.fr</p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Activité principale
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    <strong>Description :</strong> Accompagnement digital des entreprises : création et refonte de sites internet, amélioration de l'identité visuelle, conseil en stratégie numérique, mise en place de solutions d'automatisation et d'outils de gestion pour optimiser les performances en ligne.
                  </p>
                  <p>
                    <strong>Code APE :</strong> 6202A - Conseil en systèmes et logiciels informatiques
                  </p>
                  <p>
                    <strong>Nature juridique :</strong> Libérale non règlementée
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Informations de contact
                </h2>
                <div className="space-y-2 text-gray-400">
                  <p><strong>Adresse complète :</strong> Ile de France, Seine-et-Marne, Oissery 77178</p>
                  <p><strong>Email :</strong> marc.hemat@mhadvisory.fr</p>
                  <p><strong>Téléphone :</strong> 07 81 22 93 36</p>
                  <p><strong>WhatsApp :</strong> 06 13 85 90 73</p>
                  <p><strong>Site web :</strong> https://mhadvisory.fr</p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Hébergement
                </h2>
                <div className="space-y-2 text-gray-400">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p><strong>Site web :</strong> https://vercel.com</p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Propriété intellectuelle
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  <p>
                    La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Protection des données personnelles
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
                  </p>
                  <p>
                    Pour exercer ce droit, contactez-nous à l'adresse : marc.hemat@mhadvisory.fr
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Cookies
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant à utiliser ce site, vous acceptez notre utilisation des cookies.
                  </p>
                  <p>
                    Pour plus d'informations, consultez notre <a href="/cookies" className="text-red-600 hover:underline">politique de cookies</a>.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Limitation de responsabilité
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                  </p>
                  <p>
                    Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse marc.hemat@mhadvisory.fr, en décrivant le problème de la manière la plus précise possible.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Droit applicable
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Tout litige en relation avec l'utilisation du site mhadvisory.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Melun (Seine-et-Marne).
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

export default MentionsLegalesPage;

