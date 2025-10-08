# 🚀 Déploiement MH Advisory - mhadvisory.fr

## ⚡ **DÉPLOIEMENT RAPIDE (5 minutes)**

### **Option 1 : Vercel (Recommandé)**

1. **Installer Vercel CLI**
```bash
npm install -g vercel
```

2. **Se connecter à Vercel**
```bash
vercel login
```

3. **Déployer**
```bash
vercel --prod
```

4. **Configurer le domaine**
- Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
- Sélectionnez votre projet
- Allez dans "Settings" > "Domains"
- Ajoutez `mhadvisory.fr`

### **Option 2 : Script automatisé**
```bash
./scripts/deploy.sh
```

---

## 🔧 **CONFIGURATION DNS**

### **Enregistrements à ajouter chez votre registrar :**

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

---

## 📧 **VARIABLES D'ENVIRONNEMENT**

Dans Vercel Dashboard > Settings > Environment Variables :

```
GOOGLE_CALENDAR_CREDENTIALS_PATH=/path/to/credentials.json
GOOGLE_CALENDAR_TOKEN_PATH=/path/to/token.json
CALENDAR_ID=marc.clby.972@gmail.com
NEXT_PUBLIC_SITE_URL=https://mhadvisory.fr
```

---

## ✅ **CHECKLIST POST-DÉPLOIEMENT**

- [ ] Site accessible sur `https://mhadvisory.fr`
- [ ] Redirection `www` → domaine principal
- [ ] HTTPS fonctionnel (cadenas vert)
- [ ] Toutes les pages se chargent
- [ ] Formulaire de contact fonctionne
- [ ] Système de réservation fonctionne
- [ ] Chat widget fonctionne
- [ ] Mobile responsive
- [ ] Vitesse de chargement < 3 secondes

---

## 🆘 **DÉPANNAGE**

### **Site ne se charge pas**
1. Vérifiez les enregistrements DNS
2. Attendez 24-48h pour la propagation DNS
3. Vérifiez la configuration Vercel

### **Erreurs 500**
1. Vérifiez les variables d'environnement
2. Consultez les logs Vercel
3. Vérifiez la configuration Google Calendar

### **HTTPS ne fonctionne pas**
1. Vercel configure HTTPS automatiquement
2. Vérifiez que le domaine est bien configuré
3. Attendez quelques minutes

---

## 📞 **SUPPORT**

- **Vercel** : [vercel.com/support](https://vercel.com/support)
- **DNS** : Contactez votre registrar
- **Documentation** : [nextjs.org/docs](https://nextjs.org/docs)

---

**🎉 Votre site sera bientôt en ligne sur mhadvisory.fr !**
