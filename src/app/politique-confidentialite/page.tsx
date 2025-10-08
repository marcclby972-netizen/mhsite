'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PolitiqueConfidentialitePage: React.FC = () => {
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
              Politique de <span className="gradient-text">Confidentialité</span>
            </h1>
            <p className="text-xl text-gray-400">
              Protection et traitement de vos données personnelles
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
                  1. Collecte des Données
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    MH Advisory collecte vos données personnelles lorsque vous :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Naviguez sur notre site internet</li>
                    <li>Remplissez nos formulaires de contact</li>
                    <li>Demandez un devis</li>
                    <li>Vous abonnez à notre newsletter</li>
                    <li>Utilisez nos services</li>
                  </ul>
                  <p>
                    Les données collectées incluent : nom, prénom, adresse email, numéro de téléphone, 
                    nom de l'entreprise, informations de facturation.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  2. Finalités du Traitement
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Nous utilisons vos données personnelles pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fournir nos services de conseil et de création</li>
                    <li>Traiter vos demandes de devis et commandes</li>
                    <li>Vous contacter concernant nos services</li>
                    <li>Améliorer notre site internet et nos services</li>
                    <li>Respecter nos obligations légales</li>
                    <li>Envoyer des communications marketing (avec votre consentement)</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  3. Base Légale du Traitement
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Le traitement de vos données personnelles est basé sur :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>L'exécution du contrat :</strong> pour la fourniture de nos services</li>
                    <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services</li>
                    <li><strong>Le consentement :</strong> pour les communications marketing</li>
                    <li><strong>L'obligation légale :</strong> pour la facturation et la comptabilité</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  4. Partage des Données
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données avec :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nos prestataires techniques (hébergement, emailing)</li>
                    <li>Nos partenaires commerciaux (avec votre consentement)</li>
                    <li>Les autorités compétentes (si requis par la loi)</li>
                  </ul>
                  <p>
                    Tous nos partenaires s'engagent à respecter le RGPD et à protéger vos données.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  5. Conservation des Données
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Nous conservons vos données personnelles pendant :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Données clients :</strong> 3 ans après la fin de la relation contractuelle</li>
                    <li><strong>Données de prospection :</strong> 3 ans après le dernier contact</li>
                    <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
                    <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  6. Vos Droits
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                    <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                    <li><strong>Droit d'effacement :</strong> supprimer vos données</li>
                    <li><strong>Droit à la limitation :</strong> restreindre le traitement</li>
                    <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                    <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
                  </ul>
                  <p>
                    Pour exercer ces droits, contactez-nous à : <strong>marc.hemat@mhadvisory.fr</strong>
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  7. Sécurité des Données
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chiffrement des données sensibles</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Formation de notre équipe à la protection des données</li>
                    <li>Audits de sécurité réguliers</li>
                    <li>Sauvegardes sécurisées</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  8. Cookies et Technologies Similaires
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience. 
                    Consultez notre <a href="/cookies" className="text-red-600 hover:underline">politique de cookies</a> pour plus d'informations.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  9. Transferts Internationaux
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Vos données sont traitées au sein de l'Union Européenne. 
                    En cas de transfert vers un pays tiers, nous nous assurons que des garanties 
                    appropriées sont mises en place.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  10. Contact et Réclamations
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Pour toute question concernant cette politique de confidentialité :
                  </p>
                  <ul className="list-none space-y-2">
                    <li><strong>Email :</strong> marc.hemat@mhadvisory.fr</li>
                    <li><strong>Téléphone :</strong> 07 81 22 93 36</li>
                    <li><strong>WhatsApp :</strong> 06 13 85 90 73</li>
                    <li><strong>Adresse :</strong> Ile de France, Seine-et-Marne, Oissery 77178</li>
                  </ul>
                  <p>
                    Vous pouvez également adresser une réclamation à la CNIL : 
                    <a href="https://www.cnil.fr" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer"> www.cnil.fr</a>
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  11. Modifications
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Cette politique de confidentialité peut être modifiée. 
                    Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
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

export default PolitiqueConfidentialitePage;
