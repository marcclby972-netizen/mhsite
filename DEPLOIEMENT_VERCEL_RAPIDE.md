# 🚀 Déploiement Vercel - Guide Rapide

## ✅ **VOTRE CODE EST PRÊT**

- ✅ Repository Git initialisé
- ✅ Code sur GitHub (sans secrets)
- ✅ Build de production testé
- ✅ Configuration Vercel prête

---

## 🎯 **DÉPLOIEMENT EN 3 ÉTAPES**

### **Méthode 1 : Via l'interface Vercel (RECOMMANDÉ - Plus simple)**

#### **Étape 1 : Créer un compte Vercel**
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Connectez-vous avec **GitHub**

#### **Étape 2 : Importer votre projet**
1. Cliquez sur **"Add New"** > **"Project"**
2. Sélectionnez votre repository **"mhsite"**
3. Vercel détectera automatiquement **Next.js**
4. Configuration :
   - **Framework Preset** : Next.js (auto-détecté)
   - **Root Directory** : ./
   - **Build Command** : `npm run build` (auto)
   - **Output Directory** : `.next` (auto)

#### **Étape 3 : Déployer**
1. Cliquez sur **"Deploy"**
2. Attendez 2-3 minutes
3. **Votre site est en ligne !** 🎉

---

### **Méthode 2 : Via CLI (Terminal)**

```bash
# 1. Se connecter à Vercel
npx vercel login

# 2. Ouvrir l'URL affichée dans le navigateur
# 3. Autoriser l'accès

# 4. Déployer
npx vercel

# 5. Répondre aux questions :
# ? Set up and deploy "~/Desktop/MHADVY"? [Y/n] y
# ? Which scope? [Votre compte]
# ? Link to existing project? [N/y] n
# ? What's your project's name? mhadvisory
# ? In which directory is your code located? ./

# 6. Déployer en production
npx vercel --prod
```

---

## 🌐 **CONFIGURER VOTRE DOMAINE mhadvisory.fr**

### **Après le déploiement :**

1. Allez dans votre projet sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur **"Settings"** > **"Domains"**
3. Cliquez sur **"Add"**
4. Entrez **"mhadvisory.fr"**
5. Cliquez sur **"Add"**

### **Vercel vous donnera les enregistrements DNS à ajouter :**

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### **Ajouter ces enregistrements chez votre registrar :**

1. Allez sur le site de votre registrar de domaine (ex: OVH, Gandi, Namecheap)
2. Allez dans la gestion DNS de **mhadvisory.fr**
3. Ajoutez les enregistrements ci-dessus
4. Attendez 24-48h pour la propagation DNS

---

## 🔐 **CONFIGURER LES VARIABLES D'ENVIRONNEMENT**

### **Important : Vos credentials Google Calendar**

1. Allez dans **Settings** > **Environment Variables**
2. Ajoutez ces variables :

```
GOOGLE_CLIENT_ID=<votre_nouveau_client_id>
GOOGLE_CLIENT_SECRET=<votre_nouveau_secret>
CALENDAR_ID=marc.clby.972@gmail.com
NEXT_PUBLIC_SITE_URL=https://mhadvisory.fr
```

3. Cliquez sur **"Save"**
4. **Redéployez** le projet pour prendre en compte les variables

---

## ✅ **CHECKLIST POST-DÉPLOIEMENT**

- [ ] Site accessible sur l'URL Vercel (ex: mhadvisory.vercel.app)
- [ ] Toutes les pages se chargent correctement
- [ ] Domaine mhadvisory.fr ajouté dans Vercel
- [ ] DNS configurés chez le registrar
- [ ] Variables d'environnement configurées
- [ ] HTTPS fonctionne (automatique)
- [ ] Mobile responsive vérifié
- [ ] Formulaires testés
- [ ] Chat widget fonctionne

---

## 🚀 **AVANTAGES VERCEL**

- ✅ **HTTPS automatique** (certificat SSL)
- ✅ **CDN global** (site rapide partout)
- ✅ **Déploiement automatique** à chaque git push
- ✅ **Preview des branches** (pour tester)
- ✅ **Analytics inclus**
- ✅ **Gratuit** pour les projets personnels
- ✅ **Optimisations Next.js** automatiques

---

## 📊 **URLS IMPORTANTES**

Après déploiement, vous aurez :

- **URL temporaire** : `https://mhadvisory.vercel.app`
- **URL production** : `https://mhadvisory.fr` (après config DNS)
- **Dashboard** : `https://vercel.com/dashboard`
- **Logs** : `https://vercel.com/[votre-projet]/deployments`

---

## 🆘 **PROBLÈMES COURANTS**

### **Build échoue**
```bash
# Tester localement
npm run build

# Si ça marche localement, c'est peut-être les variables d'env
```

### **Domaine ne fonctionne pas**
- Vérifier les enregistrements DNS
- Attendre 24-48h pour la propagation
- Vérifier avec : `nslookup mhadvisory.fr`

### **Variables d'environnement manquantes**
- Ajouter dans Settings > Environment Variables
- Redéployer le projet

---

## 📞 **SUPPORT**

- **Documentation Vercel** : [vercel.com/docs](https://vercel.com/docs)
- **Support Vercel** : [vercel.com/support](https://vercel.com/support)
- **Next.js Docs** : [nextjs.org/docs](https://nextjs.org/docs)

---

**🎉 Votre site sera en ligne dans quelques minutes sur Vercel !**

**Temps estimé total : 10-15 minutes**
