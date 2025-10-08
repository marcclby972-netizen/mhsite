

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Chemin vers le fichier client_secret
const CREDENTIALS_PATH = path.join(__dirname, '..', 'credentials', 'client_secret_859505628661-0lld7ub2137hc2f3vpt335evpf547fct.apps.googleusercontent.com.json');
const TOKEN_PATH = path.join(__dirname, '..', 'token.json');

// Scopes nécessaires pour Google Calendar
const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events'
];

/**
 * Lit les credentials depuis le fichier client_secret
 */
function loadCredentials() {
  try {
    const content = fs.readFileSync(CREDENTIALS_PATH);
    const credentials = JSON.parse(content);
    return credentials.web;
  } catch (error) {
    console.error('Erreur lors de la lecture des credentials:', error.message);
    process.exit(1);
  }
}

/**
 * Sauvegarde le token dans le fichier token.json
 */
function saveToken(token) {
  try {
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(token, null, 2));
    console.log('✅ Token sauvegardé dans token.json');
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du token:', error.message);
    process.exit(1);
  }
}

/**
 * Charge le token depuis le fichier token.json
 */
function loadToken() {
  try {
    if (fs.existsSync(TOKEN_PATH)) {
      const content = fs.readFileSync(TOKEN_PATH);
      return JSON.parse(content);
    }
    return null;
  } catch (error) {
    console.log('Aucun token existant trouvé');
    return null;
  }
}

/**
 * Génère un nouveau token d'accès
 */
async function generateNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent'
  });

  console.log('\n🔗 Autorisez cette application en visitant cette URL:');
  console.log(authUrl);
  console.log('\n📋 Après autorisation, copiez le code d\'autorisation et collez-le ci-dessous.');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question('\n🔑 Code d\'autorisation: ', async (code) => {
      rl.close();
      
      try {
        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);
        saveToken(tokens);
        resolve(tokens);
      } catch (error) {
        console.error('❌ Erreur lors de l\'échange du code:', error.message);
        reject(error);
      }
    });
  });
}

/**
 * Teste la connexion avec Google Calendar
 */
async function testCalendarConnection(auth) {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    const response = await calendar.calendarList.list();
    
    console.log('\n📅 Calendriers disponibles:');
    response.data.items.forEach(cal => {
      console.log(`- ${cal.summary} (${cal.id})`);
    });
    
    return true;
  } catch (error) {
    console.error('❌ Erreur lors du test de connexion:', error.message);
    return false;
  }
}

/**
 * Fonction principale
 */
async function main() {
  console.log('🚀 Génération du token Google Calendar pour MH Advisory\n');

  // Charger les credentials
  const credentials = loadCredentials();
  console.log('✅ Credentials chargés depuis client_secret.json');

  // Créer le client OAuth2
  const { client_secret, client_id, redirect_uris } = credentials;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Vérifier si un token existe déjà
  const existingToken = loadToken();
  
  if (existingToken) {
    console.log('📄 Token existant trouvé, vérification...');
    oAuth2Client.setCredentials(existingToken);
    
    // Tester la connexion
    const isConnected = await testCalendarConnection(oAuth2Client);
    
    if (isConnected) {
      console.log('✅ Token existant valide et fonctionnel');
      console.log('💡 Pour générer un nouveau token, supprimez le fichier token.json et relancez ce script');
      return;
    } else {
      console.log('⚠️  Token existant expiré, génération d\'un nouveau token...');
    }
  }

  // Générer un nouveau token
  try {
    await generateNewToken(oAuth2Client);
    
    // Tester la nouvelle connexion
    console.log('\n🧪 Test de la connexion...');
    const isConnected = await testCalendarConnection(oAuth2Client);
    
    if (isConnected) {
      console.log('\n🎉 Intégration Google Calendar configurée avec succès!');
      console.log('📝 Le token est sauvegardé dans token.json');
      console.log('🚀 Vous pouvez maintenant utiliser l\'API de réservation');
    } else {
      console.log('\n❌ Erreur lors de la configuration');
    }
    
  } catch (error) {
    console.error('\n❌ Erreur lors de la génération du token:', error.message);
    process.exit(1);
  }
}

// Exécuter le script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };
