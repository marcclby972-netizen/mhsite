'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ConditionsGeneralesVentePage: React.FC = () => {
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
              Conditions <span className="gradient-text">Générales de Vente</span>
            </h1>
            <p className="text-xl text-gray-400">
              Conditions générales de vente des services MH Advisory
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
                    Les présentes conditions générales de vente (CGV) régissent les relations contractuelles 
                    entre MH Advisory, entreprise libérale non règlementée, SIREN 942 946 419, 
                    dont le siège social est situé Ile de France, Seine-et-Marne, Oissery 77178, France, 
                    et ses clients.
                  </p>
                  <p>
                    Elles s'appliquent à tous les services proposés par MH Advisory, notamment :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Conseil en stratégie digitale</li>
                    <li>Design d'identité visuelle</li>
                    <li>Développement d'outils digitaux</li>
                    <li>Audit et analyse</li>
                    <li>Stratégie de contenu</li>
                    <li>Services de webdesign</li>
                    <li>Création de logos et variantes</li>
                    <li>Mockups et visuels produits</li>
                    <li>Gestion des réseaux sociaux</li>
                  </ul>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 2 - Commandes
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Toute commande de services implique l'acceptation sans réserve des présentes CGV. 
                    Les commandes peuvent être passées par téléphone, email ou via le site internet.
                  </p>
                  <p>
                    MH Advisory se réserve le droit d'accepter ou de refuser toute commande pour un motif légitime.
                  </p>
                  <p>
                    Les prix indiqués sont exprimés en euros TTC et sont valables pour la durée mentionnée 
                    dans l'offre commerciale.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 3 - Tarifs et Modalités de Paiement
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Les tarifs des services sont indiqués sur le site internet et dans les devis. 
                    Ils sont exprimés en euros TTC.
                  </p>
                  <p>
                    <strong>Modalités de paiement :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Paiement à la commande pour les services inférieurs à 500€</li>
                    <li>Paiement en 2 fois : 50% à la commande, 50% à la livraison pour les services de 500€ à 1500€</li>
                    <li>Paiement en 3 fois : 40% à la commande, 30% à mi-parcours, 30% à la livraison pour les services supérieurs à 1500€</li>
                  </ul>
                  <p>
                    Les paiements s'effectuent par virement bancaire, chèque ou carte bancaire.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 4 - Exécution des Services
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Les services sont exécutés selon les modalités définies dans le devis ou le contrat de prestation.
                  </p>
                  <p>
                    Les délais de réalisation sont donnés à titre indicatif. En cas de retard, 
                    MH Advisory s'engage à informer le client et à proposer des solutions.
                  </p>
                  <p>
                    Le client s'engage à fournir tous les éléments nécessaires à la réalisation 
                    de la prestation dans les délais convenus.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 5 - Livraison et Réception
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    La livraison s'effectue par email ou via un lien de téléchargement sécurisé.
                  </p>
                  <p>
                    Le client dispose de 8 jours pour formuler ses éventuelles réserves. 
                    Passé ce délai, les services sont réputés conformes.
                  </p>
                  <p>
                    En cas de non-conformité, MH Advisory s'engage à corriger les éléments 
                    dans les plus brefs délais.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 6 - Propriété Intellectuelle
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Les créations réalisées par MH Advisory restent la propriété de MH Advisory 
                    jusqu'au paiement intégral de la facture.
                  </p>
                  <p>
                    Une fois le paiement effectué, les droits d'usage sont transférés au client 
                    selon les modalités définies dans le contrat.
                  </p>
                  <p>
                    Le client s'engage à respecter les droits de propriété intellectuelle 
                    de MH Advisory et de ses partenaires.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 7 - Garanties
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    MH Advisory garantit la conformité de ses services aux spécifications 
                    définies dans le contrat.
                  </p>
                  <p>
                    La garantie couvre les défauts de conception et de réalisation pendant 
                    une période de 6 mois à compter de la livraison.
                  </p>
                  <p>
                    En cas de défaut, MH Advisory s'engage à corriger ou remplacer 
                    les éléments défectueux.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 8 - Responsabilité
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    La responsabilité de MH Advisory est limitée au montant des sommes 
                    effectivement payées par le client.
                  </p>
                  <p>
                    MH Advisory ne saurait être tenue responsable des dommages indirects 
                    ou de la perte de profits.
                  </p>
                  <p>
                    Le client est seul responsable de l'utilisation qu'il fait des livrables 
                    et de leur conformité à la réglementation applicable.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 9 - Force Majeure
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Les parties ne pourront être tenues pour responsables si la non-exécution 
                    ou le retard dans l'exécution de l'une quelconque des obligations décrites 
                    dans les présentes CGV découle d'un cas de force majeure.
                  </p>
                  <p>
                    À ce titre, la force majeure s'entend de tout événement extérieur, 
                    imprévisible et irrésistible au sens de l'article 1148 du Code civil.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 10 - Droit Applicable et Juridiction
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Les présentes CGV sont soumises au droit français.
                  </p>
                  <p>
                    En cas de litige, les parties s'efforceront de trouver une solution amiable. 
                    À défaut, les tribunaux compétents de Melun (Seine-et-Marne) seront seuls compétents.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Article 11 - Modification des CGV
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    MH Advisory se réserve le droit de modifier les présentes CGV à tout moment. 
                    Les nouvelles conditions seront applicables dès leur mise en ligne.
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

export default ConditionsGeneralesVentePage;
