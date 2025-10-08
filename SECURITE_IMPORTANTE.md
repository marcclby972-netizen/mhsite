# 🔒 IMPORTANT - Sécurité de vos Credentials

## ⚠️ **CE QUI S'EST PASSÉ**

GitHub a détecté des **secrets Google OAuth** dans un commit précédent :
- Client ID Google OAuth
- Client Secret Google OAuth

Ces informations étaient dans le fichier `CONFIGURATION_CALENDAR.md`.

## ✅ **CE QUI A ÉTÉ FAIT**

1. ✅ Suppression des fichiers contenant des secrets
2. ✅ Réinitialisation complète de l'historique Git
3. ✅ Nouveau commit propre SANS secrets
4. ✅ Push réussi sur GitHub

## 🔐 **ACTIONS DE SÉCURITÉ RECOMMANDÉES**

### **1. REGÉNÉRER VOS CREDENTIALS GOOGLE OAUTH**

**IMPORTANT** : Vos anciennes credentials ont été exposées. Vous devez les régénérer :

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Sélectionnez votre projet
3. APIs & Services > Credentials
4. Supprimez l'ancien Client ID OAuth 2.0
5. Créez un nouveau Client ID OAuth 2.0
6. Téléchargez le nouveau fichier JSON

### **2. METTRE À JOUR VOS CREDENTIALS LOCALEMENT**

```bash
# Sauvegardez le nouveau fichier credentials
mv ~/Downloads/client_secret_*.json /Users/marccy/Desktop/MHADVY/

# Régénérez le token
cd /Users/marccy/Desktop/MHADVY
node scripts/simple-token.js
```

### **3. CONFIGURER LES VARIABLES D'ENVIRONNEMENT VERCEL**

Quand vous déployez sur Vercel, ajoutez ces variables d'environnement :

```
GOOGLE_CLIENT_ID=<nouveau_client_id>
GOOGLE_CLIENT_SECRET=<nouveau_secret>
CALENDAR_ID=marc.clby.972@gmail.com
```

## 📋 **FICHIERS PROTÉGÉS PAR .gitignore**

Ces fichiers **NE SONT PAS** et **NE SERONT JAMAIS** sur GitHub :

- ✅ `token.json`
- ✅ `credentials.json`
- ✅ `client_secret_*.json`
- ✅ `.env.local`
- ✅ `.env`

## 🛡️ **BONNES PRATIQUES**

### **À FAIRE**
- ✅ Toujours utiliser `.env.local` pour les secrets
- ✅ Vérifier `.gitignore` avant de commit
- ✅ Utiliser des variables d'environnement
- ✅ Régénérer les credentials exposés

### **À NE JAMAIS FAIRE**
- ❌ Mettre des secrets dans des fichiers .md
- ❌ Commit des fichiers de credentials
- ❌ Partager des secrets en clair
- ❌ Utiliser les mêmes credentials partout

## 📝 **CHECKLIST DE SÉCURITÉ**

- [ ] Régénérer le Client ID Google OAuth
- [ ] Régénérer le Client Secret Google OAuth
- [ ] Télécharger le nouveau fichier credentials
- [ ] Mettre à jour les credentials localement
- [ ] Régénérer token.json
- [ ] Tester la connexion Google Calendar
- [ ] Configurer les variables d'environnement sur Vercel
- [ ] Supprimer l'ancien Client ID de Google Cloud Console

## 🆘 **EN CAS DE DOUTE**

Si vous pensez que d'autres credentials ont été exposés :

1. **Changez TOUS vos mots de passe**
2. **Révoque TOUS les tokens OAuth**
3. **Activez l'authentification à deux facteurs**
4. **Surveillez l'activité de vos comptes**

## 📞 **RESSOURCES**

- [Google Cloud Security](https://cloud.google.com/security)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

**✅ Votre code est maintenant propre sur GitHub, SANS aucun secret !**

**⚠️ N'oubliez pas de régénérer vos credentials Google OAuth !**
