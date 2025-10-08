# 🔒 Configuration HTTPS - MH Advisory

## 📋 **Vue d'ensemble**

Ce guide vous explique comment configurer HTTPS pour votre site MH Advisory en production.

## 🚀 **Options de Déploiement Recommandées**

### **Option 1 : Vercel (Recommandé)**
```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer le projet
vercel

# 3. Configurer le domaine personnalisé
vercel domains add mhadvisory.fr
```

**Avantages :**
- ✅ HTTPS automatique et gratuit
- ✅ CDN global intégré
- ✅ Optimisations Next.js automatiques
- ✅ Déploiements automatiques depuis Git

### **Option 2 : Netlify**
```bash
# 1. Installer Netlify CLI
npm i -g netlify-cli

# 2. Build du projet
npm run build

# 3. Déployer
netlify deploy --prod --dir=out
```

**Avantages :**
- ✅ HTTPS automatique
- ✅ Formulaires intégrés
- ✅ Fonctions serverless

### **Option 3 : Serveur VPS/Dédié**

#### **A. Avec Nginx + Let's Encrypt**
```bash
# 1. Installer Nginx
sudo apt update
sudo apt install nginx

# 2. Installer Certbot
sudo apt install certbot python3-certbot-nginx

# 3. Obtenir le certificat SSL
sudo certbot --nginx -d mhadvisory.fr -d www.mhadvisory.fr

# 4. Configuration Nginx automatique
```

#### **B. Configuration Nginx manuelle**
```nginx
server {
    listen 80;
    server_name mhadvisory.fr www.mhadvisory.fr;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name mhadvisory.fr www.mhadvisory.fr;
    
    ssl_certificate /etc/letsencrypt/live/mhadvisory.fr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mhadvisory.fr/privkey.pem;
    
    # Headers de sécurité
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 **Configuration Next.js pour HTTPS**

### **1. Mise à jour du next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration HTTPS
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
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
        ]
      }
    ]
  },
  
  // Redirection HTTPS
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http'
          }
        ],
        destination: 'https://mhadvisory.fr/:path*',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
```

### **2. Variables d'environnement**
```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://mhadvisory.fr
NEXTAUTH_URL=https://mhadvisory.fr
```

## 🛡️ **Headers de Sécurité**

### **Configuration complète des headers**
```javascript
// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()
  
  // Headers de sécurité
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  
  return response
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}
```

## 📊 **Vérification HTTPS**

### **1. Test en ligne**
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)
- [Security Headers](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)

### **2. Commandes de vérification**
```bash
# Vérifier le certificat
openssl s_client -connect mhadvisory.fr:443 -servername mhadvisory.fr

# Vérifier les headers
curl -I https://mhadvisory.fr

# Test de redirection HTTP -> HTTPS
curl -I http://mhadvisory.fr
```

## 🚨 **Checklist de Déploiement**

### **Avant le déploiement**
- [ ] Domaine configuré et pointant vers le serveur
- [ ] Certificat SSL valide
- [ ] Headers de sécurité configurés
- [ ] Redirections HTTP -> HTTPS
- [ ] Variables d'environnement de production

### **Après le déploiement**
- [ ] Site accessible en HTTPS
- [ ] Redirection HTTP fonctionnelle
- [ ] Headers de sécurité présents
- [ ] Score SSL Labs > A
- [ ] Performance optimisée

## 🔄 **Renouvellement Automatique**

### **Avec Certbot (Let's Encrypt)**
```bash
# Test du renouvellement
sudo certbot renew --dry-run

# Automatisation avec cron
echo "0 12 * * * /usr/bin/certbot renew --quiet" | sudo crontab -
```

### **Avec Vercel/Netlify**
- ✅ Renouvellement automatique inclus
- ✅ Aucune action requise

## 📞 **Support**

En cas de problème avec la configuration HTTPS :

1. **Vercel** : [Documentation Vercel](https://vercel.com/docs)
2. **Netlify** : [Documentation Netlify](https://docs.netlify.com/)
3. **Let's Encrypt** : [Documentation Let's Encrypt](https://letsencrypt.org/docs/)

---

**Note :** Ce guide couvre les configurations les plus courantes. Adaptez selon votre infrastructure.
