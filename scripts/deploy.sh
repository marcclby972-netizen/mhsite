#!/bin/bash

# Script de déploiement pour MH Advisory
# Usage: ./scripts/deploy.sh

set -e

echo "🚀 Déploiement de MH Advisory sur mhadvisory.fr"
echo "================================================"

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé. Exécutez ce script depuis la racine du projet."
    exit 1
fi

# Vérifier que Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Erreur: Node.js n'est pas installé."
    exit 1
fi

# Vérifier que npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ Erreur: npm n'est pas installé."
    exit 1
fi

echo "✅ Vérifications préliminaires OK"

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Build du projet
echo "🔨 Build du projet..."
npm run build

echo "✅ Build terminé avec succès"

# Vérifier que Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI n'est pas installé. Installation..."
    npm install -g vercel
fi

# Déploiement sur Vercel
echo "🚀 Déploiement sur Vercel..."
vercel --prod

echo "✅ Déploiement terminé !"
echo "🌐 Votre site est maintenant accessible sur mhadvisory.fr"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Configurez votre domaine dans Vercel Dashboard"
echo "2. Mettez à jour les enregistrements DNS"
echo "3. Testez toutes les fonctionnalités"
echo "4. Configurez Google Analytics (optionnel)"
echo ""
echo "🎉 Félicitations ! Votre site est en ligne !"
