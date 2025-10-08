# Configuration Google Calendar API

## Étapes de configuration

### 1. Créer un projet Google Cloud
1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API Google Calendar

### 2. Configurer OAuth2
1. Allez dans "APIs & Services" > "Credentials"
2. Cliquez sur "Create Credentials" > "OAuth 2.0 Client ID"
3. Configurez l'application :
   - Type: Web application
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

### 3. Variables d'environnement
Créez un fichier `.env.local` avec :

```env
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google
GOOGLE_ACCESS_TOKEN=your_access_token_here
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
GOOGLE_PROFESSIONAL_CALENDAR_ID=primary
GOOGLE_STUDENT_CALENDAR_ID=your_student_calendar_id_here
```

### 4. Obtenir les tokens d'accès
Pour obtenir les tokens d'accès, vous pouvez :

#### Option A: Via OAuth2 Playground
1. Allez sur [OAuth2 Playground](https://developers.google.com/oauthplayground/)
2. Sélectionnez "Google Calendar API v3"
3. Autorisez l'accès et récupérez les tokens

#### Option B: Via script Node.js
```javascript
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Générer l'URL d'autorisation
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/calendar']
});

console.log('Autorisez cette URL:', authUrl);
```

### 5. Calendriers
- **Calendrier professionnel** : Utilisez `primary` pour le calendrier principal
- **Calendrier étudiant** : Récupérez l'ID depuis Google Calendar (paramètres du calendrier)

### 6. Permissions nécessaires
L'application aura besoin des permissions :
- `https://www.googleapis.com/auth/calendar` : Lecture/écriture des calendriers
- `https://www.googleapis.com/auth/calendar.events` : Gestion des événements

## Test de la configuration

1. Démarrez le serveur : `npm run dev`
2. Allez sur `/contact`
3. Testez la prise de rendez-vous

## Dépannage

### Erreur "Invalid credentials"
- Vérifiez que les CLIENT_ID et CLIENT_SECRET sont corrects
- Assurez-vous que l'API Calendar est activée

### Erreur "Calendar not found"
- Vérifiez que les IDs de calendriers sont corrects
- Assurez-vous que l'application a accès aux calendriers

### Erreur "Access token expired"
- Utilisez le refresh token pour obtenir un nouveau access token
- Configurez la rotation automatique des tokens
