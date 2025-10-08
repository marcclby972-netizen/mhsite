# 🚀 Configuration GitHub - MH Advisory

## ✅ **ÉTAPES TERMINÉES**

- ✅ Repository Git initialisé
- ✅ Fichier `.gitignore` créé
- ✅ Premier commit effectué (77 fichiers)

---

## 📋 **PROCHAINES ÉTAPES**

### **1. Créer un repository sur GitHub**

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton **"New"** (ou **"+"** en haut à droite > "New repository")
3. Remplissez les informations :
   - **Repository name** : `mhadvisory-website` (ou `MHADVY`)
   - **Description** : "Site web officiel de MH Advisory - Agence de stratégie digitale"
   - **Visibility** : 
     - ✅ **Private** (recommandé pour un site client)
     - ⚠️ **Public** (si vous voulez que le code soit visible)
   - ⚠️ **NE PAS** cocher "Add a README file"
   - ⚠️ **NE PAS** cocher "Add .gitignore"
   - ⚠️ **NE PAS** ajouter de licence

4. Cliquez sur **"Create repository"**

---

### **2. Connecter votre repository local à GitHub**

GitHub vous donnera des instructions. Utilisez ces commandes :

```bash
# Ajouter le remote GitHub (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE_USERNAME/mhadvisory-website.git

# Renommer la branche principale en 'main' si nécessaire
git branch -M main

# Pousser votre code sur GitHub
git push -u origin main
```

---

### **3. Commandes complètes à exécuter**

**Option A : HTTPS (recommandé pour commencer)**
```bash
cd /Users/marccy/Desktop/MHADVY

# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/mhadvisory-website.git
git branch -M main
git push -u origin main
```

**Option B : SSH (si vous avez configuré les clés SSH)**
```bash
cd /Users/marccy/Desktop/MHADVY

# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
git remote add origin git@github.com:VOTRE_USERNAME/mhadvisory-website.git
git branch -M main
git push -u origin main
```

---

## 🔐 **SÉCURITÉ**

### **Fichiers sensibles déjà exclus du Git :**
- ✅ `token.json` (Google Calendar)
- ✅ `credentials.json`
- ✅ `client_secret_*.json`
- ✅ `.env.local`
- ✅ `node_modules/`

**⚠️ IMPORTANT** : Ne partagez JAMAIS ces fichiers publiquement !

---

## 🌐 **DÉPLOIEMENT AVEC VERCEL + GITHUB**

Une fois votre code sur GitHub, vous pouvez déployer facilement :

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"New Project"**
3. **Importez votre repository GitHub**
4. Vercel détectera automatiquement Next.js
5. Configurez les variables d'environnement si nécessaire
6. Cliquez sur **"Deploy"**

**Avantages de GitHub + Vercel :**
- ✅ Déploiement automatique à chaque `git push`
- ✅ Preview des pull requests
- ✅ Rollback facile
- ✅ CI/CD intégré

---

## 📊 **ÉTAT ACTUEL**

```
Repository local : ✅ Prêt
Premier commit   : ✅ Fait (77 fichiers)
Remote GitHub    : ⏳ À configurer
Push GitHub      : ⏳ En attente
```

---

## 🆘 **PROBLÈMES COURANTS**

### **Erreur : "remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/VOTRE_USERNAME/mhadvisory-website.git
```

### **Erreur : "Permission denied (publickey)"**
Utilisez HTTPS au lieu de SSH, ou configurez vos clés SSH.

### **Erreur : "Authentication failed"**
Utilisez un Personal Access Token au lieu de votre mot de passe :
1. GitHub Settings > Developer settings > Personal access tokens
2. Generate new token
3. Utilisez ce token comme mot de passe

---

## ✅ **CHECKLIST FINALE**

- [ ] Repository créé sur GitHub
- [ ] Remote configuré
- [ ] Code poussé sur GitHub
- [ ] Repository visible sur github.com/VOTRE_USERNAME/mhadvisory-website
- [ ] Connexion avec Vercel (optionnel)

---

**🎉 Une fois sur GitHub, vous pourrez partager votre code et déployer facilement !**

---

## 📞 **BESOIN D'AIDE ?**

- Documentation Git : [git-scm.com/doc](https://git-scm.com/doc)
- Documentation GitHub : [docs.github.com](https://docs.github.com)
- Déploiement Vercel : [vercel.com/docs](https://vercel.com/docs)
