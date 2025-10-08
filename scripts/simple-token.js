const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '..', 'client_secret_859505628661-0lld7ub2137hc2f3vpt335evpf547fct.apps.googleusercontent.com.json');
const TOKEN_PATH = path.join(__dirname, '..', 'token.json');

const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events'
];

async function generateToken() {
  console.log('🚀 Génération du token Google Calendar...\n');

  try {
    // Charger les credentials
    const content = fs.readFileSync(CREDENTIALS_PATH, 'utf-8');
    const credentials = JSON.parse(content);
    const { client_secret, client_id, redirect_uris } = credentials.web;

    // Créer le client OAuth2
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Vérifier si un token existe déjà
    if (fs.existsSync(TOKEN_PATH)) {
      const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8'));
      oAuth2Client.setCredentials(token);
      
      // Tester la connexion
      try {
        const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
        await calendar.calendarList.list();
        console.log('✅ Token existant valide et fonctionnel');
        return;
      } catch (error) {
        console.log('⚠️  Token existant expiré, génération d\'un nouveau token...');
      }
    }

    // Générer l'URL d'autorisation
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent'
    });

    console.log('🔗 Autorisez cette application en visitant cette URL:');
    console.log(authUrl);
    console.log('\n📋 Après autorisation, copiez le code d\'autorisation et collez-le ci-dessous.');

    // Lire le code d'autorisation
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const code = await new Promise((resolve) => {
      rl.question('\n🔑 Code d\'autorisation: ', (answer) => {
        rl.close();
        resolve(answer);
      });
    });

    // Échanger le code contre un token
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Sauvegarder le token
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
    console.log('✅ Token sauvegardé dans token.json');

    // Tester la connexion
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
    const response = await calendar.calendarList.list();
    
    console.log('\n📅 Calendriers disponibles:');
    response.data.items.forEach(cal => {
      console.log(`- ${cal.summary} (${cal.id})`);
    });

    console.log('\n🎉 Configuration Google Calendar terminée avec succès!');
    console.log('🚀 Vous pouvez maintenant utiliser le système de réservation');

  } catch (error) {
    console.error('\n❌ Erreur:', error.message);
    process.exit(1);
  }
}

generateToken();
