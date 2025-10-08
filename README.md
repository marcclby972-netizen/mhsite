# MH Advisory - Site Web

Site web professionnel pour MH Advisory, agence de stratégie digitale.

## 🚀 Technologies Utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **TailwindCSS v3.4.0** - Framework CSS
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **Context API** - Gestion d'état du panier

## 🎨 Design

- **Thème** : Sombre, moderne, premium
- **Couleurs** : Rouge principal (#A51A1A), secondaire (#8B1515), fond (#151514), texte (#EAEAEA)
- **Style** : Glassmorphism, gradients subtils
- **Font** : Montserrat (Google Fonts)
- **Responsive** : Mobile-first

## 📁 Structure du Projet

```
src/
├── app/
│   ├── globals.css          # Styles Tailwind + custom
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   ├── offres/page.tsx      # Page des offres
│   ├── etudiants/page.tsx   # Page étudiants
│   ├── a-propos/page.tsx    # Page à propos
│   ├── contact/page.tsx     # Page contact
│   ├── mentions-legales/page.tsx
│   ├── cookies/page.tsx
│   ├── sitemap.ts           # Sitemap SEO
│   └── robots.ts            # Robots.txt
├── components/
│   ├── Header.tsx           # Navigation + panier
│   ├── Footer.tsx           # Pied de page
│   ├── ShoppingCart.tsx     # Panier d'achat
│   ├── AnimatedStats.tsx    # Statistiques animées
│   ├── DiagnosticBanner.tsx # Bannière diagnostic
│   └── CookieConsent.tsx    # Consentement cookies
└── context/
    └── CartContext.tsx      # Contexte panier
```

## 🛒 Fonctionnalités

### Pages
- **Accueil** : Hero, services, technologies, stats, promesse
- **Offres** : 3 packs (Starter 800€, Standard 1800€, Standard+ 2600€)
- **Étudiants** : Offre spéciale à partir de 200€ (sur devis)
- **À propos** : Équipe, valeurs, mission
- **Contact** : Formulaire complet avec validation
- **Pages légales** : Mentions légales, cookies

### Fonctionnalités Techniques
- **Panier** : Context API, localStorage, animations
- **Animations** : Framer Motion sur toutes les sections
- **Responsive** : Design adaptatif mobile-first
- **SEO** : Meta tags, sitemap, robots.txt
- **Accessibilité** : Navigation clavier, contrastes

## 🚀 Installation et Démarrage

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Linting ESLint

## 🎯 Fonctionnalités Clés

### Panier d'Achat
- Ajout/suppression d'articles
- Persistance localStorage
- Animations fluides
- Gestion offres "sur devis"

### Animations
- Fade-in, slide-up
- Hover effects
- Particules flottantes
- Transitions fluides

### SEO
- Meta tags optimisés
- Sitemap XML
- Robots.txt
- Structure sémantique

## 🔧 Configuration

### TailwindCSS
- Configuration personnalisée dans `tailwind.config.js`
- Couleurs, animations, et utilitaires custom
- Classes glassmorphism prédéfinies

### TypeScript
- Configuration stricte
- Types pour tous les composants
- IntelliSense complet

## 📱 Responsive Design

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- `primary` : #A51A1A
- `primary-dark` : #8B1515
- `background` : #151514
- `text` : #EAEAEA

### Animations
Animations personnalisées disponibles :
- `fade-in`, `slide-up`
- `float`, `pulse-slow`
- Classes utilitaires dans `globals.css`

## 📄 Licence

Projet propriétaire - MH Advisory © 2024

