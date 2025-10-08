# 🚀 Guide de Déploiement - mhadvisory.fr

## ✅ **ÉTAPE 1 : PRÉPARATION TERMINÉE**

Votre site est maintenant prêt pour la production ! Le build s'est terminé avec succès.

---

## 🌐 **ÉTAPE 2 : CHOIX DE L'HÉBERGEUR**

### **Option A : Vercel (Recommandé)**
- ✅ **Gratuit** pour les projets personnels
- ✅ **HTTPS automatique**
- ✅ **Déploiement en 1 clic**
- ✅ **CDN global**
- ✅ **Optimisé pour Next.js**

### **Option B : Netlify**
- ✅ **Gratuit** avec limitations
- ✅ **HTTPS automatique**
- ✅ **Interface simple**

### **Option C : Hébergement VPS**
- ✅ **Contrôle total**
- ⚠️ **Configuration manuelle requise**

---

## 🚀 **ÉTAPE 3 : DÉPLOIEMENT SUR VERCEL (RECOMMANDÉ)**

### **3.1 Créer un compte Vercel**
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Sign Up"
3. Connectez-vous avec GitHub

### **3.2 Connecter votre projet**
1. Cliquez sur "New Project"
2. Importez votre repository GitHub
3. Vercel détectera automatiquement Next.js

### **3.3 Configuration du domaine**
1. Allez dans "Settings" > "Domains"
2. Ajoutez `mhadvisory.fr`
3. Vercel vous donnera les enregistrements DNS

---

## 🔧 **ÉTAPE 4 : CONFIGURATION DNS**

### **4.1 Enregistrements DNS à ajouter**
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### **4.2 Vérification DNS**
```bash
# Vérifier que le domaine pointe vers Vercel
nslookup mhadvisory.fr
```

---

## 🔒 **ÉTAPE 5 : CONFIGURATION HTTPS**

Vercel configure automatiquement HTTPS, mais vous pouvez forcer HTTPS :

### **5.1 Redirection HTTPS automatique**
Ajoutez dans `next.config.js` :
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://mhadvisory.fr/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## 📧 **ÉTAPE 6 : CONFIGURATION EMAIL**

### **6.1 Variables d'environnement**
Dans Vercel, ajoutez :
```
GOOGLE_CALENDAR_CREDENTIALS_PATH=/path/to/credentials.json
GOOGLE_CALENDAR_TOKEN_PATH=/path/to/token.json
CALENDAR_ID=marc.clby.972@gmail.com
```

### **6.2 Configuration Google Calendar**
1. Uploadez `client_secret_*.json` dans Vercel
2. Uploadez `token.json` dans Vercel
3. Testez la réservation de rendez-vous

---

## 🧪 **ÉTAPE 7 : TESTS DE PRODUCTION**

### **7.1 Tests à effectuer**
- [ ] Site accessible sur `https://mhadvisory.fr`
- [ ] Redirection `www.mhadvisory.fr` → `mhadvisory.fr`
- [ ] Toutes les pages se chargent correctement
- [ ] Formulaire de contact fonctionne
- [ ] Système de réservation fonctionne
- [ ] Chat widget fonctionne
- [ ] Recherche interne fonctionne
- [ ] Panier fonctionne
- [ ] Mobile responsive

### **7.2 Tests de performance**
```bash
# Test de vitesse
curl -w "@curl-format.txt" -o /dev/null -s "https://mhadvisory.fr"

# Test SSL
openssl s_client -connect mhadvisory.fr:443 -servername mhadvisory.fr
```

---

## 📊 **ÉTAPE 8 : MONITORING**

### **8.1 Analytics**
1. Ajoutez Google Analytics
2. Configurez Google Search Console
3. Surveillez les erreurs Vercel

### **8.2 Métriques importantes**
- Temps de chargement < 2 secondes
- Score Lighthouse > 90
- Taux de conversion des formulaires
- Erreurs 404/500

---

## 🚨 **ÉTAPE 9 : SÉCURITÉ**

### **9.1 Headers de sécurité**
Ajoutez dans `next.config.js` :
```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];
```

---

## 🎯 **ÉTAPE 10 : OPTIMISATIONS POST-DÉPLOIEMENT**

### **10.1 Optimisations immédiates**
1. **Images** : Remplacer `<img>` par `<Image>` de Next.js
2. **Cache** : Configurer le cache des pages statiques
3. **CDN** : Vercel utilise déjà un CDN global

### **10.2 Optimisations avancées**
1. **Lazy loading** des composants
2. **Code splitting** automatique
3. **Preloading** des ressources critiques

---

## 📞 **SUPPORT TECHNIQUE**

### **En cas de problème :**
1. **Vercel** : [vercel.com/support](https://vercel.com/support)
2. **DNS** : Contactez votre registrar de domaine
3. **Next.js** : [nextjs.org/docs](https://nextjs.org/docs)

---

## ✅ **CHECKLIST FINALE**

- [ ] Compte Vercel créé
- [ ] Projet déployé sur Vercel
- [ ] Domaine `mhadvisory.fr` configuré
- [ ] DNS configuré correctement
- [ ] HTTPS fonctionnel
- [ ] Tous les tests passent
- [ ] Monitoring configuré
- [ ] Site accessible publiquement

---

**🎉 Félicitations ! Votre site MH Advisory sera bientôt en ligne sur mhadvisory.fr !**

**Temps estimé total : 2-4 heures**
**Coût : Gratuit (avec Vercel)**
