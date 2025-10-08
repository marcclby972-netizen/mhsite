'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ConditionsUtilisationPage: React.FC = () => {
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
              Conditions <span className="gradient-text">d'Utilisation</span>
            </h1>
            <p className="text-xl text-gray-400">
              Conditions d'utilisation du site internet MH Advisory
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
                  Article 1 - Objet
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Les présentes conditions d'utilisation régissent l'utilisation du site internet 
                    mhadvisory.fr (ci-après "le Site") édité par MH Advisory.
                  </p>
                  <p>
                    L'utilisation du Site implique l'acceptation pleine et entière des présentes 
                    conditions d'utilisation.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 2 - Accès au Site
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. 
                    Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, 
                    logiciels, connexion Internet, etc.) sont à sa charge.
                  </p>
                  <p>
                    MH Advisory se réserve le droit d'interrompre temporairement ou définitivement 
                    l'accès au Site pour des raisons de maintenance ou de mise à jour.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 3 - Utilisation du Site
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    L'utilisateur s'engage à utiliser le Site de manière conforme à sa destination 
                    et aux présentes conditions d'utilisation.
                  </p>
                  <p>
                    Il est notamment interdit :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>D'utiliser le Site à des fins illégales ou non autorisées</li>
                    <li>De porter atteinte aux droits de propriété intellectuelle</li>
                    <li>De diffuser des contenus illicites, diffamatoires ou offensants</li>
                    <li>De tenter de compromettre la sécurité du Site</li>
                    <li>D'utiliser des robots ou scripts automatisés</li>
                    <li>De collecter des données personnelles d'autres utilisateurs</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 4 - Contenu du Site
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Les informations présentes sur le Site sont fournies à titre informatif. 
                    MH Advisory s'efforce de maintenir ces informations à jour et exactes, 
                    mais ne peut garantir leur exhaustivité ou leur exactitude.
                  </p>
                  <p>
                    L'utilisateur reconnaît que les informations et services proposés sur le Site 
                    sont susceptibles d'être modifiés sans préavis.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 5 - Propriété Intellectuelle
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    L'ensemble des éléments du Site (textes, images, vidéos, logos, marques, etc.) 
                    sont protégés par le droit de la propriété intellectuelle et sont la propriété 
                    exclusive de MH Advisory ou de ses partenaires.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout 
                    ou partie des éléments du Site est interdite, sauf autorisation écrite préalable.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 6 - Liens Hypertextes
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Le Site peut contenir des liens vers d'autres sites internet. 
                    MH Advisory n'exerce aucun contrôle sur ces sites et décline toute responsabilité 
                    quant à leur contenu ou leur politique de confidentialité.
                  </p>
                  <p>
                    La création de liens vers le Site est autorisée sous réserve de ne pas porter 
                    atteinte à l'image de MH Advisory.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 7 - Protection des Données
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Le traitement des données personnelles collectées sur le Site est régi par 
                    notre <a href="/politique-confidentialite" className="text-red-600 hover:underline">Politique de Confidentialité</a>.
                  </p>
                  <p>
                    L'utilisateur dispose d'un droit d'accès, de rectification et de suppression 
                    de ses données personnelles.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 8 - Responsabilité
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    MH Advisory s'efforce de fournir des informations exactes et à jour sur le Site, 
                    mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations.
                  </p>
                  <p>
                    L'utilisation des informations et contenus disponibles sur l'ensemble du Site 
                    se fait sous l'entière responsabilité de l'utilisateur.
                  </p>
                  <p>
                    MH Advisory ne saurait être tenue responsable des dommages directs ou indirects 
                    résultant de l'utilisation du Site.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 9 - Disponibilité du Site
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    MH Advisory s'efforce d'assurer une disponibilité du Site 24h/24 et 7j/7, 
                    mais ne peut garantir une disponibilité continue.
                  </p>
                  <p>
                    Des interruptions peuvent survenir pour des raisons de maintenance, 
                    de mise à jour ou de force majeure.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 10 - Modification des Conditions
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    MH Advisory se réserve le droit de modifier les présentes conditions d'utilisation 
                    à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site.
                  </p>
                  <p>
                    Il appartient à l'utilisateur de consulter régulièrement les présentes conditions 
                    d'utilisation.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 11 - Droit Applicable et Juridiction
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Les présentes conditions d'utilisation sont soumises au droit français.
                  </p>
                  <p>
                    En cas de litige, les tribunaux compétents de Melun (Seine-et-Marne) seront seuls compétents.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 12 - Contact
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Pour toute question concernant les présentes conditions d'utilisation :
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
                  Article 13 - Acceptation
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    L'utilisation du Site implique l'acceptation pleine et entière des présentes 
                    conditions d'utilisation.
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

export default ConditionsUtilisationPage;
